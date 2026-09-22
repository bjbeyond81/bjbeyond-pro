import Link from "next/link";
import { ArrowRight, BadgeCheck, Globe2, Sparkles, ShieldCheck, Zap } from "lucide-react";

const pillars = [
  {
    title: "Tech that earns attention",
    text: "Wearables, useful devices and digital tools selected for real-life value, not empty hype.",
  },
  {
    title: "Gift decisions in minutes",
    text: "Fast editorial paths for people who need a good idea now and do not want a random catalogue.",
  },
  {
    title: "Affiliate links, clearly marked",
    text: "Commercial links are disclosed. Prices, stock and offers must always be checked at checkout.",
  },
];

const tech = [
  "Ultrahuman Ring Pro",
  "Apple Watch Ultra",
  "iPhone Pro",
  "Garmin Venu",
  "AirPods",
];

export default function HomePage() {
  return (
    <main>
      <section className="hero">
        <nav className="nav" aria-label="Main navigation">
          <Link href="/" className="brand">
            <span>BJ</span> Beyond Pro
          </Link>
          <div className="navLinks">
            <Link href="/tech">Tech</Link>
            <Link href="/tech/ultrahuman-ring-pro">Ultrahuman</Link>
          </div>
        </nav>

        <div className="heroGrid">
          <div className="heroCopy">
            <p className="eyebrow"><Sparkles size={16} /> English-first editorial portal</p>
            <h1>Smarter buying decisions, without the noise.</h1>
            <p className="lead">
              BJ Beyond Pro turns tech, digital tools and affiliate offers into clear editorial pages:
              sharp, visual, fast to read and honest about what still needs checking before purchase.
            </p>
            <div className="actions">
              <Link className="primary" href="/tech/ultrahuman-ring-pro">
                Open Ultrahuman notes <ArrowRight size={18} />
              </Link>
              <Link className="secondary" href="/tech">
                Explore Tech
              </Link>
            </div>
          </div>

          <div className="signalPanel" aria-label="BJ Beyond editorial system">
            <div className="orbital">
              <span className="ring ringOne" />
              <span className="ring ringTwo" />
              <span className="core">BJ</span>
            </div>
            <div className="metricRow">
              <div><strong>EN</strong><span>default language</span></div>
              <div><strong>SEO</strong><span>ready structure</span></div>
              <div><strong>Awin</strong><span>clear disclosure</span></div>
            </div>
          </div>
        </div>
      </section>

      <section className="band">
        <div className="sectionHead">
          <p className="eyebrow"><ShieldCheck size={16} /> What changed first</p>
          <h2>Ultrahuman is no longer a fake-looking review.</h2>
          <p>
            The page has been rebuilt as buyer notes: precise, cautious, visually stronger and clear about
            affiliate links, non-medical claims, price checks and availability.
          </p>
        </div>

        <div className="cards">
          {pillars.map((item) => (
            <article className="card" key={item.title}>
              <BadgeCheck size={20} />
              <h3>{item.title}</h3>
              <p>{item.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="techStrip">
        <div>
          <p className="eyebrow"><Zap size={16} /> Tech pipeline</p>
          <h2>Built to expand into a real portal.</h2>
        </div>
        <div className="chips">
          {tech.map((item) => <span key={item}>{item}</span>)}
        </div>
      </section>

      <footer className="footer">
        <Globe2 size={18} />
        <span>
          As an Amazon Associate and affiliate partner, BJ Beyond may earn from qualifying purchases.
        </span>
      </footer>
    </main>
  );
}
