export interface FriendRequest {
  friend_id: number
}

export interface FriendResponse {
  id: number
  user_id: number
  friend_id: number
  status: string
}

export interface FriendWithUserInfo {
  id: number
  user_id: number
  friend_id: number
  status: string
  friend: {
    id: number
    name: string
    username: string
  }
}

export interface FriendLeaderboardItem {
  friend_id: number
  name: string
  username: string
  overall_score: number
  rank: number
}

export interface AcceptFriendRequest {
  friend_request_id: number
}