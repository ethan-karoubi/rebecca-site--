import { createFileRoute, Link } from "@tanstack/react-router";
import { Building2, Clock, Euro, Laptop } from "lucide-react";
import { CtaFinal } from "@/components/site/Layout";
import { btn, PageHero, Reveal, SectionTitle } from "@/components/site/ui";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { FAQ, PRESTATIONS, SITE, SPECIALITES } from "@/lib/constants";
import { cn } from "@/lib/utils";

export const Route = createFileRoute("/prestations")({
  head: () => ({
    meta: [
      { title: `Mes prestations – ${SITE.name}` },
      { name: "description", content: "Acupuncture, ventouses, Tuina, phytothérapie, nutrition, drainage lymphatique, grossesse et post-partum : découvrez mes soins." },
      { property: "og:title", content: "Prestations – Médecine chinoise au féminin" },
      { property: "og:description", content: "Des soins doux et personnalisés pour la santé des femmes." },
    ],
  }),
  component: Prestations,
});

function Prestations() {
  return (
    <>
      <PageHero eyebrow="Soins & accompagnements" title="Mes prestations" text="Une approche globale et personnalisée : chaque soin s'inscrit dans un accompagnement pensé pour vous." />

      <section className="py-20 md:py-28">
        <div className="container-site space-y-20 md:space-y-28">
          {PRESTATIONS.map((p, i) => (
            <Reveal key={p.title}>
              <article className="grid items-center gap-8 md:grid-cols-2 md:gap-14">
                <img src={p.image} alt={p.title} width={1024} height={768} loading="lazy" className={cn("aspect-[4/3] w-full rounded-2xl object-cover", i % 2 && "md:order-2")} />
                <div>
                  <p className="eyebrow">0{i + 1}</p>
                  <h2 className="mt-3 text-4xl">{p.title}</h2>
                  <div className="mt-4 h-px w-12 bg-primary" />
                  <p className="mt-5 leading-relaxed">{p.desc}</p>
                  <p className="mt-4"><strong className="text-ink">Idéal pour :</strong> {p.ideal}</p>
                  <div className="mt-5 flex flex-wrap gap-6 text-sm text-muted-foreground">
                    {p.duration ? <span className="flex items-center gap-2"><Clock className="h-4 w-4 text-primary-hover" />{p.duration}</span> : null}
                    <span className="flex items-center gap-2"><Euro className="h-4 w-4 text-primary-hover" />Tarif {p.price ?? "[À COMPLÉTER]"}</span>
                  </div>
                  <Link to="/contact" className={btn({ variant: "primary" }) + " mt-7"}>Réserver</Link>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="bg-muted py-20 md:py-28">
        <div className="container-site">
          <SectionTitle eyebrow="Domaines d'accompagnement" title="Ce pour quoi je vous accompagne" />
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {SPECIALITES.map((s) => (
              <div key={s.title} className="rounded-2xl border-l-2 border-primary bg-card p-6 shadow-soft">
                <h3 className="text-2xl">{s.title}</h3>
                <p className="mt-2 text-muted-foreground">{s.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 md:py-28">
        <div className="container-site">
          <SectionTitle eyebrow="Modalités" title="Comment nous travaillons ensemble" />
          <div className="mx-auto grid max-w-4xl gap-6 md:grid-cols-2">
            <div className="rounded-2xl bg-secondary p-8"><Building2 className="h-6 w-6 text-primary-hover" /><h3 className="mt-4 text-2xl">Consultations en cabinet</h3><p className="mt-2 text-muted-foreground">Pour tous les soins manuels et l'acupuncture.</p></div>
            <div className="rounded-2xl bg-secondary p-8"><Laptop className="h-6 w-6 text-primary-hover" /><h3 className="mt-4 text-2xl">Accompagnement à distance</h3><p className="mt-2 text-muted-foreground">Selon la prestation : bilan, nutrition, phytothérapie, coaching.</p></div>
          </div>
        </div>
      </section>

      <section className="bg-muted py-20 md:py-28">
        <div className="container-site max-w-3xl">
          <SectionTitle eyebrow="FAQ" title="Questions fréquentes" />
          <Accordion type="single" collapsible className="rounded-2xl bg-card px-6 shadow-soft">
            {FAQ.map((f, i) => (
              <AccordionItem key={f.q} value={`q${i}`}>
                <AccordionTrigger className="py-5 text-left font-serif text-xl text-ink hover:no-underline">{f.q}</AccordionTrigger>
                <AccordionContent className="text-base leading-relaxed text-muted-foreground">{f.a}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>
      <CtaFinal />
    </>
  );
}
