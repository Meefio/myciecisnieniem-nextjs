import React from 'react'
import Image from 'next/image'
import hero from '../../public/hero-image.png'
import googleRevievs from '../../public/GoogleReviews.png'
import { HeroCompare } from './HeroCompare'
import HeroButton from './HeroButton'
import { FlipWords } from "./ui/flip-words";

const Hero = () => {
	return (
		<section>
			<div className='flex justify-center items-center mt-16 lg:mt-48'>
				<div className='space-y-6'>
					<h1 className='text-center m-auto lg:text-left'>
						Profesjonalne mycie <br />
                  
						<FlipWords className='text-main-color' words={['kostki brukowej', 'kostki granitowej', 'elewacji', 'dachu', 'fasady']} />
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
				width={415}
				height={365}
				alt='Pracownik myjący elewację'
				className='max-w-[80%] mx-auto my-6 lg:hidden'
			/>
			<div className='flex flex-col justify-center items-center space-y-4'>
				<p className='mx-auto text-sm text-center lg:hidden mt-4'>
					Kompleksowe czyszczenie i impregnacja powierzchni.
					<br /> Sprawdź, jak przywrócimy blask Twojego otoczenia!
				</p>
				<HeroButton className='lg:hidden'>Poznaj nas</HeroButton>
				<Image
					src={googleRevievs}
					alt='Google reviews'
					height={30}
					width={210}
					className='lg:hidden'
				/>
			</div>
		</section>
	)
}

export default Hero
