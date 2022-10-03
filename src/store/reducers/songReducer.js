const INIT={
    song:"Music"
}

export default function SongReducer(state=INIT,action){
    if(action.type==='SET_SONG')
    {
        return {
           ...state,
            song:action.payload,
        }
    }
    else{
        return {...state}
    }

}