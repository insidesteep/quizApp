import { combineReducers } from "redux";
import auth from "./auth";
import locale from "./locale";
const reducers = combineReducers({
  auth,
  locale
});

export default reducers;
