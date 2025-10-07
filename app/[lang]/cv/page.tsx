import en from "../../../locales/en.json";
import da from "../../../locales/da.json";
import Image from "next/image";
import keaLogo from "../../../assets/kea-logo.svg";
import kvucLogo from "../../../assets/kvuc-logo.svg";
import geoLogo from "../../../assets/geomatic-logo.svg";
import dgkLogo from "../../../assets/dgk.svg";

const dict: Record<string, Record<string, string>> = { en, da };

export function generateStaticParams() {
  return [{ lang: "en" }, { lang: "da" }];
}

export async function generateMetadata({
  params,
}: {
  params: { lang: string };
}) {
  const { lang } = params;
  const t = dict[lang] ?? dict.en;
  return {
    title: t["nav.cv"] ?? "CV",
    description: t["cv.lead"] ?? "CV",
  };
}

export default async function CVPage({ params }: { params: { lang: string } }) {
  const { lang } = await params;
  const t = dict[lang] ?? dict.en;

  return (
    <main className="p-8 sm:p-20">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-3xl font-semibold mb-4">{t["nav.cv"] ?? "CV"}</h1>
        <section>
          <h2 className="md:pt-4 mb-2 text-lg font-medium">
            {t["cv.subtitle1"] ?? "Education"}
          </h2>

          {/* Entry 1 */}
          <article className="md:grid md:grid-cols-[64px_1fr_auto] md:items-center gap-4 py-4 border-b">
            <div className="flex items-start md:items-center">
              <Image
                src={keaLogo}
                alt="KEA logo"
                width={64}
                height={64}
                className="w-16 h-16 object-contain"
              />
            </div>

            <div>
              <h3 className="text-lg font-semibold">
                {t["cv.educationtitlekea"] ??
                  "KEA - Copenhagen School of Design and Technology"}
              </h3>
              <p className="text-sm text-muted-foreground">
                {t["cv.educationdesc1"] ??
                  "Bachelor's Degree in Web Development"}
              </p>
            </div>

            <div className="text-sm text-right text-muted-foreground">
              <time>
                {t["cv.educationdate1"] ?? "August 2023 - January 2025"}
              </time>
            </div>
          </article>

          <article className="md:grid md:grid-cols-[64px_1fr_auto] md:items-center gap-4 py-4 border-b">
            <div className="flex items-start md:items-center">
              <Image
                src={keaLogo}
                alt="KEA logo"
                width={64}
                height={64}
                className="w-16 h-16 object-contain"
              />
            </div>

            <div>
              <h3 className="text-lg font-semibold">
                {t["cv.educationtitlekea"] ??
                  "KEA - Copenhagen School of Design and Technology"}
              </h3>
              <p className="text-sm text-muted-foreground">
                {t["cv.educationdesc2"] ?? "AP Graduate in Multimedia Design"}
              </p>
            </div>

            <div className="text-sm text-right text-muted-foreground">
              <time>{t["cv.educationdate2"] ?? "August 2021 - June 2023"}</time>
            </div>
          </article>

          <article className="md:grid md:grid-cols-[64px_1fr_auto] md:items-center gap-4 py-4">
            <div className="flex items-start md:items-center">
              <Image
                src={kvucLogo}
                alt="KVUC logo"
                width={64}
                height={64}
                className="w-16 h-16 object-contain"
              />
            </div>

            <div>
              <h3 className="text-lg font-semibold">
                {t["cv.educationtitlekvuc"] ?? "KVUC Vognmagergade"}
              </h3>
              <p className="text-sm text-muted-foreground">
                {t["cv.educationdesc3"] ??
                  "Higher Preparatory Examination Programme (HF) - math at B-level and social studies at B-level"}
              </p>
            </div>

            <div className="text-sm text-right text-muted-foreground">
              <time>{t["cv.educationdate3"] ?? "August 2019 - June 2021"}</time>
            </div>
          </article>
        </section>

        <section>
          <h2 className="md:pt-4 mb-2 text-lg font-medium">
            {t["cv.subtitle2"] ?? "Work Experience"}
          </h2>

          <article className="md:grid md:grid-cols-[64px_1fr_auto] md:items-center gap-4 py-4 border-b">
            <div className="flex items-start md:items-center">
              <Image
                src={geoLogo}
                alt="Geomatic Logo"
                width={64}
                height={64}
                className="w-16 h-16 object-contain"
              />
            </div>

            <div>
              <h3 className="text-lg font-semibold">
                {t["cv.worktitlegeo"] ?? "Geomatic A/S"}
              </h3>
              <p className="text-sm text-muted-foreground">
                {t["cv.workdesc1"] ?? "Student Assistant - Web Development"}
              </p>
            </div>

            <div className="text-sm text-right text-muted-foreground">
              <time>{t["cv.workdate1"] ?? "April 2023 - January 2025"}</time>
            </div>
          </article>

          <article className="md:grid md:grid-cols-[64px_1fr_auto] md:items-center gap-4 py-4 border-b">
            <div className="flex items-start md:items-center">
              <Image
                src={geoLogo}
                alt="Geomatic Logo"
                width={64}
                height={64}
                className="w-16 h-16 object-contain"
              />
            </div>

            <div>
              <h3 className="text-lg font-semibold">
                {t["cv.worktitlegeo"] ??
                  "KEA - Copenhagen School of Design and Technology"}
              </h3>
              <p className="text-sm text-muted-foreground">
                {t["cv.workdesc2"] ?? "AP Graduate in Multimedia Design"}
              </p>
            </div>

            <div className="text-sm text-right text-muted-foreground">
              <time>
                {t["cv.workdate2"] ?? "10 weeks, August 2024 - October 2024"}
              </time>
            </div>
          </article>

          <article className="md:grid md:grid-cols-[64px_1fr_auto] md:items-center gap-4 py-4 border-b">
            <div className="flex items-start md:items-center">
              <Image
                src={geoLogo}
                alt="Geomatic Logo"
                width={64}
                height={64}
                className="w-16 h-16 object-contain"
              />
            </div>

            <div>
              <h3 className="text-lg font-semibold">
                {t["cv.worktitlegeo"] ?? "Geomatic A/S"}
              </h3>
              <p className="text-sm text-muted-foreground">
                {t["cv.workdesc3"] ?? "Student Assistant - Web Development"}
              </p>
            </div>

            <div className="text-sm text-right text-muted-foreground">
              <time>
                {t["cv.workdate3"] ?? "10 weeks, January 2023 - April 2023"}
              </time>
            </div>
          </article>

          <article className="md:grid md:grid-cols-[64px_1fr_auto] md:items-center gap-4 py-4">
            <div className="flex items-start md:items-center">
              <Image
                src={dgkLogo}
                alt="Det grønne køkken logo"
                width={64}
                height={64}
                className="w-16 h-16 object-contain"
              />
            </div>

            <div>
              <h3 className="text-lg font-semibold">
                {t["cv.worktitledgk"] ?? "KVUC Vognmagergade"}
              </h3>
              <p className="text-sm text-muted-foreground">
                {t["cv.workdesc4"] ??
                  " Waitress and kitchen assistant at Det Grønne Køkken"}
              </p>
            </div>

            <div className="text-sm text-right text-muted-foreground">
              <time>{t["cv.workdate4"] ?? "February 2019 - August 2019"}</time>
            </div>
          </article>
        </section>
      </div>
    </main>
  );
}
