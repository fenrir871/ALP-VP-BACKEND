import { Request, Response, NextFunction } from "express"
import {
    LoginUserRequest,
    RegisterUserRequest,
    UpdateUserRequest,
    UserResponse,
} from "../models/user-model"
import { UserService } from "../services/user-service"
import { UserRequest } from "../models/user-request-model"

export class UserController {
    static async register(req: Request, res: Response, next: NextFunction) {
        try {
            const request: RegisterUserRequest = req.body as RegisterUserRequest
            const response: UserResponse = await UserService.register(request)

            res.status(200).json({
                success: true,
                data: response,
            })
        } catch (error) {
            next(error)
        }
    }

    static async login(req: Request, res: Response, next: NextFunction) {
        try {
            const request: LoginUserRequest = req.body as LoginUserRequest
            const response: UserResponse = await UserService.login(request)

            res.status(200).json({
                success: true,
                data: response,
            })
        } catch (error) {
            next(error)
        }
    }

    static async getCurrentUser(req: UserRequest, res: Response, next: NextFunction) {
        try {
            const response: UserResponse = await UserService.getCurrentUser(req.user!)

            res.status(200).json({
                success: true,
                data: response,
            })
        } catch (error) {
            next(error)
        }
    }

    static async updateUser(req: UserRequest, res: Response, next: NextFunction) {
        try {
            const request: UpdateUserRequest = req.body as UpdateUserRequest
            const response: UserResponse = await UserService.updateUser(req.user!, request)

            res.status(200).json({
                success: true,
                message: "User updated successfully",
                data: response,
            })
        } catch (error) {
            next(error)
        }
    }

    static async searchUsers(req: UserRequest, res: Response, next: NextFunction) {
    try {
        const query = req.query.q as string || ''
        
        if (!query || query.trim().length < 2) {
            return res.status(400).json({
                success: false,
                message: 'Search query must be at least 2 characters'
            })
        }

        const results = await UserService.searchUsers(req.user!.id, query.trim())

        res.status(200).json({
            success: true,
            message: 'Search results retrieved',
            data: results
        })
    } catch (error) {
        next(error)
    }
}
}
