import Link from "next/link";
import { ArrowRight, Watch, Activity, ShieldCheck } from "lucide-react";

export const metadata = {
  title: "Tech",
  description: "Editorial tech notes from BJ Beyond Pro.",
};

export default function TechPage() {
  return (
    <main>
      <nav className="nav compact" aria-label="Main navigation">
        <Link href="/" className="brand"><span>BJ</span> Beyond Pro</Link>
        <div className="navLinks"><Link href="/">Home</Link></div>
      </nav>

      <section className="pageHero">
        <p className="eyebrow"><Watch size={16} /> Tech</p>
        <h1>Selected devices, explained like a decision.</h1>
        <p className="lead">
          The Tech section starts with the corrected Ultrahuman Ring Pro page and is ready to grow into Apple,
          Garmin, mobile accessories and affiliate guides.
        </p>
      </section>

      <section className="listing">
        <Link className="featureCard" href="/tech/ultrahuman-ring-pro">
          <div className="miniVisual"><Activity size={42} /></div>
          <div>
            <p className="badge">Wearable · Awin disclosure</p>
            <h2>Ultrahuman Ring Pro</h2>
            <p>
              Buyer notes for sleep, recovery and wellness tracking. No fake hands-on tone, no medical promises,
              and no unchecked price certainty.
            </p>
          </div>
          <ArrowRight />
        </Link>
      </section>

      <footer className="footer">
        <ShieldCheck size={18} />
        <span>Prices, discounts and availability can change. Always verify on the merchant page.</span>
      </footer>
    </main>
  );
}
