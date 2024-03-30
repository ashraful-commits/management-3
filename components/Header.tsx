"use client"

import React, { useEffect, useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { useSession } from "next-auth/react"

import Toolkitmenu from "./toolkitMenu"
import UserNav from "./userNav"

export default function Header() {
  const { data: session } = useSession()
  const role = session?.user?.role

  const pathname = usePathname()
  const [isScrolling, setIsScrolling] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      if (!isScrolling && window.scrollY > 0) {
        setIsScrolling(true)
      } else if (window.scrollY === 0) {
        setIsScrolling(false)
      } else if (window.scrollY < 250) {
        setIsScrolling(false)
      }
    }

    window.addEventListener("scroll", handleScroll)

    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])
  // z-[99999999] border-b sticky pb-0 pt-1   transition-all duration-500 ease-in-out top-0bg-white bg-opacity-90 backdrop-blur-sm ${isScrolling?" ":""}
  return (
    <header className={`min-w-[1536px] bg-green-100  py-0`}>
      <div className="flex items-center container-fluid">
        <div className="w-4/12">
          <Link href="/" className="inline-block pt-1">
            <Image  className="rounded-full" src="/logo.jpg" alt="Logo" width="50" height="50" />
          </Link>
        </div>
        <div className="flex items-center justify-end w-8/12">
          {(role != "Sales1" || role != "Sales2") && (
            <ul className="flex [&>li]:mr-4">
              <li>
                <Link
                  className={`flex items-center justify-center p-2 ${
                    pathname == "/" ? "font-bold" : ""
                  }`}
                  href="/"
                >
                  Home
                </Link>
              </li>
              
              <li>
                <Link
                  className={`flex items-center justify-center p-2 ${
                    pathname == "/training" ? "font-bold" : ""
                  }`}
                  href="/training"
                >
                  Saller Training
                </Link>
              </li>
              
            </ul>
          )}

          {role == "SalesTwo" && <Toolkitmenu />}
          <UserNav />
        </div>
      </div>
    </header>
  )
}
