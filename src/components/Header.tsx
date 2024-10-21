import Link from 'next/link'
import React from 'react'

function Header() {
  return (
    <div className='bg-emerald-200 text-emerald-950'>
      <div className='flex justify-between items-center p-6'>
        {/* Left side - Title */}
        <h1 className= 'text-4xl font-extrabold font-serif '>Rivo</h1>
        
        {/* Centered Menu */}
        <ul className='flex justify-center gap-7 flex-grow font-bold font-serif'>
        <Link href="/home"><li>Home</li></Link>

          <Link href="/shop"><li>Shop</li></Link>
          <Link href="/feature"><li>Feature</li></Link>
          <Link href="/contact"><li>Contact</li></Link>

          
        </ul>
        
        {/* Right side - Sign-in button */}
        <button
          type="submit"
          className='bg-green-300 text-emerald-950 hover:bg-yellow-50 transition px-4 py-2 outline outline-1 outline-black'
>
          Log-In
        </button>
      </div>
    </div>
  )
}

export default Header
