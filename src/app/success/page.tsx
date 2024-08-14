'use client'
import { useSearchParams, useRouter } from "next/navigation";
import { useEffect } from "react";
import Confetti from "react-confetti";

const SuccessPage = () =>{

    const searchParams = useSearchParams();
    const router = useRouter()

    const orderId = searchParams.get("orderid")

    useEffect(()=>{
        if(!orderId) return;

        const timer = setTimeout(() => {
            router.push('/orders/'+orderId)
        }, 5000);

        return ()=>{
            clearTimeout(timer);
        }
    }, [orderId, router])


    return (
        <div className="flex flex-col gap-6 items-center justify-center h-[calc(100vh-180px)]">
            <Confetti width={2000} height={1000} />
            <h1 className="text-6xl text-green-700">Sucessful</h1>
            <h2 className="text-xl font-medium">We send the invoice to your e-mail</h2>
            <h3 className="">You are being redirected to the other page...</h3>
        </div>
    )
}

export default SuccessPage;