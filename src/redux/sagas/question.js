import { message } from "antd";
import { all, takeEvery, put, fork, call } from "redux-saga/effects";
import {
  CREATE_QUESTION,
  FETCH_QUESTION_COUNT,
  GET_QUESTION,
} from "../constants/question";
import {
  hideLoadingCreate,
  hideLoadingQuestion,
  setQuestion,
  setQuestionCount,
  setTestInfoId,
} from "../actions/question";

import QuestionService from "../../services/QuestionService";

export function* fetchQuestionCount() {
  yield takeEvery(FETCH_QUESTION_COUNT, function* ({ payload }) {
    try {
      const { amount, test_info_id } = yield call(
        QuestionService.getQuestionCount,
        payload
      );

      yield put(setQuestionCount(amount));
      yield put(setTestInfoId(test_info_id));
    } catch (error) {
      // yield put(showAuthMessage("error", error.response.data.message));
    }
  });
}

export function* createQuestion() {
  yield takeEvery(CREATE_QUESTION, function* ({ payload }) {
    const {
      question_images,
      question,
      answer_1,
      answer_2,
      answer_3,
      answer_4,
      subjectId,
      lang,
    } = payload;

    try {
      const formData = new FormData();

      formData.append("test_id", 0);
      formData.append("lang", lang);
      formData.append("subject_id", subjectId);
      formData.append("name", question);
      formData.append("answer_1", answer_1.answer);
      formData.append("answer_2", answer_2.answer);
      formData.append("answer_3", answer_3.answer);
      formData.append("answer_4", answer_4.answer);

      if (answer_1.img) {
        formData.append("answerimg1", answer_1.img.file.originFileObj);
      } else {
        formData.append("answerimg1", null);
      }

      if (answer_2.img) {
        formData.append("answerimg2", answer_2.img.file.originFileObj);
      } else {
        formData.append("answerimg2", null);
      }

      if (answer_3.img) {
        formData.append("answerimg3", answer_3.img.file.originFileObj);
      } else {
        formData.append("answerimg3", null);
      }

      if (answer_4.img) {
        formData.append("answerimg4", answer_4.img.file.originFileObj);
      } else {
        formData.append("answerimg4", null);
      }

      for (let i = 0; i < 3; i++) {
        if (question_images && question_images.fileList[i]) {
          formData.append(
            `img${i + 1}`,
            question_images.fileList[i].originFileObj
          );
        } else {
          formData.append(`img${i + 1}`, null);
        }
      }

      const { amount, test_info_id } = yield call(
        QuestionService.create,
        formData
      );

      yield put(setQuestionCount(amount));
      yield put(setTestInfoId(test_info_id));

      message.success("Вопрос успешно создан!");
    } catch (error) {
      console.log(error);
      yield put(hideLoadingCreate());
    }
  });
}

export function* getQuestion() {
  yield takeEvery(GET_QUESTION, function* ({ payload }) {
    const { data, cb } = payload;

    try {
      const question = yield call(QuestionService.getById, data);

      yield put(setQuestion(question));

      cb();
    } catch (error) {
      yield put(hideLoadingQuestion());
    }
  });
}

export default function* rootSaga() {
  yield all([
    fork(fetchQuestionCount),
    fork(createQuestion),
    fork(getQuestion),
  ]);
}
