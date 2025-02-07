"use client";
import { useEffect, useState ,useCallback} from "react";
import axios from "axios";
import Image from "next/image";

// Define the Product type
interface Product {
  id: number;
  title: string;
  price: number;
  image: string;
  rating: { rate: number };
}

export default function Productfn({Title='New Arrivals'}) {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let isMounted = true; // Prevent state updates if unmounted
    const fetchProducts = async () => {
      try {
        const res = await axios.get("https://fakestoreapi.com/products");
        if (isMounted) {
          setProducts(res.data);
          setLoading(false);
        }
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

    fetchProducts();
    return () => {
      isMounted = false;
    };
  }, []);

  // Function to generate star ratings
  const renderStars = useCallback((rating: number) => {
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;
    const emptyStars = 5 - fullStars - (hasHalfStar ? 1 : 0);

    return (
      <span>
        {"⭐".repeat(fullStars)}
        {hasHalfStar && "½"}
        {"☆".repeat(emptyStars)}
      </span>
    );
  }, []);

  return (
    <div className="flex flex-col items-center text-center justify-between mt-20 gap-4">
      <h1 className="text-5xl md:text-6xl font-bold">{Title}</h1>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mx-10">
        {loading ? (
          <h1 className="md:text-2xl font-bold">Loading...</h1>
        ) : (
          products.slice(0, 4).map((product) => (
            <div
              key={product.id}
              className="flex flex-col text-center items-center justify-between gap-1 p-4 rounded-xl"
            >
              <div className="shadow-md bg-DGray w-36 h-36 md:w-72 md:h-64 p-12 md:p-4 rounded-3xl flex items-center justify-center">
                <Image
                  src={product.image}
                  width={150}
                  height={150}
                  alt={product.title}
                  className="object-contain"
                />
              </div>
              <h1 className="md:text-xl font-bold">
                {product.title.split(" ").slice(0, 6).join(" ") + (product.title.split(" ").length > 5 ? "..." : "")}
              </h1>

              <div className="flex items-center gap-2 text-xs md:text-base">
                <span>{renderStars(product.rating.rate)}</span>
                <span>{product.rating.rate.toFixed(1)}/5</span>
              </div>
              <div className="flex items-center gap-3">
                <h1 className="text-sm md:text-base font-bold">${product.price.toFixed(2)}</h1>
                <h1 className="text-sm md:text-base line-through text-TGray font-bold">
                  ${(product.price * 1.2).toFixed(2)}
                </h1>
                <h1 className="bg-red-100 rounded-full md:px-4 md:py-2 text-red-500 text-xs md:text-base">
                  -20%
                </h1>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
}