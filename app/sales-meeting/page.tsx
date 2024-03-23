"use client"

import React, { useEffect, useState } from "react"
import { Search } from "lucide-react"

import { DeleteMeetings, fetchMeetings } from "@/lib/salesMetting/salesMetting"
import { ScrollArea } from "@/components/ui/scroll-area"

import SalesMeeting from "../../components/meetings/SalesMeeting"

export default function SalesMetting() {
  const [meetingList, setMeetingList] = useState([])
  const [isLoading, setLoading] = useState(false)
  const [play, setPlay] = useState()
  const [searchQuery, setSearchQuery] = useState("")
  const [videoId, setVideoId] = useState("")

  useEffect(() => {
    setLoading(true)
    fetchMeetings().then((data) => {
      setLoading(false)
      setMeetingList(data)
    })
  }, [])

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value)
  }

  const filteredMeetingList = meetingList.filter((item) =>
    item.videoTitle?.toLowerCase().includes(searchQuery?.toLowerCase())
  )

  return (
    <div className="container">
      <h1 className="mb-4 text-2xl font-semibold">Sales Meetings</h1>
      <div className="flex gap-5">
        <div className="w-8/12 p-6 bg-white border rounded-md shadow-md flex items-center">
          <iframe
            className="w-full rounded-md aspect-video"
            src={`https://www.youtube.com/embed/${videoId}?autoplay=1`}
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          ></iframe>
        </div>
        <div className="w-4/12 p-6 bg-white border rounded-md shadow-md">
          <form>
            <div className="flex items-center relative mb-4">
              <span className="absolute left-5">
                <Search size={20} />
              </span>
              <input
                type="text"
                placeholder="Search video"
                className="w-full px-3 py-3 pl-14 border rounded-md text-black placeholder:text-black"
                value={searchQuery}
                onChange={handleSearchChange}
              />
            </div>
          </form>
          <ScrollArea className="w-full h-[400px]">
            {isLoading && <SalesMeeting />}
            {filteredMeetingList.length > 0
              ? filteredMeetingList.map((item, index) => (
                  <div
                    key={index}
                    onClick={() => {
                      setPlay(index), setVideoId(item.videoId)
                    }}
                    className={`flex items-center p-4 rounded-md cursor-pointer border-y ${
                      play === index && "bg-primary"
                    }`}
                  >
                    <div className="w-4/12">
                      <img
                        className="rounded-md"
                        src={`https://img.youtube.com/vi/${item.videoId}/mqdefault.jpg`}
                        alt=""
                      />
                    </div>
                    <div className="w-8/12 pl-4">
                      <h4
                        className={`font-semibold ${
                          play === index ? "text-white" : "text-gray-700"
                        }`}
                      >
                        {item.videoTitle ? item.videoTitle : "No title"}
                      </h4>
                    </div>
                  </div>
                ))
              : !isLoading && (
                  <p className="py-2 text-center">No video found</p>
                )}
          </ScrollArea>
          <span>Total: {filteredMeetingList.length} videos</span>
        </div>
      </div>
    </div>
  )
}
