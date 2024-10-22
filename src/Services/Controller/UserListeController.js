import axios from "axios";
import { BASE_URL } from "../BaseUrl";

export async function getDoctorListesRequest(page, param, size) {
  return axios.get(
    BASE_URL(
      `admin/rechercherdocteurs?page=${page}&param=${param}&size=${size}`
    )
  );
}

export const exportUsersListes = async () => {
  return await axios.get(BASE_URL(`freeurl/listedocteurs/export-to-excel`), {
    headers: {
      Authorization: `Bearer ${localStorage.getItem(
        "formualaire_recensement_docteurs"
      )}`,
    },
    responseType: "blob",
  });
};

// /freeurl/listedocteurs/export-to-excel

// http://192.168.1.14:8081/formulaire-docteur-api/admin/rechercherdocteurs?page=10&param=ok&size=10
