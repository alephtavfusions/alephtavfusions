import Link from "next/link";
import "../services.css";

export const metadata = {
  title: "Web Design, Marketing & Brand Development | Aleph Tav Fusions",
  description:
    "Pricing and packages for Wix websites, branding, SEO, analytics, and monthly retainers.",
};

export default function WebDesignPage() {
  return (
    <main className="services-page">
      <div className="services-container">
        <header className="services-header">
          <h1>Web Design, Marketing & Brand Development</h1>
          <p className="services-note">All prices in CAD unless noted.</p>
        </header>

        <section className="services-section">
          <h2>Website Design & Development (Wix)</h2>
          <table className="services-table">
            <thead>
              <tr>
                <th>Feature</th>
                <th>Description</th>
                <th>Price (CAD)</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Landing Page</td>
                <td>1‑page scroll site with hero, services, and contact sections</td>
                <td>$600</td>
              </tr>
              <tr>
                <td>Multi‑Page Site</td>
                <td>3–5 pages (Home, About, Services, Contact, etc.)</td>
                <td>$1,200</td>
              </tr>
              <tr>
                <td>E‑Commerce Setup</td>
                <td>Add store, products, and payment gateways</td>
                <td>$500</td>
              </tr>
              <tr>
                <td>Booking System</td>
                <td>Integrate Wix Bookings for appointments or classes</td>
                <td>$250</td>
              </tr>
              <tr>
                <td>Blog/News Section</td>
                <td>Blog setup, SEO, and category structure</td>
                <td>$150</td>
              </tr>
              <tr>
                <td>Animations & Interactivity</td>
                <td>Smooth effects, scroll reveals, motion</td>
                <td>$250</td>
              </tr>
              <tr>
                <td>Mobile Optimization</td>
                <td>Ensure full responsiveness across devices</td>
                <td>$100</td>
              </tr>
              <tr>
                <td>Domain & SSL Setup</td>
                <td>Domain connection, HTTPS configuration</td>
                <td>$75</td>
              </tr>
            </tbody>
          </table>
        </section>

        <section className="services-section">
          <h2>Branding & Visual Design</h2>
          <table className="services-table">
            <thead>
              <tr>
                <th>Feature</th>
                <th>Description</th>
                <th>Price</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Logo Design</td>
                <td>Simple logo with 2 revisions</td>
                <td>$250</td>
              </tr>
              <tr>
                <td>Color Palette & Typography Guide</td>
                <td>Custom brand identity setup</td>
                <td>$100</td>
              </tr>
              <tr>
                <td>Favicon & Icons</td>
                <td>Consistent icons and browser branding</td>
                <td>$50</td>
              </tr>
              <tr>
                <td>Brand Kit Export</td>
                <td>PDF with logo, fonts, and color references</td>
                <td>$50</td>
              </tr>
            </tbody>
          </table>
        </section>

        <section className="services-section">
          <h2>Content & SEO</h2>
          <table className="services-table">
            <thead>
              <tr>
                <th>Feature</th>
                <th>Description</th>
                <th>Price</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Copywriting (per page)</td>
                <td>Clear, SEO‑optimized copy</td>
                <td>$75</td>
              </tr>
              <tr>
                <td>Basic SEO Setup</td>
                <td>Titles, descriptions, keywords</td>
                <td>$100</td>
              </tr>
              <tr>
                <td>Advanced SEO Audit</td>
                <td>Google Search Console + Schema setup</td>
                <td>$250</td>
              </tr>
              <tr>
                <td>Blog Article (per post)</td>
                <td>500–800 words + keyword targeting</td>
                <td>$150</td>
              </tr>
            </tbody>
          </table>
        </section>

        <section className="services-section">
          <h2>Integrations & Tools</h2>
          <table className="services-table">
            <thead>
              <tr>
                <th>Feature</th>
                <th>Description</th>
                <th>Price</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Google Analytics 4 Setup</td>
                <td>Track performance & conversions</td>
                <td>$75</td>
              </tr>
              <tr>
                <td>Facebook Pixel Integration</td>
                <td>Connect events for Meta Ads</td>
                <td>$75</td>
              </tr>
              <tr>
                <td>Google Tag Manager Setup</td>
                <td>Add advanced event tracking</td>
                <td>$75</td>
              </tr>
              <tr>
                <td>CRM / Contact Form Setup</td>
                <td>Wix forms linked to your inbox or database</td>
                <td>$100</td>
              </tr>
              <tr>
                <td>Email Marketing Integration</td>
                <td>Connect Mailchimp or Wix Email</td>
                <td>$150</td>
              </tr>
              <tr>
                <td>Chatbot or WhatsApp Widget</td>
                <td>Real‑time customer interaction</td>
                <td>$100</td>
              </tr>
            </tbody>
          </table>
        </section>

        <section className="services-section">
          <h2>Digital Marketing Add‑Ons</h2>
          <table className="services-table">
            <thead>
              <tr>
                <th>Feature</th>
                <th>Description</th>
                <th>Price</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Facebook Ads Setup</td>
                <td>Campaign creation, audience & creatives</td>
                <td>$250</td>
              </tr>
              <tr>
                <td>Google Ads Setup</td>
                <td>Search or display ad campaign</td>
                <td>$250</td>
              </tr>
              <tr>
                <td>Monthly Ad Optimization</td>
                <td>Continuous tuning & performance reports</td>
                <td>$300/mo</td>
              </tr>
              <tr>
                <td>Remarketing Setup</td>
                <td>Google & Meta retargeting audiences</td>
                <td>$150</td>
              </tr>
              <tr>
                <td>A/B Landing Page Testing</td>
                <td>Split test designs to boost conversions</td>
                <td>$150/mo</td>
              </tr>
            </tbody>
          </table>
        </section>

        <section className="services-section">
          <h2>Analytics & Reporting</h2>
          <table className="services-table">
            <thead>
              <tr>
                <th>Feature</th>
                <th>Description</th>
                <th>Price</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Monthly Performance Report</td>
                <td>Overview of traffic, conversions, CTR</td>
                <td>$75/mo</td>
              </tr>
              <tr>
                <td>Google Looker Dashboard</td>
                <td>Interactive live marketing dashboard</td>
                <td>$300</td>
              </tr>
              <tr>
                <td>Conversion Funnel Analysis</td>
                <td>Track user drop‑offs & improvements</td>
                <td>$150</td>
              </tr>
            </tbody>
          </table>
        </section>

        <section className="services-section">
          <h2>Monthly Retainer Plans</h2>
          <table className="services-table">
            <thead>
              <tr>
                <th>Plan</th>
                <th>Ideal For</th>
                <th>Price</th>
                <th>Includes</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Basic Care</td>
                <td>Solo business / landing site</td>
                <td>$150/mo</td>
                <td>1 small content edit, monthly analytics check, backup & uptime monitoring</td>
              </tr>
              <tr>
                <td>Growth Partner</td>
                <td>Businesses running ad campaigns</td>
                <td>$350/mo</td>
                <td>2 content updates, ad optimization, SEO tweaks, performance report</td>
              </tr>
              <tr>
                <td>Pro Partner</td>
                <td>Active brand or e‑commerce</td>
                <td>$650/mo</td>
                <td>Weekly campaign management, strategy calls, full analytics, competitor insights</td>
              </tr>
              <tr>
                <td>Enterprise+</td>
                <td>Multi‑location or high‑traffic clients</td>
                <td>$1,000+/mo</td>
                <td>Dedicated manager, multi‑channel campaigns, roadmap & reporting suite</td>
              </tr>
            </tbody>
          </table>
        </section>

        <section className="services-section">
          <h2>Hosting & Essentials</h2>
          <table className="services-table">
            <thead>
              <tr>
                <th>Item</th>
                <th>Notes</th>
                <th>Price</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Wix Premium Plan</td>
                <td>Business Basic to Business Elite</td>
                <td>$200–$500/year</td>
              </tr>
              <tr>
                <td>Domain Name</td>
                <td>Through Wix or third party</td>
                <td>$20–$30/year</td>
              </tr>
              <tr>
                <td>Business Email (Google Workspace)</td>
                <td>Professional inbox</td>
                <td>$90/year/user</td>
              </tr>
            </tbody>
          </table>
        </section>

        <section className="services-section">
          <h2>Example Packages</h2>
          <div className="package-grid">
            <div className="package-card">
              <h3>Starter Build – $850</h3>
              <ul className="muted">
                <li>1‑page Wix site</li>
                <li>Mobile‑responsive design</li>
                <li>Google Analytics & Facebook Pixel setup</li>
                <li>Domain & SSL setup</li>
                <li>Basic SEO</li>
              </ul>
              <p className="muted">Perfect for freelancers or local shops</p>
            </div>
            <div className="package-card">
              <h3>Growth Plan – $1,650</h3>
              <ul className="muted">
                <li>5‑page site</li>
                <li>SEO optimization + ad pixel integration</li>
                <li>1‑month ad campaign setup & optimization</li>
                <li>Analytics report + training video</li>
              </ul>
              <p className="muted">Best for growing businesses wanting visibility and leads</p>
            </div>
            <div className="package-card">
              <h3>Scale Plan – $3,500+</h3>
              <ul className="muted">
                <li>6–10 page site or e‑commerce</li>
                <li>Branding + copywriting included</li>
                <li>Advanced SEO & analytics dashboard</li>
                <li>2‑month campaign management</li>
              </ul>
              <p className="muted">Ideal for brands ready to scale revenue & awareness</p>
            </div>
          </div>
        </section>

        <Link className="back-link" href="/">← Back to Home</Link>
      </div>
    </main>
  );
}

