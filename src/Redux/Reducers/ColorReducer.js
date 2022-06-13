export const ChangeColorReducer=(state={reng:""},dispatch)=>{
    switch(dispatch.type){
        case "RENG_DEYIS":
            return {...state,reng:dispatch.payload} 
            default:
                return state;
    }
}

