"use client"
import { Poppins } from "next/font/google"
import Link from "next/link";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { usePathname } from "next/navigation";
import { NavbarSidebar } from "./navbar-sidebar";
import { useState } from "react";
import { MenuIcon } from "lucide-react";

const poppins = Poppins({
    subsets:["latin"],
    weight:["700"]
});
interface NavebarItemProps{
    href:string;
    children:React.ReactNode;
    isActive:boolean
}


const NavebarItem=({
    href,children,isActive
}:NavebarItemProps)=>{
    
    return(
        <Button
        asChild
        variant="outline"
        className={cn("bg-transparent hover:bg-transparent rounded-full hover:border-primary border-transparent",
        isActive && "bg-black text-white hover:bg-black hover:text-white",)}

        >
            <Link href={href}>
            {children}
            </Link>
            
        </Button>
    )

}
const navbarItems =[
    {href:"/",children:"Home"},
    {href:"/about",children:"About"},
    {href:"/features",children:"Features"},                
    {href:"/contact",children:"Contact"}
]


export const Navebar=()=>{
    const pathname = usePathname();
    const [isSidebarOpen , setSidebarOpen] = useState(false);
    return(
        <nav className="h-20 flex border-b justify-between font-medium bg-white">
            <Link
            className="pl-6 flex items-center"
            href="/"
            >
           <span className={cn("text-5xl font-semibold ",poppins.className)}>
            buyiT
           </span>
            </Link>
            
            <NavbarSidebar
            items={navbarItems}
            open={isSidebarOpen}
            onOpenChange={setSidebarOpen}
            />


            <div className="items-center gap-4 hidden lg:flex">
                {navbarItems.map((item)=>{
                   return <NavebarItem
                     key={item.href}
                     href={item.href}
                     isActive={pathname==item.href}
                    >
                        {item.children}
                      
                    </NavebarItem>
                })}
            </div>

            <div className="hidden lg:flex">
                <Button 
                variant="secondary"
                className="border-l border-t-0 border-r-0 px-12 h-full rounded-none bg-white hover:bg-pink-400 transition-colors text-lg">
                    <Link href="/signin">
                        Login
                    </Link>

                </Button>
                <Button
                className="border-l border-t-0 border-r-0 px-12 h-full rounded-none bg-black hover:bg-pink-400 hover:text-black transition-colors text-lg">
                    <Link href="/selling">
                        Start Selling
                    </Link>
                </Button>


            </div>

            <div className="flex lg:hidden items-center justify-center">
                <Button
                variant="ghost"
                className="border-transparent size-12 bg-white"
                onClick={()=>setSidebarOpen(true)}
                >
                    <MenuIcon/>
                </Button>

            </div>

        </nav>
    )
}