const INIT={
    
    name:"ali",
   age:28
};

export default function UserReducer(state=INIT,action)
{
    if(action.type==="SET_USERNAME")
    {
        return{
              ...state,name:action.payload};
        }else if(action.type==="SET_USERAGE")
        {
            return{
                ...state,age:action.payload};
        }
        
        else{
            return{...state}
        }
    }
