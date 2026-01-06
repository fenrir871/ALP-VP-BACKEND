import { WeeklySummary } from "../../generated/prisma/client"
import { ResponseError } from "../error/response-error"
import {
    WeeklySummaryResponse,
    WeeklySummaryCreateRequest,
    WeeklySummaryAnalytics,
    toWeeklySummaryResponse,
    toWeeklySummaryResponseList,
    toWeeklySummaryAnalytics,
    calculateScores
} from "../models/WeeklySummary-model"
import { UserJWTPayload } from "../models/user-model"
import { prismaClient } from "../utils/database-util"
import { WeeklySummaryValidation } from "../validations/WeeklySummary-validation"
import { Validation } from "../validations/validation"

export class WeeklySummaryService {
    static async getAllWeeklySummaries(
        user: UserJWTPayload
    ): Promise<WeeklySummaryResponse[]> {
        const weeklySummaries = await prismaClient.weeklySummary.findMany({
            where: {
                userId: user.id,
            },
            orderBy: {
                weekStartDate: "desc",
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
                userId: user.id,
                weekStartDate: weekStartDate,
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
                userId: user.id,
            },
            orderBy: {
                weekStartDate: "desc",
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
                userId: userId,
                id: weeklyId,
            },
        })

        if (!weeklySummary) {
            throw new ResponseError(404, "Weekly summary not found!")
        }

        return weeklySummary
    }

    static async generateWeeklySummary(
        user: UserJWTPayload,
        weekStartDate: string
    ): Promise<string> {
        const validatedData = Validation.validate(
            WeeklySummaryValidation.GENERATE,
            { weekStartDate: weekStartDate }
        )

        const parsedDate = new Date(validatedData.weekStartDate)

        // Calculate week end date (6 days after start)
        const weekEndDate = new Date(parsedDate)
        weekEndDate.setDate(weekEndDate.getDate() + 6)

        // Check if weekly summary already exists for this week
        const existingSummary = await prismaClient.weeklySummary.findFirst({
            where: {
                userId: user.id,
                weekStartDate: parsedDate,
            },
        })

        if (existingSummary) {
            throw new ResponseError(400, "Weekly summary already exists for this week!")
        }

        // Get all daily activities for the week
        const dailyActivities = await prismaClient.dailyActivity.findMany({
            where: {
                userId: user.id,
                date: {
                    gte: parsedDate,
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
                (sum, activity) => sum + activity.sleepHours,
                0
            ) / totalDays
        const avgWater =
            dailyActivities.reduce(
                (sum, activity) => sum + activity.waterIntake,
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
                userId: user.id,
                weekStartDate: parsedDate,
                avgSteps: Math.round(avgSteps),
                avgSleep: Math.round(avgSleep * 10) / 10, // 1 decimal place
                avgWater: Math.round(avgWater * 10) / 10,
                avgCalories: Math.round(avgCalories),
                scoreSteps: scores.scoreSteps,
                scoreSleep: scores.scoreSleep,
                scoreWater: scores.scoreWater,
                scoreCalories: scores.scoreCalories,
            },
        })

        return "Weekly summary has been generated successfully!"
    }

    static async createWeeklySummary(
        user: UserJWTPayload,
        reqData: WeeklySummaryCreateRequest
    ): Promise<string> {
        const validatedData = Validation.validate(
            WeeklySummaryValidation.CREATE,
            {
                ...reqData,
                userId: user.id
            }
        )

        const parsedDate = new Date(validatedData.weekStartDate)

        // Check if weekly summary already exists for this week
        const existingSummary = await prismaClient.weeklySummary.findFirst({
            where: {
                userId: user.id,
                weekStartDate: parsedDate,
            },
        })

        if (existingSummary) {
            throw new ResponseError(400, "Weekly summary already exists for this week!")
        }

        // Calculate scores
        const scores = calculateScores(
            validatedData.avgSteps,
            validatedData.avgSleep,
            validatedData.avgWater,
            validatedData.avgCalories
        )

        await prismaClient.weeklySummary.create({
            data: {
                userId: user.id,
                weekStartDate: parsedDate,
                avgSteps: validatedData.avgSteps,
                avgSleep: validatedData.avgSleep,
                avgWater: validatedData.avgWater,
                avgCalories: validatedData.avgCalories,
                scoreSteps: scores.scoreSteps,
                scoreSleep: scores.scoreSleep,
                scoreWater: scores.scoreWater,
                scoreCalories: scores.scoreCalories,
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
                id: weeklyId,
            },
        })

        return "Weekly summary has been deleted successfully!"
    }
}
