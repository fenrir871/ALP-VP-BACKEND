import { Request, Response, NextFunction } from 'express'
import { FriendService } from '../services/friend-service'
import { Validation } from '../validations/validation'
import { addFriendSchema, acceptFriendRequestSchema } from '../validations/friend-validation'
import { ResponseError } from '../error/response-error'

export class FriendController {
  static async addFriend(req: Request, res: Response): Promise<void> {
    try {
      // Validate input
      const validatedData = Validation.validate(addFriendSchema, req.body)

      // Get user ID from JWT (assuming you have middleware that sets req.user)
      const userId = (req as any).user.id

      // Call service
      const result = await FriendService.addFriend(userId, validatedData.friend_id)

      res.status(201).json({
        status: 'success',
        message: 'Friend request sent successfully',
        data: result
      })
    } catch (error) {
      if (error instanceof ResponseError) {
        res.status(error.status).json({
          status: 'error',
          message: error.message
        })
      } else {
        res.status(500).json({
          status: 'error',
          message: 'Internal server error'
        })
      }
    }
  }

  static async getPendingRequests(req: Request, res: Response): Promise<void> {
    try {
      // Get user ID from JWT
      const userId = (req as any).user.id

      // Call service
      const result = await FriendService.getPendingFriendRequests(userId)

      res.status(200).json({
        status: 'success',
        message: 'Pending friend requests retrieved',
        data: result
      })
    } catch (error) {
      res.status(500).json({
        status: 'error',
        message: 'Internal server error'
      })
    }
  }

  static async acceptFriendRequest(req: Request, res: Response): Promise<void> {
    try {
      // Validate input
      const validatedData = Validation.validate(acceptFriendRequestSchema, req.body)

      // Get user ID from JWT
      const userId = (req as any).user.id

      // Call service
      const result = await FriendService.acceptFriendRequest(userId, validatedData.friend_request_id)

      res.status(200).json({
        status: 'success',
        message: 'Friend request accepted',
        data: result
      })
    } catch (error) {
      if (error instanceof ResponseError) {
        res.status(error.status).json({
          status: 'error',
          message: error.message
        })
      } else {
        res.status(500).json({
          status: 'error',
          message: 'Internal server error'
        })
      }
    }
  }

  static async getFriendLeaderboard(req: Request, res: Response): Promise<void> {
    try {
      // Get user ID from JWT
      const userId = (req as any).user.id

      // Call service
      const result = await FriendService.getFriendLeaderboard(userId)

      res.status(200).json({
        status: 'success',
        message: 'Friend leaderboard retrieved',
        data: result
      })
    } catch (error) {
      res.status(500).json({
        status: 'error',
        message: 'Internal server error'
      })
    }
  }
}