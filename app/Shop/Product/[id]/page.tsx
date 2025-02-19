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

  return (
    <div className="mt-10 px-16">
      {/* Breadcrumb */}
      <div className="flex items-center">
        <Link href="/">Home &gt;</Link>
        <Link href="/Shop">&nbsp; Shop &gt;</Link>
        {product?.category && (
          <Link href={`/Shop/${product.category}`}>&nbsp; {product.category}</Link>
        )}
      </div>

      <div className="flex items-center mt-8">
        <div className="flex items-center gap-4">
          {/* Thumbnails */}
          <div className="grid grid-cols-1 gap-2">
            {[...Array(3)].map((_, index) => (
              <div
                key={index}
                className="bg-gray-200 p-4 rounded-xl hover:border-2 hover:border-black cursor-pointer"
                onClick={() => setSelectedImage(product?.image ?? "/placeholder.png")}
              >
                <Image
                  src={product?.image ?? "/placeholder.png"}
                  className="mix-blend-multiply"
                  width={75}
                  height={75}
                  alt={`Thumbnail ${index + 1}`}
                />
              </div>
            ))}
          </div>

          {/* Main Product Image */}
          <div className="bg-gray-200 p-10 rounded-xl">
            <Image
              id="Main-image"
              src={selectedImage ?? "/placeholder.png"}
              className="mix-blend-multiply"
              width={385}
              height={385}
              alt="Product Image"
            />
          </div>

          {/* Product Details */}
          <div className="grid grid-cols-1 items-start px-8 gap-3">
            <h1 className="text-xl font-semibold">{product?.title ?? "Unknown Product"}</h1>
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
            <p>
              {product?.title
                ? product.title.split(" ").slice(0, 9).join(" ") +
                  (product.description && product.description.split(" ").length > 5 ? "..." : "")
                : "No description available"}
            </p>
            <hr />
          </div>
        </div>
      </div>
    </div>
  );
}
