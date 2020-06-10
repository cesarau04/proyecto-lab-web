import { SET_LOGIN_ACTION, SET_USER_ID_ACTION } from "../actions/constants";

const DEFAULT_STATE = {}
export default (state = DEFAULT_STATE, action) => {
    switch (action.type) {
        case SET_LOGIN_ACTION:
            return {
                ...state,
                bIsLoggedIn: action.payload
            }
        case SET_USER_ID_ACTION:
            return {
                ...state,
                userID: action.payload
            }
        default:
            return state;
    }
};