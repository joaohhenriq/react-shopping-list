import { createSelector } from 'reselect'
import uuidv1 from 'uuid/v1'
import { Types } from '../actions/listAction'

const INITIAL_STATE = {
    list: null,
    items: []
}

export default function listReducer(state = INITIAL_STATE, action) {
    switch (action.type) {
        case Types.NEW_LIST:
            return {
                ...INITIAL_STATE,
                date: getDate()
            }
        case Types.ADD_PRODUCT:
            return {
                ...state,
                list: action.list,
                items: [
                    ...state.items,
                    {
                        ...action.product,
                        total: getItemTotal(action.product),
                        id: uuidv1(),
                        checked: false
                    }
                ]
            }
        case Types.DELETE_PRODUCT:
            return {
                ...state,
                // remove only the selected id from the list
                items: state.items.filter(item => item.id !== action.productId)
            }
        case Types.TOGGLE_PRODUCT:
            return {
                ...state,
                items: toggleItem(state.items, action.productId)
            }
        case Types.UPDATE_PRODUCT:
            return {
                ...state,
                list: action.list,
                items: updateProduct(state.items, action.product)
            }
        default:
            return state
    }
}

function getItemTotal(product) {
    return product.price * product.quantity
}

function toggleItem(items, productId) {
    //First we find the item(to check) index
    const index = items.findIndex(item => item.id === productId)
    return [
        ...items.slice(0, index), //keep the items starting on the index 0 until the item we have to check
        { ...items[index], checked: !items[index].checked }, //keeps all the item information, and change only the atributte checked
        ...items.slice(index + 1) //keeps the rest of the list unmodified, changing only the item we needed
    ]
}

function updateProduct(items, product) {
    const index = items.findIndex(item => item.id === product.id)
    return [
        ...items.slice(0, index),
        { ...product, total: getItemTotal(product) },
        ...items.slice(index + 1)
    ]
}

function getDate() {
    const date = new Date();
    const options = { year: 'numeric', month: '2-digit', day: '2-digit' }
    return date.toLocaleDateString('pt-BR', options)
}

//selector avoids call the method every time, just executes when state list item is modified
export const getListTotal = createSelector(
    state => state.list.items, //based on items, just executes the function when items are modified
    items => items.reduce((total, item) => total + item.total, 0)
)

export const getOpenedItems = createSelector(
    state => state.list.items, //based on items, just executes the function when items are modified
    items => items.filter(item => !item.checked).length
)

export const getClosedItems = createSelector(
    state => state.list.items, //based on items, just executes the function when items are modified
    items => items.filter(item => item.checked).length
)

