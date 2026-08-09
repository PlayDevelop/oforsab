import { ParallaxMotion } from "./ParallaxMotion";

const services = [
  {
    number: "01",
    title: "Mönstrad betong",
    text: "Betong med karaktär. Slitstarka ytor med känsla för form, färg och detaljer.",
    tag: "Specialistområde",
  },
  {
    number: "02",
    title: "Betongarbete",
    text: "Från grund till färdig yta – noggrant utfört och byggt för att hålla länge.",
    tag: "Från idé till klart",
  },
  {
    number: "03",
    title: "Utemiljöer",
    text: "Uppfarter, gångar, uteplatser och andra ytor som lyfter hela fastigheten.",
    tag: "För hem & företag",
  },
];

const businessJsonLd = {
  "@context": "https://schema.org",
  "@type": "GeneralContractor",
  "@id": "https://oforsab.se/#foretag",
  name: "Oliver Fors AB",
  alternateName: "OFORSAB",
  url: "https://oforsab.se",
  email: "oliver@oforsab.se",
  telephone: "+46703456031",
  description:
    "Oliver Fors AB utför mönstrad betong, betongarbeten och utemiljöer i Borås och Västra Götaland.",
  identifier: {
    "@type": "PropertyValue",
    propertyID: "Organisationsnummer",
    value: "559504-3075",
  },
  address: {
    "@type": "PostalAddress",
    streetAddress: "Västermalmsgatan 27",
    postalCode: "504 66",
    addressLocality: "Borås",
    addressCountry: "SE",
  },
  areaServed: {
    "@type": "AdministrativeArea",
    name: "Västra Götaland",
  },
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Betongtjänster",
    itemListElement: services.map((service) => ({
      "@type": "Offer",
      itemOffered: {
        "@type": "Service",
        name: service.title,
        description: service.text,
      },
    })),
  },
};

export default function Home() {
  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(businessJsonLd) }}
      />
      <ParallaxMotion />
      <div className="scroll-progress" aria-hidden="true" />
      <nav className="nav shell" aria-label="Huvudnavigation">
        <a className="brand" href="#top" aria-label="OFORSAB startsida">
          <img
            className="brand-logo"
            src="/oforsab-wordmark-white-v2.png"
            alt="O.FORS AB"
            width="2665"
            height="296"
          />
          <span className="brand-accent" aria-hidden="true" />
        </a>
        <div className="nav-links">
          <a href="#tjanster">Tjänster</a>
          <a href="#om">Om OFORSAB</a>
          <a className="nav-cta" href="#kontakt">
            Prata projekt <span>↗</span>
          </a>
        </div>
      </nav>

      <section className="hero" id="top">
        <div className="hero-grid" aria-hidden="true" />
        <div className="hero-glow" aria-hidden="true" />
        <div className="shell hero-content">
          <div className="eyebrow">
            <span className="eyebrow-line" /> Betong & ytor · Västra Götaland
          </div>
          <h1>
            Betong som
            <br />
            <em>står ut.</em>
          </h1>
          <p className="hero-copy">
            OFORSAB skapar hållbara betonglösningar med precision, personlighet
            och ett öga för detaljer.
          </p>
          <div className="hero-actions">
            <a className="button button-coral" href="#kontakt">
              Berätta om ditt projekt <span>↗</span>
            </a>
            <a className="text-link" href="#tjanster">
              Se vad vi gör <span>↓</span>
            </a>
          </div>
          <div className="hero-meta">
            <span>01</span>
            <span className="meta-rule" />
            <span>
              En liten firma.
              <br />
              Stor känsla för betong.
            </span>
          </div>
        </div>
        <div className="hero-photo-wrap">
          <div className="photo-ring" aria-hidden="true" />
          <img
            className="hero-photo"
            src="/oliver-hero-v2.webp"
            alt="Oliver Fors i en professionell betongmiljö"
            width="1086"
            height="1448"
            fetchPriority="high"
            decoding="async"
          />
          <div className="photo-label">
            <span className="pulse" /> Oliver Fors <span>— grundare</span>
          </div>
        </div>
        <div className="scroll-note" aria-hidden="true">
          Scrolla för mer <span>↓</span>
        </div>
      </section>

      <section className="intro shell" id="om">
        <div className="section-kicker" data-reveal>
          / 01 — OFORSAB
        </div>
        <div className="intro-copy">
          <h2 data-reveal="left">
            Rakt på sak.
            <br />
            <span>Bra betong.</span>
          </h2>
          <div data-reveal="right">
            <p>
              Det ska kännas enkelt att anlita en betongentreprenör. Därför
              håller OFORSAB kommunikationen rak, jobbet noggrant och resultatet
              genomtänkt.
            </p>
            <a className="arrow-link" href="#kontakt">
              Lär känna OFORSAB <span>↗</span>
            </a>
          </div>
        </div>
      </section>

      <section className="services-section" id="tjanster">
        <div className="shell">
          <div className="services-heading">
            <div className="section-kicker" data-reveal>
              / 02 — DET HÄR GÖR VI
            </div>
            <h2 data-reveal="right">
              Ytor som
              <br />
              <span>gör skillnad.</span>
            </h2>
          </div>
          <div className="service-list">
            {services.map((service) => (
              <article className="service-row" data-reveal key={service.number}>
                <div className="service-number">{service.number}</div>
                <div className="service-main">
                  <div className="service-tag">{service.tag}</div>
                  <h3>{service.title}</h3>
                </div>
                <p>{service.text}</p>
                <span className="service-arrow">↗</span>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="statement">
        <div className="statement-text" data-reveal="scale">
          Mönster.
          <br />
          <span>Material.</span>
          <br />
          Attityd.
        </div>
        <div className="statement-texture" aria-hidden="true" />
      </section>

      <section className="contact shell" id="kontakt">
        <div className="contact-top" data-reveal>
          <div className="section-kicker">/ 03 — HÖR AV DIG</div>
          <div className="contact-stamp">
            OF
            <br />
            ORS
            <br />
            AB<span>✦</span>
          </div>
        </div>
        <h2 data-reveal="left">
          Har du en yta
          <br />i tankarna<span>?</span>
        </h2>
        <div className="contact-bottom" data-reveal>
          <p>
            Skicka några rader om ditt projekt så återkommer Oliver med nästa
            steg.
          </p>
          <a className="button button-dark" href="mailto:oliver@oforsab.se">
            oliver@oforsab.se <span>↗</span>
          </a>
        </div>
      </section>

      <footer className="footer shell">
        <div className="footer-company">
          <a className="brand" href="#top" aria-label="OFORSAB startsida">
            <img
              className="brand-logo"
              src="/oforsab-wordmark-white-v2.png"
              alt="O.FORS AB"
              width="2665"
              height="296"
            />
            <span className="brand-accent" aria-hidden="true" />
          </a>
          <address className="footer-details">
            <span>Västermalmsgatan 27 · 504 66 Borås</span>
            <span>Org.nr 559504-3075</span>
            <a href="tel:+46703456031">070-345 60 31</a>
          </address>
        </div>
        <div className="footer-meta">
          <span>Betong med personlighet.</span>
          <span>© 2026 Oliver Fors AB</span>
        </div>
      </footer>
    </main>
  );
}
