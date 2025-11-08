import { PenLine } from "lucide-react"
import { updatePlant } from "@/actions/plant.actios"
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
import ImageUpload from "./imageupload"
import toast from "react-hot-toast"
type plant=NonNullable<Awaited<ReturnType<typeof getPlantById>>>
interface EditPropsinterface{
    plants:plant
}
export function EditDialog({plants}:EditPropsinterface) {
    const [fromData ,setformData]=useState({
        name:plants.name,
        description:(plants.description||""),
        stock:plants.stock,
        price:plants.price,
        category:plants.category,
        userId:plants.userId,
        imageUrl:plants.imageUrl||"",

    });
    const handleChange=(field:string,value:string|number)=>{
        setformData({...fromData,[field]:value});
    }
    const handleSubmit=async (e:React.FormEvent<HTMLFormElement>)=>{
        e.preventDefault();
       try{
      
        const up=await updatePlant(fromData,plants.id);
        toast.success("updated successfully");
       }
       catch{
        console.log("unnable to create ");
      toast.error("Updation failed");}
  
    }

  return (
    <AlertDialog>
      <AlertDialogTrigger asChild>
        <Button variant="default" 
        className="flex gap-2 items-center font-bold ml-auto">
            <div className="flex items-center space-x-1">
                <PenLine className="w-4 h-4"/>
                
            </div>
            </Button>
      </AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>Update Plant</AlertDialogTitle>
          <AlertDialogDescription>
        Fill out this form to make changes
          </AlertDialogDescription>
        </AlertDialogHeader>
        <form onSubmit={handleSubmit}>
            <div className="grid grid-cols-2 gap-4">
                <div>
                    <Label htmlFor="name">Name</Label>
                    <Input id="name"
                    type="text" 
                    placeholder="Enter Name" 
                    value={fromData.name}
                    onChange={(e)=> handleChange("name",e.target.value)}/>
                </div>
                <div>
                    <Label htmlFor="category">Category</Label>
                    <Combobox value={fromData.category} onChange={(val)=>handleChange("category",val)}></Combobox>
                </div>
            </div>
            <Label htmlFor="description">Description</Label>
            <Textarea id="description" placeholder="Type your description" rows={5} value={fromData.description} onChange={(e)=>{handleChange("description",e.target.value)}}></Textarea>
            <div className="grid grid-cols-2 gap-4">
                <div>
                    <Label htmlFor="stock">Stock</Label>
                    <Input id="stock" type="number" placeholder="Enter Stock Quantity" value={fromData.stock} onChange={(e)=>{handleChange("stock",e.target.value)}}></Input>
                </div>
                <div>
                    <Label htmlFor="price">Price</Label>
                    <Input id="price" type="number" placeholder="Enter Price" value={fromData.price} onChange={(e)=>{handleChange("price",e.target.value)}}></Input>
                </div>
            </div>
           <div className="py-5">
          <ImageUpload
            endpoint="postImage"
            value={fromData.imageUrl}
            onChange={(url:string) => {
              handleChange("imageUrl", url);
            }}
          />
          </div>
             <AlertDialogFooter>
          <AlertDialogCancel type="button">Cancel</AlertDialogCancel>
          <AlertDialogAction type="submit">Submit</AlertDialogAction>
        </AlertDialogFooter>
        </form>
       
      </AlertDialogContent>
    </AlertDialog>
  )
}