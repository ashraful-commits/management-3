import React from "react"

import AddMeeting from "@/components/meetings/AddMeeting"
import MeetingList from "@/components/meetings/MeetingList"

export default function page() {
  return (
    <div className="container">
      <h1 className="mb-5 text-2xl">Manage Meetings</h1>
      <AddMeeting />
      <MeetingList />
    </div>
  )
}
