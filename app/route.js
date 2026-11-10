import { NextResponse } from "next/server";
export async function GET(){return new NextResponse("WhatsApp API online",{headers:{"content-type":"text/plain"}})}
