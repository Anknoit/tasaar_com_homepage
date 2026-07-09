import { Cormorant_Garamond } from 'next/font/google';
import './globals.css';

const cormorant = Cormorant_Garamond({
  weight: ['300', '400', '600'],
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-cormorant',
});

export const metadata = {
  metadataBase: new URL('https://tasaar.com'),
  title: 'Tasaar',
  description: 'Engineering the Intelligence layer for Infrastructure Efficiency',
  authors: [{ name: 'Tasaar' }],
  robots: 'index, follow',
  openGraph: {
    type: 'website',
    siteName: 'Tasaar',
    title: 'Tasaar',
    description: 'Engineering the Intelligence layer for Infrastructure Efficiency',
    url: 'https://tasaar.com/',
    images: ['https://tasaar.com/og-image.png'],
  },
  twitter: {
    card: 'summary_large_image',
    site: '@tasaar',
    title: 'Tasaar',
    description: 'Engineering the Intelligence layer for Infrastructure Efficiency',
    images: ['https://tasaar.com/og-image.png'],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={cormorant.variable}>
      <body>{children}</body>
    </html>
  );
}
