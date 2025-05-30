import logo from "../../assets/logo.svg";
import { NOTES_URL } from '../../features/notes/constants/urls';
import { Link } from "react-router-dom";

function AppLogo() {
    return (
         <div className="cursor-pointer">
            <Link to={NOTES_URL}><img
              src={logo}
              alt="Notes Haven Logo"
            /></Link>
        </div>
    );
}

export default AppLogo;