import React, { useEffect, useState } from "react"

import { Badge } from "@/components/ui/badge"

export default function StatsBadge(props) {
  const id = props.id
  const upSellerId = props.upSellerId
  const [commission, setcommission] = useState(0)

  useEffect(() => {
    fetch(`/api/commission?upsale=${upSellerId}&sellerId=${id}`)
      .then((res) => res.json())
      .then((data) => {
        setcommission(data.commission)
      })
      .catch((error) => {
        console.error("Error:", error)
      })
  }, [id,upSellerId])
  return (
    <div>
      <Badge variant="secondary" className="mx-1">
     <span>Commission:  </span> {commission ? commission?.toFixed(2) :0}

      </Badge>
    </div>
  )
}
