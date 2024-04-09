import React from 'react'
import './PopularListing.css'
function PopularListing() {
    const arr=[{name:"M M College", address:"Block C, Ardee City, Sector 52, Gurugram, Haryana 122003",},
    {name:"D N College", address:"Block C, Ardee City, Sector 52, Gurugram, Haryana 122003",},
    {name:"Govt College", address:"Block C, Ardee City, Sector 52, Gurugram, Haryana 122003",},
    {name:"Poltech College", address:"Block C, Ardee City, Sector 52, Gurugram, Haryana 122003",},
    {name:"Hanuman Electrician", address:"Block C, Ardee City, Sector 52, Gurugram, Haryana 122003",},
    {name:"Balbir Electrician", address:"Block C, Ardee City, Sector 52, Gurugram, Haryana 122003",},
    {name:"Ganpati Book Depo", address:"Block C, Ardee City, Sector 52, Gurugram, Haryana 122003",},
    {name:"Govt School Dhangar", address:"Block C, Ardee City, Sector 52, Gurugram, Haryana 122003",},
    {name:"Govt Girls School Dhangar", address:"Block C, Ardee City, Sector 52, Gurugram, Haryana 122003",},
    {name:"Govt Girls School Dhangar", address:"Block C, Ardee City, Sector 52, Gurugram, Haryana 122003",},
    {name:"New Bus Stand", address:"Block C, Ardee City, Sector 52, Gurugram, Haryana 122003",},
    {name:"Court Fatehabad", address:"Block C, Ardee City, Sector 52, Gurugram, Haryana 122003",},
]
  return (
    <>
      <div className='pop-listing-outer'>
        <div className='pop-heading'>
            Explore Directory Category
        </div>
        <div className='hr'></div>
        <div>Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio, atque porro mollitia illo.</div>
        <div className='list-btn'>
            <div className='pop-btn'>All Category</div>
            <div  className='pop-btn'>Hospital</div>
            <div  className='pop-btn'>Police Station</div>
            <div  className='pop-btn'>Auto Mobile</div>
            <div  className='pop-btn'>Car Repairing</div>
        </div>
        <div className='list-outer'>
        {
            arr.map((item,index)=>{
                return(
                    <div className='card'>
                        <div className='card-img'></div>
                        <div className='card-text'>
                            <div className='location-icon'></div>
                            <div className='name'>{item.name}</div>
                            <div className='hr-card'></div>
                            <div className='address'>{item.address}</div>
                        </div>
                    </div>
                );
            })
        }
        </div>
      </div>
    </>
  )
}

export default PopularListing
