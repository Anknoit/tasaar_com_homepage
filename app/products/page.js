import Nav from '../../components/Nav';
import StatusBar from '../../components/StatusBar';
import ProductsCatalog from '../../components/ProductsCatalog';

export const metadata = {
  title: 'Products — CPaaS, IIoT and Agentic Business Platforms',
  description:
    'The Tasaar product catalog: Skylark (CPaaS), SPV-Protect (IIoT asset protection), and the agentic Business suite — CRM and ERP. Filter by category.',
  alternates: { canonical: 'https://tasaar.com/products' },
  openGraph: {
    title: 'Products | Tasaar',
    description:
      'The Tasaar product catalog: Skylark (CPaaS), SPV-Protect (IIoT asset protection), and the agentic Business suite — CRM and ERP.',
    url: 'https://tasaar.com/products',
    siteName: 'Tasaar',
    type: 'website',
  },
};

export default function ProductsPage() {
  return (
    <>
      <Nav active="products" />

      <main className="product-type catalog-page" aria-label="Products">
        <div className="catalog-inner">
          <header className="catalog-head">
            <div className="index-kicker font-mono">PLATFORMS + APPS</div>
            <h1 className="catalog-headline">Everything we build.</h1>
            <p className="catalog-sub">
              Three lines of work — programmable communication, industrial telemetry, and the
              agentic systems that run a business. Pick a category to narrow the list.
            </p>
          </header>

          <ProductsCatalog />
        </div>
      </main>

      <StatusBar />
    </>
  );
}
