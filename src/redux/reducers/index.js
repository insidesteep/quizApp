import { combineReducers } from "redux";
import auth from "./auth";
import subject from "./subject";
import locale from "./locale";
import question from "./question";
const reducers = combineReducers({
  auth,
  subject,
  locale,
  question,
});

export default reducers;
