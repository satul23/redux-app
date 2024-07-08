import { Actiontypes } from "../constants/action-types";

const initialState = {
    id: 1,
    title: "atul",
    category: 'programmer'
}

export const productreducer = (state, {type, payload}) => {
 
    switch (type) {
        case Actiontypes.SET_PRODUCTS:
            return state;
    
        default:
        return state;
    }
}