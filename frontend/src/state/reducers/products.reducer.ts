import { ActionType } from "../action-types";
import { Action } from "../actions";


const initialState = {};

const reducer = (state = initialState, action: Action) => {
    switch (action.type) {
        case ActionType.GET_PRODUCTS:
            return action.payload
        default:
            return state
    }
}

export default reducer;