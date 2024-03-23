import { Skeleton } from "@/components/ui/skeleton"
import React from 'react'

const MeetingSkeleton = () => {
  return (
    <div>
      <Skeleton className="flex flex-col w-full min-h-screen p-4 mt-4 bg-white ">
          <Skeleton className="flex items-center justify-center p-5 mb-2 bg-white gap-x-4 ">
            <Skeleton className="w-[350px] bg-gray-200 h-[200px]"/>
            <Skeleton className="w-[350px] h-14 bg-gray-200"/>
            <Skeleton className="w-20 h-20 ml-auto bg-gray-200"/>
            <Skeleton/>
          </Skeleton>
          <Skeleton className="flex items-center justify-center p-5 mb-2 bg-white gap-x-4">
            <Skeleton className="w-[350px] bg-gray-200 h-[200px]"/>
            <Skeleton className="w-[350px] h-14 bg-gray-200"/>
            <Skeleton className="w-20 h-20 ml-auto bg-gray-200"/>
            <Skeleton/>
          </Skeleton>
          <Skeleton className="flex items-center justify-center p-5 mb-2 bg-white gap-x-4">
            <Skeleton className="w-[350px] bg-gray-200 h-[200px]"/>
            <Skeleton className="w-[350px] h-14 bg-gray-200"/>
            <Skeleton className="w-20 h-20 ml-auto bg-gray-200"/>
            <Skeleton/>
          </Skeleton>
          <Skeleton className="flex items-center justify-center p-5 mb-2 bg-white gap-x-4">
            <Skeleton className="w-[350px] bg-gray-200 h-[200px]"/>
            <Skeleton className="w-[350px] h-14 bg-gray-200"/>
            <Skeleton className="w-20 h-20 ml-auto bg-gray-200"/>
            <Skeleton/>
          </Skeleton>
          <Skeleton className="flex items-center justify-center p-5 mb-2 bg-white gap-x-4">
            <Skeleton className="w-[350px] bg-gray-200 h-[200px]"/>
            <Skeleton className="w-[350px] h-14 bg-gray-200"/>
            <Skeleton className="w-20 h-20 ml-auto bg-gray-200"/>
            <Skeleton/>
          </Skeleton>
          <Skeleton className="flex items-center justify-center p-5 mb-2 bg-white gap-x-4">
            <Skeleton className="w-[350px] bg-gray-200 h-[200px]"/>
            <Skeleton className="w-[350px] h-14 bg-gray-200"/>
            <Skeleton className="w-20 h-20 ml-auto bg-gray-200"/>
            <Skeleton/>
          </Skeleton>
      </Skeleton>
    </div>
  )
}

export default MeetingSkeleton
