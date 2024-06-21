import { cookies } from "next/headers";
import { NextResponse } from "next/server";

export async function POST(req,res) {
  cookies().delete('UserID')
  return NextResponse.json({msg:'Logout success'})
}
