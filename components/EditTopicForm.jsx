"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"

export default function EditTopicForm({id,title,description}) {
    console.log(id,title,description)
    const router= useRouter()
    const [newTitle,setNewTitle]=useState(title)
    const [newDescription,setNewDescription]=useState(description)
    const handleSubmit=async(e)=>{
        e.preventDefault()
        try {
            const res= await fetch(`http://localhost:3000/api/topics/${id}`,{
                method:"PUT",
                headers:{
                    "Content-type":"application/json"
                },
                body: JSON.stringify({newTitle,newDescription})
            })
            if(!res.ok){
                throw Error("Failed to update topics")
            }
            router.refresh()
            router.push("/")


        } catch (error) {
            console.log("Error",error)
            
        }

    }

    return (
    <form onSubmit={handleSubmit} className="flex  flex-col gap-3">
    <input 
    onChange={(e)=>{setNewTitle(e.target.value)}}
    value={newTitle}
    className="border border-slate-500 px-8 py-2" type="text"
    placeholder="Topic title"/>
    <input
     onChange={(e)=>{setNewDescription(e.target.value)}}
     value={newDescription}
    className="border border-slate-500 px-8 py-2" type="text"
    placeholder="Topic description"/>
    <button className="bg-green-600 text-white font-bold py-3 px-6 w-fit ">Update Topic</button>
</form>
    )

}