"use client"

import { HiOutlineTrash } from "react-icons/hi"
import { useRouter } from "next/navigation"

export default function RemoveBtn({id}){
    const router=useRouter()
    const removeTopic=async()=>{
        const confirmed= confirm("Are you sure?")
        if(confirmed){
            await fetch(`/api/topics?id=${id}`,{
                method:"DELETE"
            })
            router.refresh()
        }
    }
    return <button onClick={removeTopic} className="text-red-400">
        <HiOutlineTrash size={24}/>
    </button>
}