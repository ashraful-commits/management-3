"use client"

import React, { useEffect, useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { CheckCircle2, CheckSquare } from "lucide-react"
import { useSession } from "next-auth/react"

import { fetchCompanies } from "@/lib/company/company"
import { getUser } from "@/lib/getUser"
import { Button } from "@/components/ui/button"
import SignContract from "@/components/company/SignContract"

import ContactsSkeleton from "@/components/skeleton/ContactsSkelaton"

function replaceSpaceAndLowerCase(inputString) {
  const result = inputString.replace(" ", "-").toLowerCase()
  return result
}

export default function ContractsPage() {
  const { data: session } = useSession()
  const role = session?.user.role
  const [currentUsername, setcurrentUsername] = useState()
  const [currentEmail, setcurrentEmail] = useState()
  const [activeContracts, setactiveContracts] = useState([])
  const [allCompany, setallCompanies] = useState([])

  const userDetail = (id) => {
    getUser(id).then((res: Array) => {
      setcurrentEmail(res.email)
    
        setactiveContracts(res.contracts)
        setcurrentUsername(res.name)
      
    })
  }

  const allCompanies = () => {
    fetchCompanies().then((all) => {
      console.log(all)
      
        setallCompanies(all)
      
    })
  }

  useEffect(() => {
    if (session) {
      const id = session?.user?.id

      userDetail(id)
      allCompanies()
    }
  }, [session])

  return (
    <>
      <div className="w-full mb-20 ">
        <h4 className="mt-4 text-2xl font-bold">Signed Contracts</h4>
        <div
          className={`${
            activeContracts ? "grid grid-cols-5 gap-5 mt-5" : "w-full"
          }`}
        >
          {!activeContracts && (
            <div className="grid w-full grid-cols-5 gap-5 mt-5">
              <ContactsSkeleton />
              <ContactsSkeleton />
              <ContactsSkeleton />
              <ContactsSkeleton />
              <ContactsSkeleton />
            </div>
          )}
          {activeContracts &&
            activeContracts.map((company, index) => (
              <Link
                key={index}
                className="block w-full text-center duration-500 hover:bg-gray-100"
                href={`/company/${replaceSpaceAndLowerCase(
                  company.companyName
                )}`}
              >
                <div
                  className="relative flex min-h-[200px] flex-col items-center justify-center rounded-md  bg-white p-5 duration-500  border hover:border-green-500 hover:border-2"
                  key={index}
                >
                  <div className="flex min-h-[80px] items-center">
                    <img
                      className="max-h-[80px] w-full"
                      src={company.logo}
                      alt="company logo"
                    />
                  </div>
                  <p className="text-sm font-semibold">{company.companyType}</p>
                  <div className="flex flex-col items-center">
                    <div className="flex items-center my-2">
                      <CheckSquare className="text-green-500" />
                      <span className="ml-2">Commission: {company.rate}%</span>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
        </div>

        <>
          {allCompany?.filter((company) =>
                  activeContracts?.every(
                    (item) => item.companyName !== company.companyName
                  )
                ).length > 0 && (
            <h4 className="mt-10 mb-4 text-2xl font-bold">Other Company</h4>
          )}
          <div
            className={`${
              allCompany ? "grid grid-cols-6 gap-2" : "w-full mt-20"
            }`}
          >
            {!allCompany && (
              <div className="grid w-full grid-cols-6 gap-2">
                <ContactsSkeleton />
                <ContactsSkeleton />
                <ContactsSkeleton />
                <ContactsSkeleton />
                <ContactsSkeleton />
                <ContactsSkeleton />
              </div>
            )}
            {allCompany &&
              allCompany
                .filter((company) =>
                  activeContracts?.every(
                    (item) => item.companyName !== company.companyName
                  )
                )
                .map((scompany, index) => {
                  if (
                    scompany.companyName !== "company1" &&
                    scompany.companyName !== "company"
                  ) {
                    return (
                      <div
                        className="relative flex min-h-[200px] flex-col items-center justify-center rounded-md border-2 bg-white p-3 duration-500 hover:-translate-y-1 hover:shadow-lg"
                        key={index}
                      >
                        <div className="flex min-h-[80px] items-center">
                          <Link
                            className="text-center duration-500"
                            href={`/company/${replaceSpaceAndLowerCase(
                              scompany.companyName
                            )}`}
                          >
                            <img
                              className="max-h-[80px] w-full"
                              src={scompany.companyLogo}
                              alt="company logo"
                            />
                          </Link>
                        </div>
                        <p className="mt-4 text-xs font-semibold text-center">
                          {scompany.companyType}
                        </p>
                        <div className="my-2">
                          <SignContract
                            overview={scompany.overview}
                            email={currentEmail}
                            name={scompany.companyName}
                            logo={scompany.companyLogo}
                            rate={scompany.rate}
                            salesPerson={currentUsername}
                          />
                        </div>
                        <div className="flex items-center">
                          <CheckSquare className="text-green-500" />
                          <span className="ml-2 text-xs">
                            Commission: {scompany.rate}%
                          </span>
                        </div>
                      </div>
                    )
                  } else {
                    return null
                  }
                })}
          </div>
        </>
      </div>
    </>
  )
}
