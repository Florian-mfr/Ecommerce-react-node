import { applyMiddleware, createStore, compose } from "redux";
import thunk from "redux-thunk"
import productsReducers from "./reducers";

const initialState = {};

declare global {
    interface Window {
      __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
    }
  }
  
const composeEnhacer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

const store = createStore(
    productsReducers,
    initialState,
    composeEnhacer(applyMiddleware(thunk))   
)

export default store;