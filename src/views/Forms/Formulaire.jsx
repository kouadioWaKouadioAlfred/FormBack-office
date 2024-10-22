import { CircularProgress, Pagination, Tooltip } from "@mui/material";
import React, { useEffect, useState } from "react";

import FadeMenu from "./CreateForms";

import { BiEdit, BiTrash } from "react-icons/bi";

export default function Formulaire() {
  const [loading, setLoading] = useState(false);

  const [forms, setForms] = useState([
    {
      id: 1,
      type: "Grille prestataire",
      responsable: "Kouadio",
      dateCreation: "2024-01-01",
      numeroResponsable: "01 22 22 22 45",
    },
    {
      id: 2,
      type: "Etablissement sanitaire",
      responsable: "Konan",
      dateCreation: "2024-10-01",
      numeroResponsable: "07 44 44 44 02",
    },
    {
      id: 3,
      type: "Usagers",
      responsable: "Soro",
      dateCreation: "2024-05-05",
      numeroResponsable: "05 88 88 88 01",
    },
    {
      id: 4,
      type: "Grille prestataire",
      responsable: "Dao",
      dateCreation: "2024-02-25",
      numeroResponsable: "07 00 00 00 09",
    },
    {
      id: 5,
      type: "Usagers",
      responsable: "BI Djo",
      dateCreation: "2024-03-27",
      numeroResponsable: "05 03 25 25 25 ",
    },
  ]);

  const defineData = () => {
    setForms(forms);
  };

  const deletUser = () => {
    document.getElementById("deletUser").showModal();
  };

  const CloseDeleteModal = () => {
    document.getElementById("deletUser").close();
  };

  // const EditUser = () => {
  //   document.getElementById("Add_users").showModal();
  // };

  const TableItem = ({ item }) => {
    return (
      <tr key={item.id} className="text-center">
        <td className="py-2 px-4 border-b border-gray-200">{item.type}</td>
        <td className="py-2 px-4 border-b border-gray-200">
          {item.responsable}
        </td>
        <td className="py-2 px-4 border-b border-gray-200">
          {item.dateCreation}
        </td>
        <td className="py-2 px-4 border-b border-gray-200">
          {item.numeroResponsable}
        </td>

        <td className="border-b border-gray-200">
          <Tooltip title="Modifier un utilisateur">
            <button className="btn btn-sm btn-circle btn-ghost">
              <BiEdit className="text-xl text-green-600" />
            </button>
          </Tooltip>

          <Tooltip title="Supprimer un utilisateur">
            <button
              className="btn btn-sm btn-circle btn-ghost"
              onClick={deletUser}
            >
              <BiTrash className="text-xl text-red-600" />
            </button>
          </Tooltip>
        </td>
      </tr>
    );
  };

  useEffect(() => {
    defineData();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);

  return (
    <div className="p-3 relative bg-gray-50">
      <div className="flex items-center justify-between">
        <h1 className="font-extrabold text-3xl">
          Formulaire de renseignement{" "}
        </h1>
        <div className="mt-2 float-right   px-4 py-2 text-white rounded-md ">
          <FadeMenu />
        </div>
      </div>
      <div className="my-7">
        <hr className="text-gray-950" />
      </div>
      <div className="flex items-center justify-between">
        <h1 className="font-extrabold text-customBluePure text-lg">
          Listes des formulaires
        </h1>

        <div className="flex gap-4">
          <input
            type="date"
            placeholder="Type here"
            className="input input-bordered w-full max-w-xs mr-4"
          />

          <div className="">
            <select className="select select-bordered w-full ">
              <option disabled selected>
                Selectionner un formulaire{" "}
              </option>
              <option>Etablissement sanitaire</option>
              <option>Grille Prestataire</option>
              <option>Usagers</option>
            </select>
          </div>

          <label className="input input-bordered flex items-center gap-2">
            <input
              type="text"
              className="grow"
              placeholder="Rechercher un formulaire"
            />
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 16 16"
              fill="currentColor"
              className="h-4 w-4 opacity-70"
            >
              <path
                fillRule="evenodd"
                d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
                clipRule="evenodd"
              />
            </svg>
          </label>
        </div>
      </div>

      <div className="overflow-x-auto overflow-y-hidden mt-4">
        <table className="min-w-full bg-white border  border-gray-200">
          <thead className="bg-gray-100 rounded-t-xl">
            <tr className="">
              <th className="py-2 px-4 border-b border-gray-200">
                Type de formulaire
              </th>
              <th className="py-2 px-4 border-b border-gray-200">
                {" "}
                Nom responsable de l' enquête
              </th>
              <th className="py-2 px-4 border-b border-gray-200">
                Date de l'enregistrement
              </th>
              <th className="py-2 px-4 border-b border-gray-200">
                Numero du responsable de l'enquête
              </th>
              <th className="py-2 px-4 border-b border-gray-200">Action</th>
            </tr>
          </thead>

          <tbody>
            {loading ? (
              <tr>
                <th colSpan={8}>
                  <div className="my-10">
                    <CircularProgress color="inherit" />
                  </div>
                </th>
              </tr>
            ) : null}

            {!loading && forms.length !== 0
              ? forms.map((user) => <TableItem key={user.id} item={user} />)
              : null}

            {!loading && forms.length === 0 ? (
              <tr>
                <th colSpan={8}>
                  <div className="my-10">
                    <p className="text-red-600 font-semibold text-center">
                      Aucun élément trouvé.
                    </p>
                  </div>
                </th>
              </tr>
            ) : null}
          </tbody>
        </table>
      </div>

      <div className="flex justify-end mt-9">
        <Pagination count={5} variant="outlined" shape="rounded" />
      </div>

      <dialog id="deletUser" className="modal">
        <div className="modal-box w-11/12 max-w-md">
          <form method="dialog">
            {/* if there is a button in form, it will close the modal */}
            <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
              ✕
            </button>
          </form>
          <div className="w-11/12">
            <h1 className="text-lg font-bold ">
              Etes-vous sûr(re) de vouloir supprimer cet fomulaire ?
            </h1>
            <p className="my-7">
              Cette action est définitive et ne pourra pas être annulée.
              Veuillez confirmer votre choix.
            </p>
            <div className="flex items-center justify-center gap-3 mt-4">
              <button
                className=" bg-gray-300  text-black font-semibold rounded-md  w-28 h-10"
                onClick={CloseDeleteModal}
              >
                Annuler
              </button>
              <button className=" bg-red-600  text-white font-semibold rounded-md w-28 h-10">
                Supprimer
              </button>
            </div>
          </div>
        </div>
      </dialog>
    </div>
  );
}
