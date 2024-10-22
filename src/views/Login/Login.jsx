import React, { useState } from "react";

import { useNavigate } from "react-router-dom";

import { loginAsAdmin } from "../../Services/LoginController/LoginController";
import toast from "react-hot-toast";
import { RotatingLines } from "react-loader-spinner";

export default function Login() {
  const navigate = useNavigate();
  const [globalFormFieldValue, setGlobalFormFieldValue] = useState({
    password: "",
    username: "",
  });
  const [logingLoader, setLogingLoader] = useState(false);

  /**
   * FONCTION POUR SE CONNECTER
   */

  const handleLogin = () => {
    setLogingLoader(true);
    if (
      globalFormFieldValue.username.trim() === "" ||
      globalFormFieldValue.password.trim() === ""
    ) {
      toast.error("Tous les champs sont réquis svp!");
      setLogingLoader(false);
    } else {
      loginAsAdmin(globalFormFieldValue)
        .then((res) => {
          setLogingLoader(false);
          localStorage.setItem(
            "formualaire_recensement_docteurs",
            res.data.accessToken
          );
          localStorage.setItem("username", globalFormFieldValue.username);
          navigate("/");
        })
        .catch((err) => {
          setLogingLoader(false);
          if (err?.response?.data?.donnee) {
            toast.error(err.response.data.donnee);
          } else {
            toast.error("Une erreur s'est produite, veuillez rééssayer!");
          }
        });
    }
  };

  return (
    <div className="bg-stone-100">
      <div className="min-h-screen flex items-center justify-center">
        <div className=" bg-white px-4 py-10 border rounded-lg shadow-lg absolute w-[400px] max-w-md">
          <h2 className="text-2xl font-bold text-black text-left">
            Bienvenu sur le formulaire{" "}
            <span className=" text-emerald-600">FECODAR-CI</span>
          </h2>
          <p className="text-base text-left font-normal my-2 mb-4 text-gray-600">
            Connectez-vous pour accéder à la listes des inscrits
          </p>
          <form>
            <div className="mb-4 mt-8">
              <label htmlFor="email" className="block text-sm font-normal ">
                Nom d'utilisateur
              </label>
              <input
                value={globalFormFieldValue.username}
                onChange={(event) => {
                  setGlobalFormFieldValue({
                    ...globalFormFieldValue,
                    username: event.target.value,
                  });
                }}
                type="text"
                id="email"
                className="block w-full text-black text-sm px-2 py-2 font-medium bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-customBluePure focus:border-customBluePure"
              />
            </div>
            <div className="mb-6">
              <label htmlFor="password" className="block text-sm  font-normal ">
                Mot de passe
              </label>
              <input
                value={globalFormFieldValue.password}
                onChange={(event) => {
                  setGlobalFormFieldValue({
                    ...globalFormFieldValue,
                    password: event.target.value,
                  });
                }}
                type="password"
                id="password"
                className="block w-full text-black text-sm px-2 py-2 font-medium bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-customBluePure focus:border-customBluePure"
              />
            </div>
            <div className="pt-2 float-right mb-4 cursor-pointer mt-[-22px]"></div>
            <button
              type="submit"
              className="w-full flex items-center justify-center bg-emerald-600 font-bold   text-white py-2  rounded-md focus:outline-none"
              onClick={() => handleLogin()}
            >
              {logingLoader ? (
                <RotatingLines
                  visible={true}
                  height="20"
                  width="20"
                  textAlign="center"
                  color="white"
                  strokeColor="white"
                  strokeWidth="5"
                  animationDuration="0.75"
                  ariaLabel="rotating-lines-loading"
                  wrapperStyle={{}}
                  wrapperClass=""
                />
              ) : (
                "Connexion"
              )}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
