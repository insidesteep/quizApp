import {
  HIDE_LOADING_CREATE,
  HIDE_LOADING_PREVIEW_QUESTIONS,
  HIDE_LOADING_QUESTION,
  SET_PREVIEW_QUESTIONS,
  SET_QUESTION,
  SET_QUESTION_COUNT,
  SET_TEST_INFO_ID,
  SHOW_LOADING_CREATE,
  SHOW_LOADING_PREVIEW_QUESTIONS,
  SHOW_LOADING_QUESTION,
  SHOW_LOADING_QUESTION_COUNT,
} from "../constants/question";

const initState = {
  loadingQuestionCount: false,
  loadingCreate: false,
  questionCount: 0,
  testInfoId: [],
  questionData: {
    data: null,
    loading: false,
  },
  preview: {
    data: {
      all_item: 0,
      test_info: [],
    },
    loading: false,
  },
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

    case SET_QUESTION:
      return {
        ...state,
        questionData: {
          ...state.questionData,
          data: action.payload,
          loading: false,
        },
      };

    case SET_PREVIEW_QUESTIONS:
      return {
        ...state,
        preview: {
          ...state.preview,
          data: action.payload,
          loading: false,
        },
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

    case SHOW_LOADING_QUESTION:
      return {
        ...state,
        questionData: {
          ...state.questionData,
          loading: true,
        },
      };

    case SHOW_LOADING_PREVIEW_QUESTIONS:
      return {
        ...state,
        preview: {
          ...state.preview,
          loading: true,
        },
      };

    case HIDE_LOADING_CREATE:
      return {
        ...state,
        loadingCreate: false,
      };

    case HIDE_LOADING_QUESTION:
      return {
        ...state,
        questionData: {
          ...state.questionData,
          loading: false,
        },
      };

    case HIDE_LOADING_PREVIEW_QUESTIONS:
      return {
        ...state,
        preview: {
          ...state.preview,
          loading: false,
        },
      };

    default:
      return state;
  }
};

export default question;
