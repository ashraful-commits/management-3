import React from "react"

import { Badge } from "./ui/badge"

export default function Statusbadge(props) {
  const value = props.value
  let styles
  switch (value) {
    case "On Going":
      styles =
        "rounded-full px-1.5 border-[#3AAE54] bg-[#E7FBF0]  text-[#3AAE54] w-[88px] justify-center font-normal"
      break
    case "On Hold":
      styles =
        "rounded-full px-1.5 border-[#F95959] bg-[#FFEEEE]  text-[#F95959] w-[88px] justify-center font-normal"
      break
    case "Pending":
      styles =
        "rounded-full px-1.5 border-[#F2994A] bg-[#FFF8F2]  text-[#F2994A] w-[88px] justify-center font-normal"
      break
    case "Complete":
      styles =
        "rounded-full px-1.5 border-[#878790] bg-[#878790]  text-white w-[88px] justify-center font-normal"
      break
    case "Paid":
      styles =
        "rounded-full px-1.5 border-[#3AAE54] bg-[#E7FBF0]  text-[#3AAE54] w-[88px] justify-center font-normal"
      break
    case "Yes":
      styles =
        "rounded-full px-1.5 border-[#3AAE54] bg-[#E7FBF0]  text-[#3AAE54] w-[88px] justify-center font-normal"
      break
    case "Unpaid":
      styles =
        "rounded-full px-1.5 border-[#F95959] bg-[#FFEEEE]  text-[#F95959] w-[88px] justify-center font-normal"
      break
    case "No":
      styles =
        "rounded-full px-1.5 border-[#F95959] bg-[#FFEEEE]  text-[#F95959] w-[88px] justify-center font-normal"
      break
    default:
      styles = ""
      break
  }

  return (
    <Badge className={styles} variant="outline">
      {value}
    </Badge>
  )
}
