import { actions } from "./constants";


export function saveUserDetail(data) {
    return {
        type: actions.USER_DETAIL, data
    }
}
