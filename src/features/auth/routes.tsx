import { lazy } from "react";

const Signup = lazy(() => import("./pages/Signup"));
const ForgotPassword = lazy(() => import("./pages/ForgotPassword"));
const ResetPassword = lazy(() => import("./pages/ResetPassword"));

import Container from "../../shared/components/Container";
import Login from "./pages/Login";

const withContainer = (Component: React.ComponentType) => (
  <Container>
    <Component />
  </Container>
);

export const authRoutes = [
  {
    path: "auth/login",
    component: withContainer(Login),
  },
  { path: "/auth/signup", component: withContainer(Signup) },
  { path: "/auth/forgot-password", component: withContainer(ForgotPassword) },
  {
    path: "/auth/reset-password/:token",
    component: withContainer(ResetPassword),
  },
];
