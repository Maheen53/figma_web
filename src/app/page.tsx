import Header from '@/components/Header'
import Hero from '@/components/Hero'
import React from 'react'
import Shop from './(Auth)/shop/page'
import Banner from '@/components/Banner'

function page() {
  return (
    <div className='bg-emerald-200 text-emerald-950'>
      
      <Hero/>
      <Shop/>
      <Banner/>
    </div>
  )
}

export default page
