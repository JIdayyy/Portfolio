import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()
import Image from 'next/image'
import {GetServerSideProps} from 'next'

export default function myProject({title,content,Pictures,createdAt }:IProject) {
    return(
        <div className="w-full flex flex-col text-white items-center justify-center align-middle h-screen bg-perso">
           <div className=" flex   p-8 flex-col items-center align-middle justify-center"> 
                <Image width={500} height={300} src={Pictures[0].pictureUrl} />
                <div className="text-2xl  my-4">{title}</div>
                <div className="w-80 p-4 ">{content}</div>
                <div className="text-xs  my-4">{createdAt}</div>
            </div>
        </div>
          )
};

export const getServerSideProps: GetServerSideProps = async (context) => {
    const {id} = context.query
    let project = await prisma.project.findUnique({
        where: {
          id: parseInt(id),
        },
        include:{
            Pictures:  true
            }
        })
        console.log(project)
    let {title,content,createdAt,Pictures} = project

    createdAt = createdAt.toString()

    return{
        props: {
           title,content,Pictures,createdAt
        }
    }
}