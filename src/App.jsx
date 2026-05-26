import React, { useState, useEffect } from 'react';
import C from './content';
import {
  useTweaks,
  TweaksPanel,
  TweakSection,
  TweakRadio,
  TweakSelect,
  TweakToggle,
} from './TweaksPanel';

const TWEAK_DEFAULTS = /*EDITMODE-BEGIN*/{
  "theme": "deep-space",
  "lang": "ro",
  "showStats": true,
  "denseHero": false
}/*EDITMODE-END*/;

const THEME_LABEL = {
  "deep-space":    { ro: "Deep Space",     en: "Deep Space" },
  "cosmic-purple": { ro: "Cosmic Purple",  en: "Cosmic Purple" },
  "aurora":        { ro: "Aurora",         en: "Aurora" },
  "stardust-gold": { ro: "Stardust Gold",  en: "Stardust Gold" },
  "minimal":       { ro: "Minimal Alb",    en: "Minimal White" }
};

// ─────────────────────────────────────────────────────────────────────────────
// Helpers
function t(node, lang) {
  if (node && typeof node === 'object' && (node.ro || node.en)) return node[lang] || node.ro || node.en;
  return node;
}

// ─────────────────────────────────────────────────────────────────────────────
// Navigation
function Nav({ lang, setLang }) {
  const links = [
    ['about',   C.nav.about],
    ['work',    C.nav.work],
    ['skills',  C.nav.skills],
    ['journey', C.nav.journey],
    ['contact', C.nav.contact]
  ];
  return (
    <nav className="nav">
      <a href="#top" className="nav-brand">
        <span className="nav-brand-mark"></span>
        Ruben Lupancu
      </a>
      <div className="nav-links">
        {links.map(([id, label]) => (
          <a key={id} href={`#${id}`}>{t(label, lang)}</a>
        ))}
      </div>
      <div className="nav-right">
        <div className="nav-lang">
          <button
            className={lang === 'ro' ? 'is-active' : ''}
            onClick={() => setLang('ro')}>RO</button>
          <button
            className={lang === 'en' ? 'is-active' : ''}
            onClick={() => setLang('en')}>EN</button>
        </div>
      </div>
    </nav>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// Count-up for hero stat numbers
function StatCounter({ value }) {
  const match = String(value).match(/^(\d+)(\D*)$/);
  const target = match ? parseInt(match[1]) : null;
  const suffix = match ? match[2] : '';
  const [display, setDisplay] = useState(target !== null ? '0' + suffix : value);

  useEffect(() => {
    if (target === null) return;
    const delay = setTimeout(() => {
      const duration = 1400;
      const start = performance.now();
      const tick = (now) => {
        const t = Math.min((now - start) / duration, 1);
        const eased = 1 - Math.pow(1 - t, 3);
        setDisplay(Math.round(eased * target) + suffix);
        if (t < 1) requestAnimationFrame(tick);
      };
      requestAnimationFrame(tick);
    }, 700);
    return () => clearTimeout(delay);
  }, [target, suffix]);

  return <>{display}</>;
}

// ─────────────────────────────────────────────────────────────────────────────
// Hero
function Hero({ lang, showStats }) {
  const h = C.hero;
  return (
    <section id="top" className="hero">
      <div className="hero-grid">
        <div>
          <div className="hero-eyebrow reveal">{t(h.eyebrow, lang)}</div>
          <h1 className="hero-title reveal">
            <span>{t(h.title_a, lang)}</span>
            <span className="hero-title-b">{t(h.title_b, lang)}</span>
          </h1>
          <p className="hero-sub reveal">{t(h.sub, lang)}</p>
          <div className="hero-ctas reveal">
            <a href="#work" className="btn btn-primary">
              {t(h.cta_primary, lang)} <span className="btn-arrow">→</span>
            </a>
            <a href="#contact" className="btn btn-ghost">
              {t(h.cta_secondary, lang)}
            </a>
          </div>
          {showStats && (
            <div className="hero-stats reveal">
              {h.stats.map((s, i) => (
                <div key={i} className="hero-stat">
                  <div className="hero-stat-value"><StatCounter value={s.value} /></div>
                  <div className="hero-stat-label">{t(s.label, lang)}</div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
      <div className="hero-scroll">
        <span className="hero-scroll-line"></span>
        <span>{t(h.scroll_hint, lang)}</span>
      </div>
    </section>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// About
function About({ lang }) {
  const a = C.about;
  return (
    <section id="about" className="section">
      <div className="section-kicker reveal">{t(a.kicker, lang)}</div>
      <h2 className="section-headline reveal">{t(a.headline, lang)}</h2>
      <div className="about-grid">
        <div className="about-photo-wrap reveal" data-parallax="0.05">
          <img className="about-photo" src="assets/ruben.jpg" alt="Ruben Lupancu" />
          <div className="about-photo-overlay"></div>
          <div className="about-photo-stamp">
            <span>RL · 21</span>
            <span>SV / RO</span>
          </div>
        </div>
        <div className="about-text">
          {a.paras[lang].map((p, i) => (
            <p key={i} className="reveal">{p}</p>
          ))}
          <div className="about-quick reveal">
            {a.quick.map((q, i) => (
              <div key={i} className="about-quick-cell">
                <div className="about-quick-label">{t(q.label, lang)}</div>
                <div className="about-quick-value">{t(q.value, lang)}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// Projects
function Projects({ lang }) {
  const p = C.projects;
  return (
    <section id="work" className="section">
      <div className="section-kicker reveal">{t(p.kicker, lang)}</div>
      <h2 className="section-headline reveal">{t(p.headline, lang)}</h2>
      <p className="section-sub reveal">{t(p.subhead, lang)}</p>
      <div className="projects-grid">
        {p.items.map((proj) => (
          <ProjectCard key={proj.id} proj={proj} lang={lang} />
        ))}
      </div>
    </section>
  );
}

function ProjectCard({ proj, lang }) {
  const isLive = !!proj.live;
  const glow = `oklch(0.75 0.16 ${proj.hue})`;
  return (
    <article
      className={`project-card reveal${proj.featured ? ' is-featured' : ''}`}
      style={{ '--proj-glow': glow }}
      data-hoverable>
      <div className="project-thumb">
        <div className="project-thumb-grid"></div>
        <span className="project-thumb-glyph">{proj.glyph}</span>
        <span className="project-thumb-corner">{proj.year}</span>
      </div>
      <div className="project-row">
        <h3 className="project-name">{proj.name}</h3>
        <span className={`project-badge${isLive ? ' is-live' : ''}`}>
          {isLive ? 'LIVE' : (lang === 'ro' ? 'CASE STUDY' : 'CASE STUDY')}
        </span>
      </div>
      <div className="project-tag">{t(proj.tag, lang)}</div>
      <p className="project-summary">{t(proj.summary, lang)}</p>
      <div className="project-stack">
        {proj.stack.map((s, i) => <span key={i}>{s}</span>)}
      </div>
      {isLive ? (
        <a className="project-cta" href={proj.live} target="_blank" rel="noopener noreferrer">
          {lang === 'ro' ? 'Vizitează aplicația' : 'Visit the app'} <span className="btn-arrow">↗</span>
        </a>
      ) : (
        <span className="project-cta is-disabled">
          {lang === 'ro' ? 'Indisponibil live · contactează-mă pentru detalii' : 'Not live · contact me for details'}
        </span>
      )}
    </article>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// Skills
function Skills({ lang }) {
  const s = C.skills;
  return (
    <section id="skills" className="section">
      <div className="section-kicker reveal">{t(s.kicker, lang)}</div>
      <h2 className="section-headline reveal">{t(s.headline, lang)}</h2>
      <div className="skills-grid">
        {s.groups.map((g, i) => (
          <div key={i} className="skill-group reveal">
            <div className="skill-group-label">{t(g.label, lang)}</div>
            <div className="skill-list">
              {g.items.map((it, j) => (
                <span key={j} className="skill-chip">{it}</span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// Experience
function Experience({ lang }) {
  const e = C.experience;
  return (
    <section id="journey" className="section">
      <div className="section-kicker reveal">{t(e.kicker, lang)}</div>
      <h2 className="section-headline reveal">{t(e.headline, lang)}</h2>
      <div className="timeline">
        {e.items.map((it, i) => (
          <div key={i} className="timeline-item reveal">
            <div className="timeline-period">{lang === 'ro' ? it.period : it.period_en}</div>
            <h3 className="timeline-title">{t(it.title, lang)}</h3>
            <div className="timeline-org">{t(it.org, lang)}</div>
            <p className="timeline-body">{t(it.body, lang)}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// Testimonials
function Testimonials({ lang }) {
  const tt = C.testimonials;
  return (
    <section id="voices" className="section">
      <div className="section-kicker reveal">{t(tt.kicker, lang)}</div>
      <h2 className="section-headline reveal">{t(tt.headline, lang)}</h2>
      <div className="testimonials-note reveal">// {t(tt.note, lang)}</div>
      <div className="testimonials-grid">
        {tt.items.map((it, i) => (
          <div key={i} className="testimonial reveal">
            <span className="testimonial-mark">"</span>
            <p className="testimonial-quote">{t(it.quote, lang)}</p>
            <div className="testimonial-author">{t(it.author, lang)}</div>
            <div className="testimonial-role">{t(it.role, lang)}</div>
          </div>
        ))}
      </div>
    </section>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// Contact
function Contact({ lang }) {
  const c = C.contact;
  return (
    <section id="contact" className="section">
      <div className="contact-grid">
        <div>
          <div className="section-kicker reveal">{t(c.kicker, lang)}</div>
          <h2 className="section-headline reveal">{t(c.headline, lang)}</h2>
          <p className="section-sub reveal">{t(c.sub, lang)}</p>
          <a href="mailto:lupancuruben2@gmail.com" className="btn btn-primary reveal">
            {t(c.cta, lang)} <span className="btn-arrow">→</span>
          </a>
          <div style={{ marginTop: 20 }}>
            <a href="cv.html" target="_blank" className="btn btn-ghost reveal">
              {t(C.nav.download, lang)} <span className="btn-arrow">↗</span>
            </a>
          </div>
        </div>
        <div className="contact-list reveal">
          {c.items.map((it, i) => (
            <a key={i} className="contact-row" href={it.href} target={it.href.startsWith('http') ? '_blank' : undefined} rel="noopener noreferrer">
              <span className="contact-label">{it.label}</span>
              <span className="contact-value">{it.value}</span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// Footer
function Footer({ lang }) {
  return (
    <footer className="footer">
      <div>
        <span className="footer-mark"></span>
        © 2026 · Ruben Lupancu
      </div>
      <div>{t(C.footer.line, lang)}</div>
      <div>v1.0 · Made with React</div>
    </footer>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// App + Tweaks
const THEME_SWATCH = {
  "deep-space":    "radial-gradient(circle at 70% 30%, #a78bfa55, transparent 60%), radial-gradient(circle at 20% 80%, #67e8f955, transparent 60%), #050510",
  "cosmic-purple": "radial-gradient(circle at 70% 30%, #e879f9aa, transparent 60%), radial-gradient(circle at 20% 80%, #c084fc88, transparent 60%), #110318",
  "aurora":        "radial-gradient(circle at 70% 30%, #5eead4aa, transparent 60%), radial-gradient(circle at 20% 80%, #38bdf888, transparent 60%), #02141a",
  "stardust-gold": "radial-gradient(circle at 70% 30%, #fbbf24aa, transparent 60%), radial-gradient(circle at 20% 80%, #f59e0b88, transparent 60%), #0a0805",
  "minimal":       "radial-gradient(circle at 70% 30%, #6b21a822, transparent 60%), radial-gradient(circle at 20% 80%, #0e749022, transparent 60%), #f7f6f3"
};

function App() {
  const [tw, setTweak] = useTweaks(TWEAK_DEFAULTS);

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', tw.theme);
  }, [tw.theme]);

  useEffect(() => {
    document.documentElement.lang = tw.lang;
  }, [tw.lang]);

  const lang = tw.lang;

  return (
    <>
      <Nav lang={lang} setLang={(v) => setTweak('lang', v)} />
      <Hero lang={lang} showStats={tw.showStats} />
      <About lang={lang} />
      <Projects lang={lang} />
      <Skills lang={lang} />
      <Experience lang={lang} />
      <Testimonials lang={lang} />
      <Contact lang={lang} />
      <Footer lang={lang} />

      <TweaksPanel title="Tweaks">
        <TweakSection label={lang === 'ro' ? 'Limbă' : 'Language'} />
        <TweakRadio
          label={lang === 'ro' ? 'Limbă' : 'Language'}
          value={lang}
          options={['ro', 'en']}
          onChange={(v) => setTweak('lang', v)}
        />

        <TweakSection label={lang === 'ro' ? 'Temă galactică' : 'Galactic theme'} />
        <TweakSelect
          label={lang === 'ro' ? 'Variantă' : 'Variant'}
          value={tw.theme}
          options={Object.keys(THEME_LABEL).map((k) => ({ value: k, label: t(THEME_LABEL[k], lang) }))}
          onChange={(v) => setTweak('theme', v)}
        />
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(5, 1fr)', gap: 6, marginTop: 4 }}>
          {Object.keys(THEME_LABEL).map((k) => (
            <button
              key={k}
              onClick={() => setTweak('theme', k)}
              title={t(THEME_LABEL[k], lang)}
              data-hoverable
              style={{
                aspectRatio: '1 / 1',
                borderRadius: 8,
                border: tw.theme === k ? '2px solid #29261b' : '1px solid rgba(0,0,0,0.15)',
                cursor: 'none',
                background: THEME_SWATCH[k],
                padding: 0
              }}
            />
          ))}
        </div>

        <TweakSection label={lang === 'ro' ? 'Hero' : 'Hero'} />
        <TweakToggle
          label={lang === 'ro' ? 'Statistici vizibile' : 'Show stats'}
          value={tw.showStats}
          onChange={(v) => setTweak('showStats', v)}
        />
      </TweaksPanel>
    </>
  );
}

export default App;
