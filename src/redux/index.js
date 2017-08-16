import { combineReducers } from "redux";
import login from "./login";
import { routerReducer as routing } from "react-router-redux";
import { reducer as form } from "redux-form";

const rootReducer = combineReducers({
  routing,
  form,
  login,
});


export default rootReducer;
