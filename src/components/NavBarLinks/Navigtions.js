import { HiLogout, HiOutlineUsers } from "react-icons/hi";

export const DASHBOARD_SIDEBAR_LINKS = [
  // {
  //   id: 1,
  //   Label: "Dashboard",
  //   icon: <HiOutlineViewGrid />,
  //   path: "/",
  // },
  {
    id: 1,
    Label: "Réponses",
    icon: <HiOutlineUsers />,
    path: "/",
  },
];

export const DASHBOARD_SIDEBAR_BOTTOM_LINKS = [
  {
    id: 1,
    Label: "Se Deconnecter",
    icon: <HiLogout />,
    // path: "/profile",
  },
];
