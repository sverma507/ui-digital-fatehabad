import React, { useState,useEffect } from 'react'

import { collection, getDocs,doc } from "firebase/firestore";
import { getFirestore,} from "firebase/firestore";
import { app } from "../../Firebase";
import { useNavigate } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import { useLocation } from 'react-router-dom';

function Subcategory() {
  const navigate=useNavigate();
  const location = useLocation();
  const Category = location.state?.Category;
  const id=Category.id;
  console.log("cate=>",id);
  const [list,setList]=useState(null);
useEffect(() => {
  get();
}, []);

const get = async () => {
    const db = getFirestore(app);
    const cateref = collection(db, 'categories');
    const docRef = doc(cateref,id);
    const subcateref = collection(docRef,Category.category);
    const snapshot = await getDocs(subcateref);
    // console.log("snapshot=>",snapshot);
    const data = snapshot.docs.map((item) => {
        return (
            {
                id: item.id,
                ...item.data(),
            }
        )
    })

    // console.log("data=>",data);
    setList(data)
    
};

const go_subcate=(item)=>{
  navigate(`/${Category.category}/${item.subcategory}`,{state:{Subcategory:item}})
  // console.log("name",name);
}
  console.log("sublist=>",list);
  return (
    <>
      <div className='pop-listing-outer'>
        <div className='list-outer'>
        {
            list&&list.map((item,index)=>{
                return(
                  <div className='card' onClick={()=>{const item1={cateData:{id:Category.id,name:Category.category},...item};go_subcate(item1)}}>

                        <div className='card-img'></div>
                        <div className='card-text'>
                            <div className='location-icon'></div>
                            <div className='name text-center'>{item.subcategory}</div>
                            <div className='hr-card'></div>
                            {/* <div className='address'>{item}</div> */}
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

export default Subcategory
