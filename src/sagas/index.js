import { takeEvery, call, put, all } from 'redux-saga/effects';
import { of, from } from 'rxjs';
import { fromFetch } from 'rxjs/fetch';
import { switchMap, catchError, map, filter } from 'rxjs/operators';
import axios from 'axios';

import { fetchSuccess, fetchError } from '../actions';

export function* usersListSaga({ payload }) {
	try {
    axios.get(payload, {
      url: payload,
      method: 'get',
      withCredentials: true
    })
		.then(response => response.data);

    const data$ = fromFetch(payload).pipe(
			switchMap(response => {
				if (response.ok) {
					return response.json();
				} else {
					return of({ error: true, message: `Error ${response.status}` });
				}
			}),
			catchError(err => {
				console.error(err);
				return of({ error: true, message: err.message })
			})
    );

    data$.pipe(
    	switchMap(x => from(x.list)),
			filter(item => item.group === 'third'),
		).subscribe(item => console.log(item));

		const response = yield call(axios, {
			url: payload,
			method: 'get',
			withCredentials: true
		});
		yield put(fetchSuccess(response.data));
	} catch (error) {
		yield put(fetchError(error));
	}
}

function* usersList() {
	yield takeEvery('FETCH_USERS_LIST', usersListSaga);
}

export function* usersData() {
	yield all([usersList()]);
}
