import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { ThemeProvider } from "@mui/material/styles";
import customTheme from "./style/theme/customTheme.ts";
import { AdminSessionProvider } from "./context/session/AdminSessionContext.tsx";
import { StrictMode } from "react";
import { GlobalScrollbarStyles } from "./style/theme/thinScrollBar.tsx";
import { TermsAndConditionsPage } from "./modules/common/pages/TermsAndCondition.tsx";
import { PrivacyPolicyPage } from "./modules/common/pages/PrivacyPolicy.tsx";
import { clientsRouter } from "./modules/users/clients/ClientsRouter.tsx";
import { colaboratorsRouter } from "./modules/users/colaborators/ColaboratorsRouter.tsx";
import { LandingPage } from "./modules/admin/pages/LandingPage/LandingPage.tsx";
import { ClientAuthProvider } from "./context/auth/ClientAuthProvider.tsx";
import { ClientSessionProvider } from "./context/session/ClientSessionProvider.tsx";
import { AuthCollaboratorProvider } from "./context/auth/AuthCollaboratorContext.tsx";
import { CollaboratorSessionProvider } from "./context/session/CollaboratorSessionContext.tsx";
import { SnackbarProvider } from "./context/ui/SnackbarContext.tsx";
import { adminRouter } from "./modules/admin/AdminRouter.tsx";
import { AdminAuthProvider } from "./context/auth/AuthAdminContext.tsx";
import { ClientApiProvider } from "./context/api/apiClientContext.tsx";

const combinedRoutes = [
  ...clientsRouter,
  ...colaboratorsRouter,
  ...adminRouter,
];

const router = createBrowserRouter([
  ...combinedRoutes,
  {
    path: "/",
    element: <LandingPage />,
  },
  {
    path: "/terminos-y-condiciones",
    element: <TermsAndConditionsPage />,
  },
  {
    path: "/politica-de-privacidad",
    element: <PrivacyPolicyPage />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <AdminSessionProvider>
      <ClientApiProvider>
        <ThemeProvider theme={customTheme}>
          <GlobalScrollbarStyles />
          <ClientSessionProvider>
            <AdminAuthProvider>
              <ClientAuthProvider>
                <CollaboratorSessionProvider>
                  <AuthCollaboratorProvider>
                    <SnackbarProvider>
                      <RouterProvider router={router} />
                    </SnackbarProvider>
                  </AuthCollaboratorProvider>
                </CollaboratorSessionProvider>
              </ClientAuthProvider>
            </AdminAuthProvider>
          </ClientSessionProvider>
        </ThemeProvider>
      </ClientApiProvider>
    </AdminSessionProvider>
  </StrictMode>,
);
