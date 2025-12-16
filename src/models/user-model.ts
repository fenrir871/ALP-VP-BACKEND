import { generateToken } from "../utils/jwt-util"

export interface UserJWTPayload {
    id: number
    name: string
    username: string
    phone: string
    email: string
}

export interface RegisterUserRequest {
    name: string
    username: string
    phone: string
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
    username: string
    phone: string
    email: string
    token?: string
}

export interface UpdateUserRequest {
    name: string
}

export function toUserResponse(
    id: number,
    name: string,
    username: string,
    phone: string,
    email: string,
    includeToken: boolean = true
): UserResponse {
    const response: UserResponse = {
        id: id,
        name: name,
        username: username,
        phone: phone,
        email: email,
    }

    if (includeToken) {
        response.token = generateToken(
            {
                id: id,
                name: name,
                username: username,
                phone: phone,
                email: email,
            },
            "1h"
        )
    }

    return response
}