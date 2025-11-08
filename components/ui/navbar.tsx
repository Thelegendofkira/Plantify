import { Sprout,Home } from "lucide-react"
import { Button } from "./button"
import Link from "next/link"
import ModeToggle from "../modeltoggle"
import { UserButton } from '@stackframe/stack';
import { stackServerApp } from "@/stack/server";
import { LogIn } from "lucide-react";



export default async function NavBar(){
    const user= await stackServerApp.getUser();
    return(
<nav className="stick top-0 w-full border-b backdrop-blur bg-background/95">
<div className="max-w-7xl mx-auto px-4">
    <div className="flex  items-center h-16 justify-between">
             <div className="flex items-center"> 
            <Link href="\" className="text-xl text-mono tracking-wider text-bold    "> <div className="flex"><Sprout /> Plant Inventory</div></Link>
             </div>
    
         <div className="flex space-x-1 text-mono trackign-wider">  
            {/* plants butotn*/}
            <Button variant="ghost" >
            <Link href="/plants" className="flex items-center gap-1" >
                <Sprout className="w-4 h-4"/>
                <span className="hidden lg:inline">Plants</span>
            </Link>
            </Button>
            {/*home button*/}
            <Button variant="ghost" >
            <Link href="/" className="flex items-center gap-1" >
                <Home className="w-4 h-4"/>
                <span className="hidden lg:inline">Home</span>
            </Link>
            </Button>
            {user?.id==null?<Button variant="ghost" >
            <Link href="/handler/signin" className="flex items-center gap-1" >
               <LogIn className="w-4 h-4 mr-1" />
                <span className="hidden lg:inline">SignIn</span>
            </Link>
            </Button>:
               
             <Button variant="ghost" >
            <Link href="/handler/signout" className="flex items-center gap-1" >
               <LogIn className="w-4 h-4 mr-1" />
                <span className="hidden lg:inline">SignOut</span>
            </Link>
            </Button>
            }
           



         



          

            <div className=" flex space-x-3 items-center ">
                <ModeToggle/>
                <UserButton/>
            </div>

            

            
            

        
        
         </div>
    </div>
    
</div>
</nav>
    )

}