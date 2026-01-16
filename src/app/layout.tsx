import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { PageNavigation } from "@/components/page-navigation";
import { SplashLoader } from "@/components/ui/splash-loader";

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  preload: true,
});

const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'https://aryavispute.com'

export const metadata: Metadata = {
  metadataBase: new URL(baseUrl),
  title: {
    default: 'Arya Vispute | Full Stack Developer',
    template: 'Arya Vispute | %s'
  },
  description: 'Full Stack Developer specializing in React, Next.js, and modern web technologies. Exploring the intersection of design and development.',
  keywords: ['Full Stack Developer', 'React', 'Next.js', 'TypeScript', 'Web Development', 'Software Engineer'],
  authors: [{ name: 'Arya Vispute' }],
  creator: 'Arya Vispute',
  icons: {
    icon: [
      { url: '/favicon/favicon-96x96.png', sizes: '96x96', type: 'image/png' },
      { url: '/favicon/favicon.ico', type: 'image/x-icon' },
    ],
    shortcut: ['/favicon/favicon.ico'],
    apple: [{ url: '/favicon/apple-touch-icon.png', sizes: '180x180', type: 'image/png' }],
  },
  manifest: '/favicon/site.webmanifest',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://aryavispute.com',
    siteName: 'Arya Vispute - Portfolio',
    title: 'Arya Vispute | Full Stack Developer',
    description: 'Full Stack Developer specializing in React, Next.js, and modern web technologies.',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Arya Vispute - Full Stack Developer'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Arya Vispute | Full Stack Developer',
    description: 'Full Stack Developer specializing in React, Next.js, and modern web technologies.',
    images: ['/og-image.jpg'],
    creator: '@aryavispute'
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'your-google-verification-code',
    yandex: 'your-yandex-verification-code',
  }
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <SplashLoader />
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <div className="relative flex min-h-screen flex-col">
            <div
              className="fixed inset-0 z-0 dark:hidden pointer-events-none bg-white"
              style={{
                backgroundImage:
                  "linear-gradient(45deg, transparent 49%, #e5e7eb 49%, #e5e7eb 51%, transparent 51%), linear-gradient(-45deg, transparent 49%, #e5e7eb 49%, #e5e7eb 51%, transparent 51%)",
                backgroundSize: "40px 40px",
                WebkitMaskImage:
                  "radial-gradient(ellipse 100% 80% at 50% 100%, #000 50%, transparent 90%)",
                maskImage:
                  "radial-gradient(ellipse 100% 80% at 50% 100%, #000 50%, transparent 90%)",
              }}
            />
            <Navbar />
            <PageNavigation />
            <main className="flex-1 z-10 relative">{children}</main>
            <Footer />
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
