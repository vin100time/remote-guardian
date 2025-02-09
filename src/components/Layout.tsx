
import { Sidebar } from "./Sidebar";
import { cn } from "@/lib/utils";

interface LayoutProps {
  children: React.ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="min-h-screen bg-[#F8F9FA]">
      <Sidebar />
      <main className="pl-64 transition-all duration-300">
        <div className="container py-6">
          {children}
        </div>
      </main>
    </div>
  );
};

export default Layout;
