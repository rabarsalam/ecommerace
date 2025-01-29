"use client"
import Link from "next/link";
import Image from "next/image";
import DataForNavbar from "./Data";
import Search from '@/public/Images/Search.svg'
import Profile from '@/public/Images/Profile.svg'
import Shop from '@/public/Images/Shop.svg'
import Menu from '@/public/Images/Menu.png'
import { useState } from "react";
export default function Navbar() {
  let [isenable,Setisenable] = useState(false);
  let [isshow,Setisshow] = useState(false);
  function ChangeState(){
    Setisenable(!isenable);
  }
  function ShowSearch(){
    Setisshow(!isshow);
  }
  return (
    <div>
      <nav className="grid grid-cols-2 items-center justify-between  p-2 border-b-2 relative bg-white w-screen">
        <div className="flex items-center justify-between sm:gap-20  ">
        {/* Title */}
        <div className="flex items-center justify-between gap-4">
          {/* Responsive Part */}
          <div className="flex sm:hidden cursor-pointer">
            <button onClick={ChangeState}>
              <Image src={Menu} width={25} height={25} alt="Menu"/>
            </button>
          </div>
          {/* === Responsive Part === */}
          <Link  className="font-bold text-xl"  href='/'>
              SHOP.CO
          </Link>
        </div>
          {/* === Title === */}
          {/* List */}
          <div>
            <ul className="">
              <div className={`${isenable ? 'flex' : 'hidden'} sm:flex  gap-6 md:gap-5 items-center justify-between flex-col sm:flex-row absolute sm:static right-0 left-0 top-10 py-4 bg-white rounded-b-lg `}>
              <select name="Shop" id="Shop" className="bg-none outline-none  font-light"  >
                <option value="volvo" >Shop</option>
              </select>
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
        </div>
        {/* Serch And Carding Section */}
        <div className="flex justify-end sm:pr-14 items-center  gap-5 " >
          <div className={`${isshow? ' flex  ' : 'flex w-0'}flex sm:items-center sm:justify-between relative     rounded-full md:px-4 sm:py-1 gap-3  `}>
            <Image src={Search} onClick={ShowSearch} alt="Search" width={30} height={30} className="cursor-pointer absolute left-8" />
            <input placeholder="What are you looking for? " type="text" className={`${isshow?'hidden':'flex'} bg-Gray w-full absolute md:static top-10 left-0 right-0 items-center justify-center outline-none py-3 pl-16 pr-20  rounded-full `} />

          </div>
          <Image src={Shop} alt="Shop" width={30} height={30}  className="cursor-pointer"/>
          <Image src={Profile}  alt="Profile"width={30} height={30}  className="cursor-pointer"/>
        </div>
        {/* === Serch And Carding Section === */}
      </nav>
    </div>
  );
}
