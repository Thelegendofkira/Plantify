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
    return await prisma.plants.findUnique({
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
        throw error;}
    }
