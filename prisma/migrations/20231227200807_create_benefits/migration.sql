-- CreateEnum
CREATE TYPE "ValueType" AS ENUM ('PERCENT', 'FIXED', 'OTHER');

-- CreateEnum
CREATE TYPE "RedeemType" AS ENUM ('INSTORE', 'ONLINE', 'CODE', 'OTHER');

-- CreateTable
CREATE TABLE "Benefit" (
    "id" SERIAL NOT NULL,
    "externalId" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "redeemType" "RedeemType" NOT NULL,
    "valueType" "ValueType" NOT NULL,
    "value" DOUBLE PRECISION NOT NULL,
    "image" TEXT,
    "url" TEXT,
    "terms" TEXT,
    "termsUrl" TEXT,
    "startDate" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "endDate" TIMESTAMP(3) NOT NULL DEFAULT NOW() + interval '1 year',
    "daysAvailable" JSONB NOT NULL DEFAULT '{}',
    "sponsorId" INTEGER NOT NULL,
    "benefactorId" INTEGER NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Benefit_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "_BenefitToCategory" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "Benefit_id_key" ON "Benefit"("id");

-- CreateIndex
CREATE UNIQUE INDEX "_BenefitToCategory_AB_unique" ON "_BenefitToCategory"("A", "B");

-- CreateIndex
CREATE INDEX "_BenefitToCategory_B_index" ON "_BenefitToCategory"("B");

-- AddForeignKey
ALTER TABLE "Benefit" ADD CONSTRAINT "Benefit_sponsorId_fkey" FOREIGN KEY ("sponsorId") REFERENCES "Brand"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Benefit" ADD CONSTRAINT "Benefit_benefactorId_fkey" FOREIGN KEY ("benefactorId") REFERENCES "Brand"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_BenefitToCategory" ADD CONSTRAINT "_BenefitToCategory_A_fkey" FOREIGN KEY ("A") REFERENCES "Benefit"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_BenefitToCategory" ADD CONSTRAINT "_BenefitToCategory_B_fkey" FOREIGN KEY ("B") REFERENCES "Category"("id") ON DELETE CASCADE ON UPDATE CASCADE;
