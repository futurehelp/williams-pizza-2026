"use client";

import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowUpRight, Menu, X } from "lucide-react";
import { useState } from "react";
import { navLinks, orderLink } from "@/lib/site-content";

export function SiteHeader() {
  const [open, setOpen] = useState(false);

  return (
    <header className="site-header">
      <div className="header-inner">
        <a className="brand-mark" href="#top" aria-label="William’s Pizza, home">
          <Image src="/images/logo.jpg" alt="William’s Pizza Gramado" width={54} height={54} priority />
          <span>WILLIAM’S<br /><i>PIZZA</i></span>
        </a>

        <nav className="desktop-nav" aria-label="Main navigation">
          {navLinks.map((link) => (
            <a key={link.href} href={link.href}>
              {link.label}
            </a>
          ))}
        </nav>

        <a className="header-order desktop-order" href={orderLink} target="_blank" rel="noreferrer">
          Order now <ArrowUpRight size={17} strokeWidth={2.2} />
        </a>

        <button className="menu-toggle" onClick={() => setOpen((value) => !value)} aria-label={open ? "Close menu" : "Open menu"} aria-expanded={open}>
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            className="mobile-menu"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
          >
            {navLinks.map((link) => (
              <a key={link.href} href={link.href} onClick={() => setOpen(false)}>
                {link.label}
              </a>
            ))}
            <a className="header-order" href={orderLink} target="_blank" rel="noreferrer">
              Order now <ArrowUpRight size={17} />
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
