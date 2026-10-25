import { createFileRoute, Link } from "@tanstack/react-router";
import * as Icons from "lucide-react";
import { Building2, Laptop, Quote, Sparkles } from "lucide-react";
import { CtaFinal } from "@/components/site/Layout";
import { btn, LeafMotif, Reveal, SectionTitle } from "@/components/site/ui";
import { IMAGES, METHODE, OUTILS, SITE, SPECIALITES, TEMOIGNAGES, whatsappLink } from "@/lib/constants";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: `${SITE.name} – Médecine chinoise, santé au féminin` },
      { name: "description", content: "Du symptôme à la cause : acupuncture, ventouses, Tuina, phytothérapie et nutrition pour accompagner la santé des femmes." },
      { property: "og:title", content: "Du symptôme à la cause – Médecine chinoise au féminin" },
      { property: "og:description", content: "Une approche globale et personnalisée de la santé au féminin." },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <>
      {/* HERO */}
      <section className="relative flex min-h-[85vh] items-center overflow-hidden">
        <img src={IMAGES.hero} alt="Salle de soin lumineuse et apaisante" width={1600} height={1008} className="absolute inset-0 h-full w-full object-cover object-right" />
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/85 to-background/10" />
        <div className="container-site relative py-20">
          <div className="max-w-2xl">
            <p className="eyebrow">{SITE.tagline}</p>
            <h1 className="display-xl mt-5">Du symptôme <em className="text-primary-hover">à la cause</em></h1>
            <p className="mt-5 font-serif text-2xl text-ink md:text-3xl">Une approche globale de la santé au féminin</p>
            <p className="mt-6 max-w-xl leading-relaxed">J'accompagne les femmes grâce à la médecine chinoise et à une approche personnalisée associant acupuncture, ventouses, Tuina, phytothérapie, nutrition et coaching en hygiène de vie.</p>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <a href={whatsappLink()} target="_blank" rel="noopener noreferrer" className={btn({ variant: "primary" })}>Prendre rendez-vous</a>
              <Link to="/prestations" className={btn({ variant: "secondary" })}>Découvrir mes prestations</Link>
            </div>
          </div>
        </div>
      </section>

      {/* PRÉSENTATION */}
      <section className="py-20 md:py-28">
        <div className="container-site grid items-center gap-12 md:grid-cols-2">
          <Reveal className="relative">
            <div className="absolute -left-4 -top-4 h-full w-full rounded-2xl border border-primary" />
            <img src={IMAGES.portrait} alt="[PHOTO PRATICIENNE] Portrait de la praticienne" width={896} height={1152} loading="lazy" className="relative aspect-[4/5] w-full rounded-2xl object-cover" />
          </Reveal>
          <Reveal delay={150}>
            <p className="eyebrow">Mon approche</p>
            <h2 className="display-lg mt-3">Comprendre votre corps, <em className="text-primary-hover">en profondeur</em></h2>
            <div className="mt-5 h-px w-16 bg-primary" />
            <p className="mt-6 text-lg leading-relaxed">Vous aider à mieux comprendre votre corps et à prendre soin de votre santé grâce à un accompagnement personnalisé, adapté à vos besoins.</p>
            <Link to="/a-propos" className={btn({ variant: "secondary" }) + " mt-8"}>En savoir plus</Link>
          </Reveal>
        </div>
      </section>

      {/* SPÉCIALITÉS */}
      <section className="bg-muted py-20 md:py-28">
        <div className="container-site">
          <SectionTitle eyebrow="Mes spécialités" title="Accompagner chaque étape de votre vie de femme" />
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {SPECIALITES.map((s, i) => {
              const Icon = Icons[s.icon] as Icons.LucideIcon;
              return (
                <Reveal key={s.title} delay={i * 80}>
                  <article className="h-full rounded-2xl border border-transparent bg-card p-8 shadow-soft transition-all duration-300 hover:-translate-y-1 hover:border-primary hover:shadow-lift">
                    <span className="flex h-12 w-12 items-center justify-center rounded-full bg-secondary text-primary-hover"><Icon className="h-5 w-5" /></span>
                    <h3 className="mt-6 text-2xl">{s.title}</h3>
                    <p className="mt-3 text-muted-foreground">{s.text}</p>
                  </article>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* OUTILS */}
      <section className="py-20 md:py-28">
        <div className="container-site">
          <SectionTitle eyebrow="Mes outils thérapeutiques" title="Des pratiques complémentaires" />
          <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-6">
            {OUTILS.map((o) => (
              <div key={o} className="flex flex-col items-center gap-3 rounded-2xl bg-secondary px-4 py-8 text-center">
                <Sparkles className="h-5 w-5 text-primary-hover" />
                <span className="font-serif text-lg text-ink">{o}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* MÉTHODE */}
      <section className="relative overflow-hidden bg-muted py-20 md:py-28">
        <LeafMotif className="absolute -right-16 top-10 h-80 w-80 text-primary opacity-20" />
        <div className="container-site relative">
          <SectionTitle eyebrow="Ma méthode" title="Un chemin en quatre étapes" />
          <ol className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {METHODE.map((m, i) => (
              <Reveal key={m.title} delay={i * 100}>
                <li className="border-t border-primary pt-6">
                  <span className="font-serif text-5xl text-primary">0{i + 1}</span>
                  <h3 className="mt-3 text-2xl">{m.title}</h3>
                  <p className="mt-3 text-muted-foreground">{m.text}</p>
                </li>
              </Reveal>
            ))}
          </ol>
        </div>
      </section>

      {/* FORMATS */}
      <section className="py-20 md:py-28">
        <div className="container-site">
          <SectionTitle eyebrow="Formats de consultation" title="Au cabinet ou à distance" />
          <div className="mx-auto grid max-w-4xl gap-6 md:grid-cols-2">
            {[
              { Icon: Building2, t: "En cabinet", d: "Acupuncture, ventouses, Tuina et drainage dans un espace calme et chaleureux." },
              { Icon: Laptop, t: "À distance", d: "Selon la prestation : bilan, nutrition, phytothérapie et coaching en visio." },
            ].map(({ Icon, t, d }) => (
              <div key={t} className="rounded-2xl border p-10 transition-all duration-300 hover:border-primary hover:shadow-lift">
                <Icon className="h-7 w-7 text-primary-hover" />
                <h3 className="mt-5 text-3xl">{t}</h3>
                <p className="mt-3 text-muted-foreground">{d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TÉMOIGNAGES */}
      <section className="bg-secondary py-20 md:py-28">
        <div className="container-site">
          <SectionTitle eyebrow="Témoignages" title="Elles m'ont fait confiance" />
          <div className="grid gap-6 md:grid-cols-3">
            {TEMOIGNAGES.map((t) => (
              <figure key={t.name} className="rounded-2xl bg-card p-8 shadow-soft">
                <Quote className="h-6 w-6 text-primary" />
                <blockquote className="mt-4 font-serif text-xl italic leading-snug text-ink">{t.text}</blockquote>
                <figcaption className="eyebrow mt-6">{t.name}</figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      <CtaFinal />
    </>
  );
}
