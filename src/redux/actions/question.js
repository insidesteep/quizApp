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
  UPDATE_QUESTION
} from "../constants/question";

export const fetchQuestionCount = (data) => {
  return {
    type: FETCH_QUESTION_COUNT,
    payload: data,
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
