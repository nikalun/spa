import { takeEvery, call, put, all } from 'redux-saga/effects';
import axios from "axios/index";

import { fetchSuccess, fetchError } from '../actions'

function* usersListSaga( { payload } ) {
    try {
        const response = yield call(axios.get, payload);
        yield put(fetchSuccess(response.data));
    } catch (error) {
        yield put(fetchError(error))
    }
}

function* usersList() {
    yield takeEvery('FETCH_USERS_LIST', usersListSaga);
}

export function* usersData() {
    yield all([
        usersList(),
    ]);
}