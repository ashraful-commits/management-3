import { NextResponse } from "next/server"
import User from "@/models/user"
import { getServerSession } from "next-auth"
import { connectMongoDB } from "@/lib/mongodb"

export async function PUT(req) {
  const session = await getServerSession(req)
  if (!session) {
    return NextResponse.json("protected api")
  }else{
    try {
      const id = req.nextUrl.searchParams.get("id")
      const { avatar } = await req.json()
      await connectMongoDB()
      await User.findByIdAndUpdate(id, {
        avatar,
      })
  
      return NextResponse.json({ message: "Avatar Updated!" }, { status: 201 })
    } catch (error) {
      return NextResponse.json(
        { message: "An error occurred while registering the user." },
        { status: 500 }
      )
    }
  }
  
}
