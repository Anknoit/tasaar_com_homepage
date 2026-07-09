import ProductDetail from '../../../components/ProductDetail';

export const metadata = {
  title: 'Navnet — Tasaar',
  description: 'Navnet, a Tasaar product. Network intelligence, in plain English.',
  alternates: { canonical: 'https://tasaar.com/products/navnet' },
};

export default function NavnetPage() {
  return <ProductDetail name="Navnet" tagline="Network intelligence, in plain English." />;
}
