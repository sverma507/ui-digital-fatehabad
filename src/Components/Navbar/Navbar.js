import React from 'react'
import './Navbar.css'
import { useNavigate } from 'react-router-dom'
const Navbar = () => {
  const navigate=useNavigate();
  const go_home=()=>{navigate('/') }
  const go_categories=()=>{navigate('/categories') }
  const go_listing=()=>{navigate('/listing') }
  return (
    <>
      <div className='nav-outer'>
        <div className='heading'>
            Digital Fatehabad
        </div>
       <div className='nav-items-outer'>
            <div className='nav-items'>
                <div className='nav-item' onClick={go_home}>Home</div>
                <div className='nav-item' onClick={go_categories}>Categories</div>
                <div className='nav-item' onClick={go_listing}>Listing</div>
                <div className='nav-item'>About</div>
                <div className='nav-item'>Login</div>
                <div className='nav-item'>Contact Us</div>
            </div>
            <div className='nav-item'><button className=' nav-item nav-btn'>Link Your Bussiness</button></div>
       </div>
      </div>
    </>
  )
}

export default Navbar
