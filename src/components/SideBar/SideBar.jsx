import React from "react";

import { DASHBOARD_SIDEBAR_LINKS } from "../NavBarLinks/Navigtions";
import { Link, useLocation, useNavigate } from "react-router-dom";
import classNames from "classnames";
import { HiLogout } from "react-icons/hi";

const LinksClass =
  "flex items-center gap-2 px-2 py-2 font-light hover:bg-bg-emerald-600 active:bg-emerald-600 rounded-lg";

export default function SideBar() {
  const navigate = useNavigate();
  return (
    <div className="sideBar flex flex-col bg-black/90 p-3 border-r">
      <div className="flex items-center px-1 py-3 gap-2">
        <span className="text-2xl font-extrabold  text-white">FECODAR-CI</span>
      </div>
      <div className="flex-1 mt-10 py-7 gap-1 flex flex-col">
        {DASHBOARD_SIDEBAR_LINKS.map((item) => (
          <SideBarLinks key={item.key} item={item} />
        ))}
      </div>

      <div className="flex flex-col pt-2 border-t gap-1 border-neutral-700">
        {/* {DASHBOARD_SIDEBAR_BOTTOM_LINKS.map((item) => (
          <SideBarLinks key={item.key} item={item} />
        ))} */}

        <div
          className="flex cursor-pointer items-center justify-center gap-2 bg-red-600 w-[247px] h-10 rounded-md text-white"
          onClick={() => document.getElementById("LogOut").showModal()}
        >
          <HiLogout />
          <button className="">Se Deconnecter</button>
        </div>
      </div>

      {/* DELETE PRODUCT MODAL */}
      <dialog id="LogOut" className="modal">
        <div className="modal-box w-11/12 max-w-md rounded-md">
          <form method="dialog">
            {/* if there is a button in form, it will close the modal */}
            <button className="btn btn-sm btn-circle rounded-md hover:bg-SoutraMarketCustumRed text-white btn-ghost bg-SoutraMarketCustumRed absolute right-2 top-2">
              ✕
            </button>
          </form>
          <div className="">
            <h1 className="text-xl mb-3 font-bold tracking-tight leading-tight">
              Vous deconnecter ?
            </h1>

            <p className="text-gray-600">
              Vous êtes sur le point de vous déconnecter de votre compte.
              Voulez-vous confirmer?
            </p>
            <div className="flex items-center justify-center gap-3 mt-4">
              <button
                className=" bg-red-600 text-white font-semibold rounded-md w-56 h-10"
                onClick={() => {
                  document.getElementById("LogOut").close();
                  localStorage.removeItem("formualaire_recensement_docteurs");
                  navigate("/login");
                }}
              >
                Confirmer
              </button>
              <button
                className="bg-[#D0D0D0] text-black font-semibold rounded-md w-56 h-10"
                onClick={() => document.getElementById("LogOut").close()}
              >
                Annuler
              </button>
            </div>
          </div>
        </div>
      </dialog>
    </div>
  );
}

/**
 *
 * @param {*} param0
 * @returns
 */
function SideBarLinks({ item }) {
  const { pathname } = useLocation();
  return (
    <Link
      to={item.path}
      className={classNames(
        pathname === item.path ? "text-white bg-emerald-600" : "text-black",
        LinksClass
      )}
    >
      <span className="text-lg">{item.icon}</span>
      <p className="text-lg font-semibold">{item.Label}</p>
    </Link>
  );
}
