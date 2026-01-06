export interface TodayActivityPayload {
    id: number
    date: Date
    steps: number
    sleep_hours: number
    calories: number
    user_id: number
}

export interface CreateTodayActivityRequest {
    date: Date | string
    steps: number
    sleep_hours: number
    calories: number
    user_id: number
    water_intake?: number
}

export interface UpdateTodayActivityRequest {
    date?: Date | string
    steps?: number
    sleep_hours?: number
    calories?: number
    water_intake?: number
}

export interface TodayActivityResponse {
    id: number
    date: Date
    steps: number
    sleep_hours: number
    calories: number
    user_id: number
}

export function toTodayActivityResponse(
    id: number,
    date: Date,
    steps: number,
    sleep_hours: number,
    calories: number,
    user_id: number
): TodayActivityResponse {
    return {
        id: id,
        date: date,
        steps: steps,
        sleep_hours: sleep_hours,
        calories: calories,
        user_id: user_id,
    }
}