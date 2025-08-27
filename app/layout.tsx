import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Muhammad Awais - Software Engineering Manager',
  description: 'Dynamic Software Engineer with 14 years of experience driving technical innovation and team excellence across software development projects. Expertise in leading high-performing teams, implementing robust technology strategies, and delivering high-quality solutions.',
  keywords: 'Software Engineer, Engineering Manager, .NET, C#, React, Azure, Team Leadership, Agile, Full Stack Developer',
  authors: [{ name: 'Muhammad Awais' }],
  creator: 'Muhammad Awais',
  publisher: 'Muhammad Awais',
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://muhammadawais.dev', // Replace with actual URL
    title: 'Muhammad Awais - Software Engineering Manager',
    description: 'Dynamic Software Engineer with 14 years of experience driving technical innovation and team excellence.',
    siteName: 'Muhammad Awais Portfolio',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Muhammad Awais - Software Engineering Manager',
    description: 'Dynamic Software Engineer with 14 years of experience driving technical innovation and team excellence.',
  },
  alternates: {
    canonical: 'https://muhammadawais.dev', // Replace with actual URL
  },
  other: {
    'theme-color': '#1677ff',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" />
        <meta name="theme-color" content="#1677ff" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body className={inter.className}>
        <a href="#home" className="skip-link">
          Skip to main content
        </a>
        {children}
      </body>
    </html>
  );
}