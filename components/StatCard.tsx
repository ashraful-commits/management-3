import React from "react"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { FolderTree ,Users,DollarSign  ,Percent    } from 'lucide-react';
export default function StatCard(props) {
  const title = props.title
  const value = props.value
  const prefix = props.prefix
  const suffix = props.suffix
  return (
    <div>
      <Card className={`transition  rounded-lg border bg-green-100 grid grid-flow-col items-center min-h-[150px]  justify-between`}>
        <CardHeader className="flex items-center justify-center h-full">
          <div className="flex flex-col items-start justify-start gap-y-2">
           <div className="p-1 border-2 border-orange-800 rounded-md">
           {title=="Projects" && <FolderTree className='text-orange-800' /> }
            {title=="Sales Rep" && <Users  className='text-orange-800' />}
            {title=="Clients" && <Users  className='text-orange-800' />}
            {title=="Earnings" && <DollarSign  className='text-orange-800' />}
            {title=="Commission Earnings" && <Percent   className='text-orange-800' />}
           </div>
           
            <CardTitle className=" text-md">{title}</CardTitle>
          </div>
        </CardHeader>
        <CardContent className={`flex pt-5 border shadow-inner items-center rounded-tl-[50px] rounded-bl-[50px] min-w-[200px] justify-center min-h-20  text-white ${title=="Projects" && "bg-fuchsia-500" ||title=="Clients" && "bg-blue-500" ||title=="Earnings" && "bg-cyan-500" ||title=="Sales Rep" && "bg-red-500" || title=="Commission Earnings" &&"bg-purple-500"} 
          border-r-0`}>
          <div className="flex items-center justify-center w-full h-full ">
            <h1 className="px-2 m-auto text-4xl font-semibold">
              {prefix}
              {value}
              {suffix}
            </h1>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
