import React from 'react'
import './Footer.css'
function Footer() {
  return (
    
    <div className='footer'>
        <div className='foot-1'>
            <div className='foot-1-box'>
                <div className='phone-icon'>
                <i class="fa-solid fa-phone"></i>
                </div>
                <div>+91 9802250514</div>
            </div>
            <div className='foot-1-box'>
                <div className='phone-icon'>
                <i class="fa-regular fa-envelope"></i>
                </div>
                <div>digitalfatehabad@gmail.com</div>
            </div>
            <div className='foot-1-box'>
                <div className='phone-icon'>
                <i class="fa-solid fa-location-dot"></i>
                </div>
                <div>Fatehabad,Haryana,India</div>
            </div>
        </div>
        {/* <div className='foot-2'>
            <div className='foot-2a'>
                <div className='foot-2-head'>About</div>
                <div className='foot-2-text'>Out story Awards Our Team Career</div>
            </div>
            <div className='foot-2a'>
                <div className='foot-2-head'>Company</div>
                <div className='foot-2-text'>Our services Clients Contact Press</div>
            </div>
            <div className='foot-2a'>
                <div className='foot-2-head'>Resources</div>
                <div className='foot-2-text'>Blog Newsletter Privacy Policy</div>
            </div>
            <div className='foot-sub-outer'>
                <div className='foot-2-head'>SubScribe</div>
                <div className='foot-2-text foot-sub'><div> <input type='text' className='foot-input' placeholder='Enter email address...'/></div><div className='foot-btn'>Subscribe</div></div>
            </div>
        </div> */}
        <div className='foot-3'>
        Copyright © 2024 All rights reserved. | This template is made with  by <span className='foot-main-text'>DigitalFateahabad.com</span>
        </div>
    </div>
    
  )
}

export default Footer
