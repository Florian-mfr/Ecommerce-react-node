import Axios from "axios"
import { Dispatch } from "redux"
import { ActionType } from "../action-types"
import { Action } from "../actions/index"

export const listProducts = () => async (dispatch: Dispatch<Action>) => {

    dispatch({ type: ActionType.WAITING_PRODUCTS })

    const { data } = await Axios.get("http://localhost:5000/api/products")

    dispatch({ type: ActionType.GET_PRODUCTS, payload: data.products })
}

export const detailProducts = (productId: number) => async (dispatch: Dispatch<Action>) => {

    dispatch({ type: ActionType.WAITING_ONE_PRODUCT, payload: productId})

    const { data } = await Axios.get(`http://localhost:5000/api/products/${productId}`)

    dispatch({ type: ActionType.GET_ONE_PRODUCT, payload: data })
}