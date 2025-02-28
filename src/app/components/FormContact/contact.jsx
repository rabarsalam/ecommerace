import React from 'react';
import Image from 'next/image';
import emailIcon from '@/public/Images/EmailIcon.svg';
import { useTranslations } from "next-intl";
export default function Contact() {
      const t = useTranslations("FormContact");
  return (
    <div className='bg-black flex flex-col md:flex-row gap-8 items-center justify-between p-6 md:p-10 lg:p-12 rounded-3xl mx-auto max-w-7xl'>
      {/* Heading Section */}
      <div className='w-full md:w-1/2 text-center md:text-left mb-6 md:mb-0'>
        <h1 className='text-3xl sm:text-4xl lg:text-5xl xl:text-6xl text-white font-bold leading-tight'>
          {t('title')}
        </h1>
      </div>
      
      {/* Subscription Form Section */}
      <div className='w-full md:w-1/2 max-w-md'>
        <div className='flex items-center justify-start rounded-full bg-white relative mb-4 overflow-hidden'>
          <Image 
            src={emailIcon} 
            width={20} 
            height={20} 
            alt='Email' 
            className='absolute left-4'
          />
          <input 
            placeholder={t('email')}
            type='email' 
            className='outline-none py-3 px-4 pl-12 w-full rounded-full'
          />
        </div>
        
        <button 
          className='rounded-full py-3 px-4 bg-white w-full font-medium hover:bg-gray-100 transition-colors' 
          type='submit'
        >
          {t('subscribe')}
        </button>
      </div>
    </div>
  );
}