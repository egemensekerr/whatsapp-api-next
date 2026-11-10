import { NextResponse } from "next/server";
import { qrData } from "@/lib/wa";
export async function GET(){return NextResponse.json({qr:qrData()});}
