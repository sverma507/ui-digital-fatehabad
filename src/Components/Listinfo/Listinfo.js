import React from 'react'
import './Listinfo.css'
function Listinfo() {
  return (
    <>
     <div className='row bg-dark text-white p-3'>
        <div className='col-12 text-white text-center d-flex flex-column align-items-center'>
            <div className='col-12 list-logo text-center'> photo</div>
            <div className='col-12 mt-3'> Hospital</div>
            <div className='col-12 mt-4 fs-2 fw-bold'> Ravindra Hospital & Heart Centre</div>
            <div className='col-12 mt-4 fs-4 fw-bold'> Ravindra Hospital Hisar</div>
            <div className='col-12 mt-4 fs-4 '> <span className='text-danger'><i class="fa-solid fa-location-dot"></i></span>  95 E, New Model Town, Hisar, Haryana 125005</div>
            <div className='col-12 mt-4 fs-4 '> <span className='text-danger'><i class="fa-solid fa-phone"></i></span>  7056878839</div>
            <div className='col-12 d-flex flex-wrap justify-content-start'>
                <button type="button" class="btn btn-outline-danger m-2"><i class="fa-regular fa-comment"></i> Write a Review</button>
                <button type="button" class="btn btn-outline-danger m-2"><i class="fa-solid fa-share-nodes"></i> Share</button>
                <button type="button" class="btn btn-outline-danger m-2"><i class="fa-regular fa-heart"></i> Save</button>
                <button type="button" class="btn btn-outline-danger m-2"><i class="fa-regular fa-flag"></i> Report</button>
                <button type="button" class="btn btn-outline-danger m-2"><i class="fa-brands fa-get-pocket"></i> Claim</button>
            </div>
        </div>
        
     </div>
    </>
  )
}

export default Listinfo
