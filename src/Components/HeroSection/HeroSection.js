import React from 'react'
import './HeroSection.css'
function HeroSection() {
  return (
    <>
      <div className='hero'>
        <div className='hero-bg'>
            <div className='hero-outer'>
                <div className='hero-heading'>Discover Your City</div>
                <div><input type='text' placeholder='Search...' className='hero-input' /></div>
            </div>
        </div>
      </div>
    </>
  )
}

export default HeroSection
