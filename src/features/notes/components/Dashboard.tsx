import { useNavigate } from "react-router-dom";

import { Button } from "../../../shared/components";
import { logout } from "../../../shared/services/authService";
import Sidebar from "./Sidebar";
import Display from "./Display";
import Header from "./Header";

function Dashboard() {
  // const navigate = useNavigate();
  return (
    <div className="grid grid-cols-[300px_minmax(900px,_1fr)]">
      <div className="hidden md:block">
        <Sidebar />
      </div>
      <div>
        <div className="hidden md:block">
          <Header />
        </div>
        <Display />
      </div>
      {/* <Button
        type="button"
        onClick={() => logout(navigate)}
      >
        Log out
      </Button> */}
    </div>
  );
}

export default Dashboard;
