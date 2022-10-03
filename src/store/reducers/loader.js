const INIT={
    loader:false
};

export default function LoaderReducer(state=INIT,action)
{
    if(action.type==="SET_LOADER")
    {
        return{
            ...state,loader:action.payload};
        }else{
            return{...state}
        }
    }
