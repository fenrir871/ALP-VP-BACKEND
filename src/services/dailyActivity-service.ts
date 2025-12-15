import { TodayActivity } from "../../generated/prisma/client"
import { ResponseError } from "../error/response-error"
import {
    CreateTodayActivityRequest,
    TodayActivityResponse,
    toTodayActivityResponse,
    UpdateTodayActivityRequest,
} from "../models/TodayActivity-model"
import { UserJWTPayload } from "../models/user-model"
import { prismaClient } from "../utils/database-util"
import { DailyActivityValidation } from "../validations/dailyactivity-validations"
import { Validation } from "../validations/validation"

export class DailyActivityService {
    static async getAllActivities(
        user: UserJWTPayload
    ): Promise<TodayActivityResponse[]> {
        const activities = await prismaClient.todayActivity.findMany({
            where: {
                user_id: user.id,
            },
            orderBy: {
                date: "desc",
            },
        })

        return activities.map((activity) =>
            toTodayActivityResponse(
                activity.id,
                activity.date,
                activity.steps,
                activity.sleep_hours,
                activity.calories,
                activity.user_id
            )
        )
    }

    static async getActivity(
        user: UserJWTPayload,
        activityId: number
    ): Promise<TodayActivityResponse> {
        const activity = await this.checkActivityExists(user.id, activityId)

        return toTodayActivityResponse(
            activity.id,
            activity.date,
            activity.steps,
            activity.sleep_hours,
            activity.calories,
            activity.user_id
        )
    }

    static async getActivityByDate(
        user: UserJWTPayload,
        date: Date | string
    ): Promise<TodayActivityResponse | null> {
        const activity = await prismaClient.todayActivity.findFirst({
            where: {
                user_id: user.id,
                date: new Date(date),
            },
        })

        if (!activity) {
            return null
        }

        return toTodayActivityResponse(
            activity.id,
            activity.date,
            activity.steps,
            activity.sleep_hours,
            activity.calories,
            activity.user_id
        )
    }

    static async checkActivityExists(
        userId: number,
        activityId: number
    ): Promise<TodayActivity> {
        const activity = await prismaClient.todayActivity.findFirst({
            where: {
                user_id: userId,
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
        reqData: CreateTodayActivityRequest
    ): Promise<string> {
        const validatedData = Validation.validate(
            DailyActivityValidation.CREATE,
            reqData
        )

        // Check if activity already exists for this date
        const existingActivity = await prismaClient.todayActivity.findFirst({
            where: {
                user_id: user.id,
                date: new Date(validatedData.date),
            },
        })

        if (existingActivity) {
            throw new ResponseError(
                400,
                "Activity for this date already exists!"
            )
        }

        await prismaClient.todayActivity.create({
            data: {
                date: new Date(validatedData.date),
                steps: validatedData.steps,
                sleep_hours: validatedData.sleep_hours,
                calories: validatedData.calories,
                user_id: user.id,
            },
        })

        return "Activity data has been created successfully!"
    }

    static async updateActivity(
        user: UserJWTPayload,
        reqData: UpdateTodayActivityRequest,
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
        if (validatedData.sleep_hours !== undefined) {
            updateData.sleep_hours = validatedData.sleep_hours
        }
        if (validatedData.calories !== undefined) {
            updateData.calories = validatedData.calories
        }

        await prismaClient.todayActivity.update({
            where: {
                id: activityId,
                user_id: user.id,
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

        await prismaClient.todayActivity.delete({
            where: {
                id: activityId,
                user_id: user.id,
            },
        })

        return "Activity data has been deleted successfully!"
    }

    static async getActivitiesByDateRange(
        user: UserJWTPayload,
        startDate: Date | string,
        endDate: Date | string
    ): Promise<TodayActivityResponse[]> {
        const activities = await prismaClient.todayActivity.findMany({
            where: {
                user_id: user.id,
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
            toTodayActivityResponse(
                activity.id,
                activity.date,
                activity.steps,
                activity.sleep_hours,
                activity.calories,
                activity.user_id
            )
        )
    }
}