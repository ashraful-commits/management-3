"user client"

import React, { useEffect, useState } from "react"
import { useSession } from "next-auth/react"

import { fetchCompanies } from "@/lib/company/company"
import { fetchInvoiceEarning, fetchInvoices } from "@/lib/fetchInvoices"
import { fetchProjectById, fetchProjects } from "@/lib/fetchProjects"
import { fetchAllUsers, fetchUsers } from "@/lib/fetchUsers"
import { Skeleton } from "@/components/ui/skeleton"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import SellerList from "@/components/SellerList"
import StatCard from "@/components/StatCard"
import AlertBox from "@/components/common-ui/AlertBox"
import Datatable from "@/components/datatable"
import AddProject from "@/components/AddProject"
import ManageClient from "@/components/AllClient"
import ManageUser from "@/components/AllUser"
import ManageContracts from "@/components/AllContracts"
import AllMeetings from "@/components/AllMeetings"
import ContractPage from "@/components/Contracts"
import ManageCompanyPage from "@/components/AllCompanies"
import CardSkeleton from "@/components/skeleton/CardSkeleton"
import MainSkeleton from "@/components/skeleton/MainSkeleton"

export default function SuperAdmin(props) {
  const { data: session } = useSession()
  const [data, setData] = useState(null)
  const [clientName, setclientName] = useState()
  const [salesPerson, setSalesPerson] = useState([])
  const [pendingProject, setpendingProject] = useState()
  const [completedproject, setcompletedproject] = useState()
  const [isLoading, setLoading] = useState(true)

  const [totalEarn, settotalEarn] = useState(0)
  const [upSellerCommission, setUpSellerCommission] = useState(0)
  const role = session?.user?.role
  const username = session?.user?.name
  const userId = session?.user?.id
  const [userData, setuserData] = useState([])
  const [Allcompanies, setAllcompanies] = useState()

  useEffect(() => {
    fetchProjects()
      .then((apiData) => {
        if (apiData) {
          const pendingProjects = apiData.filter(
            (item) => item.status == "Pending"
          )
          const completedproject = apiData.filter(
            (item) => item.status == "Complete"
          )
          const uniqueClientNames = []

          apiData.forEach((item) => {
            if (!uniqueClientNames.includes(item.clientName)) {
              uniqueClientNames.push(item.clientName)
            }
          })

          const uniqueSales = []
          apiData.forEach((item) => {
            if (!uniqueSales.includes(item.salesPerson)) {
              uniqueSales.push(item.salesPerson)
            }
          })

          setcompletedproject(completedproject)
          // setSalesPerson(uniqueSales)
          setclientName(uniqueClientNames)
          setpendingProject(pendingProjects)
          setData(apiData)
          setLoading(false)
        }
      })
      .catch((error) => {
        console.error("Error in component:", error)
      })

    fetchInvoiceEarning().then((res) => {
      settotalEarn(res)
    })
    fetchUsers("Sales1")
      .then((userData) => {})
      .catch((error) => {
        console.error("Error in component:", error)
      })
    fetchUsers("Sales2")
      .then((salesGuy) => {
        setSalesPerson(salesGuy)
      })

      .catch((error) => {
        console.error("Error in component:", error)
      })

    fetchCompanies().then((companies) => {
      setAllcompanies(companies)
    })
    setLoading(false)
  }, [])

  useEffect(() => {
    fetchAllUsers().then((users) => {
      setuserData(users)
    })
  }, [])

  if (!data) {
    return (
      <div className="w-full h-full">
        <MainSkeleton />
      </div>
    )
  }

  return (
    <>
      <div className="flex flex-col min-w-[1536px]">
        {pendingProject && pendingProject.length > 0 && (
          <AlertBox projects={pendingProject} />
        )}
       <div className="min-w-[1536px]  flex gap-x-5">
       <div className="flex flex-col p-2 min-w-[400px] border justify-between rounded-md max-h-[80vh]">
         <div className="flex flex-col items-center p-3 bg-orange-500 rounded-md shadow-md">
         <h1 className="text-2xl font-bold text-white capitalize">{session?.user?.name}</h1>
          <span className="text-sm text-gray-100">{session?.user?.email}</span>
         </div>
          {salesPerson && (
            <StatCard title={"Sales Rep"} value={userData.length} />
            )}
    
          {data && <StatCard title={"Projects"} value={data.length} />} 

          {clientName && (
            <StatCard title={"Clients"} value={clientName.length} />
          )}

         <div className="w-auto">
        
          {(totalEarn || totalEarn == 0) && (
            <StatCard
              title={"Earnings"}
              value={totalEarn.toFixed(2)}
              prefix="$"
            />
          )}
         </div>
        </div>
        <Tabs
          defaultValue="users"
          className="w-full p-2 border min-h-[80vh] rounded-md"
        >
          <div className="flex items-center justify-between w-full">
            <TabsList className="p-1.5 border w-full  bg-green-100  0">
              <TabsTrigger value="users" className="p-1.5">
                <span className="w-[120px] font-semibold"> Users</span>
              </TabsTrigger>
              <TabsTrigger value="clients" className="p-1.5">
                <span className="w-[120px] font-semibold"> Clients</span>
              </TabsTrigger>
              <TabsTrigger value="companies" className="p-1.5">
                <span className="w-[120px] font-semibold"> Companies</span>
              </TabsTrigger>
              <TabsTrigger value="contracts" className="p-1.5">
                <span className="w-[120px] font-semibold"> Contracts</span>
              </TabsTrigger>
              <TabsTrigger value="meetings" className="p-1.5">
                <span className="w-[120px] font-semibold"> Meetings</span>
              </TabsTrigger>
              <TabsTrigger value="projects" className="p-1.5">
                <span className="w-[120px] font-semibold"> Projects</span>
              </TabsTrigger>
              <TabsTrigger value="Add project" className="p-1.5">
                <span className="w-[120px] font-semibold">Add project</span>
              </TabsTrigger>
              <TabsTrigger value="salesRep" className="p-1.5">
                <span className="w-[120px] font-semibold">Sales Rep</span>
              </TabsTrigger>
          
            </TabsList>
          </div>
          <TabsContent value="users">
            <ManageUser/>
          </TabsContent>
          <TabsContent value="clients">
            <ManageClient/>
          </TabsContent>
          <TabsContent value="companies">
            <ManageCompanyPage/>
          </TabsContent>
          <TabsContent value="contracts">
          <Tabs
          defaultValue="Contracts"
          className="w-full p-2 rounded-md "
        >
          <div className="flex items-center justify-between w-full">
            <TabsList className="p-1.5 border  bg-orange-100 w-[280px]">
              <TabsTrigger value="ContractTable" className="p-1.5">
                <span className="w-[120px] font-semibold"> Contract Table</span>
              </TabsTrigger>
              <TabsTrigger value="Contracts" className="p-1.5">
                <span className="w-[120px] font-semibold"> Contracts</span>
              </TabsTrigger>
          
            </TabsList>
          </div>
          <TabsContent value="ContractTable">
            <ManageContracts/>
          </TabsContent>
          <TabsContent value="Contracts">      
            <ContractPage/>
          </TabsContent>
          
       
        </Tabs>
          </TabsContent>
          <TabsContent value="meetings">
            <AllMeetings/>
          </TabsContent>
          <TabsContent value="projects">
            {Allcompanies && data && (
              <Datatable projects={data} Allcompanies={Allcompanies} />
            )}
          </TabsContent>
          <TabsContent value="Add project">

              <AddProject/>
            
          </TabsContent>
          <TabsContent value="salesRep">
            {userData && <SellerList users={userData} />}
          </TabsContent>
       
        </Tabs>
       </div>
      </div>
    </>
  )
}
