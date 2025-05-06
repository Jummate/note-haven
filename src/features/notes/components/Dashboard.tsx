import { Outlet } from "react-router-dom";

import Sidebar from "./Sidebar";
// import Display from "./Display";
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
      <div className="hidden lg:grid grid-cols-[200px_1fr] flex-1 text-2xl">
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
