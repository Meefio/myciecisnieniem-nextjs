import Link from 'next/link'
import React from 'react'

const Banner = () => {
	return (
		<div className='bg-bg-gray text-white py-3'>
			<div className='wrapper flex items-center justify-between'>
				<div className='md:flex items-center hidden'>
					<div className='bg-location-icon w-5 h-6  bg-contain bg-no-repeat'></div>
					<Link
						href='https://goo.gl/maps/4pV8k5YHkXq7Xqjz8'
						className='text-xs md:text-base text-white px-1 hover:text-secondary-color transition-colors duration-300'
					>
						Warszawa i okolice
					</Link>
				</div>
				<div className='flex items-center'>
					<div className='bg-at-sign w-5 h-5  bg-contain  bg-no-repeat'></div>
					<Link
						href='mailto:kontakt@myciecisnieniem.pl'
						className='text-xs md:text-base text-white px-1 hover:text-secondary-color transition-colors duration-300'
					>
						kontakt@myciecisnieniem.pl
					</Link>
				</div>
				<div className='flex items-center'>
					<div className='bg-phone-icon-primary w-5 h-5  bg-contain  bg-no-repeat'></div>
					<Link
						href='tel:507-296-296'
						className='text-xs md:text-base text-white px-1 hover:text-secondary-color transition-colors duration-300'
					>
						507-296-296
					</Link>
				</div>
			</div>
		</div>
	)
}

export default Banner
