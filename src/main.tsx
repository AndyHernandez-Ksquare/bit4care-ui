import React from "react";
import ReactDOM from "react-dom/client";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { ThemeProvider } from "@mui/material";
import customTheme from "./style/theme/customTheme.ts";
import { ColaboratosPage } from "./modules/admin/ColaboratorsPage/ColaboratosPage.tsx";
import { HomePage } from "./modules/admin/HomePage/HomePage.tsx";
import { ServicePage } from "./modules/admin/ServicesPage/ServicePage.tsx";
import { ClientsPage } from "./modules/admin/ClientsPage/ClientsPage.tsx";
import { Settings } from "./modules/admin/SettingsPage/Settings.tsx";
import { AdminLayout } from "./modules/admin/AdminLayout.tsx";
import { ColaboratorsLayout } from "./modules/users/colaborators/ColaboratorsLayout.tsx";
import { ColaboratorsHome } from "./modules/users/colaborators/pages/ColaboratorsHome/ColaboratorsHome.tsx";
import { ColaboratorLogin } from "./modules/users/colaborators/pages/Login/index.ts";
import { SettingsAndProfile } from "./modules/users/colaborators/pages/SettingsAndProfile/SettingsAndProfile.tsx";
import { ProtectedCollaboratorModule } from "./modules/users/colaborators/pages/ProtectedModule/ProtectedCollaboratorModule.tsx";
import { ClientLogin } from "./modules/users/clients/pages/Login/ClientLogin.tsx";
import { ClientsLayout } from "./modules/users/clients/ClientsLayout.tsx";
import { ClientsHome } from "./modules/users/clients/pages/ClientsHome";
import { ClientsServices } from "./modules/users/clients/pages/ClientsServices";
import { ClientsAccount } from "./modules/users/clients/pages/ClientsAccount";
import { B4CColaboradorDetail } from "./modules/users/clients/pages/ClientsCollaboratorDetail/B4CColaboradorDetail.tsx";
import { User } from "./ts/types/User.type.ts";
import { ClientsReservationDetail } from "./modules/users/clients/pages/ClientsReservationDetail/ClientsReservationDetail.tsx";
import { B4CClientsNewService } from "./modules/users/clients/pages/ClientsNewService/B4CClientsNewService.tsx";

const user: User = {
  name: "María Pérez",
  occupation: "Enfermera Geriátrica",
  verified: true,
  location: "Zona Centro, Querétaro",
  experienceYears: 10,
  hoursWorked: 120,
  rating: 4.9,
  servicesCompleted: 100,
  rate: 200,
  bio: "María García, enfermera geriátrica. Apasionada por el cuidado de los ancianos y comprometida con su bienestar.",
  skills: ["Pie diabético", "Curaciones", "Licencia de conducir", "Cocina"],
};

const router = createBrowserRouter([
  {
    path: "/admin",
    element: <AdminLayout />,
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
  {
    path: "/colaborador",
    element: <ProtectedCollaboratorModule />,
    children: [
      {
        path: "/colaborador",
        element: <ColaboratorsLayout />,
        children: [
          {
            path: "/colaborador/",
            element: <ColaboratorsHome />,
          },
          {
            path: "/colaborador/ajustes-y-perfil",
            element: <SettingsAndProfile />,
          },
        ],
      },
    ],
  },
  {
    path: "/cliente",
    element: <ProtectedCollaboratorModule />,
    children: [
      {
        path: "/cliente",
        element: <ClientsLayout />,
        children: [
          {
            path: "/cliente/",
            element: <ClientsHome />,
          },
          {
            path: "/cliente/colaborador",
            element: <B4CColaboradorDetail user={user} />,
          },
          {
            path: "/cliente/confirmar-y-pagar",
            element: <ClientsReservationDetail />,
          },
          {
            path: "/cliente/mis-servicios",
            element: <ClientsServices />,
          },
          {
            path: "/cliente/mis-servicios/nueva-solicitud",
            element: <B4CClientsNewService />,
          },
          {
            path: "/cliente/ajustes-y-perfil",
            element: <ClientsAccount />,
          },
        ],
      },
    ],
  },
  {
    path: "/ColaboradorLogin",
    element: <ColaboratorLogin />,
  },
  {
    path: "/ClienteLogin",
    element: <ClientLogin />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ThemeProvider theme={customTheme}>
      <RouterProvider router={router} />
    </ThemeProvider>
  </React.StrictMode>
);
