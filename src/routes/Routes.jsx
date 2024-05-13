import { createBrowserRouter } from "react-router-dom";
import PrivateRoute from "./PrivateRoute";
import App from "../App";
import Login from "../pages/Login/Login";
import { routeGenerator } from "../utilities/lib/routesGenerator";
import { userPaths } from "./user.routes";

export const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <PrivateRoute>
        <App />
      </PrivateRoute>
    ),
    children: routeGenerator(userPaths),
  },
  {
    path: "/login",
    element: <Login />,
  },
]);
