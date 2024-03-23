"use client"
import React, { useState } from "react"

import { fetchProjectsBySales } from "@/lib/fetchProjects"

export default function TotalClients(props) {
  const [count, setcount] = useState()

  const userName = props.name

  useEffect(()=>{
    fetch("/api/project?salesperson=" + userName)
    .then((response) => response.json())
    .then((data) => {
      const projects = data.project

      const uniqueClientNames = []

      for (const project of projects) {
        const clientName = project.clientName
        if (!uniqueClientNames.includes(clientName)) {
          uniqueClientNames.push(clientName)
        }
      }

      setcount(uniqueClientNames.length)
    })
    .catch((error) => {
      console.error("Error:", error)
    })
  },[userName])
  

  if (!count) {
    return <span className="text-2xl font-semibold">0</span>
  }
  return <div>{count}</div>
}
