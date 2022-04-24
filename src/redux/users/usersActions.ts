import { FETCH_USERS_FAILURE, FETCH_USERS_REQUEST, FETCH_USERS_SUCCESS } from "./usersTypes";

export const fetchUsersRequest = () => {

    return {
        type : FETCH_USERS_REQUEST
    }
}

export const fetchUsersSuccess = (users : any) => {

    return {
        type : FETCH_USERS_SUCCESS,
        payload : users
    }
}

export const fetchUsersFailure = (error : any) => {

    return {
        type : FETCH_USERS_FAILURE,
        payload : error
    }
}
