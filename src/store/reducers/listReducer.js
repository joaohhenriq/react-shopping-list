import { createSelector } from 'reselect'
import uuidv1 from 'uuid/v1'
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
                    { ...action.product, total: getItemTotal(action.product), id: uuidv1() }
                ]
            }
        case Types.DELETE_PRODUCT:
            return {
                ...state,
                // remove only the selected id from the list
                items: state.items.filter(item => item.id !== action.productId)
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