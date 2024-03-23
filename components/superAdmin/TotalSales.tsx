import React, { useEffect, useState } from "react"

export default function TotalSales(props) {
  const userId = props.userId
  const [totalSales, settotalSales] = useState()
  useEffect(() => {
    fetch("/api/user?upSellerId=" + userId)
      .then((response) => response.json())
      .then((data) => {
        settotalSales(data.users.length)
      })
      .catch((error) => {
        console.error("Error:", error)
      })
  }, [userId])

  return <div>{totalSales && totalSales}</div>
}
