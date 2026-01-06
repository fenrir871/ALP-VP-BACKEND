import { DailyActivity } from "../../generated/prisma/client"
import { ResponseError } from "../error/response-error"
import {
    CreateDailyActivityRequest,
    DailyActivityResponse,
    toDailyActivityResponse,
    UpdateDailyActivityRequest,
} from "../models/DailyActivity-model"
import { UserJWTPayload } from "../models/user-model"
import { prismaClient } from "../utils/database-util"
import { DailyActivityValidation } from "../validations/dailyactivity-validations"
import { Validation } from "../validations/validation"

export class DailyActivityService {
    static async getAllActivities(
        user: UserJWTPayload
    ): Promise<DailyActivityResponse[]> {
        const activities = await prismaClient.dailyActivity.findMany({
            where: {
                userId: user.id,
            },
            orderBy: {
                date: "desc",
            },
        })

        return activities.map((activity) =>
            toDailyActivityResponse(
                activity.id,
                activity.date,
                activity.steps,
                activity.sleepHours,
                activity.calories,
                activity.userId
            )
        )
    }

    static async getActivity(
        user: UserJWTPayload,
        activityId: number
    ): Promise<DailyActivityResponse> {
        const activity = await this.checkActivityExists(user.id, activityId)

        return toDailyActivityResponse(
            activity.id,
            activity.date,
            activity.steps,
            activity.sleepHours,
            activity.calories,
            activity.userId
        )
    }

    static async getActivityByDate(
        user: UserJWTPayload,
        date: Date | string
    ): Promise<DailyActivityResponse | null> {
        const activity = await prismaClient.dailyActivity.findFirst({
            where: {
                userId: user.id,
                date: new Date(date),
            },
        })

        if (!activity) {
            return null
        }

        return toDailyActivityResponse(
            activity.id,
            activity.date,
            activity.steps,
            activity.sleepHours,
            activity.calories,
            activity.userId
        )
    }

    static async checkActivityExists(
        userId: number,
        activityId: number
    ): Promise<DailyActivity> {
        const activity = await prismaClient.dailyActivity.findFirst({
            where: {
                userId: userId,
                id: activityId,
            },
        })

        if (!activity) {
            throw new ResponseError(404, "Activity not found!")
        }

        return activity
    }

    static async createActivity(
        user: UserJWTPayload,
        reqData: CreateDailyActivityRequest
    ): Promise<string> {
        const validatedData = Validation.validate(
            DailyActivityValidation.CREATE,
            reqData
        )

        // Check if activity already exists for this date
        const existingActivity = await prismaClient.dailyActivity.findFirst({
            where: {
                userId: user.id,
                date: new Date(validatedData.date),
            },
        })

        if (existingActivity) {
            throw new ResponseError(
                400,
                "Activity for this date already exists!"
            )
        }

        await prismaClient.dailyActivity.create({
            data: {
                date: new Date(validatedData.date),
                steps: validatedData.steps,
                sleepHours: validatedData.sleepHours,
                calories: validatedData.calories,
                waterIntake: validatedData.waterIntake ?? 0,
                userId: user.id,
            },
        })
        return "Activity data has been created successfully!"
    }

    static async updateActivity(
        user: UserJWTPayload,
        reqData: UpdateDailyActivityRequest,
        activityId: number
    ): Promise<string> {
        const validatedData = Validation.validate(
            DailyActivityValidation.UPDATE,
            reqData
        )

        await this.checkActivityExists(user.id, activityId)

        const updateData: any = {}
        if (validatedData.date !== undefined) {
            updateData.date = new Date(validatedData.date)
        }
        if (validatedData.steps !== undefined) {
            updateData.steps = validatedData.steps
        }
        if (validatedData.sleepHours !== undefined) {
            updateData.sleepHours = validatedData.sleepHours
        }
        if (validatedData.calories !== undefined) {
            updateData.calories = validatedData.calories
        }
        if (validatedData.waterIntake !== undefined) {
            updateData.waterIntake = validatedData.waterIntake
        }
        await prismaClient.dailyActivity.update({
            where: {
                id: activityId,
                userId: user.id,
            },
            data: updateData,
        })
        return "Activity data has been updated successfully!"
    }

    static async deleteActivity(
        user: UserJWTPayload,
        activityId: number
    ): Promise<string> {
        await this.checkActivityExists(user.id, activityId)

        await prismaClient.dailyActivity.delete({
            where: {
                id: activityId,
                userId: user.id,
            },
        })

        return "Activity data has been deleted successfully!"
    }

    static async getActivitiesByDateRange(
        user: UserJWTPayload,
        startDate: Date | string,
        endDate: Date | string
    ): Promise<DailyActivityResponse[]> {
        const activities = await prismaClient.dailyActivity.findMany({
            where: {
                userId: user.id,
                date: {
                    gte: new Date(startDate),
                    lte: new Date(endDate),
                },
            },
            orderBy: {
                date: "asc",
            },
        })

        return activities.map((activity) =>
            toDailyActivityResponse(
                activity.id,
                activity.date,
                activity.steps,
                activity.sleepHours,
                activity.calories,
                activity.userId
            )
        )
    }
}