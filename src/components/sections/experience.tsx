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
            <SectionLabel>At your door</SectionLabel>
            <h2>
              The night starts
              <br />
              <em>when it arrives.</em>
            </h2>
            <p>
              Delivery across Gramado and Canela, prepared to preserve William’s crisp crust, heat, and flavor from our oven to your table.
            </p>
            <MotionLink className="button button-red" href={orderLink}>
              Order on WhatsApp <ArrowUpRight size={18} />
            </MotionLink>
          </Reveal>
          <Reveal delay={0.12} className="experience-image">
            <Image src="/images/fondue.jpg" alt="William’s Pizza dessert" fill sizes="(max-width: 800px) 100vw, 46vw" />
            <div className="image-caption"><Truck size={18} /><span>Delivery in Gramado and Canela</span></div>
          </Reveal>
        </div>
        <div className="promise-grid">
          <Reveal className="promise-card promise-card-featured">
            <span className="promise-icon"><Check size={19} /></span>
            <div><strong>R$ 29 minimum</strong><p>Your order, without the friction.</p></div>
          </Reveal>
          <Reveal delay={0.08} className="promise-card">
            <span className="promise-index">02</span>
            <div><strong>Thin crust</strong><p>Crunch that holds the flavor.</p></div>
          </Reveal>
          <Reveal delay={0.16} className="promise-card">
            <span className="promise-index">03</span>
            <div><strong>Made to order</strong><p>From our oven to your night.</p></div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
