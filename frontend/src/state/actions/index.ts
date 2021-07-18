import { ActionType } from "../action-types";
import { ProductType } from "../../pages/Home";

interface GetProductsAction {
    type: ActionType.GET_PRODUCTS,
    payload: Array<ProductType['product']>
}
interface WaitingProductsAction {
    type: ActionType.WAITING_PRODUCTS,
}
interface GetOneProductAction {
    type: ActionType.GET_ONE_PRODUCT,
    payload: ProductType['product']
}
interface WaitingOneProductAction {
    type: ActionType.WAITING_ONE_PRODUCT,
}

export type Action = GetProductsAction | WaitingProductsAction | GetOneProductAction | WaitingOneProductAction;