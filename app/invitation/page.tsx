"use client"

import Image from "next/image"
import Link from "next/link"
import { redirect } from "next/navigation"
import { getServerSession } from "next-auth"

import { cn } from "@/lib/utils"
import { buttonVariants } from "@/components/ui/button"
import SetPassword from "@/components/SetPassword"

import { authOptions } from "./../api/auth/[...nextauth]/route"

export const dynamic = "force-dynamic"

export default async function InvitationPage() {
  const session = await getServerSession(authOptions)
  if (session) redirect("/")

  return (
    <>
      <div className="relative flex-col items-center justify-center hidden h-screen container-fluid luid md:grid lg:max-w-none lg:grid-cols-2 lg:px-0">
        <Link
          href="/login"
          className={cn(
            buttonVariants({ variant: "outline" }),
            "absolute right-4 top-4 hover:bg-orange-500 hover:text-white md:right-8 md:top-8"
          )}
        >
          Login
        </Link>
        <div className="relative flex-col hidden h-full p-10 text-white bg-muted dark:border-r lg:flex">
          <div className="absolute inset-0 bg-white" />
          <div className="relative z-20 mt-auto">
            <Link href="/">
              <Image src="/logo.png" alt="Logo" width="150" height="102" />
            </Link>
          </div>
        </div>
        <div className="lg:p-8">
          <div className="mx-auto flex w-full flex-col justify-center space-y-6 sm:w-[350px]">
            <div className="flex flex-col space-y-1 text-center">
              <h1 className="mb-1 text-2xl font-semibold tracking-tight">
                Welcome to Client Management
              </h1>
              <h2 className="mt-1 text-xl">Set your password</h2>
            </div>
            <SetPassword />
          </div>
        </div>
      </div>
    </>
  )
}
