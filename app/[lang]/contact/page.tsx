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
          {t["title.contact"] ?? "Contact"}
        </h1>
        <p className="mb-4 pt-2">{t["contact.text1"] ?? "Place holder :D"}</p>

        <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-4">
          <a
            href={t["contact.githubUrl"] ?? "https://github.com/Helbob"}
            target="_blank"
            rel="noopener noreferrer"
            className="block bg-zinc-800 text-white rounded-lg md:rounded-xl border border-zinc-600 shadow-md md:shadow-lg p-4 hover:shadow-xl transition-shadow"
            aria-label="GitHub"
          >
            <div className="flex items-center gap-3">
              <div className="flex-shrink-0">
                <svg
                  className="w-12 h-12 text-white"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  aria-hidden
                >
                  <path d="M12 .5C5.73.5.75 5.47.75 11.74c0 4.9 3.175 9.06 7.58 10.53.555.1.76-.24.76-.53 0-.26-.01-1.12-.015-2.03-3.08.67-3.73-1.48-3.73-1.48-.505-1.285-1.235-1.627-1.235-1.627-1.01-.69.078-.68.078-.68 1.115.08 1.702 1.145 1.702 1.145.993 1.7 2.605 1.21 3.24.925.1-.72.39-1.21.71-1.49-2.46-.28-5.04-1.23-5.04-5.47 0-1.21.435-2.2 1.145-2.975-.115-.28-.5-1.41.11-2.94 0 0 .93-.3 3.05 1.14a10.6 10.6 0 012.78-.375c.945.005 1.9.13 2.78.375 2.12-1.44 3.05-1.14 3.05-1.14.61 1.53.225 2.66.11 2.94.715.775 1.145 1.77 1.145 2.975 0 4.25-2.585 5.185-5.05 5.46.4.345.755 1.02.755 2.06 0 1.49-.015 2.69-.015 3.06 0 .295.2.645.765.535 4.405-1.475 7.58-5.64 7.58-10.54C23.25 5.47 18.27.5 12 .5z" />
                </svg>
              </div>
              <div>
                <h3 className="font-semibold">
                  {t["contact.githubLabel"] ?? "GitHub"}
                </h3>
                <p className="text-sm text-white/90">
                  {t["contact.githubText"] ?? "View my projects"}
                </p>
              </div>
            </div>
          </a>

          <a
            href={t["contact.emailUrl"] ?? "mailto:millehelbo@outlook.dk"}
            className="block bg-zinc-800 text-white rounded-lg md:rounded-xl border border-zinc-600 shadow-md md:shadow-lg p-4 hover:shadow-xl transition-shadow"
            aria-label="Email"
          >
            <div className="flex items-center gap-3">
              <div className="flex-shrink-0">
                <svg
                  className="w-12 h-12 text-white"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  aria-hidden
                >
                  <path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4-8 5L4 8V6l8 5 8-5v2z" />
                </svg>
              </div>
              <div>
                <h3 className="font-semibold">
                  {t["contact.emailLabel"] ?? "Email"}
                </h3>
                <p className="text-sm text-white/90">
                  {t["contact.emailText"] ?? "Send me an email"}
                </p>
              </div>
            </div>
          </a>

          <a
            href={
              t["contact.linkedinUrl"] ??
              "https://www.linkedin.com/in/mille-helbo-a40329178/"
            }
            target="_blank"
            rel="noopener noreferrer"
            className="block bg-zinc-800 text-white rounded-lg md:rounded-xl border border-zinc-600 shadow-md md:shadow-lg p-4 hover:shadow-xl transition-shadow"
            aria-label="LinkedIn"
          >
            <div className="flex items-center gap-3">
              <div className="flex-shrink-0">
                <svg
                  className="w-12 h-12 text-white"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  aria-hidden
                >
                  <path d="M4.98 3.5C4.98 4.88 3.9 6 2.5 6S0 4.88 0 3.5 1.08 1 2.5 1s2.48 1.12 2.48 2.5zM.5 8h4v12h-4V8zm7 0h3.75v1.7h.05c.52-.98 1.8-2 3.7-2 4 0 4.75 2.64 4.75 6.07V20h-4V13.5c0-1.53-.03-3.5-2.13-3.5-2.13 0-2.46 1.66-2.46 3.4V20h-4V8z" />
                </svg>
              </div>
              <div>
                <h3 className="font-semibold">
                  {t["contact.linkedinLabel"] ?? "LinkedIn"}
                </h3>
                <p className="text-sm text-white/90">
                  {t["contact.linkedinText"] ?? "Connect with me"}
                </p>
              </div>
            </div>
          </a>
        </div>
      </div>
    </main>
  );
}
