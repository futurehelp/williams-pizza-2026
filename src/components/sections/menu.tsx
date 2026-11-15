import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { Reveal } from "@/components/motion";
import { MotionLink } from "@/components/motion";
import { SectionLabel } from "@/components/ui/section-label";
import { menuItems, orderLink } from "@/lib/site-content";

export function MenuSection() {
  return (
    <section className="menu-section section-pad" id="cardapio">
      <div className="page-shell">
        <div className="section-intro menu-intro">
          <Reveal>
            <SectionLabel inverse>From the oven to the table</SectionLabel>
            <h2>
              Choose your
              <br />
              <em>next slice.</em>
            </h2>
          </Reveal>
          <Reveal delay={0.1} className="intro-aside intro-aside-light">
            <p>Classic flavors, combinations made to share, and sweets that finish the night on the right note.</p>
            <MotionLink className="text-link light-link" href={orderLink}>
              Start an order <ArrowUpRight size={17} />
            </MotionLink>
          </Reveal>
        </div>
        <div className="menu-grid">
          {menuItems.map((item, index) => (
            <Reveal key={item.name} delay={(index % 3) * 0.07} className="menu-card">
              <div className="menu-card-image">
                <Image src={item.image} alt={item.name} fill sizes="(max-width: 700px) 100vw, 33vw" />
                <span className="menu-category">{item.category}</span>
              </div>
              <div className="menu-card-body">
                <div>
                  <h3>{item.name}</h3>
                  <p>{item.description}</p>
                </div>
                <span className="menu-price">{item.price}</span>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
