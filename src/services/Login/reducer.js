import { actions } from "./constants";

const initialState = {
    userData: null
}

export default function loginReducer(state = initialState, action) {
    switch (action.type) {
        case actions.USER_DETAIL:
            return { ...state, userData: actions.data }
        default:
            return state
    }
}