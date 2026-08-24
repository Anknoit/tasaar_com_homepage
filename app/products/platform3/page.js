import Nav from '../../../components/Nav';
import ProductMotion from '../../../components/ProductMotion';
import StatusBar from '../../../components/StatusBar';
import { SoftwareAppSchema, FAQSchema } from '../../../components/JsonLd';

export const metadata = {
  title: 'Autonomous 5G Network Operations & Self-Healing RAN | Platform3 by Tasaar',
  description: 'Platform3 is a flagship autonomous self-healing 5G network platform built for O-RAN and RIC architectures. Supported & seed-funded by the Department of Telecommunications (DoT), Govt. of India.',
  keywords: [
    '5G Network Operations',
    'Self-Healing 5G Networks',
    'O-RAN RIC',
    'Autonomous Telecom Intelligence',
    'Industrial Telecom IoT',
    'DoT India',
    'IMC 2026',
    'RAN Intelligent Controller'
  ],
  alternates: { canonical: 'https://tasaar.com/products/platform3' },
  openGraph: {
    title: 'Autonomous 5G Network Operations & Self-Healing RAN | Platform3',
    description: 'Platform3 is a flagship autonomous self-healing 5G network platform built for O-RAN and RIC architectures.',
    url: 'https://tasaar.com/products/platform3',
    siteName: 'Tasaar',
    type: 'website',
  },
};

const platform3Faqs = [
  {
    question: 'What is Platform3?',
    answer: 'Platform3 is Tasaar\'s flagship enterprise telecom platform for autonomous self-healing 5G networks, running natively inside Open RAN (O-RAN) RIC (RAN Intelligent Controller) architectures.'
  },
  {
    question: 'How is Platform3 recognized by the Department of Telecommunications (DoT)?',
    answer: 'Platform3 received startup seed funding support from DoT India and was selected for live hosting and prototype showcase at India Mobile Congress (IMC 2026) in New Delhi.'
  },
  {
    question: 'How does self-healing 5G network intelligence work?',
    answer: 'Platform3 monitors telemetry across 5G cell sites and RAN cores, automatically detecting anomalies, calculating repair loops, and executing sub-second micro-adjustments to prevent cell downtime.'
  }
];

export default function Platform3Page() {
  return (
    <>
      <SoftwareAppSchema
        name="Platform3"
        description="Autonomous Self-Healing 5G Network Intelligence Platform for O-RAN & RIC Architectures"
        category="InfrastructureApplication"
        url="https://tasaar.com/products/platform3"
        features={[
          'Autonomous 5G Cell Healing',
          'O-RAN RIC Integration',
          'Industrial Telecom IoT Telemetry',
          'DoT India Seed Funded Innovation'
        ]}
      />
      <FAQSchema faqs={platform3Faqs} />
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      <link href="https://fonts.googleapis.com/css2?family=IBM+Plex+Mono:wght@400;500&family=IBM+Plex+Sans:wght@200;300;400;500;600&display=swap" rel="stylesheet" />

      <Nav active="products" />

      <main className="cadence-editorial-page font-plex-sans">
        {/* HERO SECTION */}
        <section className="cadence-editorial-hero bg-white">
          <div className="cadence-wrap">
            <h1 className="editorial-title font-plex-sans">
              Platform3 <em>— Autonomous Self-Healing 5G Networks in RIC.</em>
            </h1>

            <p className="editorial-lede">
              Engineered for next-generation Open RAN (O-RAN) and 5G enterprise networks. Selected for prototype development and seed funded by the Department of Telecommunications (DoT), Government of India.
            </p>

            <div className="cadence-defrow font-plex-mono">
              <span>O-RAN RIC</span>
              <span>Autonomous Triage</span>
              <span>5G RAN Core</span>
              <span>Sub-Second Micro-Fix</span>
            </div>

            <div className="hero-cta-group">
              <a href="/Platform_3_B2B_overview_Brochure-1.pdf" target="_blank" rel="noopener noreferrer" className="cadence-btn btn-crimson btn-lg font-plex-mono">
                Download B2B Brochure
              </a>
              <a href="mailto:hello@tasaar.com?subject=Platform3%20Inquiry" className="cadence-btn btn-teal-outline btn-lg font-plex-mono">
                Contact Enterprise Telecom Team
              </a>
            </div>
          </div>
        </section>

        {/* GOVERNMENT RECOGNITION BAND */}
        <section className="cadence-dark-band">
          <div className="cadence-wrap">
            <div className="section-meta dark">
              <span className="meta-kicker teal font-plex-mono">DOT INDIA RECOGNITION</span>
              <h2 style={{ color: "white" }}>Supported by Govt. of India Telecom R&amp;D</h2>
              <p className="meta-sub light">
                Platform3 was selected for seed funding by the Department of Telecommunications (DoT), Ministry of Communications, Govt. of India, and showcased at India Mobile Congress (IMC 2026).
              </p>
            </div>
          </div>
        </section>

        {/* CORE CAPABILITIES GRID */}
        <section className="cadence-editorial-section bg-tint">
          <div className="cadence-wrap">
            <div className="section-meta center">
              <h2>Autonomous Network Operations for 5G &amp; Industrial Telecom</h2>
            </div>

            <div className="impact-grid-3">
              <div className="impact-card">
                <div className="impact-tag font-plex-mono">01 · O-RAN RIC ARCHITECTURE</div>
                <h3>RAN Intelligent Controller</h3>
                <p>
                  Runs natively inside near-RT and non-RT RIC platforms, correlating real-time telemetry across xApps and rApps for enterprise 5G cell optimization.
                </p>
              </div>

              <div className="impact-card">
                <div className="impact-tag font-plex-mono">02 · AUTONOMOUS SELF-HEALING</div>
                <h3>Sub-Second Fault Triage</h3>
                <p>
                  Detects cell degradation, beamforming anomalies, and throughput bottlenecks in milliseconds, automatically triggering repair loops before users experience outages.
                </p>
              </div>

              <div className="impact-card">
                <div className="impact-tag font-plex-mono">03 · INDUSTRIAL TELECOM IOT</div>
                <h3>Enterprise Private 5G</h3>
                <p>
                  Powers low-latency industrial IoT automation, smart manufacturing private 5G slices, and mission-critical telemetry with zero-packet-loss guarantees.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* FINAL CTA */}
        <section className="cadence-final-cta">
          <div className="cadence-wrap center">
            <h2>Experience Autonomous 5G Intelligence</h2>
            <p>Connect with our telecom R&amp;D engineering team for private 5G &amp; O-RAN trial deployments.</p>
            <div className="hero-cta-group">
              <a href="mailto:hello@tasaar.com?subject=Platform3%20Enterprise%205G" className="cadence-btn btn-crimson btn-lg font-plex-mono">
                Request Platform3 Demo
              </a>
            </div>
          </div>
        </section>
      </main>

      <StatusBar />
      <ProductMotion />
    </>
  );
}
