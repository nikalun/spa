import { fetchSuccess, fetchUsersList, fetchError } from '../actions/index';
import { users } from './index';

describe('Users reducer tests', () => {
    const initialState = {
        pending: false,
        list: [],
        error: null,
    };

    it('Send a request for data', () => {
        const action = fetchUsersList('http://localhost:8888/users');
        const newState = {
            ...initialState,
            pending: true,
        };
        const reducer = users(initialState, action);

        expect(reducer).toEqual(newState);
    });

    it('When receiving pending data true', () => {
        const initialState = {
            ...initialState,
            pending: true,
        };

        const payload = {
            list: [1, 2, 3],
        };

        const action = fetchSuccess(payload);
        const reducer = users(initialState, action);
        const newState = {
            ...initialState,
            pending: false,
            list: payload.list,
        };
        expect(reducer).toEqual(newState);
    });

    it('Receiving data from the server', () => {
        const initialState = {
            list: [],
            pending: true,
            error: null,
        };

        const payload = {
            list: [1, 2, 3],
        };

        const action = fetchSuccess(payload);
        const reducer = users(initialState, action);
        expect(reducer.list.length).toBe(3);
    });

    it('Error receiving data from server', () => {
        const error = 'Error 500';

        const action = fetchError(error);
        const newState = {
            ...initialState,
            error: 'Error 500'
        };
        const reducer = users(initialState, action);
        expect(reducer).toEqual(newState);
    });
});