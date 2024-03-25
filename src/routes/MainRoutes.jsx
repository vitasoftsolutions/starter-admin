import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import HomeDashboard from "../pages/Dashboard/HomeDashboard/HomeDashboard";
import Login from "../pages/Login/Login";

export const router = createBrowserRouter([
  {
    path: "/dashboard",
    element: <MainLayout />,
    children: [
      {
        index: true,
        element: <HomeDashboard />,
      },
    ],
  },
  {
    path: "/login",
    element: <Login />,
  },
]);
