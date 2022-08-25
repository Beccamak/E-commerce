import { CART_ACTION_TYPES } from "./cart.types";

const INITIAL_STATE = {
    cartItems: []
}


export const cartReducer = (state = INITIAL_STATE, action) => {
    const {type, payload} = action;
    switch(type){
        case CART_ACTION_TYPES.SET_CART_COUNT:
            return {...state, cartCount:payload}

    }
}