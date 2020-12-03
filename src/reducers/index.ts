import { UsersActionsType } from "../actions/actions.model";

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

export type ListType = {
    id: number,
    name: string;
    description: string;
    group: string;
}

type InitialStateType = {
    pending: boolean;
    list: ListType[];
    error: null | Error;
}

const initialState: InitialStateType = {
	pending: false,
	list: [],
	error: null
};

export function users(state = initialState, action: UsersActionsType) {
	switch (action.type) {
		case 'FETCH_USERS_LIST':
			return (state = {
				...state,
				pending: true
			});
		case 'FETCH_USERS_LIST_SUCCESS':
			return (state = {
				...state,
				list: [...action.payload],
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
