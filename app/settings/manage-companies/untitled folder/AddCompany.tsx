"use client"

import React, { useState } from "react"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { ScrollArea } from "@/components/ui/scroll-area"
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import { Textarea } from "@/components/ui/textarea"
import { useToast } from "@/components/ui/use-toast"
import { Icons } from "@/components/icons"
import { Loader } from "lucide-react"

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
  const [overview, setOverview] = useState()
  const [rate, setRate] = useState()
  const [imagePreview, setimagePreview] = useState("")
  const [image, setImage] = useState("")
  
  const handleImageChange = (e) => {
    const file = e.target.files[0]
    setimagePreview(URL.createObjectURL(file))
    setImage(file)
    }
  
const handleImageUpload=async(e)=>{
  e.preventDefault()
  if (image) {
    const formData = new FormData()
  formData.append("file", image)
  formData.append("upload_preset", "p2y46g7e")
  try {
    setLoading(true)
    const response = await fetch(
      `https://api.cloudinary.com/v1_1/drzedrk1e/image/upload`,
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

  const handleSubmit = async(data) => { 
      if (
        !data||
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
      }else{
        try {
          const res = await fetch("../api/company", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              companyLogo:data,
              companyName,
              companyType,
              companyAddress,
              companyEmail,
              companyPhone,
              overview,
              rate,
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

  return (
    <Sheet>
      <SheetTrigger>
        <span className="rounded-md bg-primary px-8 py-2.5 text-white delay-500 hover:bg-black">
          Add Company
        </span>
      </SheetTrigger>
      <SheetContent className="!max-w-[900px]">
        <ScrollArea className="h-[90vh]">
          <SheetHeader>
            <SheetTitle>
              <h4 className="mb-5 text-2xl">Add Company</h4>
            </SheetTitle>
            <SheetDescription>
              <form className="mb-10" onSubmit={handleImageUpload}>
                <div className="mb-5 grid w-full items-center gap-1.5">
                <img className="mb-5 w-[100px]" src={imagePreview} alt="" />
                  <Label>Company Logo</Label>
                  <Input
                    id="picture"
                    className="mb-2 cursor-pointer"
                    type="file"
                    onChange={handleImageChange}
                  />
                  <Label>Company Name</Label>
                  <Input
                    type="text"
                    placeholder="Company Name"
                    onChange={(e) =>
                      setcompanyName(convertToLowerCase(e.target.value.trim()))
                    }
                  />
                </div>
                <div className="mb-5 grid w-full items-center gap-1.5">
                  <Label>Company Type</Label>
                  <Input
                    type="text"
                    placeholder="Company Type"
                    onChange={(e) => setcompanyType(e.target.value.trim())}
                  />
                </div>
                <div className="mb-5 grid w-full items-center gap-1.5">
                  <Label>Company Address</Label>
                  <Input
                    type="text"
                    placeholder="Company Address"
                    onChange={(e) => setcompanyAddress(e.target.value.trim())}
                  />
                </div>
                <div className="mb-5 grid w-full items-center gap-1.5">
                  <Label>Commission Rate</Label>
                  <Input
                    type="number"
                    placeholder="Company Rate"
                    onChange={(e) => setRate(e.target.value.trim())}
                  />
                </div>
                <div className="mb-5 grid w-full items-center gap-1.5">
                  <Label>Company Email</Label>
                  <Input
                    type="text"
                    placeholder="Company Email"
                    onChange={(e) => setcompanyEmail(e.target.value.trim())}
                  />
                </div>
                <div className="mb-5 grid w-full items-center gap-1.5">
                  <Label>Company Phone</Label>
                  <Input
                    type="text"
                    placeholder="Company Phone"
                    onChange={(e) => setcompanyPhone(e.target.value.trim())}
                  />
                </div>
                <div className="mb-5 grid w-full items-center gap-1.5">
                  <Label>Overview</Label>
                  <Textarea
                    placeholder="Company Overview"
                    rows={8}
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
            </SheetDescription>
          </SheetHeader>
        </ScrollArea>
      </SheetContent>
    </Sheet>
  )
}
