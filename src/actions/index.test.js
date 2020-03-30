import { setGroup, setCurrentUser, fetchUsersList, fetchSuccess, fetchError } from './index';

describe('Action tests', () => {

    it('Set Group', () => {
        const expectedAction = {
            type: 'SET_GROUP',
            payload: 'all',
        };

        expect(setGroup('all')).toEqual(expectedAction);
    });

    it('Set Current User', () => {
        const expectedAction = {
            type: 'SET_CURRENT_USER',
            payload: 2,
        };

        expect(setCurrentUser(2)).toEqual(expectedAction);
    });

    it('Fetch Users List', () => {
        const expectedAction = {
            type: 'FETCH_USERS_LIST',
            payload: 'http://localhost:8888/users',
        };

        expect(fetchUsersList('http://localhost:8888/users')).toEqual(expectedAction);
    });

    it('Fetch Success', () => {
        const expectedAction = {
            type: 'FETCH_USERS_LIST_SUCCESS',
            payload: [1, 2, 3],
        };

        expect(fetchSuccess(expectedAction.payload)).toEqual(expectedAction);
    });

    it('Fetch Error', () => {
        const expectedAction = {
            type: 'FETCH_USERS_LIST_ERROR',
            error: 'Error 500',
        };

        expect(fetchError(expectedAction.error)).toEqual(expectedAction);
    });
});