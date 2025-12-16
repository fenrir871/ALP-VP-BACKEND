import { prismaClient as prisma } from '../utils/database-util';
import { FriendResponse, FriendWithUserInfo, FriendLeaderboardItem } from '../models/friend-model'
import { ResponseError } from '../error/response-error'

export class FriendService {
  static async addFriend(userId: number, friendId: number): Promise<FriendResponse> {
    // Check if user is trying to add themselves
    if (userId === friendId) {
      throw new ResponseError(400, 'You cannot add yourself as a friend')
    }

    // Check if friend user exists
    const friendUser = await prisma.user.findUnique({
      where: { id: friendId }
    })

    if (!friendUser) {
      throw new ResponseError(404, 'Friend user not found')
    }

    // Check if friend request already exists (in either direction)
    const existingFriendship = await prisma.friends.findFirst({
      where: {
        OR: [
          { user_id: userId, friend_id: friendId },
          { user_id: friendId, friend_id: userId }
        ]
      }
    })

    if (existingFriendship) {
      if (existingFriendship.status === 'accepted') {
        throw new ResponseError(400, 'You are already friends with this user')
      } else {
        throw new ResponseError(400, 'Friend request already pending')
      }
    }

    // Create friend request
    const friendRequest = await prisma.friends.create({
      data: {
        user_id: userId,
        friend_id: friendId,
        status: 'pending'
      }
    })

    return {
      id: friendRequest.id,
      user_id: friendRequest.user_id,
      friend_id: friendRequest.friend_id,
      status: friendRequest.status
    }
  }

  static async getPendingFriendRequests(userId: number): Promise<FriendWithUserInfo[]> {
    const pendingRequests = await prisma.friends.findMany({
      where: {
        friend_id: userId,
        status: 'pending'
      },
      include: {
        user: {
          select: {
            id: true,
            name: true
          }
        }
      }
    })

    return pendingRequests.map((req: any) => ({
      id: req.id,
      user_id: req.user_id,
      friend_id: req.friend_id,
      status: req.status,
      friend: req.user
    }))
  }

  static async acceptFriendRequest(userId: number, friendRequestId: number): Promise<FriendResponse> {
    // Find the friend request
    const friendRequest = await prisma.friends.findUnique({
      where: { id: friendRequestId }
    })

    if (!friendRequest) {
      throw new ResponseError(404, 'Friend request not found')
    }

    // Check if the current user is the one receiving the request
    if (friendRequest.friend_id !== userId) {
      throw new ResponseError(403, 'You can only accept friend requests sent to you')
    }

    // Check if it's already accepted
    if (friendRequest.status === 'accepted') {
      throw new ResponseError(400, 'This friend request is already accepted')
    }

    // Update status to accepted
    const updatedRequest = await prisma.friends.update({
      where: { id: friendRequestId },
      data: { status: 'accepted' }
    })

    return {
      id: updatedRequest.id,
      user_id: updatedRequest.user_id,
      friend_id: updatedRequest.friend_id,
      status: updatedRequest.status
    }
  }

  static async getFriendLeaderboard(userId: number): Promise<FriendLeaderboardItem[]> {
    // Get all accepted friends
    const acceptedFriends = await prisma.friends.findMany({
      where: {
        OR: [
          { user_id: userId, status: 'accepted' },
          { friend_id: userId, status: 'accepted' }
        ]
      },
      include: {
        user: {
          select: {
            id: true,
            name: true
          }
        },
        friend: {
          select: {
            id: true,
            name: true
          }
        }
      }
    })

    // Get friend IDs
    const friendIds = acceptedFriends.map((f: any) => 
      f.user_id === userId ? f.friend_id : f.user_id
    )

    if (friendIds.length === 0) {
      return []
    }

    // Get latest weekly summary for each friend
    const friendsWithScores = await prisma.weeklySummary.findMany({
      where: {
        user_id: {
          in: friendIds
        }
      },
      distinct: ['user_id'],
      orderBy: {
        week_start_date: 'desc'
      },
      include: {
        user: {
          select: {
            id: true,
            name: true
          }
        }
      }
    })

    // Calculate overall score and sort by score
    const leaderboard: FriendLeaderboardItem[] = friendsWithScores
      .map((summary: any) => ({
        friend_id: summary.user_id,
        name: summary.user.name,
        username: summary.user.username,
        overall_score: Math.round(
          (summary.score_steps + summary.score_sleep + summary.score_water + summary.score_calories) / 4
        ),
        rank: 0
      }))
      .sort((a: FriendLeaderboardItem, b: FriendLeaderboardItem) => b.overall_score - a.overall_score)
      .map((friend: FriendLeaderboardItem, index: number) => ({
        ...friend,
        rank: index + 1
      }))

    return leaderboard
  }
}