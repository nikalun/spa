import { createStore, combineReducers, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import thunk from 'redux-thunk';

import { users, currentUser, currentGroup } from '../reducers/index.js';

const reducer = combineReducers({
    users,
    currentUser,
    currentGroup,
});

export const store = createStore(reducer, applyMiddleware(logger, thunk));