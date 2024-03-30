import { Skeleton } from "@/components/ui/skeleton"
import React from 'react'

const MeetingSkeleton = () => {
  return (
    <div>
      <Skeleton className="flex flex-col w-full p-4  bg-white ">
          <Skeleton className="flex items-center justify-center p-2 mb-2 bg-white gap-x-4 ">
            <Skeleton className="w-[50px] bg-gray-200 h-10"/>
            <Skeleton className="w-[250px] h-10 bg-gray-200"/>
            <Skeleton className="w-10 h-10 ml-auto bg-gray-200"/>
            <Skeleton/>
          </Skeleton>
          <Skeleton className="flex items-center justify-center p-2 mb-2 bg-white gap-x-4">
            <Skeleton className="w-[50px] bg-gray-200 h-10"/>
            <Skeleton className="w-[250px] h-10 bg-gray-200"/>
            <Skeleton className="w-10 h-10 ml-auto bg-gray-200"/>
            <Skeleton/>
          </Skeleton>
          <Skeleton className="flex items-center justify-center p-2 mb-2 bg-white gap-x-4">
            <Skeleton className="w-[50px] bg-gray-200 h-10"/>
            <Skeleton className="w-[250px] h-10 bg-gray-200"/>
            <Skeleton className="w-10 h-10 ml-auto bg-gray-200"/>
            <Skeleton/>
          </Skeleton>
          <Skeleton className="flex items-center justify-center p-2 mb-2 bg-white gap-x-4">
            <Skeleton className="w-[50px] bg-gray-200 h-10"/>
            <Skeleton className="w-[250px] h-10 bg-gray-200"/>
            <Skeleton className="w-10 h-10 ml-auto bg-gray-200"/>
            <Skeleton/>
          </Skeleton>
          <Skeleton className="flex items-center justify-center p-2 mb-2 bg-white gap-x-4">
            <Skeleton className="w-[50px] bg-gray-200 h-10"/>
            <Skeleton className="w-[250px] h-10 bg-gray-200"/>
            <Skeleton className="w-10 h-10 ml-auto bg-gray-200"/>
            <Skeleton/>
          </Skeleton>
          <Skeleton className="flex items-center justify-center p-2 mb-2 bg-white gap-x-4">
            <Skeleton className="w-[50px] bg-gray-200 h-10"/>
            <Skeleton className="w-[250px] h-10 bg-gray-200"/>
            <Skeleton className="w-10 h-10 ml-auto bg-gray-200"/>
            <Skeleton/>
          </Skeleton>
       
      </Skeleton>
    </div>
  )
}

export default MeetingSkeleton
