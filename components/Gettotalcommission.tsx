import React from "react"

export default function Gettotalcommission(props) {
  const invoices = props.data
  // const filter = props.filter
  const rate = props.rate
  // Filter invoices with a "Paid" status
  const paidInvoices = invoices.filter(
    (invoice) => invoice.status === "Paid" && invoice.commission_paid === "Yes"
  )

  // Calculate the total amount of paid invoices
  const totalAmount = paidInvoices.reduce(
    (total, invoice) => total + (invoice.amount / 100) * rate,
    0
  )

  return <>${totalAmount}</>
}
