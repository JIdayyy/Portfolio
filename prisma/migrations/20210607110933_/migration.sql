/*
  Warnings:

  - You are about to drop the column `projectId` on the `Picture` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE "Picture" DROP CONSTRAINT "Picture_projectId_fkey";

-- AlterTable
ALTER TABLE "Picture" DROP COLUMN "projectId";

-- CreateTable
CREATE TABLE "_PictureToProject" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "_PictureToProject_AB_unique" ON "_PictureToProject"("A", "B");

-- CreateIndex
CREATE INDEX "_PictureToProject_B_index" ON "_PictureToProject"("B");

-- AddForeignKey
ALTER TABLE "_PictureToProject" ADD FOREIGN KEY ("A") REFERENCES "Picture"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_PictureToProject" ADD FOREIGN KEY ("B") REFERENCES "Project"("id") ON DELETE CASCADE ON UPDATE CASCADE;
