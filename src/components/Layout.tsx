
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
        isSidebarCollapsed ? "pl-[82px]" : "pl-[260px]",
        "w-full"
      )}>
        <div className="p-2 sm:p-4">
          <Outlet />
        </div>
      </main>
    </div>
  );
};

export default Layout;
