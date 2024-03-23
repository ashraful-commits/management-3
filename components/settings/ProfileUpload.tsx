"use client"
import { useState } from "react"
import { Check, X } from "lucide-react"
import { useSession } from "next-auth/react"
import {
  Dialog
} from "@/components/ui/dialog"
import { useToast } from "@/components/ui/use-toast"
import CropImage from "@/components/CropImage"

import { Icons } from "../icons"
import { Button } from "../ui/button"
import { Input } from "../ui/input"

export default function ProfileUpload({ setAvatar }) {
  const { toast } = useToast()
  const [isLoading, setLoading] = useState(false)
  const [image, setImage] = useState(null)
  const [src, setSrc] = useState(null)
  const [result, setResult] = useState(null)
  const { data: session } = useSession()
  const id = session?.user?.id
  const handleImageChange = (e) => {
    const file = e.target.files[0]
    setImage(file)
    setSrc(URL.createObjectURL(file))
    setResult(URL.createObjectURL(file))
  }

  async function updateAvatar(url) {
    try {
      const res = await fetch(`/api/user/avatar/?id=${id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          avatar: url,
        }),
      })

      if (res.ok) {
        toast({
          variant: "default",
          title: "User Updated!",
        })
        setLoading(false)
        window.location.reload()
      } else {
        console.log("submission failed!")
        toast({
          title: "submission failed!",
        })
      }
    } catch (error) {
      console.log("Error during  submit:", error)
      toast({
        variant: "destructive",
        title: `Error during submit:", ${error}`,
      })
    }
  }

  const handleImageUpload = async () => {
    setLoading(true)
    const formData = new FormData()
    formData.append("file", image)
    formData.append("upload_preset", "p2y46g7e")

    try {
      const response = await fetch(
        `https://api.cloudinary.com/v1_1/drzedrk1e/image/upload`,
        {
          method: "POST",
          body: formData,
        }
      )

      if (response.ok) {
        const data = await response.json()
        console.log("Image uploaded successfully:", data)
        updateAvatar(data.url)
      } else {
        console.error("Error uploading image:", response.statusText)
      }
    } catch (error) {
      console.error("Error uploading image:", error)
    }
  }

  return (
    <div className="z-0 flex items-center ml-4 ">
      {src && (
        <div className="absolute z-50 flex items-center justify-center min-h-[100vh] bg-opacity-20 bg-black min-w-[100vw] left-0 top-0">
          <div className="p-3 bg-white border rounded-lg shadow-lg">
            <div className="flex justify-between ">
              <button
                onClick={() => {
                  setSrc(null)
                }}
              >
                <X className="text-red-500" />
              </button>
              <button
                onClick={() => {
                  setSrc(null), setImage(result), setAvatar(result)
                }}
              >
                <Check className="text-green-500" />
              </button>
            </div>
          <CropImage file={src} setResult={setResult} />
        </div>
        </div>
      )}
      <div className="flex flex-col ml-4 cursor-pointer">
        <Input
          id="picture"
          className="mb-2 cursor-pointer"
          type="file"
          onClick={(e)=>{e.target.value=null}}
          onChange={handleImageChange}
        />
        <Button disabled={!image &&true} onClick={handleImageUpload}>
          {isLoading && <Icons.spinner className="mr-2 size-4 animate-spin" />}
          Upload Image
        </Button>
      </div>
    </div>
  )
}
