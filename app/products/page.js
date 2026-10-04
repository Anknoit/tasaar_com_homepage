import Nav from '../../components/Nav';
import StatusBar from '../../components/StatusBar';
import ProductsCatalog from '../../components/ProductsCatalog';

export const metadata = {
  title: 'Products — CPaaS, Embedded Systems and AI Workforce',
  description:
    'The Tasaar product catalog: Skylark (CPaaS), SPV-Protect (embedded IIoT asset protection), and AgentOS — the control plane for your AI workforce. Filter by category.',
  alternates: { canonical: 'https://tasaar.com/products' },
  openGraph: {
    title: 'Products | Tasaar',
    description:
      'The Tasaar product catalog: Skylark (CPaaS), SPV-Protect (embedded IIoT asset protection), and AgentOS — the control plane for your AI workforce.',
    url: 'https://tasaar.com/products',
    siteName: 'Tasaar',
    type: 'website',
  },
};

export default function ProductsPage() {
  return (
    <>
      <Nav active="products" />

      <main className="brand-type catalog-page" aria-label="Products">
        <div className="catalog-inner">
          <header className="catalog-head">
            <h1 className="catalog-headline">AI Ready Products, that gets the work done!</h1>
            <p className="catalog-sub">
              Spanning across the domains of Networks and Communication,
              Our portfolio comprises end to end Products that helps you scale your business.
            </p>
          </header>

          <ProductsCatalog />
        </div>
      </main>

      <StatusBar />
    </>
  );
}
