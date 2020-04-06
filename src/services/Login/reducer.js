import { actions } from "./constants";

const initialState = {
    userData: null,
    isAuthenticated: false
}

export default function loginReducer(state = initialState, action) {
    switch (action.type) {
        case actions.USER_DETAIL:
            return { ...state, userData: action.data, isAuthenticated: true };
        case actions.CLEAR_USER_DETAIL: 
            return {...state, userData: null, isAuthenticated: false}; 
        default:
            return state
    }
}