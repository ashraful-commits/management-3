"use client"

import React, { useEffect, useState } from "react"
import Link from "next/link"
import { Menu } from "lucide-react"

import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"

export default function Header() {
  const [isScrolling, setIsScrolling] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      if (!isScrolling && window.scrollY > 250) {
        setIsScrolling(true)
      } else if (window.scrollY === 0) {
        setIsScrolling(false)
      }
    }

    window.addEventListener("scroll", handleScroll)

    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])
  return (
    <div
      className={`absolute transition-all duration-500 ease-in-out left-0 z-50 w-full  header_wrap  ${
        isScrolling
          ? " backdrop-blur-sm top-0 bg-white bg-opacity-90 border-b  "
          : "py-[18px]"
      }`}
    >
      <header className="w-full header ">
        <div className="container px-5 mx-auto">
          <div className="grid items-center grid-cols-10 gap-4">
            <div className="col-span-2">
              <Link className="inline-block logo  max-sm:w-[110px]" href="/">
                <img
                  className="mt-1 w-[140px]"
                  src="./landing/logo-black.svg"
                />
              </Link>
            </div>
            <div className="flex justify-end col-span-8">
              <div className="hidden main_menu lg:block">
                <ul className="flex items-center space-x-6">
                  <li>
                    <Link
                      className="inline-block text-lg font-normal  text-[#141F39] transition duration-300 hover:text-[#267596]"
                      href="#why-salesfam"
                    >
                      About
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="inline-block text-lg font-normal text-[#141F39]  transition duration-300 hover:text-[#267596]"
                      href="#pricing"
                    >
                      Pricing
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="inline-block text-lg font-normal text-[#141F39]  transition duration-300 hover:text-[#267596]"
                      href="#solution"
                    >
                      Solutions
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="inline-block text-lg font-normal text-[#141F39]  transition duration-300 hover:text-[#267596]"
                      href="#"
                    >
                      Blog
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="inline-block text-lg font-normal text-[#141F39]  transition duration-300 hover:text-[#267596]"
                      href="#contact"
                    >
                      Contact
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="ml-3 inline-block rounded-lg bg-[#141F39] px-5 py-2 text-lg font-normal text-white transition duration-300 hover:bg-[#267596] xl:ml-10"
                      href="/login"
                    >
                      Login
                    </Link>
                  </li>
                </ul>
              </div>
              <Popover className="relative">
                <PopoverTrigger>
                  <div className="inline-flex size-10 items-center justify-center rounded-lg bg-[#267596] p-2 text-sm focus:outline-none focus:ring-2 focus:ring-gray-200 lg:hidden">
                    <Menu color="#fff" />
                  </div>
                </PopoverTrigger>
                <PopoverContent
                  align="end"
                  className="w-[180px]  z-[9999999999999]"
                >
                  <ul className="flex flex-col gap-1">
                    <li>
                      <Link
                        className="inline-block text-lg font-normal  text-[#141F39] transition duration-300 hover:text-[#267596]"
                        href="#why-salesfam"
                      >
                        Why Sales Fam
                      </Link>
                    </li>
                    <li>
                      <Link
                        className="inline-block text-lg font-normal text-[#141F39]  transition duration-300 hover:text-[#267596]"
                        href="#pricing"
                      >
                        Pricing
                      </Link>
                    </li>
                    <li>
                      <Link
                        className="inline-block text-lg font-normal text-[#141F39]  transition duration-300 hover:text-[#267596]"
                        href="#solution"
                      >
                        Solutions
                      </Link>
                    </li>
                    <li>
                      <Link
                        className="inline-block text-lg font-normal text-[#141F39]  transition duration-300 hover:text-[#267596]"
                        href="#"
                      >
                        Blog
                      </Link>
                    </li>
                    <li>
                      <Link
                        className="inline-block text-lg font-normal text-[#141F39]  transition duration-300 hover:text-[#267596]"
                        href="#contact"
                      >
                        Contact Us
                      </Link>
                    </li>
                    <li>
                      <Link
                        className="inline-block rounded-lg bg-[#141F39] px-5 py-2 text-lg font-normal text-white transition duration-300 hover:bg-[#267596] xl:ml-10"
                        href="/login"
                      >
                        Login
                      </Link>
                    </li>
                  </ul>
                </PopoverContent>
              </Popover>
            </div>
          </div>
        </div>
      </header>
    </div>
  )
}
