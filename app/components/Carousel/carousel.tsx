"use client"
import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import './styles.css';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
// import required modules
import { Pagination, Navigation } from 'swiper/modules';
//import Other
import Image from 'next/image';

function carousel() {
    return (
    <>
            <Swiper
            slidesPerView={1}
            spaceBetween={30}
            loop={true}
            pagination={{
            clickable: true,
            }}
            navigation={true}
            modules={[Pagination, Navigation]}
            className="mySwiper"
        >
            <SwiperSlide>
                <div className='flex flex-col'>
                    <div className='relative'>

                    </div>
                    <div>
                        <h1>HAVIT HV-G92 Gamepad</h1>
                        <div className='flex items-center'>
                            <h1>$120</h1>
                            <h1 className='text-SecondaryRed line-through'>$160</h1>
                        </div>
                        <div className='flex items-center'>
                            <h1>⭐⭐⭐⭐⭐</h1>
                            <h1>(88)</h1>
                        </div>
                    </div>
                </div>
            </SwiperSlide>
            <SwiperSlide>Slide 2</SwiperSlide>
            <SwiperSlide>Slide 3</SwiperSlide>
            <SwiperSlide>Slide 4</SwiperSlide>
            <SwiperSlide>Slide 5</SwiperSlide>
            <SwiperSlide>Slide 6</SwiperSlide>
            <SwiperSlide>Slide 7</SwiperSlide>
            <SwiperSlide>Slide 8</SwiperSlide>
            <SwiperSlide>Slide 9</SwiperSlide>
        </Swiper>
    </>
  );
}

export default carousel;
