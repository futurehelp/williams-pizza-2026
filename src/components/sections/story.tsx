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
          <SectionLabel>The house signature</SectionLabel>
          <h2>
            Pizza with
            <br />
            <em>a taste of Gramado.</em>
          </h2>
        </Reveal>
        <Reveal delay={0.12} className="story-copy">
          <p className="lead-copy">
            At William’s, every order starts with a simple choice: make great pizza without shortcuts.
          </p>
          <p>
            Thin, crisp dough is where it starts. Then come generous ingredients, careful preparation, and a commitment to deliver it hot across Gramado and Canela.
          </p>
          <MotionLink className="text-link dark-link" href={orderLink}>
            Taste the house signature <ArrowUpRight size={17} />
          </MotionLink>
        </Reveal>
      </div>
      <div className="page-shell story-media-grid">
        <Reveal className="story-image story-image-large">
          <Image src="/images/calabresa.jpeg" alt="Calabresa and Portuguese pizza" fill sizes="(max-width: 800px) 100vw, 58vw" />
          <span>Made for sharing</span>
        </Reveal>
        <Reveal delay={0.12} className="story-note">
          <div className="story-note-number">01</div>
          <p>From the first ingredient to the last slice, flavor comes before the rush.</p>
        </Reveal>
      </div>
    </section>
  );
}
