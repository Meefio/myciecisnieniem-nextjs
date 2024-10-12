import React, { ReactNode } from 'react'
import Link from 'next/link'

interface NavBtnProps {
	children: string
}

const NavBtn: React.FC<NavBtnProps> = ({ children }) => {
	return (
		<Link
			href='/kontakt'
			className='border-[3px] rounded-xl inset-3 border-stroke-blue-color text-stroke-blue-color py-3 px-12 hover:text-secondary-color hover:border-secondary-color transition-colors transition-duration-300'
		>
			{children}
		</Link>
	)
}

export default NavBtn
