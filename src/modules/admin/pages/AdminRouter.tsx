import { RouteObject } from "react-router-dom";
import { AdminLayout } from "../components/AdminLayout";
import { HomePage } from "./HomePage/HomePage";
import { ColaboratosPage } from "./ColaboratorsPage/ColaboratosPage";
import { AcceptedPage } from "./AcceptedUserPage/AcceptedPage";
import { PendingPage } from "./PendingUserPage/PendingPage";
import { CheckUserRequest } from "./CheckUserRequest";
import { ServicePage } from "./ServicesPage/ServicePage";
import { ServiceTable } from "./ServicesPage/components/ServiceTable";
import { ServiceDetailAdminPage } from "./ServicesPage/components/ServiceDetailAdminPage";
import { ClientsPage } from "./ClientsPage/ClientsPage";
import { Settings } from "@mui/icons-material";
import { AdminLogin } from "./AdminLogin";
import { AdminLoginForm } from "../AdminForms/AdminLoginForm/AdminLoginForm";
import { ForgotPassword } from "../ForgotPassword";

export const adminRouter: RouteObject[] = [
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
