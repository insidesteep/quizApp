import { all, takeEvery, put, fork, call } from "redux-saga/effects";
import {
  AUTHORIZATION,
  AUTH_TOKEN,
  SIGNIN,
  SIGNOUT,
  SIGNUP,
} from "../constants/auth";
import {
  showAuthMessage,
  authenticated,
  signUpSuccess,
  signOutSuccess,
  setTermRegInfo,
} from "../actions/auth";

// import { setOrganization } from "../actions/Organization";

import JwtAuthService from "../../services/JwtAuthService";
import { setTestStatus } from "../actions/question";

export function* signOut() {
  yield takeEvery(SIGNOUT, function* () {
    try {
      localStorage.removeItem(AUTH_TOKEN);
      localStorage.removeItem("default_organization");
      yield put(signOutSuccess());
      // const signOutUser = yield call(FirebaseService.signOutRequest);
      // if (signOutUser === undefined) {
      //   localStorage.removeItem(AUTH_TOKEN);
      //   yield put(signOutSuccess(signOutUser));
      // } else {
      //   yield put(showAuthMessage(signOutUser.message));
      // }
    } catch (err) {
      yield put(showAuthMessage(err));
    }
  });
}

export function* signUp() {
  yield takeEvery(SIGNUP, function* ({ payload }) {
    console.log(payload);
    const { values, history } = payload;

    const {
      firstname,
      fathername,
      lastname,
      email,
      password,
      student_photo,
      phone_number,
      institute_name,
      faculty,
      subject,
    } = values;

    const formData = new FormData();

    formData.append("firstname", firstname);
    formData.append("fathername", fathername);
    formData.append("lastname", lastname);
    formData.append("email", email);
    formData.append("password", password);
    formData.append("student_photo", student_photo.file.originFileObj);
    formData.append("phone_number", phone_number);
    formData.append("institute_name", institute_name);
    formData.append("faculty", faculty);
    formData.append("subject", subject);

    try {
      const user = yield call(JwtAuthService.signUp, formData);

      console.log(user);

      // if (user.message) {
      //   yield put(showAuthMessage("success", user.message));
      // } else {
      //   localStorage.setItem(AUTH_TOKEN, user.user.uid);
      //   yield put(signUpSuccess(user.user.uid));
      // }

      yield put(setTermRegInfo({ email, password }));

      history.push("/auth/successful-registration");
    } catch (error) {
      yield put(showAuthMessage("error", error.response.data.message));
    }
  });
}

export function* signIn() {
  yield takeEvery(SIGNIN, function* ({ payload }) {
    console.log(333);
    const { email, password } = payload;

    try {
      const user = yield call(JwtAuthService.login, { email, password });

      localStorage.setItem(AUTH_TOKEN, user.jwt);
      yield put(
        authenticated({
          token: user.jwt,
          userInfo: {
            firstName: user.firstname,
            lastName: user.lastname,
            middleName: user.fathername,
            role: user.role,
            subjectName: user.subject_name,
            subjectId: user.subject_id,
          },
        })
      );

      yield put(setTestStatus(user.test_status));

      if (user.all_organization) {
        // yield put(setOrganization(user.all_organization));
      }
    } catch (error) {
      yield put(showAuthMessage("error", error.response.data.message));
    }
  });
}

export function* authorization() {
  yield takeEvery(AUTHORIZATION, function* () {
    try {
      const user = yield call(JwtAuthService.authorization);

      localStorage.setItem(AUTH_TOKEN, user.jwt);
      yield put(
        authenticated({
          token: user.jwt,
          userInfo: {
            firstName: user.firstname,
            lastName: user.lastname,
            middleName: user.fathername,
            role: user.role,
            subjectName: user.subject_name,
            subjectId: user.subject_id,
          },
        })
      );

      yield put(setTestStatus(user.test_status));

      if (user.all_organization) {
        // yield put(setOrganization(user.all_organization));
      }
    } catch (error) {
      yield put(showAuthMessage("error", error.response.data.message));
    }
  });
}

export default function* rootSaga() {
  yield all([fork(signOut), fork(signUp), fork(signIn), fork(authorization)]);
}
