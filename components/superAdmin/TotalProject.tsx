"use client"
import React, { useState } from "react"

export default function TotalEarning(props) {
  const [count, setcount] = useState()

  const userName = props.name
    useEffect(()=>{
      fetch(`/api/project?salesperson=${userName}`)
      .then((res) => res.json())
      .then((user) => {
        setcount(user.project.length)
      })
      .catch((error) => {
        console.error("Error:", error)
      })
    },[userName])
  if (!count) {
    return <span className="text-2xl font-semibold">0</span>
  }

  return <>{count}</>
}
