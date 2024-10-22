import {
  FormControl,
  FormControlLabel,
  Radio,
  RadioGroup,
} from "@mui/material";
import React from "react";

export default function QuestionnaireUsagers({
  updateGlobalState,
  globalState,
}) {
  return (
    <div className="mt-5">
      <div>
        <h1 className="text-customBluePure text-2xl font-bold">
          Questionnaires
        </h1>

        <div className="Information_personnelle">
          <p className="text-customBluePure  font-semibold mt-4">
            SECTION A : Informations démographiques
          </p>
          <FormControl>
            <div
              id="demo-row-radio-buttons-group-label"
              className="text-black font-semibold mt-2"
            >
              1-Quel est votre sexe ?
            </div>
            <RadioGroup
              row
              aria-labelledby="demo-row-radio-buttons-group-label"
              name="row-radio-buttons-group"
              value={globalState.SEXE}
              onChange={(e) => updateGlobalState("SEXE", e.target.value)}
            >
              <div className="flex flex-col">
                <FormControlLabel
                  value="Mâle"
                  control={<Radio />}
                  label="Mâle"
                />
                <FormControlLabel
                  value="Femelelle"
                  control={<Radio />}
                  label="Femelle"
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
              2-Quelle âge avez-vous ?
            </div>
            <RadioGroup
              row
              aria-labelledby="demo-row-radio-buttons-group-label"
              name="row-radio-buttons-group"
              value={globalState.AGE}
              onChange={(e) => updateGlobalState("AGE", e.target.value)}
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

        <FormControl>
          <div
            id="demo-row-radio-buttons-group-label"
            className="text-black font-semibold mt-2"
          >
            <FormControl>
              <div
                id="demo-row-radio-buttons-group-label"
                className="text-black font-semibold mt-2 mb-4"
              >
                3-Combien d'enfants avez-vous ?
              </div>

              <input
                value={globalState.NOMBRE_DE_ENFANT}
                onChange={(e) =>
                  updateGlobalState("NOMBRE_DE_ENFANT", e.target.value)
                }
                name="hours"
                type="text"
                placeholder=""
                className="input input-bordered w-full max-w-xs"
              />
            </FormControl>
          </div>
        </FormControl>

        <div className="fouchette_revenus">
          <FormControl>
            <div
              id="demo-row-radio-buttons-group-label"
              className="text-black font-semibold mt-2"
            >
              <FormControl>
                <div
                  id="demo-row-radio-buttons-group-label"
                  className="text-black font-semibold mt-2 mb-4"
                >
                  4-Quelle est la fourchette de revenus <br /> estimée de votre{" "}
                  ménage par mois ?
                </div>

                <input
                  value={globalState.FOUCHETTE_DE_REVENUE_ESTIME}
                  onChange={(e) =>
                    updateGlobalState(
                      "FOUCHETTE_DE_REVENUE_ESTIME",
                      e.target.value
                    )
                  }
                  name="hours"
                  type="text"
                  placeholder=""
                  className="input input-bordered w-full max-w-xs"
                />
              </FormControl>
            </div>
          </FormControl>
        </div>

        <div className="Gender">
          <FormControl>
            <div
              id="demo-row-radio-buttons-group-label"
              className="text-black font-semibold mt-2"
            >
              5-Qui paie généralement les frais médicaux dans votre famille,
              l'homme ou la femme ?
            </div>
            <RadioGroup
              row
              aria-labelledby="demo-row-radio-buttons-group-label"
              name="row-radio-buttons-group"
              value={globalState.QUI_PAIE_LES_FRAIS}
              onChange={(e) =>
                updateGlobalState("QUI_PAIE_LES_FRAIS", e.target.value)
              }
            >
              <div className="flex flex-col">
                <FormControlLabel
                  value="Homme"
                  control={<Radio />}
                  label="Homme"
                />
                <FormControlLabel
                  value="Femme"
                  control={<Radio />}
                  label="Femme"
                />
                <FormControlLabel
                  value="Les_deux"
                  control={<Radio />}
                  label="Les deux"
                />

                <FormControlLabel
                  value="Autres"
                  control={<Radio />}
                  label="Autres"
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
              6-Dans quelle tranche d’âge êtes-vous ?
            </div>
            <RadioGroup
              row
              aria-labelledby="demo-row-radio-buttons-group-label"
              name="row-radio-buttons-group"
              value={globalState.TRANCHE_AGE}
              onChange={(e) => updateGlobalState("TRANCHE_AGE", e.target.value)}
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
                  7-Quels sont les éléments qui vous motiveraient pour la
                  pratique <br /> de télémédecine ?
                </div>

                <textarea
                  className="textarea textarea-bordered m-2"
                  placeholder="Votre reponse"
                  value={globalState.MOTIVATION_POUR_TELEMEDECINE}
                  onChange={(e) =>
                    updateGlobalState(
                      "MOTIVATION_POUR_TELEMEDECINE",
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
                  8-Exercez-vous ou y-a-t-il une activité régulière de
                  télémédecine ? <br /> (si oui commentez la réponse)
                </div>

                <textarea
                  className="textarea textarea-bordered m-2"
                  placeholder="Votre reponse"
                  value={globalState.ACTIVITE_REGULIERE_TELEMEDECINE}
                  onChange={(e) =>
                    updateGlobalState(
                      "ACTIVITE_REGULIERE_TELEMEDECINE",
                      e.target.value
                    )
                  }
                ></textarea>
              </FormControl>
            </div>
          </FormControl>
        </div>
      </div>

      <div className="Information_personnelle">
        <p className="text-customBluePure  font-semibold mt-4">
          SECTION B : Acceptabilité et adaptabilité culturelle
        </p>

        <div className="connaissance_telemedecine">
          <FormControl>
            <div
              id="demo-row-radio-buttons-group-label"
              className="text-black font-semibold mt-2"
            >
              1-Connaissez-vous la télémédecine ?
            </div>
            <RadioGroup
              row
              aria-labelledby="demo-row-radio-buttons-group-label"
              name="row-radio-buttons-group"
              value={globalState.CONNAISSANCE_FAMILIER_TELEMEDECINE}
              onChange={(e) =>
                updateGlobalState(
                  "CONNAISSANCE_FAMILIER_TELEMEDECINE",
                  e.target.value
                )
              }
            >
              <div className="flex flex-col">
                <FormControlLabel
                  value="Tres_familier"
                  control={<Radio />}
                  label="Très familier"
                />
                <FormControlLabel value="1" control={<Radio />} label="1" />
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
          </FormControl>
        </div>

        <div className="connaissance_utilisation_telemedecine">
          <FormControl>
            <div
              id="demo-row-radio-buttons-group-label"
              className="text-black font-semibold mt-2"
            >
              2-Que pensez-vous de l’utilisation de la télémédecine pour les
              soins de santé maternelle et infantile ?
            </div>
            <RadioGroup
              row
              aria-labelledby="demo-row-radio-buttons-group-label"
              name="row-radio-buttons-group"
              value={
                globalState.UTILISATION_TELEMEDECINE_POUR_MATERNITE_FAMILIER_TELEMEDECINE
              }
              onChange={(e) =>
                updateGlobalState(
                  "UTILISATION_TELEMEDECINE_POUR_MATERNITE_FAMILIER_TELEMEDECINE",
                  e.target.value
                )
              }
            >
              <div className="flex flex-col">
                <FormControlLabel
                  value="Tres_familier"
                  control={<Radio />}
                  label="Très familier"
                />
                <FormControlLabel value="1" control={<Radio />} label="1" />
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
          </FormControl>
        </div>

        <div className="obstacles_culturels">
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
                  4-Quels obstacles culturels prévoyez-vous dans <br />{" "}
                  l’adoption de la télémédecine dans les communautés rurales ?
                </div>

                <textarea
                  className="textarea textarea-bordered m-2"
                  placeholder="Votre reponse"
                  value={globalState.OBSTACLE_CULTURELLE}
                  onChange={(e) =>
                    updateGlobalState("OBSTACLE_CULTURELLE", e.target.value)
                  }
                ></textarea>
              </FormControl>
            </div>
          </FormControl>
        </div>

        <div className="prevoyence_obstacles_culturels">
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
                  5-Quelles stratégies recommanderiez-vous pour surmonter <br />{" "}
                  les obstacles culturels à l’adoption de la télémédecine ?
                </div>

                <textarea
                  className="textarea textarea-bordered m-2"
                  placeholder="Votre reponse"
                  value={globalState.STRATEGIE}
                  onChange={(e) =>
                    updateGlobalState("STRATEGIE", e.target.value)
                  }
                ></textarea>
              </FormControl>
            </div>
          </FormControl>
        </div>
        <div className="reccours_telemedecine">
          <FormControl>
            <div
              id="demo-row-radio-buttons-group-label"
              className="text-black font-semibold mt-2"
            >
              6-Avez-vous déjà eu recours à la télémédecine pour vos soins ?
            </div>
            <RadioGroup
              row
              aria-labelledby="demo-row-radio-buttons-group-label"
              name="row-radio-buttons-group"
              value={globalState.RECOURS_TELEMEDECINE}
              onChange={(e) =>
                updateGlobalState("RECOURS_TELEMEDECINE", e.target.value)
              }
            >
              <div className="flex flex-col">
                <FormControlLabel value="Oui" control={<Radio />} label="Oui" />
                <FormControlLabel value="Non" control={<Radio />} label="Non" />
              </div>
            </RadioGroup>
          </FormControl>
        </div>

        <div className="connaissance_telemedecine">
          <FormControl>
            <div
              id="demo-row-radio-buttons-group-label"
              className="text-black font-semibold mt-2"
            >
              7-Seriez-vous à l’aise avec l’utilisation des services de
              télémédecine pour vos besoins en matière de soins de santé ?
            </div>
            <RadioGroup
              row
              aria-labelledby="demo-row-radio-buttons-group-label"
              name="row-radio-buttons-group"
              value={globalState.CONFORT_AVEC_TELEMEDECINE}
              onChange={(e) =>
                updateGlobalState("CONFORT_AVEC_TELEMEDECINE", e.target.value)
              }
            >
              <div className="flex flex-col">
                <FormControlLabel
                  value="Tres_confortable"
                  control={<Radio />}
                  label="Très confortable"
                />
                <FormControlLabel value="1" control={<Radio />} label="1" />
                <FormControlLabel value="1" control={<Radio />} label="1" />
                <FormControlLabel value="2" control={<Radio />} label="2" />
                <FormControlLabel value="3" control={<Radio />} label="3" />
                <FormControlLabel value="4" control={<Radio />} label="4" />
                <FormControlLabel value="5" control={<Radio />} label="5" />
                <FormControlLabel
                  value="Tres_inconfortable"
                  control={<Radio />}
                  label="Trés inconfortable"
                />
              </div>
            </RadioGroup>
          </FormControl>
        </div>

        <div className="reccours_telemedecine">
          <FormControl>
            <div
              id="demo-row-radio-buttons-group-label"
              className="text-black font-semibold mt-2"
            >
              8-Utiliseriez-vous les services de télémédecine pour vos besoins
              en matière de soins de santé ?
            </div>
            <RadioGroup
              row
              aria-labelledby="demo-row-radio-buttons-group-label"
              name="row-radio-buttons-group"
              value={globalState.SERVICE_TELEMEDECINE}
              onChange={(e) =>
                updateGlobalState("SERVICE_TELEMEDECINE", e.target.value)
              }
            >
              <div className="flex flex-col">
                <FormControlLabel value="Oui" control={<Radio />} label="Oui" />
                <FormControlLabel value="Non" control={<Radio />} label="Non" />
              </div>
            </RadioGroup>
          </FormControl>
        </div>
        <div className="utilisez_autre_chose">
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
                  9-Si non, utilisez autre chose, veuillez en indiquer la
                  raison.
                </div>

                <textarea
                  className="textarea textarea-bordered m-2"
                  placeholder="Votre reponse"
                  value={globalState.AUTRE_CHOSE}
                  onChange={(e) =>
                    updateGlobalState("AUTRE_CHOSE", e.target.value)
                  }
                ></textarea>
              </FormControl>
            </div>
          </FormControl>
        </div>

        <div className="Question_concernant_telemedecine">
          <FormControl>
            <div
              id="demo-row-radio-buttons-group-label"
              className="text-black font-semibold mt-2"
            >
              10-Avez-vous des préoccupations concernant l'utilisation de la
              télémédecine ?
            </div>
            <RadioGroup
              row
              aria-labelledby="demo-row-radio-buttons-group-label"
              name="row-radio-buttons-group"
              value={globalState.PREOCUPATION_TELEMEDECINE}
              onChange={(e) =>
                updateGlobalState("PREOCUPATION_TELEMEDECINE", e.target.value)
              }
            >
              <div className="flex flex-col">
                <FormControlLabel value="Oui" control={<Radio />} label="Oui" />
                <FormControlLabel value="Non" control={<Radio />} label="Non" />
              </div>
            </RadioGroup>
          </FormControl>
        </div>

        <div className="apport_bénéfique_telemedecine">
          <FormControl>
            <div
              id="demo-row-radio-buttons-group-label"
              className="text-black font-semibold mt-2"
            >
              11-Pensez-vous que la télémédecine serait bénéfique à votre
              communauté ?
            </div>
            <RadioGroup
              row
              aria-labelledby="demo-row-radio-buttons-group-label"
              name="row-radio-buttons-group"
              value={globalState.TELEMEDECINE_BENEFIQUE}
              onChange={(e) =>
                updateGlobalState("TELEMEDECINE_BENEFIQUE", e.target.value)
              }
            >
              <div className="flex flex-col">
                <FormControlLabel value="Oui" control={<Radio />} label="Oui" />
                <FormControlLabel value="Non" control={<Radio />} label="Non" />
              </div>
            </RadioGroup>
          </FormControl>
        </div>
      </div>

      {/* **********************************
       *********************************
       **************************
       ***************PARTIE C ********* */}

      <div className="Infrastrucuture_technologiques">
        <p className="text-customBluePure  font-semibold mt-4">
          SECTION C : Infrastructure et technologie
        </p>

        <div className="posseder_un_smarthphone">
          <FormControl>
            <div
              id="demo-row-radio-buttons-group-label"
              className="text-black font-semibold mt-2"
            >
              12-Possédez-vous ou avez-vous accès à un smartphone ?
            </div>
            <RadioGroup
              row
              aria-labelledby="demo-row-radio-buttons-group-label"
              name="row-radio-buttons-group"
              value={globalState.POSSESSION_SMARTPHONE}
              onChange={(e) =>
                updateGlobalState("POSSESSION_SMARTPHONE", e.target.value)
              }
            >
              <div className="flex flex-col">
                <FormControlLabel value="Oui" control={<Radio />} label="Oui" />

                <FormControlLabel value="Non" control={<Radio />} label="Non" />
              </div>
            </RadioGroup>
          </FormControl>
        </div>

        <div className="utilisez_un_autre_equipement_technologique">
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
                  13-Si non, pourquoi?
                </div>

                <textarea
                  className="textarea textarea-bordered m-2"
                  placeholder="Votre reponse"
                  value={globalState.SI_NON_POURQUOI}
                  onChange={(e) =>
                    updateGlobalState("SI_NON_POURQUOI", e.target.value)
                  }
                ></textarea>
              </FormControl>
            </div>
          </FormControl>
        </div>
      </div>

      {/* **********************************
       *********************************
       **************************
       ***************PARTIE D ********* */}

      <div className="accessinbilite_utlisation_par_les_patients">
        <p className="text-customBluePure  font-semibold mt-4">
          SECTION D : Accessibilité et utilisation par les patients
        </p>

        <div className="connaissance_telemedecine">
          <FormControl>
            <div
              id="demo-row-radio-buttons-group-label"
              className="text-black font-semibold mt-2"
            >
              14-Comment décririez-vous votre attitude à l’égard des
              consultations à distance avec un médecin ?
            </div>
            <RadioGroup
              row
              aria-labelledby="demo-row-radio-buttons-group-label"
              name="row-radio-buttons-group"
              value={globalState.ATTITUDE_TELEMEDECINE}
              onChange={(e) =>
                updateGlobalState("ATTITUDE_TELEMEDECINE", e.target.value)
              }
            >
              <div className="flex flex-col">
                <FormControlLabel
                  value="Tres_positif"
                  control={<Radio />}
                  label="Très positif"
                />
                <FormControlLabel value="1" control={<Radio />} label="1" />
                <FormControlLabel value="1" control={<Radio />} label="1" />
                <FormControlLabel value="2" control={<Radio />} label="2" />
                <FormControlLabel value="3" control={<Radio />} label="3" />
                <FormControlLabel value="4" control={<Radio />} label="4" />
                <FormControlLabel value="5" control={<Radio />} label="5" />
                <FormControlLabel
                  value="Tres_négatif"
                  control={<Radio />}
                  label="Trés négatif"
                />
              </div>
            </RadioGroup>
          </FormControl>
        </div>

        <div className="reccours_telemedecine">
          <FormControl>
            <div
              id="demo-row-radio-buttons-group-label"
              className="text-black font-semibold mt-2"
            >
              15-Préférez-vous être soigné par un médecin sur place ou en vous
              déplaçant ?
            </div>
            <RadioGroup
              row
              aria-labelledby="demo-row-radio-buttons-group-label"
              name="row-radio-buttons-group"
              value={globalState.PREFERENCE_SOIN}
              onChange={(e) =>
                updateGlobalState("PREFERENCE_SOIN", e.target.value)
              }
            >
              <div className="flex flex-col">
                <FormControlLabel
                  value="En_deplacement"
                  control={<Radio />}
                  label="En deplacement"
                />
                <FormControlLabel
                  value="Sur_place"
                  control={<Radio />}
                  label="Sur place"
                />
              </div>
            </RadioGroup>
          </FormControl>
        </div>

        <div className="utilisez_autre_chose">
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
                  16-Veuillez indiquer pourquoi ?
                </div>

                <textarea
                  className="textarea textarea-bordered m-2"
                  placeholder="Votre reponse"
                  value={globalState.POURQUOI}
                  onChange={(e) =>
                    updateGlobalState("POURQUOI", e.target.value)
                  }
                ></textarea>
              </FormControl>
            </div>
          </FormControl>
        </div>

        <div className="connaissance_telemedecine">
          <FormControl>
            <div
              id="demo-row-radio-buttons-group-label"
              className="text-black font-semibold mt-2"
            >
              17- Avez-vous des inquiétudes quant à la confidentialité et à la
              sécurité de vos informations de santé lorsque vous utilisez les
              services de télémédecine ?
            </div>
            <RadioGroup
              row
              aria-labelledby="demo-row-radio-buttons-group-label"
              name="row-radio-buttons-group"
              value={globalState.SECURITE_DES_INFORMATIONS}
              onChange={(e) =>
                updateGlobalState("SECURITE_DES_INFORMATIONS", e.target.value)
              }
            >
              <div className="flex flex-col">
                <FormControlLabel value="Oui" control={<Radio />} label="Oui" />

                <FormControlLabel value="Non" control={<Radio />} label="Non" />
              </div>
            </RadioGroup>
          </FormControl>
        </div>
      </div>

      {/* **********************************
       *********************************
       **************************
       ***************PARTIE E ********* */}

      <div className="accessinbilite_utlisation_par_les_patients">
        <p className="text-customBluePure  font-semibold mt-4">
          SECTION E : Viabilité économique et modèle de tarification
        </p>

        <div className="connaissance_telemedecine">
          <FormControl>
            <div
              id="demo-row-radio-buttons-group-label"
              className="text-black font-semibold mt-2"
            >
              18-De la consultation en présentielle ou la téléconsultation
              quelle type de consultation préfériez-vous pour votre suivi ?
            </div>
            <RadioGroup
              row
              aria-labelledby="demo-row-radio-buttons-group-label"
              name="row-radio-buttons-group"
              value={globalState.PREFERENCE_CONSULTATION}
              onChange={(e) =>
                updateGlobalState("PREFERENCE_CONSULTATION", e.target.value)
              }
            >
              <div className="flex flex-col">
                <FormControlLabel
                  value="Consultation_en_presentielle"
                  control={<Radio />}
                  label="Consultation en présentielle"
                />

                <FormControlLabel
                  value="Teleconsultation"
                  control={<Radio />}
                  label="Téléconsultation"
                />
              </div>
            </RadioGroup>
          </FormControl>
        </div>

        <div className="reccours_telemedecine">
          <FormControl>
            <div
              id="demo-row-radio-buttons-group-label"
              className="text-black font-semibold mt-2"
            >
              19-Qui se charge des frais de santé dans votre ménage ?
            </div>
            <RadioGroup
              row
              aria-labelledby="demo-row-radio-buttons-group-label"
              name="row-radio-buttons-group"
              value={globalState.FRAIS_DE_SANTE}
              onChange={(e) =>
                updateGlobalState("FRAIS_DE_SANTE", e.target.value)
              }
            >
              <div className="flex flex-col">
                <FormControlLabel
                  value="Moi-même"
                  control={<Radio />}
                  label="Moi-même"
                />
                <FormControlLabel
                  value="Mon_conjoint"
                  control={<Radio />}
                  label="Mon conjoint"
                />
                <FormControlLabel
                  value="Autre"
                  control={<Radio />}
                  label="Autre"
                />
              </div>
            </RadioGroup>
          </FormControl>
        </div>

        <div className="combien_serez_vous_pret_a_payer">
          <FormControl>
            <div
              id="demo-row-radio-buttons-group-label"
              className="text-black font-semibold mt-2"
            >
              <FormControl>
                <div
                  id="demo-row-radio-buttons-group-label"
                  className="text-black font-semibold mt-2 mb-4"
                >
                  20-Combien seriez-vous prêt à payer pour une consultation via
                  télémédecine ?
                </div>

                <input
                  value={globalState.PRIX_POUR_TELEMEDECINE}
                  onChange={(e) =>
                    updateGlobalState("PRIX_POUR_TELEMEDECINE", e.target.value)
                  }
                  name="hours"
                  type="text"
                  placeholder=""
                  className="input input-bordered w-full max-w-xs"
                />
              </FormControl>
            </div>
          </FormControl>
        </div>

        <div className="etes_pour_le_prix_de_la_teleconsultation">
          <FormControl>
            <div
              id="demo-row-radio-buttons-group-label"
              className="text-black font-semibold mt-2"
            >
              20-Sachant que l’échographie pelvienne en présentielle coûte entre
              6000 F et 8000 FCFA ; Et sachant que la télémédecine vous épargne
              un déplacement incertain <br /> seriez-vous prêt à payer 6000 FCFA
              pour une échographie ou électrocardiogramme via télémédecine ?
            </div>
            <RadioGroup
              row
              aria-labelledby="demo-row-radio-buttons-group-label"
              name="row-radio-buttons-group"
              value={globalState.SIX_MILLE_POUR_TELEMEDECINE}
              onChange={(e) =>
                updateGlobalState("SIX_MILLE_POUR_TELEMEDECINE", e.target.value)
              }
            >
              <div className="flex flex-col">
                <FormControlLabel value="Oui" control={<Radio />} label="Oui" />
                <FormControlLabel value="Non" control={<Radio />} label="Non" />
              </div>
            </RadioGroup>
          </FormControl>
        </div>

        {/* <div className="utilisez_autre_chose">
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
                  15-Veuillez indiquer pourquoi ?
                </div>

                <textarea
                  className="textarea textarea-bordered m-2"
                  placeholder="Votre reponse"
                ></textarea>
              </FormControl>
            </div>
          </FormControl>
        </div>

        <div className="connaissance_telemedecine">
          <FormControl>
            <div
              id="demo-row-radio-buttons-group-label"
              className="text-black font-semibold mt-2"
            >
              16- Avez-vous des inquiétudes quant à la confidentialité et à la
              sécurité de vos informations de santé lorsque vous utilisez les
              services de télémédecine ?
            </div>
            <RadioGroup
              row
              aria-labelledby="demo-row-radio-buttons-group-label"
              name="row-radio-buttons-group"
            >
              <div className="flex flex-col">
                <FormControlLabel value="Oui" control={<Radio />} label="Oui" />

                <FormControlLabel value="Non" control={<Radio />} label="Non" />
              </div>
            </RadioGroup>
          </FormControl>
        </div> */}
      </div>
    </div>
  );
}
