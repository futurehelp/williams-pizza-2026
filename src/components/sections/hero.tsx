import Image from "next/image";
import { ArrowDown, ArrowUpRight, Clock3, MapPin, Sparkles } from "lucide-react";
import { Reveal, WordReveal } from "@/components/motion";
import { MotionLink } from "@/components/motion";
import { orderLink } from "@/lib/site-content";

export function Hero() {
  return (
    <section className="hero" id="top">
      <Image className="hero-image" src="/images/hero.png" alt="William’s Pizza fresh from the oven" fill priority sizes="100vw" />
      <div className="hero-scrim" />
      <div className="hero-grid" />
      <div className="hero-content page-shell">
        <Reveal className="hero-kicker">
          <Sparkles size={15} fill="currentColor" />
          Artisan pizza in Gramado
        </Reveal>
        <WordReveal>
          <h1>
            Crisp by design.
            <br />
            <em>Generous by nature.</em>
          </h1>
        </WordReveal>
        <Reveal delay={0.12} className="hero-copy">
          <p>
            Thin, crisp dough, real ingredients, and pizza that arrives hot the way it should.
          </p>
          <div className="hero-actions">
            <MotionLink className="button button-light" href={orderLink}>
              Order now <ArrowUpRight size={18} />
            </MotionLink>
            <MotionLink className="text-link light-link" href="#cardapio">
              View the menu <ArrowDown size={17} />
            </MotionLink>
          </div>
        </Reveal>
        <Reveal delay={0.2} className="hero-meta">
          <div><MapPin size={16} /><span>Gramado + Canela</span></div>
          <div><Clock3 size={16} /><span>Every day from 6:30 PM</span></div>
        </Reveal>
      </div>
      <div className="hero-stamp" aria-hidden="true">since <strong>2025</strong><span>•</span> Gramado</div>
    </section>
  );
}
