import {
  FETCH_QUESTION_COUNT,
  SET_QUESTION_COUNT,
  SHOW_LOADING_QUESTION_COUNT,
  SHOW_LOADING_CREATE,
  CREATE_QUESTION,
  HIDE_LOADING_CREATE,
  SET_TEST_INFO_ID,
  GET_QUESTION,
  SET_QUESTION,
  SHOW_LOADING_QUESTION,
  HIDE_LOADING_QUESTION,
  UPDATE_QUESTION,
  SET_PREVIEW_QUESTIONS,
  SHOW_LOADING_PREVIEW_QUESTIONS,
  HIDE_LOADING_PREVIEW_QUESTIONS,
  FETCH_PREVIEW_QUESTIONS,
  FETCH_START_TEST,
  SET_TEST_DATA,
  SHOW_LOADING_TEST_DATA,
  HIDE_LOADING_TEST_DATA,
  SET_TEST_STATUS,
  SHOW_LOADING_LAST_TEST,
  HIDE_LOADING_LAST_TEST,
  FETCH_LAST_TEST,
  FETCH_NEXT_TEST,
  SHOW_LOADING_NEXT_TEXT,
  HIDE_LOADING_NEXT_TEXT,
} from "../constants/question";

export const fetchQuestionCount = (data) => {
  return {
    type: FETCH_QUESTION_COUNT,
    payload: data,
  };
};

export const fetchPreviewQuestions = (data) => {
  return {
    type: FETCH_PREVIEW_QUESTIONS,
    payload: data,
  };
};

export const fetchStartTest = (data) => {
  return {
    type: FETCH_START_TEST,
    payload: data,
  };
};

export const fetchLastTest = () => {
  return {
    type: FETCH_LAST_TEST,
  };
};

export const fetchNextTest = (data, cb) => {
  return {
    type: FETCH_NEXT_TEST,
    payload: { data, cb },
  };
};

export const createQuestion = (data) => {
  return {
    type: CREATE_QUESTION,
    payload: data,
  };
};

export const updateQuestion = (data) => {
  return {
    type: UPDATE_QUESTION,
    payload: data,
  };
};

export const getQuestion = (data, cb) => {
  return {
    type: GET_QUESTION,
    payload: { data, cb },
  };
};

export const setQuestion = (question) => {
  return {
    type: SET_QUESTION,
    payload: question,
  };
};

export const setQuestionCount = (count) => {
  return {
    type: SET_QUESTION_COUNT,
    payload: {
      count,
    },
  };
};

export const setTestInfoId = (data) => {
  return {
    type: SET_TEST_INFO_ID,
    payload: data,
  };
};

export const setPreviewQuestions = (questions) => {
  return {
    type: SET_PREVIEW_QUESTIONS,
    payload: questions,
  };
};

export const setTestData = (data) => {
  return {
    type: SET_TEST_DATA,
    payload: data,
  };
};

export const setTestStatus = (status) => {
  return {
    type: SET_TEST_STATUS,
    payload: status,
  };
};

export const showLoadingQuestionCount = () => {
  return {
    type: SHOW_LOADING_QUESTION_COUNT,
  };
};

export const showLoadingCreate = () => {
  return {
    type: SHOW_LOADING_CREATE,
  };
};

export const showLoadingPreviewQuestions = () => {
  return {
    type: SHOW_LOADING_PREVIEW_QUESTIONS,
  };
};

export const showLoadingTestData = () => {
  return {
    type: SHOW_LOADING_TEST_DATA,
  };
};

export const showLoadingLastTest = () => {
  return {
    type: SHOW_LOADING_LAST_TEST,
  };
};

export const showLoadingNextTest = () => {
  return {
    type: SHOW_LOADING_NEXT_TEXT,
  };
};

export const hideLoadingPreviewQuestions = () => {
  return {
    type: HIDE_LOADING_PREVIEW_QUESTIONS,
  };
};

export const hideLoadingCreate = () => {
  return {
    type: HIDE_LOADING_CREATE,
  };
};

export const showLoadingQuestion = () => {
  return {
    type: SHOW_LOADING_QUESTION,
  };
};

export const hideLoadingQuestion = () => {
  return {
    type: HIDE_LOADING_QUESTION,
  };
};

export const hideLoadingTestData = () => {
  return {
    type: HIDE_LOADING_TEST_DATA,
  };
};

export const hideLoadingLastTest = () => {
  return {
    type: HIDE_LOADING_LAST_TEST,
  };
};

export const hideLoadingNextTest = () => {
  return {
    type: HIDE_LOADING_NEXT_TEXT,
  };
};
