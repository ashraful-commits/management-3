"use client"

import { useEffect, useState } from "react"
import Link from "next/link"
import { usePathname, useRouter } from "next/navigation"
import { signOut, useSession } from "next-auth/react"

import { getUser } from "@/lib/getUser"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Skeleton } from "@/components/ui/skeleton"

export default function UserNav() {
  const router = useRouter()
  const { data: session } = useSession()
  const role = session?.user?.role
  const pathname = usePathname()
  const [avatar, setAvatar] = useState()
  console.log(pathname)
  useEffect(() => {
    if (session) {
      const id = session?.user?.id
      getUser(id)
        .then((userData) => {
          setAvatar(userData.avatar)
        })
        .catch((error) => {
          console.error("Error in component:", error)
        })
    }
  }, [session])

  if (!session)
    return (
      <div className="flex items-center ml-4 space-x-1">
        <Skeleton className="size-[40px] rounded-full border bg-[#fff]" />
        <div className="ml-[8px] space-y-2">
          <Skeleton className="h-4 w-[175px] border bg-[#fff]" />
          <Skeleton className="h-3 w-[175px] border bg-[#fff]" />
        </div>
      </div>
    )

  return (
    <>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button
            variant="ghost"
            className="p-0 ml-5 text-left hover:bg-transparent focus-visible:ring-0"
          >
            <Avatar className="relative size-[40px] rounded-full border border-primary p-[2px]">
              <AvatarImage
                className="rounded-full"
                src={avatar}
                alt="avatar icon"
              />
              <AvatarFallback className="bg-white">JF</AvatarFallback>
            </Avatar>
            <div className="flex flex-col ml-2 space-y-1">
              <p className=" text-[13px] font-bold leading-none">
                {session?.user?.name}
              </p>
              <p className="text-[13px] leading-none text-muted-foreground">
                {session?.user?.email}
              </p>
            </div>
            <span className="ml-2">
              <svg
                width="10"
                height="9"
                viewBox="0 0 10 9"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M4.56699 8.25C4.75944 8.58333 5.24056 8.58333 5.43301 8.25L9.76314 0.75C9.95559 0.416666 9.71503 0 9.33013 0H0.669873C0.284973 0 0.0444103 0.416667 0.236861 0.75L4.56699 8.25Z"
                  fill="#CCCACA"
                />
              </svg>
            </span>
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent
          className="w-[180px] z-[99999999]"
          align="end"
          forceMount
        >
          <DropdownMenuGroup>
            <Link href="/settings">
              <DropdownMenuItem
                className={`cursor-pointer  ${
                  pathname === "/settings"
                    ? "border-l-4 border-l-primary rounded-none bg-gray-100"
                    : ""
                }`}
              >
                Settings
              </DropdownMenuItem>
            </Link>
            {role && role == "SuperAdmin" && (
              <>
                <Link href="/settings/manage-user">
                  <DropdownMenuItem
                    className={`cursor-pointer ${
                      pathname === "/settings/manage-user"
                        ? "border-l-4 border-l-primary rounded-none bg-gray-100"
                        : ""
                    }`}
                  >
                    Manage User
                  </DropdownMenuItem>
                </Link>
                <Link href="/settings/manage-clients">
                  <DropdownMenuItem
                    className={`cursor-pointer ${
                      pathname === "/settings/manage-clients"
                        ? "border-l-4 border-l-primary rounded-none bg-gray-100"
                        : ""
                    }`}
                  >
                    Manage Clients
                  </DropdownMenuItem>
                </Link>
                <Link href="/settings/manage-contracts">
                  <DropdownMenuItem
                    className={`cursor-pointer ${
                      pathname === "/settings/manage-contracts"
                        ? "border-l-4 border-l-primary rounded-none bg-gray-100"
                        : ""
                    }`}
                  >
                    Manage Contracts
                  </DropdownMenuItem>
                </Link>
                <Link
                  href="/settings/manage-companies"
                  className={"cursor-pointer"}
                >
                  <DropdownMenuItem
                    className={`cursor-pointer ${
                      pathname === "/settings/manage-companies"
                        ? "border-l-4 border-l-primary rounded-none bg-gray-100"
                        : ""
                    }`}
                  >
                    Manage Companies
                  </DropdownMenuItem>
                </Link>
                <Link
                  href="/settings/manage-meetings"
                  className={"cursor-pointer"}
                >
                  <DropdownMenuItem
                    className={`cursor-pointer ${
                      pathname === "/settings/manage-meetings"
                        ? "border-l-4 border-l-primary rounded-none bg-gray-100"
                        : ""
                    }`}
                  >
                    Manage Meetings
                  </DropdownMenuItem>
                </Link>
              </>
            )}
          </DropdownMenuGroup>
          <DropdownMenuSeparator />
          <DropdownMenuItem
            className={"cursor-pointer"}
            onClick={() => {
              signOut({ redirect: false }).then(() => {
                router.push("/") // Redirect to the dashboard page after signing out
              })
            }}
          >
            Log out
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </>
  )
}
