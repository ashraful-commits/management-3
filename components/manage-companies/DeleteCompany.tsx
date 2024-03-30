"use client"

import React, { useState } from "react"
import { Trash2 } from "lucide-react"

import { deleteCompany } from "@/lib/company/company"
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog"
import { Icons } from "@/components/icons"

export default function DeleteCompany(props) {
  const id = props.id
  const [Loading, setLoading] = useState(false)

  const deleteFunction = () => {
    setLoading(true)
    deleteCompany(id).then((res) => {
      setLoading(false)
      window.location.reload()
    })
  }

  return (
    <div className="inline-block text-red-600 rounded-md cursor-pointer">
      <AlertDialog>
        <AlertDialogTrigger>
          <Trash2 />
        </AlertDialogTrigger>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
            <AlertDialogDescription>
              This action cannot be undone. This will permanently delete your
              account and remove your data from our servers.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel>Cancel</AlertDialogCancel>
            <AlertDialogAction onClick={deleteFunction}>
              {Loading && (
                <Icons.spinner className="mr-2 size-4 animate-spin" />
              )}
              Continue
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </div>
  )
}
