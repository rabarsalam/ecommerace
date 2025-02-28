"use client"
import Image from 'next/image';
import Model from '@/public/Images/Model.svg'
import CASUAL from '@/public/Images/CASUAL.png'
import FORMAL from '@/public/Images/FORMAL.png'
import PARTY from '@/public/Images/PARTY.png'
import GYM from '@/public/Images/GYM.png'
import Github from '@/public/Images/Github.svg'
import Facebook from '@/public/Images/facebook.svg'
import Instagram from '@/public/Images/instagram.svg'
import X from '@/public/Images/X.svg'
import Productfn from '../components/Productfn/productfn';
import Banner from '../components/Banner/banner'
import Contact from '../components/FormContact/contact';
import {useTranslations} from 'next-intl';
import {Link} from '@/src/i18n/routing';

export default function Home() {
  const t = useTranslations('HomePage');
  
  return (
    <>
     <div className="max-w-screen-2xl mx-auto">
        {/* Hero Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 items-center justify-between gap-4 md:gap-6 lg:gap-12 w-full px-4 sm:px-6 md:px-10 pt-8 md:pt-16 lg:pt-24 bg-Gray">
          <div className="text-left grid grid-cols-1 gap-4 md:gap-6">
            <h1 className="font-bold text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl">{t('title')}</h1>
            <p className="font-light text-sm md:text-base lg:text-lg">{t('discription')}</p>
            <button className="bg-black rounded-full px-6 py-3 text-white hover:scale-105 duration-200 ease-linear w-full sm:w-auto md:w-44">{t('shopbutton')}</button>
            
            <div className="grid grid-cols-2 md:grid-cols-3 items-center justify-center gap-3 text-center py-8 md:py-12">
              <div className="border-r-2">
                <h1 className='font-bold text-xl md:text-2xl lg:text-4xl'>{t('brandnumber')}+</h1>
                <p className="text-sm md:text-base">{t('brand')}</p>
              </div>
              <div className='md:border-r-2'>
                <h1 className='font-bold text-xl md:text-2xl lg:text-4xl'>{t('qualitynumber')}+</h1>
                <p className="text-sm md:text-base">{t('quality')}</p>
              </div>
              <div className="col-span-2 md:col-span-1 justify-self-center">
                <h1 className='font-bold text-xl md:text-2xl lg:text-4xl'>{t('customernumber')}+</h1>
                <p className="text-sm md:text-base">{t('customer')}</p>
              </div>
            </div>
          </div>
          
          <div className="w-full">
            <Image src={Model} className='w-full object-contain' alt="Model" priority />
          </div>
        </div>
        
        {/* Brands Banner */}
        <div className="w-full overflow-hidden">
          <Banner />
        </div>
        
        {/* Product Sections */}
        <div className="mt-16 md:mt-20 lg:mt-24">
          <Productfn Title={t('newarrival')}/>
        </div>
        
        <div className="mt-16 md:mt-20 lg:mt-24">
          <Productfn Title={t('topsell')} />
        </div>

        {/* Category Section */}
        <div className='bg-Gray mx-4 sm:mx-6 md:mx-10 lg:mx-20 mt-16 rounded-3xl py-8 md:py-10 px-4 md:px-6'>
          <h1 className='font-bold text-center text-2xl sm:text-3xl md:text-4xl mb-6 md:mb-8'>{t('categoryTitle')}</h1>
          
          <div className='grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 lg:gap-10'>
            <div className='flex bg-white rounded-2xl cursor-pointer hover:scale-105 duration-200 ease-linear h-40 sm:h-48 md:h-60 lg:h-72 overflow-hidden relative'>
              <h1 className='absolute top-8 left-6 md:left-10 text-xl font-medium z-10'>{t('casual')}</h1>
              <Image src={CASUAL} className='w-full h-full object-cover' alt='CASUAL' />
            </div>
            
            <div className='flex md:col-span-2 bg-white rounded-2xl cursor-pointer hover:scale-105 duration-200 ease-linear h-40 sm:h-48 md:h-60 lg:h-72 overflow-hidden relative'>
              <h1 className='absolute top-8 left-6 md:left-10 text-xl font-medium z-10'>{t('formal')}</h1>
              <Image src={FORMAL} className='w-full h-full object-cover' alt='FORMAL' />
            </div>
            
            <div className='flex bg-white md:col-span-2 rounded-2xl cursor-pointer hover:scale-105 duration-200 ease-linear h-40 sm:h-48 md:h-60 lg:h-72 overflow-hidden relative'>
              <h1 className='absolute top-8 left-6 md:left-10 text-xl font-medium z-10'>{t('party')}</h1>
              <Image src={PARTY} className='w-full h-full object-cover' alt='PARTY' />
            </div>
            
            <div className='flex bg-white rounded-2xl cursor-pointer hover:scale-105 duration-200 ease-linear h-40 sm:h-48 md:h-60 lg:h-72 overflow-hidden relative'>
              <h1 className='absolute top-8 left-6 md:left-10 text-xl font-medium z-10'>{t('gym')}</h1>
              <Image src={GYM} className='w-full h-full object-cover' alt='GYM' />
            </div>
          </div>
        </div>
        
        {/* Reviews Section */}
        <div className='mt-16 md:mt-20 lg:mt-24 px-4 sm:px-6'>
          <h1 className='text-center font-bold text-3xl sm:text-4xl md:text-5xl lg:text-6xl mb-8 md:mb-12'>{t('customerReview')}</h1>
          
          <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-6 justify-items-center'> 
            <div className='border-2 p-4 w-full max-w-xs h-auto min-h-52 rounded-2xl gap-2 flex flex-col'>
              <div className="mb-1">⭐⭐⭐⭐⭐</div>
              <h2 className="font-medium mb-2">Sara M. ✅</h2>
              <p className='text-sm md:text-base'>"I'm blown away by the quality and style of the clothes I received from Shop.co. From casual wear to elegant dresses, every piece I've bought has exceeded my expectations."</p>
            </div>
            
            <div className='border-2 p-4 w-full max-w-xs h-auto min-h-52 rounded-2xl gap-2 flex flex-col'>
              <div className="mb-1">⭐⭐⭐⭐⭐</div>
              <h2 className="font-medium mb-2">Sara M. ✅</h2>
              <p className='text-sm md:text-base'>"I'm blown away by the quality and style of the clothes I received from Shop.co. From casual wear to elegant dresses, every piece I've bought has exceeded my expectations."</p>
            </div>
            
            <div className='border-2 p-4 w-full max-w-xs h-auto min-h-52 rounded-2xl gap-2 flex flex-col'>
              <div className="mb-1">⭐⭐⭐⭐⭐</div>
              <h2 className="font-medium mb-2">Sara M. ✅</h2>
              <p className='text-sm md:text-base'>"I'm blown away by the quality and style of the clothes I received from Shop.co. From casual wear to elegant dresses, every piece I've bought has exceeded my expectations."</p>
            </div>
            
            <div className='border-2 p-4 w-full max-w-xs h-auto min-h-52 rounded-2xl gap-2 flex flex-col'>
              <div className="mb-1">⭐⭐⭐⭐⭐</div>
              <h2 className="font-medium mb-2">Sara M. ✅</h2>
              <p className='text-sm md:text-base'>"I'm blown away by the quality and style of the clothes I received from Shop.co. From casual wear to elegant dresses, every piece I've bought has exceeded my expectations."</p>
            </div>
          </div>
        </div>
        
        {/* Space for Contact Form */}
        <div className="h-64 sm:h-72 md:h-80 lg:h-96"></div>
        
        {/* Footer */}
        <div className="bg-Gray py-8 px-4 relative">
          {/* Contact Section */}
          <div className="absolute -top-40 sm:-top-44 md:-top-48 left-0 right-0 px-4 sm:px-6 md:px-10">
            <Contact />
          </div>
          
          <div className='h-40'></div>
          
          {/* Main Footer Content */}
          <div className="container mx-auto px-4 sm:px-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8 md:gap-10">
              {/* Brand Section */}
              <div className="lg:col-span-2">
                <h1 className="font-extrabold text-2xl md:text-3xl mb-4 md:mb-6">SHOP.CO</h1>
                <p className="font-light text-sm md:text-base max-w-sm mb-6 md:mb-8">
                 {t('footerdescription')}
                </p>
                <div className="flex items-center gap-3 md:gap-4 mb-8 md:mb-10">
                  <button className="p-2 rounded-full hover:bg-gray-100 transition-colors">
                    <Image src={X} width={20} height={20} alt="Github" className="h-5 w-5 md:h-10 md:w-10" />                  </button>
                  <button className="p-2 rounded-full hover:bg-gray-100 transition-colors">
                    <Image src={Facebook} width={20} height={20} alt="Github" className="h-5 w-5 md:h-10 md:w-10" />                  </button>
                  <button className="p-2 rounded-full hover:bg-gray-100 transition-colors">
                    <Image src={Instagram} width={20} height={20} alt="Github" className="h-5 w-5 md:h-10 md:w-10" />                  </button>
                  <button className="p-2 rounded-full hover:bg-gray-100 transition-colors">
                    <Image src={Github} width={20} height={20} alt="Github" className="h-5 w-5 md:h-10 md:w-10" />
                  </button>
                </div>
              </div>

              {/* Quick Links */}
              <div>
                <h2 className="text-lg md:text-xl font-medium mb-4 md:mb-6">{t('footertitle1')}</h2>
                <ul className="space-y-3 md:space-y-4">
                  <li><Link href="/about" className="font-light text-sm md:text-base hover:underline transition-all">{t('about')}</Link></li>
                  <li><Link href="/Features" className="font-light text-sm md:text-base hover:underline transition-all">{t('features')}</Link></li>
                  <li><Link href="/Works" className="font-light text-sm md:text-base hover:underline transition-all">{t('works')}</Link></li>
                  <li><Link href="/Career" className="font-light text-sm md:text-base hover:underline transition-all">{t('career')}</Link></li>
                </ul>
              </div>

              <div>
                <h2 className="text-lg md:text-xl font-medium mb-4 md:mb-6">{t('footertitle2')}</h2>
                <ul className="space-y-3 md:space-y-4">
                  <li><Link href="/Support" className="font-light text-sm md:text-base hover:underline transition-all">{t('customerSupport')}</Link></li>
                  <li><Link href="/Detail" className="font-light text-sm md:text-base hover:underline transition-all">{t('deliverydetails')}</Link></li>
                  <li><Link href="/Terms" className="font-light text-sm md:text-base hover:underline transition-all">{t('terms&conditions')}</Link></li>
                  <li><Link href="/Policy" className="font-light text-sm md:text-base hover:underline transition-all">{t('privacypolicy')}</Link></li>
                </ul>
              </div>

              <div>
                <h2 className="text-lg md:text-xl font-medium mb-4 md:mb-6">{t('footertitle3')}</h2>
                <ul className="space-y-3 md:space-y-4">
                  <li><Link href="/ebook" className="font-light text-sm md:text-base hover:underline transition-all">{t('freeebooks')}</Link></li>
                  <li><Link href="/Detail" className="font-light text-sm md:text-base hover:underline transition-all">{t('developmenttutorial')}</Link></li>
                  <li><Link href="/Blog" className="font-light text-sm md:text-base hover:underline transition-all">{t('howtoblog')}</Link></li>
                  <li><Link href="/Playlist" className="font-light text-sm md:text-base hover:underline transition-all">{t('youtubeplaylist')}</Link></li>
                </ul>
              </div>
            </div>
          </div>

          {/* Copyright Section */}
          <div className="container mx-auto px-4 sm:px-6 mt-10 md:mt-16 pt-6 md:pt-8 border-t border-gray-200">
            <p className="text-center text-xs md:text-sm text-gray-500">
              © {new Date().getFullYear()} {t('copyright')}
            </p>
          </div>
        </div>
     </div>
    </>
  );
}