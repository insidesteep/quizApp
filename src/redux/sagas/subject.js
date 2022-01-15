import { all, takeEvery, put, fork, call } from "redux-saga/effects";
import { FETCH_SUBJECTS } from "../constants/subject";
import { setSubjects } from "../actions/subject";

import SubjectService from "../../services/SubjectService";

export function* fetchSubjects() {
  yield takeEvery(FETCH_SUBJECTS, function* () {
    try {
      const subjects = yield call(SubjectService.list);

      yield put(setSubjects(subjects));
    } catch (error) {
      // yield put(showAuthMessage("error", error.response.data.message));
    }
  });
}

export default function* rootSaga() {
  yield all([fork(fetchSubjects)]);
}
