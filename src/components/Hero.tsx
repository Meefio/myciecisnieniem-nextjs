import React from 'react'
import Image from 'next/image'
import hero from '../../public/hero-image.png'
import { HeroCompare } from './HeroCompare'

const Hero = () => {
	return (
		<section>
			<div className='mt-24'>
				<h1 className=''>
					Profesjonalne mycie <br />{' '}
					<span className='text-main-color'>kostki brukowej</span>
				</h1>
			</div>
			<Image
				src={hero}
				width={1080}
				height={949}
				alt='Pracownik myjący elewację'
				className='max-w-[30vh] mx-auto my-6 lg:hidden'
			/>
         <HeroCompare />
			<p className='max-w-[70%] mx-auto text-xl text-center'>
				Kompleksowe czyszczenie i impregnacja powierzchni. Sprawdź,
				jak przywrócimy blask Twojego otoczenia!
			</p>
		</section>
	)
}

export default Hero
