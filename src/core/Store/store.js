
import rootReducer from "../../services/rootReducer";
import store from "./index";
import saga from "../../services/saga";

const storeMain = store.provideStore(rootReducer, saga);
export default storeMain;