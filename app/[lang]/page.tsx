import en from "../../locales/en.json";
import da from "../../locales/da.json";
import Image from "next/image";
import zaga from "../../assets/zaga2.png";

const dict: Record<string, Record<string, string>> = { en, da };

export function generateStaticParams() {
  return [{ lang: "en" }, { lang: "da" }];
}

export default async function LocalHome({
  params,
}: {
  params: { lang: string };
}) {
  const { lang } = await params;
  const t = dict[lang] ?? dict.en;

  return (
    <main className="p-8 sm:p-20">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-3xl font-semibold mb-4">{t["home.title"]}</h1>
        <p className="mb-4 pt-2">{t["home.lead"]}</p>
      </div>
      <div>
        <div className="hidden sm:block">
          <div className="fixed right-80 bottom-60 z-40 w-80 h-35 bg-zinc-800 text-white rounded-xl border border-zinc-600 shadow-lg flex items-center justify-center p-4">
            <p className="text-sm text-white text-center italic">
              {t["floating.box"]}
            </p>
          </div>

          <div className="fixed right-0 bottom-0 z-50">
            <Image src={zaga} alt="Floating image" width={400} height={400} />
          </div>
        </div>

        <div className="sm:hidden">
          <div className="fixed right-0 bottom-0 z-50 flex items-end gap-3">
            <div className="w-40 h-40 bg-zinc-800 text-white rounded-lg border border-zinc-600 shadow-md flex items-center justify-center p-2 transform -translate-y-8 z-40">
              <p className="text-xs text-white text-center italic">
                {t["floating.box"]}
              </p>
            </div>

            <div className="w-50 h-50 z-50">
              <Image src={zaga} alt="Floating image" width={200} height={200} />
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
