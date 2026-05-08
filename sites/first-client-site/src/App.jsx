function App() {
  return (
    <div className="page-shell">
      <header className="site-header">
        <div className="brand">First Client Site</div>
        <nav>
          <a href="#services">Services</a>
          <a href="#contact">Contact</a>
        </nav>
      </header>

      <main>
        <section className="hero">
          <div>
            <p className="eyebrow">Launch your brand with confidence</p>
            <h1>Beautiful websites built for growth.</h1>
            <p>
              A clean, modern website that highlights your services, builds trust,
              and helps visitors take the next step.
            </p>
            <a className="button" href="#contact">
              Let's talk
            </a>
          </div>
        </section>

        <section className="services" id="services">
          <h2>Our Services</h2>
          <div className="service-grid">
            <article>
              <h3>Strategy & planning</h3>
              <p>Define your goals with a website designed to convert visitors into clients.</p>
            </article>
            <article>
              <h3>Design & branding</h3>
              <p>Create a strong online presence with polished visuals and a cohesive identity.</p>
            </article>
            <article>
              <h3>Launch support</h3>
              <p>Deploy a reliable site quickly and ensure it performs smoothly across devices.</p>
            </article>
          </div>
        </section>

        <section className="contact" id="contact">
          <div>
            <h2>Ready to get started?</h2>
            <p>Reach out today and we’ll build a website that works as hard as your business.</p>
            <a className="button button-alt" href="mailto:hello@example.com">
              Contact us
            </a>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <p>© 2026 First Client Site. Clean, responsive design for your next launch.</p>
      </footer>
    </div>
  );
}

export default App;
