
import PlantCard from "./PlantCard"
import { getPlantById } from "@/actions/plant.actios"
export default async function PlantImage({params}:{params:{slug:string}}){
    const {slug}= params;
    const [id]=slug.split("---");
    const plant=await getPlantById(id)
    return(
        <div className="flex w-full justify-center items-center py-4 my-4">
            <PlantCard plant={plant}/>
        </div>
        
    )}