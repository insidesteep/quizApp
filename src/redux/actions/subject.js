import {
  SET_SUBJECTS,
  FETCH_SUBJECTS,
  SHOW_LOADING_SUBJECTS,
} from "../constants/subject";

export const fetchSubjects = () => {
  return {
    type: FETCH_SUBJECTS,
  };
};

export const setSubjects = (subjects) => {
  return {
    type: SET_SUBJECTS,
    payload: subjects,
  };
};

export const showLoadingSubjects = () => {
  return {
    type: SHOW_LOADING_SUBJECTS,
  };
};

