"use client"

import { useEffect, useState } from "react"
import { useSession } from "next-auth/react"
import MainSkeleton from "@/components/skeleton/MainSkeleton"

import { fetchCompanies } from "@/lib/company/company"
import { InvoiceByUserId, fetchInvoices } from "@/lib/fetchInvoices"
import { fetchProjects } from "@/lib/fetchProjects"
import { getUser } from "@/lib/getUser"
import StatCard from "@/components/StatCard"
import AlertBox from "@/components/common-ui/AlertBox"
import DatatableSales from "@/components/datatableSales"
import ContractPage from "@/components/Contracts"
import CardSkeleton from "@/components/skeleton/CardSkeleton"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import AddProject from "@/components/AddProject"
import TableRowSkeleton from "./TableRowSkeleton"

export default function SalesTwo() {
  const { data: session } = useSession()
  const [data, setData] = useState(null)
  const [clientName, setclientName] = useState()
  const [salesPerson, setSalesPerson] = useState()
  const [pendingProject, setpendingProject] = useState()
  const [completedproject, setcompletedproject] = useState()
  const [isLoading, setLoading] = useState(true)

  const [totalEarn, settotalEarn] = useState(0)
  const role = session?.user?.role
  const username = session?.user?.name

  const [AllCompanies, setAllcompanies] = useState()
  const [allinvoice, setallInvoice] = useState()

  useEffect(() => {
    fetchProjects()
      .then((apiData) => {
        if (apiData) {
          const pendingProjects = apiData.filter(
            (item) => item.status == "Pending" && item.salesPerson == username
          )
          const filteredData = apiData.filter(
            (item) => item.status !== "Pending" && item.salesPerson == username
          )

          const completedproject = apiData.filter(
            (item) => item.status == "Complete" && item.salesPerson == username
          )

          const uniqueClientNames = []

          filteredData.forEach((item) => {
            if (!uniqueClientNames.includes(item.clientName)) {
              uniqueClientNames.push(item.clientName)
            }
          })

          setcompletedproject(completedproject)
          setclientName(uniqueClientNames)
          setpendingProject(pendingProjects)
          setData(filteredData)
          setLoading(false)
        }
      })
      .catch((error) => {
        console.error("Error in component:", error)
      })

    InvoiceByUserId(session?.user?.id).then((res) => {
      settotalEarn(res)
    })
    if (session) {
      const id = session?.user?.id
      getUser(id).then((user) => {
        console.log(user)
        setAllcompanies(user?.contracts)
      })
    }
  }, [session, role, username])
  if (!data) {
    return (
      <div className="w-full h-full">
        <MainSkeleton />
      </div>
    )
  }
  return (
    <div className="mt-8 min-w-[1536px]  flex flex-col gap-y-2">
      {pendingProject && pendingProject.length > 0 && (
        <AlertBox projects={pendingProject} />
      )}

   <div className="mt-8 min-w-[1536px]  flex gap-x-5">
   <div className="flex flex-col p-2 min-w-[400px] border justify-between rounded-md max-h-[80vh]">
      <div className="flex flex-col items-center justify-between p-3 bg-orange-500 rounded-md shadow-md">
         <h1 className="text-2xl font-bold text-white capitalize">{session?.user?.name}</h1>
          <span className="text-sm text-gray-100">{session?.user?.email}</span>
         </div>
        {!totalEarn && totalEarn != 0 && <CardSkeleton />}
        {(totalEarn || totalEarn == 0) && (
          <StatCard title={"Earnings"} value={totalEarn} prefix="$" />
        )}

        {!data && <CardSkeleton />}
        {data && (
          <StatCard
            title={"Projects"}
            value={String(data.length).padStart(2, "0")}
          />
        )}

        {!clientName && <CardSkeleton />}
        {clientName && (
          <StatCard
            title={"Clients"}
            value={String(clientName.length).padStart(2, "0")}
          />
        )}
      </div>

   <div className="w-full">
     <Tabs
          defaultValue="projects"
          className="w-full p-2 border min-h-[80vh] rounded-md"
        >
          <div className="flex items-center justify-between w-full">
            <TabsList className="p-1.5 border w-full  bg-green-100  0">
              
              <TabsTrigger value="projects" className="p-1.5">
                <span className="w-[120px] font-semibold"> Projects</span>
              </TabsTrigger>
              <TabsTrigger value="Add project" className="p-1.5">
                <span className="w-[120px] font-semibold">Add project</span>
              </TabsTrigger>
              <TabsTrigger value="contracts" className="p-1.5">
                <span className="w-[120px] font-semibold">Contracts</span>
              </TabsTrigger>

            </TabsList>
          </div>
         
          <TabsContent value="projects">
          {!data && <TableRowSkeleton />}

            {data && AllCompanies && (
              <DatatableSales
                projects={data}
                AllCompanies={AllCompanies}
                allinvoice={allinvoice}
              />
            )}
          </TabsContent>
          <TabsContent value="Add project">

              <AddProject/>
            
          </TabsContent>
          <TabsContent value="contracts">
            <ContractPage/>
          </TabsContent>
         
        </Tabs>
   </div>
   </div>
     
    </div>
  )
}
