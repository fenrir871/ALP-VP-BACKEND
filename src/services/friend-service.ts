import { prismaClient} from '../utils/database-util';
import { FriendResponse, FriendWithUserInfo, FriendLeaderboardItem } from '../models/friend-model'
import { ResponseError } from '../error/response-error'

export class FriendService {
  static async addFriend(userId: number, friendId: number): Promise<FriendResponse> {
    // Check if user is trying to add themselves
    if (userId === friendId) {
      throw new ResponseError(400, 'You cannot add yourself as a friend')
    }

    // Check if friend user exists
    const friendUser = await prismaClient.user.findUnique({
      where: { id: friendId }
    })

    if (!friendUser) {
      throw new ResponseError(404, 'Friend user not found')
    }

    // Check if friend request already exists (in either direction)
    const existingFriendship = await prismaClient.friends.findFirst({
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
    const friendRequest = await prismaClient.friends.create({
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
    const pendingRequests = await prismaClient.friends.findMany({
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
    const friendRequest = await prismaClient.friends.findUnique({
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
    const updatedRequest = await prismaClient.friends.update({
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
  const acceptedFriends = await prismaClient.friends.findMany({
    where: {
      status: 'accepted',
      OR: [
        { user_id: userId },
        { friend_id: userId }
      ]
    },
    include: {
      user: { select: { id: true, name: true, username: true } },
      friend: { select: { id: true, name: true, username: true } }
    }
  })

  if (acceptedFriends.length === 0) return []

  const friendUsers = acceptedFriends.map(f =>
    f.user_id === userId ? f.friend : f.user
  )

  const summaries = await prismaClient.weeklySummary.findMany({
    where: {
      user_id: { in: friendUsers.map(u => u.id) }
    },
    orderBy: { week_start_date: 'desc' }
  })

  const summaryMap = new Map<number, any>()
  for (const s of summaries) {
    if (!summaryMap.has(s.user_id)) {
      summaryMap.set(s.user_id, s)
    }
  }

  const leaderboard = friendUsers.map(user => {
    const summary = summaryMap.get(user.id)
    const score = summary
      ? Math.round(
          (summary.score_steps +
            summary.score_sleep +
            summary.score_water +
            summary.score_calories) / 4
        )
      : 0

    return {
      friend_id: user.id,
      name: user.name,
      username: user.username,
      overall_score: score,
      rank: 0
    }
  })

  leaderboard.sort((a, b) => b.overall_score - a.overall_score)

  return leaderboard.map((f, i) => ({
    ...f,
    rank: i + 1
  }))
}
}