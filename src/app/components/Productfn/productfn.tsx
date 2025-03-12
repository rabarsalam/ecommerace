"use client";
import { useEffect, useState, useCallback } from "react";
import axios from "axios";
import Image from "next/image";
import {Link} from '@/src/i18n/routing';

interface Product {
  id: number;
  title: string;
  price: number;
  image: string;
  rating: { rate: number };
}

export default function Productfn({ Title = 'New Arrivals' }) {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let isMounted = true; 
    const fetchProducts = async () => {
      try {
        const res = await axios.get("https://fakestoreapi.com/products");
        if (isMounted) {
          setProducts(res.data);
          setLoading(false);
        }
      } catch (error) {
        console.error("Error fetching products:", error);
        if (isMounted) {
          setLoading(false);
        }
      }
    };

    fetchProducts();
    return () => {
      isMounted = false;
    };
  }, []);

  //star ratings
  const renderStars = useCallback((rating: number) => {
    const fullStars = Math.floor(rating);
    const emptyStars = 5 - fullStars;
    return (
      <span className="flex items-center">
        {Array.from({ length: fullStars }).map((_, i) => (
          <span key={`full-${i}`} className="text-yellow-400">⭐</span>
        ))}
        {Array.from({ length: emptyStars }).map((_, i) => (
          <span key={`empty-${i}`} className="text-gray-300">☆</span>
        ))}
      </span>
    );
  }, []);

  return (
    <div className="flex flex-col items-center text-center justify-between gap-6 sm:gap-8 px-4 sm:px-6 md:px-8">
      <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold">{Title}</h1>
      
      {loading ? (
        <div className="flex items-center justify-center w-full py-16">
          <div className="animate-pulse text-xl font-medium">Loading...</div>
        </div>
      ) : (
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6 md:gap-8 w-full max-w-7xl">
          {products.slice(0, 4).map((product) => (
            <Link href={`/Shop/Product/${product.id}`} key={product.id} className="block">
              <div 
                className="flex flex-col items-center justify-between h-full p-3 sm:p-4 rounded-xl border border-transparent hover:border-gray-200 hover:shadow-md transition-all duration-200 ease-in-out"
              >
                <div className="bg-DGray w-full aspect-square rounded-2xl flex items-center justify-center p-4 mb-3 overflow-hidden">
                  <Image
                    src={product.image}
                    width={150}
                    height={150}
                    alt={product.title}
                    className="object-contain mix-blend-multiply max-h-full max-w-full"
                  />
                </div>
                
                <div className="flex flex-col items-center gap-1 sm:gap-2 flex-grow">
                  <h2 className="text-xs sm:text-sm md:text-base font-semibold line-clamp-2 min-h-12 text-center">
                    {product.title}
                  </h2>
                  
                  <div className="flex items-center gap-1 sm:gap-2 text-xs">
                    <div className="hidden sm:flex">{renderStars(product.rating.rate)}</div>
                    <span className="text-xs sm:text-sm">{product.rating.rate.toFixed(1)}/5</span>
                  </div>
                  
                  <div className="flex flex-wrap items-center justify-center gap-1 sm:gap-2 mt-1 sm:mt-2">
                    <h3 className="text-sm md:text-base font-bold">${product.price.toFixed(2)}</h3>
                    <h3 className="text-xs md:text-sm line-through text-TGray font-medium">
                      ${(product.price * 1.2).toFixed(2)}
                    </h3>
                    <span className="bg-red-100 rounded-full px-2 py-1 text-red-500 text-xs whitespace-nowrap">
                      -20%
                    </span>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}