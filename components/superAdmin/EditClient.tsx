"use client"

import React, { useEffect, useState } from "react"
import { Checkbox } from "@/components/ui/checkbox"
import {
  Calendar as CalendarIcon,
  Check,
  ChevronsUpDown,
  FileEdit,
  PlusCircle,
} from "lucide-react"

import { fetchCompanies } from "@/lib/company/company"
import { cn } from "@/lib/utils"
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
} from "@/components/ui/command"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { useToast } from "@/components/ui/use-toast"
import { Icons } from "@/components/icons"
import SingleCompany from "@/app/company/[name]/page"

import { fetchUsers } from "../../lib/fetchUsers"
import { Button } from "../ui/button"

export default function EditClient(props) {
  const [open, setOpen] = useState(false)
  const [value, setValue] = useState("")

  const { toast } = useToast()
  const clientId = props.id
  const [isLoading, setLoading] = useState(false)
  const [clientName, setClientName] = useState("")
  const [email, setEmail] = useState("")
  const [phone, setPhone] = useState("")
  const [address, setAddress] = useState("")
  const [callClient, setIsClientCall] = useState()
  const [emailClient, setIsClientEmail] = useState()

  useEffect(() => {
    fetch(`/api/client/?id=${clientId}`)
      .then((response) => response.json())
      .then((data) => {
        const clientData = data.client
        setClientName(clientData.clientName)
        setEmail(clientData.email)
        setPhone(clientData.phone)
        setAddress(clientData.address)
        setIsClientCall(clientData.callClient)
        setIsClientEmail(clientData.emailClient)
      })
      .catch((error) => {
        console.error("Error:", error)
      })
  }, [clientId])

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault()
    setLoading(true)
    try {
      const res = await fetch(`/api/client/?id=${clientId}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          clientName,
          email,
          phone,
          address,
          callClient,
          emailClient
        }),
      })

      if (res.ok) {
        setLoading(false)
        toast({
          variant: "default",
          title: "Client Updated!",
        })
        window.location.reload()
      } else {
            toast({
                variant: "destructive",
                title: "submission failed!",
              })
        setLoading(false)
      }
    } catch (error) {
      console.log("Error during  submit:", error)
      toast({
        variant: "destructive",
        title: `Error during submit:", ${error}`,
      })
      setLoading(false)
    }
  }

  return (
    <Dialog>
      <DialogTrigger>
        <FileEdit className="w-[20px] text-blue-600" />
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle className="mb-5 font-bold">Edit Client</DialogTitle>
          <DialogDescription>
            <div className="grid w-full items-center gap-1.5">
              <form onSubmit={handleSubmit}>
                <label className="mb-1 text-black">ClientName:</label>
                <Input
                  className="mb-5"
                  type="text"
                  defaultValue={clientName}
                  onChange={(e) => setClientName(e.target.value.trim())}
                />
                <label className="mb-1 text-black">Email:</label>
                <Input
                  className="mb-5"
                  type="text"
                  defaultValue={email}
                  onChange={(e) => setEmail(e.target.value.trim())}
                />
                <label className="mb-1 text-black">Phone:</label>
                <Input
                  className="mb-5"
                  type="text"
                  defaultValue={phone}
                  onChange={(e) => setPhone(e.target.value.trim())}
                />
                <label className="mb-1 text-black">Address:</label>
                <textarea
                  defaultValue={address}
                  onChange={(e) => setAddress(e.target.value)}
                  className="w-full px-4 py-2 bg-white border rounded-md border-slate-400"
                ></textarea>
                <div className="flex flex-col w-full mt-5 gap-y-2">
                 <div className="flex items-center w-full gap-x-2">
                 <Checkbox
                 checked={callClient}
                    onCheckedChange={() => setIsClientCall(!callClient)}
                  />
                  <label className="mr-5 font-normal leading-none text-md text-primary peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                    Do not call the client directly.
                  </label>
                 </div>
                  <div className="flex items-center w-full gap-x-2">
                  <Checkbox
                     checked={emailClient}
                     onCheckedChange={() => setIsClientEmail(!emailClient)}
                  />
                  <label className="font-normal leading-none text-md text-primary peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                    Do not send marketing emails to the client.
                  </label>
                  </div>
                </div>

                <Button className="w-full mt-2" disabled={isLoading}>
                  {isLoading && (
                    <Icons.spinner className="mr-2 size-4 animate-spin" />
                  )}
                  Update
                </Button>
              </form>
            </div>
          </DialogDescription>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  )
}
