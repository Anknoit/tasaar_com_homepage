import Nav from '../../components/Nav';
import StatusBar from '../../components/StatusBar';

export const metadata = {
  title: 'Platform3 — Coming Soon | Tasaar Networks',
  description:
    'Platform3, our flagship self-healing 5G RAN Intelligent Controller supported by the Department of Telecommunications, Govt. of India. Full details coming soon.',
  alternates: { canonical: 'https://tasaar.com/coming-soon' },
  robots: { index: false, follow: true },
  openGraph: {
    title: 'Platform3 — Coming Soon | Tasaar Networks',
    description:
      'Platform3, our flagship self-healing 5G RAN Intelligent Controller. Full details coming soon.',
    url: 'https://tasaar.com/coming-soon',
    siteName: 'Tasaar',
    type: 'website',
  },
};

export default function ComingSoonPage() {
  return (
    <>
      <Nav />
      <main className="coming-soon" aria-label="Platform3 coming soon">
        <div className="coming-soon-inner">
          <div className="coming-soon-kicker">Platform3 · In Development</div>
          <h1 className="coming-soon-title">Coming Soon.</h1>
          <p className="coming-soon-sub">
            We are preparing the full technical overview of Platform3 — our self-healing 5G
            network intelligence running natively inside the RAN Intelligent Controller,
            selected for prototype development by the Department of Telecommunications,
            Govt. of India.
          </p>
          <div className="coming-soon-actions">
            <a
              className="featured-btn-secondary font-mono"
              href="/Platform_3_B2B_overview_Brochure-1.pdf"
              download="Platform 3 B2B_overview Brochure-1.pdf"
              target="_blank"
              rel="noopener noreferrer"
            >
              Download Brochure
            </a>
            <a className="featured-btn-secondary font-mono" href="/">
              Return Home
            </a>
          </div>
        </div>
      </main>
      <StatusBar />
    </>
  );
}
