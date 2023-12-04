/*
  Warnings:

  - You are about to drop the column `userId1` on the `Course` table. All the data in the column will be lost.
  - Added the required column `userId` to the `Course` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `Course` DROP COLUMN `userId1`,
    ADD COLUMN `userId` VARCHAR(191) NOT NULL;
