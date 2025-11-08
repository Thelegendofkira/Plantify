"use client"
import { useState } from "react";
import { Combobox } from "./combobox";
import { Input } from "./input";
import { Search } from "lucide-react";
import { Skeleton } from "./skeleton";
import { getPlants } from "@/actions/plant.actios";
import { CreateDialog } from "./CreateDialog";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { useRouter } from "next/navigation";
 type Plants = Awaited<ReturnType<typeof getPlants>>;

interface InventoryTableProps {
  plants: Plants;
}

export function InventoryTable({plants}:InventoryTableProps) {
  const router=useRouter()
    const [selectedCat,setSelectedCat]=useState("");
    const[searchTerm,setSearchTerm]=useState("");
   
  const filteredPlants = plants?.userPlants?.filter(
    (plant) =>
      plant.name.toLowerCase().includes(searchTerm.toLowerCase()) &&
      (selectedCat === "" || plant.category === selectedCat)
  );
 
  return (
    <div className="w-full space-y-4">
        <div className="flex items-center gap-2 px-4">
            <div className="flex relative items-center max-w--sm w-full">
<Input placeholder="Filtered Plants"  value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}></Input>
            <Search className="h-4 w-4 absolute right-3"></Search>
            </div>
            <Combobox value={selectedCat} onChange={(val)=>{setSelectedCat(val)}}></Combobox>
          <CreateDialog></CreateDialog>
        </div>
        <Table>
      <TableCaption>LIST OF ALL PLANTS.</TableCaption>
      <TableHeader>
        <TableRow>
          <TableHead >Plant ID</TableHead>
          <TableHead>Name</TableHead>
          <TableHead>Category</TableHead>
          <TableHead >Price</TableHead>
          <TableHead >Stock</TableHead>
          <TableHead className="text-right">Actions</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {filteredPlants.map((plant) => {
          const slugName=plant.name.toLowerCase().replace(/\s+/g,"-");
          const slug=`${plant.id}---${slugName}`;
          const plantUrl=`/plants/${slug}`
           return(
          <TableRow key={plant.id} onClick={()=>router.push(plantUrl)}>
            <TableCell>{plant.id}</TableCell>
            <TableCell className="font-medium">{plant.name}</TableCell>
            <TableCell>{plant.category}</TableCell>
            <TableCell>{plant.price}</TableCell>
            <TableCell >{plant.stock}</TableCell>
            <TableCell className="text-right">
                <div className="flex justify-end space-x-5" onClick={(e)=>{e.stopPropagation()}} >
                    <h1>Delete</h1>
                    <h1>Edit</h1>
                </div>
            </TableCell>
          </TableRow>
        )
        }
        
       )}
      </TableBody>
      
    </Table>
    </div>
    
  )
}
