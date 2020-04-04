import { actions } from "./constants";
import gatewayInstace from "./../../core/Network/gateway"
import { listData } from "../../services/dummydata";

function listReqStart() {
    return { type: actions.LIST_REQUEST_START };
}

function listReqComp(isSuccess, data) {
    if(isSuccess) {
        return { type: actions.LIST_REQUEST_COMPLETE, data}
    } 
    return { type: actions.LIST_REQUEST_FAIL }
}

export function fetchList() {
    return (dispatch) => {
        dispatch(listReqStart());
        gatewayInstace.get("/list").then((res) => {
            dispatch(listReqComp(true, resp.data))
        }).catch((err) => {
            dispatch(listReqComp(true, listData))
            dispatch(listReqComp(false, err))
        })
    }
}