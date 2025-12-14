-- CreateTable
CREATE TABLE "users" (
    "id" SERIAL NOT NULL,
    "name" VARCHAR(100) NOT NULL,
    "email" VARCHAR(150) NOT NULL,
    "password" VARCHAR(100) NOT NULL,

    CONSTRAINT "users_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "today_activity" (
    "id" SERIAL NOT NULL,
    "date" TIMESTAMP(3) NOT NULL,
    "steps" INTEGER NOT NULL,
    "sleep_hours" DOUBLE PRECISION NOT NULL,
    "calories" INTEGER NOT NULL,
    "user_id" INTEGER NOT NULL,

    CONSTRAINT "today_activity_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "weekly_summary" (
    "id" SERIAL NOT NULL,
    "week_start_date" TIMESTAMP(3) NOT NULL,
    "avg_steps" DOUBLE PRECISION NOT NULL,
    "avg_sleep" DOUBLE PRECISION NOT NULL,
    "avg_water" DOUBLE PRECISION NOT NULL,
    "avg_calories" DOUBLE PRECISION NOT NULL,
    "score_steps" INTEGER NOT NULL,
    "score_sleep" INTEGER NOT NULL,
    "score_water" INTEGER NOT NULL,
    "score_calories" INTEGER NOT NULL,
    "user_id" INTEGER NOT NULL,

    CONSTRAINT "weekly_summary_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "friends" (
    "id" SERIAL NOT NULL,
    "user_id" INTEGER NOT NULL,
    "friend_id" INTEGER NOT NULL,
    "status" VARCHAR(20) NOT NULL,

    CONSTRAINT "friends_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "users_email_key" ON "users"("email");

-- AddForeignKey
ALTER TABLE "today_activity" ADD CONSTRAINT "today_activity_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "users"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "weekly_summary" ADD CONSTRAINT "weekly_summary_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "users"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "friends" ADD CONSTRAINT "friends_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "users"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "friends" ADD CONSTRAINT "friends_friend_id_fkey" FOREIGN KEY ("friend_id") REFERENCES "users"("id") ON DELETE CASCADE ON UPDATE CASCADE;
