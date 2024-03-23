import React from "react"

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

export default function Clientthumb() {
  return (
    <div className="flex items-center">
      <div className="relative inline-block">
        <svg
          width="32"
          height="26"
          viewBox="0 0 32 26"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M17.3825 4.33948L14.3154 1.00804C13.7253 0.368794 12.8894 0 12.0165 0H3.12246C1.39527 0 0 1.40142 0 3.12246V22.8775C0 24.5986 1.39527 26 3.12246 26H28.348C30.069 26 31.4704 24.6047 31.4704 22.8775V7.46194C31.4704 5.7409 30.0752 4.33948 28.348 4.33948H17.3825Z"
            fill="#7495B5"
          />
        </svg>
        <Avatar className="absolute bottom-[-6px] right-[-10px] size-6 border-2 border-white">
          <AvatarImage src="https://github.com/shadcn.png" />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
      </div>
      <h4 className="font-sm ml-6 font-semibold text-[#2c5c88]">
        Christan Bale
      </h4>
    </div>
  )
}
