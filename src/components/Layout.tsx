
import { Outlet } from "react-router-dom";
import { Sidebar } from "./Sidebar";
import { useState } from "react";
import { cn } from "@/lib/utils";

const Layout = () => {
  const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(false);

  return (
    <div className="min-h-screen bg-[#F8F9FA]">
      <Sidebar isCollapsed={isSidebarCollapsed} onCollapse={setIsSidebarCollapsed} />
      <main className={cn(
        "transition-all duration-300",
        isSidebarCollapsed ? "pl-20" : "pl-64",
        "w-full"
      )}>
        <div className="container mx-auto p-4 sm:p-6 max-w-7xl">
          <Outlet />
        </div>
      </main>
    </div>
  );
};

export default Layout;
