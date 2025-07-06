import { useNavigate } from 'react-router-dom';
import { Button } from '../components';
import { LOGIN_URL, SIGNUP_URL } from '../../features/auth/constants/urls';
import { logout } from '../../features/auth/services/authService';

function LandingPage() {
  const navigate = useNavigate();
  return (
    <div>
      <Button onClick={() => navigate(LOGIN_URL)}>Log in</Button>
      <Button onClick={() => navigate(SIGNUP_URL)}>Sign up</Button>
      <Button onClick={() => logout(navigate)}>Log out</Button>
      <Button onClick={() => navigate('/notes')}>Dashboard</Button>
    </div>
  );
}

export default LandingPage;
