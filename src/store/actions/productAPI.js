import DBconnection from "../../model/network"

export default function changeProductsAPI(){
    return (dispatch)=>{
        DBconnection.get("products").then((res)=>{
            let _data=[];
          res.data.map((elem)=>{
            _data.push({...elem,isFav:false})
          })
         dispatch({type:"SET_PRODUCTSAPI",payload:_data})
        }).catch((err)=>{
          console.log(err);
          console.log("فى error")
        })
    }

}