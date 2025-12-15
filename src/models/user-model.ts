import { generateToken } from "../utils/jwt-util"

export interface UserJWTPayload {
    id: number
    name: string
    email: string
}

export interface RegisterUserRequest {
    name: string
    email: string
    password: string
}

export interface LoginUserRequest {
    email: string
    password: string
}

export interface UserResponse {
    id: number
    name: string
    email: string
    token?: string
}

export interface UpdateUserRequest {
    name?: string
    email?: string
    password?: string
}

export function toUserResponse(
    id: number,
    name: string,
    email: string,
    includeToken: boolean = true
): UserResponse {
    const response: UserResponse = {
        id: id,
        name: name,
        email: email,
    }

    if (includeToken) {
        response.token = generateToken(
            {
                id: id,
                name: name,
                email: email,
            },
            "1h"
        )
    }

    return response
}