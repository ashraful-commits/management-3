import { NextResponse } from "next/server"
import User from "@/models/user"
import bcrypt from "bcryptjs"

import { connectMongoDB } from "@/lib/mongodb"

export async function POST(req) {
  try {
    const { name, email, password } = await req.json()
    const hashedPassword = await bcrypt.hash(password, 10)
    await connectMongoDB()
    const nameTrim=name?.trim()
    const emailTrim=email?.trim()
    await User.create({ name:nameTrim, email:emailTrim, password: hashedPassword })

    return NextResponse.json({ message: "User registered." }, { status: 201 })
  } catch (error) {
    return NextResponse.json(
      { message: "An error occurred while registering the user." },
      { status: 500 }
    )
  }
}
