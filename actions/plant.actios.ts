"use server"
import { prisma } from "@/lib/prisma";
import { stackServerApp } from "@/stack/server";
import { Prisma } from "@prisma/client";
import { error } from "console";
import { revalidatePath } from "next/cache";

export async function getUserId () {
    const user=await stackServerApp.getUser();
    if(!user)return
    return user?.id
}
export  async function getPlants(searchTerm?:String) {
    const currentuserid=await getUserId()
    const whereclause:any={
        userId:currentuserid
    }
    if(searchTerm){
        whereclause.name={
            contains:searchTerm,
            mode:"insensitive"
        }
    }
    const userPlants=await prisma.plants.findMany({
        where:whereclause
    })

    return{success:true,userPlants};
}
export async function getPlantById(id:string){
    return  prisma.plants.findUnique({
        where:{
            id
        }})
    }
    export async function createPlant(fromdata:Prisma.PlantsCreateInput) {
        try{
            const currentUserId=await getUserId();
            if(!currentUserId)return;
            const newPlant=await prisma.plants.create({
                data:{
                    ...fromdata,
                    userId:currentUserId
                }
            })
            revalidatePath("/plants");
            return newPlant;
        }
        catch(err){
            console.log("Error creating plant");
        throw err;}
    }
    export async function deleteplant(id:string){
       try{
         await prisma.plants.delete({
            where:{
                id:id
            }
        })
         revalidatePath("/plants");
        return {success:true}
       }
       catch(err){
        return{success:false,errormsg:err}
       }
    }
    export async function updatePlant(fromdata: Prisma.PlantsUpdateInput,id:string) {
 

  try {
    await prisma.plants.update({
      where: { id },
      data:{
        ...fromdata
      },
    });
      revalidatePath("/plants");
    return { success: true };
  } catch (err) {
    console.log("updation failed", err);
    return { success: false, errormsg: err };
  }
}
