import { cookies } from "next/headers";
import { NextResponse } from "next/server";

export async function POST(req,res) {
  cookies().delete('role')
  cookies().delete('roleId')
  cookies().delete('token')
  return NextResponse.json({msg:'Logout success'})
}
