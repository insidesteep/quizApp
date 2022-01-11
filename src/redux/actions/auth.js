import {
  SIGNIN,
  AUTHENTICATED,
  SIGNOUT,
  SIGNOUT_SUCCESS,
  SHOW_AUTH_MESSAGE,
  HIDE_AUTH_MESSAGE,
  SIGNUP,
  SIGNUP_SUCCESS,
  SHOW_LOADING,
  AUTHORIZATION,
} from "../constants/auth";

export const signIn = (user) => {
  return {
    type: SIGNIN,
    payload: user,
  };
};

export const authenticated = (user) => {
  return {
    type: AUTHENTICATED,
    payload: {
      token: user.token,
      defaultOrg: user.defaultOrg,
      userInfo: user.userInfo,
    },
  };
};

export const authorization = () => {
  return {
    type: AUTHORIZATION,
  };
};

export const signOut = () => {
  return {
    type: SIGNOUT,
  };
};

export const signOutSuccess = () => {
  return {
    type: SIGNOUT_SUCCESS,
  };
};

export const signUp = (user) => {
  return {
    type: SIGNUP,
    payload: user,
  };
};

export const signUpSuccess = (token) => {
  return {
    type: SIGNUP_SUCCESS,
    token,
  };
};

export const showAuthMessage = (type, text) => {
  return {
    type: SHOW_AUTH_MESSAGE,
    payload: {
      type,
      text,
    },
  };
};

export const hideAuthMessage = () => {
  return {
    type: HIDE_AUTH_MESSAGE,
  };
};

export const showLoading = () => {
  return {
    type: SHOW_LOADING,
  };
};
