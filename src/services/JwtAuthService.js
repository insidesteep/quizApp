import fetch from "../configs/AuthFetchInterceptor";

const JwtAuthService = {};

JwtAuthService.login = function (data) {
  return fetch({
    url: "/login.php",
    method: "post",
    data: data,
  });
};

JwtAuthService.signUp = function (data) {
  return fetch({
    url: "/create_user.php",
    method: "post",
    headers: {
      "Content-Type": "application/form-data"
    },
    data: data,
  });
};

JwtAuthService.authorization = function () {
  return fetch({
    url: "/validate_token.php",
    method: "get",
  });
};

export default JwtAuthService;
