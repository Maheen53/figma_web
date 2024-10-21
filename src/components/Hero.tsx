import React from 'react'
import Image from 'next/image'

function Hero() {
  return (
    <div className='flex items-center justify-between p-5 bg-emerald-200 text-emerald-950 min-h-screen'>
      
      {/* Left Side: Text Content */}
      <div className='max-w-md'>
        <h1 className="animate-pulse mt-4 font-bold text-6xl font-serif ">Discover And</h1>
        <h1 className="animate-pulse mt-4 font-bold text-6xl font-serif">Find Your Own</h1>
        <h1 className="animate-pulse mt-4 font-bold text-6xl font-serif">Fashion!</h1>

        <h2 className=" mt-6 font-bold text-lg text-green-700">
          Explore our curated collection of stylish clothing
        </h2>
        <h2 className="font-bold text-lg text-green-700">
          and accessories tailored to your
        </h2>
        <h2 className="font-bold text-lg text-green-700"> unique taste.</h2>

        {/* Styled Button */}
        <button className="mt-6 bg-emerald-500 hover:bg-emerald-600 text-white font-bold py-3 px-6 rounded-lg">
          Explore Now
        </button>
      </div>

      {/* Right Side: Image with Dark Green Background */}
      <div className='ml-10 p-5 bg-emerald-800 rounded-full'>
        <Image 
          src="/pexels-dima-valkov-6402847 2.png" 
          alt="Fashion Image"  
          width={500}   // Set the width you want
          height={500}  // Set the height you want
          className="rounded-lg shadow-lg"
        />
      </div>
    </div>
  )
}

export default Hero
