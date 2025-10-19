"use client";

import "./Features.css";
import Link from "next/link";

export default function Features() {
  const items = [
    {
      title: "Business Technology Consulting",
      desc: "We help organizations align technology with their business goals â€” from digital transformation to cloud strategy.",
    },
    {
      title: "Custom Software & Product Development",
      desc: "We design and build high-quality software solutions, from AI-powered dashboards to full-scale web platforms.",
    },
    {
      title: "Our In-House Products",
      desc: "We develop intelligent SaaS tools that solve real business problems â€” crafted from our consulting experience.",
    },
    {
      title: "Web Design, Marketing & Brand Development",
      desc: "We craft modern websites, brand identities, and marketing strategies â€” covering UI/UX, SEO, content, and go-to-market.",
    },
  ];

  return (
    <section className="features fade-in" id="what-we-do">
      <h2>What We Do</h2>
      <div className="feature-grid">
        {items.map((item, i) => {
          const content = (
            <>
              <h3>{item.title}</h3>
              <p>{item.desc}</p>
            </>
          );

          const isWebDesign = item.title === "Web Design, Marketing & Brand Development";
          return isWebDesign ? (
            <Link key={i} href="/services/web-design/" className="feature-card">
              {content}
            </Link>
          ) : (
            <div key={i} className="feature-card">
              {content}
            </div>
          );
        })}
      </div>
    </section>
  );
}
