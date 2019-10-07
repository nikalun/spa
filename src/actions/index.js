export const setGroup = group => {
    return {
        type: 'SET_GROUP',
        payload: group
    }
};

export const setCurrentUser = current => {
    return {
        type: 'SET_CURRENT_USER',
        payload: current
    }
};

export const fetchUsersList = url => {
    return {
        type: 'FETCH_USERS_LIST',
        payload: url,
    }
};

export const fetchSuccess = list => {
    return {
        type: 'FETCH_USERS_LIST_SUCCESS',
        payload: list
    }
};

export const fetchError = error => {
    return {
        type: 'FETCH_USERS_LIST_ERROR',
        error: error
    }
};