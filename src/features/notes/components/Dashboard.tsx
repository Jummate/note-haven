import { Outlet } from "react-router-dom";

// import { Button } from "../../../shared/components";
// import { logout } from "../../../shared/services/authService";
import Sidebar from "./Sidebar";
import Display from "./Display";
import Header from "./Header";
import Footer from "./Footer";

function Dashboard() {
  // const navigate = useNavigate();
  return (
    <div className="min-h-screen cont flex flex-col">
      <div className="lg:hidden relative flex flex-col flex-1">
        <Outlet />
        <Footer />
      </div>
      <div className="hidden lg:grid grid-cols-[300px_1fr] flex-1">
        <Sidebar />
        <main className="grid grid-rows-[100px_1fr]">
          <Header />
          <Outlet />
        </main>
      </div>
    </div>
  );
}

export default Dashboard;
