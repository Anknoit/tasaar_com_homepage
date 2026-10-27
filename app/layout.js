import { Archivo, Cormorant_Garamond, Inter, JetBrains_Mono, Poppins } from 'next/font/google';
import './globals.css';

/* Display + body. Archivo is a variable grotesque with a real width axis —
   headings are set wide (wdth ~112) so they carry the same broad, monoline,
   engineered feel as the Tasaar mark, while body copy runs at normal width.
   One family doing two jobs via an axis, rather than two unrelated faces. */
const archivo = Archivo({
  subsets: ['latin'],
  axes: ['wdth'],
  display: 'swap',
  variable: '--font-archivo',
});

/* Kept for the wordmark only — the TASAAR lockup is the one place the
   serif belongs. */
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

/* The product catalog runs on its own type voice: a rounded geometric sans.
   Poppins is the honest stand-in for the proprietary face — same circular
   bowls and single-storey 'a' — so the catalog can be re-skinned later by
   swapping this one import. */
const poppins = Poppins({
  weight: ['600', '700'],
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-poppins',
});

/* Reading face for the catalog. Poppins carries the personality in the
   headlines; body copy stays neutral so it doesn't compete. Inter is also
   the first fallback under Poppins — never a rounded novelty face. */
const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
});

export const metadata = {
  metadataBase: new URL('https://tasaar.com'),
  title: {
    default: 'Connected Enterprise Systems: ERP, IIoT & Networks | Tasaar',
    template: '%s | Tasaar',
  },
  description: 'Tasaar connects ERP, supply chain, energy and network management into one real-time operations layer — built on carrier-grade telecom engineering.',
  keywords: [
    'connected enterprise systems',
    'integrated ERP and IoT',
    'enterprise operations platform',
    'real-time operations visibility',
    'Tasaar'
  ],
  authors: [{ name: 'Tasaar' }],
  robots: 'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1',
  alternates: {
    canonical: 'https://tasaar.com',
  },
  openGraph: {
    type: 'website',
    siteName: 'Tasaar',
    title: 'Connected Enterprise Systems: ERP, IIoT & Networks | Tasaar',
    description: 'Tasaar connects ERP, supply chain, energy and network management into one real-time operations layer — built on carrier-grade telecom engineering.',
    url: 'https://tasaar.com/',
    images: [{
      url: 'https://tasaar.com/og-image.png',
      width: 1200,
      height: 630,
      alt: 'Tasaar - Intelligence Layer for Industrial IoT, AI & Networks',
    }],
  },
  twitter: {
    card: 'summary_large_image',
    site: '@tasaar',
    title: 'Connected Enterprise Systems: ERP, IIoT & Networks | Tasaar',
    description: 'Tasaar connects ERP, supply chain, energy and network management into one real-time operations layer — built on carrier-grade telecom engineering.',
    images: ['https://tasaar.com/og-image.png'],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${archivo.variable} ${cormorant.variable} ${jetbrains.variable} ${poppins.variable} ${inter.variable}`}>
      <body>{children}</body>
    </html>
  );
}
