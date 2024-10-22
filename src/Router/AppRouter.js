import { Navigate, createHashRouter } from "react-router-dom";
import Layout from "../layout/Layout";
import { UserIsAuthenticated } from "../Utilities/AuthGuard";
import Login from "../views/Login/Login";

import Users from "../views/Users/Users";

const ProtectedRoutes = () => {
  return UserIsAuthenticated() ? <Layout /> : <Navigate replace to="/login" />;
};

export const AppRouter = createHashRouter([
  {
    path: "/login",
    element: <Login />,
  },

  {
    path: "/",
    element: <ProtectedRoutes />,
    //   errorElement: <Notfound />,
    children: [
      {
        path: "/",
        element: <Users />,
      },
      // {
      //   path: "/users",
      //   element: <Users />,
      // },
    ],
  },
]);
