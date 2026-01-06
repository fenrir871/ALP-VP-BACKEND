import { Request, Response, NextFunction } from "express"
import { UserRequest } from "../models/user-request-model"
import { WeeklySummaryService } from "../services/WeeklySummary-service"
import { WeeklySummaryCreateRequest } from "../models/WeeklySummary-model"

export class WeeklySummaryController {
    static async getAllWeeklySummaries(
        req: UserRequest,
        res: Response,
        next: NextFunction
    ) {
        try {
            const response = await WeeklySummaryService.getAllWeeklySummaries(
                req.user!
            )

            res.status(200).json({
                data: response,
            })
        } catch (error) {
            next(error)
        }
    }

    static async getWeeklySummary(
        req: UserRequest,
        res: Response,
        next: NextFunction
    ) {
        try {
            const weeklyId = Number(req.params.weeklyId)

            const response = await WeeklySummaryService.getWeeklySummary(
                req.user!,
                weeklyId
            )

            res.status(200).json({
                data: response,
            })
        } catch (error) {
            next(error)
        }
    }

    static async getLatestWeeklySummary(
        req: UserRequest,
        res: Response,
        next: NextFunction
    ) {
        try {
            const response = await WeeklySummaryService.getLatestWeeklySummary(
                req.user!
            )

            res.status(200).json({
                data: response,
            })
        } catch (error) {
            next(error)
        }
    }

    static async getWeeklySummaryByDate(
        req: UserRequest,
        res: Response,
        next: NextFunction
    ) {
        try {
            const weekStartDate = new Date(req.params.date)

            const response = await WeeklySummaryService.getWeeklySummaryByDate(
                req.user!,
                weekStartDate
            )

            res.status(200).json({
                data: response,
            })
        } catch (error) {
            next(error)
        }
    }

    static async getWeeklySummaryAnalytics(
        req: UserRequest,
        res: Response,
        next: NextFunction
    ) {
        try {
            const weeklyId = Number(req.params.weeklyId)

            const response =
                await WeeklySummaryService.getWeeklySummaryAnalytics(
                    req.user!,
                    weeklyId
                )

            res.status(200).json({
                data: response,
            })
        } catch (error) {
            next(error)
        }
    }

    static async generateWeeklySummary(
        req: UserRequest,
        res: Response,
        next: NextFunction
    ) {
        try {
            const weekStartDate = req.body.weekStartDate as string

            const response = await WeeklySummaryService.generateWeeklySummary(
                req.user!,
                weekStartDate
            )

            res.status(200).json({
                data: response,
            })
        } catch (error) {
            next(error)
        }
    }

    static async createWeeklySummary(
        req: UserRequest,
        res: Response,
        next: NextFunction
    ) {
        try {
            const reqData = req.body as WeeklySummaryCreateRequest

            const response = await WeeklySummaryService.createWeeklySummary(
                req.user!,
                reqData
            )

            res.status(200).json({
                data: response,
            })
        } catch (error) {
            next(error)
        }
    }

    static async deleteWeeklySummary(
        req: UserRequest,
        res: Response,
        next: NextFunction
    ) {
        try {
            const weeklyId = Number(req.params.weeklyId)

            const response = await WeeklySummaryService.deleteWeeklySummary(
                req.user!,
                weeklyId
            )

            res.status(200).json({
                data: response,
            })
        } catch (error) {
            next(error)
        }
    }
}
