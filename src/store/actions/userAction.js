export function changeUserName(data){
    return{
        type:"SET_USERNAME",
        payload:data,
    }

}

export function changeUserAge(data){
    return{
        type:"SET_USERAGE",
        payload:data,
    }

}