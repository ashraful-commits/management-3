import React from "react"

import AddMeeting from "@/components/meetings/AddMeeting"
import MeetingList from "@/components/meetings/MeetingList"

export default function AllMeetings() {
  return (
    <div className="w-full">
     <div className="flex items-center justify-between px-2 py-2 mt-5 bg-orange-200 rounded-md "> <h1 className="text-2xl ">Manage Meetings</h1>
      <AddMeeting /></div>
      <MeetingList />
    </div>
  )
}
