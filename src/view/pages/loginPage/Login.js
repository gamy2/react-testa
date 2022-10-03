
import { useState } from "react";
import { useNavigate,useParams } from "react-router-dom";

function LoginPage(){

const [user , setUser]=useState({
    userEmail:"",
    userPassword:""
})
const nav=useNavigate();
const prp=useParams();
// const Sub=(ahmed)=>{
// ahmed.preventDefault();
// }

const getEmail=(event)=>{
    setUser({
        ...user,//خلى باقى ال obj  زى ما هو
        userEmail:event.target.value
    })
}
const getPassword=(event)=>{
    setUser({
        ...user,//خلى باقى ال obj  زى ما هو
        userPassword:event.target.value
    })
}
const Ab=(event)=>{
   if(user.userEmail==="mohamed@example.com"&&user.userPassword==="123")
   {
   nav("/home");
   }else{
   alert("wrong user email or password");
   }
event.preventDefault();

}
    return(
    <>
   <form className="mx-5 mt-5" onSubmit={(event)=>Ab(event)} >
   <div className="mb-3">
  <label htmlFor="email" className="form-label">Email address</label>
  <input type="email" className="form-control" name="email" onChange={(event)=>getEmail(event)}/>
  <input type="password" className="form-control" name="password" onChange={(event)=>getPassword(event)}/>
</div>
<input className="form-control" type="submit" value="Create" />

</form></>
);
}

export default LoginPage;