import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()
import Image from 'next/image'



export default function myProject({title,content }) {
    
    return(
        <div className="w-full flex flex-col text-white items-center justify-center align-middle h-screen bg-perso">
           <div className="w-44 flex flex-col items-center align-middle justify-center"> 
          <Image width={100} height={100} src="/img/wizic.png" />
                <div className="text-2xl my-4">{title}</div>
                <div>{content}</div>
            </div>
        </div>
          )
};



export async function getServerSideProps(context){
const {id} = context.query
    let project = await prisma.project.findUnique({
        where: {
          id: parseInt(id),
        },
      })
      project = [project]
const {title,content} = project[0]
console.log(title)
    return{
        props: {
           title,content
        }
    }
}