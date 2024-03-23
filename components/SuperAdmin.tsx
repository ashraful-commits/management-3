"user client"

import React, { useEffect, useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { Plus } from "lucide-react"

import { fetchProjects } from "@/lib/fetchProjects"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import Datatable from "@/components/datatable"

import SellerList from "./SellerList"
import SingleCard from "./SingleCard"
import TotalClients from "./superAdmin/TotalClients"
import TotalEarning from "./superAdmin/TotalEarning"
import TotalProject from "./superAdmin/TotalProject"
import { Button } from "./ui/button"

export default function SuperAdmin(props) {
  const userData = props.users

  const [currentPage, setCurrentPage] = useState(1)
  const postsPerPage = 8 // Number of posts to display per page
  const [searchTerm, setSearchTerm] = useState("")

  const filteredUsers = userData.filter((post) =>
    post.name.includes(searchTerm)
  )

  const startIndex = (currentPage - 1) * postsPerPage
  const endIndex = startIndex + postsPerPage

  // Determine whether there are more pages to display
  const hasMorePages = endIndex < filteredUsers.length

  const [data, setData] = useState(null)

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

          setData(apiData)
        }
      })
      .catch((error) => {
        console.error("Error in component:", error)
      })
  }, [])

  return (
    <>
      <div className="grid grid-cols-4 gap-4">
        <SingleCard title={"Total Sales Guy"} value={1200} />
        <SingleCard title={"Total Projects"} value={232} />
        <SingleCard title={"Total Clients"} value={120} />
        <SingleCard title={"Total Earnings"} value={12000} />
      </div>

      <div className="mt-4">
        <Tabs
          defaultValue="salesGuy"
          className="w-full items-center justify-between"
        >
          <div className="flex w-full items-center justify-between">
            <TabsList className="bg-white p-1.5 shadow-md">
              <TabsTrigger value="salesGuy" className="p-1.5">
                <span className="w-[120px] font-semibold">Sales Guy</span>
              </TabsTrigger>
              <TabsTrigger value="projects" className="p-1.5">
                <span className="w-[120px] font-semibold">Projects</span>
              </TabsTrigger>
            </TabsList>
          </div>

          <TabsContent value="salesGuy">
            {userData && <SellerList users={userData} />}
          </TabsContent>
          <TabsContent value="projects">
            <h4 className="container mt-10 block font-semibold text-black">
              Manage Projects
            </h4>
            <Datatable projects={data} />
          </TabsContent>
        </Tabs>
      </div>
    </>
  )
}
