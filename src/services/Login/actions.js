import { actions } from "./constants";
import gatewayInstace from "../../core/Network/gateway"


export function saveUserDetail(data) {
    return {
        type: actions.USER_DETAIL, data
    }
}
