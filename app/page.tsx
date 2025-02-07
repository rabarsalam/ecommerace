"use client"
import Image from 'next/image';
import Model from '@/public/Images/Model.svg'

import Productfn from './components/Productfn/productfn';
import Banner from './components/Banner/banner'
export default function Home() {
  return (
    <>
     <div className=" pt-12 ">
        {/* First Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 items-end justify-between gap-4 md:gap-44 md:pt-24 w-full md:px-10 pt-12 ">
          <div className="text-left grid grid-cols-1  gap-4  px-3">
            <h1 className="font-bold text-3xl md:text-7xl">FIND CLOTHES THAT MATCHES YOUR STYLE</h1>
            <p className="font-light text-xs md:text-base ">Browse through our diverse range of meticulously crafted garments, designed to bring out your individuality and cater to your sense of style.</p>
            <button className="bg-black rounded-full px-4 md:px-7 md:w-44 py-3 text-white hover:scale-105 duration-200 ease-linear ">Shop Now</button>
            <div className="grid grid-cols-2 md:grid-cols-3 items-center justify-center gap-3 text-center pb-32 md:pt-10">
              <div className="border-r-2">
                <h1 className='font-bold text-xl lg:text-4xl'>200+</h1>
                <p>International Brands</p>
              </div>
              <div className='md:border-r-2'>
                <h1 className='font-bold text-xl lg:text-4xl'>2,000+</h1>
                <p>High-Quality Products</p>
              </div>
              <div className="col-span-2 md:col-span-1 col-justify-self-center ">
                <h1 className='font-bold text-xl lg:text-4xl'>30,000+</h1>
                <p>Happy Customers</p>
              </div>
            </div>
          </div>
            <Image src={Model} className='w-full'    alt="Model" />
        </div>
        <div className="bg-black shadow-lg w-full overflow-hidden">
   <Banner />
    </div>
        {/* === First Section === */}
        {/* New Arrivals */}
        <Productfn />
        <Productfn Title='TOP SELLING' />
        {/* === New Arrivals === */}
     </div>
    </>
  );
}
