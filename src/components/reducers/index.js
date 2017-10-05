import { combineReducers } from "redux";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";

const emailReducer = (state = [], action) => {
  if (action.type === "NEW_SIGNUP") {
    const newSignup = [].concat(state);
    newSignup.push(action.newSignup);
    return newSignup;
  }
  return state;
};

const userReducer = (state = {}, action) => {
  if (action.type === "AUTHENTICATE") {
    return action.user;
  } else if (action.type === "SIGN_OUT") {
    return {};
  }
  return state;
};

export default combineReducers({
  newSignup: emailReducer,
  user: userReducer
});
