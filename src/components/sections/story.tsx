import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { Reveal } from "@/components/motion";
import { MotionLink } from "@/components/motion";
import { SectionLabel } from "@/components/ui/section-label";
import { orderLink } from "@/lib/site-content";

export function Story() {
  return (
    <section className="story section-pad" id="a-casa">
      <div className="page-shell story-grid">
        <Reveal className="story-heading">
          <SectionLabel>A assinatura da casa</SectionLabel>
          <h2>
            Pizza que tem
            <br />
            <em>cara de Gramado.</em>
          </h2>
        </Reveal>
        <Reveal delay={0.12} className="story-copy">
          <p className="lead-copy">
            Na William’s, cada pedido começa com uma escolha simples: fazer pizza boa, sem atalhos.
          </p>
          <p>
            A massa fininha e crocante é o ponto de partida. Depois vêm os ingredientes generosos, o cuidado no preparo e o compromisso de entregar tudo quentinho em Gramado e Canela.
          </p>
          <MotionLink className="text-link dark-link" href={orderLink}>
            Conheça o sabor da casa <ArrowUpRight size={17} />
          </MotionLink>
        </Reveal>
      </div>
      <div className="page-shell story-media-grid">
        <Reveal className="story-image story-image-large">
          <Image src="/images/calabresa.jpeg" alt="Pizza de calabresa e portuguesa" fill sizes="(max-width: 800px) 100vw, 58vw" />
          <span>Feita para dividir</span>
        </Reveal>
        <Reveal delay={0.12} className="story-note">
          <div className="story-note-number">01</div>
          <p>Do primeiro ingrediente ao último pedaço, o sabor vem antes de qualquer pressa.</p>
        </Reveal>
      </div>
    </section>
  );
}
