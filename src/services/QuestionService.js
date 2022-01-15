import fetch from "../configs/AppFetchInterceptor";

const QuestionService = {};

QuestionService.getQuestionCount = function (data) {
  return fetch({
    url: "/countQuestion.php",
    method: "post",
    data,
  });
};

QuestionService.create = function (data) {
  return fetch({
    url: "/create_test.php",
    method: "post",
    data,
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });
};

QuestionService.getById = function (data) {
  return fetch({
    url: "/view_test.php",
    method: "post",
    data,
  });
};

export default QuestionService;
