import { generateToken } from "../utils/jwt-util"

export interface UserResponse {
    id: number
    name: string
    username: string
    phone: string
    email: string
    highestScore: number
    friendsCount: number
    token?: string
}

export interface UserJWTPayload {
    id: number
    username: string
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

export interface UpdateUserRequest {
    name: string
}

export function toUserResponse(
    id: number,
    name: string,
    username: string,
    phone: string,
    email: string,
    highestScore: number,
    friendsCount: number,
    includeToken: boolean,
    token?: string
): UserResponse {
    return {
        id,
        name,
        username,
        phone,
        email,
        highestScore,
        friendsCount,
        ...(includeToken && token ? { token } : {})
    }
}