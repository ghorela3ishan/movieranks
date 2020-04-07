const LOCAL_GOOGLE_CLIENT_ID = '78068735533-t03tid93no80mmvfptl728vivho2qqm6.apps.googleusercontent.com'
const LIVE_GOOGLE_CLIENT_ID = '78068735533-d0ua156tg5hcjpr5v7mksh6ghvj7f8bo.apps.googleusercontent.com';
const LOCAL_API_ENDPOINT = 'http://localhost:8000';
const LIVE_API_ENDPOINT = 'https://api-movieranks.herokuapp.com';

export let GOOGLE_CLIENT_ID = LIVE_GOOGLE_CLIENT_ID;
export let API_ENDPOINT = LIVE_API_ENDPOINT;

// export let GOOGLE_CLIENT_ID = LOCAL_GOOGLE_CLIENT_ID;
// export let API_ENDPOINT = LOCAL_API_ENDPOINT;

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


