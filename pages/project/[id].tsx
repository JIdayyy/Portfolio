import { PrismaClient } from "@prisma/client";
import Image from "next/image";
import { GetServerSideProps } from "next";
import type { Session } from "next-auth";

const prisma = new PrismaClient();

export default function myProject({
  title,
  content,
  Pictures,
  createdAt,
}: IProject) {
  return (
    <div className="w-full flex flex-col text-white items-center justify-center align-middle h-screen bg-perso">
      <div className=" flex   p-8 flex-col items-center align-middle justify-center">
        <Image
          width={500}
          height={300}
          src={Pictures ? Pictures[0].pictureUrl : ""}
        />
        <div className="text-2xl  my-4">{title}</div>
        <div className="w-80 p-4 ">{content}</div>
      </div>
    </div>
  );
}

export const getServerSideProps: GetServerSideProps<{
  session: Session | null;
}> = async (context) => {
  const { id } = context.query;
  const myId = Number(id);

  let project = await prisma.project.findUnique({
    where: {
      id: myId,
    },
    include: {
      Pictures: true,
    },
  });
  console.log(project);
  let { title, content, Pictures }: IProject[] = project;

  return {
    props: {
      title,
      content,
      Pictures,
    },
  };
};
