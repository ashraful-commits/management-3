import React from "react"

import { Skeleton } from "@/components/ui/skeleton"

const CompanySkeleton = () => {
  return (
    <div className="container w-full h-full">
      <Skeleton className="w-full bg-white h-[250px] flex justify-between items-center p-5">
        <div className="flex h-full gap-x-2">
          <Skeleton className="bg-gray-100 w-[220px] h-[220px]" />
          <Skeleton className="flex flex-col bg-white gap-y-2">
            <Skeleton className="h-10 bg-gray-100 w-52" />
            <Skeleton className="h-10 bg-gray-100 w-52" />
            <Skeleton className="h-10 bg-gray-100 w-52" />
            <Skeleton className="h-10 bg-gray-100 w-52" />
            <Skeleton className="flex justify-between bg-white gap-x-2 w-52">
              <Skeleton className="bg-gray-100 rounded-full w-7 h-7" />
              <Skeleton className="bg-gray-100 rounded-full w-7 h-7" />
              <Skeleton className="bg-gray-100 rounded-full w-7 h-7" />
              <Skeleton className="bg-gray-100 rounded-full w-7 h-7" />
            </Skeleton>
          </Skeleton>
        </div>
        <div className="flex items-start h-full gap-x-2 ">
          <Skeleton className="h-12 bg-gray-100 rounded-full w-52" />
          <Skeleton className="h-12 bg-gray-100 rounded-full w-52" />
        </div>
      </Skeleton>
      <Skeleton className="flex items-center w-[500px] justify-between h-12 p-3 py-2 mt-5 bg-white gap-x-2">
        <Skeleton className="w-32 h-10 bg-gray-100" />
        <Skeleton className="w-32 h-10 bg-gray-100" />
        <Skeleton className="w-32 h-10 bg-gray-100" />
      </Skeleton>
      <Skeleton className="w-full bg-white p-5 h-[500px] flex gap-x-2 mt-5">
        <Skeleton className="w-full h-full bg-gray-100"/>
      </Skeleton>
    </div>
  )
}

export default CompanySkeleton
