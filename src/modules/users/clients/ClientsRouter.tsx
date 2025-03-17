import { ClientsLayout } from "./ClientsLayout";
import { ClientsServices } from "./pages/ClientsServices";
import { ClientsAccount } from "./pages/ClientsAccount";
import { ClientsSignup } from "./pages/ClientsSignup";
import { ClientLogin } from "./pages/Login/ClientLogin";
import { ServiceDataProvider } from "./context/NewServiceContext";
import { B4CClientsNewService } from "./pages/ClientsNewService";
import { ClientPaymentPage } from "./pages/ClientPaymentPage/ClientPaymentPage";
import { ClientsForgotPassword } from "./pages/ClientsForgotPassword";
import { RouteObject } from "react-router-dom";
import { ClientProtectedModule } from "./pages/ClientProtectedModule/ClientProtectedModule";
import { ClientApiProvider } from "@/context/api/apiClientContext";

export const clientsRouter: RouteObject[] = [
  {
    path: "/cliente",
    element: <ClientProtectedModule />,
    children: [
      {
        path: "/cliente",
        element: (
          <ClientApiProvider>
            <ServiceDataProvider>
              <ClientsLayout />
            </ServiceDataProvider>
          </ClientApiProvider>
        ),
        children: [
          {
            path: "/cliente/",
            element: <ClientsServices />,
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
            path: `/cliente/mis-servicios/:id`,
            element: <B4CClientsNewService mode="edit" />,
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
    path: "/cliente/agendar-y-pagar",
    element: <ClientPaymentPage />,
  },
  {
    path: "/cliente/olvide-contrasena",
    element: <ClientsForgotPassword />,
  },
];
