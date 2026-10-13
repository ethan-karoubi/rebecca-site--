import { Link } from "@tanstack/react-router";
import { cva, type VariantProps } from "class-variance-authority";
import { useEffect, useRef, type ReactNode } from "react";
import { cn } from "@/lib/utils";

export const btn = cva(
  "inline-flex min-h-11 items-center justify-center gap-2 rounded-full px-7 py-3 text-sm font-semibold tracking-wide transition-all duration-300 cursor-pointer disabled:opacity-60 disabled:cursor-not-allowed",
  {
    variants: {
      variant: {
        primary: "bg-primary text-primary-foreground hover:bg-primary-hover shadow-soft",
        secondary: "border border-ink text-ink hover:bg-ink hover:text-ink-foreground",
        light: "border border-ink-foreground/70 text-ink-foreground hover:bg-ink-foreground hover:text-ink",
        whatsapp: "bg-whatsapp text-whatsapp-foreground hover:opacity-90 shadow-soft",
      },
    },
    defaultVariants: { variant: "primary" },
  },
);
export type BtnVariant = VariantProps<typeof btn>["variant"];

export function ButtonLink({ to, href, variant, children, className }: { to?: string; href?: string; variant?: BtnVariant; children: ReactNode; className?: string }) {
  if (href)
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" className={cn(btn({ variant }), className)}>
        {children}
      </a>
    );
  return (
    <Link to={to!} className={cn(btn({ variant }), className)}>
      {children}
    </Link>
  );
}

export function Reveal({ children, className, delay = 0 }: { children: ReactNode; className?: string; delay?: number }) {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(([e]) => {
      if (e.isIntersecting) { el.classList.add("is-visible"); io.disconnect(); }
    }, { threshold: 0.12 });
    io.observe(el);
    return () => io.disconnect();
  }, []);
  return <div ref={ref} className={cn("reveal", className)} style={{ transitionDelay: `${delay}ms` }}>{children}</div>;
}

export function SectionTitle({ eyebrow, title, intro, center = true }: { eyebrow?: string; title: ReactNode; intro?: string; center?: boolean }) {
  return (
    <div className={cn("mb-12 max-w-2xl", center && "mx-auto text-center")}>
      {eyebrow && <p className="eyebrow">{eyebrow}</p>}
      <h2 className="display-lg mt-3">{title}</h2>
      <div className={cn("mt-5 h-px w-16 bg-primary", center && "mx-auto")} />
      {intro && <p className="mt-5 text-base leading-relaxed text-muted-foreground md:text-lg">{intro}</p>}
    </div>
  );
}

export function PageHero({ eyebrow, title, text }: { eyebrow: string; title: string; text?: string }) {
  return (
    <section className="relative overflow-hidden bg-secondary py-20 md:py-28">
      <LeafMotif className="absolute -right-10 -top-10 h-72 w-72 text-primary opacity-30" />
      <div className="container-site relative text-center">
        <p className="eyebrow">{eyebrow}</p>
        <h1 className="display-xl mt-4">{title}</h1>
        {text && <p className="mx-auto mt-6 max-w-xl text-lg text-muted-foreground">{text}</p>}
      </div>
    </section>
  );
}

export function LeafMotif({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 200 200" fill="none" stroke="currentColor" strokeWidth="1" className={className} aria-hidden>
      <path d="M100 190 C100 120 100 60 100 10" />
      {[30, 60, 90, 120, 150].map((y) => (
        <g key={y}>
          <path d={`M100 ${y + 20} C80 ${y} 55 ${y} 40 ${y + 10} C60 ${y + 25} 85 ${y + 25} 100 ${y + 20}`} />
          <path d={`M100 ${y + 30} C120 ${y + 10} 145 ${y + 10} 160 ${y + 20} C140 ${y + 35} 115 ${y + 35} 100 ${y + 30}`} />
        </g>
      ))}
    </svg>
  );
}

export function WhatsAppIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden>
      <path d="M17.47 14.38c-.3-.15-1.76-.87-2.03-.97-.27-.1-.47-.15-.67.15-.2.3-.77.97-.94 1.17-.17.2-.35.22-.65.07-.3-.15-1.26-.46-2.4-1.48-.89-.79-1.49-1.77-1.66-2.07-.17-.3-.02-.46.13-.61.13-.13.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.02-.52-.08-.15-.67-1.61-.92-2.21-.24-.58-.49-.5-.67-.51h-.57c-.2 0-.52.07-.79.37-.27.3-1.04 1.02-1.04 2.48s1.07 2.88 1.21 3.08c.15.2 2.1 3.2 5.08 4.49.71.31 1.26.49 1.69.63.71.23 1.36.2 1.87.12.57-.09 1.76-.72 2.01-1.41.25-.7.25-1.29.17-1.41-.07-.12-.27-.2-.57-.35M12.05 21.8h-.01a9.87 9.87 0 0 1-5.03-1.38l-.36-.21-3.74.98 1-3.65-.24-.37a9.86 9.86 0 0 1-1.51-5.26c0-5.45 4.44-9.88 9.89-9.88 2.64 0 5.12 1.03 6.99 2.9a9.82 9.82 0 0 1 2.89 6.99c0 5.45-4.44 9.88-9.88 9.88m8.41-18.3A11.82 11.82 0 0 0 12.05 0C5.5 0 .16 5.34.16 11.89c0 2.1.55 4.14 1.59 5.95L.06 24l6.3-1.65a11.88 11.88 0 0 0 5.68 1.45h.01c6.55 0 11.89-5.34 11.89-11.89 0-3.18-1.24-6.16-3.48-8.41" />
    </svg>
  );
}
