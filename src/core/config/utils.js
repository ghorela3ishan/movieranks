export const GOOGLE_CLIENT_ID = '568666328888-pk235nbose5v9bts2nbv71k2obsn4t6s.apps.googleusercontent.com';
export const AUTH_TOKEN_NAME = 'U_AUTH_TOKEN';
export const AUTH_INFO = 'AUTH_INFO' 
export const createCookieInHour = (cookieName, cookieValue, hourToExpire) => {
    try {
        let date = new Date();
        date.setTime(date.getTime() + (hourToExpire * 60 * 60 * 1000));
        document.cookie = cookieName + " = " + cookieValue + "; expires = " + date.toGMTString();
    } catch (error) {
    }
}

export const getCookieValue = (name) => {
    var value = "; " + document.cookie;
    var parts = value.split("; " + name + "=");
    if (parts.length == 2) return parts.pop().split(";").shift();
}

export const isAuthTokenPresent = () => {
    if (getCookieValue(AUTH_TOKEN_NAME) && getCookieValue(AUTH_TOKEN_NAME).length > 0) {
        return true
    } else {
        return false
    }
}


