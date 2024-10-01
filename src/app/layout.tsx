import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Navigation from '@/components/Navigation'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Myciecisnienien - Profesjonalne usługi czyszczenia ciśnieniowego',
  description: 'Oferujemy wysokiej jakości usługi czyszczenia ciśnieniowego dla domów, firm i przestrzeni publicznych. Skorzystaj z naszego doświadczenia i nowoczesnego sprzętu.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pl">
      <body className={inter.className}>
        <Navigation />
        {children}
      </body>
    </html>
  )
}