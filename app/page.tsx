import Image from 'next/image';
import Model from '@/public/Images/Model.svg'
import Versace from '@/public/Images/Versace.svg'
import Zara from '@/public/Images/Zara.svg'
import Gucci from '@/public/Images/Gucci.svg'
import Prada from '@/public/Images/Prada.svg'
import Calvin from '@/public/Images/Calvin Klein.svg'
import Tshirt from '@/public/Images/Clothes.svg'
import { error } from 'console';
export default function Home() {
  const axios = require('axios');

  
// Make a request for a user with a given ID
axios.get('https://fakestoreapi.com/products/1')
  .then( (res: any) => {
    // handle success
    const productId = res.data.id;
    const producttitle = res.data.title;
    const productprice = res.data.price;
    const productRate = res.data.rating.rate;

    console.log(productId);
    console.log(productprice);
    console.log(producttitle);
    console.log(productRate);
  })
  .catch(function (error:any) {
    // handle error
    console.log(error);
  })
  return (
    <>
     <div className=" pt-12 ">
        {/* First Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 items-end justify-between gap-4 md:gap-44 md:pt-24 w-full md:px-10 pt-12 ">
          <div className="text-left grid grid-cols-1  gap-4  px-3">
            <h1 className="font-bold text-3xl md:text-7xl">FIND CLOTHES THAT MATCHES YOUR STYLE</h1>
            <p className="font-light text-xs md:text-base ">Browse through our diverse range of meticulously crafted garments, designed to bring out your individuality and cater to your sense of style.</p>
            <button className="bg-black rounded-full px-4 md:px-7 md:w-44 py-3 text-white ">Shop Now</button>
            <div className="grid grid-cols-2 md:grid-cols-3 items-center justify-center gap-3 text-center pb-32 md:pt-10">
              <div className="border-r-2">
                <h1 className='font-bold text-xl lg:text-4xl'>200+</h1>
                <p>International Brands</p>
              </div>
              <div className='md:border-r-2'>
                <h1 className='font-bold text-xl lg:text-4xl'>2,000+</h1>
                <p>High-Quality Products</p>
              </div>
              <div className="col-span-2 md:col-span-1 col-justify-self-center ">
                <h1 className='font-bold text-xl lg:text-4xl'>30,000+</h1>
                <p>Happy Customers</p>
              </div>
            </div>
          </div>
            <Image src={Model} className='w-full'    alt="Model" />
        </div>
        <div className='bg-black shadow-lg   w-full'>
            <div  className='flex items-center justify-around flex-wrap gap-2 px-3 py-7'>
              <Image src={Versace} alt='Versace' />
              <Image src={Zara} alt='zara' />
              <Image src={Gucci} alt='Gucci' />
              <Image src={Prada} alt='prada' />
              <Image src={Calvin} alt='Calvin Klein' />
            </div>
        </div>
        {/* === First Section === */}
        {/* New Arrivals */}
        <div className='flex flex-col items-center justify-between mt-20 gap-4'>
          <h1 className='text-6xl font-bold'>New Arrivals</h1>
          <div className='grid grid-flow-col  justify-around items-center gap-6 '>
            <div className='flex flex-col items-start justify-between gap-4  '>
              <div className='shadow-md bg-DGray p-10 rounded-3xl'>
                <Image src={Tshirt} alt='Model' />
              </div>
              <h1 className='text-xl font-bold'>VERTICAL STRIPED SHIRT </h1>
              <div className='flex items-center justify-between gap-3'>
                <h1>⭐⭐⭐⭐⭐</h1>
                <h1>5.0/5</h1>
              </div>
              <div className='flex items-center justify-between gap-3'>
                <h1 className='font-bold'>212$</h1>
                <h1 className='line-through text-TGray font-bold'>232$</h1>
                <h1 className='bg-red-100 rounded-full px-4 py-2 text-red-500'>-20%</h1>
              </div>
            </div>
            <div className='flex flex-col items-start justify-between gap-4  '>
              <div className='shadow-md bg-DGray p-10 rounded-3xl'>
                <Image src={Tshirt} alt='Model' />
              </div>
              <h1 className='text-xl font-bold'>VERTICAL STRIPED SHIRT</h1>
              <div className='flex items-center justify-between gap-3'>
                <h1>⭐⭐⭐⭐⭐</h1>
                <h1>5.0/5</h1>
              </div>
              <div className='flex items-center justify-between gap-3'>
                <h1 className='font-bold'>212$</h1>
                <h1 className='line-through text-TGray font-bold'>232$</h1>
                <h1 className='bg-red-100 rounded-full px-4 py-2 text-red-500'>-20%</h1>
              </div>
            </div>
          </div>
        </div>
        {/* === New Arrivals === */}
     </div>
    </>
  );
}
