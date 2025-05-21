import { RouteObject } from "react-router-dom";

import { Settings } from "@mui/icons-material";
import { AdminLayout } from "./components/AdminLayout";
import { HomePage } from "./pages/HomePage/HomePage";
import { ColaboratosPage } from "./pages/ColaboratorsPage/ColaboratosPage";
import { AcceptedPage } from "./pages/AcceptedUserPage/AcceptedPage";
import { PendingPage } from "./pages/PendingUserPage/PendingPage";
import { CheckUserRequest } from "./pages/CheckUserRequest";
import { ServicePage } from "./pages/ServicesPage/ServicePage";
import { ServiceTable } from "./pages/ServicesPage/components/ServiceTable";
import { ServiceDetailAdminPage } from "./pages/ServicesPage/components/ServiceDetailAdminPage";
import { ClientsPage } from "./pages/ClientsPage/ClientsPage";
import { AdminLogin } from "./pages/AdminLogin";
import { AdminLoginForm } from "./AdminForms/AdminLoginForm/AdminLoginForm";
import { ForgotPassword } from "./ForgotPassword";
import { ProtectedAdminModule } from "./pages/ProtectedAdminModule/ProtectedAdminModule";

export const adminRouter: RouteObject[] = [
  {
    path: "/admin",
    element: <ProtectedAdminModule />,
    children: [
      {
        path: "/admin",
        element: <AdminLayout />,
        children: [
          // {
          //   path: "/admin/",
          //   element: <HomePage />,
          // },
          {
            path: "/admin/",
            element: <ServicePage />,
            children: [
              {
                path: "/admin/",
                element: <ServiceTable />,
              },
              {
                path: "/admin/detalle",
                element: <ServiceDetailAdminPage />,
              },
            ],
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
            path: "/admin/clientes",
            element: <ClientsPage />,
          },
          // {
          //   path: "/admin/ajustes",
          //   element: <Settings />,
          // },
          {
            path: "*",
            element: <p>random</p>,
          },
        ],
      },
    ],
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
];
