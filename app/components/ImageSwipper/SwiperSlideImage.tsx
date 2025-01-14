"use client";
import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import './styles.css';
// import Image
import Iphone15 from '@/public/Images/Iphone.svg'
import AppleLogo from '@/public/Images/AppleLogo.svg'
import { Parallax, Pagination } from 'swiper/modules';
import Link from 'next/link';

export default function SwiperSlideImage() {
  return (
    <>
      <div className=' xlarge:flex relative right-96 top-0 hidden   ' style={{width:'1000px',height:'400px'}}>
          <Swiper
          slidesPerView={1}
          spaceBetween={50}
            loop={true}
            speed={600}
            parallax={true}
            pagination={{
              clickable: true,
            }}
            modules={[Parallax, Pagination]}
            className="mySwiper "
          >
            <SwiperSlide >
              <div className='grid gap-10'>
                <div className="title flex items-center gap-4 " data-swiper-parallax="-300">
                <Image src={AppleLogo} width={40} height={40} alt='AppleLogo' /> 
                <h1 className=' text-base font-light'>Iphone 14 Series</h1>
                </div>
                <div className="subtitle " data-swiper-parallax="-200">
                  <h1 className='text-7xl'>
                  Up to 20% <br/> off Voucher
                  </h1>
                </div>
                <div className="text" data-swiper-parallax="-100">
                  <Link href='/' >
                  <h1 className='underline underline-offset-8 text-lg'> Shop Now</h1>
                  </Link>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide >
              <div className='grid gap-10'>
                <div className="title flex items-center gap-4 " data-swiper-parallax="-300">
                <Image src={AppleLogo} width={40} height={40} alt='AppleLogo' /> 
                <h1 className=' text-base font-light'>Iphone 15 Series</h1>
                </div>
                <div className="subtitle " data-swiper-parallax="-200">
                  <h1 className='text-7xl'>
                  Up to 10% <br/> off Voucher
                  </h1>
                </div>
                <div className="text" data-swiper-parallax="-100">
                  <Link href='/' >
                  <h1 className='underline underline-offset-8 text-lg'> Shop Now</h1>
                  </Link>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide >
            <div className='grid gap-10'>
                <div className="title flex items-center gap-4 " data-swiper-parallax="-300">
                <Image src={AppleLogo} width={40} height={40} alt='AppleLogo' /> 
                <h1 className=' text-base font-light'>Iphone 16 Series</h1>
                </div>
                <div className="subtitle " data-swiper-parallax="-200">
                  <h1 className='text-7xl'>
                  Up to 5% <br/> off Voucher
                  </h1>
                </div>
                <div className="text" data-swiper-parallax="-100">
                  <Link href='/' >
                  <h1 className='underline underline-offset-8 text-lg'> Shop Now</h1>
                  </Link>
                </div>
              </div>
            </SwiperSlide>
            <div >
              <Image className='absolute top-12 right-10' src={Iphone15} width={550}  alt='Iphone'/>
            </div>
          </Swiper>
      </div>
    </>
  );
}
