import React, { useEffect, useState } from "react"

import { InvoicesbyProjectId } from "@/lib/fetchInvoices"
import { fetchProjectById } from "@/lib/fetchProjects"
import { getUser } from "@/lib/getUser"

import { Progress } from "./ui/progress"

export default function CommissionperProject(props) {
  const projectId = props.projectId
  const [finalAmount, setfinalAmount] = useState()
  const [rate, setRate] = useState(0)
  const [salesId, setsalesId] = useState()
  const [earning, setEarning] = useState(0)
  const [contracts, setcontracts] = useState()
  const [company, setCompany] = useState()
  function findCompanyByName(companyArray, companyName) {
    // Using Array.find to find the first object with the matching companyName
    return companyArray.find((company) => company.companyName === companyName)
  }

  useEffect(() => {
    fetchProjectById(projectId).then((data) => {
      setsalesId(data?.salesId)

      setCompany(data?.companyName)
    })

    if (salesId) {
      getUser(salesId).then((data) => {
        setcontracts(data?.contracts)
      })
    }

    if (contracts) {
      const scontract = findCompanyByName(contracts, company)
      if(scontract){
        setRate(scontract?.rate)
      }
    }

    if (rate) {
      InvoicesbyProjectId(projectId).then((data) => {
        const paidInvoices = data?.filter(
          (invoice) =>
            invoice.status === "Paid" && invoice.commission_paid === "Yes"
        )

        // Calculate the total amount of paid invoices
        const totalAmount = paidInvoices.reduce(
          (total, invoice) => total + (invoice.amount / 100) * rate,
          0
        )
        setfinalAmount(totalAmount)
        const totalPaid = paidInvoices.reduce(
          (total, invoice) => total + invoice.amount,
          0
        )
        setEarning(totalPaid)
      })
    }
  }, [salesId, contracts])

  return (
    <div className="flex items-center justify-center w-full gap-x-4">
      <div className="justify-start w-[15%]">
        {finalAmount && "$" + finalAmount}
      </div>
      {finalAmount != 0 && earning != 0 && (
        <Progress
          value={(finalAmount / earning) * 100}
          className={"w-[40%] h-2 justify-end"}
        />
      )}

      {finalAmount == 0 && earning == 0 && (
        <Progress value={0} className={"w-[40%] h-2 justify-end"} />
      )}
      <div className="justify-start w-[20%]"> ${earning}</div>
    </div>
  )
}
