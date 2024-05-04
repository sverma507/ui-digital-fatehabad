import React from 'react'
import './HeroSection.css'
function HeroSection() {
  return (
    <>
      <div className="row hero d-flex align-items-center" style={{height:'30rem'}}>
        <div className='col-12 hero-bg  d-flex align-items-center' style={{height:'30rem'}}>
          <div className='row  d-flex align-items-center' style={{height:'30rem'}}>
            <div className='col-12  d-flex justify-content-center flex-column' style={{height:'30rem',width:"50rem"}}>
              <div className=' text-warning text-center '><h1 className='fw-bold'>Fatehabad Bussiness Directory</h1></div>
              <div><h2 class="fs-6 text-white">Are you in Fatehabad and looking for the best restaurants, hospitals, gyms, schools, or anything else? You're in the right place! Welcome to Digital Fatehabad, your all-in-one guide for everything Fatehabad has to offer.</h2></div>
              <div className='text-center'><input type='text' placeholder='Search...' className='mt-3 px-3 py-2 rounded fs-3 hero-search'  /></div>
            </div>
          </div>
        </div>
      </div>

    </>
  )
}

export default HeroSection
