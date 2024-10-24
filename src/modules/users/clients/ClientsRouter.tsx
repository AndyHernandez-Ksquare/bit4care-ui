import { ClientsLayout } from "./ClientsLayout";
import { ClientsHome } from "./pages/ClientsHome";
import { ClientsServices } from "./pages/ClientsServices";
import { ClientsAccount } from "./pages/ClientsAccount";
import { ClientsSignup } from "./pages/ClientsSignup";
import { ClientLogin } from "./pages/Login/ClientLogin";
import { NewClientService } from "./pages/NewClientService";
import { ServiceDataProvider } from "./context/NewServiceContext";
import { B4CClientsNewService } from "./pages/ClientsNewService";
import { ClientPaymentPage } from "./pages/ClientPaymentPage/ClientPaymentPage";
import { ClientsForgotPassword } from "./pages/ClientsForgotPassword";
import { ProtectedCollaboratorModule } from "../colaborators/pages/ProtectedModule/ProtectedCollaboratorModule";
import { RouteObject } from "react-router-dom";

export const clientsRouter: RouteObject[] = [
  {
    path: "/cliente",
    element: <ProtectedCollaboratorModule />,
    children: [
      {
        path: "/cliente",
        element: (
          <ServiceDataProvider>
            <ClientsLayout />
          </ServiceDataProvider>
        ),
        children: [
          {
            path: "/cliente/",
            element: <ClientsHome />,
          },
          {
            path: "/cliente/colaborador",

            element: <NewClientService />,
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
  { path: "/cliente/registro", element: <ClientsSignup /> },
  {
    path: "/cliente/login",
    element: <ClientLogin />,
  },
  {
    path: "/clientepago",
    element: <ClientPaymentPage />,
  },
  {
    path: "/cliente/olvide-contrasena",
    element: <ClientsForgotPassword />,
  },
];
