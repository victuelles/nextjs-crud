import { connectMongoDB } from "@/libs/mongodb"
import Topic from "@/models/topic"
import { NextResponse } from "next/server"

export async function POST(req){
    const {title,description} = await req.json()
    await connectMongoDB()
    await Topic.create({title,description})
    return NextResponse.json({message:"Topic created"},{status:201})

}