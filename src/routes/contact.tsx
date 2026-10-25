import { createFileRoute } from "@tanstack/react-router";
import { zodResolver } from "@hookform/resolvers/zod";
import { Clock, MapPin, Phone } from "lucide-react";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { btn, PageHero, WhatsAppIcon } from "@/components/site/ui";
import { MOTIFS, SITE, whatsappLink } from "@/lib/constants";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: `Contact & rendez-vous – ${SITE.name}` },
      { name: "description", content: "Prenez rendez-vous en cabinet ou à distance : formulaire, téléphone ou WhatsApp." },
      { property: "og:title", content: "Contact – Médecine chinoise au féminin" },
      { property: "og:description", content: "Écrivez-moi pour prendre rendez-vous." },
    ],
    scripts: [{
      type: "application/ld+json",
      children: JSON.stringify({ "@context": "https://schema.org", "@type": "HealthAndBeautyBusiness", name: SITE.name, telephone: SITE.phone, address: SITE.address, slogan: SITE.slogan }),
    }],
  }),
  component: Contact,
});

const schema = z.object({
  name: z.string().trim().min(2, "Merci d'indiquer votre nom et prénom.").max(100),
  phone: z.string().trim().max(30).optional(),
  motif: z.string().min(1, "Merci de choisir un motif."),
  message: z.string().trim().min(10, "Votre message doit contenir au moins 10 caractères.").max(2000),
  consent: z.literal(true, { errorMap: () => ({ message: "Votre consentement est nécessaire." }) }),
  website: z.string().max(0).optional(), // honeypot
});
type Form = z.infer<typeof schema>;

const field = "mt-2 w-full rounded-xl border bg-background px-4 py-3 text-ink outline-none transition focus:border-primary focus:ring-2 focus:ring-primary/30";

function Contact() {
  const [sent, setSent] = useState(false);
  const { register, handleSubmit, formState: { errors, isSubmitting }, reset } = useForm<Form>({ resolver: zodResolver(schema) });

  const onSubmit = async (d: Form) => {
    const text = `Bonjour, je souhaite prendre rendez-vous.\n\nNom : ${d.name}${d.phone ? `\nTéléphone : ${d.phone}` : ""}\nMotif : ${d.motif}\n\n${d.message}`;
    const url = whatsappLink(text);
    if (!window.open(url, "_blank", "noopener,noreferrer")) window.location.href = url;
    setSent(true);
    reset();
  };

  const Err = ({ m }: { m?: string | undefined }) => (m ? <p role="alert" className="mt-1 text-sm text-destructive">{m}</p> : null);

  return (
    <>
      <PageHero eyebrow="Rendez-vous" title="Contactez-moi" text="Une question, une envie de prendre soin de vous ? Je vous réponds avec plaisir." />
      <section className="py-20 md:py-28">
        <div className="container-site grid gap-12 lg:grid-cols-5">
          <form onSubmit={handleSubmit(onSubmit)} noValidate className="space-y-5 rounded-2xl bg-muted p-6 md:p-10 lg:col-span-3">
            <h2 className="text-3xl">Envoyer un message</h2>
            <input type="text" tabIndex={-1} autoComplete="off" className="hidden" aria-hidden {...register("website")} />
            <div className="grid gap-5 sm:grid-cols-2">
              <label className="block text-sm font-semibold text-ink">Nom et prénom *<input className={field} {...register("name")} /><Err m={errors.name?.message} /></label>
              <label className="block text-sm font-semibold text-ink">Téléphone<input type="tel" className={field} {...register("phone")} /></label>
              <label className="block text-sm font-semibold text-ink">Motif *
                <select className={field} defaultValue="" {...register("motif")}>
                  <option value="" disabled>Choisir…</option>
                  {MOTIFS.map((m) => <option key={m}>{m}</option>)}
                </select><Err m={errors.motif?.message} />
              </label>
            </div>
            <label className="block text-sm font-semibold text-ink">Message *<textarea rows={5} className={field} {...register("message")} /><Err m={errors.message?.message} /></label>
            <label className="flex gap-3 text-sm">
              <input type="checkbox" className="mt-1 h-4 w-4 accent-primary" {...register("consent")} />
              <span>J'accepte que mes données soient utilisées pour être recontactée. Elles ne seront jamais transmises à des tiers.</span>
            </label>
            <Err m={errors.consent?.message} />
            <button type="submit" disabled={isSubmitting} className={btn({ variant: "primary" })}>{isSubmitting ? "Ouverture de WhatsApp…" : "Envoyer sur WhatsApp"}</button>
            {sent && <p role="status" className="rounded-xl bg-secondary p-4 text-sm text-ink">Merci ! WhatsApp s'est ouvert avec votre message : il suffit de l'envoyer. Je vous réponds rapidement.</p>}
          </form>

          <aside className="space-y-6 lg:col-span-2">
            <h2 className="text-3xl">Coordonnées</h2>
            <ul className="space-y-4">
              <li className="flex gap-3"><MapPin className="h-5 w-5 shrink-0 text-primary-hover" />{SITE.address}</li>
              <li><a href={SITE.phoneHref} className="flex gap-3 hover:text-primary-hover"><Phone className="h-5 w-5 text-primary-hover" />{SITE.phone}</a></li>
              <li className="flex gap-3"><Clock className="h-5 w-5 shrink-0 text-primary-hover" /><span>{SITE.hours.map((h) => <span key={h} className="block">{h}</span>)}</span></li>
            </ul>
            <a href={whatsappLink()} target="_blank" rel="noopener noreferrer" className={btn({ variant: "whatsapp" }) + " w-full py-4 text-base"}><WhatsAppIcon className="h-5 w-5" /> Écrire sur WhatsApp</a>
            <p className="text-sm text-muted-foreground">Consultations en cabinet et accompagnement à distance selon la prestation.</p>
          </aside>
        </div>
        <div className="container-site mt-16">
          <iframe title="Localisation du cabinet [CARTE À REMPLACER]" src={SITE.mapEmbed} loading="lazy" className="h-72 w-full rounded-2xl border-0 md:aspect-video md:h-auto" />
        </div>
      </section>
    </>
  );
}
