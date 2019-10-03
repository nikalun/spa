import { createStore, combineReducers, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import createSagaMiddleware from 'redux-saga';

import { usersData } from '../sagas/index.js';

import { users, currentUser, currentGroup } from '../reducers/index.js';

const sagaMiddleware = createSagaMiddleware();

const reducer = combineReducers({
    users,
    currentUser,
    currentGroup,
});

export const store = createStore(reducer, applyMiddleware(logger, sagaMiddleware));

sagaMiddleware.run(usersData);