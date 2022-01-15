import { SHOW_LOADING_SUBJECTS, SET_SUBJECTS } from "../constants/subject";

const initState = {
  loading: false,
  data: [],
};

const subject = (state = initState, action) => {
  switch (action.type) {
    case SET_SUBJECTS:
      return {
        ...state,
        data: action.payload,
        loading: false,
      };
    case SHOW_LOADING_SUBJECTS:
      return {
        ...state,
        loading: false,
      };

    default:
      return state;
  }
};

export default subject;
