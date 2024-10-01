import Image from 'next/image'
import Link from 'next/link'

export default function Home() {
  return (
    <main>
      <section className="relative h-screen">
        <Image
          src="/hero-image.jpg"
          alt="Czyszczenie ciśnieniowe"
          layout="fill"
          objectFit="cover"
          quality={100}
        />
        <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-center items-center text-white text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">MyCiśnieniem</h1>
          <p className="text-xl md:text-2xl mb-8">Profesjonalne usługi czyszczenia ciśnieniowego</p>
          <Link href="/kontakt" className="bg-blue-600 text-white px-8 py-3 rounded-full text-lg font-semibold hover:bg-blue-700 transition duration-300">
            Zamów usługę
          </Link>
        </div>
      </section>
      {/* Add more sections here as needed */}
    </main>
  )
}