"use client";

import { useEffect, useState } from "react";
import "./Navbar.css";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className="navbar">
      <div className="nav-container">
        <div className="logo">
          <img src={`${process.env.NEXT_PUBLIC_BASE_PATH || ''}/logo_2.png`} alt="Aleph Tav Fusions" className="logo-img" />
          <div className="logo-text">
            <span className="logo-name">ALEPH TAV</span>
            <span className="logo-sub">FUSIONS</span>
          </div>
        </div>

        <div className="nav-links">
          <a href="#who-we-are">Who We Are</a>
          <a href="#what-we-do">What We Do</a>
          <a href="#join-us">How to Be a Part</a>
          <a href="#contact">Contact</a>
        </div>

        <div className="nav-extra">
          {/* Optional buttons or icons later */}
        </div>
      </div>
    </nav>
  );
}
