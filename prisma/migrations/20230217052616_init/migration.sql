/*
  Warnings:

  - You are about to drop the `members` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
DROP TABLE `members`;

-- CreateTable
CREATE TABLE `Member` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(191) NOT NULL,
    `adress` VARCHAR(191) NOT NULL,
    `tel` VARCHAR(191) NOT NULL,
    `registerDate` DATETIME(3) NOT NULL,
    `email` VARCHAR(191) NOT NULL,
    `reserveId` INTEGER NOT NULL,

    UNIQUE INDEX `Member_email_key`(`email`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Room` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `roomName` VARCHAR(191) NOT NULL,
    `date` DATETIME(3) NOT NULL,
    `avaliability` BOOLEAN NOT NULL DEFAULT false,
    `price` INTEGER NOT NULL,
    `maxPeople` INTEGER NOT NULL,
    `detail` VARCHAR(191) NOT NULL,
    `reserveId` INTEGER NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Reserve` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `reservePeople` INTEGER NOT NULL,
    `cancel` BOOLEAN NOT NULL DEFAULT false,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `Member` ADD CONSTRAINT `Member_reserveId_fkey` FOREIGN KEY (`reserveId`) REFERENCES `Reserve`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Room` ADD CONSTRAINT `Room_reserveId_fkey` FOREIGN KEY (`reserveId`) REFERENCES `Reserve`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
