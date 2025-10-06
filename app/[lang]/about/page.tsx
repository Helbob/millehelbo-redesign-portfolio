import en from "../../../locales/en.json";
import da from "../../../locales/da.json";
import mig from "../../../assets/migmigmig.png";
import Image from "next/image";

const dict: Record<string, Record<string, string>> = { en, da };

export function generateStaticParams() {
  return [{ lang: "en" }, { lang: "da" }];
}

export default async function LocalAbout({
  params,
}: {
  params: { lang: string };
}) {
  const { lang } = await params;
  const t = dict[lang] ?? dict.en;
  return (
    <main className="p-8 sm:p-20">
      <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-2 items-start">
        <div className="flex-1 text-left md:col-start-1">
          <h1 className="font-semibold mb-4">{t["about.title"]}</h1>

          {/* Mobile img*/}
          <div className="block md:hidden mt-4 mb-4 w-48 mx-auto">
            <Image
              src={mig}
              alt="Picture of me"
              width={192}
              height={192}
              className="w-48 h-auto rounded-lg object-cover"
            />
          </div>

          <h2 className="md:pt-4 mb-2 text-lg font-medium">
            {t["about.subtitle1"]}
          </h2>
          <div className="flex flex-col gap-4">
            {t["about.text1"] && <p>{t["about.text1"]}</p>}
            {t["about.text2"] && <p>{t["about.text2"]}</p>}
            {t["about.text3"] && <p>{t["about.text3"]}</p>}
            {t["about.text4"] && (
              <p className="md:hidden">{t["about.text4"]}</p>
            )}
          </div>
        </div>

        <div className="hidden md:flex flex-shrink-0 md:items-start md:justify-center md:w-80 lg:w-96 md:col-start-2 md:row-start-1">
          <Image
            src={mig}
            alt="Picture of me"
            width={520}
            height={520}
            className="w-48 sm:w-64 md:w-80 lg:w-96 h-auto rounded-lg object-cover"
          />
        </div>

        <div className="mt-6 md:mt-4 md:col-span-2 space-y-2">
          {t["about.text4"] && (
            <p className="hidden md:block">{t["about.text4"]}</p>
          )}
          <h2 className="pt-6 mb-4 text-lg font-medium">
            {t["about.subtitle2"]}
          </h2>
          <div className="flex flex-col gap-6">
            {t["about.text5"] && <p>{t["about.text5"]}</p>}
            {t["about.text6"] && <p>{t["about.text6"]}</p>}
            {t["about.text7"] && <p>{t["about.text7"]}</p>}
            {t["about.text8"] && <p>{t["about.text8"]}</p>}
          </div>
        </div>
      </div>
    </main>
  );
}
