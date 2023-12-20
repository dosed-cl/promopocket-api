-- AlterTable
ALTER TABLE "Category" ADD COLUMN     "color" TEXT,
ADD COLUMN     "image" TEXT;

-- CreateTable
CREATE TABLE "Brand" (
    "id" SERIAL NOT NULL,
    "key" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "url" TEXT,
    "logo" TEXT,
    "alias" TEXT[] DEFAULT ARRAY[]::TEXT[],
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Brand_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "CategoriesOnBrands" (
    "id" SERIAL NOT NULL,
    "brandId" INTEGER NOT NULL,
    "categoryId" INTEGER NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "CategoriesOnBrands_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Brand_id_key" ON "Brand"("id");

-- CreateIndex
CREATE UNIQUE INDEX "Brand_key_key" ON "Brand"("key");

-- CreateIndex
CREATE UNIQUE INDEX "CategoriesOnBrands_id_key" ON "CategoriesOnBrands"("id");

-- CreateIndex
CREATE INDEX "CategoriesOnBrands_brandId_categoryId_idx" ON "CategoriesOnBrands"("brandId", "categoryId");

-- AddForeignKey
ALTER TABLE "CategoriesOnBrands" ADD CONSTRAINT "CategoriesOnBrands_brandId_fkey" FOREIGN KEY ("brandId") REFERENCES "Brand"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "CategoriesOnBrands" ADD CONSTRAINT "CategoriesOnBrands_categoryId_fkey" FOREIGN KEY ("categoryId") REFERENCES "Category"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
