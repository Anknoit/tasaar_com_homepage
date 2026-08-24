import { Archivo, Cormorant_Garamond, JetBrains_Mono } from 'next/font/google';
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

export const metadata = {
  metadataBase: new URL('https://tasaar.com'),
  title: {
    default: 'Industrial IoT, AI Integration, Network Operations & AI Chatbots | Tasaar',
    template: '%s | Tasaar',
  },
  description: 'Tasaar engineers intelligence platforms for Industrial IoT, AI integration, Network Operations, and DPDP-compliant AI Communication Chatbots (WhatsApp & RCS business integration).',
  keywords: [
    'Industrial IoT',
    'IIoT telemetry',
    'AI Integration',
    'Enterprise AI Workflows',
    'Network Operations',
    'Network Monitoring System',
    'NMS',
    'AI Communication Chatbots',
    'WhatsApp chatbots for business',
    'RCS business messaging',
    'Conversational Commerce',
    'gRPC Telemetry',
    '5G Self-Healing Networks',
    'NavAssist RAG',
    'Sentinel Security'
  ],
  authors: [{ name: 'Tasaar' }],
  robots: 'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1',
  alternates: {
    canonical: 'https://tasaar.com',
  },
  openGraph: {
    type: 'website',
    siteName: 'Tasaar',
    title: 'Industrial IoT, AI Integration, Network Operations & AI Chatbots | Tasaar',
    description: 'Tasaar engineers intelligence platforms for Industrial IoT, AI integration, Network Operations, and DPDP-compliant AI Communication Chatbots.',
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
    title: 'Industrial IoT, AI Integration, Network Operations & AI Chatbots | Tasaar',
    description: 'Tasaar engineers intelligence platforms for Industrial IoT, AI integration, Network Operations, and DPDP-compliant AI Communication Chatbots.',
    images: ['https://tasaar.com/og-image.png'],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${archivo.variable} ${cormorant.variable} ${jetbrains.variable}`}>
      <body>{children}</body>
    </html>
  );
}
