import Image from "next/image";
import { ArrowUpRight, Check, Truck } from "lucide-react";
import { Reveal } from "@/components/motion";
import { MotionLink } from "@/components/motion";
import { SectionLabel } from "@/components/ui/section-label";
import { orderLink } from "@/lib/site-content";

export function Experience() {
  return (
    <section className="experience section-pad" id="entrega">
      <div className="page-shell">
        <div className="experience-grid">
          <Reveal className="experience-copy">
            <SectionLabel>Na sua porta</SectionLabel>
            <h2>
              A noite começa
              <br />
              <em>quando chega.</em>
            </h2>
            <p>
              Pedidos pelo delivery para Gramado e Canela, preparados para preservar o crocante, o calor e o sabor da William’s do caminho até a sua mesa.
            </p>
            <MotionLink className="button button-red" href={orderLink}>
              Pedir pelo WhatsApp <ArrowUpRight size={18} />
            </MotionLink>
          </Reveal>
          <Reveal delay={0.12} className="experience-image">
            <Image src="/images/fondue.jpg" alt="Sobremesa William’s Pizza" fill sizes="(max-width: 800px) 100vw, 46vw" />
            <div className="image-caption"><Truck size={18} /><span>Delivery em Gramado e Canela</span></div>
          </Reveal>
        </div>
        <div className="promise-grid">
          <Reveal className="promise-card promise-card-featured">
            <span className="promise-icon"><Check size={19} /></span>
            <div><strong>O mínimo é R$ 29</strong><p>Seu pedido chega sem complicação.</p></div>
          </Reveal>
          <Reveal delay={0.08} className="promise-card">
            <span className="promise-index">02</span>
            <div><strong>Massa fininha</strong><p>Crocância que segura o sabor.</p></div>
          </Reveal>
          <Reveal delay={0.16} className="promise-card">
            <span className="promise-index">03</span>
            <div><strong>Feita na hora</strong><p>Do forno para a sua noite.</p></div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
