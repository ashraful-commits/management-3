
import { useEffect, useState } from "react"
import Link from "next/link"
import { FileEdit, Pencil, Search, Trash, User } from "lucide-react"


import { getallUser } from "@/lib/getUser"
import { Input } from "@/components/ui/input"
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"

import AddContract from "./AddContract"
import DeleteContract from "./DeleteContract"
import EditContract from "./EditContract"
import { Button } from "@/components/ui/button"
import TableSkeletons from './../skeleton/TableSkeleton';

const ContractTable = () => {
  const [currentPage, setCurrentPage] = useState(1)
  const [itemsPerPage] = useState(10)
  const [allUser, setAllUser] = useState([])
  const [search, setSearch] = useState("")
  const [loading,setLoading] = useState(true)
  const fetchContact = async () => {
    setLoading(true)
    const user = await getallUser()
      setLoading(false)
 
    setAllUser(user)
  }

  useEffect(() => {
    fetchContact()
  }, [])

  const indexOfLastItem = currentPage * itemsPerPage
  const indexOfFirstItem = indexOfLastItem - itemsPerPage
  const currentItems = allUser
    ?.filter((item) => {
      const searchLowerCase = search.toLowerCase().trim()
      if (searchLowerCase === "") {
        return true // Return true for all items if search is empty
      } else {
        return item.name.toLowerCase().includes(searchLowerCase)
      }
    })
    .slice(indexOfFirstItem, indexOfLastItem)

  const paginate = (pageNumber) => setCurrentPage(pageNumber)

  return (
    <div className="">
      <div className="flex items-center justify-between w-full px-2 py-2 bg-orange-200 rounded-md">
        <h1 className="text-xl">Manage Contracts</h1>
        <div className="flex items-center justify-start bg-white border rounded-md">
          <Search className="mx-2 text-primary size-5" />
          <Input
            placeholder="Search contract..."
            value={search}
            onChange={(event) => setSearch(event.target.value)}
            className="h-8 px-2 border-0 rounded-none "
          />
        </div>
      </div>
    
      
      <Table className="w-full border-separate dataTable userTable caption-bottom border-spacing-y-2">
        <TableHeader className="w-full bg-green-100">
          <TableRow className="w-full">
            <TableHead className="w-[300px]">Name</TableHead>
            <TableHead>Contracts</TableHead>
            <TableHead>Actions</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody className="w-full">
          {loading && 
        <TableRow>
          <TableCell colSpan={3}>
          <TableSkeletons/>
          </TableCell>
        </TableRow>
          }
          {currentItems?.length > 0 &&
            currentItems?.map(
              (singleUser) =>
                singleUser.name !== "super admin" && (
                  <TableRow
                    className="border-color-[#E9EFF4] mb-10 overflow-hidden rounded-md border "
                    key={singleUser.id}
                  >
                    <TableCell className="h-10 py-2 font-medium capitalize gap-x-2">
                      <div className="flex items-center gap-x-2">
                        <User
                          size={18}
                          className="font-bold border-[1px] rounded-full text-primary border-primary"
                        />{" "}
                        <Link
                          href={`/sales/${singleUser.name}`}
                          className="font-bold text-primary"
                        >
                          {singleUser.name}
                        </Link>
                      </div>
                    </TableCell>
                    <TableCell className="flex py-2 overflow-x-auto gap-x-2">
                      {singleUser.contracts.map((contract, index) => (
                        <div className="flex px-2 border rounded-md ">
                          <span
                            className="inline-block px-4 py-1 mr-2 capitalize bg-white rounded"
                            key={index}
                          >
                            {contract.companyName} | {contract.rate}%
                          </span>
                          <div className="flex items-center justify-center gap-x-2">
                            |
                            <DeleteContract
                              allUser={allUser}
                              id={singleUser._id}
                              contract={contract}
                            />
                          </div>
                        </div>
                      ))}
                    </TableCell>
                    <TableCell className="py-2">
                      <AddContract id={singleUser._id} />
                    </TableCell>
                  </TableRow>
                )
            )}
        </TableBody>
      </Table>
      {currentItems?.length > 9 && (
        <div className="flex justify-end w-full mt-4 gap-x-4">
          <Button
           size="sm"
           className="w-[100px]"
            onClick={() => paginate(currentPage - 1)}
            disabled={currentPage === 1}
          >
            Previous
          </Button>
          <Button
            size="sm"
            className="w-[100px]"
            onClick={() => paginate(currentPage + 1)}
            disabled={indexOfLastItem >= allUser.length}
          >
            Next
          </Button>
        </div>
      )}
    </div>
  )
}

export default ContractTable
