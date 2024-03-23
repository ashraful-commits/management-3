import { NextRequest, NextResponse } from "next/server"
import User from "@/models/user"
import { getServerSession } from "next-auth"
import { connectMongoDB } from "@/lib/mongodb"


export async function POST(req) {
    try {
      await connectMongoDB()
      const { email } = await req.json()
      const user = await User.findOne({ email }).select("_id")
      return NextResponse.json({ user })
    } catch (error) {
      console.log(error)
    }
  
}


export async function GET(req) {
    try {
      const email = req.nextUrl.searchParams.get("email");
      await connectMongoDB();
      const user = await User.findOne({ email }).select()
      return NextResponse.json({ user });
    } catch (error) {
      console.log(error)
    }
  
}