import React, { useEffect, useState } from "react"
import {upSellerPercentage} from "@/lib/fetchInvoices"
export default function UpsellerCommission(props) {
  const id = props.id
  const [commission, setCommission] = useState(0)
  function formatNumber(number) {
    if (number >= 1e9) {
      return (number / 1e9).toFixed(1) + "B"
    } else if (number >= 1e6) {
      return (number / 1e6).toFixed(1) + "M"
    } else if (number >= 1e3) {
      return (number / 1e3).toFixed(1) + "K"
    }
    return number.toString()
  }
  useEffect(() => {
    upSellerPercentage(id).then((res)=>{
      setCommission(res)
    })
       
  }, [id])

  return <div>{commission?formatNumber(commission?.toFixed(1)):0}</div>
}
