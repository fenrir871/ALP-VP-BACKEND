import { NextFunction, Response } from "express"
import { UserRequest } from "../models/user-request-model"
import { DailyActivityService } from "../services/dailyActivity-service"
import {
    CreateDailyActivityRequest,
    UpdateDailyActivityRequest,
} from "../models/DailyActivity-model"

export class DailyActivityController {
    static async getAllActivities(
        req: UserRequest,
        res: Response,
        next: NextFunction
    ) {
        try {
            const response = await DailyActivityService.getAllActivities(
                req.user!
            )

            res.status(200).json({
                data: response,
            })
        } catch (error) {
            next(error)
        }
    }

    static async getActivity(
        req: UserRequest,
        res: Response,
        next: NextFunction
    ) {
        try {
            const activityId = Number(req.params.activityId)

            const response = await DailyActivityService.getActivity(
                req.user!,
                activityId
            )

            res.status(200).json({
                data: response,
            })
        } catch (error) {
            next(error)
        }
    }

    static async getActivityByDate(
        req: UserRequest,
        res: Response,
        next: NextFunction
    ) {
        try {
            const date = req.query.date as string

            if (!date) {
                return res.status(400).json({
                    error: "Date query parameter is required",
                })
            }

            const response = await DailyActivityService.getActivityByDate(
                req.user!,
                date
            )

            if (!response) {
                return res.status(404).json({
                    error: "No activity found for this date",
                })
            }

            res.status(200).json({
                data: response,
            })
        } catch (error) {
            next(error)
        }
    }

    static async createActivity(
        req: UserRequest,
        res: Response,
        next: NextFunction
    ) {
        try {
            const reqData = req.body as CreateDailyActivityRequest

            const response = await DailyActivityService.createActivity(
                req.user!,
                reqData
            )

            res.status(201).json({
                data: response,
            })
        } catch (error) {
            next(error)
        }
    }

    static async updateActivity(
        req: UserRequest,
        res: Response,
        next: NextFunction
    ) {
        try {
            const reqData = req.body as UpdateDailyActivityRequest
            const activityId = Number(req.params.activityId)

            const response = await DailyActivityService.updateActivity(
                req.user!,
                reqData,
                activityId
            )

            res.status(200).json({
                data: response,
            })
        } catch (error) {
            next(error)
        }
    }

    static async deleteActivity(
        req: UserRequest,
        res: Response,
        next: NextFunction
    ) {
        try {
            const activityId = Number(req.params.activityId)

            const response = await DailyActivityService.deleteActivity(
                req.user!,
                activityId
            )

            res.status(200).json({
                data: response,
            })
        } catch (error) {
            next(error)
        }
    }

    static async getActivitiesByDateRange(
        req: UserRequest,
        res: Response,
        next: NextFunction
    ) {
        try {
            const startDate = req.query.startDate as string
            const endDate = req.query.endDate as string

            if (!startDate || !endDate) {
                return res.status(400).json({
                    error: "startDate and endDate query parameters are required",
                })
            }

            const response =
                await DailyActivityService.getActivitiesByDateRange(
                    req.user!,
                    startDate,
                    endDate
                )

            res.status(200).json({
                data: response,
            })
        } catch (error) {
            next(error)
        }
    }
}