import './globals.css'
import { Inter, Poppins, Kalam } from 'next/font/google'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-inter',
})

const poppins = Poppins({ 
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-poppins',
})

const kalam = Kalam({
  subsets: ['latin'],
  weight: ['300', '400', '700'],
  variable: '--font-kalam',
})

export const metadata = {
  title: {
    default: 'Shibam Banerjee - Frontend Web Developer',
    template: '%s | Shibam Banerjee'
  },
  description: 'Frontend Web Developer specializing in modern web technologies. MCA & BCA Graduate from Kolkata, India. Building clean, responsive and user-friendly web experiences.',
  keywords: ['Frontend Developer', 'Web Developer', 'React', 'Next.js', 'JavaScript', 'HTML', 'CSS', 'Portfolio'],
  authors: [{ name: 'Shibam Banerjee' }],
  creator: 'Shibam Banerjee',
  icons: {
    icon: [
      { url: '/favicon_io/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/favicon_io/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
    ],
    shortcut: '/favicon_io/favicon.ico',
    apple: '/favicon_io/apple-touch-icon.png',
    other: [
      { rel: 'icon', url: '/favicon_io/android-chrome-192x192.png', sizes: '192x192', type: 'image/png' },
      { rel: 'icon', url: '/favicon_io/android-chrome-512x512.png', sizes: '512x512', type: 'image/png' },
    ],
  },
  manifest: '/favicon_io/site.webmanifest',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://shibam-portfolio.vercel.app',
    title: 'Shibam Banerjee - Frontend Web Developer',
    description: 'Frontend Web Developer specializing in modern web technologies. Building clean, responsive and user-friendly web experiences.',
    siteName: 'Shibam Banerjee Portfolio',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Shibam Banerjee - Frontend Web Developer',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Shibam Banerjee - Frontend Web Developer',
    description: 'Frontend Web Developer specializing in modern web technologies.',
    images: ['/og-image.png'],
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
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${inter.variable} ${poppins.variable} ${kalam.variable}`}>
      <body className="bg-cyber-bg text-text-light font-inter antialiased">
        <Navbar />
        <main className="min-h-screen">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}
