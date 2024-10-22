import { jwtDecode } from "jwt-decode";
import isTokenExpire from "./TokenValidity";

export const UserIsAuthenticated = () => {
  let tokenValid = false;

  try {
    if (
      localStorage
        .getItem("formualaire_recensement_docteurs")
        .replace(/[\""]+/g, "")
    ) {
      if (
        jwtDecode(
          localStorage
            .getItem("formualaire_recensement_docteurs")
            .replace(/[\""]+/g, "")
        ).exp &&
        isTokenExpire(localStorage.getItem("formualaire_recensement_docteurs"))
      ) {
        tokenValid = true;
      } else {
        tokenValid = false;
      }
    }
  } catch (error) {
    tokenValid = false;
  }
  return tokenValid;
};
