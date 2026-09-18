"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";

export function Header() {
  const [open, setOpen] = useState(false);
  useEffect(() => {
    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", closeOnEscape);
    return () => window.removeEventListener("keydown", closeOnEscape);
  }, []);
  return <>
    <div className="topline"><div className="wrap"><span className="address">7819 Colonial Springs Blvd · Alexandria, VA 22306</span><strong>Serving Northern Virginia · Since 1990</strong><a href="tel:+15712362119">(571) 236-2119</a></div></div>
    <header className="header"><div className="wrap header-inner"><Link className="brand" href="/" aria-label="The Pool Table Store home"><span className="brand-logo-shell"><Image src="/assets/official-logo.png" alt="The Pool Table Store" width={475} height={51} priority /></span></Link><button className="menu-button" aria-expanded={open} aria-controls="site-navigation" onClick={() => setOpen(!open)}>{open ? "Close" : "Menu"}</button><nav id="site-navigation" className={`nav ${open ? "open" : ""}`} aria-label="Main navigation"><a href="/tables" onClick={() => setOpen(false)}>Tables</a><a href="/services" onClick={() => setOpen(false)}>Services</a><a href="/restoration" onClick={() => setOpen(false)}>Restoration</a><a href="/about" onClick={() => setOpen(false)}>About</a><a href="/contact" onClick={() => setOpen(false)}>Contact</a><a className="nav-call" href="tel:+15712362119">Call / Text</a></nav></div></header>
  </>;
}

export function Footer() {
  return <footer className="footer"><div className="wrap"><span>© {new Date().getFullYear()} The Pool Table Store</span><span><a href="/tables">Tables</a> · <a href="/services">Services</a> · <a href="/contact">Contact</a> · <a href="https://syncedupsolutions.com" rel="noreferrer">Powered by SyncedUp</a></span></div></footer>;
}
