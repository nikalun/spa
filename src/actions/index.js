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

export const usersList = url => {
    return {
        type: 'USERS_LIST',
        payload: url,
    }
};

export const getUsersList = list => {
    return {
        type: 'GET_USERS_LIST',
        payload: list
    }
};