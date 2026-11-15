import { SiteHeader } from "@/components/layout/site-header";
import { SiteFooter } from "@/components/layout/site-footer";
import { Experience } from "@/components/sections/experience";
import { Hero } from "@/components/sections/hero";
import { MenuSection } from "@/components/sections/menu";
import { Story } from "@/components/sections/story";

export function SitePage() {
  return (
    <>
      <SiteHeader />
      <main>
        <Hero />
        <Story />
        <MenuSection />
        <Experience />
      </main>
      <SiteFooter />
    </>
  );
}
