import { prismaClient } from "../utils/database-util"
import { ResponseError } from "../error/response-error"
import {
    LoginUserRequest,
    RegisterUserRequest,
    UpdateUserRequest,
    UserResponse,
    toUserResponse,
} from "../models/user-model"
import { UserJWTPayload } from "../models/user-model"
import { UserValidation } from "../validations/user-validation"
import { Validation } from "../validations/validation"
import bcrypt from "bcrypt"
import { generateToken } from "../utils/jwt-util"
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
        const username = await prismaClient.user.findFirst({
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
                name: validatedData.fullName,
                username: validatedData.username,
                phone: validatedData.phone,
                email: validatedData.email,
                password: validatedData.password,
            },
        })
        const token = generateToken({ id: user.id, username: user.username, email: user.email })
        return toUserResponse(user.id, user.name, user.username, user.phone, user.email, 0, 0, true, token)
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
        // Get highest score from weekly summaries
        const highestScore = await this.getHighestScore(user.id)
        // Get friends count
        const friendsCount = await prismaClient.friends.count({
            where: {
                userId: user.id,
                status: "accepted"
            }
        })
        const token = generateToken({ id: user.id, username: user.username, email: user.email })
        return toUserResponse(user.id, user.name, user.username, user.phone, user.email, highestScore, friendsCount, true, token)
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
                userId: user.id,
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
                name: validatedData.fullName
            }
        })
        // Get highest score from weekly summaries
        const highestScore = await this.getHighestScore(updatedUser.id)
        // Get friends count
        const friendsCount = await prismaClient.friends.count({
            where: {
                userId: updatedUser.id,
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
                userId: userId
            },
            select: {
                scoreSteps: true,
                scoreSleep: true,
                scoreWater: true,
                scoreCalories: true
            }
        })
        if (weeklySummaries.length === 0) {
            return 0
        }
        // Calculate overall score for each week and find the highest
        const scores = weeklySummaries.map(summary => 
            Math.round(
                (summary.scoreSteps + summary.scoreSleep + summary.scoreWater + summary.scoreCalories) / 4
            )
        )
        return Math.max(...scores)
    }
}
