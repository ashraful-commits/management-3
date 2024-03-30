"use client"

import { useEffect, useState } from "react"
import { useSession } from "next-auth/react"
import AddProject from "@/components/AddProject"
import MainSkeleton from "@/components/skeleton/MainSkeleton"

import { fetchCompanies } from "@/lib/company/company"
import { fetchProjects } from "@/lib/fetchProjects"
import { fetchUsers } from "@/lib/fetchUsers"
import { InvoiceByUserId,upSellerPercentage } from "@/lib/fetchInvoices"
import { getUser } from "@/lib/getUser"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import SalesTable from "@/components/SalesTable"
import SingleCard from "@/components/SingleCard"
import StatCard from "@/components/StatCard"
import AlertBox from "@/components/common-ui/AlertBox"
import DatatableSeller1 from "@/components/datatableSeller1"
import CardSkeleton from "@/components/skeleton/CardSkeleton"
import AddSalesrep from "@/components/AddSalesrep"
import TableRowSkeleton from "./TableRowSkeleton"
import ContractPage from "@/components/Contracts"

export default function SalesOne() {
  const { data: session } = useSession()
  const [data, setData] = useState(null)
  const [clientName, setclientName] = useState()
  const [pendingProject, setpendingProject] = useState()

  const role = session?.user?.role
  const username = session?.user?.name
  const [userData, setuserData] = useState()

  const [salesGuy, setsalesGuy] = useState()
  const [earning, setEarning] = useState(0)
  const [commission, setcommission] = useState(0)

  const [Allcompanies, setAllcompanies] = useState()

  const [userId, setuserId] = useState()
  const [userName, setuserName] = useState()

  const [Downstream, setDownstream] = useState()

  useEffect(() => {
    if (session) {
      const id = session?.user?.id

      fetch(`/api/user?upSellerId=${id}`)
        .then((res) => res.json())
        .then((data) => {
          setsalesGuy(data.users.length)
        })
        .catch((error) => {
          console.error("Error:", error)
        })

        InvoiceByUserId(session.user.id).then((res)=>{
          setEarning(res)
      })
      upSellerPercentage(session.user.id).then((res)=>{
        setcommission(res)
      })

      fetchUsers("Sales2")
        .then((userData) => {
          const Downstream = userData.filter((item) => item.upSellerId == id)
          setDownstream(Downstream)
        })
        .catch((error) => {
          console.error("Error in component:", error)
        })

      fetchProjects()
        .then((apiData) => {
          if (apiData) {
            const allProjects = apiData.filter((item) => item.salesId == id)
            const uniqueClientNames = []

            allProjects.forEach((item) => {
              if (!uniqueClientNames.includes(item.clientName)) {
                uniqueClientNames.push(item.clientName)
              }
            })

            setclientName(uniqueClientNames.length)

            setData(allProjects)

            const pendingProjects = allProjects.filter(
              (item) => item.status == "Pending"
            )
            setpendingProject(pendingProjects)
          }
        })
        .catch((error) => {
          console.error("Error in component:", error)
        })

      setuserId(session?.user?.id)
      setuserName(session?.user?.name)

      if (session) {
        const id = session?.user?.id
        getUser(id).then((user) => {
          setAllcompanies(user.contracts)
        })
      }
    }
  }, [session])
  if (!data) {
    return (
      <div className="w-full h-full">
        <MainSkeleton />
      </div>
    )
  }
  return (
    <div className =" flex min-w-[1536px] flex-col gap-y-2">
      
      {pendingProject && pendingProject.length > 0 && (
        <AlertBox projects={pendingProject} />
      )}
     <div className="flex  min-w-[1536px] gap-x-4">
     <div className="flex flex-col p-2 min-w-[400px] border justify-between rounded-md max-h-[80vh]">
      <div className="flex flex-col items-center p-3 bg-orange-500 rounded-md shadow-md">
         <h1 className="text-2xl font-bold text-white capitalize">{session?.user?.name}</h1>
          <span className="text-sm text-gray-100">{session?.user?.email}</span>
         </div>
        {!session && <CardSkeleton />}
        {session && <StatCard title="Sales Rep" value={salesGuy} />}

        {!clientName && clientName != 0 && <CardSkeleton />}
        <StatCard title="Clients" value={clientName} />

        {!session && <CardSkeleton />}
        {(earning || earning == 0) && (
          <>
            <StatCard title="Earnings" value={earning} prefix="$" />
          </>
        )}
        {(commission || commission == 0) && (
          <>
            <StatCard title="Commission Earnings" value={commission} prefix="$" />
          </>
        )}
      </div>
      <div className=" max-h-[80vh] min-h-[80vh] border rounded-md p-2 w-full">
        <Tabs
          defaultValue="projects"
          className="items-center justify-between w-full"
        >
          <div className="flex items-center justify-between w-full ">
            <TabsList className="p-1.5 bg-green-100 w-full">
              <TabsTrigger value="projects" className="p-1.5">
                <span className="w-[120px] font-semibold">Projects</span>
              </TabsTrigger>
              <TabsTrigger value="salesRep" className="p-1.5">
                <span className="w-[160px] font-semibold">Sales Reps</span>
              </TabsTrigger>
              <TabsTrigger value="Add project" className="p-1.5">
                <span className="w-[120px] font-semibold">Add project</span>
              </TabsTrigger>
              <TabsTrigger value="addsalesrep" className="p-1.5">
                <span className="w-[120px] font-semibold">Add sales rep</span>
              </TabsTrigger>
            </TabsList>
          </div>
          <TabsContent value="projects">
            {!data && <TableRowSkeleton />}

            {userId && userName && data && Allcompanies && (
              <DatatableSeller1
                projects={data}
                Allcompanies={Allcompanies}
                id={userId}
                userName={userName}
              />
            )}
          </TabsContent>
          <TabsContent value="salesRep">
            {Downstream && <SalesTable sales={Downstream} />}
          </TabsContent>
          <TabsContent value="Add project">
          <AddProject/>
          </TabsContent>
          <TabsContent value="addsalesrep">
          <AddSalesrep upSellerId={session?.user?.id} upSeller={userName} />
          </TabsContent>
        </Tabs>
      </div>
     </div>
    </div>
  )
}
