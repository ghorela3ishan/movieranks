import App from "../../App";
import About from "../../components/about";
import UnknownPath from "../../components/unknownPath";
import Feed from "../../components/Feed";

const routes = [
    {
        exact: true,
        path: "/feed",
        component: Feed
    },
    {
        exact: true,
        path: "/about",
        component: About
    },
    {
        component: UnknownPath
    }
]

export default routes;