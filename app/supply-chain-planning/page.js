import Nav from '../../components/Nav';
import StatusBar from '../../components/StatusBar';

export const metadata = {
  title: 'Demand Planning & Supply Chain Visibility Software | Tasaar',
  description: 'Tasaar builds demand planning and supply chain visibility software — AI-assisted forecasting, inventory and dispatch planning for manufacturers and distributors.',
  keywords: [
    'demand planning software',
    'supply chain visibility',
    'demand forecasting AI',
    'inventory and dispatch planning'
  ],
  alternates: { canonical: 'https://tasaar.com/supply-chain-planning' },
  openGraph: {
    title: 'Demand Planning & Supply Chain Visibility Software | Tasaar',
    description: 'AI-assisted demand forecasting, inventory and dispatch planning for manufacturers and distributors.',
    url: 'https://tasaar.com/supply-chain-planning',
    siteName: 'Tasaar',
    type: 'website',
  },
};

export default function SupplyChainPlanningPage() {
  return (
    <>
      <Nav />
      <main className="coming-soon" aria-label="Supply chain planning">
        <div className="coming-soon-inner">
          <div className="coming-soon-kicker">Enterprise Systems · Supply Chain</div>
          <h1 className="coming-soon-title">Real-time demand and dispatch planning.</h1>
          <p className="coming-soon-sub">
            We're building AI-assisted demand forecasting and dispatch planning that gives
            manufacturers and distributors live visibility across their supply chain, instead of
            working off week-old spreadsheets. It runs on the same real-time operations layer as
            our ERP, IoT and network management work.
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
