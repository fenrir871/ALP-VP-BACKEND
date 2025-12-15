import z, { ZodType } from "zod"

export class WeeklySummaryValidation {
    static readonly CREATE: ZodType = z.object({
        user_id: z
            .number({
                message: "User ID must be a number!",
            })
            .int({
                message: "User ID must be an integer!",
            })
            .positive({
                message: "User ID must be positive!",
            }),
        week_start_date: z
            .string({
                message: "Week start date must be a string!",
            })
            .min(1, {
                message: "Week start date can not be empty!",
            })
            .refine((date) => !isNaN(Date.parse(date)), {
                message: "Week start date must be a valid date format!",
            }),
        avg_steps: z
            .number({
                message: "Average steps must be a number!",
            })
            .min(0, {
                message: "Average steps must be greater than or equal to 0!",
            }),
        avg_sleep: z
            .number({
                message: "Average sleep must be a number!",
            })
            .min(0, {
                message: "Average sleep must be greater than or equal to 0!",
            })
            .max(24, {
                message: "Average sleep cannot exceed 24 hours!",
            }),
        avg_water: z
            .number({
                message: "Average water must be a number!",
            })
            .min(0, {
                message: "Average water must be greater than or equal to 0!",
            }),
        avg_calories: z
            .number({
                message: "Average calories must be a number!",
            })
            .min(0, {
                message: "Average calories must be greater than or equal to 0!",
            }),
    })

    static readonly GENERATE: ZodType = z.object({
        week_start_date: z
            .string({
                message: "Week start date must be a string!",
            })
            .min(1, {
                message: "Week start date can not be empty!",
            })
            .refine((date) => !isNaN(Date.parse(date)), {
                message: "Week start date must be a valid date format!",
            }),
    })
}
