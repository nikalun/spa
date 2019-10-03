import { takeEvery, call, put, all } from 'redux-saga/effects';
import axios from "axios/index";

import { getUsersList } from '../actions'

function* usersListSaga( { payload } ) {
    const response = yield call(axios.get, payload);
    yield put(getUsersList(response.data));
}

function* usersList() {
    yield takeEvery('USERS_LIST', usersListSaga);
}

export function* usersData() {
    yield all([
        usersList(),
    ]);
}