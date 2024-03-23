import React from "react";
import { Skeleton } from "@/components/ui/skeleton"
const MangeUser = () => {
  return <div>
    <div>
        <Skeleton className="h-10 bg-white rounded-md w-52"/>
        <div className="flex items-center justify-between mt-5 gap-x-5">
        <Skeleton className="w-full h-10 bg-white rounded-md"/>
        <Skeleton className="h-10 bg-white rounded-md w-72"/>
        </div>
        <div className="w-full mt-10">
       <Skeleton className="flex items-center justify-between w-full h-10 rounded-md bg-gray-150 gap-x-5">
       <Skeleton className="w-full h-5 bg-white rounded-md"/>
       <Skeleton className="w-full h-5 bg-white rounded-md"/>
       <Skeleton className="w-full h-5 bg-white rounded-md"/>
       <Skeleton className="w-full h-5 bg-white rounded-md"/>
       <Skeleton className="w-full h-5 bg-white rounded-md"/>
       </Skeleton>
        </div>
        <div className="flex flex-col mt-5 gap-y-2">
        <Skeleton className="w-full h-10 bg-white rounded-md"/> 
        <Skeleton className="w-full h-10 bg-white rounded-md"/> 
        <Skeleton className="w-full h-10 bg-white rounded-md"/> 
        <Skeleton className="w-full h-10 bg-white rounded-md"/> 
        <Skeleton className="w-full h-10 bg-white rounded-md"/> 
        <Skeleton className="w-full h-10 bg-white rounded-md"/> 
        <Skeleton className="w-full h-10 bg-white rounded-md"/> 
        <Skeleton className="w-full h-10 bg-white rounded-md"/> 
        <Skeleton className="w-full h-10 bg-white rounded-md"/> 
        </div>
        <div className="flex items-center justify-end mt-5 gap-x-5">
        <Skeleton className="w-32 h-10 bg-white rounded-md"/> 
        <Skeleton className="w-32 h-10 bg-white rounded-md"/> 
        </div>
    </div>
  </div>;
};

export default MangeUser;
