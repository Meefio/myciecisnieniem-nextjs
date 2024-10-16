import './globals.css'
import { ReactNode } from 'react'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import { Manrope } from 'next/font/google' // Importowanie czcionki z Next.js
import Banner from '@/components/Banner'

export const metadata = {
	title:
		'Myciecisnieniem - Profesjonalne usługi czyszczenia ciśnieniowego',
	description:
		'Oferujemy wysokiej jakości usługi czyszczenia ciśnieniowego dla domów, firm i przestrzeni publicznych. Skorzystaj z naszego doświadczenia i nowoczesnego sprzętu.',
}

const manrope = Manrope({
	weight: ['400', '500', '700'],
	subsets: ['latin'],
})

interface RootLayoutProps {
	children: ReactNode
}

export default function RootLayout({ children }: RootLayoutProps) {
	return (
		<html lang='pl'>
			<body
				className={`${manrope.className} bg-background text-foreground`}
			>
				<header>
					<Banner />
					<Navigation />
				</header>
				{children}
				<Footer />
			</body>
		</html>
	)
}
