import React, { useEffect, useState } from "react"
import {InvoiceByUserId} from "/lib/fetchInvoices"
export default function TotalEarning(props) {
  const userId = props.userId
  const [invoices, setInvoices] = useState(0)

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
    InvoiceByUserId(userId).then((res)=>{
      setInvoices(res)
    })
  }, [userId])

  if (!invoices) {
    return <span className="text-2xl font-semibold">0</span>
  }

  return <div>{formatNumber(invoices?.toFixed(1))}</div>
}
