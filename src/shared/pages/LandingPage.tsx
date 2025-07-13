import { useNavigate } from 'react-router-dom';
import { Button } from '../components';
import { LOGIN_URL, SIGNUP_URL } from '../../features/auth/constants/urls';
import { logout } from '../../features/auth/services/authService';
import { DASHBOARD_URL } from '../constants/urls';
import useAuthStore from '../../features/auth/stores/authStore';

function LandingPage() {
  const navigate = useNavigate();
  const token = useAuthStore(state => state.token);
  const isAuthenticated = Boolean(token);

  return (
    <div className="flex flex-col items-center gap-4 p-8">
      <h1 className="text-2xl font-bold">Welcome to NoteApp</h1>

      {isAuthenticated ? (
        <>
          <p className="text-lg text-gray-700">
            You're already logged in — feel free to explore or manage your
            notes.
          </p>
          <div className="flex gap-3">
            <Button onClick={() => navigate(DASHBOARD_URL)}>
              Go to Dashboard
            </Button>
            <Button onClick={() => logout(navigate)}>Log out</Button>
          </div>
        </>
      ) : (
        <>
          <p className="text-lg text-gray-700">
            Log in or sign up to start taking notes.
          </p>
          <div className="flex gap-3">
            <Button onClick={() => navigate(LOGIN_URL)}>Log in</Button>
            <Button onClick={() => navigate(SIGNUP_URL)}>Sign up</Button>
          </div>
        </>
      )}
    </div>
  );
}

export default LandingPage;
