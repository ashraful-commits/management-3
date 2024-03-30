"use client"

import React, { useEffect, useState } from "react"
import Image from "next/image"
import { Crown, Trophy } from "lucide-react"

import { fetchProjects } from "@/lib/fetchProjects"
import { fetchSales } from "@/lib/fetchUsers"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import SalesTable from "@/components/SalesTable"
import SellerList from "@/components/SellerList"
import Datatable from "@/components/datatable"
import DatatableSales from "@/components/datatableSales"
import Sales2Skeleton from "@/components/skeleton/Sales2Skeleton"
import TotalSales from "@/components/superAdmin/TotalSales"

export default function Sales({ params }) {
  const name = params.name
  const [userDetails, setuserDetails] = useState()
  const [userData, setuserData] = useState([])
  const [data, setData] = useState(null)
  const [projects, setprojects] = useState(0)
  const [clients, setclients] = useState(0)
  const [earnings, setearnings] = useState(0)
  const [seller1earnings, setseller1earnings] = useState(0)
  const [commission, setcommission] = useState(0)
  const [seller1commission, setSeller1commission] = useState(0)
  const [grandCommission, setgrandCommission] = useState(0)
  const [AllCompanies, setAllCompanies] = useState([])

  useEffect(() => {
    fetch(`/api/user?name=${name}`)
      .then((res) => res.json())
      .then((user) => {
        setuserDetails(user?.users)
        setAllCompanies(user?.users?.contracts)
        console.log(user?.users)
        //=============================fetch user data
        fetchSales(user?.users?._id)
        .then((userData) => {
          setuserData(userData)
        })
        .catch((error) => {
          console.error("Error in component:", error)
        })
        fetchSales(user.users?._id)
          .then((userData) => {
            setuserData(userData)
          })
          .catch((error) => {
            console.error("Error in component:", error)
          })
        //========================================== stat
        fetch(`/api/stat?id=${user.users?._id}`)
          .then((res) => res.json())
          .then((data) => {
            setprojects(data.projects)
            setclients(data.clients)
            setearnings(data.totalAmount)
            setcommission(data.commission)
          })
          .catch((error) => {
            console.error("Error:", error)
          })
        //============================================= commission
        fetch(`/api/commission?upsale=${user.users?._id}`)
          .then((res) => res.json())
          .then((data) => {
            setseller1earnings(data.totalEarnings)
            setSeller1commission(data.commission)
          })
          .catch((error) => {
            console.error("Error:", error)
          })
      })
      .catch((error) => {
        console.error("Error:", error)
      })
    fetchProjects()
      .then((apiData) => {
        if (apiData) {
          const filteredData = apiData.filter(
            (item) => item.salesPerson == decodeURIComponent(name)
          )
          setData(filteredData)
        }
      })
      .catch((error) => {
        console.error("Error in component:", error)
      })
  }, [name])
  return (
    <>
      <div className="container-fluid  relative z-0 min-w-[1536px]">
        <div className="my-5 bg-green-100 rounded-md">
          <div className="flex p-5  border rounded-md min-h-32">
            {userDetails && (
              <>
                <div className="w-3/12">
                  <div className="flex items-center">
                    <div className="mr-4 thumb">
                      {userDetails?.avatar ? (
                        <Image
                          className="rounded-full"
                          src={userDetails?.avatar}
                          width="100"
                          height="100"
                          alt={"hello"}
                        />
                      ) : (
                        <Image
                          className="rounded-full"
                          src={"/glix.jpg"}
                          width="100"
                          height="100"
                          alt={"hello"}
                        />
                      )}
                    </div>
                    <div>
                      <h1 className="text-2xl text-black font-semibold capitalize">
                        {userDetails?.name}
                      </h1>
                      <h5 className="text-sm">{userDetails?.email}</h5>
                      <h5 className="text-sm">2193-13102939</h5>
                      {userDetails?.role == "Sales1" && (
                        <div className="mt-2 inline-flex items-center rounded-full bg-yellow-500 px-2 py-1 text-[10px]">
                          <Crown size={10} />
                          <span className="ml-1">Level One Seller</span>
                        </div>
                      )}
                      {userDetails?.role == "Sales2" && (
                        <div className="mt-2 inline-flex items-center rounded-full bg-green-500 px-2 py-1 text-[10px]">
                          <Trophy size={10} />
                          <span className="ml-1">Level Two Seller</span>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
                <div className="flex items-center w-9/12 ">
                  <Separator orientation="vertical" />
                  <div className="flex justify-between w-full ml-5 gap-x-4 ">
                    {userDetails &&
                      userDetails?.role == "Sales2" &&
                      userData &&
                      data && (
                        <>
                          <div className="w-4/12 bg-orange-500 h-28  rounded-md flex justify-center items-center flex-col text-center">
                            <h4 className="text-lg font-bold text-white">Earnings</h4>
                            <h1 className="text-3xl text-white font-semibold">
                              ${commission}
                            </h1>
                          </div>
                        
                          <div className="w-4/12 text-center bg-blue-500 h-28  rounded-md flex justify-center items-center flex-col ">
                            <h4 className="text-lg font-bold text-white">Clients</h4>
                            <h1 className="text-3xl text-white font-semibold">
                              {clients}
                            </h1>
                          </div>
                          <div className="w-4/12 text-center bg-purple-500 h-28  rounded-md flex justify-center items-center flex-col ">
                            <h4 className="text-lg font-bold text-white">Projects</h4>
                            <h1 className="text-3xl text-white font-semibold">
                              {projects}
                            </h1>
                          </div>
                        </>
                      )}

                    {userDetails && userDetails?.role == "Sales1" &&
                      userData &&
                      data && (
                      <>
                        <div className="w-5/12 text-center bg-blue-500 h-28  rounded-md flex justify-center items-center flex-col ">
                          <h4 className="text-lg font-bold text-white">Sales Reps</h4>
                          <h1 className="text-3xl text-white font-semibold">
                            <TotalSales userId={userDetails?._id} />
                          </h1>
                        </div>
                        <div className="w-5/12 text-center bg-purple-500 h-28  rounded-md flex justify-center items-center flex-col ">
                          <h4 className="text-lg font-bold text-white"> Earnings</h4>
                          <h1 className="text-3xl text-white font-semibold">
                            ${seller1earnings ? seller1earnings.toFixed(2) : 0}
                          </h1>
                        </div>
                        <div className="w-5/12 text-center bg-orange-100 h-28  rounded-md flex justify-center items-center flex-col ">
                          <h4 className="text-lg font-bold text-white">Commission Earnings</h4>
                          <h1 className="text-3xl text-white font-semibold">
                            $
                            {seller1commission
                              ? seller1commission.toFixed(2)
                              : 0}
                          </h1>
                        </div>
                      </>
                    )}
                  </div>
                </div>
              </>
            )}
          </div>
        </div>

        {!userDetails && !data && (
          <div className="absolute top-0 left-0 z-50 flex justify-center container-fluid ">
            <Sales2Skeleton />
          </div>
        )}
        {userDetails && userDetails.role == "Sales1" && userData || data && (
          <>
          <Tabs
          defaultValue="projects"
          className="w-full p-2 rounded-md "
        >
          <div className="flex items-center justify-between w-full">
            <TabsList className="p-1.5 border  bg-green-100 w-[280px]">
              <TabsTrigger value="projects" className="p-1.5">
                <span className="w-[120px] font-semibold"> Projects</span>
              </TabsTrigger>
              <TabsTrigger value="SalesRep" className="p-1.5">
                <span className="w-[120px] font-semibold"> Sales Rep</span>
              </TabsTrigger>
          
            </TabsList>
          </div>
          <TabsContent value="projects">
          <DatatableSales projects={data} AllCompanies={AllCompanies} />
          </TabsContent>
          <TabsContent value="SalesRep">      
          <SalesTable sales={userData} />
          </TabsContent>
          
       
        </Tabs>

          </>
        )}
        {userDetails && userDetails.role == "Sales2" && data && (
          <DatatableSales projects={data} AllCompanies={AllCompanies} />
        )}
      </div>
    </>
  )
}
