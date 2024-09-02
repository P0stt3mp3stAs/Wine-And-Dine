import React from 'react'
import Link from 'next/link'

const Navigation: React.FC = () => {
  return (
    <nav className="bg-blue-600 text-white p-4 m-2 fixed top-0 left-0 right-0 z-50 rounded-full">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-xl font-bold">
          <Link href="/">Wine & Dine</Link>
        </div>
        <div className="space-x-4">
          <Link href="/" className="hover:text-gray-400">Home</Link>
          <Link href="/about" className="hover:text-gray-400">About</Link>
          <Link href="/contact" className="hover:text-gray-400">Contact</Link>
          <Link href="/signup" className="text-red-400 font-bold hover:text-red-300">signup</Link>
        </div>
      </div>
    </nav>
  )
}

export default Navigation
