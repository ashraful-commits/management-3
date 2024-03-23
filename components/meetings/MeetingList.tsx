"use client"
import React, { useEffect, useState } from "react"
import Link from "next/link"
import { Trash2 } from "lucide-react"

import { fetchMeetings, DeleteMeetings } from "@/lib/salesMetting/salesMetting"
import { Button } from "@/components/ui/button"
import { ScrollArea } from "@/components/ui/scroll-area"
import { useToast } from "@/components/ui/use-toast"
import MeetingSkeleton from "./MeetingSkeleton"

export default function MeetingList() {
  const [meetingList, setMeetingList] = useState()
  const { toast } = useToast()
  const [isLoading, setLoading] = useState(false)

  useEffect(() => {
    setLoading(true)
    fetchMeetings().then((data) => {
      setLoading(false)
      setMeetingList(data)
    })
  }, [])

  const handleDelete = async (id) => {
    try {
      await DeleteMeetings(id)
      toast({
        variant: "default",
        title: "Video deleted",
      })
      window.location.reload();
    } catch (error) {
      toast({
        variant: "destructive",
        title: "Error during delete: " + error,
      })
      console.log("Error during delete:", error)
    }
  }

  return (
    <>
      {isLoading && <MeetingSkeleton />}
      <div className="mt-5">
        <ScrollArea className="w-full h-[900px] pb-[100px]">
          {meetingList &&
            meetingList.map((singleMeeting, index) => (
              <div key={index} className="flex items-center min-h-[250px] justify-start w-full p-10 bg-white border rounded-md gap-x-4">
                <Link
                  className="flex items-center justify-start w-full gap-x-4"
                  href={`https://www.youtube.com/watch?v=${singleMeeting.videoId}`}
                >
                  <div className="flex">
                    <img
                      className="rounded-md"
                      src={`https://img.youtube.com/vi/${singleMeeting.videoId}/mqdefault.jpg`}
                      alt=""
                    />
                  </div>
  
                  <div className="flex h-full">
                    <h5 className="text-lg font-semibold">
                      {singleMeeting.videoTitle ? singleMeeting.videoTitle : "No title"}
                    </h5>
                  </div>
                </Link>
                <div className="ml-auto">
                  <Button onClick={() => handleDelete(singleMeeting?._id)} className="bg-red-500">
                    <Trash2 />
                  </Button>
                </div>
              </div>
            ))}
        </ScrollArea>
      </div>
    </>
  )
}
