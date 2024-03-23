"use client"

import React, { useEffect, useState } from "react"
import {
  Calendar as CalendarIcon,
  Check,
  ChevronsUpDown,
  Eye,
  FileEdit,
  PlusCircle,
} from "lucide-react"

import { fetchCompanies } from "@/lib/company/company"
import { cn } from "@/lib/utils"
import { Checkbox } from "@/components/ui/checkbox"
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
import { Skeleton } from "@/components/ui/skeleton"
import { useToast } from "@/components/ui/use-toast"
import { Icons } from "@/components/icons"
import SingleCompany from "@/app/company/[name]/page"

import { fetchUsers } from "../../lib/fetchUsers"
import { Button } from "../ui/button"

export default function ViewClient(props) {
  const [open, setOpen] = useState(false)
  const [value, setValue] = useState("")

  const { toast } = useToast()
  const clientId = props.id
  const [isLoading, setLoading] = useState(false)
  const [client, setClient] = useState({})

  useEffect(() => {
    setLoading(true)
    fetch(`/api/client/?id=${clientId}`)
      .then((response) => response.json())
      .then((data) => {
        setLoading(false)
        const clientData = data.client
        setClient(clientData)
      })
      .catch((error) => {
        console.error("Error:", error)
      })
  }, [clientId])

  return (
    <Dialog>
      <DialogTrigger>
        <Eye className="w-[20px] text-green-600" />
      </DialogTrigger>
      <DialogContent>
        {isLoading ? (
          <div className="flex flex-col gap-y-2">
            <Skeleton className="w-full h-10" />
            <Skeleton className="w-full h-10" />
            <Skeleton className="w-full h-10" />
            <Skeleton className="w-full h-10" />
            <Skeleton className="w-full h-10" />
            <Skeleton className="w-full h-10" />
          </div>
        ) : (
          <DialogHeader>
            <DialogTitle className="pb-3 my-3 font-bold border-b border-b-gray-100 text-primary">
              View Client
            </DialogTitle>

            <DialogDescription>
              <div className="grid w-full items-center gap-1.5">
                <div>
                  <label className="mb-1 text-[14px] py-[1px] font-medium text-primary my-2 inline-block px-2 border-l border-l-gray-200 bg-gray-50 w-full">
                    Client name:
                  </label>
                  <p className="text-[16px] ml-5 py-3">{client?.clientName}</p>
                  <label className="mb-1 text-[14px] py-[1px] font-medium text-primary my-2 inline-block px-2 border-l border-l-gray-200 bg-gray-50 w-full">
                    Email:
                  </label>
                  <p className="text-[16px] ml-5 py-3">{client?.email}</p>
                  <label className="mb-1 text-[14px] py-[1px] font-medium text-primary my-2 inline-block px-2 border-l border-l-gray-200 bg-gray-50 w-full">
                    Phone:
                  </label>
                  <p className="text-[16px] ml-5 py-3">{client?.phone}</p>
                  <label className="mb-1 text-[14px] py-[1px] font-medium text-primary my-2 inline-block px-2 border-l border-l-gray-200 bg-gray-50 w-full">
                    Address:
                  </label>
                  <p className="text-[16px] ml-5 py-3">{client?.address}</p>
                  <div className="flex flex-col w-full mt-5 gap-y-2">
                    <div
                      className={`flex items-center w-full px-3 py-2 ${
                        client?.callClient
                          ? "border-l-4 bg-red-50 border-l-red-500"
                          : "border-l-4 bg-gray-50 border-l-gray-500"
                      } gap-x-2 mb-2`}
                    >
                      <Checkbox checked={client?.callClient} />
                      <label className="mr-5 font-normal leading-none text-md text-primary peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                        Do not call the client directly.
                      </label>
                    </div>
                    <div
                      className={`flex items-center w-full px-3 py-2 ${
                        client.emailClient
                          ? "border-l-4 bg-red-50 border-l-red-500"
                          : "border-l-4 bg-gray-50 border-l-gray-500"
                      } gap-x-2 mb-2`}
                    >
                      <Checkbox checked={client?.emailClient} />
                      <label className="font-normal leading-none text-md text-primary peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                        Do not send marketing emails to the client.
                      </label>
                    </div>
                  </div>
                </div>
              </div>
            </DialogDescription>
          </DialogHeader>
        )}
      </DialogContent>
    </Dialog>
  )
}
