import * as React from "react";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Fade from "@mui/material/Fade";
import { Step, StepLabel, Stepper } from "@mui/material";
import General from "./grille-prestataire/General";
import GeneralData from "./grille-prestataire/GeneralData";
import Questions from "./grille-prestataire/Questions";
import QuestionSanitaire from "./Etablissement-sanitaire/QuestionSanitaire";
import GeneralSanitaire from "./Etablissement-sanitaire/GeneralSanitaire";
import GeneralDataSanitaire from "./Etablissement-sanitaire/GeneralDataSanitaire";
import GeneralUsagers from "./Usagers/GeneralUsagers";
import QuestionnaireUsagers from "./Usagers/QuestionnaireUsagers";
import { ThreeDots } from "react-loader-spinner";

export default function FadeMenu() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [grillePrestataireSoinsIndexStep, setGrillePrestataireSoinsIndexStep] =
    React.useState(1);
  const [etablissementSanitaireIndexStep, setEtablissementSanitaireIndexStep] =
    React.useState(1);
  const [usagersIndexStep, setUsagersIndexStep] = React.useState(1);
  const [activeStepPrestataire, setActiveStepPrestaire] = React.useState(0);
  const [
    activeStepEtablissementSanitaire,
    setActiveStepEtablissementSanitaire,
  ] = React.useState(0);

  const [activeStepUsagers, setActiveStepUsagers] = React.useState(0);

  const [globalDataPrestataire, setGlobalDataPrestataire] = React.useState({
    region: "",
    district: "",
    nom_structure: "",
    service_soin: "",
    responsable_structure: "",
    date_signature: "",
    nom_agent: "",
    prenoms_agent: "",
    fonction_agent: "",
    specialite: "",
    service: "",
    contact: "",
    date_enquete: "",
    heure_debut_enquete: "",
    heure_fin_enquete: "",
    annee_exercice_profession: "",
    specialisation: "",
    sexe: "",
    tranches_d_age: "",
    connaissance_telemedicine: "",
    utilisation_telemedicine_soins_materiel_et_infantile: "",
    connaissance_pma: "",
    connaissance_pma_centre: "",
    coût_ideal_echographie: "",
    coût_ideal_Electrocardiogramme: "",
    elements_de_motivation_pour_pratique_de_telemedecine: "",
    exercez_vous_une_activite_de_telemedicine: "",
  });

  const [globalDataSanitaire, setGlobalDataSanitaire] = React.useState({
    REGION: "",
    DISTRICT: "",
    NOM_STRUCTURE: "",
    SERVICE_SOIN: "",
    RESPONSABLE_STRUCTURE: "",
    DATE_SIGNATURE: "",
    NOM_AGENT: "",
    PRENOMS_AGENT: "",
    FONCTION_AGENT: "",
    SPECIALITE: "",
    SERVICE: "",
    CONTACT: "",
    DATE_ENQUETE: "",
    HEURE_DEBUT_ENQUETE: "",
    HEURE_FIN_ENQUETE: "",
    NOMBRE_DE_MEDECIN: "",
    MEDECIN_SPECILISTE_GYNECO_OBSTETRIQUE: "",
    MEDECIN_SPECILISTE_PEDIATRE: "",
    MEDECIN_SPECILISTE_CARDIOLOGIE: "",
    NOMBRE_DE_SAGE_FEMMES: "",
    SAGE_FEMMES_SPECILISTE_GYNECO_OBSTETRIQUE: "",
    SAGE_FEMMES_SPECILISTE_PEDIATRE: "",
    SAGE_FEMMES_SPECILISTE_CARDIOLOGIE: "",
    NOMBRE_DE_INFIRMIER: "",
    INFIRMIER_SPECILISTE_GYNECO_OBSTETRIQUE: "",
    INFIRMIER_SPECILISTE_PEDIATRE: "",
    INFIRMIER_SPECILISTE_CARDIOLOGIE: "",
    AUTRE: "",
    PERONNEL_D_APPUI: "",
    AIDE_SOIGNANTES: "",
    AUXILIAIRES_DE_SOIN: "",
    AGENTS_AYANT_COMPETENCE_MINIMAL_EN_INFORMATIQUE: "",
    AGENTS_FORMES_EN_TELEMEDECINE_OU_LA_SANTE_NUMERIQUE: "",
    NOMBRE_DE_MEDECIN_FORME_EN_TELEMEDECINE_OU_LA_SANTE_NUMERIQUE: "",
    NOMBRE_DE_INFIRMIER_FORME_EN_TELEMEDECINE_OU_LA_SANTE_NUMERIQUE: "",
    NOMBRE_DE_SAGE_FEMME_FORME_EN_TELEMEDECINE_OU_LA_SANTE_NUMERIQUE: "",
    AUTRE_PERSONNONEL_FORME: "",
    EXISTANCE_D_INFORMATICIEN_DANS_L_HÔPITAL: "",
    SI_OUI_SON_CONTACT: "",
    ETABLISSEMENT_SANITAIRE_EST_RACCORDE_AU_RESEAU: "",
    COUPURE_FREQUENTES_ELECTRICITE: "",
    GRAVITE_DE_LA_SITUATION: "",
    EXISTANCE_AUTRE_SOURCE_ALTERNATIVE_D_ENERGIE: "",
    SI_OUI_LAQUELLE: "",
    RYTHME_ET_DUREE_MOYENNE_DE_COUPURE: "",
    BUREAUX_DE_CONSULTATION_MEDECIN_DISPONIBLE: "",
    BUREAUX_DE_CONSULTATION_INFIRMIER_DISPONIBLE: "",
    BUREAUX_DE_CONSULTATION_SAGES_FEMME_DISPONIBLE: "",
    EXISTANCE_DE_LOCAL_POUR_TELEMEDECINE: "",
    POSSIBILITE_D_AMENAGEMENT_POUR_TELEMEDECINE: "",
    SECURITE_DES_EQUIPEMENTS_TIC: "",
    MESURES_SECURITAIRES_DES_EQUIPEMENTS_TIC: "",
    BESOINS_DE_RENFORCEMENT: "",
    DISPONNIBILITE_D_EQUIPEMENTS_TIC: "",
    NOMBRE_DE_LATOP: "",
    NOMBRE_DE_TABLETTE: "",
    NOMBRE_DE_DESKTOP: "",
    NOMBRE_DE_SMARTPHONE: "",
    AUTRE_EQUIPEMENT: "",
    EXISTANCE_DE_LIGNE_TELEPHONIQUE_FIXE: "",
    NUMERO_DE_TELEPHONIQUE: "",
    EXISTANCE_DE_LIGNE_TELEPHONIQUE_MOBILE: "",

    NUMERO_DE_TELEPHONIQUE_MOBILE: "",
    LIGNE_TELEPHONIQUE_FONCTIONNE24_24: "",
    OPERATEUR_TELEPHONIQUE_FIXED_ET_MOBILE: "",
    DISPONIBILITE_DE_INTERNET: "",
    TYPE_DE_CONNEXION_INTERNET: "",
    CONNEXION_INTERNET_MOBILE_OU_FIXED: "",
    PUISSANCE_DE_LA_CONNEXION_INTERNET: "",
    DEBIT_ASCENDANT_ET_DESCENDANT: "",
    MATERNITE_CONNECTE_A_INTERNET: "",
    DISPONIBILITE_EQUIPEMENT_BIOMEDICAUX: "",
    EQUIPEMENT_BIOMEDICAUX_FONCTIONNELS: "",
    EXISTANCE_DE_PROJET_DE_TELEMEDECINE: "",
    DESCRIPTION_BIEVEMENT: "",
    TELEMEDECINE_DANS_LE_PASSE: "",
    DECRIRE_BRIEVEMENT: "",
    // PATOLOGIE_SPECIALITE_PRIORITAIRE: "",
    // SERVICE_CONSULTATION_DISPONIBLE: "",
    CONSULTATION_PARAMEDICALES: "",
    POSTES_MEDECINE_GENERALE_DISPONIBLE: "",
    POSTES_URGENCE_DISPONIBLE: "",
    POSTES_BLOC_OPERATOIRE_DISPONIBLE: "",
    POSTES_MEDECINE_GYNECO_OBSTETRIQUE_DISPONIBLE: "",
    AUTRE_POSTES_MEDECINE_DISPONIBLE: "",
    // SERICES_MEDICOS_TECHNIQUE: "",
    NOMBRE_DE_CONSULTAION_ANNEE_DERNIERE: "",
    PATIENT_REFERE_DANS_L_ANNEE: "",
    PATHOLOGIE_FREQUENT: "",
    PATIENT_REFERE_REÇU_PAR_AN: "",
    MULTIPLE_CHECKBOX: {
      MEDECINE_GENERALE: false,
      PEDIATRIE: false,
      GYNECO: false,
      CARDIOLOGIE: false,
      DERMATOLOGIE: false,
      PSYCHIATRIE: false,
      RUTMATOLOGIE: false,
      CHURIGIEGENRALE: false,
      BLOC_OPERATOIRE: false,
      URGENCE: false,
      PHAMARCIE: false,
      LABORATOIRE: false,
      RADIOLOGIE: false,
      AUTRE_SERVIICES: false,
      CABINET_DENTAIRE: false,
      OPHTAMOLOGIE: false,
    },
  });

  const [usagersData, setUsagersData] = React.useState({
    REGION: "",
    DISTRICT: "",
    LOCALITE: "",
    PROFESSION: "",
    SEXE: "",
    AGE: "",
    NOMBRE_DE_ENFANT: "",
    FOUCHETTE_DE_REVENUE_ESTIME: "",
    QUI_PAIE_LES_FRAIS: "",
    TRANCHE_AGE: "",
    MOTIVATION_POUR_TELEMEDECINE: "",
    ACTIVITE_REGULIERE_TELEMEDECINE: "",
    CONNAISSANCE_FAMILIER_TELEMEDECINE: "",

    UTILISATION_TELEMEDECINE_POUR_MATERNITE_FAMILIER_TELEMEDECINE: "",

    OBSTACLE_CULTURELLE: "",
    STRATEGIE: "",
    RECOURS_TELEMEDECINE: "",
    CONFORT_AVEC_TELEMEDECINE: "",

    SERVICE_TELEMEDECINE: "",
    AUTRE_CHOSE: "",
    PREOCUPATION_TELEMEDECINE: "",
    TELEMEDECINE_BENEFIQUE: "",
    POSSESSION_SMARTPHONE: "",
    SI_NON_POURQUOI: "",
    ATTITUDE_TELEMEDECINE: "",

    PREFERENCE_SOIN: "",
    POURQUOI: "",
    SECURITE_DES_INFORMATIONS: "",
    PREFERENCE_CONSULTATION: "",
    FRAIS_DE_SANTE: "",
    PRIX_POUR_TELEMEDECINE: "",
    SIX_MILLE_POUR_TELEMEDECINE: "",
  });
  const [loading, setloading] = React.useState(false);
  const [modalIsClose, setModalIsClose] = React.useState(false);

  const [checked, setChecked] = React.useState({
    PATOLOGIE_SPECIALITE_PRIORITAIRE: false,
    SERVICE_CONSULTATION_DISPONIBLE: false,
    SERICES_MEDICOS_TECHNIQUE: false,
  });

  const handleCheck = (keyParent, keyEnfant, value) => {
    setGlobalDataSanitaire((checked) => {
      return {
        ...checked,
        [keyParent]: {
          ...checked[keyParent],
          [keyEnfant]: value,
        },
      };
    });
  };

  const open = Boolean(anchorEl);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClosePrestation = () => {
    document.getElementById("prestataireModal").showModal();
    setAnchorEl(null);
  };

  const handleCloseEtablissementSanitaire = () => {
    document.getElementById("etablissementSanitaireModal").showModal();
    setAnchorEl(null);
  };

  const handleCloseUsager = () => {
    document.getElementById("usagerModale").showModal();
    setAnchorEl(null);
  };

  // Navigation buttons for the GrillePrestataireModal

  const handleNext = () => {
    setActiveStepPrestaire((prevActiveStep) => prevActiveStep + 1);
    setGrillePrestataireSoinsIndexStep((prevIndex) => prevIndex + 1);
    console.log(grillePrestataireSoinsIndexStep);
  };

  const handleBack = () => {
    setActiveStepPrestaire((prevActiveStep) => prevActiveStep - 1);
    setGrillePrestataireSoinsIndexStep((prevIndex) => prevIndex - 1);
  };

  // Navigation buttons for the etablissementSanitaireModal

  const handleNextOnEtablissementSanitaireModal = () => {
    setActiveStepEtablissementSanitaire((prevActiveStep) => prevActiveStep + 1);
    setEtablissementSanitaireIndexStep((prevIndex) => prevIndex + 1);
  };

  const handleBackOnEtablissementSanitaireModal = () => {
    setActiveStepEtablissementSanitaire((prevActiveStep) => prevActiveStep - 1);
    setEtablissementSanitaireIndexStep((prevIndex) => prevIndex - 1);
  };

  // Navigation buttons for the UsagersModal

  const handleNextOnUsagersModal = () => {
    setActiveStepUsagers((prevActiveStep) => prevActiveStep + 1);
    setUsagersIndexStep((prevIndex) => prevIndex + 1);
  };

  const handleBackOnUsagersModal = () => {
    setActiveStepUsagers((prevActiveStep) => prevActiveStep - 1);
    setUsagersIndexStep((prevIndex) => prevIndex - 1);
  };

  const handleReset = () => {
    document.getElementById("prestataireModal").close();
  };
  const handleCancelSanitaireForm = () => {
    document.getElementById("etablissementSanitaireModal").close();
  };
  const handleCancelUsagersForm = () => {
    document.getElementById("usagerModale").close();
  };

  const updateGlobalState = (key, value) => {
    setGlobalDataPrestataire((prev) => ({
      ...prev,
      [key]: value,
    }));
  };

  const updateGlobalSanitaireState = (key, value) => {
    setGlobalDataSanitaire((globalDataSanitaire) => ({
      ...globalDataSanitaire,
      [key]: value,
    }));
  };

  const updateUsagersGlobalState = (key, value) => {
    setUsagersData((usagersData) => ({
      ...usagersData,
      [key]: value,
    }));
  };

  const saveForm = () => {
    setloading(true);
    setTimeout(() => {
      setloading(false);

      document.getElementById("prestataireModal").close();
      setModalIsClose(true);
    }, 2000);
  };

  const saveSanitaireForm = () => {
    setloading(true);
    setTimeout(() => {
      setloading(false);

      document.getElementById("etablissementSanitaireModal").close();
      setModalIsClose(true);
    }, 2000);
  };

  const saveUsagersForm = () => {
    setloading(true);
    setTimeout(() => {
      setloading(false);

      document.getElementById("usagerModale").close();
    }, 2000);
  };

  const steps = [
    {
      label: "GENERAL",
    },
    {
      label: "DONNEES GENERALES",
    },
    {
      label: "QUESTIONNAIRE",
    },
    {
      label: "ENREGISTRER",
    },
  ];

  const stepsSanitaire = [
    {
      label: "GENERAL",
    },
    {
      label: "DONNEES GENERALES",
    },
    {
      label: "QUESTIONNAIRE",
    },
    {
      label: "CONFIRMER",
    },
  ];

  const stepsUsagers = [
    {
      label: "GENERAL",
    },
    {
      label: "QUESTIONNAIRE",
    },
    {
      label: "ENREGISTRER",
    },
  ];

  return (
    <div>
      <div>
        <Button
          id="fade-button"
          aria-controls={open ? "fade-menu" : undefined}
          aria-haspopup="true"
          aria-expanded={open ? "true" : undefined}
          onClick={handleClick}
          className=" border rounded-md px-3"
          sx={{
            borderRadius: 2,
            backgroundColor: "#344B7B",
            color: "white",
            fontSize: "16px",
            fontWeight: "bold",
            cursor: "pointer",
            "&:hover": {
              backgroundColor: "#344B7B",
              color: "white",
            },
            textTransform: "lowercase",
          }}
        >
          Creer un Formulaire
        </Button>
        <Menu
          id="fade-menu"
          MenuListProps={{
            "aria-labelledby": "fade-button",
          }}
          anchorEl={anchorEl}
          open={open}
          onClose={() => setAnchorEl(null)}
          TransitionComponent={Fade}
          sx={{
            borderRadius: 7,
          }}
        >
          <MenuItem onClick={handleClosePrestation}>
            Grille de prestation de soins
          </MenuItem>
          <MenuItem onClick={handleCloseEtablissementSanitaire}>
            Etablissement sanitaire{" "}
          </MenuItem>
          <MenuItem onClick={handleCloseUsager}>Usager</MenuItem>
        </Menu>
      </div>

      {/* 
MODAL POUR ETABLISSEMENT PRESTATAIRE */}

      <dialog id="prestataireModal" className="modal">
        <div className="modal-box text-black max-w-4xl h-[600px] p-2 ">
          <form method="dialog">
            <button className="z-50 btn btn-sm btn-circle btn-ghost absolute right-7 top-2">
              ✕
            </button>
          </form>
          <div className="w-full h-full flex items-start gap-2 ">
            {/* STEPPER */}
            <div className="relative w-72 h-full p-2 border-r-2">
              <div className="mb-5">
                <h1 className="font-extrabold text-md text-customBluePure">
                  Grille de prestation de soins
                </h1>
              </div>
              <Stepper
                activeStep={activeStepPrestataire}
                orientation="vertical"
                className="mt-12"
              >
                {steps.map((step) => (
                  <Step key={step.label}>
                    <StepLabel>{step.label}</StepLabel>
                  </Step>
                ))}
              </Stepper>
              <div className="absolute bottom-0">
                <button
                  className="w-32 h-9 bg-green-400 text-white rounded-md"
                  onClick={() => console.log("AZERTY", globalDataPrestataire)}
                >
                  Brouillon
                </button>

                <button
                  className="mt-5 w-32 h-9 bg-red-600 rounded-md text-white"
                  onClick={handleReset}
                >
                  Annuler
                </button>
              </div>
            </div>

            {/* CONTENT */}
            <div className="relative w-full h-full overflow-y-auto">
              <div>
                {grillePrestataireSoinsIndexStep === 1 ? (
                  <General
                    globalState={globalDataPrestataire}
                    updateGlobalState={updateGlobalState}
                  />
                ) : null}
                {grillePrestataireSoinsIndexStep === 2 ? (
                  <GeneralData
                    globalState={globalDataPrestataire}
                    updateGlobalState={updateGlobalState}
                  />
                ) : null}
                {grillePrestataireSoinsIndexStep === 3 ? (
                  <Questions
                    globalState={globalDataPrestataire}
                    updateGlobalState={updateGlobalState}
                  />
                ) : null}

                {grillePrestataireSoinsIndexStep === 4 ? (
                  <div className="pt-4">
                    <h1 className="text-2xl font-bold">
                      Confirmer cet enregistrement
                    </h1>
                    <p className="mt-5 text-lg w-10/12">
                      Confirmer l'enregistrement de ce formulaire avec toutes
                      les informations saisies. Vous pouvez l'ajouter aux
                      brouillons et terminer l'enregistrement plus tard.
                    </p>
                  </div>
                ) : null}
              </div>

              {/* LOGIQUE DE NAVIGATION */}
              <div className="flex items-center justify-start mt-5 pb-8 gap-2">
                {grillePrestataireSoinsIndexStep === 2 && (
                  <button
                    onClick={handleBack}
                    disabled={loading}
                    className=" bg-gray-300 rounded-md  w-32 h-9  text-black font-semibold "
                  >
                    Précédent
                  </button>
                )}

                {grillePrestataireSoinsIndexStep === 3 && (
                  <button
                    onClick={handleBack}
                    disabled={loading}
                    className=" bg-gray-300 rounded-md w-32 h-9  text-black font-semibold "
                  >
                    Précédent
                  </button>
                )}
                {grillePrestataireSoinsIndexStep === 4 && (
                  <button
                    onClick={handleBack}
                    disabled={loading}
                    className=" bg-gray-300 rounded-md w-32 h-9  text-black font-semibold "
                  >
                    Précédent
                  </button>
                )}

                {grillePrestataireSoinsIndexStep === 1 && (
                  <button
                    onClick={handleNext}
                    className=" bg-customYellow rounded-md text-black font-semibold w-32 h-9 "
                  >
                    Suivant
                  </button>
                )}
                {grillePrestataireSoinsIndexStep === 2 && (
                  <button
                    onClick={handleNext}
                    className=" bg-customYellow rounded-md text-black font-semibold w-32 h-9 "
                  >
                    Suivant
                  </button>
                )}
                {grillePrestataireSoinsIndexStep === 3 && (
                  <button
                    onClick={handleNext}
                    className=" bg-customYellow rounded-md text-black font-semibold w-32 h-9 "
                  >
                    Suivant
                  </button>
                )}

                {grillePrestataireSoinsIndexStep === 4 && (
                  <button
                    className=" bg-customBluePure rounded-md text-white font-semibold w-44 h-9 "
                    onClick={saveForm}
                    disabled={loading}
                  >
                    Enregistrer formulaire
                    {loading ? (
                      <div className="text-center">
                        <ThreeDots
                          visible={true}
                          height="80"
                          width="80"
                          color="#344B7B"
                          radius="9"
                          fontSize="12"
                          ariaLabel="three-dots-loading"
                          wrapperStyle={{
                            position: "absolute",
                            top: "50%",
                            left: "50%",
                            transform: "translate(-50%, -50%)",
                            textalign: "center",
                          }}
                          wrapperClass=""
                        />
                      </div>
                    ) : null}
                  </button>
                )}
              </div>
            </div>
          </div>
        </div>
      </dialog>

      {/* 
MODAL POUR ETABLISSEMENT SANITAIRE */}
      <dialog id="etablissementSanitaireModal" className="modal">
        <div className="modal-box text-black max-w-4xl h-[600px] p-2 ">
          <form method="dialog">
            <button className="z-50 btn btn-sm btn-circle btn-ghost absolute right-7 top-2">
              ✕
            </button>
          </form>
          <div className=" w-full h-full flex items-start gap-2 ">
            {/* STEPPER */}
            <div className="relative w-72 h-full p-2 border-r-2">
              <div className="mb-5">
                <h1 className="font-extrabold text-md text-customBluePure">
                  Etablissement sanitaire
                </h1>
              </div>
              <Stepper
                activeStep={activeStepEtablissementSanitaire}
                orientation="vertical"
                className="mt-12"
              >
                {stepsSanitaire.map((step, index) => (
                  <Step key={step.label}>
                    <StepLabel>{step.label}</StepLabel>
                  </Step>
                ))}
              </Stepper>

              <div className="absolute bottom-0">
                <button
                  className="w-32 h-9 bg-green-400 rounded-md text-white"
                  onClick={() => console.log("AZERTY", globalDataSanitaire)}
                >
                  Brouillon
                </button>
                <button
                  className="mt-5 w-32 h-9 bg-red-600 rounded-md text-white"
                  onClick={handleCancelSanitaireForm}
                >
                  Annuler
                </button>
              </div>
            </div>

            {/* CONTENT */}
            <div className="relative  w-full h-full overflow-y-auto">
              <div>
                {etablissementSanitaireIndexStep === 1 ? (
                  <GeneralSanitaire
                    globalState={globalDataSanitaire}
                    updateGlobalState={updateGlobalSanitaireState}
                  />
                ) : null}
                {etablissementSanitaireIndexStep === 2 ? (
                  <GeneralDataSanitaire
                    globalState={globalDataSanitaire}
                    updateGlobalState={updateGlobalSanitaireState}
                  />
                ) : null}
                {etablissementSanitaireIndexStep === 3 ? (
                  <QuestionSanitaire
                    globalState={globalDataSanitaire}
                    updateGlobalState={updateGlobalSanitaireState}
                    handleCheck={handleCheck}
                    checked={checked}
                  />
                ) : null}
              </div>
              {/* 
              LOGIQUE DE NAVIGATION */}
              <div className="flex items-center justify-start mt-5 pb-8 gap-2">
                {etablissementSanitaireIndexStep === 2 && (
                  <button
                    onClick={handleBackOnEtablissementSanitaireModal}
                    disabled={loading}
                    className=" bg-gray-300 rounded-md  w-32 h-9  text-black font-semibold "
                  >
                    Précédent
                  </button>
                )}

                {etablissementSanitaireIndexStep === 3 && (
                  <button
                    onClick={handleBackOnEtablissementSanitaireModal}
                    disabled={loading}
                    className=" bg-gray-300 rounded-md w-32 h-9  text-black font-semibold "
                  >
                    Précédent
                  </button>
                )}
                {etablissementSanitaireIndexStep === 4 && (
                  <button
                    onClick={handleBackOnEtablissementSanitaireModal}
                    disabled={loading}
                    className=" bg-gray-300 rounded-md w-32 h-9  text-black font-semibold "
                  >
                    Précédent
                  </button>
                )}

                {etablissementSanitaireIndexStep === 1 && (
                  <button
                    onClick={handleNextOnEtablissementSanitaireModal}
                    className=" bg-customYellow rounded-md text-black font-semibold w-32 h-9 "
                  >
                    Suivant
                  </button>
                )}
                {etablissementSanitaireIndexStep === 2 && (
                  <button
                    onClick={handleNextOnEtablissementSanitaireModal}
                    className=" bg-customYellow rounded-md text-black font-semibold w-32 h-9 "
                  >
                    Suivant
                  </button>
                )}
                {etablissementSanitaireIndexStep === 3 && (
                  <button
                    onClick={handleNextOnEtablissementSanitaireModal}
                    className=" bg-customYellow rounded-md text-black font-semibold w-32 h-9 "
                  >
                    Suivant
                  </button>
                )}

                {etablissementSanitaireIndexStep === 4 && (
                  <button
                    className=" bg-customBluePure rounded-md text-white font-semibold w-44 h-9 "
                    onClick={saveSanitaireForm}
                    disabled={loading}
                  >
                    Enregistrer formulaire
                    {loading ? (
                      <div className="text-center">
                        <ThreeDots
                          visible={true}
                          height="80"
                          width="80"
                          color="#344B7B"
                          radius="9"
                          fontSize="12"
                          ariaLabel="three-dots-loading"
                          wrapperStyle={{
                            position: "absolute",
                            top: "50%",
                            left: "50%",
                            transform: "translate(-50%, -50%)",
                            textalign: "center",
                          }}
                          wrapperClass=""
                        />
                      </div>
                    ) : null}
                  </button>
                )}
              </div>
            </div>
          </div>
        </div>
      </dialog>

      {/* MODAL POUR USAGER*/}
      <dialog id="usagerModale" className="modal">
        <div className="modal-box text-black max-w-4xl h-[600px] p-2 ">
          <form method="dialog">
            <button className="z-50 btn btn-sm btn-circle btn-ghost absolute right-7 top-2">
              ✕
            </button>
          </form>
          <div className=" w-full h-full flex items-start gap-2 ">
            {/* STEPPER */}
            <div className="relative w-72 h-full p-2 border-r-2">
              <div className="mb-5">
                <h1 className="font-extrabold text-md text-customBluePure">
                  Usagers
                </h1>
              </div>
              <Stepper
                activeStep={activeStepUsagers}
                orientation="vertical"
                className="mt-12"
              >
                {stepsUsagers.map((step) => (
                  <Step key={step.label}>
                    <StepLabel>{step.label}</StepLabel>
                  </Step>
                ))}
              </Stepper>
              <div className="absolute bottom-0">
                <button
                  className="w-32 h-9 bg-green-400 text-white"
                  onClick={() => console.log("AZERTY", usagersData)}
                >
                  LOG
                </button>
                <button
                  className="mt-5 w-32 h-9 bg-red-600 text-white"
                  onClick={handleCancelUsagersForm}
                >
                  Annuler
                </button>
              </div>
            </div>

            {/* CONTENT */}
            <div className="relative w-full h-full overflow-y-auto">
              <div>
                {usagersIndexStep === 1 ? (
                  <GeneralUsagers
                    globalState={usagersData}
                    updateGlobalState={updateUsagersGlobalState}
                  />
                ) : null}
                {usagersIndexStep === 2 ? (
                  <QuestionnaireUsagers
                    globalState={usagersData}
                    updateGlobalState={updateUsagersGlobalState}
                  />
                ) : null}
              </div>

              <div className="flex items-center justify-start mt-5 pb-8 gap-2">
                {usagersIndexStep === 2 && (
                  <button
                    onClick={handleBackOnUsagersModal}
                    disabled={loading}
                    className=" bg-gray-300  w-32 h-9  text-black font-semibold "
                  >
                    Précédent
                  </button>
                )}

                {usagersIndexStep === 1 && (
                  <button
                    onClick={handleNextOnUsagersModal}
                    className=" bg-customYellow text-black font-semibold w-32 h-9 "
                  >
                    Suivant
                  </button>
                )}
                {usagersIndexStep === 2 && (
                  <button
                    onClick={handleNextOnUsagersModal}
                    className=" bg-customYellow text-black font-semibold w-32 h-9 "
                  >
                    Suivant
                  </button>
                )}
                {usagersIndexStep === 3 && (
                  <button
                    onClick={handleBackOnUsagersModal}
                    disabled={loading}
                    className=" bg-gray-300  w-32 h-9  text-black font-semibold "
                  >
                    Précédent
                  </button>
                )}

                {usagersIndexStep === 3 && (
                  <button
                    className=" bg-customBluePure text-white font-semibold w-44 h-9 "
                    onClick={saveUsagersForm}
                    disabled={loading}
                  >
                    Enregistrer formulaire
                    {loading ? (
                      <div className="text-center">
                        <ThreeDots
                          visible={true}
                          height="80"
                          width="80"
                          color="#344B7B"
                          radius="9"
                          fontSize="12"
                          ariaLabel="three-dots-loading"
                          wrapperStyle={{
                            position: "absolute",
                            top: "50%",
                            left: "50%",
                            transform: "translate(-50%, -50%)",
                            textalign: "center",
                          }}
                          wrapperClass=""
                        />
                      </div>
                    ) : null}
                  </button>
                )}
              </div>
            </div>
          </div>
        </div>
      </dialog>
    </div>
  );
}
