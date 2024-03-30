import React from "react"

import { Skeleton } from "@/components/ui/skeleton"

const TableRowSkeleton = () => {
  return (
    <div className="w-full h-full mt-10">
      <div className="flex justify-between">
        <div className="flex gap-x-5">
          <Skeleton className="h-8 bg-white border w-52" />
          <Skeleton className="h-8 bg-white border w-52" />
          <Skeleton className="h-8 bg-white border w-52" />
        </div>
        <div>
          <Skeleton className="h-8 bg-white border w-52" />
        </div>
      </div>

      <div className="mt-5">
        <div className="flex items-center justify-between ">
          <Skeleton className="w-32 h-6 my-3 bg-white border" />
          <Skeleton className="w-32 h-6 my-3 bg-white border" />
          <Skeleton className="w-32 h-6 my-3 bg-white border" />
          <Skeleton className="w-32 h-6 my-3 bg-white border" />
          <Skeleton className="w-32 h-6 my-3 bg-white border" />
        </div>
        <Skeleton className="w-full h-[2px] mt-1 bg-gray-100" />
        <div className="flex flex-col mt-4 gap-y-2">
          <Skeleton className="flex items-center justify-between w-full h-8 px-2 bg-white">
            <Skeleton className="w-20 h-6 bg-gray-100 border" />
            <Skeleton className="w-20 h-6 bg-gray-100 border" />
            <Skeleton className="w-20 h-6 bg-gray-100 border" />
            <Skeleton className="w-20 h-6 bg-gray-100 border" />
            <Skeleton className="w-20 h-6 bg-gray-100 border" />
          </Skeleton>
          <Skeleton className="flex items-center justify-between w-full h-8 px-2 bg-white">
            <Skeleton className="w-20 h-6 bg-gray-100 border" />
            <Skeleton className="w-20 h-6 bg-gray-100 border" />
            <Skeleton className="w-20 h-6 bg-gray-100 border" />
            <Skeleton className="w-20 h-6 bg-gray-100 border" />
            <Skeleton className="w-20 h-6 bg-gray-100 border" />
          </Skeleton>
          <Skeleton className="flex items-center justify-between w-full h-8 px-2 bg-white">
            <Skeleton className="w-20 h-6 bg-gray-100 border" />
            <Skeleton className="w-20 h-6 bg-gray-100 border" />
            <Skeleton className="w-20 h-6 bg-gray-100 border" />
            <Skeleton className="w-20 h-6 bg-gray-100 border" />
            <Skeleton className="w-20 h-6 bg-gray-100 border" />
          </Skeleton>
          <Skeleton className="flex items-center justify-between w-full h-8 px-2 bg-white">
            <Skeleton className="w-20 h-6 bg-gray-100 border" />
            <Skeleton className="w-20 h-6 bg-gray-100 border" />
            <Skeleton className="w-20 h-6 bg-gray-100 border" />
            <Skeleton className="w-20 h-6 bg-gray-100 border" />
            <Skeleton className="w-20 h-6 bg-gray-100 border" />
          </Skeleton>
          <Skeleton className="flex items-center justify-between w-full h-8 px-2 bg-white">
            <Skeleton className="w-20 h-6 bg-gray-100 border" />
            <Skeleton className="w-20 h-6 bg-gray-100 border" />
            <Skeleton className="w-20 h-6 bg-gray-100 border" />
            <Skeleton className="w-20 h-6 bg-gray-100 border" />
            <Skeleton className="w-20 h-6 bg-gray-100 border" />
          </Skeleton>
          <Skeleton className="flex items-center justify-between w-full h-8 px-2 bg-white">
            <Skeleton className="w-20 h-6 bg-gray-100 border" />
            <Skeleton className="w-20 h-6 bg-gray-100 border" />
            <Skeleton className="w-20 h-6 bg-gray-100 border" />
            <Skeleton className="w-20 h-6 bg-gray-100 border" />
            <Skeleton className="w-20 h-6 bg-gray-100 border" />
          </Skeleton>
          <Skeleton className="flex items-center justify-between w-full h-8 px-2 bg-white">
            <Skeleton className="w-20 h-6 bg-gray-100 border" />
            <Skeleton className="w-20 h-6 bg-gray-100 border" />
            <Skeleton className="w-20 h-6 bg-gray-100 border" />
            <Skeleton className="w-20 h-6 bg-gray-100 border" />
            <Skeleton className="w-20 h-6 bg-gray-100 border" />
          </Skeleton>
          <Skeleton className="flex items-center justify-between w-full h-8 px-2 bg-white">
            <Skeleton className="w-20 h-6 bg-gray-100 border" />
            <Skeleton className="w-20 h-6 bg-gray-100 border" />
            <Skeleton className="w-20 h-6 bg-gray-100 border" />
            <Skeleton className="w-20 h-6 bg-gray-100 border" />
            <Skeleton className="w-20 h-6 bg-gray-100 border" />
          </Skeleton>
          <Skeleton className="flex items-center justify-between w-full h-8 px-2 bg-white">
            <Skeleton className="w-20 h-6 bg-gray-100 border" />
            <Skeleton className="w-20 h-6 bg-gray-100 border" />
            <Skeleton className="w-20 h-6 bg-gray-100 border" />
            <Skeleton className="w-20 h-6 bg-gray-100 border" />
            <Skeleton className="w-20 h-6 bg-gray-100 border" />
          </Skeleton>
          <Skeleton className="flex items-center justify-between w-full h-8 px-2 bg-white">
            <Skeleton className="w-20 h-6 bg-gray-100 border" />
            <Skeleton className="w-20 h-6 bg-gray-100 border" />
            <Skeleton className="w-20 h-6 bg-gray-100 border" />
            <Skeleton className="w-20 h-6 bg-gray-100 border" />
            <Skeleton className="w-20 h-6 bg-gray-100 border" />
          </Skeleton>
        </div>
      </div>
    </div>
  )
}

export default TableRowSkeleton
