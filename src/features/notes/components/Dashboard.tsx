import { useNavigate } from "react-router-dom";

import { Button } from "../../../shared/components";
import { logout } from "../../../shared/services/authService";
import Sidebar from "./Sidebar";
import Display from "./Display";

function Dashboard() {
  const navigate = useNavigate();
  return (
    <div className="grid grid-cols-[300px_minmax(900px,_1fr)]">
      <Sidebar />
      <Display />
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
