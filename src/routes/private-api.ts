import express from "express"
import { authMiddleware } from "../middlewares/auth-middleware"
import { DailyActivityController } from "../controllers/dailyactivity-controller"
import { WeeklySummaryController } from "../controllers/WeeklySummary-controller"
import { FriendController } from "../controllers/friend-controller"

export const privateRouter = express.Router()

privateRouter.use(authMiddleware)

// Daily Activity Routes
privateRouter.get("/daily-activities", DailyActivityController.getAllActivities)
privateRouter.get("/daily-activities/:activityId", DailyActivityController.getActivity)
privateRouter.post("/daily-activities", DailyActivityController.createActivity)
privateRouter.put("/daily-activities/:activityId", DailyActivityController.updateActivity)
privateRouter.delete("/daily-activities/:activityId", DailyActivityController.deleteActivity)

// Weekly Summary Routes
privateRouter.get("/weekly-summaries", WeeklySummaryController.getAllWeeklySummaries)
privateRouter.get("/weekly-summaries/latest", WeeklySummaryController.getLatestWeeklySummary)
privateRouter.get("/weekly-summaries/:weeklyId", WeeklySummaryController.getWeeklySummary)
privateRouter.get("/weekly-summaries/:weeklyId/analytics", WeeklySummaryController.getWeeklySummaryAnalytics)
privateRouter.get("/weekly-summaries/date/:date", WeeklySummaryController.getWeeklySummaryByDate)
privateRouter.post("/weekly-summaries/generate", WeeklySummaryController.generateWeeklySummary)
privateRouter.post("/weekly-summaries", WeeklySummaryController.createWeeklySummary)
privateRouter.delete("/weekly-summaries/:weeklyId", WeeklySummaryController.deleteWeeklySummary)

// Friend Routes
privateRouter.post("/friends/add", FriendController.addFriend)
privateRouter.get("/friends/pending", FriendController.getPendingRequests)
privateRouter.post("/friends/accept", FriendController.acceptFriendRequest)
privateRouter.get("/friends/leaderboard", FriendController.getFriendLeaderboard)