import { Outlet, useNavigate } from "react-router-dom";

import { Button } from "../../../shared/components";
import { logout } from "../../../shared/services/authService";
import Sidebar from "./Sidebar";
import Display from "./Display";
import Header from "./Header";
import Footer from "./Footer";

function Dashboard() {
  // const navigate = useNavigate();
  return (
    <div className="grid grid-cols-[300px_minmax(900px,_1fr)]">
      <div className="hidden lg:block">
        <Sidebar />
      </div>
      <div className="relative min-h-screen">
        <div className="hidden lg:block">
          <Header />
        </div>
        <Outlet />
        {/* <Display /> */}
        <div className="lg:hidden">
          <Footer />
        </div>
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
