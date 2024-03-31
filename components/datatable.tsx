"use client"
import { ArrowLeft ,ArrowRight   } from 'lucide-react';


import  React,{useState,useEffect} from "react"
import Image from "next/image"
import Link from "next/link"
import {
  ColumnDef,
  ColumnFiltersState,
  SortingState,
  VisibilityState,
  flexRender,
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  useReactTable,
} from "@tanstack/react-table"
import {
  ArrowUpDown,
  ChevronDown,
  ExternalLink,
  FolderEdit,
  MoreVertical,
  Plus,
  Search,
  Trash2,
} from "lucide-react"
import { useSession } from "next-auth/react"

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
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import ProjectEdit from "@/components/ProjectEdit"
import ProjectInvoice from "@/components/ProjectInvoice"


import { ScrollArea } from "@/components/ui/scroll-area"
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip"

import AddSalesrep from "./AddSalesrep"
import CompanyLogo from "./CompanyLogo"
import Earnings from "./Earnings"
import Statusbadge from "./statusBadge"
import TableSkeletons from './skeleton/TableSkeleton';



const handleRowClick = (projectName) => {
  window.location.href = `/project/${encodeURIComponent(projectName)}`
}

const handleSalesRowClick = (salesPerson) => {
  window.location.href = `/sales/${salesPerson}`
}

const columns: ColumnDef<Projects>[] = [
  {
    accessorKey: "projectName",
    header: "Project Name",
    cell: ({ row }) => (
      <div
        className="flex items-center font-semibold capitalize cursor-pointer text-primary"
        
      >
 
        {row.getValue("projectName")}
      </div>
    ),
  },
  {
    accessorKey: "salesPerson",
    header: "Sales Person",
    cell: ({ row }) => (
      <div
        className="flex items-center font-semibold capitalize cursor-pointer text-primary"
        onClick={() => handleSalesRowClick(row.getValue("salesPerson"))}
      >
        <div className="capitalize">{row.getValue("salesPerson")}</div>
      </div>
    ),
  },
  {
    accessorKey: "clientName",
    header: "Client Name",
    cell: ({ row }) => (
      <div className="capitalize">{row.getValue("clientName")}</div>
    ),
  },
  {
    accessorKey: "_id",
    header: ({ column }) => {
      return <div>Earnings</div>
    },
    cell: ({ row }) => (
      <div className="capitalize">
        <Earnings id={row.getValue("_id")} />
      </div>
    ),
  },
  {
    accessorKey: "companyName",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          className="p-0"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          <span className="pr-2">Company</span>
          <svg
            width="6"
            height="9"
            viewBox="0 0 6 9"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M1.08711 4L4.91289 4C5.34007 4 5.57052 3.49894 5.29252 3.1746L3.37963 0.942899C3.18008 0.710094 2.81992 0.710094 2.62037 0.942899L0.707482 3.1746C0.429479 3.49894 0.659934 4 1.08711 4Z"
              fill="#6E28D4"
            />
            <path
              d="M4.91289 5H1.08711C0.659934 5 0.429479 5.50106 0.707482 5.8254L2.62037 8.0571C2.81992 8.28991 3.18008 8.28991 3.37963 8.0571L5.29252 5.8254C5.57052 5.50106 5.34007 5 4.91289 5Z"
              fill="#A5A6F6"
            />
          </svg>
        </Button>
      )
    },
    cell: ({ row }) => (
      <div className="capitalize">
        <CompanyLogo value={row.getValue("companyName")} />
      </div>
    ),
  },
  {
    id: "status",
    enableHiding: true,
    accessorKey: "status",
    header: ({ column }) => {
      return (
        <Button
          className="p-0 text-center"
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          <span className="pr-2">Status</span>
          <svg
            width="6"
            height="9"
            viewBox="0 0 6 9"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M1.08711 4L4.91289 4C5.34007 4 5.57052 3.49894 5.29252 3.1746L3.37963 0.942899C3.18008 0.710094 2.81992 0.710094 2.62037 0.942899L0.707482 3.1746C0.429479 3.49894 0.659934 4 1.08711 4Z"
              fill="#6E28D4"
            />
            <path
              d="M4.91289 5H1.08711C0.659934 5 0.429479 5.50106 0.707482 5.8254L2.62037 8.0571C2.81992 8.28991 3.18008 8.28991 3.37963 8.0571L5.29252 5.8254C5.57052 5.50106 5.34007 5 4.91289 5Z"
              fill="#A5A6F6"
            />
          </svg>
        </Button>
      )
    },
    cell: ({ row }) => (
      <div className="text-left capitalize">
        <Statusbadge value={row.getValue("status")} />
      </div>
    ),
  },
  {
    accessorKey: "action",
    header: "Action",
    cell: ({ row }) => (
      <div>
        <ul className="flex items-center justify-center [&>li]:mx-1 [&>li]:cursor-pointer">
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger asChild>
                <li >
                  <ProjectEdit slug={row.getValue("projectName")} />
                  <ProjectInvoice slug={row.getValue("projectName")} />
                </li>
              </TooltipTrigger>
              <TooltipContent>
                <p>View Details</p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger asChild>
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
                          This action cannot be undone. This will permanently
                          delete the project and remove data from our servers.
                        </AlertDialogDescription>
                      </AlertDialogHeader>
                      <AlertDialogFooter>
                        <AlertDialogCancel>Cancel</AlertDialogCancel>
                        <AlertDialogAction
                          className="bg-[#ff0909]"
                          onClick={async () => {
                            const res = await fetch(
                              `/api/project?id=${row.original._id}`,
                              {
                                method: "DELETE",
                              }
                            )

                            const res2 = await fetch(
                              `/api/invoice?projectid=${row.original._id}`,
                              {
                                method: "DELETE",
                              }
                            )

                            if (res.ok && res2.ok) {
                              window.location.reload()
                            }
                          }}
                        >
                          Remove
                        </AlertDialogAction>
                      </AlertDialogFooter>
                    </AlertDialogContent>
                  </AlertDialog>
                </li>
              </TooltipTrigger>
              <TooltipContent>
                <p>Delete</p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
        </ul>
      </div>
    ),
  },
]

