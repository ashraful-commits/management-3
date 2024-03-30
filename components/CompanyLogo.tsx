import React from "react"
import Image from "next/image"

export default function CompanyLogo(props) {
  const companyName = props.value
  let company

  switch (companyName) {
    case "company1":
      company = "/logo.jpg"
      break
    case "company2":
      company = "/ia.jpg"
      break
  }

  return (
    <div>
      <Image src={company} width={30} height={30} alt="company logo" />
    </div>
  )
}
