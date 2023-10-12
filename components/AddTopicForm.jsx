"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"

export default function AddTopicF() {
    const router= useRouter()
    const [title,setTitle]=useState("")
    const [description,setDescription]=useState("")
    
    const handleSubmit=async(e)=>{
        e.preventDefault()
        if(!title|| !description) {
            alert("Title and description are required")
            return
        }
        try{
            const res= await fetch("http://localhost:3000/api/topics",{
                method:"POST",
                headers:{
                    "Content-type":"application/json",
                },
                body:JSON.stringify({title,description}),
            })
            if(res.ok){
                router.refresh()
                router.push("/")
            }else{
                throw Error("Failed to add topic")
            }
        }catch(error){
            console.log("Error",error)
        }

    }
    return (
        <form onSubmit={handleSubmit} className="flex flex-col gap-3">
            <input
                onChange={(e)=>setTitle(e.target.value)}
                className="border border-slate-500 px-8 py-2"
                type="text"
                placeholder="Topic title" 
            />
            <input
             onChange={(e)=>setDescription(e.target.value)}
                className="border border-slate-500 px-8 py-2" 
                type="text"
                placeholder="Topic description" 
            />
            <button className="bg-green-600 text-white font-bold py-3 px-6 w-fit ">
                Add Topic
            </button>
        </form>
    )
}