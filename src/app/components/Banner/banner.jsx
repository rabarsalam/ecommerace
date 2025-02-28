"use client";
import Image from "next/image";
import { motion } from "framer-motion";

// Import your logo images
import Versace from '@/public/Images/Versace.svg'
import Zara from '@/public/Images/Zara.svg'
import Gucci from '@/public/Images/Gucci.svg'
import Prada from '@/public/Images/Prada.svg'
import Calvin from '@/public/Images/Calvin Klein.svg'

export default function Banner() {
  const logos = [Versace, Zara, Gucci, Prada, Calvin];
  
  return (
    <div className="bg-black w-full overflow-hidden py-4 sm:py-6 md:py-8">
      <div className="flex justify-center">
        <motion.div
          className="flex items-center justify-around flex-nowrap gap-4 sm:gap-8 md:gap-12 lg:gap-16"
          initial={{ x: "0%" }}
          animate={{ x: "-100%" }}
          transition={{
            repeat: Infinity,
            ease: "linear",
            duration: 50,
            repeatType: "loop"
          }}
        >
          {[...logos, ...logos, ...logos].map((logo, index) => (
            <div key={index} className="flex-shrink-0 mx-2 sm:mx-4 md:mx-6">
              <Image 
                src={logo} 
                alt="brand-logo" 
                className="w-16 h-auto sm:w-20 md:w-24 lg:w-28"
                width={120} 
                height={60} 
              />
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}