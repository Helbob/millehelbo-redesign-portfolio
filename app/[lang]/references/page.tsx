import en from "../../../locales/en.json";
import da from "../../../locales/da.json";

const dict: Record<string, Record<string, string>> = { en, da };

export function generateStaticParams() {
  return [{ lang: "en" }, { lang: "da" }];
}

export default async function CVPage({ params }: { params: { lang: string } }) {
  const { lang } = await params;
  const t = dict[lang] ?? dict.en;

  return (
    <main className="p-8 sm:p-20">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-3xl font-semibold mb-4">
          {t["nav.references"] ?? "References"}
        </h1>
        <p className="mb-4 pt-2">{t["cv.lead"] ?? "Place holder :D"}</p>
      </div>
    </main>
  );
}
