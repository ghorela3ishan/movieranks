import { combineReducers } from "redux";
import sessionReducer from "./session/sessionReducer";
import feedReducer from "./Feed/reducer";
import loginReducer from "./Login/reducer";

const rootReducer = combineReducers({
    sessionData: sessionReducer,
    feed: feedReducer,
    login: loginReducer
})

export default rootReducer;