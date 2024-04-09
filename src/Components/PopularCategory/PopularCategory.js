import React from 'react'
import './PopularCategory.css'
import { useNavigate } from 'react-router-dom'
function PopularCategory( props) {
  const navigate=useNavigate();
  const a=[{pop_cate:"Academy"},{pop_cate:"Accoutant & Ca"},{pop_cate:"Automobile"},{pop_cate:"Building material"},{pop_cate:"Books"},{pop_cate:"Colleges"},{pop_cate:"Computer Laptops"},{pop_cate:"Electricians"},{pop_cate:"Furniture"},{pop_cate:"General Storage"},{pop_cate:"Event"},{pop_cate:"Hotels"},{pop_cate:"Hosptal"}]
  const go_categories=()=>{navigate('/categories')}
  return (
    <>
      <div className='pop-outer'>
            <div className='pop-heading'>{props.heading}</div>
            <div className='hr'></div>
            <div className='pop-items'>
                {
                    a.map((item,index)=>{
                       return(
                        <div className='item' key={index}>
                            {item.pop_cate}
                        </div>
                       );
                    })
                    
                }
            </div>
            { props.show_btn ? (<div className='pop-btn' onClick={go_categories}>Browse More Category</div>) :null}
      </div>
    </>
  )
}

export default PopularCategory
