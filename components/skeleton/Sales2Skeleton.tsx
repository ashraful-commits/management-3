import React from "react";
import { Skeleton } from "@/components/ui/skeleton"
const Sales2Skeleton = () => {
  return <div className="w-full">
    <Skeleton className="flex items-center justify-around w-full h-32 bg-white shadow-sm">
        <Skeleton className="h-20 bg-gray-100 w-52"/>
        <Skeleton className="h-20 bg-gray-100 w-52"/>
        <Skeleton className="h-20 bg-gray-100 w-52"/>
        <Skeleton className="h-20 bg-gray-100 w-52"/>
    </Skeleton>
    <div className="flex items-center justify-between mt-5">
        <div className="flex gap-x-10">
        <Skeleton className="w-32 h-10 bg-white shadow-sm"/>
        <Skeleton className="w-32 h-10 bg-white shadow-sm"/>
        <Skeleton className="w-32 h-10 bg-white shadow-sm"/>
        </div>
        <Skeleton className="w-32 h-10 bg-white shadow-sm"/>
    </div>
    <div className="flex items-center justify-between mt-5">
        <Skeleton className="w-32 h-5 bg-white shadow-sm"/>
        <Skeleton className="w-32 h-5 bg-white shadow-sm"/>
        <Skeleton className="w-32 h-5 bg-white shadow-sm"/>
        <Skeleton className="w-32 h-5 bg-white shadow-sm"/>
        <Skeleton className="w-32 h-5 bg-white shadow-sm"/>
    </div>
    <div className="flex flex-col items-center justify-between mt-5 gap-y-2">
        <Skeleton className="w-full h-10 bg-white shadow-sm"/>
        <Skeleton className="w-full h-10 bg-white shadow-sm"/>
        <Skeleton className="w-full h-10 bg-white shadow-sm"/>
        <Skeleton className="w-full h-10 bg-white shadow-sm"/>
        <Skeleton className="w-full h-10 bg-white shadow-sm"/>
        <Skeleton className="w-full h-10 bg-white shadow-sm"/>
        <Skeleton className="w-full h-10 bg-white shadow-sm"/>
        <Skeleton className="w-full h-10 bg-white shadow-sm"/>
        <Skeleton className="w-full h-10 bg-white shadow-sm"/>
    </div>
    <div className="flex items-center justify-end w-full mt-5 gap-x-5">    
        <Skeleton className="w-32 h-10 bg-white shadow-sm"/>
        <Skeleton className="w-32 h-10 bg-white shadow-sm"/>
    </div>
  </div>;
};

export default Sales2Skeleton;
