import { SET_LOGIN_ACTION, SET_USER_ID_ACTION } from "./constants";

export const LogInAction = (payload) => {
    return ({
        type: SET_LOGIN_ACTION,
        payload: payload
    })
}

export const UserIdAction = (payload) => {
    return ({
        type: SET_USER_ID_ACTION,
        payload: payload
    })
}