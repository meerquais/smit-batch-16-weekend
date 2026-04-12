"use client"

import Link from "next/link"


export default function Navbar(){



  return (
    <>
    

    <nav className="bg-white shadow-md">

      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        
        <h1 className="text-xl font-bold text-blue-500">My App</h1>

        <div className="space-x-6 hidden md:flex">

          <Link href="/" className="hover:text-blue-500">Home</Link>
          <Link href="/about" className="hover:text-blue-500">About</Link>
          <Link href="/contact" className="hover:text-blue-500">Contact</Link>

        </div>

        <div className="md:hidden">

          <button className="text-gray-600">=</button>

        </div>

      </div>

    </nav>
    
    
    
    
    </>
  )
}