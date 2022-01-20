import { message } from "antd";
import { all, takeEvery, put, fork, call } from "redux-saga/effects";
import {
  CREATE_QUESTION,
  FETCH_LAST_TEST,
  FETCH_NEXT_TEST,
  FETCH_PREVIEW_QUESTIONS,
  FETCH_QUESTION_COUNT,
  FETCH_START_TEST,
  GET_QUESTION,
  UPDATE_QUESTION,
} from "../constants/question";
import {
  hideLoadingCreate,
  hideLoadingLastTest,
  hideLoadingNextTest,
  hideLoadingPreviewQuestions,
  hideLoadingQuestion,
  hideLoadingTestData,
  setPreviewQuestions,
  setQuestion,
  setQuestionCount,
  setTestData,
  setTestInfoId,
  setTestStatus,
} from "../actions/question";

import QuestionService from "../../services/QuestionService";
import { APP_PREFIX_PATH } from "../../configs/AppConfig";

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

export function* fetchStartTest() {
  yield takeEvery(FETCH_START_TEST, function* ({ payload }) {
    try {
      const { test_status, ...other } = yield call(
        QuestionService.startTest,
        payload
      );

      yield put(setTestData(other));
      yield put(setTestStatus(test_status));
    } catch (error) {
      yield put(hideLoadingTestData());
    }
  });
}

export function* fetchLastTest() {
  yield takeEvery(FETCH_LAST_TEST, function* () {
    try {
      const { test_status, ...other } = yield call(QuestionService.getLastTest);

      console.log("Next", test_status, other);

      yield put(setTestStatus(test_status));

      if (test_status == 3) {
        yield put(setTestData(null));
      } else {
        yield put(setTestData(other));
      }
    } catch (error) {
      yield put(hideLoadingLastTest());
    }
  });
}

export function* fetchNextTest() {
  yield takeEvery(FETCH_NEXT_TEST, function* ({ payload }) {
    try {
      const { data, cb } = payload;

      const { test_status, ...other } = yield call(
        QuestionService.getNextTest,
        data
      );

      console.log("Next", test_status, other);

      yield put(setTestStatus(test_status));

      if (test_status == 3) {
        yield put(setTestData(null));
      } else {
        yield put(setTestData(other));
      }
      cb();
    } catch (error) {
      yield put(hideLoadingNextTest());
    }
  });
}

export function* fetchPreviewQuestions() {
  yield takeEvery(FETCH_PREVIEW_QUESTIONS, function* ({ payload }) {
    try {
      const questions = yield call(QuestionService.getPreview, payload);

      yield put(setPreviewQuestions(questions));
    } catch (error) {
      yield put(hideLoadingPreviewQuestions());
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
        if (answer_1.img.file.status === "removed") {
          formData.append("answerimg1", null);
        } else {
          formData.append("answerimg1", answer_1.img.file.originFileObj);
        }
      } else {
        formData.append("answerimg1", null);
      }

      if (answer_2.img) {
        if (answer_2.img.file.status === "removed") {
          formData.append("answerimg2", null);
        } else {
          formData.append("answerimg2", answer_2.img.file.originFileObj);
        }
      } else {
        formData.append("answerimg2", null);
      }

      if (answer_3.img) {
        if (answer_3.img.file.status === "removed") {
          formData.append("answerimg3", null);
        } else {
          formData.append("answerimg3", answer_3.img.file.originFileObj);
        }
      } else {
        formData.append("answerimg3", null);
      }

      if (answer_4.img) {
        if (answer_4.img.file.status === "removed") {
          formData.append("answerimg4", null);
        } else {
          formData.append("answerimg4", answer_4.img.file.originFileObj);
        }
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

export function* updateQuestion() {
  yield takeEvery(UPDATE_QUESTION, function* ({ payload }) {
    const {
      question_images,
      question,
      answer_1,
      answer_2,
      answer_3,
      answer_4,
      subjectId,
      lang,
      testId,
    } = payload;

    try {
      const formData = new FormData();

      formData.append("test_id", testId);
      formData.append("lang", lang);
      formData.append("subject_id", subjectId);
      formData.append("name", question);
      formData.append("answer_1", answer_1.answer);
      formData.append("answer_2", answer_2.answer);
      formData.append("answer_3", answer_3.answer);
      formData.append("answer_4", answer_4.answer);

      if (answer_1.img) {
        if (typeof answer_1.img === "string") {
          formData.append("answerimg1", answer_1.img);
        } else {
          if (answer_1.img.file.status === "done") {
            formData.append("answerimg1", answer_1.img.file.originFileObj);
          }

          if (answer_1.img.file.status === "removed") {
            formData.append("answerimg1", null);
          }
        }
      } else {
        formData.append("answerimg1", null);
      }

      if (answer_2.img) {
        if (typeof answer_2.img === "string") {
          formData.append("answerimg2", answer_2.img);
        } else {
          if (answer_2.img.file.status === "done") {
            formData.append("answerimg2", answer_2.img.file.originFileObj);
          }

          if (answer_2.img.file.status === "removed") {
            formData.append("answerimg2", null);
          }
        }
      } else {
        formData.append("answerimg2", null);
      }

      if (answer_3.img) {
        if (typeof answer_3.img === "string") {
          formData.append("answerimg3", answer_3.img);
        } else {
          if (answer_3.img.file.status === "done") {
            formData.append("answerimg3", answer_3.img.file.originFileObj);
          }

          if (answer_3.img.file.status === "removed") {
            formData.append("answerimg3", null);
          }
        }
      } else {
        formData.append("answerimg3", null);
      }

      if (answer_4.img) {
        if (typeof answer_4.img === "string") {
          formData.append("answerimg4", answer_4.img);
        } else {
          if (answer_4.img.file.status === "done") {
            formData.append("answerimg4", answer_4.img.file.originFileObj);
          }

          if (answer_4.img.file.status === "removed") {
            formData.append("answerimg4", null);
          }
        }
      } else {
        formData.append("answerimg4", null);
      }

      if (Array.isArray(question_images)) {
        formData.append("img1", question_images[0]);
        formData.append("img2", question_images[1]);
        formData.append("img3", question_images[2]);
      } else {
        for (let i = 0; i < 3; i++) {
          if (question_images.fileList[i]) {
            if (question_images.fileList[i].url) {
              formData.append(
                `img${i + 1}`,
                question_images.fileList[i].url.split(
                  `${APP_PREFIX_PATH}/temp/`
                )[1]
              );
            } else {
              formData.append(
                `img${i + 1}`,
                question_images.fileList[i].originFileObj
              );
            }
          } else {
            formData.append(`img${i + 1}`, null);
          }
        }
      }

      const { amount, test_info_id } = yield call(
        QuestionService.create,
        formData
      );

      yield put(setQuestionCount(amount));
      yield put(setTestInfoId(test_info_id));

      message.success("Вопрос успешно изменён!");
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
      console.log(error);
      yield put(hideLoadingQuestion());
    }
  });
}

export default function* rootSaga() {
  yield all([
    fork(fetchQuestionCount),
    fork(createQuestion),
    fork(updateQuestion),
    fork(getQuestion),
    fork(fetchPreviewQuestions),
    fork(fetchStartTest),
    fork(fetchLastTest),
    fork(fetchNextTest),
  ]);
}
