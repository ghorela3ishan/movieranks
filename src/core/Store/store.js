
import rootReducer from "../../services/rootReducer";
import store from "./index";

const storeMain = store.provideStore(rootReducer);
export default storeMain;