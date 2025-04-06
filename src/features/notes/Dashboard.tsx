import { useNavigate } from "react-router-dom";

import { Button } from "../../shared/components";
import { logout } from "../../shared/services/authService";

function Dashboard() {
  const navigate = useNavigate();
  return (
    <div>
      <Button
        type="button"
        onClick={() => logout(navigate)}
      >
        Log out
      </Button>
    </div>
  );
}

export default Dashboard;
