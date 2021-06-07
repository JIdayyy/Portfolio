/*
  Warnings:

  - You are about to drop the `_PictureToProject` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `postId` to the `Picture` table without a default value. This is not possible if the table is not empty.
  - Added the required column `projectId` to the `Picture` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "_PictureToProject" DROP CONSTRAINT "_PictureToProject_A_fkey";

-- DropForeignKey
ALTER TABLE "_PictureToProject" DROP CONSTRAINT "_PictureToProject_B_fkey";

-- AlterTable
ALTER TABLE "Picture" ADD COLUMN     "postId" INTEGER NOT NULL,
ADD COLUMN     "projectId" INTEGER NOT NULL;

-- DropTable
DROP TABLE "_PictureToProject";

-- AddForeignKey
ALTER TABLE "Picture" ADD FOREIGN KEY ("projectId") REFERENCES "Project"("id") ON DELETE CASCADE ON UPDATE CASCADE;
