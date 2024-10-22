/**
 * BAse de donnée local
 * @param {*} url
 * @returns
 */
// export const BASE_URL = (url) => {
//   let URL = `http://192.168.1.14:8081/formulaire-docteur-api/${url}`;
//   return URL;
// };

/**
 * BAse de donné en ligne
 * @param {*} url
 * @returns
 */

export const BASE_URL = (url) => {
  let URL = `http://5.196.4.7:8080/formulaire-docteur-api/${url}`;
  return URL;
};
