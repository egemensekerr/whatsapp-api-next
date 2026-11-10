import { NextResponse } from "next/server";
import { sendMessage } from "@/lib/wa";
export async function POST(req){if(req.headers.get("authorization")!==`Bearer ${process.env.API_TOKEN}`) return NextResponse.json({error:"Unauthorized"},{status:401}); const {phone,message}=await req.json(); if(!phone||!message)return NextResponse.json({error:"phone and message required"},{status:400}); try{return NextResponse.json({ok:true,id:await sendMessage(phone,message)});}catch(e){return NextResponse.json({error:e.message},{status:503});}}
