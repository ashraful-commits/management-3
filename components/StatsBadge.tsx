import React, { useEffect, useState } from "react"

import { Badge } from "@/components/ui/badge"

export default function StatsBadge(props) {
  const id = props.id
  const [projects, setprojects] = useState(0)
  const [clients, setclients] = useState(0)
  const [earnings, setearnings] = useState(0)
  const [commission, setcommission] = useState(0)

  useEffect(() => {
    fetch(`/api/stat?id=${id}`)
      .then((res) => res.json())
      .then((data) => {
        setprojects(data.projects)
        setclients(data.clients)
        setearnings(data.totalAmount)
        setcommission(data.commission)
      })
      .catch((error) => {
        console.error("Error:", error)
      })
  }, [])
  return (
    <div>
      <Badge variant="secondary" className="mr-1">
        Projects: {projects}
      </Badge>
      <Badge variant="secondary" className="mr-1">
        Clients: {clients}
      </Badge>
      <Badge variant="secondary" className="mr-1">
        Earnings: {commission}
      </Badge>
    </div>
  )
}
