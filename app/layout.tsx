import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { ThemeProvider } from "@/lib/themeWrapper";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Corentin Delesalle - Développeur Full Stack à Chartres (28)",
  description: "Développeur Full Stack freelance à Chartres dans l'Eure-et-Loir (28). Création d'applications web modernes avec React, Next.js, Node.js. Services de développement web professionnel en Centre-Val de Loire.",
  keywords: "développeur web Chartres, développeur freelance 28, développeur React Chartres, développeur Next.js Eure-et-Loir, création site web Chartres, développeur full stack Centre-Val de Loire",
  authors: [{ name: "Corentin Delesalle" }],
  creator: "Corentin Delesalle",
  publisher: "Corentin Delesalle",
  robots: "index, follow",
  openGraph: {
    type: "website",
    locale: "fr_FR",
    url: "https://portfolio-delesalle-c.vercel.app",
    siteName: "Corentin Delesalle - Développeur Full Stack",
    title: "Corentin Delesalle - Développeur Full Stack à Chartres (28)",
    description: "Développeur Full Stack freelance à Chartres dans l'Eure-et-Loir (28). Création d'applications web modernes avec React, Next.js, Node.js.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Corentin Delesalle - Développeur Full Stack à Chartres",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Corentin Delesalle - Développeur Full Stack à Chartres (28)",
    description: "Développeur Full Stack freelance à Chartres dans l'Eure-et-Loir (28). Création d'applications web modernes.",
    images: ["/og-image.jpg"],
  },
  alternates: {
    canonical: "https://portfolio-delesalle-c.vercel.app",
    languages: {
      'en': 'https://portfolio-delesalle-c.vercel.app',
      'fr': 'https://portfolio-delesalle-c.vercel.app/fr',
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" suppressHydrationWarning>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              "name": "Corentin Delesalle",
              "jobTitle": "Développeur Full Stack",
              "url": "https://portfolio-delesalle-c.vercel.app",
              "address": {
                "@type": "PostalAddress",
                "addressLocality": "Chartres",
                "postalCode": "28000",
                "addressRegion": "Eure-et-Loir",
                "addressCountry": "FR"
              },
              "areaServed": [
                {
                  "@type": "City",
                  "name": "Chartres"
                },
                {
                  "@type": "AdministrativeArea",
                  "name": "Eure-et-Loir"
                },
                {
                  "@type": "AdministrativeArea", 
                  "name": "Centre-Val de Loire"
                }
              ],
              "knowsAbout": [
                "Développement web",
                "React",
                "Next.js",
                "Node.js",
                "JavaScript",
                "TypeScript",
                "Full Stack Development"
              ],
              "sameAs": [
                "https://linkedin.com/in/corentindelesalle",
                "https://github.com/corentindelesalle"
              ]
            })
          }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} font-satoshi antialiased`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          
            disableTransitionOnChange

        
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
