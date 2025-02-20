"use client";
import { useCallback, useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "next/navigation";
import Link from "next/link";
import Image from "next/image";

interface Product {
  id: number;
  title: string;
  price: number;
  image: string;
  rating?: { rate: number };
  category?: string;
  description?: string;
}

export default function ProductShop() {
  const { id } = useParams();
  const productId = Number(id);
  const [product, setProduct] = useState<Product | null>(null);
  const [loading, setLoading] = useState(true);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [quantity,Setquantity]=useState(1);
  useEffect(() => {
    if (!productId) return;

    let isMounted = true;
    const fetchProduct = async () => {
      try {
        const res = await axios.get(`https://fakestoreapi.com/products/${productId}`);
        if (isMounted) {
          setProduct(res.data);
          setSelectedImage(res.data.image ?? "/placeholder.png"); // Set initial image safely
          setLoading(false);
        }
      } catch (error) {
        console.error("Error fetching product:", error);
        setLoading(false);
      }
    };

    fetchProduct();
    return () => {
      isMounted = false;
    };
  }, [productId]);

  const renderStars = useCallback((rating?: number) => {
    const safeRating = rating ?? 0;
    const fullStars = Math.floor(safeRating);
    const emptyStars = 5 - fullStars;

    return (
      <span>
        {"⭐".repeat(fullStars)}
        {"☆".repeat(emptyStars)}
      </span>
    );
  }, []);

  if (loading) {
    return <p className="text-center mt-10">Loading product...</p>;
  }
  function decreaseQuantity(){
    if(quantity >1){
      Setquantity((prev) => prev - 1) 
    }
  }
  function increaseQuantity (){
    Setquantity((prev) => prev + 1)
  }
  return (
    <div className="mt-6 px-2 md:px-16 ">
      {/* Breadcrumb */}
      <div className="flex items-center">
        <Link href="/">Home &gt;</Link>
        <Link href="/Shop">&nbsp; Shop &gt;</Link>
        {product?.category && (
          <Link href={`/Shop/${product.category}`}>&nbsp; {product.category}</Link>
        )}
      </div>

      <div className="flex items-center mt-4 duration-1500 ease-in-out">
        <div className="flex flex-col md:flex-row items-center gap-4">
          {/* Thumbnails */}
          <div className="grid order-2 md:order-1 grid-cols-3 items-center justify-center md:grid-cols-1 gap-2 ">
            {[...Array(3)].map((_, index) => (
              <div
                key={index}
                className="flex items-center justify-center bg-gray-200 p-4 rounded-xl hover:border-2 hover:border-black cursor-pointer duration-100 ease-linear "
                onClick={() => setSelectedImage(product?.image ?? "/placeholder.png")}
              >
                <Image
                  src={product?.image ?? "/placeholder.png"}
                  className="mix-blend-multiply active:scale-150 active:m-8 duration-500 ease-linear transition-all"
                  width={75}
                  height={75}
                  alt={`Thumbnail ${index + 1}`}
                />
              </div>
            ))}
          </div>

          {/* Main Product Image */}
          <div className="bg-gray-200 p-8 rounded-xl  flex justify-center order-1">
            <Image
              id="Main-image"
              src={selectedImage ?? "/placeholder.png"}
              className="mix-blend-multiply lg:active:scale-105 lg:active:mx-72 duration-700 delay-200 ease-linear transition-all"
              width={350}
              height={350}
              alt="Product Image"
            />
          </div>

          {/* Product Details */}
          <div className="grid grid-cols-1 items-start px-8 gap-3 order-3 ">
            <h1 className="text-2xl md:text-4xl font-semibold">{product?.title ?? "Unknown Product"}</h1>
            <div className="flex items-center gap-2 text-xs md:text-base">
              <span>{renderStars(product?.rating?.rate)}</span>
              <span>{(product?.rating?.rate ?? 0).toFixed(1)}/5</span>
            </div>
            <div className="flex items-center gap-3">
              <h1 className="text-sm lg:text-base font-bold">
                ${product?.price?.toFixed(2) ?? "N/A"}
              </h1>
              <h1 className="text-sm lg:text-base line-through text-gray-500 font-bold">
                ${product?.price ? (product.price * 1.2).toFixed(2) : "N/A"}
              </h1>
              <h1 className="bg-red-100 rounded-full lg:px-4 lg:py-2 text-red-500 text-xs lg:text-base">
                -20%
              </h1>
            </div>
            <p className="font-extralight w-72 md:w-104 text-sm text-wrap">
              {product?.description }
            </p>
            <hr />
            <div className="flex items-start flex-col gap-2">
              <h1 className="font-extralight">Select Color</h1>
              <div className="flex items-center gap-2">
                <button className="bg-black rounded-full w-8 h-8 outline-1  focus:outline duration-200 ease-in-out "></button>
                <button className="bg-blue-700 rounded-full w-8 h-8 outline-1  focus:outline duration-200 ease-in-out "></button>
                <button className="bg-gray-700 rounded-full w-8 h-8 outline-1  focus:outline duration-200 ease-in-out "></button>
              </div>
            </div>
            <hr></hr>
            <div className="grid gap-2">
              <h1 className="font-extralight">Choose Size</h1>
              <div className="flex gap-2 selection:bg-black">
                <button className="bg-Gray text-xs md:text-base p-2 md:p-4  rounded-full focus:bg-black focus:text-white  focus-within:shadow-lg">Small</button>
                <button className="bg-Gray text-xs md:text-base p-2 md:p-4 rounded-full focus:bg-black focus:text-white  focus-within:shadow-lg">Medium</button>
                <button className="bg-Gray text-xs md:text-base p-2 md:p-4 rounded-full focus:bg-black focus:text-white  focus-within:shadow-lg">Large</button>
                <button className="bg-Gray text-xs md:text-base p-2 md:p-4 rounded-full focus:bg-black focus:text-white  focus-within:shadow-lg">X-Large</button>
              </div>
            </div>
            <hr></hr>
            <div className="grid grid-cols-3 items-center gap-2 justify-between">
              <div className="py-2 px-4 flex items-center justify-between rounded-full bg-Gray">
                <button onClick={decreaseQuantity}>-</button>
                <h1 >{quantity}</h1>
                <button onClick={increaseQuantity }>+</button>
              </div>
              <button className="bg-black p-2 text-white rounded-full col-span-2">Add to Cart</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
