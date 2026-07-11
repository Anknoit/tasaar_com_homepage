import { Cormorant_Garamond, JetBrains_Mono } from 'next/font/google';
import './globals.css';

const cormorant = Cormorant_Garamond({
  weight: ['300', '400', '600'],
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-cormorant',
});

/* Self-hosted so the hero thesis renders identically on every device
   instead of falling back to whatever system mono is installed. */
const jetbrains = JetBrains_Mono({
  weight: ['500', '700'],
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-jetbrains',
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
    <html lang="en" className={`${cormorant.variable} ${jetbrains.variable}`}>
      <body>{children}</body>
    </html>
  );
}
