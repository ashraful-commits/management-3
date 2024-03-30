import React from "react"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Skeleton } from "@/components/ui/skeleton"

export default function CardSkeleton() {
  return (
    <Skeleton className="bg-gray-100 min-h-[150px] w-full justify-between p-3 flex items-center">
      <Skeleton className="w-32 h-20 bg-gray-50"/>
      <Skeleton className="w-32 h-20 bg-gray-50"/>
    </Skeleton>
  )
}
