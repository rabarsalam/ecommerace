import DataForMenuBar from "@/app/Data";
import Link from "next/link";
import SwiperSlideImage from "./components/ImageSwipper/SwiperSlideImage";
import Carousel from "./components/Carousel/carousel";
export default function Home() {
  return (
    <>
     <div className="container px-20 ">
        {/* First Section */}
        {/* <div className="grid grid-cols-2 items-center justify-center  relative border-r-2 ">
          <div className="border-r-2 md:w-1/4">
            <ul>
              <div className="flex flex-col gap-3 items-center justify-center absolute left-0 right-0 md:static  py-3   ">
                {DataForMenuBar.map((list) => {
                  return (
                    <Link
                      key={list.Id}
                      className="font-light "
                      href={`/${list.Url}`}
                    >
                      {list.Title}
                    </Link>
                  );
                })}
              </div>
            </ul>
          </div>
          <div className="mr-10 mt-10 w-3/4 relative">
            <SwiperSlideImage />
          </div>
        </div> */}
        {/* === First Section === */}
        {/* Flash Sales Part */}
      {/* 
          <div className="p-4">
            <div className="flex items-center gap-4 text-SecondaryRed">
              <div className="h-12 w-5 bg-SecondaryRed rounded-lg "></div>
              <h1 className="font-semibold">Today’s</h1>
            </div>
            <div className="font-semibold flex items-center justify-between">
              <h1 className="text-3xl" > Flash Sales</h1>
              <div className="flex items-center justify-center gap-10">
                <div>
                  <h1 className="font-medium"> Days</h1>
                  <div className="flex items-center gap-5 text-2xl mt-1">
                    <h3>04</h3>
                    <h3 className="text-SecondaryRed"> : </h3>
                  </div>
                </div>
                <div>
                   <h1 className="font-medium"> Hours</h1>
                  <div className="flex items-center gap-5 text-2xl mt-1">
                    <h3>04</h3>
                    <h3 className="text-SecondaryRed"> : </h3>
                  </div>
                </div>
                <div>
                <h1 className="font-medium"> Minutes</h1>
                  <div className="flex items-center gap-5 text-2xl mt-1">
                    <h3>04</h3>
                    <h3 className="text-SecondaryRed"> : </h3>
                  </div>
                </div>
                <div>
                <h1 className="font-medium"> Seconds</h1>
                  <div className="flex items-center gap-5 text-2xl mt-1">
                    <h3>04</h3>
                  </div>
                </div>
              </div>

              <div>
              </div>
            </div>
          </div>
                */}
        {/* === Flash Sales Part === */}
     </div>
    </>
  );
}
