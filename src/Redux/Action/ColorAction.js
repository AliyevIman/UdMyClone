export const changeColor=(reng)=>(dispatch)=>{
    dispatch({
        type:"RENG_DEYIS",
        payload:reng
    })
}

export const removeColor=(reng)=>(dispatch)=>{
    dispatch({
        type:"RENG_SIL",
        payload:reng
    })
}

