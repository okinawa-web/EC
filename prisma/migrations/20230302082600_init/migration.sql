/*
  Warnings:

  - Made the column `date` on table `Reserve` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE `Reserve` MODIFY `date` DATETIME(3) NOT NULL;
