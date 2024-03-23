import React from "react"
import Image from "next/image"

export default function CompanyLogo(props) {
  const companyName = props.value
  let company

  switch (companyName) {
    case "WordSphere":
      company = "/wordsphere.png"
      break
    case "moglixy media":
      company = "/moglixy.png"
      break
    case "image appeal":
      company = "/Image_appeal.png"
      break
    case "pixel voyage":
      company = "/pixel_voyage.jpg"
      break
    case "SymbolSense":
      company = "/pixel_voyage.jpg"
      break
    case "zordel":
      company = "/zordel.png"
      break
    case "may levy":
      company = "/maylevy.png.jpg"
      break
    case "cyberly":
      company = "/cyberly.png"
      break
  }

  // {if (companyName =='wordsphere') && <Image src="./logo.png" width={120} height={40}>}
  return (
    <div>
      <Image src={company} width={110} height={20} alt="company logo" />
    </div>
  )
}
