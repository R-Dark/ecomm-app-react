import { createStore } from "redux";
import reducers from "./components/reducers";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";

const store = createStore(reducers);
store.subscribe(() => console.log(store.getState()));

export default store;
