import React from 'react'
import './Navbar.css'
import { useNavigate } from 'react-router-dom'
const Navbar = () => {
  const navigate = useNavigate();
  const go_home = () => { navigate('/') }
  const go_categories = () => { navigate('/categories') }
  const go_listing = () => { navigate('/listing') }
  return (
    <>
      <nav class=" navbar navbar-expand-lg bg-body-tertiary">
        <div class="container-fluid d-flex justify-content-between">
          <div class="navbar-brand fs-2 nav-item-pointe">Digital <span className='text-warning'>Fatehabad</span></div>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse  d-flex justify-content-end" id="navbarSupportedContent">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
              <li class="nav-item">
                <div class="nav-link  nav-item-pointe mx-3" aria-current="page" onClick={go_home}>Home</div>
              </li>
              <li class="nav-item">
                <div class="nav-link nav-item-pointe mx-3" onClick={go_categories}>Categories</div>
              </li>
              <li class="nav-item">
                <div class="nav-link nav-item-pointe mx-3" onClick={go_listing}>Listing</div>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  )
}

export default Navbar
