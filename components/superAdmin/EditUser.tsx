"use client"

import React, { useEffect, useState } from "react"
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

export default function EditUser(props) {
  const [open, setOpen] = useState(false)
  const [value, setValue] = useState(null)

  const { toast } = useToast()
  const userId = props.id
  const [isLoading, setLoading] = useState(false)
  const [userData, setuserData] = useState()

  const [Name, setName] = useState()
  const [Role, setRole] = useState("")
  const [commission_rate, setcommission_rate] = useState(null)
  const [upSeller, setupSeller] = useState()
  const [upSellerId, setupSellerId] = useState()
  const [Users, setUsers] = useState()

  const [adminCompany, setadminCompany] = useState()

  const [activeCompany, setactiveCompany] = useState()
  const [offerCompany, setofferCompany] = useState()

  const [NewCompany, setNewCompany] = useState()
  const [selectedRate, setSelectedRate] = useState(null)
  const [selectedLogo, setSelectedLogo] = useState(null)

  useEffect(() => {
    fetch(`/api/user/?id=${userId}`)
      .then((response) => response.json())
      .then((data) => {
        const userData = data.user
        setuserData(userData)
        setValue(userData?.upSellerId)
        setRole(userData?.role)
        setcommission_rate(userData?.upsellerPercentage)
        setupSellerId(userData?.upSellerId)
        const companyNamesArray = userData.contracts.map(
          (contract) => contract.companyName
        )
        setactiveCompany(companyNamesArray)
      })
      .catch((error) => {
        console.error("Error:", error)
      })

    fetchUsers("Sales1")
      .then((users) => {
        setUsers(users)
      })
      .catch((error) => {
        console.error("Error in component:", error)
      })

    fetchCompanies().then((companies) => {
      setofferCompany(companies)
    })
  }, [])

  if (!userData) {
    return <FileEdit className="w-[20px] text-blue-600" />
  }

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault()

    setLoading(true)
    try {
      const res = await fetch(`/api/user/?id=${userId}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: Name,
          role: Role,
          commission_rate,
          upSeller,
          upSellerId,
        }),
      })

      if (res.ok) {
        setLoading(false)
        toast({
          variant: "default",
          title: "User Updated!",
        })
        window.location.reload()
      } else {
        console.log("submission failed!")
        toast({
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
          <DialogTitle>Edit User</DialogTitle>
          <DialogDescription>
            <div className="grid w-full items-center gap-1.5">
              <form onSubmit={handleSubmit}>
                <label className="mb-1 text-black">Username:</label>
                <Input
                  className="mb-5"
                  type="text"
                  defaultValue={userData.name}
                  onChange={(e) => setName(e.target.value.trim())}
                />
                <label className="mb-2 text-black">User Role:</label>
                <div className="mb-5">
                  <Select defaultValue={userData.role} onValueChange={setRole}>
                    <SelectTrigger className="w-full border bg-[#fff] text-black">
                      <SelectValue placeholder="Role" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="SuperAdmin">SuperAdmin</SelectItem>
                      <SelectItem value="Sales1">Sales1</SelectItem>
                      <SelectItem value="Sales2">Sales2</SelectItem>
                      <SelectItem value="Admin-IA">Admin-IA</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                {console.log(Role)}
                {Users && (Role!=="Admin-IA")&&(
                  <>
                  <label className="pb-2 text-black">Upseller:</label>
                  <div className="w-full mb-5">
                    <Popover open={open} onOpenChange={setOpen}>
                      <PopoverTrigger asChild>
                        <Button
                          variant="outline"
                          role="combobox"
                          aria-expanded={open}
                          className="w-[200px] justify-between bg-white"
                        >
                          {value
                            ? Users.find((user) => user._id === value)?.name
                            : "Select upseller..."}
                          <ChevronsUpDown className="ml-2 opacity-50 size-4 shrink-0" />
                        </Button>
                      </PopoverTrigger>
                      <PopoverContent className="w-[200px] p-0">
                        <Command>
                          <CommandInput placeholder="Search Upseller..." />
                          <CommandEmpty>No upseller found.</CommandEmpty>
                          <CommandGroup>
                            <CommandItem onSelect={()=>{setupSeller("none")
                                  setupSellerId(null),setOpen(false),setValue("")}}  value="none">
                              <Check
                                className={cn(
                                  "mr-2 size-4",
                                  value == "none" ? "opacity-100" : "opacity-0"
                                )}
                              />
                              None
                            </CommandItem>
                            {Users.map((user) => (
                              <CommandItem
                                key={user._id}
                                value={user._id}
                                onSelect={(currentValue) => {
                                  setValue(
                                    currentValue === value ? "" : currentValue
                                  )
                                  setupSeller(user.name)
                                  setupSellerId(currentValue)
                                  setOpen(false)
                                }}
                              >
                                <Check
                                  className={cn(
                                    "mr-2 size-4",
                                    value === user._id
                                      ? "opacity-100"
                                      : "opacity-0"
                                  )}
                                />
                                {user.name}
                              </CommandItem>
                            ))}
                          </CommandGroup>
                        </Command>
                      </PopoverContent>
                    </Popover>
                  </div>
 
                  {upSellerId &&
                  <div>
                   <label className="mb-1 text-black">Commission:</label>
                  <Input
                    className="mb-5"
                    type="text"
                    value={commission_rate}
                    onChange={(e) => setcommission_rate(e.target.value.trim())}
                  />
                  </div>
                  }
                 
              </>
                )}

                {Role && (
                  <>
                    <label className="mb-2 text-black">Company:</label>
                    <Input
                      className="mb-5"
                      type="text"
                      defaultValue="Image Appeal"
                      onChange={(e) => setadminCompany(e.target.value.trim())}
                    />
                  </>
                )}

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
