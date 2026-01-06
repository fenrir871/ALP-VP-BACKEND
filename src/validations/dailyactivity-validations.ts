import z, { ZodType } from "zod"

export class DailyActivityValidation {
  static readonly CREATE: ZodType = z.object({
    date: z
      .string({ error: "Date must be a string (ISO)!" })
      .min(1, { error: "Date cannot be empty!" }),
    steps: z
      .number({ error: "Steps must be a number!" })
      .int({ error: "Steps must be an integer!" })
      .nonnegative({ error: "Steps cannot be negative!" }),
    sleepHours: z
      .number({ error: "Sleep hours must be a number!" })
      .nonnegative({ error: "Sleep hours cannot be negative!" }),
    calories: z
      .number({ error: "Calories must be a number!" })
      .int({ error: "Calories must be an integer!" })
      .nonnegative({ error: "Calories cannot be negative!" }),
    userId: z
      .number({ error: "User ID must be a number!" })
      .int({ error: "User ID must be an integer!" })
      .positive({ error: "User ID must be a positive integer!" }),
  })

  static readonly UPDATE: ZodType = z.object({
    date: z
      .string({ error: "Date must be a string (ISO)!" })
      .min(1, { error: "Date cannot be empty!" })
      .optional(),
    steps: z
      .number({ error: "Steps must be a number!" })
      .int({ error: "Steps must be an integer!" })
      .nonnegative({ error: "Steps cannot be negative!" })
      .optional(),
    sleepHours: z
      .number({ error: "Sleep hours must be a number!" })
      .nonnegative({ error: "Sleep hours cannot be negative!" })
      .optional(),
    calories: z
      .number({ error: "Calories must be a number!" })
      .int({ error: "Calories must be an integer!" })
      .nonnegative({ error: "Calories cannot be negative!" })
      .optional(),
  })
}