export interface DailyActivityPayload {
    id: number
    date: Date
    steps: number
    sleepHours: number
    calories: number
    userId: number
}

export interface CreateDailyActivityRequest {
    date: Date | string
    steps: number
    sleepHours: number
    calories: number
    userId: number
    waterIntake?: number
}

export interface UpdateDailyActivityRequest {
    date?: Date | string
    steps?: number
    sleepHours?: number
    calories?: number
    waterIntake?: number
}

export interface DailyActivityResponse {
    id: number
    date: Date
    steps: number
    sleepHours: number
    calories: number
    userId: number
}

export function toDailyActivityResponse(
    id: number,
    date: Date,
    steps: number,
    sleepHours: number,
    calories: number,
    userId: number
): DailyActivityResponse {
    return {
        id: id,
        date: date,
        steps: steps,
        sleepHours: sleepHours,
        calories: calories,
        userId: userId,
    }
}