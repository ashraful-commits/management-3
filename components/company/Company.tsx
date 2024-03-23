"use client"

import React, { useEffect, useState } from "react"
import Image from "next/image"
import Link from "next/link"
import {
  Facebook,
  Instagram,
  Linkedin,
  Mail,
  MapPin,
  Phone,
  Twitter,
} from "lucide-react"

import { fetchCompany } from "@/lib/company/company"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import CompanySkeleton from "@/components/skeleton/CompanySkeleton"

const Company = (props) => {
  const name = props?.name.split("-").join(" ")
  const [data, setData] = useState("")

  const fetchCompanyData = async () => {
    const companyData = await fetchCompany(name)
    console.log(companyData)
    setData(companyData)
  }
  useEffect(() => {
    fetchCompanyData()
  }, [])
  return (
    <>
      {data == "" ? (
        <CompanySkeleton />
      ) : (
        <>
          <div className="container">
            <div className="flex items-center p-5 bg-white border rounded-md shadow-md">
              <div className="w-2/12 ">
                <Image
                  width={500}
                  height={500}
                  className="w-[200px]"
                  src={data && data.companyLogo}
                  alt="company logo"
                />
              </div>
              <div className="w-6/12">
                <h2 className="mb-2 text-2xl font-semibold capitalize">
                  {data && data.companyName}
                </h2>
                <p className="flex items-center mb-2">
                  <span className="mr-2">
                    <MapPin />
                  </span>
                  {data && data.companyAddress}
                </p>
                <p className="flex items-center mb-2">
                  <span className="mr-2">
                    <Mail />
                  </span>
                  <Link href={`mailto:${data && data.companyEmail}`}>
                    {data && data.companyEmail}
                  </Link>
                </p>
                <p className="flex items-center mb-2">
                  <span className="mr-2">
                    <Phone />
                  </span>
                  <Link href={`tel:${data && data.companyPhone}`}>
                    {data && data.companyPhone}
                  </Link>
                </p>
                <div className="flex gap-x-3">
                  <Link
                    target="blank"
                    className="inline-block p-2 overflow-hidden transition-all duration-500 ease-in-out border rounded-full hover:bg-black bg-primary"
                    href={
                      data?.socialLink?.facebook
                        ? data?.socialLink?.facebook
                        : "#"
                    }
                  >
                    <Facebook size={20} className="text-white p-[2px]" />
                  </Link>
                  <Link
                    target="blank"
                    className="inline-block p-2 overflow-hidden transition-all duration-500 ease-in-out border rounded-full hover:bg-black bg-primary"
                    href={
                      data?.socialLink?.instagram
                        ? data?.socialLink?.instagram
                        : "#"
                    }
                  >
                    <Instagram size={20} className="text-white p-[2px]" />
                  </Link>
                  <Link
                    target="blank"
                    className="inline-block p-2 overflow-hidden transition-all duration-500 ease-in-out border rounded-full hover:bg-black bg-primary"
                    href={
                      data?.socialLink?.twitter
                        ? data?.socialLink?.twitter
                        : "#"
                    }
                  >
                    <Twitter size={20} className="text-white p-[2px]" />
                  </Link>
                  <Link
                    target="blank"
                    className="inline-block p-2 overflow-hidden transition-all duration-500 ease-in-out border rounded-full hover:bg-black bg-primary"
                    href={
                      data?.socialLink?.linkedin
                        ? data?.socialLink?.linkedin
                        : "#"
                    }
                  >
                    <Linkedin size={20} className="text-white p-[2px]" />
                  </Link>
                </div>
              </div>
              <div className="flex self-start justify-end w-4/12 h-full gap-x-4">
                <button className="px-5 py-2 font-[400] text-white transition-all duration-500 ease-in-out rounded-full hover:bg-black bg-primary ">
                  Download Contact
                </button>
                <button className="px-5 py-2 font-[400] text-white transition-all duration-500 ease-in-out bg-black rounded-full hover:bg-red-500">
                  Cancel Contact
                </button>
              </div>
            </div>
          </div>
          <div className="container">
            <div className="flex flex-col items-start w-full mt-5 rounded-md ">
              <Tabs className="w-full" defaultValue="overview">
                <TabsList className="grid  grid-cols-3 bg-white border w-[500px] rounded-md shadow-md ">
                  <TabsTrigger
                    className="flex items-center justify-center font-semibold text-center "
                    value="overview"
                  >
                    Overview
                  </TabsTrigger>
                  <TabsTrigger
                    className="flex items-center justify-center font-semibold text-center "
                    value="training"
                  >
                    Training
                  </TabsTrigger>
                  <TabsTrigger
                    className="flex items-center justify-center font-semibold text-center "
                    value="marketing material"
                  >
                    Marketing material
                  </TabsTrigger>
                </TabsList>
                <TabsContent
                  className="w-full h-full p-5 mt-5 min-h-[470px] bg-white border rounded-md shadow-md "
                  value="overview"
                >
                  <h2 className="mb-2 text-2xl font-semibold capitalize">
                    Overview
                  </h2>
                  <p>{data && data.overview}</p>
                </TabsContent>
                <TabsContent
                  className="w-full h-full p-5 mt-5 min-h-[470px] bg-white border rounded-md shadow-md"
                  value="training"
                >
                  <h2 className="mb-2 text-2xl font-semibold capitalize">
                    Training
                  </h2>
                </TabsContent>
                <TabsContent
                  className="w-full h-full p-5 mt-5 min-h-[470px] bg-white border rounded-md shadow-md"
                  value="marketing material"
                >
                  <h2 className="mb-2 text-2xl font-semibold capitalize">
                    marketing material
                  </h2>
                </TabsContent>
              </Tabs>
            </div>
          </div>
        </>
      )}
    </>
  )
}

export default Company
