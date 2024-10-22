import React from "react";

export default function GeneralDataSanitaire({
  updateGlobalState,
  globalState,
}) {
  return (
    <div className="mt-5">
      <div>
        <h1 className="text-customBluePure text-2xl font-bold">
          Données générales
        </h1>
      </div>
      <div>
        <div className="name_and_firstname flex items-center gap-4">
          <label className="form-control w-full max-w-xs">
            <div className="label">
              <span className="label-text text-gray-600 font-semibold">
                Nom de l'agent enquêté
              </span>
            </div>
            <input
              value={globalState.NOM_AGENT}
              onChange={(e) => updateGlobalState("NOM_AGENT", e.target.value)}
              type="text"
              name="name"
              placeholder="Ex: N'guessan"
              className="input input-bordered w-full max-w-xs"
            />
          </label>
          <label className="form-control w-full max-w-xs">
            <div className="label">
              <span className="label-text text-gray-600 font-semibold">
                Prénoms de l'agent enquêté
              </span>
            </div>
            <input
              value={globalState.PRENOMS_AGENT}
              onChange={(e) =>
                updateGlobalState("PRENOMS_AGENT", e.target.value)
              }
              type="text"
              name="firstname"
              placeholder="Ex: Kouassi Franck"
              className="input input-bordered w-full max-w-xs"
            />
          </label>
        </div>

        {/* Foncions/qualification */}

        <div className="profession">
          <label className="form-control w-full ">
            <div className="label">
              <span className="label-text text-gray-600 font-semibold">
                Foncions/qualifications
              </span>
            </div>
            <input
              value={globalState.FONCTION_AGENT}
              onChange={(e) =>
                updateGlobalState("FONCTION_AGENT", e.target.value)
              }
              name="FoncionsQualification"
              type="text"
              placeholder="Ex:Assistant"
              className="input input-bordered w-full"
            />
          </label>
        </div>

        {/* Spécialités */}
        <div className="profession">
          <label className="form-control w-full ">
            <div className="label">
              <span className="label-text text-gray-600 font-semibold">
                Spécialités
              </span>
            </div>
            <input
              value={globalState.SPECIALITE}
              onChange={(e) => updateGlobalState("SPECIALITE", e.target.value)}
              name="speciality"
              type="text"
              placeholder="Ex:Assistant"
              className="input input-bordered w-full"
            />
          </label>
        </div>

        {/* Services*/}

        <div className="profession">
          <label className="form-control w-full ">
            <div className="label">
              <span className="label-text text-gray-600 font-semibold">
                Service
              </span>
            </div>
            <input
              value={globalState.SERVICE}
              onChange={(e) => updateGlobalState("SERVICE", e.target.value)}
              name="service"
              type="text"
              placeholder="Ex:Assistant"
              className="input input-bordered w-full"
            />
          </label>
        </div>

        {/* Contact*/}

        <div className="phoneNumber">
          <label className="form-control w-full ">
            <div className="label">
              <span className="label-text text-gray-600 font-semibold">
                Contact
              </span>
            </div>
            <input
              value={globalState.CONTACT}
              onChange={(e) => updateGlobalState("CONTACT", e.target.value)}
              name="phone"
              type="number"
              placeholder="Ex: 07 00 00 00"
              className="input input-bordered w-full"
            />
          </label>
        </div>

        <div className="birthday_nationnality ">
          <label className="form-control w-full max-w-xs">
            <div className="label">
              <span className="label-text text-gray-600 font-semibold">
                Date de l’enquête :
              </span>
            </div>
            <input
              value={globalState.DATE_ENQUETE}
              onChange={(e) =>
                updateGlobalState("DATE_ENQUETE", e.target.value)
              }
              name="registeredDate"
              type="Date"
              placeholder="24-Nov-2015"
              className="input input-bordered w-full max-w-xs"
            />
          </label>
        </div>

        <div className="birthday_nationnality flex items-center gap-4">
          <label className="form-control w-full max-w-xs">
            <div className="label">
              <span className="label-text text-gray-600 font-semibold">
                Heure de début
              </span>
            </div>
            <input
              value={globalState.HEURE_DEBUT_ENQUETE}
              onChange={(e) =>
                updateGlobalState("HEURE_DEBUT_ENQUETE", e.target.value)
              }
              name="hours"
              type="time"
              placeholder=""
              className="input input-bordered w-full max-w-xs"
            />
          </label>
          <label className="form-control w-full max-w-xs">
            <div className="label">
              <span className="label-text text-gray-600 font-semibold">
                Heure de la fin
              </span>
            </div>
            <input
              value={globalState.HEURE_FIN_ENQUETE}
              onChange={(e) =>
                updateGlobalState("HEURE_FIN_ENQUETE", e.target.value)
              }
              type="time"
              name="hours"
              placeholder="Ex:Ivoirienne"
              className="input input-bordered w-full max-w-xs"
            />
          </label>
        </div>
      </div>
    </div>
  );
}
