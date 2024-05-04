import React, { useState,useEffect } from 'react'
import { collection, getDocs,doc } from "firebase/firestore";
import { getFirestore,} from "firebase/firestore";
import { app } from "../../Firebase";
import './PopularCategory.css'
import { useNavigate } from 'react-router-dom'

function PopularCategory( props) {
  const navigate=useNavigate();
  const [list,setList] =useState(null);
  const go_categories=()=>{navigate('/categories')}
  useEffect(() => {
    get();
  }, []);
  
  const get = async () => {
    const db = getFirestore(app);
    const cateref = collection(db, 'categories');
    const snapshot = await getDocs(cateref);
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

  const go_category=(item)=>{
    navigate(`/${item.category}`,{state:{Category:item}})
    // console.log("category=>",item);
  }
  // console.log("list=>",list);
  return (
    <>
      <div className='pop-outer'>
            <div className='pop-heading'>{props.heading}</div>
            <div className='hr'></div>
            <div className='pop-items'>
                {
                    list&&list.map((item,index)=>{
                       return(
                        <div className='item' key={index} onClick={()=>{go_category(item)}}>
                            {item.category}
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
