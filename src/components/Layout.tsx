
import { Sidebar } from "./Sidebar";

interface LayoutProps {
  children: React.ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="min-h-screen bg-background">
      <Sidebar />
      <main className="pl-64">
        <div className="container py-6">
          {children}
        </div>
      </main>
    </div>
  );
};

export default Layout;
