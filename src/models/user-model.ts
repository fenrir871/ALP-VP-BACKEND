import { generateToken } from "../utils/jwt-util"

export interface UserJWTPayload {
    id: number
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
    highest_score: number
    friends_count: number
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
    highest_score: number,
    friends_count: number,
    includeToken: boolean = true
): UserResponse {
    const response: UserResponse = {
        id: id,
        name: name,
        username: username,
        phone: phone,
        highest_score: highest_score,
        friends_count: friends_count,
        email: email,
    }

    if (includeToken) {
        response.token = generateToken(
            {
                id: id,
                email: email,
            },
            "1h"
        )
    }

    return response
}