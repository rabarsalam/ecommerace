"use client";
import { useState , useEffect } from "react";
import { useTranslations } from "next-intl";
import { Menu, MenuButton, MenuItem, MenuItems } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/20/solid";
import { Link } from "@/src/i18n/routing";
import Image from "next/image";
import getDataForNavbar from "./Data";
import Search from '@/public/Images/Search.svg';
import Profile from '@/public/Images/Profile.svg';
import Login from '@/public/Images/login.svg';
import Shop from '@/public/Images/Shop.svg';
import Menus from '@/public/Images/Menu.png';
import { useRouter, usePathname} from "next/navigation";
export default function Navbar() {
  const t = useTranslations("Navbar");
  const router = useRouter();
  const pathname = usePathname();
  const [isMenuOpen, setMenuOpen] = useState(false);
  const [isSearchActive, setSearchActive] = useState(false);
  const [selectedLanguage, setSelectedLanguage] = useState("en"); 
  const DataForNavbar = getDataForNavbar(); 
  const [token, setToken] = useState(null);

  useEffect(() => {
    const getToken = () => {
      const cookies = document.cookie.split("; ");
      const tokenCookie = cookies.find((row) => row.startsWith("token="));
      if (tokenCookie) {
        setToken(tokenCookie.split("=")[1]);
      }
    };
    getToken();
  }, []);
  const handleLogout = () => {
    document.cookie = "token=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
    setToken(null);
    
    const segments = pathname.split("/");
    const languagePrefix = ["en", "ar", "ku"].includes(segments[1]) ? `/${segments[1]}` : "";
    
    router.push(`${languagePrefix}/login`);
    return NextResponse.json({ message: "Logged out successfully" }, { status: 200 });

  };


  function toggleMenu() {
    setMenuOpen(!isMenuOpen);
    if (!isMenuOpen) {
      setSearchActive(false);
    }
  }

  function toggleSearch() {
    setSearchActive(!isSearchActive);
    if (!isSearchActive) {
      setMenuOpen(false);
    }
  }

  const changeLanguage = (locale) => {
    setSelectedLanguage(locale);
    
    const segments = pathname.split("/");
    
    if (["en", "ar", "ku"].includes(segments[1])) {
      segments[1] = locale;
      router.push(segments.join("/"));
    } else {
      router.push(`/${locale}${pathname}`);
    }
  };

  return (
    <div className="pb-16">
      <nav className="flex flex-wrap items-center justify-between p-6 border-b-2 fixed top-0 left-0 right-0 bg-white w-full z-40 shadow-sm">
        <div className="flex items-center justify-between w-full md:w-auto">
          <div className="flex items-center gap-3">
            <button 
              onClick={toggleMenu} 
              className="flex md:hidden"
              aria-label="Toggle menu"
            >
              <Image src={Menus} width={24} height={24} alt="Menu" className="w-6 h-6" />
            </button>
            <Link className="font-bold text-sm sm:text-lg md:text-xl" href="/">
              SHOP.CO
            </Link>
          </div>
          
          <div className="flex md:hidden items-center gap-3">
            <button onClick={toggleSearch} aria-label="Search">
              <Image src={Search} alt="Search" width={24} height={24} className="w-6 h-6" />
            </button>
            <Link href="/Cart" aria-label="Cart">
              <Image src={Shop} alt="Shop" width={24} height={24} className="w-6 h-6 transition duration-200 hover:scale-110" />
            </Link>
            {
            token != null ? "" :           <Link href="/login" aria-label="Profile">
            <Image src={Login} alt="Profile" width={24} height={24} className="transition duration-200 hover:scale-110" />
          </Link> 
          }
            {token && (
            <button onClick={handleLogout} className="bg-red-500 text-white px-3 py-2 rounded-md">{t('logout')}</button>
          )}
          </div>
        </div>

        {/* Mobile Search Input */}
        {isSearchActive && (
          <div className="w-full mt-2 md:hidden">
            <div className="relative">
              <input
                placeholder={t('search')}
                aria-label="Search"
                type="text"
                className="w-full py-2 px-4 pl-10 rounded-full bg-gray-100 outline-none"
              />
              <Image src={Search} alt="Search Icon" width={20} height={20} className="absolute left-3 top-1/2 transform -translate-y-1/2" />
            </div>
          </div>
        )}

        {/* Navigation Menu */}
        <div className={`${isMenuOpen ? "block" : "hidden"} md:block w-full md:w-auto mt-2 md:mt-0`}>
          <ul className="flex flex-col md:flex-row gap-4 items-center">
            {DataForNavbar.map((list) => (
              <li key={list.Id}>
                <Link className="block py-2 md:py-0 font-light text-sm md:text-base hover:text-gray-600 transition duration-200" href={`/${list.Url}`}>
                  {list.Title}
                </Link>
              </li>
            ))}

            <li className="mt-2 md:mt-0 md:ml-4">
              <Menu as="div" className="relative inline-block text-left">
                <MenuButton className="inline-flex justify-center gap-x-1.5 rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50">
                  {t("Language")}
                  <ChevronDownIcon aria-hidden="true" className="-mr-1 size-5 text-gray-400" />
                </MenuButton>
                <MenuItems
                  transition
                  className="absolute right-0 z-50 mt-2 w-56 origin-top-right rounded-md bg-white ring-1 shadow-lg ring-black/5 transition focus:outline-hidden"
                >
                  <div className="py-1">
                    <MenuItem>
                      <button
                        className={`block w-full text-left px-4 py-2 text-sm ${selectedLanguage === "en" ? "font-bold bg-gray-100" : "text-gray-700"}`}
                        onClick={() => changeLanguage("en")}
                      >
                        {t("English")}
                      </button>
                    </MenuItem>
                    <MenuItem>
                      <button
                        className={`block w-full text-left px-4 py-2 text-sm ${selectedLanguage === "ar" ? "font-bold bg-gray-100" : "text-gray-700"}`}
                        onClick={() => changeLanguage("ar")}
                      >
                        {t("Arabic")}
                      </button>
                    </MenuItem>
                    <MenuItem>
                      <button
                        className={`block w-full text-left px-4 py-2 text-sm ${selectedLanguage === "ku" ? "font-bold bg-gray-100" : "text-gray-700"}`}
                        onClick={() => changeLanguage("ku")}
                      >
                        {t("kurdish")}
                      </button>
                    </MenuItem>
                  </div>
                </MenuItems>
              </Menu>
            </li>
          </ul>
        </div>

        {/* Desktop Search and Icons */}
        <div className="hidden md:flex items-center gap-x-5 w-auto">
          <div className="relative">
            <input
              placeholder={t('search')}
              aria-label="Search"
              type="text"
              className="py-2 px-4 pl-10 bg-gray-100 rounded-full outline-none w-36 lg:w-64 xl:w-80"
            />
            <Image src={Search} alt="Search" width={20} height={20} className="absolute left-3 top-1/2 transform -translate-y-1/2" />
          </div>
          <Link href="/Cart" aria-label="Cart">
            <Image src={Shop} alt="Shop" width={24} height={24} className="transition duration-200 hover:scale-110" />
          </Link>
          {
            token != null ? "" :           <Link href="/login" aria-label="Profile">
            <Image src={Login} alt="Profile" width={24} height={24} className="transition duration-200 hover:scale-110" />
          </Link> 
          }

          {token && (
            <button onClick={handleLogout} className="bg-red-500 text-white px-3 py-2 rounded-md">{t('logout')}</button>
          )}
          {token && (
            <Link href="/account" aria-label="Account">
            <Image src={Profile} alt="Account" width={24} height={24} className="transition duration-200 hover:scale-110" />
          </Link> 
          )}
        </div>

      </nav>
    </div>
  );
}
