import { db } from "@/lib/db";
import { auth } from "@clerk/nextjs";
import { error } from "console";
import { NextResponse } from "next/server";

export async function POST(
    req:Request,
    ){
       
        
        try{
            const {userId} = auth()
            const {title} = await req.json()
            
            if(!userId) {
                return new NextResponse("Unauthorized",{status:401})
            }
            const course = await db.course.create({data:{
                userId,
                title,
            }})
            return NextResponse.json(course)
        }
        catch{
            console.log("[courses]",error);
            console.log('This is auth',auth);
            
            return new NextResponse("Internal error",{status:500})
        }
    }