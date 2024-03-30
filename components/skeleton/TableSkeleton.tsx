import React from 'react'
import { Skeleton } from '@/components/ui/skeleton';

const TableSkeletons = () => {
  return (
    <div className="flex flex-col w-full gap-y-2">
      <Skeleton className="w-full h-10 bg-gray-100 rounded-md"/>
      <Skeleton className="w-full h-10 bg-gray-100 rounded-md"/>
      <Skeleton className="w-full h-10 bg-gray-100 rounded-md"/>
      <Skeleton className="w-full h-10 bg-gray-100 rounded-md"/>
      <Skeleton className="w-full h-10 bg-gray-100 rounded-md"/>
      <Skeleton className="w-full h-10 bg-gray-100 rounded-md"/>
      <Skeleton className="w-full h-10 bg-gray-100 rounded-md"/>
      <Skeleton className="w-full h-10 bg-gray-100 rounded-md"/>
      <Skeleton className="w-full h-10 bg-gray-100 rounded-md"/>
    </div>
  )
}

export default TableSkeletons
