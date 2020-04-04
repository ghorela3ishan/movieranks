import { combineReducers } from "redux";
import sessionReducer from "./session/sessionReducer";
import feedReducer from "./Feed/reducer";

const rootReducer = combineReducers({
    sessionData: sessionReducer,
    feed: feedReducer
})

export default rootReducer;