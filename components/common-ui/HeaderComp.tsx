"use client"

import React from "react"
import { usePathname } from "next/navigation"

import Header from "../Header"

export default function HeaderComp() {
  let Headercomp
  const pathname = usePathname()

  if (

    pathname !== "/signup" &&
    pathname !== "/login"
    
  ) {
    Headercomp = <Header />
  } else {
    Headercomp = ""
  }
  return <div className="sticky top-0 left-0 px-4 bg-green-100 z-[999999]">{Headercomp}</div>
}
