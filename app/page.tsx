import DataForMenuBar from "@/app/Data";
import Link from "next/link";
import SwiperSlideImage from "./components/ImageSwipper/SwiperSlideImage";
export default function Home() {
  return (
    <>
      {/* First Section */}
      <div className="grid grid-cols-2 items-center justify-around">
        <div>
          <ul>
            <div className="grid grid-cols-1 gap-3 items-center  ">
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
        <div>
          <SwiperSlideImage />
        </div>
      </div>
      {/* === First Section === */}
    </>
  );
}
