"use client"
import Image from "next/image";
import google from '@/public/Images/google.svg';
import { useTranslations } from 'next-intl';
import { Link } from '@/src/i18n/routing';
import { useState } from "react";
import axios from "axios";
export default function Page() {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [phone, setPhone] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(""); 

  const t = useTranslations('RegisterPage');
  const baseUrl = "http://localhost:8080/https://peaceful-tapioca-967709.netlify.app/";

  const params = {
    "email": email,
    "password": password,
    "confirmPassword": confirmPassword,
    "fullName": fullName,
    "phone": phone
  };

  
  function handleRegister() {
    setError(""); 
    setSuccess(""); 

    if (password !== confirmPassword) {
      setError("Passwords do not match");
      return;
    }

    axios.post(`${baseUrl}api/auth/createuser`, params, {
      headers: {
        "Content-Type": "application/json"
      }
    })
      .then(function (response) {
        setSuccess("User created successfully");
        const locale = window.location.pathname.split("/")[1]; 
        window.location.href = `/${locale}/login`;
      })
      .catch(function (error) {
        if (error.response && error.response.data.error) {
          setError(error.response.data.error);
        } else {
          setError("An error occurred. Please try again.");
        }
        console.log(error);
      });
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="w-full max-w-md p-8 space-y-8 bg-white rounded-xl shadow-lg">
        {/* Header */}
        <div className="text-center">
          <h1 className="text-2xl sm:text-3xl font-extrabold mb-2">{t('title')}</h1>
          <p className="text-sm sm:text-base font-extralight text-gray-600">{t('detail')}</p>
        </div>
        
        {/* Error and Success Messages */}
        {error && <div className="text-red-600 text-center mb-4">{error}</div>}
        {success && <div className="text-green-600 text-center mb-4">{success}</div>}

        {/* Form */}
        <div className="space-y-6">
          {/* Full Name Field */}
          <div className="space-y-1">
            <label className="text-sm sm:text-base font-medium">{t('fullName')}</label>
            <input
              onChange={(e) => setFullName(e.target.value)}
              placeholder={t('fullName')}
              type="text"
              className="w-full outline-none border-2 p-2 rounded-md text-sm sm:text-base"
            />
          </div>

          {/* Phone Number Field */}
          <div className="space-y-1">
            <label className="text-sm sm:text-base font-medium">{t('phone')}</label>
            <input
              onChange={(e) => setPhone(e.target.value)}
              placeholder={t('phone')}
              type="tel"
              className="w-full outline-none border-2 p-2 rounded-md text-sm sm:text-base"
            />
          </div>

          {/* Email Field */}
          <div className="space-y-1">
            <label className="text-sm sm:text-base font-medium">{t('email')}</label>
            <input
              onChange={(e) => setEmail(e.target.value)}
              placeholder={t('email')}
              type="email"
              className="w-full outline-none border-2 p-2 rounded-md invalid:border-pink-500 invalid:text-pink-600 text-sm sm:text-base"
            />
          </div>

          {/* Password Field */}
          <div className="space-y-1">
            <label className="text-sm sm:text-base font-medium">{t('pass')}</label>
            <input
              onChange={(e) => setPassword(e.target.value)}
              placeholder={t('pass')}
              type="password"
              className="w-full outline-none border-2 p-2 rounded-md text-sm sm:text-base"
            />
          </div>

          {/* Confirm Password Field */}
          <div className="space-y-1">
            <label className="text-sm sm:text-base font-medium">{t('confirmPass')}</label>
            <input
              onChange={(e) => setConfirmPassword(e.target.value)}
              placeholder={t('confirmPass')}
              type="password"
              className="w-full outline-none border-2 p-2 rounded-md text-sm sm:text-base"
            />
          </div>

          {/* Terms & Conditions */}
          <div className="flex items-center gap-2">
            <input type="checkbox" id="terms" className="h-4 w-4" />
            <label htmlFor="terms" className="text-xs sm:text-sm">{t('terms')}</label>
          </div>

          {/* Sign Up Button */}
          <button
            onClick={handleRegister}
            type="submit"
            className="w-full bg-black text-white p-2 sm:p-3 rounded-md text-sm sm:text-base hover:bg-gray-800 transition-colors">
            {t('register')}
          </button>

          {/* Divider */}
          <div className="flex items-center my-4">
            <div className="flex-grow border-t border-gray-300"></div>
            <span className="px-3 text-xs sm:text-sm text-gray-500">{t('or')}</span>
            <div className="flex-grow border-t border-gray-300"></div>
          </div>

          {/* Google Sign Up */}
          <button className="w-full flex items-center justify-center gap-3 border-2 rounded-md p-3 hover:bg-gray-50 transition-colors">
            <Image src={google} width={20} height={20} alt="google" />
            <span className="text-sm sm:text-base">{t('google')}</span>
          </button>

          {/* Sign In Link */}
          <div className="flex items-center gap-1 justify-center text-xs sm:text-sm pt-2">
            <p>{t('alreadyAccount')}</p>
            <Link href='/login' className="">
              <button className="text-blue-700 hover:underline font-medium">{t('signIn')}</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
