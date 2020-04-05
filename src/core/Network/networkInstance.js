import axios from "axios";

const networkInstance = axios.create({
    baseURL: "http://localhost:8000",
    timeout: 10000
    // headers: {"X-Custom-Header": "foobar"}
});

export default networkInstance;