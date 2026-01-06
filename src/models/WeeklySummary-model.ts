import { WeeklySummary } from "../../generated/prisma/client"

export interface WeeklySummaryResponse {
    weeklyId: number
    userId: number
    weekStartDate: Date
    avgSteps: number
    avgSleep: number
    avgWater: number
    avgCalories: number
    scoreSteps: number
    scoreSleep: number
    scoreWater: number
    scoreCalories: number
    overallScore?: number
}

export interface WeeklySummaryCreateRequest {
    userId: number
    weekStartDate: Date
    avgSteps: number
    avgSleep: number
    avgWater: number
    avgCalories: number
}

export interface WeeklySummaryAnalytics {
    weekStartDate: Date
    metrics: {
        steps: MetricAnalysis
        sleep: MetricAnalysis
        water: MetricAnalysis
        calories: MetricAnalysis
    }
    overallScore: number
    grade: string
    improvementSuggestions: string[]
}

export interface MetricAnalysis {
    average: number
    score: number
    status: "excellent" | "good" | "fair" | "needs_improvement"
    target: number
    percentage: number
}

export function toWeeklySummaryResponse(prismaWeeklySummary: WeeklySummary): WeeklySummaryResponse {
    const overallScore = calculateOverallScore(
        prismaWeeklySummary.scoreSteps,
        prismaWeeklySummary.scoreSleep,
        prismaWeeklySummary.scoreWater,
        prismaWeeklySummary.scoreCalories
    )

    return {
        weeklyId: prismaWeeklySummary.id,
        userId: prismaWeeklySummary.userId,
        weekStartDate: prismaWeeklySummary.weekStartDate,
        avgSteps: prismaWeeklySummary.avgSteps,
        avgSleep: prismaWeeklySummary.avgSleep,
        avgWater: prismaWeeklySummary.avgWater,
        avgCalories: prismaWeeklySummary.avgCalories,
        scoreSteps: prismaWeeklySummary.scoreSteps,
        scoreSleep: prismaWeeklySummary.scoreSleep,
        scoreWater: prismaWeeklySummary.scoreWater,
        scoreCalories: prismaWeeklySummary.scoreCalories,
        overallScore
    }
}

export function toWeeklySummaryResponseList(prismaWeeklySummary: WeeklySummary[]): WeeklySummaryResponse[] {
    return prismaWeeklySummary.map(summary => toWeeklySummaryResponse(summary))
}

export function toWeeklySummaryAnalytics(prismaWeeklySummary: WeeklySummary): WeeklySummaryAnalytics {
    const stepsAnalysis = analyzeMetric(prismaWeeklySummary.avgSteps, prismaWeeklySummary.scoreSteps, 10000, "steps")
    const sleepAnalysis = analyzeMetric(prismaWeeklySummary.avgSleep, prismaWeeklySummary.scoreSleep, 8, "hours")
    const waterAnalysis = analyzeMetric(prismaWeeklySummary.avgWater, prismaWeeklySummary.scoreWater, 8, "glasses")
    const caloriesAnalysis = analyzeMetric(prismaWeeklySummary.avgCalories, prismaWeeklySummary.scoreCalories, 2000, "calories")

    const overallScore = calculateOverallScore(
        prismaWeeklySummary.scoreSteps,
        prismaWeeklySummary.scoreSleep,
        prismaWeeklySummary.scoreWater,
        prismaWeeklySummary.scoreCalories
    )

    const grade = getGrade(overallScore)
    const improvementSuggestions = getImprovementSuggestions(
        stepsAnalysis,
        sleepAnalysis,
        waterAnalysis,
        caloriesAnalysis
    )

    return {
        weekStartDate: prismaWeeklySummary.weekStartDate,
        metrics: {
            steps: stepsAnalysis,
            sleep: sleepAnalysis,
            water: waterAnalysis,
            calories: caloriesAnalysis
        },
        overallScore,
        grade,
        improvementSuggestions
    }
}

function calculateOverallScore(
    scoreSteps: number,
    scoreSleep: number,
    scoreWater: number,
    scoreCalories: number
): number {
    return Math.round((scoreSteps + scoreSleep + scoreWater + scoreCalories) / 4)
}

function analyzeMetric(
    average: number,
    score: number,
    target: number,
    unit: string
): MetricAnalysis {
    const percentage = Math.round((average / target) * 100)
    let status: "excellent" | "good" | "fair" | "needs_improvement"

    if (score >= 90) status = "excellent"
    else if (score >= 70) status = "good"
    else if (score >= 50) status = "fair"
    else status = "needs_improvement"

    return {
        average,
        score,
        status,
        target,
        percentage
    }
}

function getGrade(overallScore: number): string {
    if (overallScore >= 90) return "A"
    if (overallScore >= 80) return "B"
    if (overallScore >= 70) return "C"
    if (overallScore >= 60) return "D"
    return "F"
}

function getImprovementSuggestions(
    steps: MetricAnalysis,
    sleep: MetricAnalysis,
    water: MetricAnalysis,
    calories: MetricAnalysis
): string[] {
    const suggestions: string[] = []

    if (steps.status === "needs_improvement") {
        suggestions.push(`Try to increase your daily steps. You're at ${steps.percentage}% of the ${steps.target} steps goal.`)
    }

    if (sleep.status === "needs_improvement") {
        suggestions.push(`Aim for ${sleep.target} hours of sleep per night. Currently averaging ${sleep.average} hours.`)
    }

    if (water.status === "needs_improvement") {
        suggestions.push(`Drink more water! Target is ${water.target} glasses per day, you're at ${water.average}.`)
    }

    if (calories.status === "needs_improvement") {
        suggestions.push(`Monitor your calorie intake. Target is ${calories.target} calories, you're at ${calories.average}.`)
    }

    if (suggestions.length === 0) {
        suggestions.push("Great job! Keep up the excellent work on all your health metrics!")
    }

    return suggestions
}

export function calculateScores(
    avgSteps: number,
    avgSleep: number,
    avgWater: number,
    avgCalories: number
): {
    scoreSteps: number
    scoreSleep: number
    scoreWater: number
    scoreCalories: number
} {
    return {
        scoreSteps: calculateStepsScore(avgSteps),
        scoreSleep: calculateSleepScore(avgSleep),
        scoreWater: calculateWaterScore(avgWater),
        scoreCalories: calculateCaloriesScore(avgCalories)
    }
}

function calculateStepsScore(avgSteps: number): number {
    const target = 10000
    const percentage = (avgSteps / target) * 100
    return Math.min(Math.round(percentage), 100)
}

function calculateSleepScore(avgSleep: number): number {
    const target = 8
    if (avgSleep >= 7 && avgSleep <= 9) return 100
    if (avgSleep >= 6 && avgSleep < 7) return 80
    if (avgSleep >= 5 && avgSleep < 6) return 60
    if (avgSleep >= 4 && avgSleep < 5) return 40
    return 20
}

function calculateWaterScore(avgWater: number): number {
    const target = 8
    const percentage = (avgWater / target) * 100
    return Math.min(Math.round(percentage), 100)
}

function calculateCaloriesScore(avgCalories: number): number {
    const target = 2000
    const lowerBound = 1800
    const upperBound = 2200

    if (avgCalories >= lowerBound && avgCalories <= upperBound) return 100
    if (avgCalories >= 1600 && avgCalories < lowerBound) return 80
    if (avgCalories > upperBound && avgCalories <= 2400) return 80
    if (avgCalories >= 1400 && avgCalories < 1600) return 60
    if (avgCalories > 2400 && avgCalories <= 2600) return 60
    return 40
}