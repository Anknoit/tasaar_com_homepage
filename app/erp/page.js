import Nav from '../../components/Nav';
import StatusBar from '../../components/StatusBar';

export const metadata = {
  title: 'Configurable ERP for Manufacturers | Tasaar',
  description: 'Tasaar builds configurable ERP software for manufacturers — shop-floor data, inventory and finance on one system, built and supported out of Pune, India.',
  keywords: [
    'configurable ERP',
    'manufacturing ERP India',
    'ERP for manufacturers',
    'custom ERP software Pune'
  ],
  alternates: { canonical: 'https://tasaar.com/erp' },
  openGraph: {
    title: 'Configurable ERP for Manufacturers | Tasaar',
    description: 'Configurable ERP software for manufacturers — shop-floor data, inventory and finance on one system.',
    url: 'https://tasaar.com/erp',
    siteName: 'Tasaar',
    type: 'website',
  },
};

export default function ErpPage() {
  return (
    <>
      <Nav />
      <main className="coming-soon" aria-label="ERP for manufacturers">
        <div className="coming-soon-inner">
          <div className="coming-soon-kicker">Enterprise Systems · ERP</div>
          <h1 className="coming-soon-title">Configurable ERP, built for manufacturers.</h1>
          <p className="coming-soon-sub">
            We're building ERP software that adapts to how a manufacturing shop floor actually
            runs — connecting production, inventory and finance into one system, rather than
            forcing a plant onto a generic template. It's part of the same operations layer that
            ties into our IoT, network and energy management work.
          </p>
          <div className="coming-soon-actions">
            <a className="featured-btn-secondary font-mono" href="mailto:hello@tasaar.com">
              Talk to Us
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
