import logo from '../../assets/logo.svg';
import { Link } from 'react-router-dom';

function AppLogo() {
  return (
    <div className="cursor-pointer">
      <Link to={'/'}>
        <img src={logo} alt="Notes Haven Logo" />
      </Link>
    </div>
  );
}

export default AppLogo;
