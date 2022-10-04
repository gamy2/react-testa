import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Link, useLoaderData, useLocation, useParams } from 'react-router-dom';
import DBconnection from '../../model/network';
import changeProductsAPI from '../../store/actions/productAPI';
import { changeProducts } from '../../store/actions/products';
import PagesHeader from '../layout/PagesHeader'

export default function ShopPage(param) {
const ob={name:"ahmed",age:20}
const{name,age}=ob;
 const storeProduts=useSelector((state)=>{return state.proAPI.apiProducts})
 const loader=useSelector((state)=>{return state.loader.loader})
// mount
const dispatch=useDispatch();
 useEffect(()=>{

if(storeProduts.length==0)
{
  dispatch(changeProductsAPI())
}
  },[])
  return (
    
   <><PagesHeader />
  {loader==true? <div className='d-flex justify-content-center'>
   <div className="spinner-border" role="status">
  <span className="visually-hidden">Loading...</span>
</div>
   </div>:

  
  storeProduts.map((product,index)=>
  {
    return <Link to={"/shop/product/"+index}>
    <h1 key={index}>{product.title}</h1></Link>
  })
}

<button onClick={()=>console.log(loader)}style={{backgroundColor:"red"}}>StoreProduts</button>
   </>
  )
}
