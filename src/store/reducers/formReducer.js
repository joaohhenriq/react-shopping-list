import { Types } from '../actions/formAction'

const INITIAL_STATE = {
    action: 'new',
    productToUpdate: {}
}

export default function form(state = INITIAL_STATE, action) {
    switch (action.type) {
        case Types.START_UPDATE:
            return {
                ...state,
                action: 'update',
                productToUpdate: action.product
            }
        default:
            return { ...state }
    }
}