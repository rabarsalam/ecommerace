import Link from "next/link";
import DataForNavbar from "./Data";
import Search from '@/public/Images/Search.svg'
import Heart from '@/public/Images/Heart.svg'
import Shop from '@/public/Images/Shop.svg'
import Image from "next/image";
export default function Navbar() {
  return (
    <div>
      <nav className="grid grid-cols-3 items-center justify-center overflow-hidden p-4 border-b-2">
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
            <div className="flex gap-10 items-center  ">

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
        <div className="flex justify-center items-center gap-5">
          <div className="flex items-cente justify-between  bg-Gray rounded-md px-4 py-2 gap-8 ">
            <input placeholder="What are you looking for? " type="text" className=" bg-transparent text-left outline-none " />
            <Image src={Search} alt="Search" className="" />
          </div>
          <Image src={Heart} alt="Favorite" />
          <Image src={Shop}  alt="Shop"/>
        </div>
        {/* === Serch And Carding Section === */}
      </nav>
    </div>
  );
}
