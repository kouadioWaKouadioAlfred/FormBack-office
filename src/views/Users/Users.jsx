import {
  Box,
  CircularProgress,
  Drawer,
  Pagination,
  Tooltip,
} from "@mui/material";
import { useEffect, useState } from "react";
import {
  exportUsersListes,
  getDoctorListesRequest,
} from "../../Services/Controller/UserListeController";
import eye from "../../assets/AnotherIcons/UniqueEye.svg";
import toast from "react-hot-toast";
import { downloadFileRequest } from "../../Services/DownloadFilesController/DownloadFilesController";

export default function Users() {
  const [loading, setLoading] = useState(false);
  const [pageQuery, setPageQuery] = useState({
    page: 0,
    size: 15,
    nombrePages: 1,
    pagePagination: 1,
  });
  const [seachParam, setSeachParam] = useState("");
  const [openDrawer, setOpenDrawer] = useState(false);
  const [doctorInfos, setDoctorInfos] = useState(null);
  const [usersList, setUsersList] = useState([]);

  //RECUPERER LA LISTE DES DOCTEURS DEJA INSCRITS

  const fecthDoctersListe = () => {
    setLoading(true);
    getDoctorListesRequest(pageQuery.page, seachParam, pageQuery.size)
      .then((response) => {
        setUsersList(response.data.donnee.data);
        setLoading(false);
        setPageQuery((pageQuery) => ({
          ...pageQuery,
          nombrePages: response.data.donnee.totalPages,
          totalElements: response.data.donnee.totalElements,
        }));
      })
      .catch((error) => {
        setLoading(false);
        if (error?.response?.data?.donnee) {
          toast.success(error.response.data.donnee);
        } else {
          toast.error("Erreur lors de la récupération des données");
        }
        console.error(error);
      });
  };

  /**
   * PAGINATION SECTIONS
   */
  const loadMoreUsersListe = (e, value) => {
    setLoading(true);
    setPageQuery((pageQuery) => ({
      ...pageQuery,
      page: value,
      pagePagination: value,
    }));
    getDoctorListesRequest(value - 1, seachParam, pageQuery.size)
      .then((response) => {
        setLoading(false);
        setUsersList(response.data.donnee.data);
        setPageQuery((prev) => ({
          ...prev,
          nombrePages: response.data.donnee.totalPages,
          totalElements: response.data.donnee.totalElments,
        }));
      })
      .catch((err) => {
        setLoading(false);
        if (err && err.data && err.data.donnee) {
          toast.error(err.data.donnee.data);
        } else {
          toast.error("Une erreur s'est produite, veuillez rééssayer!");
        }
        console.log("api error", err);
      });
  };

  //SELECT A DOCTER TO DISPLAY DETTAILS

  const openDrawerToViewMoreInfos = (item) => {
    setDoctorInfos(item);
    setOpenDrawer(true);
  };

  //EXPORT USERS

  const exportData = () => {
    setLoading(true);
    exportUsersListes()
      .then((resp) => {
        const url = window.URL.createObjectURL(new Blob([resp.data]));
        const link = document.createElement("a");
        link.href = url;
        link.setAttribute("download", `Listes-Docteurs.xlsx`);
        document.body.appendChild(link);
        link.click();
        setLoading(false);
        toast.success("Exportation reuissie!");
      })
      .catch((error) => {
        setLoading(false);
        toast.error("Erreur lors de l'exportation!");
        console.error(error);
      });
  };

  // DOWNLOAD DIPLOME PDF

  const downloadDiplomePDF = (fileID) => {
    downloadFileRequest(fileID)
      .then((response) => {
        const url = window.URL.createObjectURL(new Blob([response.data]));
        const link = document.createElement("a");
        link.href = url;
        link.setAttribute("download", `${doctorInfos?.diplome?.nom}`);
        document.body.appendChild(link);
        link.click();
        toast.success("Diplôme téléchargé avec succès!");
      })
      .catch((error) => {
        toast.error("Erreur lors du téléchargement du PDF!");
        console.error(error);
      });
  };
  // DOWNLOAD DIPLOME PDF

  const downloadPiecesPDF = (fileID) => {
    downloadFileRequest(fileID)
      .then((response) => {
        const url = window.URL.createObjectURL(new Blob([response.data]));
        const link = document.createElement("a");
        link.href = url;
        link.setAttribute("download", `${doctorInfos?.cni?.nom}`);
        document.body.appendChild(link);
        link.click();
        toast.success("Piéce d'identité téléchargée avec succès!");
      })
      .catch((error) => {
        toast.error("Erreur lors du téléchargement du PDF!");
        console.error(error);
      });
  };

  /**
   * TABLE
   */

  const TableItem = ({ item, index }) => {
    return (
      <tr key={item.id}>
        <td>{index}</td>
        <td>{item.nomComplet}</td>
        <td>{item.emil}</td>
        <td>{item.numeroTelephone}</td>
        <td>{item.lieuNaissance}</td>
        <td>{item.lieuResidence}</td>
        <td>{item.statut}</td>
        <td className="flex items-end justify-end space-x-1">
          <Tooltip title="Plus d'informations">
            <button
              className="btn btn-sm btn-circle bg-[#E9E9E9] rounded-lg"
              onClick={() => openDrawerToViewMoreInfos(item)}
            >
              <img src={eye} alt="" className="w-5 h-5" />
            </button>
          </Tooltip>
        </td>
      </tr>
    );
  };

  useEffect(() => {
    fecthDoctersListe();
  }, []);

  return (
    <div className="relative">
      {/* DRAWER */}

      <Drawer
        open={openDrawer}
        anchor={"right"}
        onClose={() => setOpenDrawer(false)}
      >
        <Box sx={{ width: 500, margin: 2 }} role="presentation">
          <div className="font-extrabold text-3xl mb-8 text-black">
            <h1>
              Informations de:
              <span className="text-emerald-600">
                {" "}
                {doctorInfos?.nomComplet || "Docteur inconnu"}
              </span>
            </h1>
          </div>

          <div>
            <h1 className="text-sm my-3 font-semibold text-emerald-600">
              DONNÉES PERSONNELLES
            </h1>

            <div className="p-2 bg-gray-100 border rounded-lg mb-2 flex justify-between items-center">
              <div>
                <p className="font-medium text-gray-600">
                  Nom & prénoms:{" "}
                  <span className="text-gray-950 text-sm font-normal">
                    {doctorInfos?.nomComplet || "Non specifiés"}
                  </span>
                </p>
                <p className="font-medium text-gray-600">
                  Sexe:{" "}
                  <span className="text-gray-950 text-sm font-normal">
                    {doctorInfos?.sexe || "Non specifié"}
                  </span>
                </p>

                <p className="font-medium text-gray-600">
                  Date de naissance:{" "}
                  <span className="text-gray-950 text-sm font-normal">
                    {doctorInfos?.dateNaissance || "Non specifié"}
                  </span>
                </p>

                <p className="font-medium text-gray-600">
                  Lieu de naissance:{" "}
                  <span className="text-gray-950 text-sm font-normal">
                    {doctorInfos?.lieuNaissance || "Non specifié"}
                  </span>
                </p>
                <p className="font-medium text-gray-600">
                  Lieu de residence:{""}
                  <span className="text-gray-950 text-sm font-normal">
                    {doctorInfos?.lieuResidence || "Non specifié"}
                  </span>
                </p>
              </div>
            </div>

            <h1 className="text-sm my-3 font-semibold text-emerald-600">
              RESERVE AUX DOCTEURS EN SITUATION DE GLISSEMENT CATEGORIEL (CG)
            </h1>

            <div className="p-2 bg-gray-100 border rounded-lg mb-2 flex justify-between items-center">
              <div>
                <p className="font-medium text-gray-600">
                  Matricule:{" "}
                  <span className="text-gray-950 text-sm font-normal">
                    {doctorInfos?.infosPersonnelles?.matricule
                      ? doctorInfos.infosPersonnelles.matricule
                      : "Non spécifié"}
                  </span>
                </p>
                <p className="font-medium text-gray-600">
                  Fonction:{" "}
                  <span className="text-gray-950 font-normal">
                    {doctorInfos?.infosPersonnelles?.fonction
                      ? doctorInfos.infosPersonnelles.fonction
                      : "Non spécifiée"}
                  </span>
                </p>

                <p className="font-medium text-gray-600">
                  Ministère d'origine:{" "}
                  <span className="text-gray-950 font-normal">
                    {doctorInfos?.infosPersonnelles?.ministereOrigine
                      ? doctorInfos.infosPersonnelles.ministereOrigine
                      : "Non spécifié"}
                  </span>
                </p>

                <p className="font-medium text-gray-600">
                  Service:{" "}
                  <span className="text-gray-950 font-normal">
                    {doctorInfos?.infosPersonnelles?.service
                      ? doctorInfos.infosPersonnelles.service
                      : "Non spécifiée"}
                  </span>
                </p>
              </div>
            </div>

            <h1 className="text-sm my-3 font-semibold text-emerald-600">
              INFORMATIONS ACADÉMIQUES
            </h1>

            <div className="p-2 bg-gray-100 border rounded-lg mb-2 flex justify-between items-center">
              <div>
                <p className="font-medium text-gray-600">
                  Université:{" "}
                  <span className="text-gray-950 text-sm font-normal">
                    {doctorInfos?.infosAcademiques?.universite
                      ? doctorInfos.infosAcademiques.universite
                      : "Non spécifié"}
                  </span>
                </p>
                <p className="font-medium text-gray-600">
                  Filière:{" "}
                  <span className="text-gray-950 font-normal">
                    {doctorInfos?.infosAcademiques?.filiere
                      ? doctorInfos.infosAcademiques.filiere
                      : "Filière non spécifiée"}
                  </span>
                </p>

                <p className="font-medium text-gray-600">
                  Spécialité:{" "}
                  <span className="text-gray-950 font-normal">
                    {doctorInfos?.infosAcademiques?.specialite ||
                      "Spécialité non spécifiée"}
                  </span>
                </p>
                <p className="font-medium text-gray-600">
                  Théme de la these:{" "}
                  <span className="text-gray-950 font-normal">
                    {doctorInfos?.infosAcademiques?.themeThese ||
                      "Théme non spécifié"}
                  </span>
                </p>

                <p className="font-medium text-gray-600">
                  Date de soutenance:{" "}
                  <span className="text-gray-950 font-normal">
                    {doctorInfos?.infosAcademiques?.dateSoutenance ||
                      "Spécialité non spécifiée"}
                  </span>
                </p>
              </div>
            </div>

            <h1 className="text-sm my-3 font-semibold text-emerald-600">
              ATTENTES EN MATIERE DE RECRUTEMENT
            </h1>

            <div className="p-2 bg-gray-100 border rounded-lg mb-2 flex gap-2 items-start">
              <h1 className="font-medium text-gray-600 flex items-center">
                Type de Postes Souhaités:
              </h1>
              <div>
                {doctorInfos?.postesDesires?.map((attente, index) => (
                  <div key={index} className="mb-2">
                    <div>
                      <span className="text-gray-950 text-sm font-normal">
                        {attente}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <h1 className="text-sm my-3 font-semibold text-emerald-600">
              PROPOSITION DE VALORISATION DU DIPLÔME
            </h1>

            <div className="p-2 bg-gray-100 border rounded-lg mb-2 flex items-start gap-2">
              <h1 className="font-medium text-gray-600 flex items-center">
                Opportunités souhaités:
              </h1>
              <div>
                {doctorInfos?.opportunites?.map((opportunite, index) => (
                  <div key={index} className="mb-2">
                    <div>
                      <span className="text-gray-950 text-sm font-normal">
                        {opportunite}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <h1 className="text-sm my-3 font-semibold text-emerald-600">
              DOCUMENTS
            </h1>

            <div className="p-2 bg-gray-100 border rounded-lg mb-2 flex gap-2 items-start">
              <div className="font-medium text-gray-600 flex gap-4 items-center">
                Diplome:{""}
                <span
                  className="text-customBluePure cursor-pointer bg-blue-100 text-sm px-2 py-1 rounded-md font-medium"
                  onClick={() => downloadDiplomePDF(doctorInfos?.diplome?.id)}
                >
                  Télécharger le PDF
                </span>
              </div>

              <div className="font-medium cursor-pointer text-gray-600 gap-4 flex items-center">
                Piéce:{""}
                <span
                  className="text-orange-600 bg-orange-100 text-sm px-2 py-1 rounded-md font-medium "
                  onClick={() => downloadPiecesPDF(doctorInfos?.cni?.id)}
                >
                  Télécharger le PDF
                </span>
              </div>
            </div>
          </div>
        </Box>
      </Drawer>

      <div className="flex items-center mt-5 justify-between">
        <h1 className="font-extrabold uppercase text-3xl">
          Liste des réponses reçues
        </h1>
      </div>
      <div className="my-7">
        <hr className="text-gray-950" />
      </div>
      <div className="flex gap-3">
        <input
          value={seachParam}
          onChange={(event) => setSeachParam(event.target.value)}
          type="text"
          placeholder="Rechercher..."
          className="input input-bordered h-10 input-sm w-full max-w-64"
        />

        <button
          className=" bg-emerald-600 text-white px-4 h-10 rounded-md "
          onClick={() => fecthDoctersListe()}
        >
          Rechercher
        </button>
        <button
          className=" bg-black text-white px-4 h-10 rounded-md "
          onClick={() => exportData()}
        >
          Exporter
        </button>
      </div>

      {/* Tableau des utilisateurs */}

      <div className="overflow-x-auto mt-5">
        <table className="table table-zebra bg-white border">
          {/* head */}
          <thead>
            <tr className="bg-black/90 text-white">
              <th className="text-base font-medium">N°</th>
              <th className="text-base font-medium">Nom & prénoms</th>
              <th className="text-base font-medium">Adress email</th>
              <th className="text-base font-medium">Téléphone</th>
              <th className="text-base font-medium">Lieu de naissance</th>
              <th className="text-base font-medium">Lieu de residence</th>
              <th className="text-base font-medium">Status</th>
              <th className="text-base font-medium">Actions</th>
            </tr>
          </thead>
          <tbody>
            {loading ? (
              <tr>
                <td colSpan={7}>
                  <div className="my-7 flex items-center justify-center">
                    <CircularProgress color="inherit" />
                  </div>
                </td>
              </tr>
            ) : null}

            {!loading &&
              usersList.length > 0 &&
              usersList.map((item, index) => (
                <TableItem item={item} index={index} />
              ))}

            {!loading && usersList.length === 0 ? (
              <tr>
                <td colSpan={7}>
                  <div className="h-16">
                    <p className="text-gray-600 mt-5 text-lg font-semibold text-center">
                      Aucun donnée trouvée.
                    </p>
                  </div>
                </td>
              </tr>
            ) : null}
          </tbody>
        </table>
      </div>

      {/* PAGIANATION */}

      <div className="flex justify-end mt-9">
        <Pagination
          count={pageQuery.nombrePages}
          page={pageQuery.pagePagination}
          variant="outlined"
          shape="rounded"
          onChange={loadMoreUsersListe}
        />
      </div>
    </div>
  );
}
