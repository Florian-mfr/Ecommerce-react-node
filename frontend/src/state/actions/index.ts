import { ActionType } from "../action-types";
import { IState } from "../../App";

interface GetProductsAction {
    type: ActionType.GET_PRODUCTS,
    payload: Array<IState['product']>
}

export type Action = GetProductsAction;