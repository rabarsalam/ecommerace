import React from 'react'
import Image from 'next/image'
import emailIcon from '@/public/Images/EmailIcon.svg'
export default function Contact() {
  return (
    <>
    <div className='bg-black flex flex-col md:flex-row gap-6 items-center justify-between mx-4 p-5 md:mx-12 rounded-3xl md:p-12 mt-16'>
        <div >
            <h1 className='text-4xl xl:text-6xl  text-white font-bold ' >STAY UPTO DATE ABOUT <br/>OUR LATEST OFFERS</h1>
        </div>
        <div className='grid gap-3'>
            <div className='flex items-center justify-start rounded-full px-12  md:px-16 py-3 bg-white relative'>
                <Image src={emailIcon} width={25} height={25} alt='Email' className='absolute left-4'/>
                <input placeholder='Enter Your email address' type='email' className='outline-none object-cover  rounded-full '/>
            </div>
            <button className='rounded-full  py-3 bg-white' type='submit'>
                Subscribe to Newsletter
            </button>
        </div>
    </div>
    </>
  )
}
