'use client'
import Image from 'next/image'
import Logo from '../../public/Logo.png'
import burgerMenuIcon from '../../public/burgerMenuIcon.svg'
import NavBtn from './NavBtn'

import { useState } from 'react'
import Link from 'next/link'

const Navigation = () => {
	const [isOpen, setIsOpen] = useState(false)

	const toggleMenu = () => {
		setIsOpen((isOpen) => !isOpen)
	}

	return (
		<nav className='bg-[rgba(15, 15, 16, 0.64)] text-white'>
			<div className='container mx-auto flex justify-between items-center py-4  '>
				<Link
					href='/'
					className='w-[140px] h-[70px] lg:w-[240px] lg:h-[120px]'
				>
					<Image src={Logo} alt='Logo' width={240} height={120} />
				</Link>

				{/* Ikona menu dla urządzeń mobilnych */}
				<button onClick={toggleMenu} className='lg:hidden p-4'>
					<Image
						src={burgerMenuIcon}
						alt='Menu'
						width={44}
						height={15}
					></Image>
				</button>

				{/* Menu na większe ekrany */}
				<ul className={`text-base hidden lg:flex`}>
					<li>
						<Link href='/' className='p-5 hover:text-secondary-color'>
							Usługi
						</Link>
					</li>
					<li>
						<Link
							href='/oferta'
							className='p-5 hover:text-secondary-color'
						>
							Oferta
						</Link>
					</li>
					<li>
						<Link
							href='/galeria'
							className='p-5 hover:text-secondary-color'
						>
							Galeria
						</Link>
					</li>
					<li>
						<Link
							href='/opinie'
							className='p-5 hover:text-secondary-color'
						>
							Opinie
						</Link>
					</li>
					<li className='ml-[2.5rem]'>
						<NavBtn>Kontakt</NavBtn>
					</li>
				</ul>
			</div>

			{/* Menu rozwijane dla urządzeń mobilnych */}
			{isOpen && (
				<div className='lg:hidden bg-bg-gray'>
					<ul className='flex flex-col p-4 text-base'>
						<li>
							<Link
								href='/'
								className='block py-6  text-left hover:text-secondary-color'
							>
								Usługi
							</Link>
						</li>
						<li>
							<Link
								href='/oferta'
								className='block py-6 text-left hover:text-secondary-color'
							>
								Oferta
							</Link>
						</li>
						<li>
							<Link
								href='/galeria'
								className='block py-6 text-left hover:text-secondary-color'
							>
								Galeria
							</Link>
						</li>
						<li>
							<Link
								href='/opinie'
								className='block py-6 text-left hover:text-secondary-color'
							>
								Opinie
							</Link>
						</li>
						<li>
							<Link
								href='/kontakt'
								className='block py-6 text-left text-secondary-color'
							>
								Kontakt
							</Link>
						</li>
					</ul>
				</div>
			)}
		</nav>
	)
}

export default Navigation
