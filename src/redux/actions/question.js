import {
  FETCH_QUESTION_COUNT,
  SET_QUESTION_COUNT,
  SHOW_LOADING_QUESTION_COUNT,
  SHOW_LOADING_CREATE,
  CREATE_QUESTION,
  HIDE_LOADING_CREATE,
  SET_TEST_INFO_ID,
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
