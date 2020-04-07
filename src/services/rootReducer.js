import { combineReducers } from "redux";
import feedReducer from "./Feed/reducer";
import loginReducer from "./Login/reducer";

const rootReducer = combineReducers({
    feed: feedReducer,
    login: loginReducer
})

export default rootReducer;