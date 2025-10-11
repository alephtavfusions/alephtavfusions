"use client";
import "./styles/landing.css";
import { useEffect } from "react";
import Navbar from "./components/Navbar";
import Features from "./components/Features";
import JoinUs from "./components/JoinUs";
import Contact from "./components/Contact";
import Footer from "./components/Footer";




export default function HomePage() {
  // Simple fade-in animation
  useEffect(() => {
    const elements = document.querySelectorAll(".fade-in");
    elements.forEach((el, i) => {
      setTimeout(() => el.classList.add("visible"), i * 150);
    });
  }, []);

  return (
    <>
      <Navbar />
      {/* Hero Section */}
      <section className="hero fade-in" id="who-we-are">
        <h1>Aleph Tav Fusions</h1>
        <p>We help you build intelligent, elegant digital solutions.</p>
        <a href="#contact" className="cta-btn">Get in Touch</a>
      </section>

      {/* About / Services Section */}
      <section className="about fade-in" id="what-we-do">
        <h2>Our Vision</h2>
        <p>
          At <strong>Aleph Tav Fusions</strong>, we combine strategy, design, and technology
          to craft meaningful experiences for modern businesses.
        </p>
      </section>

      <Features />

      <JoinUs />
      <Contact />
      <Footer />
    </>
  );
}
