import { WeeklySummary } from "../../generated/prisma"
import { ResponseError } from "../error/response-error"
import {
    WeeklySummaryResponse,
    WeeklySummaryCreateRequest,
    WeeklySummaryAnalytics,
    toWeeklySummaryResponse,
    toWeeklySummaryResponseList,
    toWeeklySummaryAnalytics,
    calculateScores
} from "../models/weekly-summary-model"
import { UserJWTPayload } from "../models/user-model"
import { prismaClient } from "../utils/database-util"

export class WeeklySummaryService {
    static async getAllWeeklySummaries(
        user: UserJWTPayload
    ): Promise<WeeklySummaryResponse[]> {
        const weeklySummaries = await prismaClient.weeklySummary.findMany({
            where: {
                user_id: user.id,
            },
            orderBy: {
                week_start_date: "desc",
            },
        })

        return toWeeklySummaryResponseList(weeklySummaries)
    }

    static async getWeeklySummary(
        user: UserJWTPayload,
        weeklyId: number
    ): Promise<WeeklySummaryResponse> {
        const weeklySummary = await this.checkWeeklySummaryExists(
            user.id,
            weeklyId
        )

        return toWeeklySummaryResponse(weeklySummary)
    }

    static async getWeeklySummaryByDate(
        user: UserJWTPayload,
        weekStartDate: Date
    ): Promise<WeeklySummaryResponse> {
        const weeklySummary = await prismaClient.weeklySummary.findFirst({
            where: {
                user_id: user.id,
                week_start_date: weekStartDate,
            },
        })

        if (!weeklySummary) {
            throw new ResponseError(404, "Weekly summary not found for this date!")
        }

        return toWeeklySummaryResponse(weeklySummary)
    }

    static async getWeeklySummaryAnalytics(
        user: UserJWTPayload,
        weeklyId: number
    ): Promise<WeeklySummaryAnalytics> {
        const weeklySummary = await this.checkWeeklySummaryExists(
            user.id,
            weeklyId
        )

        return toWeeklySummaryAnalytics(weeklySummary)
    }

    static async getLatestWeeklySummary(
        user: UserJWTPayload
    ): Promise<WeeklySummaryResponse> {
        const weeklySummary = await prismaClient.weeklySummary.findFirst({
            where: {
                user_id: user.id,
            },
            orderBy: {
                week_start_date: "desc",
            },
        })

        if (!weeklySummary) {
            throw new ResponseError(404, "No weekly summary found!")
        }

        return toWeeklySummaryResponse(weeklySummary)
    }

    static async checkWeeklySummaryExists(
        userId: number,
        weeklyId: number
    ): Promise<WeeklySummary> {
        const weeklySummary = await prismaClient.weeklySummary.findFirst({
            where: {
                user_id: userId,
                weekly_id: weeklyId,
            },
        })

        if (!weeklySummary) {
            throw new ResponseError(404, "Weekly summary not found!")
        }

        return weeklySummary
    }

    static async generateWeeklySummary(
        user: UserJWTPayload,
        weekStartDate: Date
    ): Promise<string> {
        // Calculate week end date (6 days after start)
        const weekEndDate = new Date(weekStartDate)
        weekEndDate.setDate(weekEndDate.getDate() + 6)

        // Check if weekly summary already exists for this week
        const existingSummary = await prismaClient.weeklySummary.findFirst({
            where: {
                user_id: user.id,
                week_start_date: weekStartDate,
            },
        })

        if (existingSummary) {
            throw new ResponseError(400, "Weekly summary already exists for this week!")
        }

        // Get all daily activities for the week
        const dailyActivities = await prismaClient.todayActivity.findMany({
            where: {
                user_id: user.id,
                date: {
                    gte: weekStartDate,
                    lte: weekEndDate,
                },
            },
        })

        if (dailyActivities.length === 0) {
            throw new ResponseError(400, "No daily activities found for this week!")
        }

        // Calculate averages
        const totalDays = dailyActivities.length
        const avgSteps =
            dailyActivities.reduce((sum, activity) => sum + activity.steps, 0) /
            totalDays
        const avgSleep =
            dailyActivities.reduce(
                (sum, activity) => sum + activity.sleep_hours,
                0
            ) / totalDays
        const avgWater =
            dailyActivities.reduce(
                (sum, activity) => sum + activity.water_glasses,
                0
            ) / totalDays
        const avgCalories =
            dailyActivities.reduce(
                (sum, activity) => sum + activity.calories,
                0
            ) / totalDays

        // Calculate scores
        const scores = calculateScores(avgSteps, avgSleep, avgWater, avgCalories)

        // Create weekly summary
        await prismaClient.weeklySummary.create({
            data: {
                user_id: user.id,
                week_start_date: weekStartDate,
                avg_steps: Math.round(avgSteps),
                avg_sleep: Math.round(avgSleep * 10) / 10, // 1 decimal place
                avg_water: Math.round(avgWater * 10) / 10,
                avg_calories: Math.round(avgCalories),
                score_steps: scores.score_steps,
                score_sleep: scores.score_sleep,
                score_water: scores.score_water,
                score_calories: scores.score_calories,
            },
        })

        return "Weekly summary has been generated successfully!"
    }

    static async createWeeklySummary(
        user: UserJWTPayload,
        reqData: WeeklySummaryCreateRequest
    ): Promise<string> {
        // Check if weekly summary already exists for this week
        const existingSummary = await prismaClient.weeklySummary.findFirst({
            where: {
                user_id: user.id,
                week_start_date: reqData.week_start_date,
            },
        })

        if (existingSummary) {
            throw new ResponseError(400, "Weekly summary already exists for this week!")
        }

        // Calculate scores
        const scores = calculateScores(
            reqData.avg_steps,
            reqData.avg_sleep,
            reqData.avg_water,
            reqData.avg_calories
        )

        await prismaClient.weeklySummary.create({
            data: {
                user_id: user.id,
                week_start_date: reqData.week_start_date,
                avg_steps: reqData.avg_steps,
                avg_sleep: reqData.avg_sleep,
                avg_water: reqData.avg_water,
                avg_calories: reqData.avg_calories,
                score_steps: scores.score_steps,
                score_sleep: scores.score_sleep,
                score_water: scores.score_water,
                score_calories: scores.score_calories,
            },
        })

        return "Weekly summary has been created successfully!"
    }

    static async deleteWeeklySummary(
        user: UserJWTPayload,
        weeklyId: number
    ): Promise<string> {
        await this.checkWeeklySummaryExists(user.id, weeklyId)

        await prismaClient.weeklySummary.delete({
            where: {
                weekly_id: weeklyId,
            },
        })

        return "Weekly summary has been deleted successfully!"
    }
}
