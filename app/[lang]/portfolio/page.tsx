import en from "../../../locales/en.json";
import da from "../../../locales/da.json";
import ProjectCard from "../../../Components/project-card";
import crestProject from "../../../assets/projects/crest-calc2.png";
import crestModal from "../../../assets/projects/crest-modal.png";
import fitboksProject from "../../../assets/projects/fitboks.png";
import fitboksStyletile from "../../../assets/projects/fitboks/Styletile.png";
import fitboksGithub from "../../../assets/projects/fitboks/github.png";
import clinicvonhuthProject from "../../../assets/projects/clinic-von-huth.png";
import clinicvonhuthFacade from "../../../assets/projects/clinicvonhuth-facde.jpg";
import foodDeliveryAppProject from "../../../assets/projects/fooddeliverycrop.png";
import foodDeliveryAppProfile from "../../../assets/projects/foodapp/foodappprofile.png";
import foodDeliveryAppWireframes from "../../../assets/projects/foodapp/wireframes.png";

import { title } from "process";

const dict: Record<string, Record<string, string>> = { en, da };

export function generateStaticParams() {
  return [{ lang: "en" }, { lang: "da" }];
}

export default async function CVPage({ params }: { params: { lang: string } }) {
  const { lang } = await params;
  const t = dict[lang] ?? dict.en;

  return (
    <main className="p-8 sm:p-20">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-3xl font-semibold mb-4">
          {t["nav.portfolio"] ?? "Portfolio"}
        </h1>
        <p className="mb-6 text-zinc-400 pb-10">
          {t["portfolio.lead"] ??
            "A collection of my projects in web development and UI/UX."}
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <ProjectCard
            title={t["portfolio.crestcalc.title"] ?? "WoW Crest Calculator"}
            year="2025"
            tech={["JavaScript", "HTML", "CSS"]}
            thumbnail={crestProject}
            summary={
              t["portfolio.crestcalc.summary"] ??
              "A simple calculator for World of Warcraft players to optimize their crest usage."
            }
            demoUrl="https://wowcrests.netlify.app/"
            repoUrl="https://github.com/Helbob/crest-calculator"
            process={{
              title: "WoW crest calculator — Case Study",
              steps: [
                {
                  title:
                    t["portfolio.crestcalc.subtitle"] ?? "WoW Crest Calculator",
                  content: [
                    {
                      type: "text",
                      value:
                        (t["portfolio.crestcalc.text1"] ??
                          "WoW Crest Calculator") +
                        "\n\n" +
                        (t["portfolio.crestcalc.text2"] ??
                          "WoW Crest Calculator"),
                    },
                    { type: "image", value: crestModal },
                  ],
                },
              ],
            }}
          />

          <ProjectCard
            title={t["portfolio.fitboks.title"] ?? "Fitboks"}
            year="2025"
            tech={[
              "React",
              "TypeScript",
              "Docker",
              "Python",
              "PostgreSQL",
              "TailwindCSS",
              "FastAPI",
            ]}
            thumbnail={fitboksProject}
            summary={
              t["portfolio.fitboks.summary"] ??
              "A simple calculator for World of Warcraft players to optimize their crest usage."
            }
            repoUrl="https://github.com/Bachlor-Eksame-2024"
            process={{
              title: "Fitboks — Case Study",
              steps: [
                {
                  title: t["portfolio.fitboks.subtitle"] ?? "Fitboks",
                  content: [
                    {
                      type: "text",
                      value:
                        (t["portfolio.fitboks.text1"] ??
                          "WoW Crest Calculator") +
                        "\n\n" +
                        (t["portfolio.fitboks.text2"] ??
                          "WoW Crest Calculator"),
                    },
                  ],
                },
                {
                  title: t["portfolio.fitboks.subtitle2"] ?? "Design?",
                  content: [
                    {
                      type: "text",
                      value:
                        t["portfolio.fitboks.text3"] ??
                        "Da FitBoks skulle fungere som en skalerbar løsning for både slutbrugere og fitnesscentre (via dashboardet), var det afgørende at etablere et stærkt og konsistent designfundament fra starten. Derfor startede vi med at udvikle en Style Tile. Dette styletile definerede de visuelle byggesten lige fra farvepaletten og typografien til button-states og ikoner.",
                    },
                    { type: "image", value: fitboksStyletile },
                  ],
                },
                {
                  title: " ",
                  content: [
                    {
                      type: "text",
                      value:
                        t["portfolio.fitboks.text4"] ??
                        "Ud fra vores research og brugerundersøgelser, fandt vi frem til nogle kernefunktioner, som vi ville implementere i vores løsning. For brugerne inkluderede dette en intuitiv bookingkalender, mulighed for at vælge specifikke bokse baseret på deres præferencer, og en simpel betalingsløsning. For de administrerende brugere udviklede vi et dashboard, hvor de kunne tilføje eller fjerne bokse, se bookingstatistikker og håndtere kundesupport.",
                    },
                  ],
                },
                {
                  title: " ",
                  content: [
                    {
                      type: "text",
                      value:
                        t["portfolio.fitboks.text5"] ??
                        "Bookingløsningen var designet til én ting: friktionsfri UX. Her var målet at gøre processen for at finde, booke og betale for en fitnessboks så hurtig og intuitiv som muligt. Gennem designprocessen fokuserede jeg på at eliminere unødvendige trin i brugerrejsen, hvilket sikrede, at selv nye brugere hurtigt kunne gennemføre en booking uden frustration. Dette system fungerer som selve fronten udadtil og demonstrerer min forståelse for brugervenlighed og konverteringsoptimering i design.",
                    },
                    { type: "image", value: fitboksGithub },
                  ],
                },
              ],
            }}
          />

          <ProjectCard
            title="Clinic von Huth"
            year="2024"
            thumbnail={clinicvonhuthProject}
            summary={
              t["portfolio.clinicvonhuth.summary"] ??
              "Freelance project I made for a client who wanted a website for her beauty clinic."
            }
            demoUrl="https://www.clinicvonhuth.dk/"
            process={{
              title: "Clinic von Huth — Case Study",
              steps: [
                {
                  title:
                    t["portfolio.clinicvonhuth.subtitle"] ??
                    "The idea behind the website",
                  content: [
                    {
                      type: "text",
                      value:
                        t["portfolio.clinicvonhuth.text1"] ??
                        "The idea behind the website was to create a simple and elegant platform that reflects the clinic's focus on beauty and wellness. I wanted to design a user experience that is both inviting and easy to navigate, so potential customers can quickly find the information they need.",
                    },
                    { type: "image", value: clinicvonhuthProject },
                  ],
                },
                {
                  title:
                    t["portfolio.clinicvonhuth.subtitle2"] ??
                    "Design & Development",
                  content: [
                    {
                      type: "text",
                      value:
                        (t["portfolio.clinicvonhuth.text2"] ??
                          "When I was coming up with a design, it was very important for me to stick to the more beige colors, and that was really the only requirement from the client's side. This meant that I started making wireframes, which I subsequently showed to the client after each change to get her approval of the design. Fortunately, it went quite smoothly, as she quickly seemed satisfied with it.") +
                        "\n\n" +
                        (t["portfolio.clinicvonhuth.text3"] ??
                          "It was also important for the client that she could update the website herself if there were price changes or other things, so it was obvious that everything should be developed in a CMS. Since the website itself did not have any major technical requirements, it made sense to use SquareSpace for this. After the development of the site was completed, I helped the client understand how she could update and maintain the site herself. Although the client has a good understanding of how to update and maintain the site, I still help with this to this day."),
                    },
                  ],
                },
                {
                  title:
                    t["portfolio.clinicvonhuth.subtitle3"] ??
                    "Facade, business cards, and gift cards",
                  content: [
                    {
                      type: "text",
                      value:
                        t["portfolio.clinicvonhuth.text4"] ??
                        "In addition to the website, I also designed the clinic's facade (window tinting), business cards, and gift cards. I wanted to create a cohesive visual identity that reflects the clinic's brand and values. The facade was designed to be inviting and professional, while the business cards and gift cards were created with a focus on simplicity and elegance. I used the same beige colors and typography as on the website to ensure a consistent experience across all materials.",
                    },
                    { type: "image", value: clinicvonhuthFacade },
                  ],
                },
              ],
            }}
          />
          <ProjectCard
            title="Food Delivery App"
            year="2024"
            tech={["Figma"]}
            thumbnail={foodDeliveryAppProject}
            summary={
              t["portfolio.foodapp.summary"] ??
              "Fullstack applikation til bestilling af mad, med både en kunde- og en admin-del. Lavet som en del af mit webudvikler studie."
            }
            repoUrl="https://github.com/Helbob/food-delivery-webdev-exam-github"
            process={{
              title: "Food Delivery App — Case Study",
              steps: [
                {
                  title: t["portfolio.foodapp.subtitle"] ?? "The assignment",
                  content: [
                    {
                      type: "text",
                      value: t["portfolio.foodapp.text1"] ?? "PLACEHOLDER",
                    },
                    { type: "image", value: foodDeliveryAppProject },
                  ],
                },
                {
                  title:
                    t["portfolio.foodapp.subtitle2"] ?? "Design & Development",
                  content: [
                    {
                      type: "text",
                      value:
                        (t["portfolio.foodapp.text2"] ?? "Clinic von Huth") +
                        "\n\n" +
                        (t["portfolio.foodapp.text3"] ?? "Clinic von Huth") +
                        "\n\n" +
                        (t["portfolio.foodapp.text4"] ?? "Clinic von Huth"),
                    },
                    { type: "image", value: foodDeliveryAppWireframes },
                  ],
                },
              ],
            }}
          />
        </div>
      </div>
    </main>
  );
}
