import { useState } from "react"
import { Info, X } from "lucide-react"

import { Alert, AlertTitle } from "@/components/ui/alert"

export default function AlertBox(props) {
  const [showAlert, setshowAlert] = useState(true)
  const pendingProject = props.projects
  return (
    <>
      {showAlert && pendingProject && (
        <Alert className="w-full mt-2 mb-4 bg-orange-400 shadow-md">
          <Info className="color-black size-4" />
          <AlertTitle className="flex items-center justify-between">
            You have {pendingProject.length} project pending for approval...
            <div
              className="cursor-pointer"
              onClick={() => {
                setshowAlert(false)
              }}
            >
              <X className="size-4" />
            </div>
          </AlertTitle>
        </Alert>
      )}
    </>
  )
}
