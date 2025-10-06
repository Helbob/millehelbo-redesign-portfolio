import Header from "../../Components/header";
import type { Metadata } from "next";
import en from "../../locales/en.json";
import da from "../../locales/da.json";

const dictionaries: Record<string, Record<string, string>> = { en, da };

export function generateStaticParams() {
  return [{ lang: "en" }, { lang: "da" }];
}

export async function generateMetadata({
  params,
}: {
  params: { lang: string };
}): Promise<Metadata> {
  const { lang } = await params;
  const t = dictionaries[lang] ?? dictionaries.en;
  return {
    title: t["home.title"],
    description: t["home.lead"],
  };
}

export default async function LocaleLayout({ children, params }: any) {
  const { lang } = await params;
  const t = dictionaries[lang] ?? dictionaries.en;
  return (
    <>
      <Header locale={lang} />
      {children}
    </>
  );
}
