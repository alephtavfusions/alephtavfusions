"use client";
import "./Footer.css";

export default function Footer() {
  return (
    <footer className="footer fade-in">
      <div className="footer-container">
        <div className="footer-logo">
          <img src="https://github.com/alephtavfusions/alephtavfusions/blob/main/public/logo.png?raw=true" alt="Aleph Tav Fusions Logo" className="footer-img" />
          <span className="footer-name">Aleph Tav Fusions</span>
        </div>

        <div className="footer-links">
          <a href="#who-we-are">Who We Are</a>
          <a href="#what-we-do">What We Do</a>
          <a href="#join-us">Join Us</a>
          <a href="#contact">Contact</a>
        </div>

        <div className="footer-bottom">
          <p>© {new Date().getFullYear()} Aleph Tav Fusions. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
