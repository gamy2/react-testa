import axios from 'axios';
const DBconnection=axios.create({
    //obj has an data about connection 
    baseURL:'https://fakestoreapi.com/',
    params:{
        
    }
  
})
DBconnection.interceptors.request.use((con)=>{
//  con.method = 'POST';
//console.log(con);
// store.dispatch(changeLoader(true))
     return con;
},
function(error){});
DBconnection.interceptors.response.use((con)=>{
    // console.log(con);
    // store.dispatch(changeLoader(false))
    return con;
},
function(error){});


export default DBconnection;












// import { changeLoader } from '../store/actions/loader';
// import store from '../store/store'







