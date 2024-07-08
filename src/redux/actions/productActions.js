import { Actiontypes } from "../constants/action-types";

export const setproducts = (products) => {
    return {
        type: Actiontypes.SET_PRODUCTS,
        payload : products
    } 
}

export const selectedproducts = (products) => {
    return{
        type: Actiontypes.SELECTED_PRODUCTS,
        payload: products
    }
}


