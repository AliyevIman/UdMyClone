export const changeMode=(color)=>(dispatch)=>{
    dispatch({
        type:"DARK_MODE_CHANGE",
        payload:color
    })
}