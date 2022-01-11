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
} from "../actions/auth";

// import { setOrganization } from "../actions/Organization";

import JwtAuthService from "../../services/JwtAuthService";

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
    try {
      const user = yield call(JwtAuthService.signUp, payload);

      if (user.message) {
        yield put(showAuthMessage("success", user.message));
      } else {
        localStorage.setItem(AUTH_TOKEN, user.user.uid);
        yield put(signUpSuccess(user.user.uid));
      }
    } catch (error) {
      yield put(showAuthMessage("error", error.response.data.message));
    }
  });
}

export function* signIn() {
  yield takeEvery(SIGNIN, function* ({ payload }) {
    const { email, password } = payload;
    try {
      const user = yield call(JwtAuthService.login, { email, password });

      localStorage.setItem(AUTH_TOKEN, user.jwt);
      localStorage.setItem(
        "default_organization",
        parseInt(user.default_organization)
      );
      yield put(
        authenticated({
          token: user.jwt,
          defaultOrg: parseInt(user.default_organization),
          userInfo: {
            firstName: user.firstname,
            lastName: user.lastname,
          },
        })
      );

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
      localStorage.setItem(
        "default_organization",
        parseInt(user.default_organization)
      );
      yield put(
        authenticated({
          token: user.jwt,
          defaultOrg: parseInt(user.default_organization),
          userInfo: {
            firstName: user.firstname,
            lastName: user.lastname,
          },
        })
      );

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
