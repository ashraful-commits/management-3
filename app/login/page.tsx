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

  if (session) redirect("/dashboard")
  return (
    <>
      <div className="container min-w-[1400px] relative flex-col items-center justify-center hidden h-screen md:grid lg:max-w-none lg:grid-cols-2 lg:px-0">
        <Link
          href="/signup"
          className={cn(
            buttonVariants({ variant: "outline" }),
            "absolute right-4 top-4 hover:bg-primary hover:text-white md:right-8 md:top-8"
          )}
        >
          Signup
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
            <div className="flex flex-col space-y-2 text-center">
              <h1 className="text-2xl font-semibold tracking-tight">
                Login to your Account
              </h1>
              <p className="text-sm text-muted-foreground">
                Enter your email and password below to login
              </p>
            </div>
            <Loginform />
          </div>
        </div>
      </div>
    </>
  )
}
