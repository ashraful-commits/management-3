import React from "react"

export default function Gettotal(props) {
  const invoices = props.data
  const filter = props.filter
  // Filter invoices with a "Paid" status
  const paidInvoices = invoices.filter((invoice) => invoice.status === filter)

  // Calculate the total amount of paid invoices
  const totalAmount = paidInvoices.reduce(
    (total, invoice) => total + invoice.amount,
    0
  )

  return <>${totalAmount}</>
}
