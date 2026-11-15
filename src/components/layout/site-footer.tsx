import Image from "next/image";
import { ArrowUpRight, Camera, MapPin } from "lucide-react";
import { MotionLink } from "@/components/motion";
import { orderLink, socialLink } from "@/lib/site-content";

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="page-shell">
        <div className="footer-main">
          <div className="footer-brand">
            <Image src="/images/logo.jpg" alt="William’s Pizza Gramado" width={112} height={112} />
            <p>Fina no ponto.<br /><em>Generosa no sabor.</em></p>
          </div>
          <div className="footer-column">
            <span>Visite</span>
            <p><MapPin size={15} /> R. Reinaldo Baqui, 71<br />SALA 03 · Dutra<br />Gramado · RS</p>
          </div>
          <div className="footer-column">
            <span>Fale com a casa</span>
            <MotionLink href={orderLink}>Fazer um pedido <ArrowUpRight size={16} /></MotionLink>
            <MotionLink href={socialLink} target="_blank" rel="noreferrer">Instagram <Camera size={16} /></MotionLink>
          </div>
        </div>
        <div className="footer-bottom">
          <span>© 2026 William’s Pizza</span>
          <span>Gramado, Rio Grande do Sul</span>
          <a href="#top">Voltar ao topo ↑</a>
        </div>
      </div>
    </footer>
  );
}
