"use client"
import Image from 'next/image';
import Link from 'next/link';
import Model from '@/public/Images/Model.svg'
import CASUAL from '@/public/Images/CASUAL.png'
import FORMAL from '@/public/Images/FORMAL.png'
import PARTY from '@/public/Images/PARTY.png'
import GYM from '@/public/Images/GYM.png'
import Github from '@/public/Images/Github.svg'
import Facebook from '@/public/Images/facebook.svg'
import Instagram from '@/public/Images/instagram.svg'
import X from '@/public/Images/X.svg'
import Productfn from './components/Productfn/productfn';
import Banner from './components/Banner/banner'
import Contact from './components/FormContact/contact';
export default function Home() {
  return (
    <>
     <div className="  ">
        {/* First Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 items-end justify-between gap-4 md:gap-44 md:pt-24 w-full md:px-10 pt-12  bg-Gray">
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

        {/*  Category  */}
        <div className='grid bg-Gray mx-2 lg:mx-20 mt-10 rounded-3xl py-10 px-5 gap-5'>
          <h1 className='font-bold text-center text-4xl capitalize '>BROWSE BY dress STYLE</h1>
          <div className='grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-14 overflow-hidden'>
            <div className='flex bg-white rounded-2xl cursor-pointer hover:scale-105 duration-200 ease-linear h-36 md:h-72 overflow-hidden'>
              <h1 className='pl-10 pt-8'>Casual</h1>
              <Image src={CASUAL}   className='w-full  rounded-2xl object-cover   md:pr-24' alt='CASUAL' />
            </div>
            <div className='flex md:col-span-2 bg-white rounded-2xl cursor-pointer hover:scale-105 duration-200 ease-linear h-36 md:h-72 overflow-hidden'>
              <h1 className='pl-10 pt-8'>Formal</h1>
              <Image src={FORMAL}   className='w-full  rounded-2xl object-cover' alt='CASUAL' />
            </div>
            <div className='flex bg-white md:col-span-2 rounded-2xl cursor-pointer hover:scale-105 duration-200 ease-linear h-36 md:h-72 overflow-hidden'>
              <h1 className='pl-10 pt-8'>Party</h1>
              <Image src={PARTY}   className='w-full  rounded-2xl object-cover' alt='CASUAL' />
            </div>
            <div className='flex bg-white rounded-2xl cursor-pointer hover:scale-105 duration-200 ease-linear h-36 md:h-72 overflow-hidden'>
              <h1 className='pl-10 pt-8'>Gym</h1>
              <Image src={GYM}   className='w-full  rounded-2xl object-cover   md:pr-12' alt='CASUAL' />
            </div>
          </div>
        </div>
        {/* === Category === */}
        {/* Review */}
        <div className=' mt-20 flex flex-col items-center justify-center'>
          <h1 className='capitalize font-bold text-4xl sm:text-6xl '>Our Happy Customers</h1>
          <div className='grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 items-center justify-around gap-3 mt-14 '> 
            <div className='border-2 p-4 grid items-start justify-start w-80 sm:w-72 text-sm md:text-base md:w-88  h-52 rounded-2xl gap-2' >
              <h1>⭐⭐⭐⭐⭐</h1>
              <h1>Sara M. ✅</h1>
              <p className='overflow-hidden'>"I'm blown away by the quality and style of the clothes I received from Shop.co. From casual wear to elegant dresses, every piece I've bought has exceeded my expectations.”</p>
            </div>
            <div className='border-2 p-4 grid items-start justify-start w-80 sm:w-72 text-sm md:text-base md:w-88  h-52 rounded-2xl gap-2' >
              <h1>⭐⭐⭐⭐⭐</h1>
              <h1>Sara M. ✅</h1>
              <p className='overflow-hidden'>"I'm blown away by the quality and style of the clothes I received from Shop.co. From casual wear to elegant dresses, every piece I've bought has exceeded my expectations.”</p>
            </div>
            <div className='border-2 p-4 grid items-start justify-start w-80 sm:w-72 text-sm md:text-base md:w-88  h-52 rounded-2xl gap-2' >
              <h1>⭐⭐⭐⭐⭐</h1>
              <h1>Sara M. ✅</h1>
              <p className='overflow-hidden'>"I'm blown away by the quality and style of the clothes I received from Shop.co. From casual wear to elegant dresses, every piece I've bought has exceeded my expectations.”</p>
            </div>
            <div className='border-2 p-4 grid items-start justify-start w-80 sm:w-72 text-sm md:text-base md:w-88  h-52 rounded-2xl gap-2' >
              <h1>⭐⭐⭐⭐⭐</h1>
              <h1>Sara M. ✅</h1>
              <p className='overflow-hidden'>"I'm blown away by the quality and style of the clothes I received from Shop.co. From casual wear to elegant dresses, every piece I've bought has exceeded my expectations.”</p>
            </div>
          </div>
        </div>
        {/* === Review === */}


        {/* Contact */}
          <Contact  />
        {/* Contact */}
        {/* Footer */}
          <div className=' bg-Gray flex flex-col md:flex-row px-14 py-14 items-center justify-between gap-10'>
              <div className='flex flex-col items-start justify-between gap-6'>
                <h1 className='font-extrabold text-3xl'>SHOP.CO</h1>
                <p className='font-extralight text-base w-56'>We have clothes that suits your style and which you’re proud to wear. From women to men.</p>
                <div className='flex items-center justify-between gap-6'>
                  <Image src={X} width={45} height={45} alt='X'/>
                  <Image src={Facebook} width={45} height={45} alt='X'/>
                  <Image src={Instagram} width={45} height={45} alt='X'/>
                  <Image src={Github} width={45} height={45} alt='X'/>
                </div>
              </div>
              <div className='grid grid-cols-2 gap-6 md:grid-cols-4'>
                <div className='flex flex-col items-start justify-evenly gap-4'>
                  <h1 className=' text-xl'>COMPANY</h1>
                  <Link href='/about' className='font-extralight'>About</Link>
                  <Link href='/Features' className='font-extralight'>Features</Link>
                  <Link href='/Works' className='font-extralight'> Works</Link>
                  <Link href='/Career' className='font-extralight'> Career</Link>
                </div>
                <div className='flex flex-col items-start justify-evenly gap-4'>
                  <h1 className=' text-xl'>HELP</h1>
                  <Link href='/Support' className='font-extralight'>Customer Support</Link>
                  <Link href='/Detail' className='font-extralight'>Delivery Details</Link>
                  <Link href='/Terms' className='font-extralight'> Terms & Condition</Link>
                  <Link href='/Policy' className='font-extralight'> Privacy Policy</Link>
                </div>
                <div className='flex flex-col items-start justify-evenly gap-4'>
                  <h1 className=' text-xl'>FAQ</h1>
                  <Link href='/Account' className='font-extralight' >Account</Link>
                  <Link href='/Detail' className='font-extralight'>Manage Deliveries</Link>
                  <Link href='/Order' className='font-extralight' > Orders</Link>
                  <Link href='/Detail' className='font-extralight' > Payments</Link>
                </div>
                <div className='flex flex-col items-start justify-evenly gap-4'>
                  <h1 className=' text-xl'>RESOURCES</h1>
                  <Link href='/ebook' className='font-extralight'>Free eBooks</Link>
                  <Link href='/Detail' className='font-extralight'>Development Tutorial</Link>
                  <Link href='/Blog' className='font-extralight'> How to - Blog</Link>
                  <Link href='/Playlist' className='font-extralight'> Youtube Playlist</Link>
                </div>
              </div>
            </div>
          {/*=== Footer ===*/}
     </div>
    </>
  );
}
