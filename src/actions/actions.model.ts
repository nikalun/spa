import { ListType } from "../reducers";

export type SetGroupType = {
    type: string,
    payload: string;
}

export type SetCurrentUserType = {
    type: string,
    payload: number;
}

export type FetchUsersListType = SetGroupType;

export type FetchSuccessType = {
    type: string;
    payload: ListType[],
}

export type FetchErrorType = {
    type: string;
    error: Error;
}

export type UsersActionsType =
    | FetchUsersListType
    | FetchSuccessType
    | FetchErrorType;