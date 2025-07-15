import { Outlet } from 'react-router-dom';

import Sidebar from './Sidebar';
import Header from './Header';
import Footer from './Footer';
import { useResponsive } from '../shared/hooks/useResponsive';

function DashboardLayout() {
  const isMobile = useResponsive();
  return (
    <div className="min-h-screen cont flex flex-col">
      {isMobile ? (
        <div className="relative flex flex-col flex-1 text-2xl">
          <Outlet />
          <Footer />
        </div>
      ) : (
        <div className="grid grid-cols-[250px_1fr] flex-1 text-2xl">
          <Sidebar />
          <main className="grid grid-rows-[100px_1fr]">
            <Header />
            <Outlet />
          </main>
        </div>
      )}
    </div>
  );
}

export default DashboardLayout;
