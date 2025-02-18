"use client"; // ✅ أضف هذا السطر لأن الكود يحتوي على useEffect
import { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "next/navigation"; // ✅ استخدم useParams بدلاً من useRouter
import Link from "next/link";

interface Product {
  id: number;
  title: string;
  price: number;
  image: string;
  rating: { rate: number };
  category: string;
}

export default function ProductShop() {
  const { id } = useParams(); // ✅ الحصول على id بالطريقة الصحيحة
  const [product, setProduct] = useState<Product | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!id) return; // لا تقم بجلب البيانات إذا لم يكن هناك `id`

    let isMounted = true;
    const fetchProduct = async () => {
      try {
        const res = await axios.get(`https://fakestoreapi.com/products/${id}`);
        if (isMounted) {
          setProduct(res.data);
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
  }, [id]); // ✅ استخدم id بدلاً من userid

  return (
    <>
    <div className="mt-10">
      <div className="flex items-center px-8">
          <Link href='/' className="">Home&nbsp;  &gt;</Link>
          <Link href='/Shop' className="">&nbsp; Shop &nbsp; &gt;</Link>
          <Link href='/Men' className="">&nbsp; {product?.category} </Link>
      </div>
      
    </div>
    </>
  );
}
