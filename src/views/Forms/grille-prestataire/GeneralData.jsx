import React from "react";

export default function GeneralData({ globalState, updateGlobalState }) {
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
              type="text"
              name="name"
              value={globalState.nom_agent}
              onChange={(e) => updateGlobalState("nom_agent", e.target.value)}
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
              value={globalState.prenoms_agent}
              onChange={(e) =>
                updateGlobalState("prenoms_agent", e.target.value)
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
              value={globalState.fonction_agent}
              onChange={(e) =>
                updateGlobalState("fonction_agent", e.target.value)
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
              name="speciality"
              type="text"
              placeholder="Ex:Assistant"
              className="input input-bordered w-full"
              value={globalState.specialite}
              onChange={(e) => updateGlobalState("specialite", e.target.value)}
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
              name="service"
              type="text"
              placeholder="Ex:Assistant"
              className="input input-bordered w-full"
              value={globalState.service}
              onChange={(e) => updateGlobalState("service", e.target.value)}
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
              name="phone"
              type="number"
              placeholder="Ex: 07 00 00 00"
              className="input input-bordered w-full"
              value={globalState.contact}
              onChange={(e) => updateGlobalState("contact", e.target.value)}
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
              name="registeredDate"
              type="Date"
              placeholder="24-Nov-2015"
              className="input input-bordered w-full max-w-xs"
              value={globalState.date_enquete}
              onChange={(e) =>
                updateGlobalState("date_enquete", e.target.value)
              }
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
              name="hours"
              type="time"
              placeholder=""
              className="input input-bordered w-full max-w-xs"
              value={globalState.heure_debut}
              onChange={(e) => updateGlobalState("heure_debut", e.target.value)}
            />
          </label>
          <label className="form-control w-full max-w-xs">
            <div className="label">
              <span className="label-text text-gray-600 font-semibold">
                Heure de la fin
              </span>
            </div>
            <input
              type="time"
              name="hours"
              placeholder="Ex:Ivoirienne"
              className="input input-bordered w-full max-w-xs"
              value={globalState.heure_fin}
              onChange={(e) => updateGlobalState("heure_fin", e.target.value)}
            />
          </label>
        </div>
      </div>
    </div>
  );
}
