import {
  FormControl,
  FormControlLabel,
  Radio,
  RadioGroup,
} from "@mui/material";
import React from "react";

export default function Questions({ globalState, updateGlobalState }) {
  return (
    <div className="mt-5">
      <div>
        <h1 className="text-customBluePure text-2xl font-bold">
          Questionnaires
        </h1>

        <div className="Experience">
          <p className="text-customBluePure  font-semibold mt-4">
            A-Informations démographique et professionnelles
          </p>
          <FormControl>
            <div
              id="demo-row-radio-buttons-group-label"
              className="text-black font-semibold mt-2"
            >
              1-Depuis combien d’années exercez-vous votre profession ?
            </div>
            <RadioGroup
              row
              aria-labelledby="demo-row-radio-buttons-group-label"
              name="row-radio-buttons-group"
              value={globalState.annee_exercice_profession}
              onChange={(e) =>
                updateGlobalState("annee_exercice_profession", e.target.value)
              }
            >
              <div className="flex flex-col">
                <FormControlLabel
                  value="5_ANS"
                  control={<Radio />}
                  label="Moins de 5 ans"
                />
                <FormControlLabel
                  value="5_10_ANS"
                  control={<Radio />}
                  label="Entre 5 et 10 ans"
                />
                <FormControlLabel
                  value="PLUS_10_ANS"
                  control={<Radio />}
                  label="Plus de 10 ans"
                />
              </div>
            </RadioGroup>
          </FormControl>
        </div>
        <div className="Specifities">
          <FormControl>
            <div
              id="demo-row-radio-buttons-group-label"
              className="text-black font-semibold mt-2"
            >
              2-Quelle est votre spécialisation ?
            </div>
            <RadioGroup
              row
              aria-labelledby="demo-row-radio-buttons-group-label"
              name="row-radio-buttons-group"
              value={globalState.specialisation}
              onChange={(e) =>
                updateGlobalState("specialisation", e.target.value)
              }
            >
              <div className="flex flex-col">
                <FormControlLabel
                  value="Medecin_generaliste"
                  control={<Radio />}
                  label="Médecin généraliste"
                />
                <FormControlLabel
                  value="specialiste"
                  control={<Radio />}
                  label="Spécialiste "
                />
              </div>
            </RadioGroup>
          </FormControl>
        </div>
        <div className="Gender">
          <FormControl>
            <div
              id="demo-row-radio-buttons-group-label"
              className="text-black font-semibold mt-2"
            >
              3-Quel est votre sexe ?
            </div>
            <RadioGroup
              row
              aria-labelledby="demo-row-radio-buttons-group-label"
              name="row-radio-buttons-group"
              value={globalState.sexe}
              onChange={(e) => updateGlobalState("sexe", e.target.value)}
            >
              <div className="flex flex-col">
                <FormControlLabel
                  value="male"
                  control={<Radio />}
                  label="Mâle"
                />
                <FormControlLabel
                  value="femelle "
                  control={<Radio />}
                  label="Femelle "
                />
              </div>
            </RadioGroup>
          </FormControl>
        </div>

        <div className="Age">
          <FormControl>
            <div
              id="demo-row-radio-buttons-group-label"
              className="text-black font-semibold mt-2"
            >
              4-Dans quelle tranche d’âge êtes-vous ?
            </div>
            <RadioGroup
              row
              aria-labelledby="demo-row-radio-buttons-group-label"
              name="row-radio-buttons-group"
              value={globalState.tranches_d_age}
              onChange={(e) =>
                updateGlobalState("tranches_d_age", e.target.value)
              }
            >
              <div className="flex flex-col">
                <FormControlLabel
                  value="moins_de_18_ans"
                  control={<Radio />}
                  label="Moins de 18 ans"
                />
                <FormControlLabel
                  value="entre_18_et_24_ans"
                  control={<Radio />}
                  label="18-24 "
                />
                <FormControlLabel
                  value="entre_25_et_34_ans"
                  control={<Radio />}
                  label="25-34"
                />
                <FormControlLabel
                  value="entre_35_et_44_ans "
                  control={<Radio />}
                  label="35-44 "
                />
                <FormControlLabel
                  value="45_ans_et_plus"
                  control={<Radio />}
                  label="45 ans et plus"
                />
              </div>
            </RadioGroup>
          </FormControl>
        </div>

        <div className="Experience">
          <p className="text-customBluePure  font-semibold mt-4">
            B.Connaissances et pratiques de la télémedecine
          </p>
          <FormControl>
            <div
              id="demo-row-radio-buttons-group-label"
              className="text-black font-semibold mt-2"
            >
              5-Avez-vous des connaissances sur la télémédecine ?
            </div>
            <div className="flex flex-col">
              <RadioGroup
                row
                aria-labelledby="demo-row-radio-buttons-group-label"
                name="row-radio-buttons-group"
                value={globalState.connaissance_telemedicine}
                onChange={(e) =>
                  updateGlobalState("connaissance_telemedicine", e.target.value)
                }
              >
                <div className="flex flex-col">
                  <FormControlLabel
                    value="Tres_familier"
                    control={<Radio />}
                    label="Très familier"
                  />
                  <FormControlLabel value="1" control={<Radio />} label="1" />
                  <FormControlLabel value="2" control={<Radio />} label="2" />
                  <FormControlLabel value="3" control={<Radio />} label="3" />
                  <FormControlLabel value="4" control={<Radio />} label="4" />
                  <FormControlLabel value="5" control={<Radio />} label="5" />
                  <FormControlLabel
                    value="Pas_familier"
                    control={<Radio />}
                    label="Pas familier"
                  />
                </div>
              </RadioGroup>
            </div>
          </FormControl>

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
                  6-Que pensez-vous de l’utilisation de la télémédecine pour les
                  soins de santé maternelle et infantile ?
                </div>
                <RadioGroup
                  row
                  aria-labelledby="demo-row-radio-buttons-group-label"
                  name="row-radio-buttons-group"
                  value={
                    globalState.utilisation_telemedicine_soins_materiel_et_infantile
                  }
                  onChange={(e) =>
                    updateGlobalState(
                      "utilisation_telemedicine_soins_materiel_et_infantile",
                      e.target.value
                    )
                  }
                >
                  <div className="flex flex-col">
                    <FormControlLabel
                      value="Tres_positif"
                      control={<Radio />}
                      label="Très positif"
                    />
                    <FormControlLabel value="1" control={<Radio />} label="1" />
                    <FormControlLabel value="2" control={<Radio />} label="2" />
                    <FormControlLabel value="3" control={<Radio />} label="3" />

                    <FormControlLabel
                      value="Tres_negatif"
                      control={<Radio />}
                      label="Très négatif"
                    />
                  </div>
                </RadioGroup>
              </FormControl>
            </div>
          </FormControl>

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
                  7-Savez-vous que la télémédecine est intégrée dans le paquet
                  minimum d’activité des établissements sanitaires publics en
                  Côte d’Ivoire ?
                </div>
                <RadioGroup
                  row
                  aria-labelledby="demo-row-radio-buttons-group-label"
                  name="row-radio-buttons-group"
                  value={globalState.connaissance_pma}
                  onChange={(e) =>
                    updateGlobalState("connaissance_pma", e.target.value)
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
                  8-Avez-vous une bonne connaissance de la notion de PMA d’un
                  centre de santé ?
                </div>
                <RadioGroup
                  row
                  aria-labelledby="demo-row-radio-buttons-group-label"
                  name="row-radio-buttons-group"
                  className="flex flex-col"
                  value={globalState.connaissance_pma_centre}
                  onChange={(e) =>
                    updateGlobalState("connaissance_pma_centre", e.target.value)
                  }
                >
                  <div className="flex flex-col">
                    <FormControlLabel
                      value="Tres_bien"
                      control={<Radio />}
                      label="Très bien"
                    />

                    <FormControlLabel
                      value="Bien"
                      control={<Radio />}
                      label="Bien"
                    />
                    <FormControlLabel
                      value="Un_peu"
                      control={<Radio />}
                      label="Un peu"
                    />
                    <FormControlLabel
                      value="Pas_du_tout"
                      control={<Radio />}
                      label="Pas du tout"
                    />
                  </div>
                </RadioGroup>
              </FormControl>
            </div>
          </FormControl>

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
                  9-Quel est selon vous le coût idéal d’un acte de télémédecine
                  ?
                </div>

                <div className="birthday_nationnality flex items-center gap-4">
                  <label className="form-control w-full max-w-xs">
                    <div className="label">
                      <span className="label-text text-gray-600 font-semibold">
                        Echographie :
                      </span>
                    </div>
                    <input
                      value={globalState.coût_ideal_echographie}
                      onChange={(e) =>
                        updateGlobalState(
                          "coût_ideal_echographie",
                          e.target.value
                        )
                      }
                      name="hours"
                      type="number"
                      placeholder=""
                      className="input input-bordered w-full max-w-xs"
                    />
                  </label>
                  <label className="form-control w-full max-w-xs">
                    <div className="label">
                      <span className="label-text text-gray-600 font-semibold">
                        Electrocardiogramme:
                      </span>
                    </div>
                    <input
                      value={globalState.coût_ideal_Electrocardiogramme}
                      onChange={(e) =>
                        updateGlobalState(
                          "coût_ideal_Electrocardiogramme",
                          e.target.value
                        )
                      }
                      type="number"
                      name="hours"
                      placeholder=""
                      className="input input-bordered w-full max-w-xs"
                    />
                  </label>
                </div>
              </FormControl>
            </div>
          </FormControl>

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
                  10-Quels sont les éléments qui vous motiveraient pour la
                  pratique <br /> de télémédecine ?
                </div>

                <textarea
                  className="textarea textarea-bordered m-2"
                  placeholder="Votre reponse"
                  value={
                    globalState.elements_de_motivation_pour_pratique_de_telemedecine
                  }
                  onChange={(e) =>
                    updateGlobalState(
                      "elements_de_motivation_pour_pratique_de_telemedecine",
                      e.target.value
                    )
                  }
                ></textarea>
              </FormControl>
            </div>
          </FormControl>

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
                  11-Exercez-vous ou y-a-t-il une activité régulière de
                  télémédecine ? <br /> (si oui commentez la réponse)
                </div>

                <textarea
                  className="textarea textarea-bordered m-2"
                  placeholder="Votre reponse"
                  value={globalState.exercez_vous_une_activite_de_telemedicine}
                  onChange={(e) =>
                    updateGlobalState(
                      "exercez_vous_une_activite_de_telemedicine",
                      e.target.value
                    )
                  }
                ></textarea>
              </FormControl>
            </div>
          </FormControl>
        </div>
      </div>
    </div>
  );
}
