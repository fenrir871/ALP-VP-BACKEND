export interface UserResponse {
    id: number
    fullName: string
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
    fullName: string
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
    fullName: string
}
export function toUserResponse(
    id: number,
    fullName: string,
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
        fullName,
        username,
        phone,
        email,
        highestScore,
        friendsCount,
        ...(includeToken && token ? { token } : {})
    }
}
