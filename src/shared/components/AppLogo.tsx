import logo from '../../assets/logo.svg';
import { Link } from 'react-router-dom';
import { LANDING_PAGE_URL } from '../constants/urls';

function AppLogo() {
  return (
    <div className="cursor-pointer">
      <Link to={LANDING_PAGE_URL}>
        <img src={logo} alt="Notes Haven Logo" />
      </Link>
    </div>
  );
}

export default AppLogo;
