import React from "react";
import ReactDOM from "react-dom/client";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App.tsx";
import "./index.css";
import { ThemeProvider } from "@mui/material";
import customTheme from "./style/theme/customTheme.ts";
import { ColaboratosPage } from "./modules/admin/ColaboratorsPage/ColaboratosPage.tsx";
import { HomePage } from "./modules/admin/HomePage/HomePage.tsx";
import { ServicePage } from "./modules/admin/ServicesPage/ServicePage.tsx";
import { ClientsPage } from "./modules/admin/ClientsPage/ClientsPage.tsx";
import { Settings } from "./modules/admin/SettingsPage/Settings.tsx";

const router = createBrowserRouter([
  {
    path: "/admin",
    element: <App />,
    children: [
      {
        path: "/admin/",
        element: <HomePage />,
      },
      {
        path: "/admin/colaboradores",
        element: <ColaboratosPage />,
      },
      {
        path: "/admin/servicios",
        element: <ServicePage />,
      },
      {
        path: "/admin/clientes",
        element: <ClientsPage />,
      },
      {
        path: "/admin/ajustes",
        element: <Settings />,
      },
      {
        path: "*",
        element: <p>random</p>,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ThemeProvider theme={customTheme}>
      <RouterProvider router={router} />
    </ThemeProvider>
  </React.StrictMode>
);