export default function DataTable(props) {
  const { data: session } = useSession()
  const role = session?.user?.role
  

  const Allcompanies = props.Allcompanies
  const userName = props.userName
  const data = props.projects
  const id = props.id
  const [loading,setLoading] = useState(true)
  const [model,setModel] = useState(false)
  const [sorting, setSorting] = React.useState<SortingState>([])
  const [columnFilters, setColumnFilters] = React.useState<ColumnFiltersState>(
    []
  )
  const [columnVisibility, setColumnVisibility] =
    React.useState<VisibilityState>({})
  const [rowSelection, setRowSelection] = React.useState({})

  const table = useReactTable({
    data,
    columns,
    onSortingChange: setSorting,
    onColumnFiltersChange: setColumnFilters,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    onColumnVisibilityChange: setColumnVisibility,
    onRowSelectionChange: setRowSelection,
    state: {
      sorting,
      columnFilters,
      columnVisibility,
      rowSelection,
    },
  })

  useEffect(()=>{
setTimeout(()=>{
  setLoading(false)
},2000)
  },[])
  return (
    <>
 
      <div className="flex items-center w-full px-2 py-2 my-5 bg-orange-200 rounded-md ">
        <div className="flex items-center w-4/12 gap-4 ">
          <Select
            onValueChange={(value) =>
              table?.getColumn("status")?.setFilterValue(value)
            }
          >
            <SelectTrigger className="w-[180px] text-black text-md">
              <SelectValue placeholder="Status" />
            </SelectTrigger>
            <SelectContent>
              <ScrollArea>
                <SelectItem value="">All</SelectItem>
                <SelectItem value="On Going">On Going</SelectItem>
                <SelectItem value="On Hold">On Hold</SelectItem>
                <SelectItem value="Complete">Complete</SelectItem>
                <SelectItem value="Pending">Pending</SelectItem>
              </ScrollArea>
            </SelectContent>
          </Select>
          {
            (role == "SuperAdmin" && (
              <Select
                onValueChange={(value) =>
                  table?.getColumn("companyName")?.setFilterValue(value)
                }
              >
                <SelectTrigger className="w-[180px] text-black text-md">
                  <SelectValue placeholder="Company" />
                </SelectTrigger>
                <SelectContent>
                  <ScrollArea className="h-40">
                    <SelectItem value="">All</SelectItem>
                    {Allcompanies.map((company) => (
                      <SelectItem value={company.companyName}>
                        <span className="capitalize">
                          {company.companyName}
                        </span>
                      </SelectItem>
                    ))}
                  </ScrollArea>
                </SelectContent>
              </Select>
            ))}
        </div>
        <div
          className={"flex items-center w-4/12 bg-white border rounded-md px-3"}
        >
          <Search className=" text-primary size-5" />
          <Input
            placeholder="Search..."
            value={
              (table?.getColumn("projectName")?.getFilterValue() as string) ?? ""
            }
            onChange={(event) =>
              table?.getColumn("projectName")?.setFilterValue(event.target.value)
            }
            className="w-full border-0"
          />
        </div>
        
      </div>
      <div className="w-full rounded-md">
        <Table className="w-full rounded-md dataTable caption-bottom">
          <TableHeader className="w-full bg-green-100 ">
            {table.getHeaderGroups().map((headerGroup) => (
              <TableRow key={headerGroup.id}>
                {headerGroup.headers.map((header) => {
                  return (
                    <TableHead key={header.id}>
                      {header.isPlaceholder
                        ? null
                        : flexRender(
                            header.column.columnDef.header,
                            header.getContext()
                          )}
                    </TableHead>
                  )
                })}
              </TableRow>
            ))}
          </TableHeader>
          <TableBody className="w-full">
          {loading &&  <TableRow>
          <TableCell colSpan={columns.length}>
           <TableSkeletons/>
          </TableCell>
          </TableRow>
           }
            {!loading &&table?.getRowModel().rows?.length ? (
              table?.getRowModel().rows.map((row) => (
                <TableRow
                  className="mb-5 overflow-hidden "
                  key={row.id}
                  data-state={row.getIsSelected()}
                >
                  {row.getVisibleCells().map((cell) => (
                    <TableCell key={cell.id} className="p-2 px-4">
                      {flexRender(
                        cell.column.columnDef.cell,
                        cell.getContext()
                      )}
                    </TableCell>
                  ))}
                </TableRow>
              ))
            ) : (
              <TableRow>
               {!loading  && <TableCell
                  colSpan={columns.length}
                  className="h-24 text-center"
                >
                  No results.
                </TableCell>}
              </TableRow>
            )}
          </TableBody>
        </Table>
      </div>
      {data?.length>10 &&
      <div className="flex items-center justify-end w-full py-4 space-x-2">
        <div className="flex-1 text-sm text-muted-foreground"></div>
        <div className="space-x-2">
          <Button
           
            className="w-[100px] "
            size="sm"
            onClick={() => table.previousPage()}
            disabled={!table?.getCanPreviousPage()}
          >
            Previous
          </Button>
          <Button
           
            className="w-[100px] "
            size="sm"
            onClick={() => table.nextPage()}
            disabled={!table?.getCanNextPage()}
          >
            Next
          </Button>
       
        </div>
      </div>
      }
    </>
  )
}
