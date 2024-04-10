import React from 'react'
import './HeroSection.css'
function HeroSection() {
  return (
    <>
      <div className="row hero d-flex align-items-center" style={{height:'30rem'}}>
        <div className='col-12 hero-bg  d-flex align-items-center' style={{height:'30rem'}}>
          <div className='row  d-flex align-items-center' style={{height:'30rem'}}>
            <div className='col-12  d-flex justify-content-center flex-column' style={{height:'30rem'}}>
              <div className='fs-1 text-warning text-center fw-bold'>Discover Your City</div>
              <div className='text-center'><input type='text' placeholder='Search...' className='mt-3 p-2 rounded fs-3 w-100'  /></div>
            </div>
          </div>
        </div>
      </div>

    </>
  )
}

export default HeroSection
