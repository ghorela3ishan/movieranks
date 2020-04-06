import { isAuthTokenPresent, getCookieValue } from "../core/config/utils";
import  { AUTH_INFO, AUTH_TOKEN_NAME } from "../core/config/utils";
import storeMain from "../core/Store/store";
import { actions } from "../services/Login/constants";
import axios from "axios";

const isAuthenticated = () => {
    if(isAuthTokenPresent()) {
        const authInfo = JSON.parse(getCookieValue(AUTH_INFO));
        const token = getCookieValue(AUTH_TOKEN_NAME)
        axios.defaults.headers.common['Authorization'] = token;
        storeMain.dispatch({
            type: actions.USER_DETAIL, data: authInfo 
        });
        return true;
    } 
    return false;
}


const addAuthToken = (token) => {
    axios.defaults.headers.common['Authorization'] = token;
}

export  {
    isAuthenticated,
    addAuthToken
}