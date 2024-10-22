import {
  Checkbox,
  FormControl,
  FormControlLabel,
  FormGroup,
  Radio,
  RadioGroup,
} from "@mui/material";
import React from "react";

export default function QuestionSanitaire({
  updateGlobalState,
  globalState,
  handleCheck,
  checked,
}) {
  return (
    <div className="mt-5">
      <div>
        <h1 className="text-customBluePure text-2xl font-bold">
          Questionnaires
        </h1>
        <div className="Experience">
          <p className="text-customBluePure  font-semibold mt-4">
            A-Ressources huamaines dissponibles dans le centre/le service
          </p>

          <div className="bloc1">
            <div className="phoneNumber">
              <label className="form-control w-full ">
                <div className="label">
                  <span className="label-text text-gray-600 font-semibold">
                    1-Nombre de medecins
                  </span>
                </div>
                <input
                  value={globalState.NOMBRE_DE_MEDECIN}
                  onChange={(e) =>
                    updateGlobalState("NOMBRE_DE_MEDECIN", e.target.value)
                  }
                  name="medecin"
                  type="text"
                  placeholder="Ex: 2 Médecins"
                  className="input input-bordered w-full"
                />
              </label>
            </div>

            <div className="mt-4">
              <h1>2-Médecins spécialistes (nombre)</h1>
            </div>

            <div className="birthday_nationnality flex items-center gap-4">
              <label className="form-control w-full max-w-xs">
                <div className="label">
                  <span className="label-text text-gray-600 font-semibold">
                    Gynéco-obstétrique:
                  </span>
                </div>
                <input
                  value={globalState.MEDECIN_SPECILISTE_GYNECO_OBSTETRIQUE}
                  onChange={(e) =>
                    updateGlobalState(
                      "MEDECIN_SPECILISTE_GYNECO_OBSTETRIQUE",
                      e.target.value
                    )
                  }
                  name="gyneco"
                  type="text"
                  placeholder="Ex : 3 gynéco-ostériques"
                  className="input input-bordered w-full max-w-xs"
                />
              </label>

              <label className="form-control w-full max-w-xs">
                <div className="label">
                  <span className="label-text text-gray-600 font-semibold">
                    Pédiatrie:
                  </span>
                </div>
                <input
                  value={globalState.MEDECIN_SPECILISTE_PEDIATRE}
                  onChange={(e) =>
                    updateGlobalState(
                      "MEDECIN_SPECILISTE_PEDIATRE",
                      e.target.value
                    )
                  }
                  type="text"
                  name="pediatre"
                  placeholder="Ex: 1 pédiatre"
                  className="input input-bordered w-full max-w-xs"
                />
              </label>

              <label className="form-control w-full max-w-xs">
                <div className="label">
                  <span className="label-text text-gray-600 font-semibold">
                    Cardiologie :
                  </span>
                </div>
                <input
                  value={globalState.MEDECIN_SPECILISTE_CARDIOLOGIE}
                  onChange={(e) =>
                    updateGlobalState(
                      "MEDECIN_SPECILISTE_CARDIOLOGIE",
                      e.target.value
                    )
                  }
                  type="text"
                  name="cadiologue"
                  placeholder="Ex: 2 cardiologues"
                  className="input input-bordered w-full max-w-xs"
                />
              </label>
            </div>
          </div>

          <div className="phoneNumber">
            <label className="form-control w-full ">
              <div className="label">
                <span className="label-text text-gray-600 font-semibold">
                  3-Nombre de sage femmes
                </span>
              </div>
              <input
                value={globalState.NOMBRE_DE_SAGE_FEMMES}
                onChange={(e) =>
                  updateGlobalState("NOMBRE_DE_SAGE_FEMMES", e.target.value)
                }
                name="sageFemmes"
                type="text"
                placeholder="Ex :7 sages femmes"
                className="input input-bordered w-full"
              />
            </label>
          </div>
          <div className="mt-4">
            <h1>4-Sages femmes spécialistes (nombre)</h1>
          </div>
          <div className="birthday_nationnality flex items-center gap-4">
            <label className="form-control w-full max-w-xs">
              <div className="label">
                <span className="label-text text-gray-600 font-semibold">
                  Gynéco-obstétrique:
                </span>
              </div>
              <input
                value={globalState.SAGE_FEMMES_SPECILISTE_GYNECO_OBSTETRIQUE}
                onChange={(e) =>
                  updateGlobalState(
                    "SAGE_FEMMES_SPECILISTE_GYNECO_OBSTETRIQUE",
                    e.target.value
                  )
                }
                name="sageFemmme"
                type="text"
                placeholder="Ex: 3 gynéco-obstétrique"
                className="input input-bordered w-full max-w-xs"
              />
            </label>

            <label className="form-control w-full max-w-xs">
              <div className="label">
                <span className="label-text text-gray-600 font-semibold">
                  Pédiatrie:
                </span>
              </div>
              <input
                value={globalState.SAGE_FEMMES_SPECILISTE_PEDIATRE}
                onChange={(e) =>
                  updateGlobalState(
                    "SAGE_FEMMES_SPECILISTE_PEDIATRE",
                    e.target.value
                  )
                }
                type="text"
                name="pediatre"
                placeholder="Ex: 1 pédiatrie"
                className="input input-bordered w-full max-w-xs"
              />
            </label>

            <label className="form-control w-full max-w-xs">
              <div className="label">
                <span className="label-text text-gray-600 font-semibold">
                  Cardiologie :
                </span>
              </div>
              <input
                value={globalState.INFIRMIER_SPECILISTE_GYNECO_OBSTETRIQUE}
                onChange={(e) =>
                  updateGlobalState(
                    "SAGE_FEMMES_SPECILISTE_CARDIOLOGIE",
                    e.target.value
                  )
                }
                type="text"
                name="cadiologue"
                placeholder="Ex: 4 cardiologues"
                className="input input-bordered w-full max-w-xs"
              />
            </label>
          </div>

          <div className="bloc_infirmier">
            <div className="phoneNumber">
              <label className="form-control w-full ">
                <div className="label">
                  <span className="label-text text-gray-600 font-semibold">
                    5-Infimiers (nombre)
                  </span>
                </div>
                <input
                  value={globalState.NOMBRE_DE_INFIRMIER}
                  onChange={(e) =>
                    updateGlobalState("NOMBRE_DE_INFIRMIER", e.target.value)
                  }
                  name="infirmier"
                  type="text"
                  placeholder="Ex: 5 Infimiers"
                  className="input input-bordered w-full"
                />
              </label>
            </div>
            <div className="mt-4">
              <h1>6-Infirmier spécialistes (nombre)</h1>
            </div>

            <div className="birthday_nationnality flex flex-col gap-4">
              <label className="form-control w-full max-w-xs">
                <div className="label">
                  <span className="label-text text-gray-600 font-semibold">
                    Gynéco-obstétrique:
                  </span>
                </div>
                <input
                  value={globalState.INFIRMIER_SPECILISTE_GYNECO_OBSTETRIQUE}
                  onChange={(e) =>
                    updateGlobalState(
                      "INFIRMIER_SPECILISTE_GYNECO_OBSTETRIQUE",
                      e.target.value
                    )
                  }
                  name="gynéco-obstét"
                  type="texte"
                  placeholder="Ex 2 gyneco-obstéttrique"
                  className="input input-bordered w-full max-w-xs"
                />
              </label>

              <label className="form-control w-full max-w-xs">
                <div className="label">
                  <span className="label-text text-gray-600 font-semibold">
                    Pédiatrie:
                  </span>
                </div>
                <input
                  value={globalState.INFIRMIER_SPECILISTE_PEDIATRE}
                  onChange={(e) =>
                    updateGlobalState(
                      "INFIRMIER_SPECILISTE_PEDIATRE",
                      e.target.value
                    )
                  }
                  type="text"
                  name="pediatre"
                  placeholder="Ex: 4 pédiatres"
                  className="input input-bordered w-full max-w-xs"
                />
              </label>

              <label className="form-control w-full max-w-xs">
                <div className="label">
                  <span className="label-text text-gray-600 font-semibold">
                    Cardiologie :
                  </span>
                </div>
                <input
                  value={globalState.INFIRMIER_SPECILISTE_CARDIOLOGIE}
                  onChange={(e) =>
                    updateGlobalState(
                      "INFIRMIER_SPECILISTE_CARDIOLOGIE",
                      e.target.value
                    )
                  }
                  type="text"
                  name="cardiologie"
                  placeholder="Ex: 2 cardiologues"
                  className="input input-bordered w-full max-w-xs"
                />
              </label>
              <label className="form-control w-full max-w-xs">
                <div className="label">
                  <span className="label-text text-gray-600 font-semibold">
                    Autre :
                  </span>
                </div>
                <input
                  value={globalState.AUTRE}
                  onChange={(e) => updateGlobalState("AUTRE", e.target.value)}
                  type="text"
                  name="ohter"
                  placeholder="Ex:"
                  className="input input-bordered w-full max-w-xs"
                />
              </label>
            </div>
          </div>

          <div className="bloc_personnel_appui">
            <div className="phoneNumber">
              <label className="form-control w-full ">
                <div className="label">
                  <span className="label-text text-gray-600 font-semibold">
                    7-Personnel d'appui (nombre)
                  </span>
                </div>
                <input
                  value={globalState.PERONNEL_D_APPUI}
                  onChange={(e) =>
                    updateGlobalState("PERONNEL_D_APPUI", e.target.value)
                  }
                  name="personnel"
                  type="text"
                  placeholder="Ex: 7 Personnels d'appui"
                  className="input input-bordered w-full"
                />
              </label>
            </div>
            {/* <div className="mt-4">
              <h1>6-Infirmier spécialistes (nombre)</h1>
            </div> */}

            <div className="birthday_nationnality flex items-center gap-4">
              <label className="form-control w-full max-w-xs">
                <div className="label">
                  <span className="label-text text-gray-600 font-semibold">
                    Aide soignantes:
                  </span>
                </div>
                <input
                  value={globalState.AIDE_SOIGNANTES}
                  onChange={(e) =>
                    updateGlobalState("AIDE_SOIGNANTES", e.target.value)
                  }
                  name="aide"
                  type="text"
                  placeholder="Ex: 12 Aide soignantes"
                  className="input input-bordered w-full max-w-xs"
                />
              </label>

              <label className="form-control w-full max-w-xs">
                <div className="label">
                  <span className="label-text text-gray-600 font-semibold">
                    Auxiliaire de soins:
                  </span>
                </div>
                <input
                  value={globalState.AUXILIAIRES_DE_SOIN}
                  onChange={(e) =>
                    updateGlobalState("AUXILIAIRES_DE_SOIN", e.target.value)
                  }
                  type="text"
                  name="auxiliaire"
                  placeholder="Ex: 4 auxiliaires"
                  className="input input-bordered w-full max-w-xs"
                />
              </label>
            </div>
          </div>

          <div className="personnel_former">
            <FormControl>
              <div
                id="demo-row-radio-buttons-group-label"
                className="text-black font-semibold mt-2"
              >
                <FormControl>
                  <div
                    id="demo-row-radio-buttons-group-label"
                    className="text-black font-semibold mt-2"
                  >
                    8-Existe-t-il des agents ayant des compétences minimales en
                    informatique ?
                  </div>
                  <RadioGroup
                    row
                    aria-labelledby="demo-row-radio-buttons-group-label"
                    name="row-radio-buttons-group"
                    className="flex flex-col"
                    value={
                      globalState.AGENTS_AYANT_COMPETENCE_MINIMAL_EN_INFORMATIQUE
                    }
                    onChange={(e) =>
                      updateGlobalState(
                        "AGENTS_AYANT_COMPETENCE_MINIMAL_EN_INFORMATIQUE",
                        e.target.value
                      )
                    }
                  >
                    <div className="flex flex-col">
                      <FormControlLabel
                        value="Oui"
                        control={<Radio />}
                        label="Oui"
                      />

                      <FormControlLabel
                        value="Non"
                        control={<Radio />}
                        label="Non"
                      />
                    </div>
                  </RadioGroup>
                </FormControl>
              </div>
            </FormControl>
          </div>

          <div className="personnel_former_en_télémedecine">
            <FormControl>
              <div
                id="demo-row-radio-buttons-group-label"
                className="text-black font-semibold mt-2"
              >
                <FormControl>
                  <div
                    id="demo-row-radio-buttons-group-label"
                    className="text-black font-semibold mt-2"
                  >
                    9-Existe-t-il des agents formés sur la télémédecine ou la
                    santé numérique ?
                  </div>
                  <RadioGroup
                    row
                    aria-labelledby="demo-row-radio-buttons-group-label"
                    name="row-radio-buttons-group"
                    className="flex flex-col"
                    value={
                      globalState.AGENTS_FORMES_EN_TELEMEDECINE_OU_LA_SANTE_NUMERIQUE
                    }
                    onChange={(e) =>
                      updateGlobalState(
                        "AGENTS_FORMES_EN_TELEMEDECINE_OU_LA_SANTE_NUMERIQUE",
                        e.target.value
                      )
                    }
                  >
                    <div className="flex flex-col">
                      <FormControlLabel
                        value="Oui"
                        control={<Radio />}
                        label="Oui"
                      />

                      <FormControlLabel
                        value="Non"
                        control={<Radio />}
                        label="Non"
                      />
                    </div>
                  </RadioGroup>
                </FormControl>
              </div>
            </FormControl>
          </div>

          <div className="profil_and_number">
            <div className="mt-4">
              <h1 className="font-semibold">
                10-Si oui, profils et combien ? (nombre)
              </h1>
            </div>
            <div className="birthday_nationnality flex flex-col gap-4">
              <label className="form-control w-full max-w-xs">
                <div className="label">
                  <span className="label-text text-gray-600 font-semibold">
                    médecin :
                  </span>
                </div>
                <input
                  value={
                    globalState.NOMBRE_DE_MEDECIN_FORME_EN_TELEMEDECINE_OU_LA_SANTE_NUMERIQUE
                  }
                  onChange={(e) =>
                    updateGlobalState(
                      "NOMBRE_DE_MEDECIN_FORME_EN_TELEMEDECINE_OU_LA_SANTE_NUMERIQUE",
                      e.target.value
                    )
                  }
                  name="sageFemmme"
                  type="text"
                  placeholder="Ex: 3 médecin"
                  className="input input-bordered w-full max-w-xs"
                />
              </label>

              <label className="form-control w-full max-w-xs">
                <div className="label">
                  <span className="label-text text-gray-600 font-semibold">
                    Infimier:
                  </span>
                </div>
                <input
                  value={
                    globalState.NOMBRE_DE_INFIRMIER_FORME_EN_TELEMEDECINE_OU_LA_SANTE_NUMERIQUE
                  }
                  onChange={(e) =>
                    updateGlobalState(
                      "NOMBRE_DE_INFIRMIER_FORME_EN_TELEMEDECINE_OU_LA_SANTE_NUMERIQUE",
                      e.target.value
                    )
                  }
                  type="text"
                  name="pediatre"
                  placeholder="Ex: 1 Infimier"
                  className="input input-bordered w-full max-w-xs"
                />
              </label>

              <label className="form-control w-full max-w-xs">
                <div className="label">
                  <span className="label-text text-gray-600 font-semibold">
                    Sage-femme :
                  </span>
                </div>
                <input
                  value={
                    globalState.NOMBRE_DE_SAGE_FEMME_FORME_EN_TELEMEDECINE_OU_LA_SANTE_NUMERIQUE
                  }
                  onChange={(e) =>
                    updateGlobalState(
                      "NOMBRE_DE_SAGE_FEMME_FORME_EN_TELEMEDECINE_OU_LA_SANTE_NUMERIQUE",
                      e.target.value
                    )
                  }
                  type="text"
                  name="cadiologue"
                  placeholder="Ex: 4  Sage-femme "
                  className="input input-bordered w-full max-w-xs"
                />
              </label>
              <label className="form-control w-full max-w-xs">
                <div className="label">
                  <span className="label-text text-gray-600 font-semibold">
                    Autre:
                  </span>
                </div>
                <input
                  value={globalState.AUTRE_PERSONNONEL_FORME}
                  onChange={(e) =>
                    updateGlobalState("AUTRE_PERSONNONEL_FORME", e.target.value)
                  }
                  type="text"
                  name="cadiologue"
                  placeholder="Ex: 4 cardiologues"
                  className="input input-bordered w-full max-w-xs"
                />
              </label>
            </div>
          </div>

          <div className="informaticien_dans_le_service">
            <FormControl>
              <div
                id="demo-row-radio-buttons-group-label"
                className="text-black font-semibold mt-2"
              >
                <FormControl>
                  <div
                    id="demo-row-radio-buttons-group-label"
                    className="text-black font-semibold mt-2"
                  >
                    11-Existe-t-il un informaticien dans l’hôpital ou le service
                    ?
                  </div>
                  <RadioGroup
                    row
                    aria-labelledby="demo-row-radio-buttons-group-label"
                    name="row-radio-buttons-group"
                    className="flex flex-col"
                    value={globalState.EXISTANCE_D_INFORMATICIEN_DANS_L_HÔPITAL}
                    onChange={(e) =>
                      updateGlobalState(
                        "EXISTANCE_D_INFORMATICIEN_DANS_L_HÔPITAL",
                        e.target.value
                      )
                    }
                  >
                    <div className="flex flex-col">
                      <FormControlLabel
                        value="Oui"
                        control={<Radio />}
                        label="Oui"
                      />

                      <FormControlLabel
                        value="Non"
                        control={<Radio />}
                        label="Non"
                      />
                    </div>
                  </RadioGroup>
                </FormControl>
              </div>
            </FormControl>
          </div>

          <div className="contact_informaticien">
            <div className="mt-4">
              <h1 className="font-semibold">12-Si oui, son contact</h1>
            </div>

            <label className="form-control w-full max-w-xs">
              <div className="label">
                <span className="label-text text-gray-600 font-semibold">
                  Contact Informaticien :
                </span>
              </div>
              <input
                value={globalState.SI_OUI_SON_CONTACT}
                onChange={(e) =>
                  updateGlobalState("SI_OUI_SON_CONTACT", e.target.value)
                }
                name="sageFemmme"
                type="text"
                placeholder="Ex: 05 77 77 77 05"
                className="input input-bordered w-full max-w-xs"
              />
            </label>
          </div>
        </div>
        <div className="disponinlité_de_l_energie">
          <p className="text-customBluePure  font-semibold mt-4">
            B-Disponibilié de l'energie dans le centre ou le centre
          </p>

          <div className="presence_de_cie">
            <FormControl>
              <div
                id="demo-row-radio-buttons-group-label"
                className="text-black font-semibold mt-2"
              >
                <FormControl>
                  <div
                    id="demo-row-radio-buttons-group-label"
                    className="text-black font-semibold mt-2"
                  >
                    13-L’établissement sanitaire est raccordé au réseau
                    électrique national (compagnie ivoirienne d’électricité –
                    CIE) ?
                  </div>
                  <RadioGroup
                    row
                    aria-labelledby="demo-row-radio-buttons-group-label"
                    name="row-radio-buttons-group"
                    className="flex flex-col"
                    value={
                      globalState.ETABLISSEMENT_SANITAIRE_EST_RACCORDE_AU_RESEAU
                    }
                    onChange={(e) =>
                      updateGlobalState(
                        "ETABLISSEMENT_SANITAIRE_EST_RACCORDE_AU_RESEAU",
                        e.target.value
                      )
                    }
                  >
                    <div className="flex flex-col">
                      <FormControlLabel
                        value="Oui"
                        control={<Radio />}
                        label="Oui"
                      />

                      <FormControlLabel
                        value="Non"
                        control={<Radio />}
                        label="Non"
                      />
                    </div>
                  </RadioGroup>
                </FormControl>
              </div>
            </FormControl>
          </div>

          <div className="coupure_frequentes_?">
            <FormControl>
              <div
                id="demo-row-radio-buttons-group-label"
                className="text-black font-semibold mt-2"
              >
                <FormControl>
                  <div
                    id="demo-row-radio-buttons-group-label"
                    className="text-black font-semibold mt-2"
                  >
                    14-Si oui y-a-t-il des coupures fréquentes d’électricités ?
                  </div>
                  <RadioGroup
                    row
                    aria-labelledby="demo-row-radio-buttons-group-label"
                    name="row-radio-buttons-group"
                    className="flex flex-col"
                    value={globalState.COUPURE_FREQUENTES_ELECTRICITE}
                    onChange={(e) =>
                      updateGlobalState(
                        "COUPURE_FREQUENTES_ELECTRICITE",
                        e.target.value
                      )
                    }
                  >
                    <div className="flex flex-col">
                      <FormControlLabel
                        value="Oui"
                        control={<Radio />}
                        label="Oui"
                      />

                      <FormControlLabel
                        value="Non"
                        control={<Radio />}
                        label="Non"
                      />
                    </div>
                  </RadioGroup>
                </FormControl>
              </div>
            </FormControl>
          </div>

          <div className="gravites_de_la_situation">
            <FormControl>
              <div
                id="demo-row-radio-buttons-group-label"
                className="text-black font-semibold mt-2"
              >
                <FormControl>
                  <div
                    id="demo-row-radio-buttons-group-label"
                    className="text-black font-semibold mt-2"
                  >
                    15-Quel est la gravité de la situation (durée moyenne des
                    coupures, fréquences des coupures etc.) ; à indiquer sur une
                    échelle par ordre de grandeur : 1-2-3-4-5 ?
                  </div>

                  <textarea
                    className="textarea textarea-bordered m-2"
                    placeholder="Votre reponse ici..."
                    value={globalState.GRAVITE_DE_LA_SITUATION}
                    onChange={(e) =>
                      updateGlobalState(
                        "GRAVITE_DE_LA_SITUATION",
                        e.target.value
                      )
                    }
                  ></textarea>
                </FormControl>
              </div>
            </FormControl>
          </div>

          <div className="autres_source_alternative_d_energie">
            <FormControl>
              <div
                id="demo-row-radio-buttons-group-label"
                className="text-black font-semibold mt-2"
              >
                <FormControl>
                  <div
                    id="demo-row-radio-buttons-group-label"
                    className="text-black font-semibold mt-2"
                  >
                    16-Existe-t-il une autre source alternative d’énergie dans
                    l’établissement ? <br /> si oui laquelle ?
                  </div>
                  <RadioGroup
                    row
                    aria-labelledby="demo-row-radio-buttons-group-label"
                    name="row-radio-buttons-group"
                    className="flex flex-col"
                    value={
                      globalState.EXISTANCE_AUTRE_SOURCE_ALTERNATIVE_D_ENERGIE
                    }
                    onChange={(e) =>
                      updateGlobalState(
                        "EXISTANCE_AUTRE_SOURCE_ALTERNATIVE_D_ENERGIE",
                        e.target.value
                      )
                    }
                  >
                    <div className="flex flex-col">
                      <FormControlLabel
                        value="Oui"
                        control={<Radio />}
                        label="Oui"
                      />

                      <FormControlLabel
                        value="Non"
                        control={<Radio />}
                        label="Non"
                      />
                    </div>
                  </RadioGroup>
                </FormControl>
              </div>
            </FormControl>
          </div>

          <div className="autres_source_alternative_d_energie">
            <FormControl>
              <div
                id="demo-row-radio-buttons-group-label"
                className="text-black font-semibold mt-2"
              >
                <FormControl>
                  <div
                    id="demo-row-radio-buttons-group-label"
                    className="text-black font-semibold mt-2"
                  >
                    17-Si oui laquelle ?
                  </div>
                  <RadioGroup
                    row
                    aria-labelledby="demo-row-radio-buttons-group-label"
                    name="row-radio-buttons-group"
                    className="flex flex-col"
                    value={globalState.SI_OUI_LAQUELLE}
                    onChange={(e) =>
                      updateGlobalState("SI_OUI_LAQUELLE", e.target.value)
                    }
                  >
                    <div className="flex flex-col">
                      <FormControlLabel
                        value="Groupe_electrogenes"
                        control={<Radio />}
                        label="Groupe électrogènes"
                      />

                      <FormControlLabel
                        value="Energie_solaire"
                        control={<Radio />}
                        label="Energie solaire"
                      />
                      <FormControlLabel
                        value="Energie_biomasse"
                        control={<Radio />}
                        label="Energie biomasse"
                      />

                      <FormControlLabel
                        value="autre"
                        control={<Radio />}
                        label="autre"
                      />
                    </div>
                  </RadioGroup>
                </FormControl>
              </div>
            </FormControl>
          </div>

          <div className="rythme_de_coupure">
            <FormControl>
              <div
                id="demo-row-radio-buttons-group-label"
                className="text-black font-semibold mt-2"
              >
                <FormControl>
                  <div
                    id="demo-row-radio-buttons-group-label"
                    className="text-black font-semibold mt-2"
                  >
                    18- Y-t-il des coupures ? si oui quelle est le rythme et la
                    durée moyenne des coupures en heure ?
                  </div>

                  <textarea
                    className="textarea textarea-bordered m-2"
                    placeholder="Votre reponse"
                    value={globalState.RYTHME_ET_DUREE_MOYENNE_DE_COUPURE}
                    onChange={(e) =>
                      updateGlobalState(
                        "RYTHME_ET_DUREE_MOYENNE_DE_COUPURE",
                        e.target.value
                      )
                    }
                  ></textarea>
                </FormControl>
              </div>
            </FormControl>
          </div>
        </div>

        <div className="disposition_des_batiments">
          <p className="text-customBluePure  font-semibold mt-4">
            C-Batiment et services du centre/service
          </p>

          <div className="bureau_de_coonsultaion_medecin">
            <label className="form-control w-full max-w-xs">
              <div className="label">
                <span className="label-text text-gray-600 font-semibold">
                  18-Combien de bureaux de consultation médecins sont-ils
                  disponibles ?
                </span>
              </div>
              <input
                value={globalState.BUREAUX_DE_CONSULTATION_MEDECIN_DISPONIBLE}
                onChange={(e) =>
                  updateGlobalState(
                    "BUREAUX_DE_CONSULTATION_MEDECIN_DISPONIBLE",
                    e.target.value
                  )
                }
                type="text"
                name="name"
                placeholder="Ex: 5 bureaux"
                className="input input-bordered w-full max-w-xs"
              />
            </label>
          </div>
          <div className="bureau_de_coonsultaion_infirmier">
            <label className="form-control w-full max-w-xs">
              <div className="label">
                <span className="label-text text-gray-600 font-semibold">
                  19-Combien de bureaux de consultation infirmier sont-ils
                  disponibles ?
                </span>
              </div>
              <input
                value={globalState.BUREAUX_DE_CONSULTATION_INFIRMIER_DISPONIBLE}
                onChange={(e) =>
                  updateGlobalState(
                    "BUREAUX_DE_CONSULTATION_INFIRMIER_DISPONIBLE",
                    e.target.value
                  )
                }
                type="text"
                name="name"
                placeholder="Ex: 5 bureaux"
                className="input input-bordered w-full max-w-xs"
              />
            </label>
          </div>

          <div className="bureau_de_coonsultaion_sage_femme">
            <label className="form-control w-full max-w-xs">
              <div className="label">
                <span className="label-text text-gray-600 font-semibold">
                  20-Combien de bureaux de consultation sage femme sont-ils
                  disponibles ?
                </span>
              </div>
              <input
                value={
                  globalState.BUREAUX_DE_CONSULTATION_SAGES_FEMME_DISPONIBLE
                }
                onChange={(e) =>
                  updateGlobalState(
                    "BUREAUX_DE_CONSULTATION_SAGES_FEMME_DISPONIBLE",
                    e.target.value
                  )
                }
                type="text"
                name="name"
                placeholder="Ex: 5 bureaux"
                className="input input-bordered w-full max-w-xs"
              />
            </label>
          </div>

          <div className="existance_de_local_pour_telemedcine">
            <FormControl>
              <div
                id="demo-row-radio-buttons-group-label"
                className="text-black font-semibold mt-2"
              >
                <FormControl>
                  <div
                    id="demo-row-radio-buttons-group-label"
                    className="text-black font-semibold mt-2"
                  >
                    21-Existe-t-il un local pouvant être dédié au service de
                    télémédecine ?
                  </div>
                  <RadioGroup
                    row
                    aria-labelledby="demo-row-radio-buttons-group-label"
                    name="row-radio-buttons-group"
                    className="flex flex-col"
                    value={globalState.EXISTANCE_DE_LOCAL_POUR_TELEMEDECINE}
                    onChange={(e) =>
                      updateGlobalState(
                        "EXISTANCE_DE_LOCAL_POUR_TELEMEDECINE",
                        e.target.value
                      )
                    }
                  >
                    <div className="flex flex-col">
                      <FormControlLabel
                        value="Oui"
                        control={<Radio />}
                        label="Oui"
                      />

                      <FormControlLabel
                        value="Non"
                        control={<Radio />}
                        label="Non"
                      />
                    </div>
                  </RadioGroup>
                </FormControl>
              </div>
            </FormControl>
          </div>

          <div className="amenagement_pour_telemedecine">
            <FormControl>
              <div
                id="demo-row-radio-buttons-group-label"
                className="text-black font-semibold mt-2"
              >
                <FormControl>
                  <div
                    id="demo-row-radio-buttons-group-label"
                    className="text-black font-semibold mt-2"
                  >
                    22-Si non, la structure/service peut-elle dégager une salle
                    ou un espace pour les actes de télémédecine ?
                    téléconsultation, télé-expertises et autres
                  </div>

                  <textarea
                    className="textarea textarea-bordered m-2"
                    placeholder="Votre reponse ici..."
                    value={
                      globalState.POSSIBILITE_D_AMENAGEMENT_POUR_TELEMEDECINE
                    }
                    onChange={(e) =>
                      updateGlobalState(
                        "POSSIBILITE_D_AMENAGEMENT_POUR_TELEMEDECINE",
                        e.target.value
                      )
                    }
                  ></textarea>
                </FormControl>
              </div>
            </FormControl>
          </div>

          <div className="securité_pour_telemedecine">
            <FormControl>
              <div
                id="demo-row-radio-buttons-group-label"
                className="text-black font-semibold mt-2"
              >
                <FormControl>
                  <div
                    id="demo-row-radio-buttons-group-label"
                    className="text-black font-semibold mt-2"
                  >
                    23-La sécurité des équipements tic et des dispositifs de
                    télémédecine est-elle garantie dans l’établissement ?
                  </div>

                  <textarea
                    className="textarea textarea-bordered m-2"
                    placeholder="Votre reponse ici..."
                    value={globalState.SECURITE_DES_EQUIPEMENTS_TIC}
                    onChange={(e) =>
                      updateGlobalState(
                        "SECURITE_DES_EQUIPEMENTS_TIC",
                        e.target.value
                      )
                    }
                  ></textarea>
                </FormControl>
              </div>
            </FormControl>
          </div>

          <div className="mesure_de_securité_pour_telemedecine">
            <FormControl>
              <div
                id="demo-row-radio-buttons-group-label"
                className="text-black font-semibold mt-2"
              >
                <FormControl>
                  <div
                    id="demo-row-radio-buttons-group-label"
                    className="text-black font-semibold mt-2"
                  >
                    24-Si non quelles sont les mesures sécuritaires à prendre ou
                    à renforcer ?
                  </div>

                  <textarea
                    className="textarea textarea-bordered m-2"
                    placeholder="Votre reponse ici..."
                    value={globalState.MESURES_SECURITAIRES_DES_EQUIPEMENTS_TIC}
                    onChange={(e) =>
                      updateGlobalState(
                        "MESURES_SECURITAIRES_DES_EQUIPEMENTS_TIC",
                        e.target.value
                      )
                    }
                  ></textarea>
                </FormControl>
              </div>
            </FormControl>
          </div>

          <div className="besoin_pour_renforcer_telemedecine">
            <FormControl>
              <div
                id="demo-row-radio-buttons-group-label"
                className="text-black font-semibold mt-2"
              >
                <FormControl>
                  <div
                    id="demo-row-radio-buttons-group-label"
                    className="text-black font-semibold mt-2"
                  >
                    25-Quelles sont les besoins de renforcement de la sécurité
                    des équipements de télémédecine ?
                  </div>

                  <textarea
                    className="textarea textarea-bordered m-2"
                    placeholder="Votre reponse ici..."
                    value={globalState.BESOINS_DE_RENFORCEMENT}
                    onChange={(e) =>
                      updateGlobalState(
                        "BESOINS_DE_RENFORCEMENT",
                        e.target.value
                      )
                    }
                  ></textarea>
                </FormControl>
              </div>
            </FormControl>
          </div>
        </div>

        <div className="disponinlité_de_equipement_tic">
          <p className="text-customBluePure  font-semibold mt-4">
            D-Infrastructure et équipement TIC - telephonie-connexion internet
          </p>

          <div className="equipement_tic">
            <FormControl>
              <div
                id="demo-row-radio-buttons-group-label"
                className="text-black font-semibold mt-2"
              >
                <FormControl>
                  <div
                    id="demo-row-radio-buttons-group-label"
                    className="text-black font-semibold mt-2"
                  >
                    26-La structure/service dispose-t-elle d’équipements TIC ?
                  </div>
                  <RadioGroup
                    row
                    aria-labelledby="demo-row-radio-buttons-group-label"
                    name="row-radio-buttons-group"
                    className="flex flex-col"
                    value={globalState.DISPONNIBILITE_D_EQUIPEMENTS_TIC}
                    onChange={(e) =>
                      updateGlobalState(
                        "DISPONNIBILITE_D_EQUIPEMENTS_TIC",
                        e.target.value
                      )
                    }
                  >
                    <div className="flex flex-col">
                      <FormControlLabel
                        value="Oui"
                        control={<Radio />}
                        label="Oui"
                      />

                      <FormControlLabel
                        value="Non"
                        control={<Radio />}
                        label="Non"
                      />
                    </div>
                  </RadioGroup>
                </FormControl>
              </div>
            </FormControl>
          </div>

          <div className="equipement_tic_par_type">
            <div className="mt-4">
              <h1 className="font-semibold">
                27-Si oui combien par types ? (nombre)
              </h1>
            </div>

            <div className="birthday_nationnality flex items-center gap-4">
              <label className="form-control w-full max-w-xs">
                <div className="label">
                  <span className="label-text text-gray-600 font-semibold">
                    Latop:
                  </span>
                </div>
                <input
                  value={globalState.NOMBRE_DE_LATOP}
                  onChange={(e) =>
                    updateGlobalState("NOMBRE_DE_LATOP", e.target.value)
                  }
                  name="Latop"
                  type="text"
                  placeholder="Ex : 3 Latops"
                  className="input input-bordered w-full max-w-xs"
                />
              </label>

              <label className="form-control w-full max-w-xs">
                <div className="label">
                  <span className="label-text text-gray-600 font-semibold">
                    Tablettes:
                  </span>
                </div>
                <input
                  value={globalState.NOMBRE_DE_TABLETTE}
                  onChange={(e) =>
                    updateGlobalState("NOMBRE_DE_TABLETTE", e.target.value)
                  }
                  type="text"
                  name="Tablettes"
                  placeholder="Ex: 8 Tablettes"
                  className="input input-bordered w-full max-w-xs"
                />
              </label>

              <label className="form-control w-full max-w-xs">
                <div className="label">
                  <span className="label-text text-gray-600 font-semibold">
                    Desktop :
                  </span>
                </div>
                <input
                  value={globalState.NOMBRE_DE_DESKTOP}
                  onChange={(e) =>
                    updateGlobalState("NOMBRE_DE_DESKTOP", e.target.value)
                  }
                  type="text"
                  name="Desktop"
                  placeholder="Ex: 2 Desktop"
                  className="input input-bordered w-full max-w-xs"
                />
              </label>
              <label className="form-control w-full max-w-xs">
                <div className="label">
                  <span className="label-text text-gray-600 font-semibold">
                    Smartphone :
                  </span>
                </div>
                <input
                  value={globalState.NOMBRE_DE_SMARTPHONE}
                  onChange={(e) =>
                    updateGlobalState("NOMBRE_DE_SMARTPHONE", e.target.value)
                  }
                  type="text"
                  name="Smartphone"
                  placeholder="Ex: 2 Smartphone"
                  className="input input-bordered w-full max-w-xs"
                />
              </label>

              <label className="form-control w-full max-w-xs">
                <div className="label">
                  <span className="label-text text-gray-600 font-semibold">
                    Autres :
                  </span>
                </div>
                <input
                  value={globalState.AUTRE_EQUIPEMENT}
                  onChange={(e) =>
                    updateGlobalState("AUTRE_EQUIPEMENT", e.target.value)
                  }
                  type="text"
                  name="other"
                  placeholder="Ex: 2 ..."
                  className="input input-bordered w-full max-w-xs"
                />
              </label>
            </div>
          </div>

          <div className="disponibilité_ligne_téléphonique">
            <FormControl>
              <div
                id="demo-row-radio-buttons-group-label"
                className="text-black font-semibold mt-2"
              >
                <FormControl>
                  <div
                    id="demo-row-radio-buttons-group-label"
                    className="text-black font-semibold mt-2"
                  >
                    28-Existe-t-il une ligne téléphonique fixe dans le centre/le
                    service ?
                  </div>
                  <RadioGroup
                    row
                    aria-labelledby="demo-row-radio-buttons-group-label"
                    name="row-radio-buttons-group"
                    className="flex flex-col"
                    value={globalState.EXISTANCE_DE_LIGNE_TELEPHONIQUE_FIXE}
                    onChange={(e) =>
                      updateGlobalState(
                        "EXISTANCE_DE_LIGNE_TELEPHONIQUE_FIXE",
                        e.target.value
                      )
                    }
                  >
                    <div className="flex flex-col">
                      <FormControlLabel
                        value="Oui"
                        control={<Radio />}
                        label="Oui"
                      />

                      <FormControlLabel
                        value="Non"
                        control={<Radio />}
                        label="Non"
                      />
                    </div>
                  </RadioGroup>
                </FormControl>
              </div>
            </FormControl>
          </div>

          <div className="numero_ligne_téléphonique">
            <div className="mt-4">
              <h1 className="font-semibold">28-Si oui quel est le numéro ?</h1>
            </div>

            <div className="birthday_nationnality flex items-center gap-4">
              <label className="form-control w-full max-w-xs">
                <div className="label">
                  <span className="label-text text-gray-600 font-semibold">
                    Numéro
                  </span>
                </div>
                <input
                  value={globalState.NUMERO_DE_TELEPHONIQUE}
                  onChange={(e) =>
                    updateGlobalState("NUMERO_DE_TELEPHONIQUE", e.target.value)
                  }
                  name="Latop"
                  type="text"
                  placeholder="Ex: 07 55 555 555"
                  className="input input-bordered w-full max-w-xs"
                />
              </label>
            </div>
          </div>

          <div className="disponibilité_ligne_téléphonique">
            <FormControl>
              <div
                id="demo-row-radio-buttons-group-label"
                className="text-black font-semibold mt-2"
              >
                <FormControl>
                  <div
                    id="demo-row-radio-buttons-group-label"
                    className="text-black font-semibold mt-2"
                  >
                    29-Existe-t-il un numéro téléphonique mobile du
                    centre/service de santé ?
                  </div>
                  <RadioGroup
                    row
                    aria-labelledby="demo-row-radio-buttons-group-label"
                    name="row-radio-buttons-group"
                    className="flex flex-col"
                    value={globalState.EXISTANCE_DE_LIGNE_TELEPHONIQUE_MOBILE}
                    onChange={(e) =>
                      updateGlobalState(
                        "EXISTANCE_DE_LIGNE_TELEPHONIQUE_MOBILE",
                        e.target.value
                      )
                    }
                  >
                    <div className="flex flex-col">
                      <FormControlLabel
                        value="Oui"
                        control={<Radio />}
                        label="Oui"
                      />

                      <FormControlLabel
                        value="Non"
                        control={<Radio />}
                        label="Non"
                      />
                    </div>
                  </RadioGroup>
                </FormControl>
              </div>
            </FormControl>
          </div>

          <div className="numero_ligne_téléphonique">
            <div className="mt-4">
              <h1 className="font-semibold">30-Si oui quel est le numéro ?</h1>
            </div>

            <div className="birthday_nationnality flex items-center gap-4">
              <label className="form-control w-full max-w-xs">
                <div className="label">
                  <span className="label-text text-gray-600 font-semibold">
                    Numéro
                  </span>
                </div>
                <input
                  value={globalState.NUMERO_DE_TELEPHONIQUE_MOBILE}
                  onChange={(e) =>
                    updateGlobalState(
                      "NUMERO_DE_TELEPHONIQUE_MOBILE",
                      e.target.value
                    )
                  }
                  name="Latop"
                  type="text"
                  placeholder="Ex : 07 55 555 555"
                  className="input input-bordered w-full max-w-xs"
                />
              </label>
            </div>
          </div>

          <div className="disponibilité_24h">
            <FormControl>
              <div
                id="demo-row-radio-buttons-group-label"
                className="text-black font-semibold mt-2"
              >
                <FormControl>
                  <div
                    id="demo-row-radio-buttons-group-label"
                    className="text-black font-semibold mt-2"
                  >
                    31-Les lignes téléphoniques sont-elles fonctionnelles 24h/24
                    ? <br /> préciser ces lignes
                  </div>

                  <textarea
                    className="textarea textarea-bordered m-2"
                    placeholder="Votre reponse ici..."
                    value={globalState.LIGNE_TELEPHONIQUE_FONCTIONNE24_24}
                    onChange={(e) =>
                      updateGlobalState(
                        "LIGNE_TELEPHONIQUE_FONCTIONNE24_24",
                        e.target.value
                      )
                    }
                  ></textarea>
                </FormControl>
              </div>
            </FormControl>
          </div>

          <div className="operateur_mobiles_fixed">
            <FormControl>
              <div
                id="demo-row-radio-buttons-group-label"
                className="text-black font-semibold mt-2"
              >
                <FormControl>
                  <div
                    id="demo-row-radio-buttons-group-label"
                    className="text-black font-semibold mt-2"
                  >
                    32-Quels sont les opérateurs téléphoniques fixes et mobiles{" "}
                    <br />
                    dans le centre/service ?
                  </div>

                  <textarea
                    className="textarea textarea-bordered m-2"
                    placeholder="Votre reponse ici..."
                    value={globalState.OPERATEUR_TELEPHONIQUE_FIXED_ET_MOBILE}
                    onChange={(e) =>
                      updateGlobalState(
                        "OPERATEUR_TELEPHONIQUE_FIXED_ET_MOBILE",
                        e.target.value
                      )
                    }
                  ></textarea>
                </FormControl>
              </div>
            </FormControl>
          </div>

          <div className="disponibilité_internet_dans_le_service">
            <FormControl>
              <div
                id="demo-row-radio-buttons-group-label"
                className="text-black font-semibold mt-2"
              >
                <FormControl>
                  <div
                    id="demo-row-radio-buttons-group-label"
                    className="text-black font-semibold mt-2"
                  >
                    33-la connexion internet est-elle disponible dans le
                    centre/service ?
                  </div>
                  <RadioGroup
                    row
                    aria-labelledby="demo-row-radio-buttons-group-label"
                    name="row-radio-buttons-group"
                    className="flex flex-col"
                    value={globalState.DISPONIBILITE_DE_INTERNET}
                    onChange={(e) =>
                      updateGlobalState(
                        "DISPONIBILITE_DE_INTERNET",
                        e.target.value
                      )
                    }
                  >
                    <div className="flex flex-col">
                      <FormControlLabel
                        value="Oui"
                        control={<Radio />}
                        label="Oui"
                      />

                      <FormControlLabel
                        value="Non"
                        control={<Radio />}
                        label="Non"
                      />
                    </div>
                  </RadioGroup>
                </FormControl>
              </div>
            </FormControl>
          </div>

          <div className="operateur_mobiles_fixed">
            <FormControl>
              <div
                id="demo-row-radio-buttons-group-label"
                className="text-black font-semibold mt-2"
              >
                <FormControl>
                  <div
                    id="demo-row-radio-buttons-group-label"
                    className="text-black font-semibold mt-2"
                  >
                    34-Si oui la connexion internet est-elle mobile ? Pocket
                    wifi, box wifi ADSL, <br /> etc.
                  </div>

                  <textarea
                    className="textarea textarea-bordered m-2"
                    placeholder="Votre reponse ici..."
                    value={globalState.TYPE_DE_CONNEXION_INTERNET}
                    onChange={(e) =>
                      updateGlobalState(
                        "TYPE_DE_CONNEXION_INTERNET",
                        e.target.value
                      )
                    }
                  ></textarea>
                </FormControl>
              </div>
            </FormControl>
          </div>

          {/* TEXT AREA */}
          <div className="operateur_mobiles_fixed">
            <FormControl>
              <div
                id="demo-row-radio-buttons-group-label"
                className="text-black font-semibold mt-2"
              >
                <FormControl>
                  <div
                    id="demo-row-radio-buttons-group-label"
                    className="text-black font-semibold mt-2"
                  >
                    35-Si oui la connexion internet est-elle fixe ? Pocket wifi,
                    box wifi ADSL, fibre <br /> optique, Vsat etc.
                  </div>

                  <textarea
                    className="textarea textarea-bordered m-2"
                    placeholder="Votre reponse ici..."
                    value={globalState.CONNEXION_INTERNET_MOBILE_OU_FIXED}
                    onChange={(e) =>
                      updateGlobalState(
                        "CONNEXION_INTERNET_MOBILE_OU_FIXED",
                        e.target.value
                      )
                    }
                  ></textarea>
                </FormControl>
              </div>
            </FormControl>
          </div>

          <label className="form-control w-full max-w-xs">
            <div className="label">
              <span className="label-text text-black font-semibold">
                36-Quelle est la puissance de connexion (fixe et mobile
                disponible) ? 2g,3g, 4g, … (vérifiez la puissance de connexion
                sur le site speedtest.net)
              </span>
            </div>
            <input
              type="text"
              name="name"
              placeholder="Ex: 4g"
              className="input input-bordered w-full max-w-xs"
              value={globalState.PUISSANCE_DE_LA_CONNEXION_INTERNET}
              onChange={(e) =>
                updateGlobalState(
                  "PUISSANCE_DE_LA_CONNEXION_INTERNET",
                  e.target.value
                )
              }
            />
          </label>

          <div className="debit_ascendant">
            <FormControl>
              <div
                id="demo-row-radio-buttons-group-label"
                className="text-black font-semibold mt-2"
              >
                <FormControl>
                  <div
                    id="demo-row-radio-buttons-group-label"
                    className="text-black font-semibold mt-2"
                  >
                    37-Le débit ascendant et descendant est-il supérieur ou égal
                    à 2 Mbps ?
                  </div>
                  <RadioGroup
                    row
                    aria-labelledby="demo-row-radio-buttons-group-label"
                    name="row-radio-buttons-group"
                    className="flex flex-col"
                    value={globalState.DEBIT_ASCENDANT_ET_DESCENDANT}
                    onChange={(e) =>
                      updateGlobalState(
                        "DEBIT_ASCENDANT_ET_DESCENDANT",
                        e.target.value
                      )
                    }
                  >
                    <div className="flex flex-col">
                      <FormControlLabel
                        value="Oui"
                        control={<Radio />}
                        label="Oui"
                      />

                      <FormControlLabel
                        value="Non"
                        control={<Radio />}
                        label="Non"
                      />
                    </div>
                  </RadioGroup>
                </FormControl>
              </div>
            </FormControl>
          </div>

          <div className="debit_ascendant">
            <FormControl>
              <div
                id="demo-row-radio-buttons-group-label"
                className="text-black font-semibold mt-2"
              >
                <FormControl>
                  <div
                    id="demo-row-radio-buttons-group-label"
                    className="text-black font-semibold mt-2"
                  >
                    38-Le service de maternité tes-il connectés à internet ?
                  </div>
                  <RadioGroup
                    row
                    aria-labelledby="demo-row-radio-buttons-group-label"
                    name="row-radio-buttons-group"
                    className="flex flex-col"
                    value={globalState.MATERNITE_CONNECTE_A_INTERNET}
                    onChange={(e) =>
                      updateGlobalState(
                        "MATERNITE_CONNECTE_A_INTERNET",
                        e.target.value
                      )
                    }
                  >
                    <div className="flex flex-col">
                      <FormControlLabel
                        value="Oui"
                        control={<Radio />}
                        label="Oui"
                      />

                      <FormControlLabel
                        value="Non"
                        control={<Radio />}
                        label="Non"
                      />
                    </div>
                  </RadioGroup>
                </FormControl>
              </div>
            </FormControl>
          </div>
        </div>
        {/*
         *******************************
         *********************************
         ********************************
         *********************************
         ******************************** */}

        <div className="equipement_biomedicale_equipement_telemedecine">
          <p className="text-customBluePure  font-semibold mt-4">
            E-Equipement bio-medicaux dispositf de télémedecine-expéreince en
            télémedecine
          </p>

          <div className="personnel_former">
            <FormControl>
              <div
                id="demo-row-radio-buttons-group-label"
                className="text-black font-semibold mt-2"
              >
                <FormControl>
                  <div
                    id="demo-row-radio-buttons-group-label"
                    className="text-black font-semibold mt-2"
                  >
                    39-La structure/service dispose-t-elle d’équipements
                    biomédicaux ?
                  </div>
                  <RadioGroup
                    row
                    aria-labelledby="demo-row-radio-buttons-group-label"
                    name="row-radio-buttons-group"
                    className="flex flex-col"
                    value={globalState.DISPONIBILITE_EQUIPEMENT_BIOMEDICAUX}
                    onChange={(e) =>
                      updateGlobalState(
                        "DISPONIBILITE_EQUIPEMENT_BIOMEDICAUX",
                        e.target.value
                      )
                    }
                  >
                    <div className="flex flex-col">
                      <FormControlLabel
                        value="Oui"
                        control={<Radio />}
                        label="Oui"
                      />

                      <FormControlLabel
                        value="Non"
                        control={<Radio />}
                        label="Non"
                      />
                    </div>
                  </RadioGroup>
                </FormControl>
              </div>
            </FormControl>
          </div>

          <div className="personnel_former">
            <FormControl>
              <div
                id="demo-row-radio-buttons-group-label"
                className="text-black font-semibold mt-2"
              >
                <FormControl>
                  <div
                    id="demo-row-radio-buttons-group-label"
                    className="text-black font-semibold mt-2"
                  >
                    40-Si oui lesquels sont fonctionnels ?
                  </div>
                  <RadioGroup
                    row
                    aria-labelledby="demo-row-radio-buttons-group-label"
                    name="row-radio-buttons-group"
                    className="flex flex-col"
                    value={globalState.EQUIPEMENT_BIOMEDICAUX_FONCTIONNELS}
                    onChange={(e) =>
                      updateGlobalState(
                        "EQUIPEMENT_BIOMEDICAUX_FONCTIONNELS",
                        e.target.value
                      )
                    }
                  >
                    <div className="flex flex-col">
                      <FormControlLabel
                        value="Appareil_de_radiologie/type "
                        control={<Radio />}
                        label="Appareil de radiologie/type "
                      />

                      <FormControlLabel
                        value="Oui "
                        control={<Radio />}
                        label="ECG "
                      />

                      <FormControlLabel
                        value="Echographes  "
                        control={<Radio />}
                        label="Echographes  "
                      />

                      <FormControlLabel
                        value="autres"
                        control={<Radio />}
                        label="autres"
                      />
                    </div>
                  </RadioGroup>
                </FormControl>
              </div>
            </FormControl>
          </div>

          <div className="personnel_former">
            <FormControl>
              <div
                id="demo-row-radio-buttons-group-label"
                className="text-black font-semibold mt-2"
              >
                <FormControl>
                  <div
                    id="demo-row-radio-buttons-group-label"
                    className="text-black font-semibold mt-2"
                  >
                    41-Le centre/service a-t-il un projet télémédecine en cours
                    ?
                  </div>
                  <RadioGroup
                    row
                    aria-labelledby="demo-row-radio-buttons-group-label"
                    name="row-radio-buttons-group"
                    className="flex flex-col"
                    value={globalState.EXISTANCE_DE_PROJET_DE_TELEMEDECINE}
                    onChange={(e) =>
                      updateGlobalState(
                        "EXISTANCE_DE_PROJET_DE_TELEMEDECINE",
                        e.target.value
                      )
                    }
                  >
                    <div className="flex flex-col">
                      <FormControlLabel
                        value="Non"
                        control={<Radio />}
                        label="Non"
                      />

                      <FormControlLabel
                        value="Oui"
                        control={<Radio />}
                        label="Oui"
                      />
                    </div>
                  </RadioGroup>
                </FormControl>
              </div>
            </FormControl>
          </div>

          <div className="operateur_mobiles_fixed">
            <FormControl>
              <div
                id="demo-row-radio-buttons-group-label"
                className="text-black font-semibold mt-2"
              >
                <FormControl>
                  <div
                    id="demo-row-radio-buttons-group-label"
                    className="text-black font-semibold mt-2"
                  >
                    42-Si oui décrire brièvement
                  </div>

                  <textarea
                    className="textarea textarea-bordered m-2 max-w-full"
                    placeholder="Votre reponse ici..."
                    value={globalState.DESCRIPTION_BIEVEMENT}
                    onChange={(e) =>
                      updateGlobalState("DESCRIPTION_BIEVEMENT", e.target.value)
                    }
                  ></textarea>
                </FormControl>
              </div>
            </FormControl>
          </div>

          <div className="personnel_former">
            <FormControl>
              <div
                id="demo-row-radio-buttons-group-label"
                className="text-black font-semibold mt-2"
              >
                <FormControl>
                  <div
                    id="demo-row-radio-buttons-group-label"
                    className="text-black font-semibold mt-2"
                  >
                    43-Le centre/service a-t-il mis en œuvre une initiative de
                    télémédecine <br />
                    dans le passé ?
                  </div>
                  <RadioGroup
                    row
                    aria-labelledby="demo-row-radio-buttons-group-label"
                    name="row-radio-buttons-group"
                    className="flex flex-col"
                    value={globalState.TELEMEDECINE_DANS_LE_PASSE}
                    onChange={(e) =>
                      updateGlobalState(
                        "TELEMEDECINE_DANS_LE_PASSE",
                        e.target.value
                      )
                    }
                  >
                    <div className="flex flex-col">
                      <FormControlLabel
                        value="Non"
                        control={<Radio />}
                        label="Non"
                      />

                      <FormControlLabel
                        value="Oui"
                        control={<Radio />}
                        label="Oui"
                      />
                    </div>
                  </RadioGroup>
                </FormControl>
              </div>
            </FormControl>
          </div>

          <div className="operateur_mobiles_fixed">
            <FormControl>
              <div
                id="demo-row-radio-buttons-group-label"
                className="text-black font-semibold mt-2"
              >
                <FormControl>
                  <div
                    id="demo-row-radio-buttons-group-label"
                    className="text-black font-semibold mt-2"
                  >
                    44-Si oui, décrire brièvement l’initiative de télémédecine
                    mise en œuvre par le passé (période de mise en œuvre,
                    pathologies ciblées, centres de santé impliqués etc.)
                  </div>

                  <textarea
                    className="textarea textarea-bordered m-2 max-w-full"
                    placeholder="Votre reponse ici..."
                    value={globalState.DECRIRE_BRIEVEMENT}
                    onChange={(e) =>
                      updateGlobalState("DECRIRE_BRIEVEMENT", e.target.value)
                    }
                  ></textarea>
                </FormControl>
              </div>
            </FormControl>
          </div>

          {/* */}

          <div className="personnel_former">
            <FormControl>
              <div
                id="demo-row-radio-buttons-group-label"
                className="text-black font-semibold mt-2"
              >
                <FormControl>
                  <div
                    id="demo-row-radio-buttons-group-label"
                    className="text-black font-semibold mt-2"
                  >
                    45-Quelles pathologie/spécialités prioritaires, la
                    structure/service souhaite-t- elle voir intégrées à un
                    projet télémédecine ?
                  </div>
                  <RadioGroup
                    row
                    aria-labelledby="demo-row-radio-buttons-group-label"
                    name="row-radio-buttons-group"
                    className="flex flex-col"
                  >
                    <div className="">
                      <FormGroup>
                        <div
                          className="flex flex-col
                       "
                        >
                          <FormControlLabel
                            control={
                              <Checkbox
                                onChange={(e) =>
                                  handleCheck(
                                    "MULTIPLE_CHECKBOX",
                                    "MEDECINE_GENERALE",
                                    e.target.checked
                                  )
                                }
                                checked={
                                  globalState.MULTIPLE_CHECKBOX
                                    .MEDECINE_GENERALE
                                }
                              />
                            }
                            label="Médecine générale"
                          />
                          <FormControlLabel
                            control={
                              <Checkbox
                                onChange={(e) =>
                                  handleCheck(
                                    "MULTIPLE_CHECKBOX",
                                    "PEDIATRIE",
                                    e.target.checked
                                  )
                                }
                                checked={
                                  globalState.MULTIPLE_CHECKBOX.PEDIATRIE
                                }
                              />
                            }
                            label="Pédiatrie"
                          />
                          <FormControlLabel
                            control={
                              <Checkbox
                                onChange={(e) =>
                                  handleCheck(
                                    "MULTIPLE_CHECKBOX",
                                    "GYNECO",
                                    e.target.checked
                                  )
                                }
                                checked={globalState.MULTIPLE_CHECKBOX.GYNECO}
                              />
                            }
                            label="Gynéco-obstétrique"
                          />
                          <FormControlLabel
                            control={
                              <Checkbox
                                onChange={(e) =>
                                  handleCheck(
                                    "MULTIPLE_CHECKBOX",
                                    "CARDIOLOGIE",
                                    e.target.checked
                                  )
                                }
                                checked={
                                  globalState.MULTIPLE_CHECKBOX.CARDIOLOGIE
                                }
                              />
                            }
                            label="Cardiologie"
                          />
                          <FormControlLabel
                            control={
                              <Checkbox
                                onChange={(e) =>
                                  handleCheck(
                                    "MULTIPLE_CHECKBOX",
                                    "DERMATOLOGIE",
                                    e.target.checked
                                  )
                                }
                                checked={
                                  globalState.MULTIPLE_CHECKBOX.DERMATOLOGIE
                                }
                              />
                            }
                            label="Dermatologie"
                          />
                          <FormControlLabel
                            control={
                              <Checkbox
                                onChange={(e) =>
                                  handleCheck(
                                    "MULTIPLE_CHECKBOX",
                                    "PSYCHIATRIE",
                                    e.target.checked
                                  )
                                }
                                checked={
                                  globalState.MULTIPLE_CHECKBOX.PSYCHIATRIE
                                }
                              />
                            }
                            label="Psychiatrie"
                          />
                          <FormControlLabel
                            control={
                              <Checkbox
                                onChange={(e) =>
                                  handleCheck(
                                    "MULTIPLE_CHECKBOX",
                                    "RUTMATOLOGIE",
                                    e.target.checked
                                  )
                                }
                                checked={
                                  globalState.MULTIPLE_CHECKBOX.RUTMATOLOGIE
                                }
                              />
                            }
                            label="Rhumatologie"
                          />
                          <FormControlLabel
                            control={
                              <Checkbox
                                onChange={(e) =>
                                  handleCheck(
                                    "MULTIPLE_CHECKBOX",
                                    "CHURIGIEGENRALE",
                                    e.target.checked
                                  )
                                }
                                checked={
                                  globalState.MULTIPLE_CHECKBOX.CHURIGIEGENRALE
                                }
                              />
                            }
                            label="Chirurgie générale"
                          />
                        </div>
                      </FormGroup>
                    </div>
                  </RadioGroup>
                </FormControl>
              </div>
            </FormControl>
          </div>
        </div>

        {/*
         *******************************
         *********************************
         ****F.	OFFRE DE SOINS************
         *********************************
         ******************************** */}

        <div className="equipement_biomedicale_equipement_telemedecine">
          <p className="text-customBluePure  font-semibold mt-4">
            F-Offre de soins
          </p>

          <div className="personnel_former">
            <FormControl>
              <div
                id="demo-row-radio-buttons-group-label"
                className="text-black font-semibold mt-2"
              >
                <FormControl>
                  <div
                    id="demo-row-radio-buttons-group-label"
                    className="text-black font-semibold mt-2"
                  >
                    46-Quels sont les services ou consultations disponibles dans
                    le centre/service ?
                  </div>

                  <div className="">
                    <FormGroup>
                      <div className="flex flex-col">
                        <FormControlLabel
                          control={
                            <Checkbox
                              onChange={(e) =>
                                handleCheck(
                                  "MULTIPLE_CHECKBOX",
                                  "PEDIATRIE",
                                  e.target.checked
                                )
                              }
                              checked={globalState.MULTIPLE_CHECKBOX.PEDIATRIE}
                            />
                          }
                          label="Pédiatrie"
                        />
                        <FormControlLabel
                          control={
                            <Checkbox
                              onChange={(e) =>
                                handleCheck(
                                  "MULTIPLE_CHECKBOX",
                                  "GYNECO",
                                  e.target.checked
                                )
                              }
                              checked={globalState.MULTIPLE_CHECKBOX.GYNECO}
                            />
                          }
                          label="Gynéco-obstétrique"
                        />

                        <FormControlLabel
                          control={
                            <Checkbox
                              onChange={(e) =>
                                handleCheck(
                                  "MULTIPLE_CHECKBOX",
                                  "BLOC_OPERATOIRE",
                                  e.target.checked
                                )
                              }
                              checked={
                                globalState.MULTIPLE_CHECKBOX.BLOC_OPERATOIRE
                              }
                            />
                          }
                          label="Bloc Opératoire"
                        />
                        <FormControlLabel
                          control={
                            <Checkbox
                              onChange={(e) =>
                                handleCheck(
                                  "MULTIPLE_CHECKBOX",
                                  "URGENCE",
                                  e.target.checked
                                )
                              }
                              checked={globalState.MULTIPLE_CHECKBOX.URGENCE}
                            />
                          }
                          label="Urgences"
                        />
                        <FormControlLabel
                          control={
                            <Checkbox
                              onChange={(e) =>
                                handleCheck(
                                  "MULTIPLE_CHECKBOX",
                                  "MEDECINE_GENERALE",
                                  e.target.checked
                                )
                              }
                              checked={
                                globalState.MULTIPLE_CHECKBOX.MEDECINE_GENERALE
                              }
                            />
                          }
                          label="Medecine générale"
                        />
                      </div>
                    </FormGroup>
                  </div>
                </FormControl>
              </div>
            </FormControl>
          </div>

          <div className="operateur_mobiles_fixed">
            <FormControl>
              <div
                id="demo-row-radio-buttons-group-label"
                className="text-black font-semibold mt-2"
              >
                <FormControl>
                  <div
                    id="demo-row-radio-buttons-group-label"
                    className="text-black font-semibold mt-2"
                  >
                    47-Quels sont les consultations paramédicales disponibles
                    dans le centre/service ?
                  </div>

                  <textarea
                    className="textarea textarea-bordered m-2 max-w-full"
                    placeholder="Votre reponse ici..."
                    value={globalState.CONSULTATION_PARAMEDICALES}
                    onChange={(e) =>
                      updateGlobalState(
                        "CONSULTATION_PARAMEDICALES",
                        e.target.value
                      )
                    }
                  ></textarea>
                </FormControl>
              </div>
            </FormControl>
          </div>

          <div className="equipement_tic_par_type">
            <div className="mt-4">
              <h1 className="font-semibold">
                48-Avec combien de postes de consultations ouvertes par
                spécialité ?
              </h1>
            </div>

            <div className="birthday_nationnality flex flex-col gap-4">
              <label className="form-control w-full max-w-xs">
                <div className="label">
                  <span className="label-text text-gray-600 font-semibold">
                    Medecine générale:
                  </span>
                </div>
                <input
                  value={globalState.POSTES_MEDECINE_GENERALE_DISPONIBLE}
                  onChange={(e) =>
                    updateGlobalState(
                      "POSTES_MEDECINE_GENERALE_DISPONIBLE",
                      e.target.value
                    )
                  }
                  name="Latop"
                  type="text"
                  placeholder="Ex : 3 postes"
                  className="input input-bordered w-full max-w-xs"
                />
              </label>

              <label className="form-control w-full max-w-xs">
                <div className="label">
                  <span className="label-text text-gray-600 font-semibold">
                    Urgences :
                  </span>
                </div>
                <input
                  value={globalState.POSTES_URGENCE_DISPONIBLE}
                  onChange={(e) =>
                    updateGlobalState(
                      "POSTES_URGENCE_DISPONIBLE",
                      e.target.value
                    )
                  }
                  type="text"
                  name="Tablettes"
                  placeholder="Ex: 7 postes"
                  className="input input-bordered w-full max-w-xs"
                />
              </label>

              <label className="form-control w-full max-w-xs">
                <div className="label">
                  <span className="label-text text-gray-600 font-semibold">
                    Bloc Opératoire
                  </span>
                </div>
                <input
                  value={globalState.POSTES_BLOC_OPERATOIRE_DISPONIBLE}
                  onChange={(e) =>
                    updateGlobalState(
                      "POSTES_BLOC_OPERATOIRE_DISPONIBLE",
                      e.target.value
                    )
                  }
                  type="text"
                  name="Desktop"
                  placeholder="Ex: 2 Postes"
                  className="input input-bordered w-full max-w-xs"
                />
              </label>
              <label className="form-control w-full max-w-xs">
                <div className="label">
                  <span className="label-text text-gray-600 font-semibold">
                    Gynéco-obstétrique
                  </span>
                </div>
                <input
                  value={
                    globalState.POSTES_MEDECINE_GYNECO_OBSTETRIQUE_DISPONIBLE
                  }
                  onChange={(e) =>
                    updateGlobalState(
                      "POSTES_MEDECINE_GYNECO_OBSTETRIQUE_DISPONIBLE",
                      e.target.value
                    )
                  }
                  type="text"
                  name="Smartphone"
                  placeholder="Ex: 2 postes"
                  className="input input-bordered w-full max-w-xs"
                />
              </label>

              <label className="form-control w-full max-w-xs">
                <div className="label">
                  <span className="label-text text-gray-600 font-semibold">
                    Autres :
                  </span>
                </div>
                <input
                  value={globalState.AUTRE_POSTES_MEDECINE_DISPONIBLE}
                  onChange={(e) =>
                    updateGlobalState(
                      "AUTRE_POSTES_MEDECINE_DISPONIBLE",
                      e.target.value
                    )
                  }
                  type="text"
                  name="other"
                  placeholder="Ex: 2..."
                  className="input input-bordered w-full max-w-xs"
                />
              </label>
            </div>
          </div>

          <div className="personnel_former">
            <FormControl>
              <div
                id="demo-row-radio-buttons-group-label"
                className="text-black font-semibold mt-2"
              >
                <FormControl>
                  <div
                    id="demo-row-radio-buttons-group-label"
                    className="text-black font-semibold mt-2"
                  >
                    49-Quels sont les services médico-techniques disponibles ?
                  </div>

                  <div className="">
                    <FormGroup>
                      <div className="flex flex-col">
                        <FormControlLabel
                          control={
                            <Checkbox
                              onChange={(e) =>
                                handleCheck(
                                  "MULTIPLE_CHECKBOX",
                                  "PHAMARCIE",
                                  e.target.checked
                                )
                              }
                              checked={globalState.MULTIPLE_CHECKBOX.PHAMARCIE}
                            />
                          }
                          label="Pharmacie "
                        />
                        <FormControlLabel
                          control={
                            <Checkbox
                              onChange={(e) =>
                                handleCheck(
                                  "MULTIPLE_CHECKBOX",
                                  "GYNECO",
                                  e.target.checked
                                )
                              }
                              checked={globalState.MULTIPLE_CHECKBOX.GYNECO}
                            />
                          }
                          label="Gynéco-obstétrique"
                        />

                        <FormControlLabel
                          control={
                            <Checkbox
                              onChange={(e) =>
                                handleCheck(
                                  "MULTIPLE_CHECKBOX",
                                  "LABORATOIRE",
                                  e.target.checked
                                )
                              }
                              checked={
                                globalState.MULTIPLE_CHECKBOX.LABORATOIRE
                              }
                            />
                          }
                          label="Laboratoire "
                        />
                        <FormControlLabel
                          control={
                            <Checkbox
                              onChange={(e) =>
                                handleCheck(
                                  "MULTIPLE_CHECKBOX",
                                  "RADIOLOGIE",
                                  e.target.checked
                                )
                              }
                              checked={globalState.MULTIPLE_CHECKBOX.RADIOLOGIE}
                            />
                          }
                          label="Radiologie "
                        />
                        <FormControlLabel
                          control={
                            <Checkbox
                              onChange={(e) =>
                                handleCheck(
                                  "MULTIPLE_CHECKBOX",
                                  "AUTRE_SERVIICES",
                                  e.target.checked
                                )
                              }
                              checked={
                                globalState.MULTIPLE_CHECKBOX.AUTRE_SERVIICES
                              }
                            />
                          }
                          label="Autres services médico-techniques disponibles"
                        />
                        <FormControlLabel
                          control={
                            <Checkbox
                              onChange={(e) =>
                                handleCheck(
                                  "MULTIPLE_CHECKBOX",
                                  "CABINET_DENTAIRE",
                                  e.target.checked
                                )
                              }
                              checked={
                                globalState.MULTIPLE_CHECKBOX.CABINET_DENTAIRE
                              }
                            />
                          }
                          label="Cabinet dentaire"
                        />
                        <FormControlLabel
                          control={
                            <Checkbox
                              onChange={(e) =>
                                handleCheck(
                                  "MULTIPLE_CHECKBOX",
                                  "OPHTAMOLOGIE",
                                  e.target.checked
                                )
                              }
                              checked={
                                globalState.MULTIPLE_CHECKBOX.OPHTAMOLOGIE
                              }
                            />
                          }
                          label="Ophtalmologie"
                        />
                      </div>
                    </FormGroup>
                  </div>
                </FormControl>
              </div>
            </FormControl>
          </div>
        </div>

        {/*
         *******************************
         *********************************
         ****G.	DONNEES SANITAIRE DU CENTRE/SERVICE************
         *********************************
         ******************************** */}

        <div className="disposition_des_batiments">
          <p className="text-customBluePure  font-semibold mt-4">
            G-Données sanitaire du centre / service
          </p>

          <div className="bureau_de_coonsultaion_medecin">
            <label className="form-control w-full max-w-xs">
              <div className="label">
                <span className="label-text text-black  font-semibold">
                  50-Quel est le nombre de consultants au centre/service
                  (l’année dernière)
                </span>
              </div>
              <input
                value={globalState.NOMBRE_DE_CONSULTAION_ANNEE_DERNIERE}
                onChange={(e) =>
                  updateGlobalState(
                    "NOMBRE_DE_CONSULTAION_ANNEE_DERNIERE",
                    e.target.value
                  )
                }
                type="text"
                name="name"
                placeholder="Ex: 5"
                className="input input-bordered w-full max-w-xs"
              />
            </label>
          </div>

          <div className="bureau_de_coonsultaion_medecin">
            <label className="form-control w-full max-w-xs">
              <div className="label">
                <span className="label-text text-black  font-semibold">
                  50-Combien de patients le centre/service a-t-il référé dans
                  l’année ? (donnée de l’année n-1)
                </span>
              </div>
              <input
                value={globalState.PATIENT_REFERE_DANS_L_ANNEE}
                onChange={(e) =>
                  updateGlobalState(
                    "PATIENT_REFERE_DANS_L_ANNEE",
                    e.target.value
                  )
                }
                type="text"
                name="name"
                placeholder="Ex: 180 patients en 2022"
                className="input input-bordered w-full max-w-xs"
              />
            </label>
          </div>

          <div className="bureau_de_coonsultaion_medecin">
            <label className="form-control w-full max-w-xs">
              <div className="label">
                <span className="label-text text-black  font-semibold">
                  51-Quelles sont les pathologies les plus fréquentes des
                  références externes (faites par le centre/service) ?
                </span>
              </div>
              <input
                type="text"
                name="name"
                placeholder="Ex: palu, collopatie"
                className="input input-bordered w-full max-w-xs"
                value={globalState.PATHOLOGIE_FREQUENT}
                onChange={(e) =>
                  updateGlobalState("PATHOLOGIE_FREQUENT", e.target.value)
                }
              />
            </label>
          </div>

          <div className="bureau_de_coonsultaion_medecin">
            <label className="form-control w-full max-w-xs">
              <div className="label">
                <span className="label-text text-black  font-semibold">
                  52-Combien de patients référés le centre/service reçoit-il par
                  an ? (données de l’année n-1)
                </span>
              </div>
              <input
                type="text"
                name="name"
                placeholder="Ex: 100 patients"
                className="input input-bordered w-full max-w-xs"
              />
            </label>
          </div>

          <div className="bureau_de_coonsultaion_medecin">
            <label className="form-control w-full max-w-xs">
              <div className="label">
                <span className="label-text text-black  font-semibold">
                  53-Combien de patients référés le centre/service reçoit-il par
                  an ? (données de l’année n-1)
                </span>
              </div>
              <input
                value={globalState.PATIENT_REFERE_REÇU_PAR_AN}
                onChange={(e) =>
                  updateGlobalState(
                    "PATIENT_REFERE_REÇU_PAR_AN",
                    e.target.value
                  )
                }
                type="text"
                name="name"
                placeholder="Ex: 100 patients"
                className="input input-bordered w-full max-w-xs"
              />
            </label>
          </div>
        </div>
      </div>
    </div>
  );
}
