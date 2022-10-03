import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom'
import PagesHeader from '../layout/PagesHeader';

export default function Product() {
    const pram=useParams();
    const id=pram.id;
    const product=useSelector((state)=>{return state.proAPI.apiProducts[id]})
    
  return (
   <>
   <PagesHeader />
   <h3>{product.title}</h3>
   <h2>{product.price}$</h2>
   <img src={product.image}/>
   </>
  )
}
