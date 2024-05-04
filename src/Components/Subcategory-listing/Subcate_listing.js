import React, { useState,useEffect } from 'react'
import { collection, getDocs,doc, getDoc } from "firebase/firestore";
import { getFirestore,} from "firebase/firestore";
import { app } from "../../Firebase";
import { useNavigate } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
function Subcate_listing() {
  const navigate=useNavigate();
  const location = useLocation();
  const Subcategory = location.state?.Subcategory;
  // console.log("Subcategory=>",Subcategory);
  const id=Subcategory.id;
  // console.log("Subcategory",Subcategory);
//   console.log("cate=>",categoryName);
  const [list,setList]=useState(null);
useEffect(() => {
  get();
}, []);

const get = async () => {
    const db = getFirestore(app);
    const cateref = collection(db, 'categories');
    const docRef = doc(cateref,Subcategory.cateData.id);
    
    const subcateref = collection(docRef,Subcategory.cateData.name);
    const docRef1 = doc(subcateref,Subcategory.id);
    const subcateref1 = collection(docRef1,Subcategory.subcategory);
    const snapshot = await getDocs(subcateref1);
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
  setList(data);
};

const go_list=(item)=>{
  navigate(`/${Subcategory.cateData.name}/${Subcategory.subcategory}/${item.id}`,{state:{list:item}})
}
  console.log("list=>",list);
  return (
    <>
    {/* <div>hello</div> */}
      <div className='pop-listing-outer'>
        <div className='list-outer'>
        {
            list&&list.map((item,index)=>{
                return(

                    <div className='card' onClick={()=>{const item1={subcateData:{id:Subcategory.id,name:Subcategory.subcategory},cateData:{id:Subcategory.cateData.id,name:Subcategory.cateData.name},...item};go_list(item1)}}>
                      
                        <div className='card-img'></div>
                        <div className='card-text'>
                            <div className='location-icon'></div>
                            <div className='name text-center'>{item.data.bname}</div>
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

export default Subcate_listing
