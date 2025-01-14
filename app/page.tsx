import DataForMenuBar from "@/app/Data";
import Link from "next/link";
import SwiperSlideImage from "./components/ImageSwipper/SwiperSlideImage";
export default function Home() {
  return (
    <>
      {/* First Section */}
      <div className="grid grid-cols-2 items-center justify-center px-20 relative ">
        <div className="border-r-2 md:w-1/4">
          <ul>
            <div className="flex flex-col gap-3 items-center justify-center absolute left-0 right-0 md:static  py-3 px-5  ">
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
      </div>
      {/* === First Section === */}
    </>
  );
}
