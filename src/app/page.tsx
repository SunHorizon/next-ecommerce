// 'use client'

import CategoryList from "@/components/CategoryList"
import ProductList from "@/components/ProductList"
import Slider from "@/components/Slider"
import { useWixClient } from "@/hooks/useWixclient"
import { myWixClientServer } from "@/lib/wixClientServer"
import { useContext, useEffect } from "react"

const HomePage = async () => {

  // const myWixClient = useWixClient()

  // useEffect(() => {
  //   const getProduct = async () =>{
  //     const res = await myWixClient.products.queryProducts().find();
  //     console.log(res);
  //   }
  //   getProduct();
  // }, [myWixClient])


  // const wixclient = await myWixClientServer();
  // const res = await wixclient.products.queryProducts().find();
  
  

  return (
    <div className=''>
      <Slider /> 
      <div className="mt-24 px-4 md:px-8 lg:px-16 xl:px-32 2xl:px-64">
        <h1 className="text-2xl">Featured Products</h1>
        <ProductList />
      </div>
      <div className="mt-24">
        <h1 className="text-2xl px-4 md:px-8 lg:px-16 xl:px-32 2xl:px-64 mb-12">Categories</h1>
        <CategoryList />
      </div>
      <div className="mt-24 px-4 md:px-8 lg:px-16 xl:px-32 2xl:px-64">
        <h1 className="text-2xl">New Products</h1>
        <ProductList />
      </div>
    </div>
  )
}
export default HomePage