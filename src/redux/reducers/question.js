import {
  HIDE_LOADING_CREATE,
  SET_QUESTION_COUNT,
  SET_TEST_INFO_ID,
  SHOW_LOADING_CREATE,
  SHOW_LOADING_QUESTION_COUNT,
} from "../constants/question";

const initState = {
  loadingQuestionCount: false,
  loadingCreate: false,
  questionCount: 0,
  testInfoId: [],
};

const question = (state = initState, action) => {
  switch (action.type) {
    case SET_QUESTION_COUNT:
      return {
        ...state,
        questionCount: action.payload.count,
        loadingQuestionCount: false,
        loadingCreate: false,
      };

    case SET_TEST_INFO_ID:
      return {
        ...state,
        testInfoId: action.payload,
      };

    case SHOW_LOADING_QUESTION_COUNT:
      return {
        ...state,
        loadingQuestionCount: true,
      };

    case SHOW_LOADING_CREATE:
      return {
        ...state,
        loadingCreate: true,
      };

    case HIDE_LOADING_CREATE:
      return {
        ...state,
        loadingCreate: false,
      };

    default:
      return state;
  }
};

export default question;
