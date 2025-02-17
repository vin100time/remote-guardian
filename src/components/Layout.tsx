
import { Outlet } from "react-router-dom";
import { Sidebar } from "./Sidebar";

const Layout = () => {
  return (
    <div className="min-h-screen bg-[#F8F9FA]">
      <Sidebar />
      <main className="pl-64 transition-all duration-300">
        <div className="container py-6">
          <Outlet />
        </div>
      </main>
    </div>
  );
};

export default Layout;
