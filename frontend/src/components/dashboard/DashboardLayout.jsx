import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar";
import DashboardNavbar from "./DashboardNavbar";

const DashboardLayout = () => {
  return (
    <div className="min-h-screen bg-slate-950 text-white overflow-x-hidden">
      {/* Sidebar */}
      <Sidebar />

      {/* Main Content */}
      <main
        className="
          w-full
          p-4
          pt-[90px]
          md:ml-[270px]
          md:min-h-screen
          md:p-8
          md:pt-8
        "

      >
        <div className="hidden md:block">
          <DashboardNavbar />
        </div>
        <Outlet />
      </main>
    </div>
  );
};

export default DashboardLayout;