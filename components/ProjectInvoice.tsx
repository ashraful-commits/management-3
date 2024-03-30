"use client"

import React, { useEffect, useState } from "react"
import { useSearchParams } from "next/navigation"
import Project from "@/models/project"
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
  FileEdit,FileText
} from "lucide-react"
import { signOut, useSession } from "next-auth/react"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Skeleton } from "@/components/ui/skeleton"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import AddInvoice from "@/components/AddInvoice"
import EditProject from "@/components/EditProject"
import Gettotal from "@/components/Gettotal"
import Gettotalcommission from "@/components/Gettotalcommission"
import InvoiceTable from "@/components/InvoiceTable"
import SalesInvoiceTable from "@/components/SalesInvoiceTable"
import Statusbadge from "@/components/statusBadge"

export default function ProjectInvoice({ slug }) {
  const { data: session } = useSession()
  const [data, setData] = useState(null)
  const [commission, setCommission] = useState()
  const [upsellerId, setupsellerId] = useState("none")

  const [isLoading, setLoading] = useState(true)
  const [isEdit, setEdit] = useState(false)

  const handleToggleEdit = () => {
    setEdit((prevEdit) => !prevEdit)
  }

  const [invoiceData, setinvoicedata] = useState()

  const findObjectByCompanyName = (array, companyName) => {
    return array.find((obj) => obj.companyName === companyName)
  }

  useEffect(() => {
    fetch(`/api/project/?slug=${slug}`)
      .then((res) => res.json())
      .then((data) => {
        setData(data?.project)
        setLoading(false)

        fetch(`/api/user/?id=${data?.project.salesId}`)
          .then((response) => response.json())
          .then((Userdata) => {
            const foundObject = findObjectByCompanyName(
              Userdata?.user.contracts,
              data?.project.companyName
            )
            setCommission(foundObject.rate)
            setupsellerId(Userdata?.user.upSellerId)
          })
          .catch((error) => {
            console.error("Error:", error)
          })
        return fetch(`../api/invoice/?projectId=${data?.project._id}`)
      })
      .then((response) => response.json())
      .then((invoices) => {
        setinvoicedata(invoices)
      })
      .catch((error) => {
        console.error("Error:", error)
      })
  }, [])


  return (
    <>
 <Dialog>
      <DialogTrigger>
        <FileText  className="w-[20px] text-blue-600" />
      </DialogTrigger>
      <DialogContent className="min-w-[1200px] min-h-[70vh] max-h-[90vh] overflow-y-auto">
        <DialogHeader>
         
          <DialogDescription>
          <div className="w-full">
    
            <Card className="mt-5 min-h-[65vh]">
              <CardHeader className="bg-green-100">
                <CardTitle className="pl-4 text-orange-500 capitalize border-l-4 border-primary text-primary">
                  Invoices
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-2">
                {(session?.user?.role == "SuperAdmin" ||session?.user?.role == "Admin-IA") && (
                  <AddInvoice
                    projectId={data?._id}
                    rate={commission}
                    user={data?.salesId}
                    upsellerId={upsellerId}
                  />
                )}
                <div className="space-y-1">
                  {!invoiceData && <div className="flex flex-col gap-y-2">
                    <Skeleton className="w-full h-10 bg-gray-100 "/>
                    <Skeleton className="w-full h-10 bg-gray-100 "/>
                    <Skeleton className="w-full h-10 bg-gray-100 "/>
                    <Skeleton className="w-full h-10 bg-gray-100 "/>
                    <Skeleton className="w-full h-10 bg-gray-100 "/>
                    <Skeleton className="w-full h-10 bg-gray-100 "/>
                    </div>}
                  {(session?.user?.role == "SuperAdmin" ||session?.user?.role == "Admin-IA") && invoiceData && (
                    <InvoiceTable
                      rate={commission}
                      invoiceData={invoiceData?.invoices}
                    />
                  )}
                  {session?.user?.role == "Sales1" && invoiceData && (
                    <InvoiceTable
                      rate={commission}
                      invoiceData={invoiceData?.invoices}
                    />
                  )}
                  {session?.user?.role == "Sales2" && invoiceData && (
                    <SalesInvoiceTable
                      rate={commission}
                      invoiceData={invoiceData?.invoices}
                    />
                  )}
                </div>
                <div className="flex items-center pt-10">
                  <div className="w-4/12">
                    <div className="flex items-center justify-between p-4 m-2 border rounded-md single-card">
                      <h2 className="font-semibold text-red-500">
                        Payment Due:
                      </h2>
                      <span className="font-semibold text-red-500">
                        {invoiceData && (
                          <Gettotal
                            filter={"Unpaid"}
                            data={invoiceData?.invoices}
                          />
                        )}
                      </span>
                    </div>
                  </div>
                  <div className="w-4/12">
                    <div className="flex items-center justify-between p-4 m-2 border rounded-md single-card">
                      <h2 className="font-semibold text-green-500">
                        Payment Recived:
                      </h2>
                      <span className="font-semibold text-green-500">
                        {invoiceData && (
                          <Gettotal
                            filter={"Paid"}
                            data={invoiceData?.invoices}
                          />
                        )}
                      </span>
                    </div>
                  </div>
                  <div className="w-4/12">
                    <div className="flex items-center justify-between p-4 m-2 border rounded-md single-card">
                      <h2 className="font-semibold text-green-500">
                        Commission Paid:
                      </h2>
                      <span className="font-semibold text-green-500">
                        {invoiceData && (
                          <Gettotalcommission
                            rate={commission}
                            data={invoiceData?.invoices}
                          />
                        )}
                      </span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
         
      </div>
          </DialogDescription>
        </DialogHeader>
      </DialogContent>
    </Dialog>
      
    </>
  )
}
