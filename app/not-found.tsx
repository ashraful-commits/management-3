import React from "react"
import Link from "next/link"

import { Button } from "@/components/ui/button"

export default function notFound() {
  return (
    <div className="container flex items-center justify-center">
      <div className="flex flex-col items-center justify-center">
        <h1 className="mt-20 font-semibold text-left text-7xl">404!</h1>
        <h2 className="mt-5 mb-8 text-2xl">
          Oops! This Page Could Not Be Found.
        </h2>
        <Button>
          <Link href="/dashboard">Back to Homepage</Link>
        </Button>
      </div>
    </div>
  )
}
