import { profile, marqueeSkills } from '../data/content'

export default function Hero() {
  return (
    <section id="home" className="hero">
      <div className="hero-blob" aria-hidden="true" />

      <div className="hero-inner">
        <p className="hero-chip">
          <span className="hero-chip-dot" /> Open to new opportunities
        </p>

        <h1 className="hero-title">
          <span className="hero-title-row">Shreyansh</span>
          <span className="hero-title-row hero-title-row--accent">
            Jaiswal<span className="hero-title-dot">.</span>
          </span>
        </h1>

        <div className="hero-facts">
          <p className="hero-role">
            Software Engineer <span className="hero-role-em">— Full-Stack &amp; E-Commerce</span>
          </p>
          <p className="hero-location">{profile.location}</p>
        </div>

        <p className="hero-sub">
          One year turning ideas into shipped product — Shopify storefronts at Hummingbird Web
          Solutions, merchant onboarding tools at Amazon. B.Tech in Electronics &amp; Communication
          Engineering, MNNIT Allahabad.
        </p>

        <div className="hero-actions">
          <a className="btn btn-solid" href="#contact">
            Let&apos;s talk
          </a>
          <a className="btn btn-outline" href="#work">
            See the work <span className="btn-arrow">↓</span>
          </a>
        </div>
      </div>

      <div className="marquee">
        <div className="marquee-track">
          {[...marqueeSkills, ...marqueeSkills].map((skill, i) => (
            <span className="marquee-item" key={`${skill}-${i}`}>
              {skill} <span className="marquee-star">✦</span>
            </span>
          ))}
        </div>
      </div>
    </section>
  )
}
