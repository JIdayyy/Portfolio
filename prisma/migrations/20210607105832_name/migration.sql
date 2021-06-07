-- CreateTable
CREATE TABLE "Picture" (
    "id" SERIAL NOT NULL,
    "pictureUrl" TEXT NOT NULL,
    "projectId" INTEGER NOT NULL,

    PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Picture" ADD FOREIGN KEY ("projectId") REFERENCES "Project"("id") ON DELETE CASCADE ON UPDATE CASCADE;
