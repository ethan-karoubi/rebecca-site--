import { createFileRoute } from "@tanstack/react-router";
import { BookOpen, Ear, HeartHandshake, UserRound } from "lucide-react";
import { CtaFinal } from "@/components/site/Layout";
import { PageHero, Reveal, SectionTitle } from "@/components/site/ui";
import { IMAGES, SITE } from "@/lib/constants";

export const Route = createFileRoute("/a-propos")({
  head: () => ({
    meta: [
      { title: `À propos – ${SITE.name}` },
      { name: "description", content: "Mon parcours, ma philosophie et mes valeurs de praticienne en médecine chinoise dédiée à la santé des femmes." },
      { property: "og:title", content: "À propos – Praticienne en médecine chinoise" },
      { property: "og:description", content: "Parcours, philosophie et valeurs : du symptôme à la cause." },
    ],
  }),
  component: About,
});

const VALEURS = [
  { Icon: Ear, t: "Écoute", d: "Un espace où votre parole est accueillie sans jugement." },
  { Icon: HeartHandshake, t: "Bienveillance", d: "Des soins doux, respectueux de votre corps et de votre rythme." },
  { Icon: UserRound, t: "Personnalisation", d: "Chaque protocole est pensé pour vous, et pour vous seule." },
  { Icon: BookOpen, t: "Pédagogie", d: "Comprendre ce qui se passe pour devenir actrice de votre santé." },
];

const FORMATIONS = [
  { y: "2019 – 2023", t: "Diplôme en médecine traditionnelle chinoise" },
];

function About() {
  return (
    <>
      <PageHero eyebrow="Qui suis-je" title="À propos de moi" />
      <section className="py-20 md:py-28">
        <div className="container-site grid items-center gap-12 md:grid-cols-2">
          <Reveal><img src={IMAGES.portrait} alt="[PHOTO PORTRAIT] La praticienne souriante" width={896} height={1152} loading="lazy" className="aspect-[4/5] w-full rounded-2xl object-cover" /></Reveal>
          <Reveal delay={150} className="space-y-5 leading-relaxed">
            <p className="eyebrow">Mon parcours</p>
            <h2 className="display-lg">Bonjour, je suis {SITE.name}</h2>
            <p>Praticienne en médecine traditionnelle chinoise depuis [X ANNÉES — À COMPLÉTER], j'exerce à [VILLE — À COMPLÉTER] où j'accompagne principalement les femmes, à chaque étape de leur vie.</p>
            <p>Mon chemin vers la médecine chinoise est né d'une conviction : notre corps nous parle, et chaque symptôme est un message. J'ai voulu apprendre à l'écouter, puis à aider d'autres femmes à le faire.</p>
            <p>Aujourd'hui, j'associe acupuncture, Tuina, ventouses, phytothérapie et conseils d'hygiène de vie pour vous proposer un accompagnement complet, doux et profondément humain.</p>
          </Reveal>
        </div>
      </section>

      <section className="bg-muted py-20 md:py-28">
        <div className="container-site grid gap-12 md:grid-cols-2">
          <div>
            <p className="eyebrow">Ma philosophie</p>
            <h2 className="display-lg mt-3">« Du symptôme à la cause »</h2>
            <div className="mt-5 h-px w-16 bg-primary" />
            <p className="mt-6 leading-relaxed">Plutôt que de seulement soulager un symptôme, je cherche avec vous l'origine du déséquilibre. La médecine chinoise considère le corps comme un tout : émotions, alimentation, sommeil et cycles sont intimement liés.</p>
          </div>
          <div>
            <p className="eyebrow">Mon approche</p>
            <p className="mt-6 font-serif text-3xl leading-snug text-ink">Vous aider à mieux comprendre votre corps et à prendre soin de votre santé grâce à un accompagnement personnalisé, adapté à vos besoins.</p>
          </div>
        </div>
      </section>

      <section className="py-20 md:py-28">
        <div className="container-site">
          <SectionTitle eyebrow="Mes valeurs" title="Ce qui guide ma pratique" />
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {VALEURS.map(({ Icon, t, d }) => (
              <div key={t} className="rounded-2xl bg-secondary p-8 text-center">
                <Icon className="mx-auto h-7 w-7 text-primary-hover" />
                <h3 className="mt-4 text-2xl">{t}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-muted py-20 md:py-28">
        <div className="container-site max-w-3xl">
          <SectionTitle eyebrow="Formations et diplômes" title="Mon parcours de formation" />
          <ol className="relative ml-3 border-l border-primary">
            {FORMATIONS.map((f) => (
              <li key={f.t} className="mb-10 ml-8">
                <span className="absolute -left-[7px] mt-1.5 h-3.5 w-3.5 rounded-full bg-primary" />
                <p className="eyebrow">{f.y}</p>
                <p className="mt-1 font-serif text-xl text-ink">{f.t}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>
      <CtaFinal />
    </>
  );
}
