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
  const [isMenuOpen, setMenuOpen] = useState(false);
  const [isSearchVisible, setSearchVisible] = useState(false);
  function toggleMenu (){
    setMenuOpen(!isMenuOpen);
    setSearchVisible(true)

  }
  function toggleSearch (){
    setSearchVisible(!isSearchVisible);
    setMenuOpen(false)

  }
  return (
    <div>
      <nav className="grid grid-cols-2 items-center justify-around  p-2 border-b-2 relative bg-white w-screen">
        <div className="flex items-center justify-between sm:gap-20  ">
        {/* Title */}
        <div className="grid grid-cols-2 items-center justify-between gap-4 relative">
          {/* Responsive Part */}
          <div className="flex sm:hidden cursor-pointer">
            <button onClick={toggleMenu}>
              <Image src={Menu} width={25} height={25} alt="Menu"/>
            </button>
          </div>
          {/* === Responsive Part === */}
          <Link  className="font-bold  absolute left-10 sm:static  text-xs md:text-xl"  href='/'>
              SHOP.CO
          </Link>
        </div>
          {/* === Title === */}
          {/* List */}
          <div>
            <ul className="">
              <div className={`${isMenuOpen ? 'flex' : 'hidden'} sm:flex  gap-6 sm:gap-5 items-center justify-between flex-col sm:flex-row absolute sm:static right-0 left-0 top-10 py-4 bg-white rounded-b-lg `}>
              <select name="Shop" id="Shop" className="bg-none outline-none  font-light text-xs md:text-xl"  >
                <option value="volvo" >Shop</option>
              </select>
                {DataForNavbar.map((list) => {
                  return(
                    <Link key={list.Id} className="font-light text-xs md:text-xl  "  href={`/${list.Url}`}>
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
        <div className="flex justify-end sm:pr-14 items-center  gap-5 ml-7" >
          <div className={`${isSearchVisible? ' flex  ' : 'flex w-0'}flex items-center justify-between relative     rounded-full sm:px-4 sm:py-1 gap-3   `}>
            <Image src={Search} onClick={toggleSearch} alt="Search" width={30} height={30} className="flex sm:hidden cursor-pointer  relative mr-3 sm:left-10 " />
            <Image src={Search}  alt="Search" width={30} height={30} className="hidden sm:flex cursor-pointer absolute left-8" />
            <input placeholder="What are you looking for? " aria-label="Search" type="text" className={`${isSearchVisible?'hidden':'flex'}  fixed py-2   top-11 rounded-b-lg  right-0 left-0 sm:static sm:bg-Gray w-full items-center justify-center outline-none sm:py-3 sm:pl-16 sm:pr-20  sm:rounded-full transition-all duration-300`} />

          </div>
          <Image src={Shop} alt="Shop" width={30} height={30}  className="cursor-pointer"/>
          <Image src={Profile}  alt="Profile"width={30} height={30}  className="cursor-pointer"/>
        </div>
        {/* === Serch And Carding Section === */}
      </nav>
    </div>
  );
}
