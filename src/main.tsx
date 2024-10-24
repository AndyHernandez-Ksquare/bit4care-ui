import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { ThemeProvider } from "@mui/material";
import customTheme from "./style/theme/customTheme.ts";
import { AdminSessionProvider } from "./context/session/AdminSessionContext.tsx";
import { StrictMode } from "react";
import { Index } from "./modules/admin/pages/Index/Index.tsx";
import { GlobalScrollbarStyles } from "./style/theme/thinScrollBar.tsx";
import { TermsAndConditionsPage } from "./modules/common/pages/TermsAndCondition.tsx";
import { PrivacyPolicyPage } from "./modules/common/pages/PrivacyPolicy.tsx";
import { clientsRouter } from "./modules/users/clients/ClientsRouter.tsx";
import { colaboratorsRouter } from "./modules/users/colaborators/ColaboratorsRouter.tsx";
import { adminRouter } from "./modules/admin/pages/AdminRouter.tsx";

const combinedRoutes = [
  ...clientsRouter,
  ...colaboratorsRouter,
  ...adminRouter,
];

const router = createBrowserRouter([
  ...combinedRoutes,
  {
    path: "/",
    element: <Index />,
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
      <ThemeProvider theme={customTheme}>
        <GlobalScrollbarStyles />
        <RouterProvider router={router} />
      </ThemeProvider>
    </AdminSessionProvider>
  </StrictMode>,
);
