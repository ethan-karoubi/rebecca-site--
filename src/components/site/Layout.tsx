import { Link } from "@tanstack/react-router";
import { Facebook, Instagram, MapPin, Menu, Phone, X } from "lucide-react";
import { useEffect, useState } from "react";
import { NAV, SITE, whatsappLink } from "@/lib/constants";
import { cn } from "@/lib/utils";
import logoImg from "@/assets/logo.png";
import { btn, LeafMotif, WhatsAppIcon } from "./ui";

function Logo() {
  return (
    <Link to="/" className="flex items-center gap-3 leading-none">
      <img src={logoImg} alt={`${SITE.name} — logo`} width={300} height={299} className="h-14 w-14 shrink-0 object-contain md:h-16 md:w-16" />
      <span className="flex flex-col">
        <span className="font-serif text-xl text-ink md:text-2xl">{SITE.name}</span>
        <span className="mt-1 text-[0.65rem] uppercase tracking-[0.2em] text-primary-hover">{SITE.tagline}</span>
      </span>
    </Link>
  );
}

const navLink = "relative py-2 text-sm font-medium text-ink transition-colors hover:text-primary-hover after:absolute after:inset-x-0 after:-bottom-0.5 after:h-px after:origin-left after:scale-x-0 after:bg-primary after:transition-transform data-[status=active]:after:scale-x-100";

export function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  return (
    <>
    <header className={cn("sticky top-0 z-50 transition-all duration-300", scrolled && !open ? "bg-background/85 shadow-soft backdrop-blur-md" : "bg-background")}>
      <div className="container-site flex h-20 items-center justify-between gap-4">
        <Logo />
        <nav aria-label="Navigation principale" className="hidden items-center gap-8 lg:flex">
          {NAV.map((n) => (
            <Link key={n.to} to={n.to} className={navLink} activeOptions={{ exact: true }}>{n.label}</Link>
          ))}
          <a href={whatsappLink()} target="_blank" rel="noopener noreferrer" className={btn({ variant: "primary" })}>Prendre rendez-vous</a>
        </nav>
        <button className="flex h-11 w-11 items-center justify-center text-ink lg:hidden" aria-label={open ? "Fermer le menu" : "Ouvrir le menu"} aria-expanded={open} aria-controls="mobile-menu" onClick={() => setOpen(!open)}>
          {open ? <X /> : <Menu />}
        </button>
      </div>
    </header>
      <div id="mobile-menu" className={cn("fixed inset-0 top-20 z-[60] lg:hidden transition-opacity duration-300", open ? "opacity-100" : "pointer-events-none opacity-0")} onClick={() => setOpen(false)}>
        <div className="absolute inset-0 bg-ink/30" />
        <nav aria-label="Navigation mobile" className={cn("relative ml-auto flex h-full w-full max-w-sm flex-col gap-2 overflow-y-auto bg-white p-8 shadow-2xl transition-transform duration-300", open ? "translate-x-0" : "translate-x-full")} onClick={(e) => e.stopPropagation()}>
          {NAV.map((n) => (
            <Link key={n.to} to={n.to} onClick={() => setOpen(false)} activeOptions={{ exact: true }} className="border-b py-4 font-serif text-2xl text-ink data-[status=active]:text-primary-hover">{n.label}</Link>
          ))}
          <a href={whatsappLink()} onClick={() => setOpen(false)} target="_blank" rel="noopener noreferrer" className={cn(btn({ variant: "primary" }), "mt-6")}>Prendre rendez-vous</a>
        </nav>
      </div>
    </>
  );
}

