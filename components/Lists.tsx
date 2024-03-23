"use client"
import React from "react"
import {fetchProjects} from "@/lib/fetchProjects"
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"

import { Badge } from "./ui/badge"



export default async function Lists() {
const [projects,setProjects]=useSate([])
const getProjects = async () => {
  fetchProjects().then((res)=>{
    setProjects(res.data)
  })
}
  useEffect(()=>{
     getProjects()
  },[])

  return (
    <section>
      <div className="container">
        <Table>
          <TableHeader>
            <TableRow className="border-none [&>*]:py-0">
              <TableHead className="w-[180px]">Project Name</TableHead>
              <TableHead className="w-[180px]">Client Name</TableHead>
              <TableHead>
                <div className="flex items-center">
                  <span className="mr-1">Date Signed</span>
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
                </div>
              </TableHead>
              <TableHead>
                <div className="flex items-center">
                  <span className="mr-2">Contact Amount</span>
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
                </div>
              </TableHead>
              <TableHead>Commission</TableHead>
              <TableHead>Project Status</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {projects.map((t) => (
              <TableRow
                className="[&>*]:mb-2 [&>*]:bg-white [&>*]:py-2"
                key={t._id}
              >
                <TableCell className="rounded-l-md">
                  <span>{t.projectName}</span>
                </TableCell>
                <TableCell className="rounded-l-md">
                  <span>{t.clientName}</span>
                </TableCell>
                <TableCell>{t.dateSigned}</TableCell>
                <TableCell>
                  <div className="flex items-center">
                    <span className="ml-2">${t.budget}</span>
                  </div>
                </TableCell>
                <TableCell>$1596</TableCell>
                <TableCell>
                  <Badge
                    className="mx-2 rounded-full border-[#3AAE54] bg-[#E7FBF0] px-1.5 text-[#3AAE54]"
                    variant="outline"
                  >
                    On Going
                  </Badge>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </section>
  )
}
