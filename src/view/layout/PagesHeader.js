import React, { useContext } from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { LangContext } from '../../context/langContext';
import { changeLanng } from '../../store/actions/lang';

function PagesHeader() {
  let user=useSelector((state)=>{return state.user})
  let lang=useSelector((state)=>{return state.lang})
  const { langg, setLang } = useContext(LangContext);
  const dispatch=useDispatch();
  const langhandler =()=>{
   dispatch(changeLanng((lang.lang=="en"?"ar":"en")))
   
  /*
  (lang.lang=="en"?"ar":"en")
  
  =

  if(lang.lang=="en")
  {
    "ar"
  }else{
  "en"
  }
  */ 
  }
  return (<>
      <Navbar  bg="dark" variant="dark">
        <Container>
          <Navbar.Brand >{user.name}</Navbar.Brand>
          <Nav className="me-auto">
            <Link to="/home" className='p-4'>Home</Link>
            <Link to="/profile"className='p-4'>profile</Link>
            <Link to="/shop"className='p-4'>shop</Link>
            <button type="button" onClick={()=>langhandler()} className="btn btn-link">{lang.lang=="en"?"ar":"en"}</button>
            <Link to="/portflio" className='p-4'>{langg}</Link>
          </Nav>
        </Container>
      </Navbar>

   
      </>
  )
}
export default PagesHeader;
