import React, { useEffect } from "react";
import { Outlet } from "react-router-dom";
import SideBar from "../components/SideBar/SideBar";
// import SideBar from "../SideBar/SideBar";

export default function Layout() {
  return (
    <div className=" flex h-screen w-screen bg-stone-100 overflow-hidden">
      <SideBar />

      <div className="outlet p-4">
        <Outlet />
      </div>
    </div>
  );
}
