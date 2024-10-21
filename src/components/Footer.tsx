import React from 'react'

function Footer() {
  return (
    <footer className="bg-teal-800 p-4 mt-0" >
    <div className=' grid grid-cols-1 gap-10 md:grid-cols-4'>
    <div className="text-white text-left ">
      <h1 className='text-xl font-bold'>Rivo</h1>
      &copy; {new Date().getFullYear()} Maheen Imtiaz. All rights reserved.
      </div>
      <div className="text-white text-left"> 
      <h1 className='text-xl font-bold'>Shop</h1>
      <ol className='mt-5 flex-col gap-3 text-sm md:text-base line-inside'>
      <li>product</li>
      <li>overview</li>
      <li>pricing</li>
      <li>Realeases</li>
      </ol>
      </div>
    <div className='text-white'>
      <h1 className='text-xl font-bold'>COMPANY</h1>
      <ul>
        <li>About us</li>
        <li>Contact</li>
        <li>News</li>
        <li>Support</li>
      </ul>
    </div>
    <div className="text-white text-left"> {/* New section for email subscription */}
      <h1 className="text-xl font-bold">Stay up to date</h1>
      <div className="mt-3 flex items-center">
        <input 
          type="email" 
          id="enteryouremail" 
          placeholder="Enter your email" 
          className="p-2 rounded-l-md border border-gray-300" 
        />
        <button 
          type="submit" 
          className="bg-teal-400 text-white p-2 rounded-r-md hover:bg-blue-700 transition duration-200"
        >
          Submit
        </button>
      </div>
      </div>
    </div>
    </footer>
  )
}

export default Footer