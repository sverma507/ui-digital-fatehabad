import React, { useEffect, useState } from 'react'
import './Listinfo.css'
import { useParams } from 'react-router-dom'
import { collection, getDocs,doc } from "firebase/firestore";
import { getFirestore,} from "firebase/firestore";
import { app } from "../../Firebase";
import Footer from '../Footer/Footer';
import { useLocation } from 'react-router-dom';
function Listinfo() {
  const location = useLocation();
  const item = location.state?.list;
  // console.log("List=>",List);
  const {id}=useParams();
  // const [list,setList]=useState(null);
  // setList(List);
  // useEffect(()=>{
  //   get();
  // // },[id])
  // const get = async () => {
  //   const db = getFirestore(app);
  //   const cateref = collection(db, 'categories');
  //   const docRef = doc(cateref,List.cateData.id);
  //   const subcateref = collection(docRef,List.cateData.name);
  //   const docRef1 = doc(subcateref,List.subcateData.id);
  //   const subcateref1 = collection(docRef1,List.subcateData.name);

  //   const listref =  doc(subcateref1,List.id);
  //   const listcollectionref=collection(listref,List.data)
  //   const snapshot=getDocs(listcollectionref)
  //   console.log("snapshot=>",snapshot);
  //   const data = snapshot.docs.map((item) => {
  //       return (
  //           {
  //               id: item.id,
  //               ...item.data(),
  //           }
  //       )
  //   })
  //   console.log("snapshot=>",snapshot);
   

  // };
 
  // console.log("name=>",id);
  // console.log("listdata=>",list);
  return (
    <>
    {<div className='row bg-dark text-white p-3'>
        <div className='col-12 text-white text-center d-flex flex-column align-items-center'>
            <div className='col-12 list-logo text-center'></div>
            <div className='col-12 mt-3'>{item.data.bcategory}</div>
            <div className='col-12 mt-4 fs-2 fw-bold'>{item.data.bname}</div>
            <div className='col-12 mt-4 fs-4 fw-bold'> </div>
            <div className='col-12 mt-4 fs-4 '> <span className='text-danger'><i class="fa-solid fa-location-dot"></i> </span>{item.data.baddress}</div>
            <div className='col-12 mt-4 fs-4 '> <span className='text-danger'><i class="fa-solid fa-phone"></i> </span>{item.data.bm_number}</div>
            <div className='col-12 d-flex flex-wrap justify-content-start'>
                <button type="button" class="btn btn-outline-danger m-2"><i class="fa-regular fa-comment"></i> Write a Review</button>
                <button type="button" class="btn btn-outline-danger m-2"><i class="fa-solid fa-share-nodes"></i> Share</button>
                <button type="button" class="btn btn-outline-danger m-2"><i class="fa-regular fa-heart"></i> Save</button>
                <button type="button" class="btn btn-outline-danger m-2"><i class="fa-regular fa-flag"></i> Report</button>
                <button type="button" class="btn btn-outline-danger m-2"><i class="fa-brands fa-get-pocket"></i> Claim</button>
            </div>
        </div>
        
     </div>}
     <Footer/>
    </>
  )
}

export default Listinfo
