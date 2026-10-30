import type { Metadata } from 'next';
import { Montserrat, Lato, JetBrains_Mono } from 'next/font/google';
import '@/styles/globals.css';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { ScrollProgress } from '@/components/ui/ScrollProgress';
import { siteConfig } from '@/data/siteConfig';

const montserrat = Montserrat({
  subsets: ['latin'],
  variable: '--font-montserrat',
  weight: ['400', '500', '600', '700', '800'],
  display: 'swap',
});

const lato = Lato({
  subsets: ['latin'],
  variable: '--font-lato',
  weight: ['400', '700'],
  display: 'swap',
});

const mono = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-mono',
  display: 'swap',
});

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: `${siteConfig.name} — ${siteConfig.title}`,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  keywords: [
    'Md Razib Ahmed Razu',
    'Ahmed Razu',
    'Razib Ahmed',
    'WordPress Developer',
    'Laravel Developer',
    'Custom WordPress Themes',
    'Custom Plugins',
    'WooCommerce Speed Optimization',
    'Laravel Web Applications',
    'Core Web Vitals',
    'Technical SEO Specialist',
    'API Integration',
    'Software Engineer Bangladesh',
  ],
  authors: [{ name: siteConfig.fullName, url: siteConfig.url }],
  creator: siteConfig.fullName,
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: siteConfig.url,
    title: `${siteConfig.name} — ${siteConfig.title}`,
    description: siteConfig.description,
    siteName: siteConfig.name,
    images: [
      {
        url: '/projects/cambridge-car-audio.svg',
        width: 1200,
        height: 750,
        alt: `${siteConfig.name} Developer Portfolio`,
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: `${siteConfig.name} — ${siteConfig.title}`,
    description: siteConfig.description,
    images: ['/projects/cambridge-car-audio.svg'],
  },
  icons: {
    icon: '/icon.svg',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: siteConfig.fullName,
    alternateName: siteConfig.name,
    jobTitle: siteConfig.title,
    url: siteConfig.url,
    sameAs: [siteConfig.social.linkedin, siteConfig.social.github],
    knowsAbout: [
      'WordPress Development',
      'Laravel Framework',
      'PHP',
      'WooCommerce',
      'MySQL',
      'Core Web Vitals',
      'Technical SEO',
      'API Integration',
    ],
    alumniOf: {
      '@type': 'CollegeOrUniversity',
      name: 'American International University-Bangladesh (AIUB)',
    },
  };

  return (
    <html lang="en" className={`${montserrat.variable} ${lato.variable} ${mono.variable}`} suppressHydrationWarning>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body
        suppressHydrationWarning
        className="bg-[#F7F7F4] text-[#141413] antialiased flex flex-col min-h-screen selection:bg-[#D4FF00] selection:text-[#09090c]"
      >
        <ScrollProgress />
        <Header />
        <main className="flex-grow">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
