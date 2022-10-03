export function changeSong(data)
{
    return{
        type: 'SET_SONG',
        payload:data,
    }
}