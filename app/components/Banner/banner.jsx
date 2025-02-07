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
    <div className="bg-black shadow-lg w-full overflow-hidden">
      <motion.div
        className="flex items-center justify-around flex-nowrap px-3 py-7 gap-6"
        initial={{ x: "0%" }}
        animate={{ x: "-100%" }}
        transition={{
          repeat: Infinity,
          ease: "linear",
          duration: 50, 
        }}
      >
        {[ ...logos].map((logo, index) => (
          <Image key={index} src={logo} alt="brand-logo" width={100} height={50} />
        ))}
      </motion.div>
      
    </div>
  );
}
