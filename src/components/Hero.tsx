import React from 'react'
import Image from 'next/image'
import hero from '../../public/hero-image.png'
import googleRevievs from '../../public/GoogleReviews.png'
import { HeroCompare } from './HeroCompare'
import HeroButton from './HeroButton'

const Hero = () => {
	return (
		<section>
			<div className='flex justify-center items-center mt-24 lg:mt-48'>
				<div className='space-y-6'>
					<h1 className='text-center m-auto lg:text-left'>
						Profesjonalne mycie <br />
						<span className='text-main-color'>kostki brukowej</span>
					</h1>
					<p className='hidden lg:block max-w-[70%] text-xl'>
						Kompleksowe czyszczenie i impregnacja powierzchni.
						Sprawdź, jak przywrócimy blask Twojego otoczenia!
					</p>
					<HeroButton className='hidden lg:block'>
						Poznaj nas
					</HeroButton>
					<Image
						src={googleRevievs}
						alt='Google reviews'
						height={45}
						width={316}
						className='hidden lg:block'
					/>
				</div>
				<HeroCompare />
			</div>
			<Image
				src={hero}
				width={1080}
				height={949}
				alt='Pracownik myjący elewację'
				className='max-w-[30vh] mx-auto my-6 lg:hidden'
			/>
			<div className='flex flex-col justify-center items-center space-y-4'>
				<p className='max-w-[70%] mx-auto text-xl text-center lg:hidden'>
					Kompleksowe czyszczenie i impregnacja powierzchni.
					<br /> Sprawdź, jak przywrócimy blask Twojego otoczenia!
				</p>
				<HeroButton className='lg:hidden'>Poznaj nas</HeroButton>
				<Image
					src={googleRevievs}
					alt='Google reviews'
					height={45}
					width={316}
					className='lg:hidden'
				/>
			</div>
		</section>
	)
}

export default Hero
