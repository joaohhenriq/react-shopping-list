import { call, put } from 'redux-saga/effects'
import { services } from '../../services'
import { Creators as ListActions } from '../actions/listAction'

const genericImage = 'https://56e9af4bb89f1d73465cbd39.static-01.com/l/images/7ad0941e0ef98f3e846817830b30d90eda65c33b.jpg'

export function* getImageRequest(action) {
    try {
        const img = yield call(services.getImages, action.product.product)
        yield put(ListActions.getImageSuccess(action.product, img))
    } catch (e) {
        console.log(e)
        yield put(ListActions.getImageFailure(action.product, genericImage))
    }
}