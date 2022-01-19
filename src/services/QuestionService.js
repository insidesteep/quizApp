import fetch from "../configs/AppFetchInterceptor";

const QuestionService = {};

QuestionService.getQuestionCount = function (data) {
  return fetch({
    url: "/api/countQuestion.php",
    method: "post",
    data,
  });
};

QuestionService.create = function (data) {
  return fetch({
    url: "/api/create_test.php",
    method: "post",
    data,
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });
};

QuestionService.getById = function (data) {
  return fetch({
    url: "/api/view_test.php",
    method: "post",
    data,
  });
};

QuestionService.getPreview = function (data) {
  return fetch({
    url: "/api/preview_test.php",
    method: "post",
    data,
  });
};

QuestionService.startTest = function (data) {
  return fetch({
    url: "/api/start_test.php",
    method: "post",
    data,
  });
};

QuestionService.getLastTest = function () {
  return fetch({
    url: "/api/user_last_test.php",
    method: "get",
  });
};

export default QuestionService;
