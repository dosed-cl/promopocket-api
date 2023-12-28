-- CreateEnum
CREATE TYPE "UserType" AS ENUM ('SERVER', 'BASIC');

-- AlterTable
ALTER TABLE "Benefit" ALTER COLUMN "endDate" SET DEFAULT NOW() + interval '1 year';

-- CreateTable
CREATE TABLE "User" (
    "id" SERIAL NOT NULL,
    "email" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "userType" "UserType" NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "_BrandToUser" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "User_id_key" ON "User"("id");

-- CreateIndex
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");

-- CreateIndex
CREATE UNIQUE INDEX "_BrandToUser_AB_unique" ON "_BrandToUser"("A", "B");

-- CreateIndex
CREATE INDEX "_BrandToUser_B_index" ON "_BrandToUser"("B");

-- AddForeignKey
ALTER TABLE "_BrandToUser" ADD CONSTRAINT "_BrandToUser_A_fkey" FOREIGN KEY ("A") REFERENCES "Brand"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_BrandToUser" ADD CONSTRAINT "_BrandToUser_B_fkey" FOREIGN KEY ("B") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;
