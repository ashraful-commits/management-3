import Image from "next/image"
import Link from "next/link"
import { redirect } from "next/navigation"
import { getServerSession } from "next-auth"

import { cn } from "@/lib/utils"
import { Button, buttonVariants } from "@/components/ui/button"
import { Loginform } from "@/components/Loginform"

import { authOptions } from "./../api/auth/[...nextauth]/route"

export default async function Login() {
  const session = await getServerSession(authOptions)

  if (session) redirect("/")
  return (
    <>
      <div className=" min-w-full relative min-h-[88vh] flex justify-center items-center  lg:px-0">
        <div className="flex flex-col items-center justify-center w-full ">
          <div className="relative z-20 my-10 mt-auto">
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
          <div className="mx-auto flex w-full flex-col items-center justify-center space-y-6 sm:w-[350px]">
            <div className="flex flex-col space-y-2 text-center">
              <h1 className="text-[29px] font-semibold tracking-tight">
                Connect to your Account
              </h1>
              <p className="text-sm text-muted-foreground">
                Enter your email and password below to connect
              </p>
            </div>
            <Loginform />
            <div className="flex items-center gap-x-2">
              <p className="text-sm text-muted-foreground">
                Don't have an account?
              </p>
              <Link
                href="/signup"
                className={cn("hover:text-primary md:right-8 md:top-8")}
              >
                Signup
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
