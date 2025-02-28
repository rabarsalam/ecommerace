import { Roboto } from "next/font/google";
import Navbar from "../components/Navbar/navbar";
import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";
import { notFound } from "next/navigation";
import { routing } from "@/src/i18n/routing";
import "../globals.css"; // Use this if your global styles are in `globals.css`


const roboto = Roboto({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-roboto",
  weight: ["100", "300", "400", "500", "700", "900"],
});

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: { locale: string };
}) {
  if (!routing.locales.includes(params.locale as any)) {
    notFound();
  }

  const messages = await getMessages();

  //  text direction
  const direction = ["ar", "ku"].includes(params.locale) ? "rtl" : "ltr";

  // Choose font 
  const fontClass =
    params.locale === "ar" ? "font-fustat" :
    params.locale === "ku" ? "font-beiruti" :
    "font-roboto";

  return (
    <html lang={params.locale} dir={direction}>
      <body className={fontClass}>
        <NextIntlClientProvider messages={messages}>
          <Navbar />
          {children}
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
