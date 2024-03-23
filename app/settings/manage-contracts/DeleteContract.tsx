"use client"
import React,{useState} from "react";
import { Pencil,Trash ,Trash2} from 'lucide-react';
import { toast } from "@/components/ui/use-toast"
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip"
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
  
const DeleteContract = (props) => {
    const id =props?.id
    const contract =props?.contract
    const allUser =props?.allUser
    const [Loading, setLoading] = useState(false)
  const handleDelete = async ( ) => {
    setLoading(true);
    try {
      const res = await fetch(`/api/user/?id=${id}`);
      const userData = await res.json();

      const updatedContracts = userData?.user?.contracts.filter((item) => item._id !== contract._id);
      const updatedUserData = {
        ...userData,
        contracts: updatedContracts
      };
      const updateRes = await fetch(`/api/user/?id=${id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(updatedUserData),
      });
  
      if (updateRes.status === 200 || updateRes.status === 201) {
        setLoading(false);
        toast({
          variant: "default",
          title: "Contract deleted!",
        });
        window.location.reload();
      } else {
        console.log("Delete failed!");
        toast({
          title: `Delete failed! Status: ${updateRes.status}`,
        });
        setLoading(false);
      }
    } catch (error) {
      console.log("Error during submit:", error);
      toast({
        variant: "destructive",
        title: `Error during submit: ${error.message}`,
      });
      setLoading(false);
    }
  };
  return <div>
    
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger asChild>
                  <AlertDialog>
                    <AlertDialogTrigger asChild>
                    <button className="p-1 text-white transition-all duration-200 ease-in-out bg-red-500 rounded-md hover:bg-black">
                <Trash size={15}/>
                </button>
                    </AlertDialogTrigger>
                    <AlertDialogContent className="bg-white">
                      <AlertDialogHeader>
                        <AlertDialogTitle>
                          Are you absolutely sure?
                        </AlertDialogTitle>
                        <AlertDialogDescription>
                          This action cannot be undone. This will permanently
                          delete the contact and remove data from our servers.
                        </AlertDialogDescription>
                      </AlertDialogHeader>
                      <AlertDialogFooter>
                        <AlertDialogCancel>Cancel</AlertDialogCancel>
                        <AlertDialogAction className="bg-red-500"  onClick={handleDelete}
                        >
                          Remove
                        </AlertDialogAction>
                      </AlertDialogFooter>
                    </AlertDialogContent>
                  </AlertDialog>
              </TooltipTrigger>
              <TooltipContent>
                <p>Delete</p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
    
  </div>;
};

export default DeleteContract;
