import { lazy } from 'react';

const Signup = lazy(() => import('./pages/Signup'));
const ForgotPassword = lazy(() => import('./pages/ForgotPassword'));
const ResetPassword = lazy(() => import('./pages/ResetPassword'));

import Container from '../../shared/components/Container';
import Login from './pages/Login';
import {
  FORGOT_PASSWORD_URL,
  LOGIN_URL,
  RESET_PASSWORD_URL,
  SIGNUP_URL,
} from './constants/urls';

const withContainer = (Component: React.ComponentType) => (
  <Container>
    <Component />
  </Container>
);

export const authRoutes = [
  {
    path: LOGIN_URL,
    component: withContainer(Login),
  },
  { path: SIGNUP_URL, component: withContainer(Signup) },
  { path: FORGOT_PASSWORD_URL, component: withContainer(ForgotPassword) },
  {
    path: RESET_PASSWORD_URL,
    component: withContainer(ResetPassword),
  },
];
