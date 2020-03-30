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

const initialState = {
	pending: false,
	list: [],
	error: null
};

export function users(state = initialState, action) {
	switch (action.type) {
		case 'FETCH_USERS_LIST':
			return (state = {
				...state,
				pending: true
			});
		case 'FETCH_USERS_LIST_SUCCESS':
			return (state = {
				...state,
				list: [...action.payload.list],
				pending: false
			});
		case 'FETCH_USERS_LIST_ERROR':
			return (state = {
				...state,
				pending: false,
				error: action.error
			});
		case 'FILTER_GROUP':
			return action.payload;
		default:
			return state;
	}
}
