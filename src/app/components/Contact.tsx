"use client";
import "./Contact.css";

export default function Contact() {
  return (
    <section className="contact fade-in" id="contact">
      <div className="contact-container">
        <h2>
          Let’s <span>Connect</span>
        </h2>
        <p>
          Ready to collaborate or learn more about <strong>Aleph Tav Fusions</strong>?
          Reach out — we’d love to hear from you.
        </p>

        <div className="contact-options">
          <a
            href="mailto:contact@alephtavfusions.com"
            className="contact-btn primary"
          >
            ✉️ Send Us an Email
          </a>

          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="contact-btn secondary"
          >
            🌐 Visit Our LinkedIn
          </a>
        </div>
      </div>
    </section>
  );
}
