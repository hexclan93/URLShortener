'use client'
import React, { useState } from 'react'
import Link from 'next/link'

const Navbar = () => {

  const [open, setOpen] = useState(false)

  return (
    <main className='bg-purple-700 text-white'>

      <div className='h-14 flex justify-between items-center px-3'>

        <div className='logo font-bold text-2xl'>
          <Link href="/">BitLinks</Link>
        </div>

        {/* Desktop Menu */}
        <ul className='hidden md:flex justify-center gap-4 items-center'>
          <li><Link href="/">Home</Link></li>
          <li><Link href="/about">About</Link></li>
          <li><Link href="/shorten">Shorten</Link></li>
          <li><Link href="/contact">Contact Us</Link></li>

          <li className='flex gap-3'>
            <Link href="/shorten">
              <button className='bg-purple-500 rounded-lg shadow-lg p-3 py-1 font-bold'>
                Try Now
              </button>
            </Link>

            <Link href="/github">
              <button className='bg-purple-500 rounded-lg shadow-lg p-3 py-1 font-bold'>
                GitHub
              </button>
            </Link>
          </li>
        </ul>

        {/* Mobile Menu Button */}
        <button
          className='md:hidden text-3xl'
          onClick={() => setOpen(!open)}
        >
          ☰
        </button>

      </div>

      {/* Mobile Menu */}
      {open && (
        <ul className='md:hidden flex flex-col items-center gap-4 pb-4'>

          <li><Link href="/">Home</Link></li>
          <li><Link href="/about">About</Link></li>
          <li><Link href="/shorten">Shorten</Link></li>
          <li><Link href="/contact">Contact Us</Link></li>

          <li className='flex flex-col gap-3 w-full px-4'>
            <Link href="/shorten">
              <button className='bg-purple-500 rounded-lg shadow-lg w-full py-2 font-bold'>
                Try Now
              </button>
            </Link>

            <Link href="/github">
              <button className='bg-purple-500 rounded-lg shadow-lg w-full py-2 font-bold'>
                GitHub
              </button>
            </Link>
          </li>

        </ul>
      )}

    </main>
  )
}

export default Navbar