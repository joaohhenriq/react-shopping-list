import { createSelector } from 'reselect'
import { Types } from '../actions/listAction'

const INITIAL_STATE = {
    list: null,
    items: []
}

export default function listReducer(state = INITIAL_STATE, action) {
    switch (action.type) {
        case Types.ADD_PRODUCT:
            return {
                ...state,
                list: action.list,
                items: [
                    ...state.items,
                    { ...action.product, total: getItemTotal(action.product) }
                ]
            }
        default:
            return state
    }
}

function getItemTotal(product) {
    return product.price * product.quantity
}

//selector avoids call the method every time, just executes when state list item is modified
export const getListTotal = createSelector(
    state => state.list.items, //based on items, just executes the function when items are modified
    items => items.reduce((total, item) => total + item.total, 0)
)