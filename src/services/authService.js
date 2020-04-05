import { isAuthTokenPresent, getCookieValue } from "../core/config/utils";
import  { AUTH_INFO } from "../core/config/utils";
import storeMain from "../core/Store/store";
import { actions } from "../services/Login/constants";

const isAuthenticated = () => {
    if(isAuthTokenPresent()) {
        const authInfo = JSON.parse(getCookieValue(AUTH_INFO));
        storeMain.dispatch({
            type: actions.USER_DETAIL, data: authInfo 
        });
        return true;
    } 
    return false;
}

export default isAuthenticated;