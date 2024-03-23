"use client"

import * as React from "react"
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
import { Plus,Search } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { ScrollArea } from "@/components/ui/scroll-area"
import {
  Select,
  SelectContent,
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

import Commission from "./Commission"
import CommissionperProject from "./CommissionperProject"
import CompanyLogo from "./CompanyLogo"
import Earnings from "./Earnings"
import Gettotalcommission from "./Gettotalcommission"
import Statusbadge from "./statusBadge"

const handleRowClick = (projectName) => {
  window.location.href = `/project/${projectName}`
}

const columns: ColumnDef<Projects>[] = [
  {
    accessorKey: "projectName",
    header: "Project Name",
    cell: ({ row }) => (
      <div
        className="flex items-center font-semibold capitalize cursor-pointer text-primary"
        onClick={() => handleRowClick(row.getValue("projectName"))}
      >
        {/* <span className="mr-3">{parseInt(row.id) + 1}</span> */}
        <span className="w-6 mr-2">
          <svg
            viewBox="0 0 32 26"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M17.3825 4.33948L14.3154 1.00804C13.7253 0.368794 12.8894 0 12.0165 0H3.12246C1.39527 0 0 1.40142 0 3.12246V22.8775C0 24.5986 1.39527 26 3.12246 26H28.348C30.069 26 31.4704 24.6047 31.4704 22.8775V7.46194C31.4704 5.7409 30.0752 4.33948 28.348 4.33948H17.3825Z"
              fill="#7495B5"
            />
          </svg>
        </span>
        {row.getValue("projectName")}
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
      <div className="capitalize min-w-[50px]">
        <CommissionperProject projectId={row.getValue("_id")} />
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
]

export default function DataTable(props) {
  const allinvoice = props.allinvoice
  const data = props?.projects||[]
  const AllCompanies = props.AllCompanies

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

  return (
    <>
      <div className="flex items-center py-4">
        <div className="flex items-center w-7/12 gap-4">
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
                {AllCompanies?.length>0 &&
                  AllCompanies?.map((company, index) => (
                    <SelectItem value={company.companyName} key={index}>
                      <span className="capitalize">{company.companyName}</span>
                    </SelectItem>
                  ))}
              </ScrollArea>
            </SelectContent>
          </Select>

          <div className="flex items-center justify-start px-3 bg-white border rounded-md">
            <Search className="text-primary size-5"/>
          <Input
            placeholder="Search..."
            value={
              (table?.getColumn("projectName")?.getFilterValue() as string) ?? ""
            }
            onChange={(event) =>
              table?.getColumn("projectName")?.setFilterValue(event.target.value)
            }
            className="max-w-sm px-2 border-0"
          />
          </div>
        </div>
        <div className="w-5/12 text-right">
          <Button size="sm">
            <Link className="flex items-center justify-end" href="/add-project">
              <span className="mr-2">Add New Project </span>
              <Plus className="size-4" />
            </Link>
          </Button>
        </div>
      </div>
      <div>
        <Table className="w-full border-separate dataTable caption-bottom border-spacing-y-2">
          <TableHeader className="bg-transparent">
            {table?.getHeaderGroups().map((headerGroup) => (
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
          <TableBody>
            {table?.getRowModel().rows?.length ? (
              table?.getRowModel().rows.map((row) => (
                <>
                  <TableRow
                    className="border-color-[#E9EFF4] overflow-hidden rounded-md border shadow-md"
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
                </>
              ))
            ) : (
              <TableRow>
                <TableCell
                  colSpan={columns.length}
                  className="h-24 text-center"
                >
                  No results.
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </div>
      <div className="flex items-center justify-end py-4 space-x-2">
        <div className="flex-1 text-sm text-muted-foreground"></div>
        <div className="space-x-2">
          <Button
         
            className="w-[100px]"
            size="sm"
            
            onClick={() => table?.previousPage()}
            disabled={!table?.getCanPreviousPage()}
          >
            Previous
          </Button>
          <Button
         
            className="w-[100px] "
            size="sm"
            
            onClick={() => table?.nextPage()}
            disabled={!table?.getCanNextPage()}
          >
            Next
          </Button>
        </div>
      </div>
    </>
  )
}
