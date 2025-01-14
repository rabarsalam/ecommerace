"use client"
import Link from "next/link";
import Image from "next/image";
import DataForNavbar from "./Data";
import Search from '@/public/Images/Search.svg'
import Heart from '@/public/Images/Heart.svg'
import Shop from '@/public/Images/Shop.svg'
import Menu from '@/public/Images/Menu.png'
import { useState } from "react";
export default function Navbar() {
  let [isenable,Setisenable] = useState(false);

  function ChangeState(){
    Setisenable(!isenable);
  }
  return (
    <div>
      <nav className="grid grid-cols-3 items-center justify-center  p-4 border-b-2 relative">
        {/* Title */}
        <div className="ml-20">
          <Link  className="font-bold text-2xl"  href='/'>
              Shop
          </Link>
        </div>
        {/* === Title === */}

        {/* List */}
        <div>
          <ul>
            <div className={`${isenable ? 'hidden' : 'flex'} gap-10 items-center justify-center flex-col md:flex-row absolute md:static right-0 left-0 top-16 py-4 `}>

              {DataForNavbar.map((list) => {
                return(
                  <Link key={list.Id} className="font-light "  href={`/${list.Url}`}>
                    {list.Title}
                  </Link>
                  );
                })}
            </div>
          </ul>
        </div>
        {/* === List === */}

        {/* Serch And Carding Section */}
        <div className="flex justify-center items-center gap-5 ">
          <div className="mtl:flex md:items-center md:justify-between  bg-Gray rounded-md px-4 py-2 gap-8 hidden">
            <input placeholder="What are you looking for? " type="text" className=" bg-transparent text-left outline-none " />
            <Image src={Search} alt="Search" className="" />
          </div>
          <Image src={Heart} alt="Favorite" />
          <Image src={Shop}  alt="Shop"/>
         {/* Responsive Part */}
          <div className="flex md:hidden cursor-pointer">
            <button onClick={ChangeState}>
              <Image src={Menu} width={25} height={25} alt="Menu"/>
            </button>
          </div>
         {/* === Responsive Part === */}
        </div>
        {/* === Serch And Carding Section === */}


      </nav>
    </div>
  );
}
