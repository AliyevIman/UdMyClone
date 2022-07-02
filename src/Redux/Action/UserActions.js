import axios from "axios"
import { BASE_URL } from "../../api/BaseConfig"
import { USER_LOGIN_ERROR, USER_LOGIN_SUCCESS, USER_LOGOUT } from "../Constants/UserConstants"

  export const loginAction=(email,password)=>async(dispatch)=>{
      try {
         const {data}=await axios.post(`${BASE_URL}api/account/login`,{email,password})
         dispatch({
             type:USER_LOGIN_SUCCESS,
             payload:data
        })      
        localStorage.setItem("userInfo",JSON.stringify(data))  
 
    } 
    catch (error) {
        dispatch({
            type:USER_LOGIN_ERROR,
            payload:error.message
        })  
    }
}
export const logoutAction=()=>(dispatch)=>{
    localStorage.removeItem("userInfo")
    dispatch({type:USER_LOGOUT})
}
export const registerAction=(firstName,lastName,email,password,confirmPassword)=>async(dispatch)=>{
    try {   
        const {data}=await axios.post(`${BASE_URL}api/account/register`,
        {firstName,lastName,email,password,confirmPassword})  .then(function (response) {
            console.log(response);
          })
          .catch(function (error) {
            console.log(error);
          });
        dispatch({
            type:"USER_REGISTER_SUCCESS",
            payload:data
        })        
    } catch (error) {
        dispatch({
            type:"USER_REGISTER_ERROR",
            payload:error
        })  
    }
}