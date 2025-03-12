"use client";
import Image from "next/image";
import google from "@/public/Images/google.svg";
import background from "@/public/Images/shopping.jpg";
import { useTranslations } from "next-intl";
import { Link } from "@/src/i18n/routing";
import { useState } from "react";
import axios from "axios";
import { useRouter } from "next/navigation";
import Cookies from "js-cookie";

export default function Page() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const t = useTranslations("SignPage");
  const router = useRouter();
  
  const baseUrl = process.env.NODE_ENV === 'production'
  ? "https://peaceful-tapioca-967709.netlify.app/"
  : "http://localhost:8080/https://peaceful-tapioca-967709.netlify.app/";

  async function fetchdata() {
    setError(null);
    setLoading(true);

    try {
      const response = await axios.post(`${baseUrl}api/auth/signin`, {
        email,
        password,
      });

      const token = response.data?.token;
      if (token) {
        Cookies.set("token", token, { expires: 7 }); 
        window.location.href = "/";
      } else {
        setError("Invalid credentials. Please try again.");
      }
    } catch (err) {
      setError(err.response?.data?.message || `${t('loginfailed')}`);
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="min-h-screen flex flex-col md:flex-row">
      {/* Login Form Section */}
      <div className="w-full md:w-1/2 flex flex-col p-4 sm:p-8 lg:p-12 xl:p-16">
        <div className="max-w-md mx-auto w-full flex flex-col justify-center gap-6 my-auto">
          {/* Header */}
          <div className="mb-4">
            <h1 className="text-2xl sm:text-3xl font-extrabold mb-1">
              {t("title")}
            </h1>
            <p className="text-sm sm:text-base font-extralight text-gray-600">
              {t("detail")}
            </p>
          </div>

          {/* Error Message */}
          {error && <p className="text-red-500">{error}</p>}

          {/* Form */}
          <div className="space-y-5">
            {/* Google Sign In */}
            <button className="w-full flex items-center justify-center gap-3 border-2 rounded-md p-3 hover:bg-gray-50 transition-colors">
              <Image src={google} width={20} height={20} alt="google" />
              <span className="text-sm sm:text-base">{t("google")}</span>
            </button>

            {/* Divider */}
            <div className="flex items-center my-4">
              <div className="flex-grow border-t border-gray-300"></div>
              <span className="px-3 text-xs sm:text-sm text-gray-500">
                {t("or")}
              </span>
              <div className="flex-grow border-t border-gray-300"></div>
            </div>

            {/* Email Field */}
            <div className="space-y-1">
              <label className="text-sm sm:text-base font-medium">
                {t("email")}
              </label>
              <input
                onChange={(e) => setEmail(e.target.value)}
                value={email}
                placeholder={t("email")}
                type="email"
                className="w-full outline-none border-2 p-2 rounded-md invalid:border-pink-500 invalid:text-pink-600 text-sm sm:text-base"
              />
            </div>

            {/* Password Field */}
            <div className="space-y-1">
              <label className="text-sm sm:text-base font-medium">
                {t("pass")}
              </label>
              <input
                onChange={(e) => setPassword(e.target.value)}
                value={password}
                placeholder={t("pass")}
                type="password"
                className="w-full outline-none border-2 p-2 rounded-md text-sm sm:text-base"
              />
            </div>

            {/* Remember & Forgot */}
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <input type="checkbox" id="remember" className="h-4 w-4" />
                <label htmlFor="remember" className="text-xs sm:text-sm">
                  {t("remember")}
                </label>
              </div>
              <button className="text-blue-700 text-xs sm:text-sm hover:underline">
                {t("forget")}
              </button>
            </div>

            {/* Sign In Button */}
            <button
              onClick={fetchdata}
              disabled={loading}
              className="w-full bg-black text-white p-2 sm:p-3 rounded-md text-sm sm:text-base hover:bg-gray-800 transition-colors disabled:opacity-50"
            >
              {loading ? "Signing In..." : t("sign")}
            </button>

            {/* Sign Up Link */}
            <div className="flex items-center gap-1 justify-center text-xs sm:text-sm pt-2">
              <p>{t("haveaccount")}</p>
              <Link href="/register">
                <button className="text-blue-700 hover:underline font-medium">
                  {t("register")}
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Image Section */}
      <div className="hidden md:block md:w-1/2 relative">
        <Image
          src={background}
          alt="Shopping background"
          className="object-cover h-full max-h-[700px]"
          priority
          sizes="(max-width: 768px) 0vw, 50vw"
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
            objectPosition: "center",
            maxHeight: "700",
          }}
        />
      </div>
    </div>
  );
}
