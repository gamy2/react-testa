
import React from 'react'
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import PagesHeader from '../layout/PagesHeader'

export default function HomePage() {

let lang=useSelector((state)=>{return state.lang})

 
  return (
    <>
    <PagesHeader />
    <div>{lang.lang=="en"?"homepage":"الصفحه الرئيسه"}   {lang.lang} </div></>
  )
}
