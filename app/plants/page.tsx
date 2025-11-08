import { stackServerApp } from "@/stack/server";
import { SignIn } from "@stackframe/stack";
import { InventoryTable } from "@/components/ui/InventroyTable";
import { getPlants } from "@/actions/plant.actios";
export default async function Plants(){
const user=await stackServerApp.getUser();
const plants=await getPlants();
return(
    <>
    {user!=null?(
<div className="mt-8 max-w-7xl mx-auto px-4  gap-6">
   
        <InventoryTable plants={plants}></InventoryTable>
    </div>
    ):(
        <div className="flex justify-center items-center">
            <SignIn></SignIn>
        </div>
    )}
    </>
)
}