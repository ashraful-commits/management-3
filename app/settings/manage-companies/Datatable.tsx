"use client"
import { fetchCompanies } from "@/lib/company/company"

import React, { useEffect, useState } from "react"
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
import { Trash2,Search } from "lucide-react"

import { fetchCompany } from "@/lib/company/company"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"

import Addcompany from "./AddCompany"
import DeleteCompany from "./DeleteCompany"
import EditCompany from "./EditCompany"

function replaceSpaceAndLowerCase(inputString) {
  const result = inputString.replace(/ /g, "-").toLowerCase()
  return result
}

export const columns = [
  {
    accessorKey: "companyLogo",
    header: "Company Logo",
    cell: ({ row }) => (
      <div className="cursor-pointer">
        <Link
          href={`/company/${replaceSpaceAndLowerCase(
            row.getValue("companyName")
          )}`}
        >
          <img src={row.getValue("companyLogo")} alt="logo" className="object-contain w-10 h-10 rounded-full" />
        </Link>
      </div>
    ),
  },
  
  {
    accessorKey: "companyName",
    header: "Company Name",
    
    cell: ({ row }) => (
      <div className="capitalize">
        <Link
          href={`/company/${replaceSpaceAndLowerCase(
            row.getValue("companyName")
          )}`}
          className="flex items-center font-bold capitalize cursor-pointer text-primary"
        >
          {row.getValue("companyName")}
        </Link>
      </div>
    ),
  },
  {
    accessorKey: "companyEmail",
    header: "Company Email",
    cell: ({ row }) => <div>{row.getValue("companyEmail")}</div>,
  },
  {
    accessorKey: "_id",
    header: "Actions",
    cell: ({ row }) => (
      <div className="flex items-center justify-center w-full gap-x-1">
        <EditCompany id={row.getValue("_id")} />
        <DeleteCompany id={row.getValue("_id")} />
      </div>
    ),
  },
]

export default function DataTableDemo(props) {

const [data,setData]= useState([])
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
  const fetchCompany=async()=>{
    const data = await fetchCompanies()
    console.log(data)
    setData(data)
  }
    useEffect(()=>{
      fetchCompany()
    },[])
  return (
    <div className="container">
      <div className="flex items-center justify-between py-4">
        <div className="flex items-center justify-start w-9/12 px-3 bg-white border rounded-md">

 <Search className="text-primary size-5"/>
          <Input
            placeholder="Search Company..."
            value={
              (table.getColumn("companyName")?.getFilterValue() as string) ?? ""
            }
            onChange={(event) =>
              table.getColumn("companyName")?.setFilterValue(event.target.value)
            }
            className="w-full border-0 rounded-none"
          />
        </div>
        <div className="w-3/12 text-right">
          <Addcompany />
        </div>
      </div>
      <div className="rounded-md ">
        <Table className="w-full border-separate dataTable userTable caption-bottom border-spacing-y-2">
          <TableHeader>
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
          <TableBody>
            {table.getRowModel().rows?.length ? (
              table.getRowModel().rows.map((row) => (
                <TableRow className="border-color-[#E9EFF4] mb-10 overflow-hidden rounded-md border shadow-md"
                  key={row.id}
                  data-state={row.getIsSelected() && "selected"}
                >
                  {row.getVisibleCells().map((cell) => (
                    <TableCell className="py-1" key={cell.id}>
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
        <div className="space-x-2">
          <Button
            className="w-[100px]"
            size="sm"
            onClick={() => table.previousPage()}
            disabled={!table.getCanPreviousPage()}s
          >
            Previous
          </Button>
          <Button
            className="w-[100px]"
            size="sm"
            onClick={() => table.nextPage()}
            disabled={!table.getCanNextPage()}
          >
            Next
          </Button>
        </div>
      </div>
    </div>
  )
}
