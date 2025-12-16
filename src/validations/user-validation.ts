import { z, ZodType } from "zod"

export class UserValidation {
    static readonly REGISTER: ZodType = z.object({
        name: z
            .string({
                message: "Name must be string!",
            })
            .min(1, {
                message: "Name can not be empty!",
            }),
        username: z
            .string({
                message: "Username must be string!",
            })
            .min(3, {
                message: "Username must be at least 3 characters!",
            })
            .max(50, {
                message: "Username must not exceed 50 characters!",
            }),
        phone: z
            .string({
                message: "Phone must be string!",
            })
            .min(10, {
                message: "Phone number must be at least 10 digits!",
            })
            .max(20, {
                message: "Phone number must not exceed 20 characters!",
            }),
        email: z
            .string({
                message: "Email must be string!",
            })
            .email({
                message: "Email format is invalid!",
            })
            .min(1, {
                message: "Email can not be empty!",
            }),
        password: z
            .string({
                message: "Password must be string!",
            })
            .min(8, {
                message: "Password must contain more than or equal to 8 characters!",
            }),
    })

    static readonly LOGIN: ZodType = z.object({
        email: z
            .string({
                message: "Email must be string!",
            })
            .email({
                message: "Email format is invalid!",
            })
            .min(1, {
                message: "Email can not be empty!",
            }),
        password: z
            .string({
                message: "Password must be string!",
            })
            .min(8, {
                message: "Password must contain more than or equal to 8 characters!",
            }),
    })

    static readonly UPDATE: ZodType = z.object({
        name: z
            .string({
                message: "Name must be string!",
            })
            .min(1, {
                message: "Name can not be empty!",
            }),
    })
}
