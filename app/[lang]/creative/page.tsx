import en from "../../../locales/en.json";
import da from "../../../locales/da.json";
import drawing1 from "../../../assets/creative/drawing1.jpg";
import drawing2 from "../../../assets/creative/drawing2.jpg";
import drawing3 from "../../../assets/creative/drawing3.jpg";
import drawing8 from "../../../assets/creative/drawing8.jpg";
import drawing5 from "../../../assets/creative/drawing5.jpg";
import drawing6 from "../../../assets/creative/drawing6.jpg";
import drawing7 from "../../../assets/creative/drawing7.jpg";
import drawing9 from "../../../assets/creative/drawing9.jpg";
import drawing10 from "../../../assets/creative/drawing10.jpg";
import drawing13 from "../../../assets/creative/drawing13.jpg";

const dict: Record<string, Record<string, string>> = { en, da };

export function generateStaticParams() {
  return [{ lang: "en" }, { lang: "da" }];
}

export default async function CreativePage({
  params,
}: {
  params: { lang: string };
}) {
  const { lang } = await params;
  const t = dict[lang] ?? dict.en;

  return (
    <main className="p-8 sm:p-20">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-3xl font-semibold mb-4">
          {t["nav.creative"] ?? "Creative"}
        </h1>
        <p className="mb-4 pt-2">
          {t["creative.lead"] ??
            "A small collection of my drawings and sketches."}
        </p>

        <div className="mt-6">
          <div className="columns-1 sm:columns-2 lg:columns-3 gap-4 mt-6 space-y-4">
            {[
              drawing7,
              drawing1,
              drawing10,
              drawing13,
              drawing8,
              drawing5,
              drawing6,
            ].map((img, i) => (
              <div
                key={i}
                className="break-inside-avoid rounded-md overflow-hidden"
              >
                <img
                  src={(img as any).src ?? (img as any)}
                  alt={t[`creative.imageAlt${i + 1}`] ?? `Drawing ${i + 1}`}
                  className="w-full block rounded-md object-cover"
                  loading={i < 2 ? "eager" : "lazy"}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}
