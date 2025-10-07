"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { useRouter, usePathname } from "next/navigation";
import en from "../locales/en.json";
import da from "../locales/da.json";
import logo from "../assets/logo-mh2.png";

const dictionaries: Record<string, Record<string, string>> = { en, da };

type HeaderProps = {
  locale?: string;
};

export default function Header({ locale }: HeaderProps) {
  const locales = ["da", "en"];

  const [activeLocale, setActiveLocale] = useState<string | undefined>(locale);
  const [localePaths, setLocalePaths] = useState<Record<string, string>>({
    da: "/da",
    en: "/en",
  });

  const router = useRouter();
  const pathname = usePathname();

  useEffect(() => {
    const path = pathname || window.location.pathname || "/";
    const prefixMatch = path.match(/^\/(en|da)(\/|$)/);
    const rest = prefixMatch ? path.replace(/^\/(en|da)/, "") : path;
    setLocalePaths({ da: `/da${rest}`, en: `/en${rest}` });
    setActiveLocale(locale ?? (prefixMatch ? prefixMatch[1] : undefined));
  }, [locale, pathname]);

  const [menuOpen, setMenuOpen] = useState(false);

  const currentLang = locale ?? activeLocale ?? "en";
  const t = dictionaries[currentLang] ?? dictionaries.en;

  return (
    <header className="w-full py-4">
      <div className="w-full px-6 md:px-16 flex items-center justify-between relative">
        <Link href={locale ? `/${locale}` : "/"}>
          <Image
            src={logo}
            alt="Personal logo"
            width={70}
            height={70}
            priority
          />
        </Link>

        {/* desktop menu */}
        <div className="hidden md:flex items-center gap-5">
          <nav className="flex items-center gap-5">
            <Link
              className="text-sm font-medium hover:underline"
              href={`/${currentLang}/about`}
            >
              {t["nav.about"] ?? "About"}
            </Link>
            <Link
              className="text-sm font-medium hover:underline"
              href={`/${currentLang}/cv`}
            >
              {t["nav.cv"] ?? "CV"}
            </Link>
            <Link
              className="text-sm font-medium hover:underline"
              href={`/${currentLang}/portfolio`}
            >
              {t["nav.portfolio"] ?? "Portfolio"}
            </Link>
            <Link
              className="text-sm font-medium hover:underline"
              href={`/${currentLang}/creative`}
            >
              {t["nav.creative"] ?? "Creative"}
            </Link>
            <Link
              className="text-sm font-medium hover:underline"
              href={`/${currentLang}/references`}
            >
              {t["nav.ref"] ?? "Ref"}
            </Link>
            <Link
              className="text-sm font-medium hover:underline"
              href={`/${currentLang}/contact`}
            >
              {t["nav.contact"] ?? "Contact"}
            </Link>
          </nav>

          {/* Language switcher */}
          <div className="flex items-center gap-2 ml-4">
            {locales.map((l) => {
              const isActive = activeLocale === l || locale === l;
              return (
                <button
                  key={l}
                  onClick={(e) => {
                    e.preventDefault();
                    const path = window.location.pathname || "/";
                    const prefixMatch = path.match(/^\/(en|da)(\/|$)/);
                    const rest = prefixMatch
                      ? path.replace(/^\/(en|da)/, "")
                      : path;
                    const target = `/${l}${rest}`;
                    setActiveLocale(l);
                    router.push(target);
                  }}
                  className={`text-xs font-medium px-2 py-1 rounded ${
                    isActive
                      ? "bg-gray-900 text-white"
                      : "text-gray-600 hover:underline"
                  }`}
                >
                  {l.toUpperCase()}
                </button>
              );
            })}
          </div>
        </div>

        {/* mobile language switcher + burger */}
        <div className="md:hidden flex items-center gap-2">
          <div className="flex items-center gap-2">
            {locales.map((l) => {
              const isActive = activeLocale === l || locale === l;
              return (
                <button
                  key={l}
                  onClick={(e) => {
                    e.preventDefault();
                    const path = window.location.pathname || "/";
                    const prefixMatch = path.match(/^\/(en|da)(\/|$)/);
                    const rest = prefixMatch
                      ? path.replace(/^\/(en|da)/, "")
                      : path;
                    const target = `/${l}${rest}`;
                    setActiveLocale(l);
                    setMenuOpen(false);
                    router.push(target);
                  }}
                  className={`text-xs font-medium px-2 py-1 rounded ${
                    isActive
                      ? "bg-gray-900 text-white"
                      : "text-gray-600 hover:underline"
                  }`}
                >
                  {l.toUpperCase()}
                </button>
              );
            })}
          </div>

          <div className="flex items-center">
            <button
              aria-label="Toggle menu"
              onClick={() => setMenuOpen((s) => !s)}
              className="p-2 rounded hover:bg-zinc-800 dark:hover:bg-zinc-800"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d={
                    menuOpen
                      ? "M6 18L18 6M6 6l12 12"
                      : "M4 6h16M4 12h16M4 18h16"
                  }
                />
              </svg>
            </button>
          </div>
        </div>

        {/* mobile menu popover */}
        {menuOpen && (
          <div className="absolute right-4 top-full mt-2 w-56 bg-zinc-900 dark:bg-zinc-900 rounded-lg shadow-lg p-4 z-50 md:hidden">
            <nav className="flex flex-col gap-3">
              <Link
                onClick={() => setMenuOpen(false)}
                className="text-sm font-medium hover:underline"
                href={`/${currentLang}/about`}
              >
                {t["nav.about"] ?? "About"}
              </Link>
              <Link
                onClick={() => setMenuOpen(false)}
                className="text-sm font-medium hover:underline"
                href={`/${currentLang}/creative`}
              >
                {t["nav.creative"] ?? "Creative"}
              </Link>
              <Link
                onClick={() => setMenuOpen(false)}
                className="text-sm font-medium hover:underline"
                href={`/${currentLang}/work`}
              >
                {t["nav.work"] ?? "Work"}
              </Link>
              <Link
                onClick={() => setMenuOpen(false)}
                className="text-sm font-medium hover:underline"
                href={`/${currentLang}/portfolio`}
              >
                {t["nav.portfolio"] ?? "Portfolio"}
              </Link>
              <Link
                onClick={() => setMenuOpen(false)}
                className="text-sm font-medium hover:underline"
                href={`/${currentLang}/ref`}
              >
                {t["nav.ref"] ?? "Ref"}
              </Link>
              <Link
                onClick={() => setMenuOpen(false)}
                className="text-sm font-medium hover:underline"
                href={`/${currentLang}/contact`}
              >
                {t["nav.contact"] ?? "Contact"}
              </Link>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
