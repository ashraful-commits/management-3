"use client"

import React, { useState } from "react"
import { useRouter } from "next/navigation"
import { FilePlus2 } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { toast, useToast } from "@/components/ui/use-toast"
import { Icons } from "@/components/icons"

export default function AddMeeting() {
  const router = useRouter()
  const { toast } = useToast()
  const [videoId, setvideoId] = useState("")
  const [videoTitle, setVideoTitle] = useState("")
  const [isLoading, setLoading] = useState(false)

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault()
    setLoading(true)
    try {
      const res = await fetch("/api/salesmetting", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          videoId,
          videoTitle
        }),
      })

      if (res.ok) {
        console.log("video added!")
        toast({
          title: "video added!",
        })
        setLoading(false)
        window.location.reload(true)
      } else {
        console.log("user reg failed!")
        toast({
          variant: "destructive",
          title: "user reg failed!",
        })
        setLoading(false)
      }
    } catch (error) {
      toast({
        variant: "destructive",
        title: "Error during add:" + error,
      })
      console.log("Error during add:", error)
      setLoading(false)
    }
  }
  return (
    <form className="flex gap-6" onSubmit={handleSubmit}>
      <Input
        type="text"
        placeholder="Youtube Video id"
        onChange={(e) => setvideoId(e.target.value)}
        required
      />
      <Input
        type="text"
        placeholder="Video title here"
        onChange={(e) => setVideoTitle(e.target.value)}
        required
      />
      <Button className="px-10 flex items-center min-w-[200px]">
        {isLoading && <Icons.spinner className="size-4 animate-spin" />}
        {!isLoading && <FilePlus2 size={20} />}
        <span className="inline-block ml-2">Add Video</span>
      </Button>
    </form>
  )
}
