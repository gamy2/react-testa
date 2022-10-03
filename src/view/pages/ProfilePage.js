import React from 'react'
import { useSelector } from 'react-redux';
import PagesHeader from '../layout/PagesHeader'

function ProfilePage() {
  let lang=useSelector((state)=>{return state.user.data})
  return (
    <><PagesHeader />
    <div>ProfilePage</div></>
  )
}

export default ProfilePage