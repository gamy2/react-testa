const INIT={
    lang:"en"
};

export default function LangReducer(state=INIT,action)
{
    if(action.type==="SET_LANG")
    {
        return{
            ...state,lang:action.payload};
        }else{
            return{...state}
        }
    }
