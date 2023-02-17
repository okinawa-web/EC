-- CreateTable
CREATE TABLE "Room" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "roomName" TEXT NOT NULL,
    "date" DATETIME NOT NULL,
    "avaliability" BOOLEAN NOT NULL DEFAULT false,
    "price" INTEGER NOT NULL,
    "maxPeople" INTEGER NOT NULL,
    "detail" TEXT NOT NULL
);
