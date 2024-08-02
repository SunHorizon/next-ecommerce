import Image from "next/image"
import Link from "next/link"



const ProductList = () => {
    return (
        <div className="mt-12 flex gap-x-8 gap-y-16 justify-between flex-wrap">
            <Link href="/test" className="w-full flex flex-col gap-4 sm:w-[45%] lg:w-[22%]">
                <div className="relative w-full h-80">    
                    <Image 
                    src="https://images.pexels.com/photos/11233815/pexels-photo-11233815.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load" 
                    alt="" 
                    fill 
                    sizes="25vw"
                    className="obsolute object-cover rounded-md z-10 hover:opacity-0 transition-opacity easy duration-500"
                    />
                    <Image 
                    src="https://images.pexels.com/photos/20638298/pexels-photo-20638298/free-photo-of-green-fern-plant-with-twisted-leaves.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load" 
                    alt="" 
                    fill 
                    sizes="25vw"
                    className="obsolute object-cover rounded-md"
                    />
                </div>
                <div className="flex justify-between">
                    <span className="font-medium">Product Name</span>
                    <span  className="font-semibold">$49</span>
                </div>
                <div className="text-sm text-gray-500">My Description</div>
                <button className="rounded-2xl ring-1 ring-SHOP w-max text-SHOP py-2 px-2 text-xs hover:bg-SHOP hover:text-white ">Add to cart</button>
            </Link>
            <Link href="/test" className="w-full flex flex-col gap-4 sm:w-[45%] lg:w-[22%]">
                <div className="relative w-full h-80">    
                    <Image 
                    src="https://images.pexels.com/photos/11233815/pexels-photo-11233815.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load" 
                    alt="" 
                    fill 
                    sizes="25vw"
                    className="obsolute object-cover rounded-md z-10 hover:opacity-0 transition-opacity easy duration-500"
                    />
                    <Image 
                    src="https://images.pexels.com/photos/20638298/pexels-photo-20638298/free-photo-of-green-fern-plant-with-twisted-leaves.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load" 
                    alt="" 
                    fill 
                    sizes="25vw"
                    className="obsolute object-cover rounded-md"
                    />
                </div>
                <div className="flex justify-between">
                    <span className="font-medium">Product Name</span>
                    <span  className="font-semibold">$49</span>
                </div>
                <div className="text-sm text-gray-500">My Description</div>
                <button className="rounded-2xl ring-1 ring-SHOP w-max text-SHOP py-2 px-2 text-xs hover:bg-SHOP hover:text-white ">Add to cart</button>
            </Link>
            <Link href="/test" className="w-full flex flex-col gap-4 sm:w-[45%] lg:w-[22%]">
                <div className="relative w-full h-80">    
                    <Image 
                    src="https://images.pexels.com/photos/11233815/pexels-photo-11233815.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load" 
                    alt="" 
                    fill 
                    sizes="25vw"
                    className="obsolute object-cover rounded-md z-10 hover:opacity-0 transition-opacity easy duration-500"
                    />
                    <Image 
                    src="https://images.pexels.com/photos/20638298/pexels-photo-20638298/free-photo-of-green-fern-plant-with-twisted-leaves.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load" 
                    alt="" 
                    fill 
                    sizes="25vw"
                    className="obsolute object-cover rounded-md"
                    />
                </div>
                <div className="flex justify-between">
                    <span className="font-medium">Product Name</span>
                    <span  className="font-semibold">$49</span>
                </div>
                <div className="text-sm text-gray-500">My Description</div>
                <button className="rounded-2xl ring-1 ring-SHOP w-max text-SHOP py-2 px-2 text-xs hover:bg-SHOP hover:text-white ">Add to cart</button>
            </Link>
            <Link href="/test" className="w-full flex flex-col gap-4 sm:w-[45%] lg:w-[22%]">
                <div className="relative w-full h-80">    
                    <Image 
                    src="https://images.pexels.com/photos/11233815/pexels-photo-11233815.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load" 
                    alt="" 
                    fill 
                    sizes="25vw"
                    className="obsolute object-cover rounded-md z-10 hover:opacity-0 transition-opacity easy duration-500"
                    />
                    <Image 
                    src="https://images.pexels.com/photos/20638298/pexels-photo-20638298/free-photo-of-green-fern-plant-with-twisted-leaves.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load" 
                    alt="" 
                    fill 
                    sizes="25vw"
                    className="obsolute object-cover rounded-md"
                    />
                </div>
                <div className="flex justify-between">
                    <span className="font-medium">Product Name</span>
                    <span  className="font-semibold">$49</span>
                </div>
                <div className="text-sm text-gray-500">My Description</div>
                <button className="rounded-2xl ring-1 ring-SHOP w-max text-SHOP py-2 px-2 text-xs hover:bg-SHOP hover:text-white ">Add to cart</button>
            </Link>
        </div>
    )
}

export default ProductList