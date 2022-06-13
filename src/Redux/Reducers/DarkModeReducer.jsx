export const darkModeReducer=(state={colorMode:"#fff"},dispatch)=>{
    switch(dispatch.type){
        case "DARK_MODE_CHANGE":
            return {...state,colorMode:dispatch.payload}
            default:
                return state;
    }
}