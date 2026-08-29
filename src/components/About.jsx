import Reveal from './Reveal'
import WindowChrome from './WindowChrome'
import { profile } from '../data/content'

export default function About() {
  return (
    <section id="about" className="section about">
      <span className="section-index">01</span>

      <div className="about-grid">
        <Reveal as="h2" className="section-heading">
          About
        </Reveal>

        <div className="about-copy">
          <Reveal>
            <p className="lede">
              I like shipping things that feel considered — fast, responsive, and a little bit
              delightful to use.
            </p>
          </Reveal>
          <Reveal delay={80}>
            <p>
              Right now I'm at <strong>Hummingbird Web Solutions</strong>, building Shopify
              storefront experiences — search, filtering, and product-listing UI used by real
              shoppers every day. Before that, I interned at <strong>Amazon</strong>, building
              self-serve onboarding tools for merchants integrating with Multi-Channel Fulfillment.
            </p>
          </Reveal>
          <Reveal delay={160}>
            <p>
              I studied Electronics &amp; Communication Engineering at{' '}
              <strong>MNNIT Allahabad</strong>. Outside of work, I compete on LeetCode — Knight
              rank, rating 1900+ — and like building full-stack side projects end to end.
            </p>
          </Reveal>

          <Reveal delay={240} className="stat-row">
            <div className="stat">
              <span className="stat-num">1+</span>
              Year building production software
            </div>
            <div className="stat">
              <span className="stat-num">1900+</span>
              LeetCode rating
            </div>
            <div className="stat">
              <span className="stat-num">2</span>
              Companies shipped with
            </div>
          </Reveal>

          <Reveal delay={320} className="window about-window">
            <WindowChrome title="about.me.js" />
            <div className="window-body">
              <pre className="code-block">
                <code>
                  <span className="code-punct">const</span> shreyansh = {'{'}
                  {'\n'}  <span className="code-key">role</span>: <span className="code-string">"{profile.role}"</span>,
                  {'\n'}  <span className="code-key">focus</span>: <span className="code-string">"{profile.focus}"</span>,
                  {'\n'}  <span className="code-key">location</span>: <span className="code-string">"{profile.location}"</span>,
                  {'\n'}  <span className="code-key">status</span>: <span className="code-string">"open_to_opportunities"</span>,
                  {'\n'}{'}'};
                </code>
              </pre>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
