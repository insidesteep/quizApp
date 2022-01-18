import {
  AUTH_TOKEN,
  AUTHENTICATED,
  SHOW_AUTH_MESSAGE,
  HIDE_AUTH_MESSAGE,
  SIGNOUT,
  SIGNUP_SUCCESS,
  SHOW_LOADING,
  SET_TERM_REG_INFO,
} from "../constants/auth";

const initState = {
  loading: false,
  message: {},
  showMessage: false,
  redirect: "",
  token: localStorage.getItem(AUTH_TOKEN),
  userInfo: {
    firstName: "",
    lastName: "",
    middleName: "",
    role: null,
    subjectName: "",
  },
  termRegData: null,
};

const auth = (state = initState, action) => {
  switch (action.type) {
    case AUTHENTICATED:
      return {
        ...state,
        loading: false,
        redirect: "/",
        token: action.payload.token,
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
    case SIGNOUT:
      localStorage.removeItem("auth_token")

      return {
        loading: false,
        message: {},
        showMessage: false,
        redirect: "",
        token: null,
        userInfo: {
          firstName: "",
          lastName: "",
          middleName: "",
          role: null,
          subjectName: "",
        },
        termRegData: null,
      };

    case SIGNUP_SUCCESS:
      return {
        ...state,
        loading: false,
        token: action.token,
      };

    case SET_TERM_REG_INFO:
      return {
        ...state,
        termRegData: action.payload,
      };

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
