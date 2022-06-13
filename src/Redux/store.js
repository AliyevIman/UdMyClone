// import {applyMiddleware,combineReducers,createStore } from "redux"
// import { composeWithDevTools } from "redux-devtools-extension"
// import thunk from "redux-thunk"


// const reducer=combineReducers({});


// const middleware=[thunk]

// const store =createStore(
//     reducer,
//     {},
//     composeWithDevTools(...middleware)
// )

// export default store;


import {createStore,combineReducers, applyMiddleware} from "redux";
import { ChangeColorReducer } from "./Reducers/ColorReducer";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import { darkModeReducer } from "./Reducers/DarkModeReducer";
import { userLoginReducer, userRegisterReducer } from "./Reducers/UserReducer";
import { Cartreducer } from "./Reducers/CartReducer";
import { Search_reducer } from "./Reducers/SearchReducer";

const reducer=combineReducers({
    colorReducer:ChangeColorReducer,
    darkMode:darkModeReducer,
    loginUser:userLoginReducer,
    registerUser:userRegisterReducer,
    cart :Cartreducer,
    // search :Search_reducer
})
const userInfoFromLS=localStorage.getItem("userInfo") ?
 JSON.parse(localStorage.getItem("userInfo"))
 :null
 const cartItemsFromLocal = localStorage.getItem("cartitems" )?
 JSON.parse(localStorage.getItem("cartitems")):[] 


const initialState={
    loginUser:{
        userInfo:userInfoFromLS
    },
    cart:{
        cartitems:cartItemsFromLocal
    }
    
}
const middleware = [thunk];


const store=createStore(
    reducer,
    initialState,
      composeWithDevTools(applyMiddleware(...middleware))
)

export default store;