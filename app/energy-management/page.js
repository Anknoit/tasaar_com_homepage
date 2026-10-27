import Nav from '../../components/Nav';
import StatusBar from '../../components/StatusBar';

export const metadata = {
  title: 'Industrial Energy Management Software | Tasaar',
  description: 'Tasaar builds industrial energy management software — factory-floor energy analytics and BMS efficiency monitoring, built in India.',
  keywords: [
    'industrial energy management',
    'energy monitoring system',
    'BMS energy efficiency',
    'factory energy analytics',
    'energy management software India'
  ],
  alternates: { canonical: 'https://tasaar.com/energy-management' },
  openGraph: {
    title: 'Industrial Energy Management Software | Tasaar',
    description: 'Factory-floor energy analytics and BMS efficiency monitoring, built in India.',
    url: 'https://tasaar.com/energy-management',
    siteName: 'Tasaar',
    type: 'website',
  },
};

export default function EnergyManagementPage() {
  return (
    <>
      <Nav />
      <main className="coming-soon" aria-label="Energy management">
        <div className="coming-soon-inner">
          <div className="coming-soon-kicker">Enterprise Systems · Energy</div>
          <h1 className="coming-soon-title">Energy visibility, down to the shop floor.</h1>
          <p className="coming-soon-sub">
            We're building energy monitoring and BMS efficiency analytics that track consumption
            at the machine and line level, not just at the meter — giving plants the data they
            need to cut waste. It plugs into the same telemetry backbone as our IoT and network
            management products.
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
