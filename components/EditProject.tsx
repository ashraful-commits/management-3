import React, { useState } from "react"
import { useRouter, useSearchParams } from "next/navigation"
import { DropdownMenuCheckboxItemProps } from "@radix-ui/react-dropdown-menu"
import { format } from "date-fns"
import { Calendar as CalendarIcon,FolderEdit,Trash2 } from "lucide-react"

import { BackToMain, formatScope } from "@/lib/CreateScope"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Calendar } from "@/components/ui/calendar"
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
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Textarea } from "@/components/ui/textarea"
import { useToast } from "@/components/ui/use-toast"
import { Icons } from "@/components/icons"
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
import Statusbadge from "./statusBadge"

export default function EditProject(props) {
  const data = props.data

  const { toast } = useToast()
  const router = useRouter()

  const [status, setStatus] = useState(data.status)
  const [isLoading, setLoading] = useState(false)
  const [projectName, setprojectName] = useState(data.projectName)
  const [salesPerson, setsalesPerson] = useState(data.salesPerson)
  const [projectDetails, setprojectDetails] = useState(data.projectDetails)

  const [budget, setbudget] = useState(data.budget)
  const [commisson_rate, setcommisson_rate] = useState(data.commisson_rate)
  let [dateSigned, setdateSigned] = useState("")
  const [clientName, setclientName] = useState(data.clientName)
  const [email, setemail] = useState(data.email)
  const [phone, setphone] = useState(data.phone)
  const [address, setaddress] = useState(data.address)
  const [companyName, setcompanyName] = useState(data.companyName)

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault()
    setLoading(true)
    function formatDate(dateString) {
      const options = { year: "numeric", month: "long", day: "numeric" }
      return new Intl.DateTimeFormat("en-US", options).format(
        new Date(dateString)
      )
    }

    if (dateSigned) {
      dateSigned = formatDate(dateSigned)
    } else {
      dateSigned = data.dataSigned
    }

    try {
      const res = await fetch(`/api/project/?id=${data._id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          projectName,
          salesPerson,
          projectDetails,
          companyName,
          budget,
          status,
          commisson_rate,
          dateSigned,
          clientName,
          email,
          phone,
          address,
        }),
      })

      if (res.ok) {
        setLoading(false)
        toast({
          variant: "default",
          title: "Post Updated!",
        })
        window.location.reload()
      } else {
        console.log("project submit failed!")
        toast({
          title: "project submit failed!",
        })
        setLoading(false)
      }
    } catch (error) {
      console.log("Error during project submit:", error)
      toast({
        variant: "destructive",
        title: `Error during project submit:", ${error}`,
      })
      setLoading(false)
    }
  }

  return (
    <div className="h-full">
      <form onSubmit={handleSubmit}>
        <div className="flex items-center justify-between w-full px-2 py-2 my-5 bg-green-100">
          <div className="pl-4 capitalize border-l-4 border-primary text-primary">
            <input
              className="w-full px-4 py-1 border border-gray-800 rounded-md h-7"
              type="text"
              onChange={(e) => setprojectName(e.target.value.trim())}
              defaultValue={data.projectName}
            />
          </div>
          <div className="flex flex-row justify-between">
                          <div className="flex items-center justify-end w-full">
                            <ul className="flex items-center [&>li]:mx-1 [&>li]:cursor-pointer">
                              <li onClick={props.handleToggleEdit}>
                                <FolderEdit className="w-[20px] text-green-500" />
                              </li>
                              <li>
                                <AlertDialog>
                                  <AlertDialogTrigger asChild>
                                    <Trash2 className="w-[20px] text-red-600" />
                                  </AlertDialogTrigger>
                                  <AlertDialogContent className="bg-white">
                                    <AlertDialogHeader>
                                      <AlertDialogTitle>
                                        Are you absolutely sure?
                                      </AlertDialogTitle>
                                      <AlertDialogDescription>
                                        This action cannot be undone. This will
                                        permanently delete the project and
                                        remove data from our servers.
                                      </AlertDialogDescription>
                                    </AlertDialogHeader>
                                    <AlertDialogFooter>
                                      <AlertDialogCancel>
                                        Cancel
                                      </AlertDialogCancel>
                                      <AlertDialogAction
                                        className="bg-[#ff0909]"
                                        onClick={async () => {
                                          const res = await fetch(
                                            `/api/project?id=${data?._id}`,
                                            {
                                              method: "DELETE",
                                            }
                                          )
                                          if (res.ok) {
                                            window.location.href = "/"
                                          }
                                        }}
                                      >
                                        Remove
                                      </AlertDialogAction>
                                    </AlertDialogFooter>
                                  </AlertDialogContent>
                                </AlertDialog>
                              </li>
                            </ul>
                          </div>
                        </div>
        </div>

        <div className="flex flex-col ">
          <Tabs defaultValue="project" className="w-full ">
            <TabsList className="grid grid-cols-2  w-[300px] border">
              <TabsTrigger
                className="flex items-center justify-center h-8"
                value="project"
              >
                Project
              </TabsTrigger>
              <TabsTrigger
                className="flex items-center justify-center h-8"
                value="client"
              >
                Client
              </TabsTrigger>
            </TabsList>
            <TabsContent className="h-full" value="project">
              <div className="w-full pr-4 ">
                <div className="flex items-center mb-4">
                  <div className="w-6/12">
                    <h4>
                      <b className="font-semibold">Sales Person: </b>
                    </h4>
                  </div>
                  <div className="w-6/12">
                    <input
                      className="w-full h-10 px-4 py-1 border border-gray-800 rounded-md"
                      type="text"
                      onChange={(e) => setsalesPerson(e.target.value)}
                      defaultValue={data.salesPerson}
                    />
                  </div>
                </div>
                <div className="flex items-center mb-4">
                  <div className="w-6/12">
                    <h4>
                      <b className="font-semibold">Company Name: </b>
                    </h4>
                  </div>
                  <div className="w-6/12">
                    <input
                      className="w-full h-10 px-4 py-1 border border-gray-800 rounded-md"
                      disabled
                      type="text"
                      value={companyName}
                    />
                  </div>
                </div>
                <div className="flex items-center mb-4">
                  <div className="w-6/12">
                    <h4>
                      <b className="font-semibold">Status: </b>
                    </h4>
                  </div>
                  <div className="w-6/12">
                    <DropdownMenu>
                      <DropdownMenuTrigger asChild>
                        <Button
                          variant="ghost"
                          className="hover:bg-transparent"
                        >
                          <Statusbadge value={status} />
                        </Button>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent>
                        <DropdownMenuRadioGroup
                          value={status}
                          onValueChange={setStatus}
                        >
                          <DropdownMenuRadioItem value="On Going">
                            On Going
                          </DropdownMenuRadioItem>
                          <DropdownMenuRadioItem value="On Hold">
                            On Hold
                          </DropdownMenuRadioItem>
                          <DropdownMenuRadioItem value="Pending">
                            Pending
                          </DropdownMenuRadioItem>
                          <DropdownMenuRadioItem value="Complete">
                            Complete
                          </DropdownMenuRadioItem>
                        </DropdownMenuRadioGroup>
                      </DropdownMenuContent>
                    </DropdownMenu>
                  </div>
                </div>
                <div className="flex items-center mb-4">
                  <div className="w-6/12">
                    <h4>
                      <b className="font-semibold">Date Signed: </b>
                    </h4>
                  </div>
                  <div className="w-6/12">
                    <h4>
                      <Popover>
                        <PopoverTrigger asChild>
                          <Button
                            variant={"outline"}
                            className={cn(
                              "w-full justify-start border-black text-left font-normal",
                              !dateSigned && "text-muted-foreground"
                            )}
                          >
                            <CalendarIcon className="mr-2" />
                            {dateSigned ? (
                              format(dateSigned, "PPP")
                            ) : (
                              <span>{data.dateSigned}</span>
                            )}
                          </Button>
                        </PopoverTrigger>
                        <PopoverContent className="w-auto p-0">
                          <Calendar
                            mode="single"
                            selected={dateSigned}
                            onSelect={setdateSigned}
                            initialFocus
                          />
                        </PopoverContent>
                      </Popover>
                    </h4>
                  </div>
                </div>
                <div className="flex items-center mb-4">
                  <div className="w-6/12">
                    <h4>
                      <b className="font-semibold">Budget: </b>
                    </h4>
                  </div>
                  <div className="w-6/12">
                    <h4 className="flex items-center h-10 pl-2 border border-gray-800 rounded-md">
                      <span className="mr-2">$</span>
                      <input
                        className="w-full px-4 py-1 rounded-md"
                        type="text"
                        onChange={(e) => setbudget(e.target.value.trim())}
                        defaultValue={data.budget}
                      />
                    </h4>
                  </div>
                </div>
              </div>
              <div className="space-y-1">
                <h4>
                  <b className="font-semibold">Project Details: </b>
                </h4>
                <p>
                  <textarea
                    className="w-full h-24 px-4 py-1 border border-gray-800 rounded-md"
                    onChange={(e) =>
                      setprojectDetails(formatScope(e.target.value.trim()))
                    }
                    defaultValue={BackToMain(data.projectDetails)}
                  ></textarea>
                </p>
              
              </div>
            </TabsContent>
            <TabsContent className="h-full" value="client">
              <div className="w-full pl-4">
                <div className="flex items-center mb-4">
                  <div className="w-6/12">
                    <h4>
                      <b className="font-semibold">Client Name: </b>
                    </h4>
                  </div>
                  <div className="w-6/12">
                    <h4>
                      <input
                        className="w-full px-4 py-1 border border-gray-800 rounded-md"
                        type="text"
                        onChange={(e) => setclientName(e.target.value.trim())}
                        defaultValue={data.clientName}
                      />
                    </h4>
                  </div>
                </div>

                <div className="flex items-center mb-4">
                  <div className="w-6/12">
                    <h4>
                      <b className="font-semibold">Email Address: </b>
                    </h4>
                  </div>
                  <div className="w-6/12">
                    <h4>
                      <input
                        className="w-full px-4 py-1 border border-gray-800 rounded-md"
                        type="text"
                        onChange={(e) => setemail(e.target.value.trim())}
                        defaultValue={data.email}
                      />
                    </h4>
                  </div>
                </div>

                <div className="flex items-center mb-4">
                  <div className="w-6/12">
                    <h4>
                      <b className="font-semibold">Phone Number: </b>
                    </h4>
                  </div>
                  <div className="w-6/12">
                    <h4>
                      <input
                        className="w-full px-4 py-1 border border-gray-800 rounded-md"
                        type="text"
                        onChange={(e) => setphone(e.target.value.trim())}
                        defaultValue={data.phone}
                      />
                    </h4>
                  </div>
                </div>

                <div className="flex items-center mb-4">
                  <div className="w-6/12">
                    <h4>
                      <b className="font-semibold">Client Address: </b>
                    </h4>
                  </div>
                  <div className="w-6/12">
                    <h4>
                      <input
                        className="w-full px-4 py-1 border border-gray-800 rounded-md"
                        type="text"
                        onChange={(e) =>
                          setaddress(formatScope(e.target.value.trim()))
                        }
                        defaultValue={BackToMain(data.address)}
                      />
                    </h4>
                  </div>
                </div>
              </div>
            </TabsContent>
           
          </Tabs>
             <Button className="mt-3" disabled={isLoading}>
                  {isLoading && (
                    <Icons.spinner className="mr-2 size-4 animate-spin" />
                  )}
                  Submit
                </Button>
        </div>
      </form>
    </div>
  )
}
