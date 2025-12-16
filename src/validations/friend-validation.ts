import { z } from 'zod'

export const addFriendSchema = z.object({
  friend_id: z
    .number()
    .int('Friend ID must be an integer')
    .positive('Friend ID must be a positive number')
})

export const acceptFriendRequestSchema = z.object({
  friend_request_id: z
    .number()
    .int('Friend request ID must be an integer')
    .positive('Friend request ID must be a positive number')
})