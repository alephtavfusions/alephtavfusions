"use client";
import { useEffect, useState } from "react";
import Link from "next/link"; // ✅ Import Next.js Link
import "./Navbar.css";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className={`navbar ${scrolled ? "scrolled" : ""}`}>
      <div className="nav-container">
        {/* ✅ Left: Logo (clickable link to home) */}
        <Link href="/" className="logo">
          <img
            src="https://github.com/alephtavfusions/alephtavfusions/blob/main/public/logo_2.png?raw=true"
            alt="Aleph Tav Fusions"
            className="logo-img"
          />
          <div className="logo-text">
            <span className="logo-name">ALEPH TAV</span>
            <span className="logo-sub">FUSIONS</span>
          </div>
        </Link>

        {/* Center: Links */}
        <div className={`nav-links ${menuOpen ? "open" : ""}`}>
          <a href="#who-we-are" onClick={() => setMenuOpen(false)}>
            Who We Are
          </a>
          <a href="#what-we-do" onClick={() => setMenuOpen(false)}>
            What We Do
          </a>
          <a href="#join-us" onClick={() => setMenuOpen(false)}>
            How to Be a Part
          </a>
          <a href="#contact" onClick={() => setMenuOpen(false)}>
            Contact
          </a>
        </div>

        {/* Right: Hamburger */}
        <button
          className={`hamburger ${menuOpen ? "active" : ""}`}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle Menu"
        >
          <span />
          <span />
          <span />
        </button>
      </div>
    </nav>
  );
}
