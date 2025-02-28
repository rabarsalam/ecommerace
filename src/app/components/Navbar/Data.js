import { useTranslations } from "next-intl";

export default function getDataForNavbar(locale) {
  const t = useTranslations("Navbar");

  return [
    { Id: 1, Title: t("shop"), Url: "Shop" },
    { Id: 2, Title: t("onSale"), Url: "" },
    { Id: 3, Title: t("newArrivals"), Url: "Contact" },
    { Id: 4, Title: t("brands"), Url: "About" },
  ];
}
