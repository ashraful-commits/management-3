// pages/api/upload.js
import { getServerSession } from "next-auth"
import { parser } from "../../../lib/cloudinary"


export default async function handler(req, res) {
  const session = await getServerSession(req)
  if (!session) {
    return NextResponse.json("Unauthorized")
  }else{
    try {
      if (req.method === "POST") {
        await parser.single("image")(req, res)
        res.json({ message: "Image uploaded successfully" })
      } else {
        res.status(405).json({ error: "Method not allowed" })
      }
    } catch (error) {
      console.error("Error uploading image", error)
      res.status(500).json({ error: "Error uploading image" })
    }
  }
  
}
