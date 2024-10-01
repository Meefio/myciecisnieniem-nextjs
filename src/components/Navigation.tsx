import Link from 'next/link'
import Image from 'next/image'

const Navigation = () => {
  return (
    <nav className="bg-white shadow-md">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link href="/" className="flex items-center">
          <Image src="/logo.png" alt="MyCiśnieniem Logo" width={50} height={50} />
          <span className="ml-2 text-xl font-bold text-blue-600">MyCiśnieniem</span>
        </Link>
        <div className="hidden md:flex space-x-4">
          <Link href="/" className="text-gray-600 hover:text-blue-600">Strona główna</Link>
          <Link href="/o-nas" className="text-gray-600 hover:text-blue-600">O nas</Link>
          <Link href="/uslugi" className="text-gray-600 hover:text-blue-600">Usługi</Link>
          <Link href="/galeria" className="text-gray-600 hover:text-blue-600">Galeria</Link>
          <Link href="/kontakt" className="text-gray-600 hover:text-blue-600">Kontakt</Link>
        </div>
        <button className="md:hidden">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>
    </nav>
  )
}

export default Navigation