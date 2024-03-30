"use client"

import React, { useState } from "react"
import { Loader } from "lucide-react"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { ScrollArea } from "@/components/ui/scroll-area"

import { Textarea } from "@/components/ui/textarea"
import { useToast } from "@/components/ui/use-toast"
import { Icons } from "@/components/icons"


export default function Addcompany() {
  const { toast } = useToast()

  const [Loading, setLoading] = useState(false)
  const [uploading, setUploading] = useState(false)
  const [companyLogo, setcompanyLogo] = useState()
  const [companyName, setcompanyName] = useState()
  const [companyType, setcompanyType] = useState()
  const [companyAddress, setcompanyAddress] = useState()
  const [companyEmail, setcompanyEmail] = useState()
  const [companyPhone, setcompanyPhone] = useState()
  const [socialLink, setSocialLink] = useState({
    facebook: "",
    twitter: "",
    instagram: "",
    linkedin: "",
  })
  console.log(socialLink)
  const [overview, setOverview] = useState()
  const [rate, setRate] = useState()
  const [imagePreview, setimagePreview] = useState("")
  const [image, setImage] = useState("")

  const handleImageChange = (e) => {
    const file = e.target.files[0]
    setimagePreview(URL.createObjectURL(file))
    setImage(file)
  }

  const handleImageUpload = async (e) => {
    e.preventDefault()
    if (image) {
      const formData = new FormData()
      formData.append("file", image)
      formData.append("upload_preset", "shop_api")
      try {
        setLoading(true)
        const response = await fetch(
          `https://api.cloudinary.com/v1_1/ds9mljkgj/image/upload`,
          {
            method: "POST",
            body: formData,
          }
        )
        if (response.ok) {
          const data = await response.json()
          handleSubmit(data.url)
        } else {
          console.error("Error uploading image:", response.statusText)
        }
      } catch (error) {
        console.error("Error uploading image:", error)
      }
    }
  }

  const handleSubmit = async (data) => {
    if (
      !data ||
      !companyType ||
      !rate ||
      !companyAddress ||
      !companyEmail ||
      !companyPhone ||
      !overview
    ) {
      console.log("all fields required")
      toast({
        variant: "destructive",
        title: "all fields required",
      })
      setLoading(false)
      return
    } else {
      try {
        const res = await fetch("../api/company", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            companyLogo: data,
            companyName,
            companyType,
            companyAddress,
            companyEmail,
            companyPhone,
            overview,
            rate,
            socialLink,
          }),
        })

        if (res.ok) {
          setLoading(false)
          console.log("company added!")
          toast({
            title: "company added",
          })
          window.location.reload()
        } else {
          console.log("company submit failed!")
          toast({
            variant: "destructive",
            title: "company submit failed!",
          })
          setLoading(false)
        }
      } catch (error) {
        console.log("Error during company submit:", error)
        toast({
          variant: "destructive",
          title: `Error during company submit:", ${error}`,
        })
        setLoading(false)
      }
    }
  }

  function convertToLowerCase(inputString) {
    return inputString.toLowerCase()
  }
  //===============handle social link
  const handleSocialLink = (e) => {
    const { name, value } = e.target
    setSocialLink((prevState) => ({
      ...prevState,
      [name]: value,
    }))
  }
  return (
    <Dialog>
      <DialogTrigger>
        <span className="rounded-md bg-orange-500 px-8 py-2.5 text-white delay-500 hover:bg-black">
          Add Company
        </span>
      </DialogTrigger>
      <DialogContent className="!max-w-[900px] max-h-[95vh] overflow-y-auto">

          <DialogHeader>
            <DialogTitle>
              <h4 className="mb-5 text-2xl">Add Company</h4>
            </DialogTitle>
            <DialogDescription>
              <form className="mb-10" onSubmit={handleImageUpload}>
                <div className="mb-5  w-full flex gap-x-3 items-center gap-1.5">
                {imagePreview ?
                <img className="h-[100px] w-[100px] border rounded-md mb-5" src={imagePreview} alt="" />:
                <img className="h-[100px] w-[100px] border rounded-md mb-5" src="https://th.bing.com/th/id/OIP.0kbg_3ntoZ_vWPdfrDNvFwAAAA?w=400&h=400&rs=1&pid=ImgDetMain" alt="" />
                  }
                 <div> 
                  <Input
                    id="picture"
                    className="mb-2 cursor-pointer"
                    type="file"
                    onChange={handleImageChange}
                  /></div>
                 
                </div>
                <div className="flex my-2 gap-x-4">
                <div className="mb-5 grid w-full items-center gap-1.5">
                <Label className="text-lg font-bold capitalize"> Name</Label>
                  <Input
                    type="text"
                    className="bg-green-100"
                    placeholder="Company Name"
                    onChange={(e) =>
                      setcompanyName(convertToLowerCase(e.target.value.trim()))
                    }
                  />
                </div>
                <div className="mb-5 grid w-full items-center gap-1.5">
                  <Label className="text-lg font-bold capitalize"> Type</Label>
                  <Input
                    type="text"
                    className="bg-green-100"
                    placeholder="Company Type"
                    onChange={(e) => setcompanyType(e.target.value.trim())}
                  />
                </div>
                </div>
                <div className="flex my-2 gap-x-4">
                <div className="mb-5 grid w-full items-center gap-1.5">
                  <Label className="text-lg font-bold capitalize"> Address</Label>
                  <Input
                    type="text"
                    className="bg-green-100"
                    placeholder="Company Address"
                    onChange={(e) => setcompanyAddress(e.target.value.trim())}
                  />
                </div>
                <div className="mb-5 grid w-full items-center gap-1.5">
                  <Label className="text-lg font-bold capitalize">Commission Rate</Label>
                  <Input
                    type="number"
                    className="bg-green-100"
                    placeholder="Company Rate"
                    onChange={(e) => setRate(e.target.value.trim())}
                  />
                </div>
                </div>
                <div className="flex my-2 gap-x-4">
                <div className="mb-5 grid w-full items-center gap-1.5">
                  <Label className="text-lg font-bold capitalize"> Email</Label>
                  <Input
                    type="text"
                    className="bg-green-100"
                    placeholder="Company Email"
                    onChange={(e) => setcompanyEmail(e.target.value.trim())}
                  />
                </div>
                <div className="mb-5 grid w-full items-center gap-1.5">
                  <Label className="text-lg font-bold capitalize"> Phone</Label>
                  <Input
                    type="text"
                    className="bg-green-100"
                    placeholder="Company Phone"
                    onChange={(e) => setcompanyPhone(e.target.value.trim())}
                  />
                </div>
                
                </div>
                <div className="mb-5 grid w-full items-center gap-1.5">
                  <Label className="text-lg font-bold capitalize"> Social Link</Label>
                  <div className="grid grid-cols-2 gap-x-4">
                    <div className="my-2 ">
                    <Label className="inline-block py-1">Facebook:</Label>
                    <Input
                      type="text"
                      className="bg-green-100"
                      placeholder="facebook link"
                      name="facebook"
                      value={socialLink.facebook}
                      onChange={handleSocialLink}
                    />
                  </div>
                  <div className="my-2 ">
                    <Label className="inline-block py-1">Twitter:</Label>
                    <Input
                      type="text"
                      className="bg-green-100"
                      placeholder="twitter link"
                      name="twitter"
                      value={socialLink.twitter}
                      onChange={handleSocialLink}
                    />
                  </div>
                  <div className="my-2 ">
                    <Label className="inline-block py-1">Instagram:</Label>
                    <Input
                      type="text"
                      className="bg-green-100"
                      placeholder="instagram link"
                      name="instagram"
                      value={socialLink.instagram}
                      onChange={handleSocialLink}
                    />
                  </div>
                  <div className="my-2 ">
                    <Label className="inline-block py-1">LinkedIn:</Label>
                    <Input
                      type="text"
                      className="bg-green-100"
                      placeholder="linkedin link"
                      name="linkedin"
                      value={socialLink.linkedin}
                      onChange={handleSocialLink}
                    />
                  </div></div>
                </div>
                <div className="mb-5 grid w-full items-center gap-1.5">
                  <Label className="text-lg font-bold capitalize">Overview</Label>
                  <Textarea
                    className="bg-green-100"
                    placeholder="Company Overview"
                    rows={5}
                    columns={5}
                    onChange={(e) => setOverview(e.target.value.trim())}
                  ></Textarea>
                </div>
                <Button>
                  {Loading && (
                    <Icons.spinner className="mr-2 size-4 animate-spin" />
                  )}
                  Submit
                </Button>
              </form>
            </DialogDescription>
          </DialogHeader>

      </DialogContent>
    </Dialog>
  )
}
