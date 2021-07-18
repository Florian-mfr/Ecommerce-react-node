import { ActionType } from "../action-types";
import { Action } from "../actions";

export const productsListReducer = (state = { loading: true, products: [] }, action: Action) => {
    switch (action.type) {
        case ActionType.WAITING_PRODUCTS:
            return { loading: true }
        case ActionType.GET_PRODUCTS:
            return { loading: false, products: action.payload }
        default:
            return state
    }
}

export const productDetailReducer = (state = { loading: true, product: {} }, action: Action) => {
    switch(action.type) {
        case ActionType.WAITING_ONE_PRODUCT:
            return { loading: true }
        case ActionType.GET_ONE_PRODUCT:
            return { loading: false, product: action.payload }
        default:
            return state
    }
}