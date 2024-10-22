import React, { useState } from "react";

export default function General({ globalState, updateGlobalState }) {
  return (
    <div className="mt-5">
      <div>
        <h1 className="text-customBluePure text-2xl font-bold">
          Information Général
        </h1>
      </div>
      <div className="mt-5 name_and_firstname flex items-center gap-4">
        <label className="form-control w-full max-w-xs">
          <div className="label">
            <span className="label-text text-gray-600 font-semibold">
              Region de sanitaire
            </span>
          </div>
          <input
            value={globalState.region}
            onChange={(e) => updateGlobalState("region", e.target.value)}
            type="text"
            placeholder=""
            className="input input-bordered w-full max-w-xs"
          />
        </label>
        <label className="form-control w-full max-w-xs">
          <div className="label">
            <span className="label-text text-gray-600 font-semibold">
              District sanitaire de
            </span>
          </div>
          <input
            value={globalState.district}
            onChange={(e) => updateGlobalState("district", e.target.value)}
            type="text"
            name="firstname"
            placeholder=""
            className="input input-bordered w-full max-w-xs"
          />
        </label>
      </div>

      <div className="">
        <label className="form-control w-full ">
          <div className="label">
            <span className="label-text text-gray-600 font-semibold">
              Nom de la struccture/service Sanitaire
            </span>
          </div>
          <input
            value={globalState.nom_structure}
            onChange={(e) => updateGlobalState("nom_structure", e.target.value)}
            name="email"
            type="text"
            placeholder=""
            className="input input-bordered w-full"
          />
        </label>
      </div>

      <div className="phoneNumber">
        <label className="form-control w-full ">
          <div className="label">
            <span className="label-text text-gray-600 font-semibold">
              Service de soin spécifique
            </span>
          </div>
          <input
            value={globalState.specialisation}
            onChange={(e) =>
              updateGlobalState("specialisation", e.target.value)
            }
            name="phone"
            type="text"
            placeholder=""
            className="input input-bordered w-full"
          />
        </label>
      </div>
      <div className="profession">
        <label className="form-control w-full ">
          <div className="label">
            <span className="label-text text-gray-600 font-semibold">
              Responsable de la structure
            </span>
          </div>
          <input
            value={globalState.responsable}
            onChange={(e) => updateGlobalState("responsable", e.target.value)}
            name="responsbale"
            type="text"
            placeholder=""
            className="input input-bordered w-full"
          />
        </label>
      </div>

      <div className="birthday_nationnality flex items-center gap-4">
        <label className="form-control w-full max-w-xs">
          <div className="label">
            <span className="label-text text-gray-600 font-semibold">
              Date de signature
            </span>
          </div>
          <input
            value={globalState.date_signature}
            onChange={(e) =>
              updateGlobalState("date_signature", e.target.value)
            }
            name="registeredDate"
            type="Date"
            placeholder=""
            className="input input-bordered w-full max-w-xs"
          />
        </label>
      </div>
    </div>
  );
}
