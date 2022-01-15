import axios from "axios";
import { API_BASE_URL } from "./AppConfig";
// import history from "../history";
import { notification } from "antd";
import { AUTH_TOKEN } from "../redux/constants/auth";

const service = axios.create({
  baseURL: API_BASE_URL,
  timeout: 60000,
});

const TOKEN_PAYLOAD_KEY = "Authorization";
// API Request interceptor
service.interceptors.request.use(
  (config) => {
    const jwtToken = localStorage.getItem("auth_token");
    if (jwtToken) {
      config.headers[TOKEN_PAYLOAD_KEY] = `Bearer ${jwtToken}`;
    }

    const langs = {
      "uz": 1,
      "ru": 2,
      "en": 3
    }

    config.headers["X-Requested-With"] =
      langs[localStorage.getItem("locale")] || 2;

    return config;
  },
  (error) => {
    // Do something with request error here
    notification.error({
      message: "Error",
    });
    Promise.reject(error);
  }
);

// API respone interceptor
service.interceptors.response.use(
  (response) => {
    return response.data;
  },
  (error) => {
    let notificationParam = {
      message: "",
    };

    if (error.response.status === 401) {
      notificationParam.message = error.response.data.message || "No authorization";

      //"The page you were trying to access cannot be loaded until you are logged in";
      localStorage.removeItem(AUTH_TOKEN);
      localStorage.removeItem("default_organization");
    }

    if (error.response.status === 400) {
      notificationParam.message = error.response.data.message || "Incorrect Data";
      //"Please repeat your request again"
    }

    if (error.response.status === 403) {
      notificationParam.message = "Access Limited";
      //"You do not have access to the material"
    }

    if (error.response.status === 404) {
      notificationParam.message = "Not Found";
    }

    if (error.response.status === 500) {
      notificationParam.message = "Internal Server Error";
    }

    if (error.response.status === 508) {
      notificationParam.message = "Time Out";
    }

    notification.error(notificationParam);

    return Promise.reject(error);
  }
);

export default service;
