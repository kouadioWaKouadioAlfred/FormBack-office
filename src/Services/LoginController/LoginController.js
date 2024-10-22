import toast from "react-hot-toast";
import { BASE_URL } from "../BaseUrl.js";
import axios from "axios";

axios.interceptors.request.use(function (config) {
  const token = localStorage.getItem("formualaire_recensement_docteurs");
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  } else {
    config.headers.Authorization = null;
  }
  return config;
});

export const loginAsAdmin = async (values) => {
  return await axios.post(BASE_URL("signin"), values);
};

export const resetPasswordAdmin = async (values) => {
  return await axios.post(BASE_URL("reinitialiserpassword"), values);
};
