"use server"

import { prisma } from "@/lib/prisma"

export const saveSnippet = async (id:number, code:string) => {
  await prisma.snippet.update({
    where:{
        id
    },
    data: {
        code
    }
  })
}