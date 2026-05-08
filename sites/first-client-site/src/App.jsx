import content from './content';

function App() {
  const { businessName, hero, services, about, proof, contact, footer } = content;

  return (
    <div className="page-shell">
      <header className="site-header">
        <div className="brand">{businessName}</div>
        <nav>
          <a href="#services">Services</a>
          <a href="#about">About</a>
          <a href="#proof">Proof</a>
          <a href="#contact">Contact</a>
        </nav>
      </header>

      <main>
        <section className="hero" id="hero">
          <div>
            <p className="eyebrow">{hero.eyebrow}</p>
            <h1>{hero.headline}</h1>
            <p>{hero.description}</p>
            <a className="button" href={hero.ctaHref}>
              {hero.ctaText}
            </a>
          </div>
        </section>

        <section className="section-block services" id="services">
          <h2>Services</h2>
          <div className="service-grid">
            {services.map((item) => (
              <article key={item.title}>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="section-block about" id="about">
          <h2>About</h2>
          <div className="about-copy">
            <p>{about.headline}</p>
            <ul>
              {about.points.map((point) => (
                <li key={point}>{point}</li>
              ))}
            </ul>
          </div>
        </section>

        <section className="section-block proof" id="proof">
          <h2>{proof.headline}</h2>
          <div className="proof-grid">
            {proof.items.map((item) => (
              <article key={item.label}>
                <p className="proof-value">{item.value}</p>
                <p>{item.label}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="section-block contact" id="contact">
          <div>
            <h2>{contact.headline}</h2>
            <p>{contact.description}</p>
            <a className="button button-alt" href={contact.ctaHref}>
              {contact.ctaText}
            </a>
            <p className="contact-detail">{contact.email}</p>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <p>© 2026 {businessName}. {footer}</p>
      </footer>
    </div>
  );
}

export default App;
