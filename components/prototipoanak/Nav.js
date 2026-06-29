"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { ANAK_LOGO } from "./images";

const LINKS = [
  { href: "#clases", label: "Clases" },
  { href: "#membresia", label: "Membresía" },
  { href: "#sobre-mi", label: "Sobre mí" },
  { href: "#blog", label: "Blog" },
];

export default function Nav() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header className="anak-nav">
      <div className="anak-container anak-nav__inner">
        <a href="#" className="anak-nav__brand">
          <Image src={ANAK_LOGO} alt="ANAK — Barre by Anak" width={120} height={40} className="anak-nav__logo" priority />
          <span className="anak-nav__brand-sub">Barre by Anak</span>
        </a>

        <nav className="anak-nav__links" aria-label="Principal">
          {LINKS.map((link) => (
            <a key={link.href} href={link.href}>
              {link.label}
            </a>
          ))}
        </nav>

        <a href="#membresia" className="anak-btn-dark anak-nav__cta">
          Únete
        </a>

        <button
          type="button"
          className="anak-nav__burger"
          aria-label={open ? "Cerrar menú" : "Abrir menú"}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          <span />
          <span />
          <span />
        </button>
      </div>

      <div className={`anak-nav__drawer ${open ? "is-open" : ""}`} aria-hidden={!open}>
        <button
          type="button"
          className="anak-nav__drawer-backdrop"
          aria-label="Cerrar menú"
          onClick={() => setOpen(false)}
        />
        <div className="anak-nav__drawer-panel">
          <nav className="anak-nav__drawer-links">
            {LINKS.map((link) => (
              <a key={link.href} href={link.href} onClick={() => setOpen(false)}>
                {link.label}
              </a>
            ))}
          </nav>
          <a href="#membresia" className="anak-btn-dark anak-nav__drawer-cta" onClick={() => setOpen(false)}>
            Únete
          </a>
        </div>
      </div>
    </header>
  );
}
