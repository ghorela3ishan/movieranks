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

export function fetchList(data) {
    return (dispatch) => {
        dispatch(listReqStart());
        gatewayInstace.post("/list", { userInfo: data.userInfo }).then((res) => {
            dispatch(listReqComp(true, res.data))
        }).catch((err) => {
            // dispatch(listReqComp(true, listData))
            dispatch(listReqComp(false, err))
        })
    }
}