/*
  Warnings:

  - You are about to drop the column `projectLink` on the `Application` table. All the data in the column will be lost.
  - Added the required column `githubLink` to the `Application` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "public"."Application" DROP COLUMN "projectLink",
ADD COLUMN     "githubLink" TEXT NOT NULL;
