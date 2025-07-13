import { ReactNode } from 'react';
import { Navigate } from 'react-router-dom';
import useAuthStore from '../../features/auth/stores/authStore';
import { LOGIN_URL } from '../../features/auth/constants/urls';

const ProtectedRoute = ({ children }: { children: ReactNode }) => {
  const token = useAuthStore(state => state.token);
  if (!token) return <Navigate to={LOGIN_URL} replace />;
  return children;
};

export default ProtectedRoute;
