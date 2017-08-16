import { combineReducers } from "redux";
import cart from "./cart";
import products from "./products";
import { routerReducer as routing } from "react-router-redux";
import { reducer as form } from "redux-form";

const rootReducer = combineReducers({
  routing,
  form,
  cart,
  products
});


export default rootReducer;