export function Footer() {
  return (
    <footer className="relative overflow-hidden bg-ink pb-28 pt-16 text-ink-foreground md:pb-12">
      <LeafMotif className="absolute -bottom-16 -left-10 h-72 w-72 text-primary opacity-10" />
      <div className="container-site relative grid gap-12 md:grid-cols-3">
        <div>
          <img src={logoImg} alt={`${SITE.name} — logo`} width={300} height={299} className="h-20 w-20 rounded-full bg-white object-contain" />
          <p className="mt-4 font-serif text-2xl">{SITE.name}</p>
          <p className="mt-1 text-xs uppercase tracking-[0.2em] text-primary">{SITE.tagline}</p>
          <p className="mt-6 font-serif text-xl italic text-primary">« {SITE.slogan} »</p>
          <p className="mt-2 text-sm opacity-75">Une approche globale de la santé au féminin.</p>
        </div>
        <div>
          <p className="eyebrow !text-primary">Liens rapides</p>
          <ul className="mt-5 space-y-3 text-sm">
            {NAV.map((n) => <li key={n.to}><Link to={n.to} className="opacity-80 transition hover:text-primary hover:opacity-100">{n.label}</Link></li>)}
            <li><Link to="/mentions-legales" className="opacity-80 transition hover:text-primary hover:opacity-100">Mentions légales</Link></li>
          </ul>
        </div>
        <div className="space-y-4 text-base md:text-lg">
          <p className="eyebrow !text-primary">Coordonnées</p>
          <p className="mt-5 flex gap-3 opacity-90"><MapPin className="mt-1 h-5 w-5 shrink-0 text-primary" />{SITE.address}</p>
          <a href={SITE.phoneHref} className="flex gap-3 opacity-90 hover:text-primary"><Phone className="mt-1 h-5 w-5 shrink-0 text-primary" />{SITE.phone}</a>
          <a href={whatsappLink()} target="_blank" rel="noopener noreferrer" className="flex gap-3 opacity-90 hover:text-primary"><WhatsAppIcon className="mt-1 h-5 w-5 shrink-0 text-primary" />Contacter via WhatsApp</a>
          {SITE.hours.map((h) => <p key={h} className="opacity-80">{h}</p>)}
          <div className="flex gap-3 pt-2">
            <a href="https://www.instagram.com/rebecca_guedjmtc/" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="flex h-11 w-11 items-center justify-center rounded-full border border-primary/40 text-primary hover:bg-primary hover:text-ink"><Instagram className="h-4 w-4" /></a>
            <a href={SITE.facebook} target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="flex h-11 w-11 items-center justify-center rounded-full border border-primary/40 text-primary hover:bg-primary hover:text-ink"><Facebook className="h-4 w-4" /></a>
          </div>
        </div>
      </div>
      <div className="container-site relative mt-14 border-t border-ink-foreground/15 pt-6 text-xs opacity-70">
        <p>© 2026 {SITE.name} – Tous droits réservés · <Link to="/mentions-legales" className="underline hover:text-primary">Mentions légales</Link></p>
        <p className="mt-2">Les pratiques de médecine chinoise ne se substituent pas à un avis ou un traitement médical.</p>
      </div>
    </footer>
  );
}

export function WhatsAppButton() {
  return (
    <a href={whatsappLink()} target="_blank" rel="noopener noreferrer" aria-label="Contacter par WhatsApp" className="group fixed bottom-5 right-5 z-[9999] flex h-14 w-14 items-center justify-center rounded-full bg-whatsapp text-whatsapp-foreground shadow-lift animate-wa-pulse transition-transform duration-300 hover:scale-110 md:h-[60px] md:w-[60px]">
      <WhatsAppIcon className="h-7 w-7 md:h-8 md:w-8" />
      <span className="pointer-events-none absolute right-full mr-3 hidden whitespace-nowrap rounded-full bg-ink px-4 py-2 text-xs text-ink-foreground opacity-0 transition-opacity group-hover:opacity-100 md:block">Écrivez-moi sur WhatsApp</span>
    </a>
  );
}

export function CtaFinal() {
  return (
    <section className="bg-ink py-20 text-ink-foreground">
      <div className="container-site text-center">
        <p className="eyebrow !text-primary">Rendez-vous</p>
        <h2 className="display-lg mt-4 !text-ink-foreground">Prête à prendre soin de vous ?</h2>
        <p className="mx-auto mt-4 max-w-lg opacity-75">Je vous accompagne avec écoute et douceur, à votre rythme.</p>
        <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <a href={whatsappLink()} target="_blank" rel="noopener noreferrer" className={btn({ variant: "primary" })}>Prendre rendez-vous</a>
          <Link to="/contact" className={btn({ variant: "light" })}>Formulaire de contact</Link>
        </div>
      </div>
    </section>
  );
}
