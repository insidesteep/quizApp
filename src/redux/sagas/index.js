import { all } from "redux-saga/effects";
import auth from "./auth";
import subject from "./subject";
import question from "./question";

export default function* rootSaga(getState) {
  yield all([auth(), subject(), question()]);
}
