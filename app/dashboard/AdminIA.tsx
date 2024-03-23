"user client"

import React, { useEffect, useState } from "react"
import { useSession } from "next-auth/react"

import { fetchCompanies } from "@/lib/company/company"
import { fetchInvoices,fetchInvoiceEarningByCompanyName } from "@/lib/fetchInvoices"
import { fetchProjects ,fetchProjectById} from "@/lib/fetchProjects"
import { fetchUsers,fetchAllUsers } from "@/lib/fetchUsers"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import SellerList from "@/components/SellerList"
import StatCard from "@/components/StatCard"
import AlertBox from "@/components/common-ui/AlertBox"
import Datatable from "@/components/datatable"
import CardSkeleton from "@/components/skeleton/CardSkeleton"
import MainSkeleton from "@/components/skeleton/MainSkeleton"

export default function AdminIA(props) {
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
        apiData = apiData.filter((item) => item.companyName == "image appeal")

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

      fetchInvoiceEarningByCompanyName("image appeal").then((res)=>{
        settotalEarn(res)
      })
    fetchUsers("Sales1")
      .then((userData) => {
      })
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
      const demo = companies.filter(
        (item) => item.companyName == "image appeal"
      )
      setAllcompanies(demo)
    })
    setLoading(false)
  }, [])

  useEffect(()=>{
    fetchAllUsers()
        .then((user) => {
          setuserData(user)
        })
  },[])

  if (!data) {
    return <MainSkeleton/>
  }

  return (
    <>
      <div className="mt-8 min-w-[1400px]">
        {pendingProject && pendingProject.length > 0 && (
          <AlertBox projects={pendingProject} />
        )}
        <div className="grid grid-cols-4 gap-4">
          {!salesPerson && <CardSkeleton />}
          {salesPerson && (
            <StatCard title={"Sales Rep"} value={userData.length} />
          )}
          {!data && <CardSkeleton />}
          {data && <StatCard title={"Projects"} value={data.length} />}

          {!clientName && <CardSkeleton />}
          {clientName && (
            <StatCard title={"Clients"} value={clientName.length} />
          )}

          {!totalEarn && totalEarn != 0 && <CardSkeleton />}
          {(totalEarn || totalEarn == 0) && (
            <StatCard title={"Earnings"} value={totalEarn?.toFixed(2)} prefix="$" />
          )}
        </div>
        <Tabs
          defaultValue="projects"
          className="items-center justify-between w-full mt-5"
        >
          <div className="flex items-center justify-between w-full">
            <TabsList className="bg-white p-1.5 shadow-md">
              <TabsTrigger value="projects" className="p-1.5">
                <span className="w-[120px] font-semibold">Projects</span>
              </TabsTrigger>
              <TabsTrigger value="salesRep" className="p-1.5">
                <span className="w-[120px] font-semibold">Sales Rep</span>
              </TabsTrigger>
            </TabsList>
          </div>
          <TabsContent value="projects">
            {Allcompanies && data && (
              <Datatable projects={data} Allcompanies={Allcompanies} />
            )}
          </TabsContent>
          <TabsContent value="salesRep">
            {userData && <SellerList users={userData} />}
          </TabsContent>
        </Tabs>
      </div>
    </>
  )
}
