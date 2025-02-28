"use client";
import { useCallback, useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { useTranslations } from "next-intl";

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
  const t = useTranslations("ProductPage");
  const { id } = useParams();
  const productId = Number(id);
  const [product, setProduct] = useState<Product | null>(null);
  const [loading, setLoading] = useState(true);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [quantity, setQuantity] = useState(1);
  const [selectedSize, setSelectedSize] = useState<string>(""); // State for size selection

  useEffect(() => {
    if (!productId) return;
    let isMounted = true;
    const fetchProduct = async () => {
      try {
        const res = await axios.get(`https://fakestoreapi.com/products/${productId}`);
        if (isMounted) {
          setProduct(res.data);
          setSelectedImage(res.data.image ?? "/placeholder.png");
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
      <span className="text-yellow-500">
        {"⭐".repeat(fullStars)}
        {"☆".repeat(emptyStars)}
      </span>
    );
  }, []);

  if (loading) {
    return <p className="text-center mt-10">{t("loading")}...</p>;
  }

  function decreaseQuantity() {
    if (quantity > 1) {
      setQuantity((prev) => prev - 1);
    }
  }
  function increaseQuantity() {
    setQuantity((prev) => prev + 1);
  }

  const sizes = ["small", "medium", "large", "xlarge"];

  return (
    <div className="mt-10 px-4 md:px-16">
      {/* Breadcrumb */}
      <div className="flex flex-wrap items-center text-sm text-gray-600 mb-4">
        <Link href="/">{t("home")} &gt;</Link>
        <Link href="/Shop" className="ml-1">
          {t("shop")} &gt;
        </Link>
        {product?.category && (
          <Link href={`/Shop/${product.category}`} className="ml-1">
            {product.category}
          </Link>
        )}
      </div>

      <div className="flex flex-col md:flex-row gap-6">
        {/* Thumbnails */}
        <div className="order-2 flex md:flex-col gap-2 justify-center md:order-1">
          {[...Array(3)].map((_, index) => (
            <div
              key={index}
              className="w-16 h-16 md:w-20 md:h-20 bg-gray-200 p-1 rounded-xl cursor-pointer hover:border-2 hover:border-black transition-all"
              onClick={() => setSelectedImage(product?.image ?? "/placeholder.png")}
            >
              <Image
                src={product?.image ?? "/placeholder.png"}
                alt={`Thumbnail ${index + 1}`}
                width={75}
                height={75}
                className="object-contain w-full h-full mix-blend-multiply"
              />
            </div>
          ))}
        </div>

        {/* Main Product Image */}
        <div className="bg-gray-200 p-4 rounded-xl flex justify-center items-center  order-1 md:order-2">
          <Image
            src={selectedImage ?? "/placeholder.png"}
            alt="Product Image"
            width={350}
            height={350}
            className="object-contain transition-transform duration-700 ease-linear hover:scale-105 mix-blend-multiply"
          />
        </div>

        {/* Product Details */}
        <div className="order-3 flex-1 flex flex-col gap-4">
          <h1 className="text-2xl md:text-4xl font-semibold">
            {product?.title ?? "Unknown Product"}
          </h1>
          <div className="flex items-center gap-2 text-sm md:text-base">
            {renderStars(product?.rating?.rate)}
            <span className="text-gray-600">{(product?.rating?.rate ?? 0).toFixed(1)}/5</span>
          </div>
          <div className="flex items-center gap-3">
            <span className="text-xl md:text-2xl font-bold text-black">
              ${product?.price?.toFixed(2) ?? "N/A"}
            </span>
            <span className="text-sm md:text-base line-through text-gray-500">
              ${product?.price ? (product.price * 1.2).toFixed(2) : "N/A"}
            </span>
            <span className="bg-red-100 text-red-500 rounded-full px-2 py-1 text-xs md:text-base">
              -20%
            </span>
          </div>
          <p className="text-gray-700 text-sm md:text-base">{product?.description}</p>

          <hr className="border-gray-300" />

          <div className="flex flex-col gap-2">
            <span className="text-gray-600 text-sm">{t("selectcolor")}</span>
            <div className="flex gap-2">
              <button className="w-8 h-8 rounded-full bg-black focus:outline-none focus:ring-2 focus:ring-gray-400"></button>
              <button className="w-8 h-8 rounded-full bg-blue-700 focus:outline-none focus:ring-2 focus:ring-gray-400"></button>
              <button className="w-8 h-8 rounded-full bg-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-400"></button>
            </div>
          </div>

          <hr className="border-gray-300" />

          <div className="flex flex-col gap-2">
            <span className="text-gray-600 text-sm">{t("size")}</span>
            <div className="flex flex-wrap gap-2">
              {sizes.map((size) => (
                <button
                  key={size}
                  onClick={() => setSelectedSize(size)}
                  className={`px-4 py-2 text-xs md:text-base rounded-full transition-colors 
                    ${
                      selectedSize === size
                        ? "bg-black text-white"
                        : "bg-gray-200 text-black hover:bg-black hover:text-white"
                    }`}
                >
                  {t(size)}
                </button>
              ))}
            </div>
          </div>

          <hr className="border-gray-300" />

          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-2 bg-gray-200 rounded-full px-3 py-1">
                <button onClick={decreaseQuantity} className="text-lg font-bold">
                  -
                </button>
                <span className="text-lg">{quantity}</span>
                <button onClick={increaseQuantity} className="text-lg font-bold">
                  +
                </button>
              </div>
              <button className="flex-1 bg-black text-white rounded-full py-2 hover:bg-gray-800 transition-colors">
                {t("add")}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
