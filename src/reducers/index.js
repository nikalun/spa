import Users from '../users';

export function currentUser(state = 1, action) {
    switch (action.type) {
        case 'SET_CURRENT_USER':
            return action.payload;
        default:
            return state;
    }
}

export function currentGroup(state = 'all', action) {
    switch (action.type) {
        case 'SET_GROUP':
            return action.payload;
        default:
            return state;
    }
}

export function users(state = Users, action) {
    switch (action.type) {
        case 'FILTER_GROUP':
            return action.payload;
        default:
            return state;
    }
}