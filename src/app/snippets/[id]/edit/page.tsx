import React from 'react'
import { prisma } from '@/lib/prisma';
import EditSnippetForm from '@/components/EditSnippetForm'
const EditPageSnippit = async({params}:{params:Promise<{id:string}>}) => {
    const id = parseInt((await params).id);
    const snippet = await prisma.snippet.findUnique({
        where:{
            id,
        }
    })
  return (
    <>
    {/* <EditSnippetForm snippet ={snippet}></EditSnippetForm> */}
    </>
  )
}

export default EditPageSnippit