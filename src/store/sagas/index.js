import { takeLatest, all } from 'redux-saga/effects'
import { Types as ListTypes } from '../actions/listAction'
import { getImageRequest } from './list'

//saga observes the types on redux, and when the types match, the middleware is activated
// function* and yield look like async/await
export default function* rootSaga() {
    return yield all([
        takeLatest(ListTypes.ADD_PRODUCT, getImageRequest)
    ])
}