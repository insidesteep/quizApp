import fetch from "../configs/AppFetchInterceptor";

const SubjectService = {};

SubjectService.list = function (data) {
  return fetch({
    url: "/subjects_info.php",
    method: "get",
  });
};

export default SubjectService;
