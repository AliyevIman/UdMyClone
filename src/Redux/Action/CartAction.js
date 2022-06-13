import axios from "axios"
import {
    BASE_URL
} from "../../api/BaseConfig"
import {
    ADD_TO_CART,
    CLEAR_CART,
    REMOVE_FROM_CART
} from "../Constants/CartConstans"

export const AddToCart = (id, qty) => async (dispatch, getstate) => {
    const {
        data
    } = await axios.get(BASE_URL + "api/course/" + id);

    const product = {
        id: data.courseId,
        name: data.courseName,
        price: data.price,
        discount: data.discount,
        photoUrl: data.photoUrl,
        quantity: qty

    }
    dispatch({
        type: ADD_TO_CART,
        payload: product
    })
    localStorage.setItem("cartitems", JSON.stringify(getstate().cart.cartitems))
}
export const RemoveCart = (id) => (dispatch,getState) => {
    dispatch({
        type: REMOVE_FROM_CART,
        payload: id
    })
    localStorage.setItem("cartitems", JSON.stringify(getState().cart.cartitems))
}
export const ClearAll = () => (dispatch,getState) => {
    dispatch({
        type: CLEAR_CART
    })
    localStorage.setItem("cartitems", JSON.stringify(getState().cart.cartitems))
}