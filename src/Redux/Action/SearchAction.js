import { SEARCH_WITH_NAME } from "../Constants/UserConstants"


export const searchAction = (name) => async (dispatch) => {    
    if(name!==""){
       await axios.get(BASE_URL + "api/Course/filter/" + encodeURIComponent(name));
       }
   
    dispatch({
        type: SEARCH_WITH_NAME,
        payload: name
    })
}   