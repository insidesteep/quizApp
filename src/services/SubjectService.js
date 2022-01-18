import fetch from "../configs/AppFetchInterceptor";

const SubjectService = {};

SubjectService.list = function (data) {
  return fetch({
    url: "/api/subjects_info.php",
    method: "get",
  });
};

export default SubjectService;
