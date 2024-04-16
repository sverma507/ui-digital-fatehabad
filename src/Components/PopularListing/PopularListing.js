import React, { useState,useEffect } from 'react'
import './PopularListing.css'
// import { addDoc, updateDoc } from "firebase/firestore";
import { collection, getDocs,doc } from "firebase/firestore";
import { getFirestore,} from "firebase/firestore";
import { app } from "../../Firebase";
function PopularListing() {
  const [list,setList]=useState(null);
//   let obj= {
//     name:"",
//     bname:"",
//     bcategory:"",
//     bowner:"",
//     baddress:"",
//     bm_number:"",
//     balternate_m_number:"",
// }
// let [info,setInfo]=useState(
//     {
//         name:"",
//         bname:"",
//         bcategory:"",
//         bowner:"",
//         baddress:"",
//         bm_number:"",
//         balternate_m_number:"",
//     })
  
useEffect(() => {
  get();
}, []);

const get = async () => {
  const db = getFirestore(app);
  const cateref = collection(db, 'all_lists');
  const snapshot = await getDocs(cateref);
  // console.log("snapshot=>",snapshot);
  const data = snapshot.docs.map((item) => {
      return (
          {
              id: item.id,
              ...item.data(),
          }
      )
  })
  setList(data);
};
  // console.log("list=>",list);
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
            list&&list.map((item,index)=>{
                return(
                    <div className='card'>
                        <div className='card-img'></div>
                        <div className='card-text'>
                            <div className='location-icon'></div>
                            <div className='name'>{item.data.name}</div>
                            <div className='hr-card'></div>
                            <div className='address'>{item.data.baddress}</div>
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
