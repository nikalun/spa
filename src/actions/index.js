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