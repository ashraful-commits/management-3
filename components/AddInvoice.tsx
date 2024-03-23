import React, { useState } from "react"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { format } from "date-fns"
import {
  ArrowUpDown,
  BookOpenCheck,
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
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"
import { useToast } from "@/components/ui/use-toast"
import { Icons } from "@/components/icons"

export default function AddInvoice(props) {
  const router = useRouter()
  const projectId = props.projectId
  const rate = props.rate
  const userId = props.user
  const upsellerId = props.upsellerId
  const { toast } = useToast()
  const [isLoading, setLoading] = useState(false)
  let [invoiceDate, setinvoiceDate] = useState("")
  const [amount, setAmount] = useState("")
console.log(upsellerId)
  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault()
    setLoading(true)

    function formatDate(dateString) {
      const options = { year: "numeric", month: "long", day: "numeric" }
      return new Intl.DateTimeFormat("en-US", options).format(
        new Date(dateString)
      )
    }

    if (invoiceDate) {
      invoiceDate = formatDate(invoiceDate)
    }

    if (!invoiceDate || !amount) {
      console.log("all fields required")
      toast({
        variant: "destructive",
        title: "all fields required",
      })
      setLoading(false)
      return
    }

    try {
      const res = await fetch("../api/invoice", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          projectId,
          userId,
          upsellerId,
          invoiceDate,
          amount,
          rate,
        }),
      })
      if (res.ok) {
        toast({
          title: "invoice submited",
        })
        setLoading(false)
        window.location.reload(true)
      } else {
        console.log("invoice submit failed!")
        toast({
          variant: "destructive",
          title: "invoice submit failed!",
        })
        setLoading(false)
      }
    } catch (error) {
      console.log("Error during invoice submit:", error)
      toast({
        variant: "destructive",
        title: `Error during invoice submit:", ${error}`,
      })
      setLoading(false)
    }
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <div className="flex items-center">
          <div className="w-4/12">
            <Popover>
              <PopoverTrigger asChild>
                <Button
                  variant={"outline"}
                  className={cn(
                    "w-[280px] justify-start text-left font-normal",
                    !invoiceDate && "text-muted-foreground"
                  )}
                >
                  <CalendarIcon className="mr-2 size-4" />
                  {invoiceDate ? (
                    format(invoiceDate, "PPP")
                  ) : (
                    <span>Pick a date</span>
                  )}
                </Button>
              </PopoverTrigger>
              <PopoverContent className="w-auto p-0">
                <Calendar
                  mode="single"
                  selected={invoiceDate}
                  onSelect={setinvoiceDate}
                  initialFocus
                />
              </PopoverContent>
            </Popover>
          </div>
          <div className="w-4/12">
            <Input
              type="number"
              placeholder="Amount"
              onChange={(e) => setAmount(e.target.value)}
            />
          </div>
          <div className="flex justify-end w-4/12">
            <Button
              className="flex items-center justify-end my-5"
              size="sm"
              disabled={isLoading}
            >
              {isLoading && (
                <Icons.spinner className="mr-2 size-4 animate-spin" />
              )}
              <span className="mr-2">Add New Invoice </span>
              <Plus className="size-4" />
            </Button>
          </div>
        </div>
      </form>
    </>
  )
}
