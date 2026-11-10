import { NextResponse } from "next/server";
import { waStatus } from "@/lib/wa";
export async function GET(){return NextResponse.json(waStatus());}
