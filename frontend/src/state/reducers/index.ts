import { combineReducers } from "redux";
import { productsListReducer, productDetailReducer } from "./products.reducer"

const reducers = combineReducers({
    productsList: productsListReducer,
    productDetail: productDetailReducer

})

export default reducers

export type RootState = ReturnType<typeof reducers>