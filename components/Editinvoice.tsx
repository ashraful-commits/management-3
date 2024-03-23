"use client"

import React, { useEffect, useState } from "react"
import { useRouter } from "next/navigation"
import { format } from "date-fns"
import {
  ArrowUpDown,
  Calendar as CalendarIcon,
  ChevronDown,
  ExternalLink,
  FolderEdit,
  MoreVertical,
  Plus,
  Trash2,
} from "lucide-react"

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Calendar } from "@/components/ui/calendar"
import { Checkbox } from "@/components/ui/checkbox"
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { useToast } from "@/components/ui/use-toast"
import { Icons } from "@/components/icons"

import Statusbadge from "./statusBadge"

export default function Editinvoice(props) {
  const { toast } = useToast()
  const router = useRouter()
  const id = props.value

  const [defaultData, setdefaultdata] = useState()
  let [date, setdate] = useState("")
  const [status, setStatus] = useState()
  const [commissionPaid, setcommissionPaid] = useState()
  const [isLoading, setLoading] = useState(false)

  // const [newDate, setNewdate] = useState()
  const [newAmount, setNewamount] = useState()
  // const [newStatus, setNewstatus] = useState()

  useEffect(() => {
    fetchDataFromAPI()
      .then((apiData) => {
        setdefaultdata(apiData.invoices)
        setcommissionPaid(apiData.invoices.commission_paid)
        setStatus(apiData.invoices.status)
        setNewamount(apiData.invoices.amount)
      })
      .catch((error) => {
        console.error("Error fetching data:", error)
      })
  }, [])

  const fetchDataFromAPI = async () => {
    const response = await fetch(`/api/invoice?invoiceid=${id}`)
    const data = await response.json()
    return data
  }

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault()
    setLoading(true)
    function formatDate(dateString) {
      const options = { year: "numeric", month: "long", day: "numeric" }
      return new Intl.DateTimeFormat("en-US", options).format(
        new Date(dateString)
      )
    }

    if (date) {
      date = formatDate(date)
    } else {
      date = defaultData.invoiceDate
    }

    try {
      const res = await fetch(`/api/invoice?invoiceid=${id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          invoiceDate: date,
          amount: newAmount,
          status,
          commission_paid: commissionPaid,
        }),
      })

      if (res.ok) {
        setLoading(false)
        toast({
          variant: "default",
          title: "Invoice Updated!",
        })
        window.location.reload()
      } else {
        console.log("Invoice submit failed!")
        toast({
          title: "Invoice submit failed!",
        })
        setLoading(false)
      }
    } catch (error) {
      console.log("Error during Invoice submit:", error)
      toast({
        variant: "destructive",
        title: `Error during Invoice submit:", ${error}`,
      })
      setLoading(false)
    }

    console.log(date, status, newAmount, commissionPaid)
  }

  if (!defaultData) {
    return "loading..."
  }

  return (
    <form onSubmit={handleSubmit}>
      <div className="grid gap-4 py-4">
        <div className="flex items-center gap-2">
          <Label htmlFor="date" className="w-2/12 pr-2 text-right">
            Date
          </Label>
          <div className="w-10/12">
            <Popover>
              <PopoverTrigger asChild>
                <Button
                  variant={"outline"}
                  className={cn(
                    "w-full justify-start text-left font-normal",
                    !date && "text-muted-foreground"
                  )}
                >
                  <CalendarIcon className="mr-2" />
                  {date ? (
                    format(date, "PPP")
                  ) : (
                    <span>{defaultData.invoiceDate}</span>
                  )}
                </Button>
              </PopoverTrigger>
              <PopoverContent className="w-auto p-0">
                <Calendar
                  mode="single"
                  selected={date}
                  onSelect={setdate}
                  initialFocus
                />
              </PopoverContent>
            </Popover>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <Label htmlFor="amount" className="w-2/12 pr-2 text-right">
            Amount
          </Label>
          <Input
            id="amount"
            type="number"
            defaultValue={defaultData.amount}
            onChange={(e) => setNewamount(e.target.value.trim())}
            className="col-span-3"
          />
        </div>
        <div className="flex items-center gap-2">
          <Label htmlFor="status" className="w-5/12 pr-2 text-right">
            Status
          </Label>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" className="hover:bg-transparent">
                <Statusbadge value={status} />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuRadioGroup value={status} onValueChange={setStatus}>
                <DropdownMenuRadioItem value="Paid">Paid</DropdownMenuRadioItem>
                <DropdownMenuRadioItem value="Unpaid">
                  Unpaid
                </DropdownMenuRadioItem>
              </DropdownMenuRadioGroup>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
        <div className="flex items-center gap-2">
          <Label htmlFor="status" className="w-5/12 pr-2 text-right">
            Commission Paid
          </Label>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" className="hover:bg-transparent">
                <Statusbadge value={commissionPaid} />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuRadioGroup
                value={commissionPaid}
                onValueChange={setcommissionPaid}
              >
                <DropdownMenuRadioItem value="Yes">Yes</DropdownMenuRadioItem>
                <DropdownMenuRadioItem value="No">No</DropdownMenuRadioItem>
              </DropdownMenuRadioGroup>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
        <Button disabled={isLoading}>
          {isLoading && <Icons.spinner className="mr-2 size-4 animate-spin" />}
          Submit
        </Button>
      </div>
    </form>
  )
}
