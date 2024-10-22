// /formulaire-docteur-api/freeurl/fichier/telechagerfichier/{fichierId}

import axios from "axios";
import { BASE_URL } from "../BaseUrl";

axios.interceptors.request.use(function (config) {
  const token = localStorage.getItem("formualaire_recensement_docteurs");
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  } else {
    config.headers.Authorization = null;
  }
  return config;
});

export const downloadFileRequest = (fichierId) => {
  return axios.get(BASE_URL(`freeurl/fichier/telechagerfichier/${fichierId}`), {
    responseType: "blob",
  });
};

// /formulaire-docteur-api/freeurl/fichier/telechagerfichier/{fichierId}
