import Image from "next/image";
import { ArrowDown, ArrowUpRight, Clock3, MapPin, Sparkles } from "lucide-react";
import { Reveal, WordReveal } from "@/components/motion";
import { MotionLink } from "@/components/motion";
import { orderLink } from "@/lib/site-content";

export function Hero() {
  return (
    <section className="hero" id="top">
      <Image className="hero-image" src="/images/hero.png" alt="Pizza William’s saindo do forno" fill priority sizes="100vw" />
      <div className="hero-scrim" />
      <div className="hero-grid" />
      <div className="hero-content page-shell">
        <Reveal className="hero-kicker">
          <Sparkles size={15} fill="currentColor" />
          Pizza artesanal em Gramado
        </Reveal>
        <WordReveal>
          <h1>
            Fina no ponto.
            <br />
            <em>Generosa no sabor.</em>
          </h1>
        </WordReveal>
        <Reveal delay={0.12} className="hero-copy">
          <p>
            Massa fininha e crocante, ingredientes de verdade e uma pizza que chega quente do jeito que deve chegar.
          </p>
          <div className="hero-actions">
            <MotionLink className="button button-light" href={orderLink}>
              Pedir agora <ArrowUpRight size={18} />
            </MotionLink>
            <MotionLink className="text-link light-link" href="#cardapio">
              Ver cardápio <ArrowDown size={17} />
            </MotionLink>
          </div>
        </Reveal>
        <Reveal delay={0.2} className="hero-meta">
          <div><MapPin size={16} /><span>Gramado + Canela</span></div>
          <div><Clock3 size={16} /><span>Todos os dias a partir das 18h30</span></div>
        </Reveal>
      </div>
      <div className="hero-stamp" aria-hidden="true">desde <strong>2025</strong><span>•</span> Gramado</div>
    </section>
  );
}
