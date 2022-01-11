import {
  AUTH_TOKEN,
  AUTHENTICATED,
  SHOW_AUTH_MESSAGE,
  HIDE_AUTH_MESSAGE,
  SIGNOUT_SUCCESS,
  SIGNUP_SUCCESS,
  SHOW_LOADING,
} from "../constants/auth";

const initState = {
  loading: false,
  message: {},
  showMessage: false,
  redirect: "",
  token: localStorage.getItem(AUTH_TOKEN),
  defaultOrg: parseInt(localStorage.getItem("default_organization")),
  userInfo: {
    firstName: "",
    lastName: "",
  },
};

const auth = (state = initState, action) => {
  switch (action.type) {
    case AUTHENTICATED:
      return {
        ...state,
        loading: false,
        redirect: "/",
        token: action.payload.token,
        defaultOrg: action.payload.defaultOrg,
        userInfo: action.payload.userInfo,
      };
    case SHOW_AUTH_MESSAGE:
      return {
        ...state,
        message: {
          type: action.payload.type,
          text: action.payload.text,
        },
        showMessage: true,
        loading: false,
      };
    case HIDE_AUTH_MESSAGE:
      return {
        ...state,
        message: {},
        showMessage: false,
      };
    case SIGNOUT_SUCCESS: {
      return {
        ...state,
        token: null,
        defaultOrg: null,
        redirect: "/",
        loading: false,
      };
    }
    case SIGNUP_SUCCESS: {
      return {
        ...state,
        loading: false,
        token: action.token,
      };
    }
    case SHOW_LOADING: {
      return {
        ...state,
        loading: true,
      };
    }



    default:
      return state;
  }
};

export default auth;
