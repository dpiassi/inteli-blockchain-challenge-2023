/*
  Warnings:

  - You are about to drop the `Note` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Password` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `User` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
PRAGMA foreign_keys=off;
DROP TABLE "Note";
PRAGMA foreign_keys=on;

-- DropTable
PRAGMA foreign_keys=off;
DROP TABLE "Password";
PRAGMA foreign_keys=on;

-- DropTable
PRAGMA foreign_keys=off;
DROP TABLE "User";
PRAGMA foreign_keys=on;

-- CreateTable
CREATE TABLE "Transaction" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "walletId" TEXT NOT NULL,
    "amount" INTEGER NOT NULL,
    "discount" INTEGER NOT NULL,
    "currencyCode" TEXT NOT NULL,
    "fee" INTEGER NOT NULL,
    "recipientEmail" TEXT NOT NULL,
    "customIdentifier" TEXT NOT NULL,
    "status" TEXT NOT NULL,
    "smsFee" TEXT NOT NULL,
    "recipientPhone" TEXT NOT NULL,
    "transactionCreatedTime" DATETIME NOT NULL,
    "productId" INTEGER NOT NULL,
    CONSTRAINT "Transaction_productId_fkey" FOREIGN KEY ("productId") REFERENCES "Product" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "Product" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "productName" TEXT NOT NULL,
    "countryCode" TEXT NOT NULL,
    "quantity" INTEGER NOT NULL,
    "unitPrice" INTEGER NOT NULL,
    "totalPrice" INTEGER NOT NULL,
    "currencyCode" TEXT NOT NULL,
    "brandId" INTEGER NOT NULL,
    "brandName" TEXT NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "Transaction_productId_key" ON "Transaction"("productId");

-- CreateIndex
CREATE UNIQUE INDEX "Product_id_key" ON "Product"("id");
