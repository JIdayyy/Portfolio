/*
  Warnings:

  - You are about to drop the `_PictureToProject` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "_PictureToProject" DROP CONSTRAINT "_PictureToProject_A_fkey";

-- DropForeignKey
ALTER TABLE "_PictureToProject" DROP CONSTRAINT "_PictureToProject_B_fkey";

-- DropTable
DROP TABLE "_PictureToProject";
