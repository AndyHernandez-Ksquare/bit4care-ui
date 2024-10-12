import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { ThemeProvider } from "@mui/material";
import customTheme from "./style/theme/customTheme.ts";
import { ColaboratosPage } from "./modules/admin/pages/ColaboratorsPage/ColaboratosPage.tsx";
import { HomePage } from "./modules/admin/pages/HomePage/HomePage.tsx";
import { ServicePage } from "./modules/admin/pages/ServicesPage/ServicePage.tsx";
import { ClientsPage } from "./modules/admin/pages/ClientsPage/ClientsPage.tsx";
import { Settings } from "./modules/admin/pages/SettingsPage/Settings.tsx";
import { AdminLayout } from "./modules/admin/components/AdminLayout.tsx";
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
import { B4CClientsNewService } from "./modules/users/clients/pages/ClientsNewService/B4CClientsNewService.tsx";
import { ClientPaymentPage } from "./modules/users/clients/pages/ClientPaymentPage/ClientPaymentPage.tsx";
import { AdminLogin } from "./modules/admin/pages/AdminLogin.tsx";
import { AdminSessionProvider } from "./context/session/AdminSessionContext.tsx";
import { ForgotPassword } from "./modules/admin/ForgotPassword.tsx";
import { AdminLoginForm } from "./modules/admin/AdminForms/AdminLoginForm/AdminLoginForm.tsx";
import { AcceptedPage } from "./modules/admin/pages/AcceptedUserPage/AcceptedPage.tsx";
import { PendingPage } from "./modules/admin/pages/PendingUserPage/PendingPage.tsx";
import { CheckUserRequest } from "./modules/admin/pages/CheckUserRequest/CheckUserRequest.tsx";
import { ServiceTable } from "./modules/admin/pages/ServicesPage/components/ServiceTable.tsx";
import { ServiceDetailAdminPage } from "./modules/admin/pages/ServicesPage/components/ServiceDetailAdminPage.tsx";
import ColaboratorsRegister from "./modules/users/register/pages/ColaboratorsRegister.tsx";
import { StrictMode } from "react";
import { Index } from "./modules/admin/pages/Index/Index.tsx";
import { ClientsSignup } from "./modules/users/clients/pages/ClientsSignup/index.ts";
import { ClientsForgotPassword } from "./modules/users/clients/pages/ClientsForgotPassword/ClientsForgotPassword.tsx";
import { NewClientService } from "./modules/users/clients/pages/NewClientService/NewClientService.tsx";
import { ServiceDataProvider } from "./modules/users/clients/context/NewServiceContext.tsx";
import { GlobalScrollbarStyles } from "./style/theme/thinScrollBar.tsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Index />,
  },
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
        children: [
          {
            path: "/admin/colaboradores/",
            element: <AcceptedPage />,
          },
          {
            path: "/admin/colaboradores/pendientes",
            element: <PendingPage />,
          },
          {
            path: "/admin/colaboradores/solicitud",
            element: <CheckUserRequest />,
          },
        ],
      },
      {
        path: "/admin/servicios",
        element: <ServicePage />,
        children: [
          {
            path: "/admin/servicios/",
            element: <ServiceTable />,
          },
          {
            path: "/admin/servicios/detalle",
            element: <ServiceDetailAdminPage />,
          },
        ],
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
          {
            path: "/colaborador/registro",
            element: <ColaboratorsRegister />,
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

            element: (
              <ServiceDataProvider>
                <NewClientService />
              </ServiceDataProvider>
            ),
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
    path: "/colaborador/login",
    element: <ColaboratorLogin />,
  },
  {
    path: "/cliente/login",
    element: <ClientLogin />,
  },
  {
    path: "/admin/login",
    element: <AdminLogin />,
    children: [
      {
        path: "/admin/login/",
        element: <AdminLoginForm />,
      },
      {
        path: "/admin/login/olvide-contrasena",
        element: <ForgotPassword />,
      },
    ],
  },
  {
    path: "/clientepago",
    element: <ClientPaymentPage />,
  },
  {
    path: "/cliente/registro",
    element: <ClientsSignup />,
  },
  {
    path: "/cliente/olvide-contrasena",
    element: <ClientsForgotPassword />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <AdminSessionProvider>
      <ThemeProvider theme={customTheme}>
        <GlobalScrollbarStyles />
        <RouterProvider router={router} />
      </ThemeProvider>
    </AdminSessionProvider>
  </StrictMode>,
);
