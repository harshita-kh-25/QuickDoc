import React from 'react'
import Navbar from './Navbar'
import HeroBanner from './HeroBanner'
import SmartTools from './SmartTools'
import EDToolsSection from './EDToolsSection'
import PricingSection from './PricingSection'
import TestimonialSection from './TestimonialSection'
import CallToAction from './CallToAction'
import Footer from './Footer'

function Home() {
  return (
    <div className='bg-gradient-to-r from-green-200 via-blue-100 to-purple-200'>
        <HeroBanner/>
        <SmartTools/>
        <EDToolsSection/>
        <PricingSection/>
        <TestimonialSection/>
        <CallToAction/>
        <Footer/>
    </div>
  )
}

export default Home