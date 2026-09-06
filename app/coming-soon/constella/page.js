import Nav from '../../../components/Nav';
import StatusBar from '../../../components/StatusBar';

export const metadata = {
  title: 'Constella — Coming Soon | Tasaar Networks',
  description:
    'Constella, our IIoT platform for asset management, tracking and anti-theft loop back. Full details coming soon.',
  alternates: { canonical: 'https://tasaar.com/coming-soon/constella' },
  robots: { index: false, follow: true },
  openGraph: {
    title: 'Constella — Coming Soon | Tasaar Networks',
    description:
      'Constella, our IIoT platform for asset management, tracking and anti-theft loop back. Full details coming soon.',
    url: 'https://tasaar.com/coming-soon/constella',
    siteName: 'Tasaar',
    type: 'website',
  },
};

export default function ConstellaComingSoonPage() {
  return (
    <>
      <Nav />
      <main className="coming-soon" aria-label="Constella coming soon">
        <div className="coming-soon-inner">
          <div className="coming-soon-kicker">Constella · In Development</div>
          <h1 className="coming-soon-title">Coming Soon.</h1>
          <p className="coming-soon-sub">
            Constella is our Industrial IoT platform for asset management, live tracking and
            anti-theft loop back — built for fleets, plants and field infrastructure that need
            to know where every asset is and when it moves. The full platform overview is on
            its way.
          </p>
          <div className="coming-soon-actions">
            <a className="featured-btn-secondary font-mono" href="/#products">
              View Products
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
