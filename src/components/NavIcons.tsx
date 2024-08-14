'use client'

import Image from "next/image"
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react"
import CartModel from "./CartModel";
import { useWixClient } from "@/hooks/useWixclient";
import Cookies from "js-cookie";
import { useCartStore } from "@/hooks/useCartStore";


const NavIcons = () => {
    const [isProfileOpen, setIsProfileOpen] = useState(false);
    const [isCartOpen, setIsCarteOpen] = useState(false);
    const [isLoading, setIsLoading] = useState(false);

    const router = useRouter();
    const wixClient = useWixClient();
    const isLoggedIn = wixClient.auth.loggedIn();
    // const isLoggedIn = true;

    const handleProfile = () =>{
        if(!isLoggedIn){
            router.push("/login");
        }else{
            setIsProfileOpen(!isProfileOpen);
        }
    }
    const handleLogOut = async ()=>{
        setIsLoading(true);
        Cookies.remove('refreshToken')
        const { logoutUrl } = await wixClient.auth.logout(window.location.href);
        setIsLoading(false);
        setIsProfileOpen(false);
        router.push(logoutUrl);
    }

    const {cart, counter, getCart} = useCartStore();

    useEffect(()=>{
        getCart(wixClient);
    },[wixClient, getCart])

    return (
        <div className="flex items-center gap-4 xl:gap-6 relative">
            <Image 
            src="/profile.png" 
            alt="" width={22} 
            height={22} 
            className="cursor-pointer" 
            onClick={handleProfile}
            />
            {isProfileOpen && 
                <div className="absolute p-4 rounded-md top-12 left-0 bg-white text-sm shadow-[0_3px_10px_rgb(0,0,0,0.2)] z-20"> 
                    <Link href="/profiler">Profile</Link>
                    <div className="mt-2 cursor-pointer" onClick={handleLogOut}>{isLoading ? "Logging out" : "Logout"}</div>
                </div>}
            <Image  src="/notification.png" alt="" width={22} height={22} className="cursor-pointer"/>
            
            <div className="relative cursor-pointer" onClick={() => setIsCarteOpen(!isCartOpen)}>
                <Image  
                src="/cart.png" 
                alt="" 
                width={22}
                height={22}             
                />
                <div className="absolute -top-4 -right-4 w-6 h-6 bg-SHOP rounded-full text-white text-sm flex items-center justify-center">{counter}</div>
            </div>
            {isCartOpen &&  <CartModel /> }
        </div>
    )
}

export default NavIcons