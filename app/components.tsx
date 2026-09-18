"use client";

import { useState } from "react";
import Image from "next/image";

export function Header() {
  const [open, setOpen] = useState(false);
  return <>
    <div className="topline"><div className="wrap"><span className="address">7819 Colonial Springs Blvd · Alexandria, VA 22306</span><strong>Serving Northern Virginia · Since 1990</strong><a href="tel:+15712362119">(571) 236-2119</a></div></div>
    <header className="header"><div className="wrap header-inner"><a className="brand" href="#top" aria-label="The Pool Table Store home"><span className="brand-logo-shell"><Image src="/assets/official-logo.png" alt="The Pool Table Store" width={475} height={51} priority /></span></a><button className="menu-button" aria-expanded={open} aria-controls="site-navigation" onClick={() => setOpen(!open)}>{open ? "Close" : "Menu"}</button><nav id="site-navigation" className={`nav ${open ? "open" : ""}`} aria-label="Main navigation"><a href="#services" onClick={() => setOpen(false)}>Services</a><a href="#process" onClick={() => setOpen(false)}>Our process</a><a href="#contact" onClick={() => setOpen(false)}>Contact</a><a className="nav-call" href="tel:+15712362119">Call / Text</a></nav></div></header>
  </>;
}
