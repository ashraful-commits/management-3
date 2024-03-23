"use client"

import React from "react"
import { usePathname } from "next/navigation"

import Header from "../Header"

export default function HeaderComp() {
  let Headercomp
  const pathname = usePathname()

  if (
    pathname !== "/" &&
    pathname !== "/signup" &&
    pathname !== "/login" &&
    pathname != "/invitation"
  ) {
    Headercomp = <Header />
  } else {
    Headercomp = ""
  }
  return <>{Headercomp}</>
}
