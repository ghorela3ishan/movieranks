import axios from "axios";
import { createCookieInHour, AUTH_TOKEN_NAME, AUTH_INFO } from "../config/utils";
import storeMain from "../Store/store";
import { actions } from "../../services/Login/constants"

const networkInstance = axios.create({
    baseURL: "http://localhost:8000",
    // baseURL: 'https://api-movieranks.herokuapp.com/',
    timeout: 10000
    // headers: {"X-Custom-Header": "foobar"}
});

networkInstance.interceptors.response.use(undefined,(error) => {
    if(error.response.status == 403) {
        createCookieInHour(AUTH_INFO,0);
        createCookieInHour(AUTH_TOKEN_NAME,0);
        storeMain.dispatch({
            type: actions.CLEAR_USER_DETAIL 
        })
    }
});

export default networkInstance;