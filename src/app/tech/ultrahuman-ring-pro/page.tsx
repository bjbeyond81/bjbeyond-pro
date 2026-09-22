import Link from "next/link";
import { ArrowLeft, ArrowRight, BatteryCharging, CircleDollarSign, HeartPulse, Info, ShieldCheck, Watch } from "lucide-react";

export const metadata = {
  title: "Ultrahuman Ring Pro buyer notes 2026",
  description:
    "Ultrahuman Ring Pro buyer notes: smart ring for sleep, recovery and wellness trends, with affiliate disclosure and cautious claim checks.",
  alternates: {
    canonical: "/tech/ultrahuman-ring-pro/",
  },
};

const highlights = [
  "Smart ring format for sleep, recovery and daily wellness trends",
  "No screen and no wrist notifications",
  "Core-metrics positioning without a mandatory subscription",
  "Affiliate link: final price, stock, shipping and code must be checked at checkout",
];

const sections = [
  {
    icon: <Watch />,
    title: "What it is",
    text:
      "Ultrahuman Ring Pro is positioned as a premium smart ring for people who want wellness signals without wearing a smartwatch. The value is the format: small, quiet, discreet and built around app-based insight rather than a screen.",
  },
  {
    icon: <HeartPulse />,
    title: "What to expect",
    text:
      "Use it for trend reading: sleep, recovery, heart-rate patterns, temperature signals and daily routines. It is not a medical device and should not be presented as clinical instrumentation.",
  },
  {
    icon: <BatteryCharging />,
    title: "What to verify",
    text:
      "Battery claims, charging case details, available sizes, finishes, delivery timing and local warranty can change. Verify them on the official checkout page before buying.",
  },
  {
    icon: <CircleDollarSign />,
    title: "Offer notes",
    text:
      "BJBEYOND10 may work as a reader code, but it must be tested at checkout. Treat price and discount as live commercial data, not permanent editorial facts.",
  },
];

export default function UltrahumanPage() {
  return (
    <main>
      <nav className="nav compact" aria-label="Main navigation">
        <Link href="/" className="brand"><span>BJ</span> Beyond Pro</Link>
        <div className="navLinks">
          <Link href="/tech">Tech</Link>
          <Link href="/">Home</Link>
        </div>
      </nav>

      <article className="productHero">
        <Link className="back" href="/tech"><ArrowLeft size={16} /> Back to Tech</Link>

        <div className="productGrid">
          <div className="productCopy">
            <p className="eyebrow"><ShieldCheck size={16} /> Buyer notes, not a fake review</p>
            <h1>Ultrahuman Ring Pro</h1>
            <p className="lead">
              A smart ring to evaluate if you want sleep, recovery and wellness trends without wearing a
              smartwatch. The page is intentionally cautious: clear on what it can help with, clear on what
              still needs checking, and clear that it is not a medical device.
            </p>

            <div className="actions">
              <a className="primary" href="https://tidd.ly/3UT6vdj" rel="sponsored nofollow noopener" target="_blank">
                Check official offer <ArrowRight size={18} />
              </a>
              <span className="coupon">Code to test: <strong>BJBEYOND10</strong></span>
            </div>
          </div>

          <div className="ringStage" aria-label="Editorial smart ring visual">
            <div className="smartRing">
              <span className="sensor" />
              <span className="shine" />
            </div>
            <div className="stageNote">
              <Info size={16} />
              <span>Editorial visual. Verify official product images on the merchant page before buying.</span>
            </div>
          </div>
        </div>
      </article>

      <section className="band productBand">
        <div className="sectionHead">
          <p className="eyebrow">Fast verdict</p>
          <h2>Interesting if you want wellness signals quietly. Wrong if you need a sportwatch.</h2>
          <p>
            This is a format decision first. If you need GPS, training screens, notifications or advanced sport
            controls, a watch is still the better tool.
          </p>
        </div>

        <ul className="highlightList">
          {highlights.map((item) => <li key={item}>{item}</li>)}
        </ul>
      </section>

      <section className="detailGrid">
        {sections.map((section) => (
          <article className="detailCard" key={section.title}>
            <div className="detailIcon">{section.icon}</div>
            <h2>{section.title}</h2>
            <p>{section.text}</p>
          </article>
        ))}
      </section>

      <section className="italianBox">
        <h2>Nota in italiano</h2>
        <p>
          Questa pagina non finge una recensione provata sul campo. Presenta Ultrahuman Ring Pro come scheda
          decisionale: utile per sonno, recupero e trend wellness, ma da verificare sempre sul sito ufficiale
          per prezzo, disponibilità, taglie, spedizione e validità del codice.
        </p>
      </section>

      <footer className="footer">
        <ShieldCheck size={18} />
        <span>
          Affiliate disclosure: this page contains an Awin sponsored link. BJ Beyond may earn a commission at no extra cost to you.
        </span>
      </footer>
    </main>
  );
}
