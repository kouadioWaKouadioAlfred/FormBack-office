export default function GeneralUsagers({ updateGlobalState, globalState }) {
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
              Region sanitaire de
            </span>
          </div>
          <input
            value={globalState.REGION}
            onChange={(e) => updateGlobalState("REGION", e.target.value)}
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
            value={globalState.DISTRICT}
            onChange={(e) => updateGlobalState("DISTRICT", e.target.value)}
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
              Localité
            </span>
          </div>
          <input
                value={globalState.LOCALITE}
                onChange={(e) => updateGlobalState("LOCALITE", e.target.value)}

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
              Profession
            </span>
          </div>
          <input
          value={globalState.PROFESSION}
          onChange={(e) => updateGlobalState("PROFESSION", e.target.value)}
            name="phone"
            type="text"
            placeholder=""
            className="input input-bordered w-full"
          />
        </label>
      </div>
    </div>
  );
}
