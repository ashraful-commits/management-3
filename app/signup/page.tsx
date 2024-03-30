import { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { redirect } from "next/navigation"
import { getServerSession } from "next-auth"

import { cn } from "@/lib/utils"
import { Button, buttonVariants } from "@/components/ui/button"
import { Signinform } from "@/components/Signinform"

import { authOptions } from "../api/auth/[...nextauth]/route"

export default async function SignupPage() {
  const session = await getServerSession(authOptions)

  if (session) redirect("/")

  return (
    <>
      <div className="relative flex items-center justify-center min-h-[88vh] min-w-full ">
        <div className="flex items-center justify-center ">
          <div className="mx-auto flex w-full flex-col justify-center space-y-6 sm:w-[350px]">
            <div className="relative z-20 mx-auto my-10">
              <Link href="/">
                <Image
                  className="w-20 h-20 rounded-full"
                  src="/logo.jpg"
                  alt="Logo"
                  width="150"
                  height="102"
                />
              </Link>
            </div>
            <div className="flex flex-col space-y-2 text-center">
              <h1 className="text-[25px] font-semibold tracking-tight">
                Create an Business account
              </h1>
              <p className="text-sm text-muted-foreground">
                Enter your details below to create your Business account
              </p>
            </div>
            <Signinform />
            <div className="flex items-center justify-center gap-x-2">
              Already have an account?
              <Link
                href="/login"
                className={cn(" hover:text-white md:right-8 md:top-8")}
              >
                Login
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
