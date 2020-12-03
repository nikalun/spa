import {
    SetGroupType,
    SetCurrentUserType,
    FetchUsersListType,
    FetchSuccessType,
    FetchErrorType,
} from "./actions.model";
import { ListType } from "../reducers";

export const setGroup = (group: string): SetGroupType => ({
    type: 'SET_GROUP',
    payload: group,
});


export const setCurrentUser = (current: number): SetCurrentUserType => ({
    type: 'SET_CURRENT_USER',
    payload: current,
});

export const fetchUsersList = (url: string): FetchUsersListType => ({
    type: 'FETCH_USERS_LIST',
    payload: url,
});

export const fetchSuccess = (list: ListType[]): FetchSuccessType => ({
    type: 'FETCH_USERS_LIST_SUCCESS',
    payload: list,
});

export const fetchError = (error: Error): FetchErrorType => ({
    type: 'FETCH_USERS_LIST_ERROR',
    error,
});
