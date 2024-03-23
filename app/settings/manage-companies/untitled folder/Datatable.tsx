"use client"

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
import { Trash2 } from "lucide-react"

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
          <img src={row.getValue("companyLogo")} alt="logo" className="w-10" />
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
      <div className="flex items-center">
        <DeleteCompany id={row.getValue("_id")} />
      </div>
    ),
  },
]

export default function DataTableDemo(props) {
  const data = props.data

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
    <div className="container">
      <div className="flex items-center justify-between py-4">
        <div className="w-9/12">
          <Input
            placeholder="Search Company..."
            value={
              (table.getColumn("companyName")?.getFilterValue() as string) ?? ""
            }
            onChange={(event) =>
              table.getColumn("companyName")?.setFilterValue(event.target.value)
            }
            className="w-full"
          />
        </div>
        <div className="w-3/12 text-right">
          <Addcompany />
        </div>
      </div>
      <div className="border rounded-md">
        <Table>
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
                <TableRow
                  key={row.id}
                  data-state={row.getIsSelected() && "selected"}
                >
                  {row.getVisibleCells().map((cell) => (
                    <TableCell key={cell.id}>
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
            className="min-w-[120px]"
            onClick={() => table.previousPage()}
            disabled={!table.getCanPreviousPage()}
          >
            Previous
          </Button>
          <Button
            className="min-w-[120px]"
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
