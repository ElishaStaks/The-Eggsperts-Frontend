/* eslint-disable import/no-extraneous-dependencies */
import '@/styles/global.css';

import { Analytics } from '@vercel/analytics/react';
import { SpeedInsights } from '@vercel/speed-insights/next';
import type { Metadata } from 'next';

import { FilterProvider } from '@/contexts/FilterContext';

export const metadata: Metadata = {
  title: 'The Eggsperts',
  description:
    "Discover the freshest eggs and purest honey at our Victoria Market store on Queen St. Indulge in nature's goodness with our premium selection. Visit us for farm-fresh delights, quality guaranteed. Your source for wholesome goodness in the heart of Victoria Market. Taste the difference today!",
  authors: [{ name: 'Elisha Anagnostakis' }],
  icons: [
    {
      rel: 'apple-touch-icon',
      url: '/apple-touch-icon.png',
    },
    {
      rel: 'icon',
      type: 'image/png',
      sizes: '32x32',
      url: '/favicon-32x32.png',
    },
    {
      rel: 'icon',
      type: 'image/png',
      sizes: '16x16',
      url: '/favicon-16x16.png',
    },
    {
      rel: 'icon',
      url: '/favicon.ico',
    },
  ],
  other: {
    'twitter:image':
      'https://github.com/ElishaStaks/The-Eggsperts-Frontend/blob/master/public/eggsperts-screenshot.png',
    'og:url': 'The Eggsperts',
    'og:image':
      'https://github.com/ElishaStaks/The-Eggsperts-Frontend/blob/master/public/eggsperts-screenshot.png',
    'og:type': 'website',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body suppressHydrationWarning>
        <FilterProvider>{children}</FilterProvider>
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
