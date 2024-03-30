"use client"

import React, { useEffect, useState } from "react"
import { useSession } from "next-auth/react"
import { Mail,Lock ,RotateCcw  } from 'lucide-react';


import { getUser } from "@/lib/getUser"
import {
  sendAdminNotification,
  sendUserNotification,
} from "@/lib/notification/sendNotification"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Separator } from "@/components/ui/separator"
import { Skeleton } from "@/components/ui/skeleton"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { useToast } from "@/components/ui/use-toast"
import { Icons } from "@/components/icons"
import ProfileUpload from "@/components/settings/ProfileUpload"

export default function Settings() {
  const { data: session, update } = useSession()
  const id = session?.user?.id

  const [avatar, setAvatar] = useState()
  const [name, setName] = useState("")
  const [isLoading, setLoading] = useState(false)
  const { toast } = useToast()
  useEffect(() => {
    getUser(id)
      .then((userData) => {
        setAvatar(userData.avatar)
      })
      .catch((error) => {
        console.error("Error in component:", error)
      })
  }, [session, id])
  //=========================reset password
  const handleResetPassword = () => {
    if (session) {
      sendAdminNotification("", session?.user?.name, session?.user?.email)
      toast({
        variant: "default",
        title: "Check your Email!",
      })
    }
  }
  const handleUpdate = async () => {
    await update({
      ...session,
      user: {
        ...session?.user,
        name: name,
      },
    })
  }
  //=========================update full name.
  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault()
    if (!name) {
      toast({
        variant: "destructive",
        title: "Name field is required!",
      })
    } else {
      setLoading(true)

      try {
        const res = await fetch(`/api/user/?id=${id}`, {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            name,
          }),
        })

        if (res.ok) {
          await handleUpdate()
          setLoading(false)
          window.location.reload()
          toast({
            variant: "default",
            title: "Your Name Updated!",
          })
        } else {
          console.log("submission failed!")
          toast({
            title: "submission failed!",
          })
          setLoading(false)
        }
      } catch (error) {
        console.log("Error during  submit:", error)
        toast({
          variant: "destructive",
          title: `Error during submit:", ${error}`,
        })
        setLoading(false)
      }
    }
  }
  return (
    <>
      <div className="container-fluid min-w-[1536px] mt-5">
        <div className="p-10 bg-white border w-full rounded-sm min-h-[750px]">
          <h1 className="text-3xl font-semibold">Profile Settings</h1>
          <p>Manage your account. </p>
          <Separator className="my-5" />
          <Tabs defaultValue="profile" className="flex flex-col items-center justify-center ">
            <TabsList className="flex items-start w-[420px] border bg-green-100 rounded-md justify-self-start  mr-auto">
              <TabsTrigger className=" w-[200px] flex items-center justify-center h-10" value="profile">
                Profile
              </TabsTrigger>
              <TabsTrigger className="w-[200px] flex items-center justify-center h-10" value="reset password">
                Reset password
              </TabsTrigger>
            </TabsList>
            <TabsContent className="flex items-center justify-center w-full h-full max-w-xl px-10 mt-5 bg-green-100 rounded-md" value="profile">
              <div className="flex-1 w-full max-w-xl p-4 mt-10 border rounded-lg">
                <div className="space-y-2">
                  <p className="text-xl text-muted-foreground">
                    Change your profile settings
                  </p>
                  <hr />
                  <div className="flex py-5">
                    {!avatar && (
                      <Skeleton className="size-[100px] rounded-full" />
                    )}
                    {avatar && (
                      <img
                        className="w-[100px] h-[100px] rounded-full"
                        src={avatar}
                        alt="profile image"
                      />
                    )}
                    <ProfileUpload setAvatar={setAvatar} />
                  </div>
                  <hr className="pt-5" />
                  <form onSubmit={handleSubmit}>
                    <div className="mt-5  w-full  items-center gap-1.5">
                      <Label htmlFor="email" className="inline-block w-full py-2 my-2 ">Full Name</Label>
                      <Input
                        onChange={(e) => setName(e.target.value)}
                        type="text"
                        className="w-full"
                        placeholder="Change your full Name"
                      />
                    </div>
                    <Button  className="my-3 " disabled={isLoading||name==""}>
                      {isLoading && (
                        <Icons.spinner className="mr-2 size-4 animate-spin" />
                      )}
                      update
                    </Button>
                  </form>
                </div>
              </div>
            </TabsContent>
            <TabsContent className="w-full max-w-xl px-6 py-10 mt-5 bg-green-100 rounded-md " value="reset password">
              <div className="flex flex-col items-center justify-center w-full max-w-xl rounded-md ">
                <label htmlFor="" className="inline-block py-4 mx-5 mb-5 text-md text-primary">
                 Send an email to reset your password.
                </label>
                <div className="flex items-center justify-center border border-orange-400 rounded-full shadow-sm shadow-destructive-background w-44 h-44 ">
                <Lock className="text-orange-700 size-20 "/>
                </div>
                <Button
                  onClick={handleResetPassword}
                 
                  variant="destructive"
                  className="w-[180px] mt-5 font-semibold capitalize flex gap-x-2 hover:bg-orange-500 transition-all duration-500 ease-in-out"
                > 
                <Mail className=" size-4"/>
                  Send reset mail
                </Button>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </>
  )
}
