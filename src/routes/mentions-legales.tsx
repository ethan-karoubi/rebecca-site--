import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/site/ui";
import { SITE } from "@/lib/constants";

export const Route = createFileRoute("/mentions-legales")({
  head: () => ({
    meta: [
      { title: `Mentions légales – ${SITE.name}` },
      { name: "description", content: "Mentions légales, hébergement et protection des données personnelles." },
      { property: "og:title", content: "Mentions légales" },
      { property: "og:description", content: "Informations légales du site." },
    ],
  }),
  component: () => (
    <>
      <PageHero eyebrow="Informations" title="Mentions légales" />
      <section className="container-site max-w-3xl space-y-8 py-20 leading-relaxed">
        {[
          ["Éditrice du site", `${SITE.name} – Praticienne en médecine traditionnelle chinoise. Adresse : ${SITE.address}. SIRET : [À COMPLÉTER]. Email : ${SITE.email}.`],
          ["Hébergement", "[NOM ET ADRESSE DE L'HÉBERGEUR À COMPLÉTER]"],
          ["Données personnelles", "Les informations transmises via le formulaire servent uniquement à répondre à votre demande. Conformément au RGPD, vous disposez d'un droit d'accès, de rectification et de suppression de vos données en écrivant à l'adresse ci-dessus."],
          ["Avertissement", "Les pratiques de médecine chinoise ne se substituent pas à un avis ou un traitement médical. Elles s'inscrivent en complément d'un suivi médical."],
        ].map(([t, d]) => (
          <div key={t}><h2 className="text-3xl">{t}</h2><p className="mt-3">{d}</p></div>
        ))}
      </section>
    </>
  ),
});
