import { actions} from "./constants";

const initialState = {
    list: [],
    isListLoading: false 
}

export default function feedReducer(state = initialState, action) {
    switch(action.type) {
        case actions.LIST_REQUEST_START:
            return {...state, isListLoading: true}
        case actions.LIST_REQUEST_COMPLETE:
            return {...state, isListLoading: false, list: action.data}
        case actions.LIST_REQUEST_FAIL:
            return {...state, isListLoading: false}
        default:
        return state
    }
}