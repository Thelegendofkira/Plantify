"use client"
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
import { Button } from "@/components/ui/button"
import { Sprout } from "lucide-react"
import { Label } from "@/components/ui/label"
import {Input} from "@/components/ui/input"
import { useState } from "react"
import { Textarea } from "./textarea"
import { Combobox } from "./combobox"
import { createPlant, getPlantById } from "@/actions/plant.actios"
import { Trash2 } from "lucide-react"
import toast from "react-hot-toast"
import { deleteplant } from "@/actions/plant.actios"
type planttype=NonNullable<Awaited<ReturnType<typeof getPlantById>>>
interface DeletePropsInteface{
    plants:planttype
}
export function DeleteDialog({plants}:DeletePropsInteface) {
    
   
    const handleSubmit=async ()=>{
      
       try{
        const cp=await deleteplant(plants.id);
        if(cp.success==true){
        toast.success("Deleted Plant");
   }
        else {toast.error("Unnable to delete")}
       }
       catch{ toast.error("Deleting failed");
        }
   
    }

  return (
    <AlertDialog>
      <AlertDialogTrigger asChild>
        <Button variant="destructive" 
        className="flex gap-2 items-center font-bold ml-auto">
            <div className="flex items-center space-x-1">
                <Trash2 className="w-4 h-4"/>
            </div>
            </Button>
      </AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>Delete</AlertDialogTitle>
          <AlertDialogDescription>
            Are You sure about deleting it
          </AlertDialogDescription>
        </AlertDialogHeader>
        {/* <form onSubmit={handleSubmit}> */}
             <AlertDialogFooter>
          <AlertDialogCancel type="button">Cancel</AlertDialogCancel>
          <AlertDialogAction type="submit" onClick={()=>{handleSubmit()}}>Submit</AlertDialogAction>
        </AlertDialogFooter>
      {/* </form> */}
       
      </AlertDialogContent>
    </AlertDialog>
  )
}
