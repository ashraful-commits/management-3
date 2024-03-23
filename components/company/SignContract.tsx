"use client"

import React, { useState } from "react"

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Separator } from "@/components/ui/separator"
import { Switch } from "@/components/ui/switch"

import { Icons } from "../icons"
import { Button } from "../ui/button"
import { Input } from "../ui/input"
import { Label } from "../ui/label"
import { toast } from "../ui/use-toast"

export default function SignContract(props) {
  const AdminEmail = process.env.NEXT_PUBLIC_ADMIN_EMAIL
  const [isLoading, setLoading] = useState(false)
  const salesPerson = props.salesPerson
  const companyName = props.name
  const logo = props.logo
  const rate = props.rate
  const email = props.email
  const overview = props.overview
  const [isChecked, setChecked] = useState(false)
  const [customRate, setcustomRate] = useState()
  const handleCheckboxChange = () => {
    setChecked(!isChecked)
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    let comRate = null

    if (isChecked) {
      comRate = customRate
    } else {
      comRate = rate
    }

    try {
      const res = await fetch("api/sendEmail/signRequest", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          from: "Sales Fam <noreplay@salesfam.com>",
          to: AdminEmail,
          subject: "Sign contract request submitted!",
          companyName,
          salesPerson,
          rate: comRate,
        }),
      })

      if (res.ok) {
        setLoading(false)
        toast({
          title: "request submited sucessfully!",
        })
      } else {
        console.log("request submit failed!")
        toast({
          variant: "destructive",
          title: "request submit failed!",
        })
        setLoading(false)
      }
    } catch (error) {
      console.log("Error during request submit:", error)
      toast({
        variant: "destructive",
        title: `Error during request submit:", ${error}`,
      })
      setLoading(false)
    }
  }

  return (
    <>
      <Dialog>
        <DialogTrigger>
          <div className="px-5 py-1 text-xs text-white duration-500 rounded-sm bg-primary hover:bg-black">
            Sign Contract
          </div>
        </DialogTrigger>
        <DialogContent className="bg-white">
          <DialogHeader>
            <DialogDescription>
              <form onSubmit={handleSubmit}>
                <div className="flex items-center justify-center mt-8">
                  <div className="w-6/12">
                    <img
                      className="w-[80%] mx-auto"
                      src={logo}
                      alt="company logo"
                    />
                  </div>
                  <div className="w-6/12 pl-5 border-l-2 border-black">
                    <h4 className="mb-1 text-xl text-black capitalize">
                      {companyName}
                    </h4>
                    <div className="flex items-center text-black">
                      <b className="mr-2">Commission: </b> {rate}%
                    </div>
                  </div>
                </div>
                <div className="w-full py-5 ml-auto text-justify text-black">
                  <p>{overview}</p>
                </div>
                <div className="grid gap-4 py-4">
                  <div className="grid items-center grid-cols-5 gap-4">
                    <Label htmlFor="name" className="col-span-2 text-right">
                      Your Name
                    </Label>
                    <p className="w-full col-span-3 p-2 text-black border rounded">
                      {salesPerson}
                    </p>
                  </div>
                  <div className="grid items-center grid-cols-5 gap-4">
                    <Label htmlFor="username" className="col-span-2 text-right">
                      Your Email
                    </Label>
                    <p className="w-full col-span-3 p-2 text-black border rounded">
                      {email}
                    </p>
                  </div>
                  <div className="grid items-center grid-cols-5 gap-4">
                    <Label
                      htmlFor="username"
                      className="col-span-2 text-right "
                    >
                      Tell us about your experiences
                    </Label>
                    <textarea className="w-full h-20 col-span-3 p-3 text-black border rounded-md"></textarea>
                  </div>
                  <div className="grid items-center grid-cols-5 gap-4">
                    <div className="col-span-2"></div>
                    <div className="flex w-[200px] items-center">
                      <Switch
                        id="airplane-mode"
                        checked={isChecked}
                        onCheckedChange={handleCheckboxChange}
                      />
                      <Label className="ml-2" htmlFor="airplane-mode">
                        Offer your rate
                      </Label>
                    </div>
                  </div>

                  {isChecked && (
                    <div className="grid items-center grid-cols-5 gap-4">
                      <Label
                        htmlFor="username"
                        className="col-span-2 text-right"
                      >
                        Your Commission Rate
                      </Label>
                      <Input
                        placeholder="your commission rate"
                        className="col-span-3"
                        onChange={(e) => setcustomRate(e.target.value.trim())}
                      />
                    </div>
                  )}
                  <DialogFooter>
                    <Button
                      className="transition-all duration-500 ease-in-out"
                      type="submit"
                    >
                      {isLoading && (
                        <Icons.spinner className="mr-2 size-4 animate-spin" />
                      )}
                      Send Request
                    </Button>
                  </DialogFooter>
                </div>
              </form>
            </DialogDescription>
          </DialogHeader>
        </DialogContent>
      </Dialog>
    </>
  )
}
