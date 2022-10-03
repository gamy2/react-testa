import './App.css';
import LoginPage from './view/pages/loginPage/Login';
import React, { useState } from "react";
import {
  BrowserRouter  as Routee,
  Routes ,
  Route,
  useParams,
} from "react-router-dom";

import RegPage from './view/pages/RegPage';
import HomePage from './view/pages/home';
import ProfilePage from './view/pages/ProfilePage';
import ShopPage from './view/pages/ShopPage';
import NotFound from './view/pages/404';
import Product from './view/pages/product';
import { useSelector } from 'react-redux';
import { LangProvider } from './context/langContext';
import Portflio from './view/pages/portflio';

function App() {
  
  let lang=useSelector((state)=>{return state.lang})

 const[langg,setLang]= useState("en");
  return (
    <>
    {/* redux */}
    <div dir={lang.lang=="en"?"ltr":"rtl"}>
      {/* //context */}
   <LangProvider value={{langg,setLang}}>
   <Routee>
<Routes>
  <Route path="/" element={<LoginPage/>}/>
  <Route path="/home" element={<HomePage />} />
  <Route path="/profile" element={<ProfilePage />} />
  <Route path="/reg" element={<RegPage/>}/>
  <Route path="/shop" element={<ShopPage/>}/>
  <Route path="/portflio" element={<Portflio/>}/>
  <Route path="/shop/Product/:id" element={<Product/>}/>
  <Route path="*" element={<NotFound/>}/>
</Routes>
    </Routee>
   </LangProvider>
    </div>
    </>
  );
}

export default App;
