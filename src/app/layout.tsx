import type { Metadata, Viewport } from 'next'

import Analytics from '@/components/analytics'
import Header from '@/components/header'
import { Nexa } from '@/utils/fonts'

import 'the-new-css-reset/css/reset.css'
import './globals.scss'

export const metadata: Metadata = {
  title: 'Moje portfolio / klalo.pl',
  description:
    'Moja strona internetowa, na której prezentuję wszystkie informacje o sobie i swoich różnych projektach.',
  icons: {
    icon: ['/favicons/favicon.ico', '/favicons/icon.svg'],
    apple: '/favicons/apple-icon.png',
  },
}

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang='pl'>
      <body className={Nexa.className}>
        {process.env.NODE_ENV === 'production' && <Analytics />}

        <header>
          <Header />
        </header>

        <section>
          <main>{children}</main>
        </section>

        <footer>
          <section>
            <p>
              Jakub Kłało &#169; {new Date().getFullYear()} klalo.pl. Wszelkie prawa zastrzeżone.
            </p>
          </section>
        </footer>
      </body>
    </html>
  )
}
