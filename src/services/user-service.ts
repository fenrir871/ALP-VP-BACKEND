import { ResponseError } from "../error/response-error"
import { LoginUserRequest, RegisterUserRequest, UpdateUserRequest, UserJWTPayload, UserResponse } from "../models/user-model"
import { prismaClient } from "../utils/database-util"
import { UserValidation } from "../validations/user-validation"
import { Validation } from "../validations/validation"
import bcrypt from "bcrypt"
import { generateToken } from "../utils/token-util"

export class UserService {
    static async register(request: RegisterUserRequest): Promise<UserResponse> {
        const validatedData = Validation.validate(
            UserValidation.REGISTER,
            request
        )

        const email = await prismaClient.user.findFirst({
            where: {
                email: validatedData.email,
            },
        })

        if (email) {
            throw new ResponseError(400, "Email has already existed!")
        }

        const username = await prismaClient.user.findUnique({
            where:{
                username: validatedData.username
            },
            
        })

        if (username) {
            throw new ResponseError(400, "Username has already existed!")
        }

        validatedData.password = await bcrypt.hash(validatedData.password, 10)

        const user = await prismaClient.user.create({
            data: {
                name: validatedData.name,
                username: validatedData.username,
                phone: validatedData.phone,
                email: validatedData.email,
                password: validatedData.password,
            },
        })

        return toUserResponse(user.id, user.name, user.username, user.phone, user.email, 0, 0, true)
    }

    static async login(request: LoginUserRequest): Promise<UserResponse> {
        const validatedData = Validation.validate(UserValidation.LOGIN, request)

        const user = await prismaClient.user.findFirst({
            where: {
                email: validatedData.email,
            },
        })

        if (!user) {
            throw new ResponseError(400, "Invalid email or password!")
        }

        const passwordIsValid = await bcrypt.compare(
            validatedData.password,
            user.password
        )

        if (!passwordIsValid) {
            throw new ResponseError(400, "Invalid email or password!")
        }

        const token = jwt.sign(
            { id: user.id, username: user.username },
            process.env.JWT_SECRET!,
            { expiresIn: "7d" }
        )

        // Get highest score from weekly summaries
        const highestScore = await this.getHighestScore(user.id)

        // Get friends count
        const friendsCount = await prismaClient.friends.count({
            where: {
                user_id: user.id,
                status: "accepted"
            }
        })

        return toUserResponse(user.id, user.name, user.username, user.phone, user.email, highestScore, friendsCount, true)
    }

    static async getCurrentUser(userPayload: UserJWTPayload): Promise<UserResponse> {
        const user = await prismaClient.user.findUnique({
            where: {
                id: userPayload.id
            }
        })

        if (!user) {
            throw new ResponseError(404, "User not found!")
        }

        // Get highest score from weekly summaries
        const highestScore = await this.getHighestScore(user.id)

        // Get friends count
        const friendsCount = await prismaClient.friends.count({
            where: {
                user_id: user.id,
                status: "accepted"
            }
        })

        return toUserResponse(user.id, user.name, user.username, user.phone, user.email, highestScore, friendsCount, false)
    }

    static async updateUser(
        userPayload: UserJWTPayload,
        request: UpdateUserRequest
    ): Promise<UserResponse> {
        const validatedData = Validation.validate(UserValidation.UPDATE, request)

        const user = await prismaClient.user.findUnique({
            where: {
                id: userPayload.id
            }
        })

        if (!user) {
            throw new ResponseError(404, "User not found!")
        }

        const updatedUser = await prismaClient.user.update({
            where: {
                id: userPayload.id
            },
            data: {
                name: validatedData.name
            }
        })

        // Get highest score from weekly summaries
        const highestScore = await this.getHighestScore(updatedUser.id)

        // Get friends count
        const friendsCount = await prismaClient.friends.count({
            where: {
                user_id: updatedUser.id,
                status: "accepted"
            }
        })

        return toUserResponse(
            updatedUser.id,
            updatedUser.name,
            updatedUser.username,
            updatedUser.phone,
            updatedUser.email,
            highestScore,
            friendsCount,
            false
        )
    }

    private static async getHighestScore(userId: number): Promise<number> {
        const weeklySummaries = await prismaClient.weeklySummary.findMany({
            where: {
                user_id: userId
            },
            select: {
                score_steps: true,
                score_sleep: true,
                score_water: true,
                score_calories: true
            }
        })

        if (weeklySummaries.length === 0) {
            return 0
        }

        // Calculate overall score for each week and find the highest
        const scores = weeklySummaries.map(summary => 
            Math.round(
                (summary.score_steps + summary.score_sleep + summary.score_water + summary.score_calories) / 4
            )
        )

        return Math.max(...scores)
    }
}

export function toUserResponse(
    id: number,
    name: string,
    username: string,
    phone: string,
    email: string,
    highestScore: number,
    friendsCount: number,
    includeToken: boolean = true
): UserResponse {
    return {
        id,
        name,
        username,
        phone,
        email,
        highest_score: highestScore,
        friends_count: friendsCount,
        ...(includeToken && { token: generateToken({ id, email }) })
    }
}
