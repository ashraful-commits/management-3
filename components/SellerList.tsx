"user client"

import React, { useEffect, useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { Search } from "lucide-react"

import { fetchProjects } from "@/lib/fetchProjects"

import UpsellerCommission from "./UpsellerCommission"
import TotalClients from "./superAdmin/TotalClients"
import TotalEarning from "./superAdmin/TotalEarning"
import TotalProject from "./superAdmin/TotalProject"
import TotalSales from "./superAdmin/TotalSales"
import { Button } from "./ui/button"

export default function SellerList(props) {
  const userData = props.users
  const [currentPage, setCurrentPage] = useState(1)
  const postsPerPage = 8
  const [searchTerm, setSearchTerm] = useState("")
  const [grandCommission, setgrandCommission] = useState()
  const filteredUsers = userData.filter((post) =>
    post.name.includes(searchTerm)
  )
  const startIndex = (currentPage - 1) * postsPerPage
  const endIndex = startIndex + postsPerPage
  const usersToDisplay = filteredUsers.slice(startIndex, endIndex)
  // Determine whether there are more pages to display
  const hasMorePages = endIndex < filteredUsers.length
  const [data, setData] = useState(null)
  useEffect(() => {
    fetchProjects()
      .then((apiData) => {
        if (apiData) {
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
      <div className="mt-4">
        <div className="flex items-center justify-between">
          <div className="w-5/12">
            <h4 className="block py-5 text-2xl font-semibold text-left text-black">
              {name && (
                <div>
                  Sales People Under
                  <span className="capitalize">{decodeURIComponent(name)}</span>
                </div>
              )}
              {!name && <>Manage Sales People</>}
            </h4>
          </div>
          <div className="flex items-center justify-start w-4/12 px-3 bg-white border rounded-md">
            <Search className=" text-primary size-5" />
            <input
              type="text"
              className="w-full px-3 py-2 focus:outline-none"
              placeholder="Search"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
        </div>
        <div className="grid grid-cols-4 gap-4 mt-4 mb-10">
          {usersToDisplay.map((user, index) => (
            <div
              className="p-5 bg-white border rounded-md singleSales"
              key={user.id || index}
            >
              <div className="flex items-center">
                <div className="pr-4 thumb">
                  {user.avatar ? (
                    <Image
                      className="rounded-full"
                      src={user?.avatar}
                      width={50}
                      height={50}
                      alt={""}
                    />
                  ) : (
                    <Image
                      className="rounded-full"
                      src="/glix.jpg"
                      width={50}
                      height={50}
                      alt={""}
                    />
                  )}
                </div>
                <div className="leading-[10px]">
                  <h4 className="text-xl font-semibold text-left">
                    <Link className="capitalize" href={"/sales/" + user.name}>
                      {user.name}
                    </Link>
                  </h4>
                  <h6 className="text-sm">{user.email}</h6>
                </div>
              </div>
              <div className="flex justify-between pt-5">
                <div className="w-6/12 p-2 mr-1 text-left bg-gray-100 rounded-md">
                  <h1 className="text-2xl font-semibold">
                    {user._id && <TotalSales userId={user._id} />}
                  </h1>
                  <span className="text-[11px] font-semibold">
                    Sales person
                  </span>
                </div>
                <div className="w-6/12 p-2 ml-1 text-left bg-gray-100 rounded-md">
                  <h1 className="text-2xl font-semibold">
                    {user._id && <TotalEarning userId={user._id} />}
                  </h1>
                  <span className="text-[11px] font-semibold">Earnings</span>
                </div>
                <div className="w-6/12 p-2 ml-1 text-left bg-gray-100 rounded-md">
                  <h1 className="text-2xl font-semibold">
                    <UpsellerCommission id={user._id} />
                  </h1>
                  <span className="text-[11px] font-semibold">Commission</span>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div>
          {filteredUsers.length > postsPerPage && (
            <div className="pt-5 pb-10 text-right" key={filteredUsers.length}>
              <Button
                className="w-[100px] mr-2"
                size="sm"
                onClick={() => setCurrentPage(currentPage - 1)}
                disabled={currentPage === 1}
              >
                Previous
              </Button>

              <Button
                className="w-[100px]"
                size="sm"
                onClick={() => setCurrentPage(currentPage + 1)}
                disabled={!hasMorePages}
              >
                Next
              </Button>
            </div>
          )}
        </div>
      </div>
    </>
  )
}
