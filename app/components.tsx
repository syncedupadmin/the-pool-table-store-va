"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

const navItems = [
  ["Tables", "/tables"],
  ["Services", "/services"],
  ["Restoration", "/restoration"],
  ["About", "/about"],
  ["Contact", "/contact"],
] as const;

export function Header() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  useEffect(() => {
    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", closeOnEscape);
    return () => window.removeEventListener("keydown", closeOnEscape);
  }, []);
  return <>
    <div className="topline"><div className="wrap"><span className="address">7819 Colonial Springs Blvd · Alexandria, VA 22306</span><strong>Pool table specialists since 1990</strong><a href="tel:+15712362119">Call (571) 236-2119</a></div></div>
    <header className="header"><div className="wrap header-inner"><Link className="brand" href="/" aria-label="The Pool Table Store home"><Image src="/assets/official-logo.png" alt="The Pool Table Store" width={475} height={51} priority /></Link><button className="menu-button" aria-expanded={open} aria-controls="site-navigation" onClick={() => setOpen(!open)}>{open ? "Close" : "Menu"}</button><nav id="site-navigation" className={`nav ${open ? "open" : ""}`} aria-label="Main navigation">{navItems.map(([label, href]) => <Link key={href} href={href} aria-current={pathname === href ? "page" : undefined} onClick={() => setOpen(false)}>{label}</Link>)}<div className="nav-actions"><a className="nav-text" href="sms:+15712362119">Text us</a><a className="nav-call" href="tel:+15712362119">Call now</a></div></nav></div></header>
  </>;
}

export function Footer() {
  return <footer className="footer"><div className="wrap footer-grid"><div><Link className="footer-brand" href="/">The Pool Table Store</Link><p>Sales, moving, repair, recovery, and restoration from an Alexandria pool table specialist.</p></div><div><strong>Visit</strong><span>7819 Colonial Springs Blvd<br/>Alexandria, VA 22306</span></div><div><strong>Reach us</strong><a href="tel:+15712362119">(571) 236-2119</a><a href="sms:+15712362119">Send a text</a></div></div><div className="wrap footer-bottom"><span>© {new Date().getFullYear()} The Pool Table Store</span><span><a href="/tables">Tables</a><a href="/services">Services</a><a href="/restoration">Restoration</a><a href="https://syncedupsolutions.com" rel="noreferrer">Powered by SyncedUp</a></span></div></footer>;
}
