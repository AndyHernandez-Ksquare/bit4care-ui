import { ProtectedCollaboratorModule } from "./pages/ProtectedModule/ProtectedCollaboratorModule";
import { ColaboratorsLayout } from "./ColaboratorsLayout";
import { ColaboratorsHome } from "./pages/ColaboratorsHome/ColaboratorsHome";
import { SettingsAndProfile } from "./pages/SettingsAndProfile";
import ColaboratorsRegister from "./pages/register/pages/ColaboratorsRegister";
import { ColaboratorLogin } from "./pages/Login";
import { RouteObject } from "react-router-dom";
import { QuizPage } from "../quiz/pages/Quiz";

export const colaboratorsRouter: RouteObject[] = [
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
    path: "/colaborador/registro",
    element: <ColaboratorsRegister />,
  },
  {
    path: "/colaborador/login",
    element: <ColaboratorLogin />,
  },
  {
    path: "/colaborador/login",
    element: <ColaboratorLogin />,
  },
  {
    path: "/colaborador/quiz",
    element: <QuizPage />,
  },
];
