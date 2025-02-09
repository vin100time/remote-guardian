
import { HomeIcon, UsersIcon, ServerIcon, BellIcon, SettingsIcon, UserIcon } from "lucide-react";
import { Link, useLocation } from "react-router-dom";

const Sidebar = () => {
  const location = useLocation();
  
  const links = [
    { name: "Tableau de bord", icon: HomeIcon, path: "/" },
    { name: "Sites clients", icon: UsersIcon, path: "/sites" },
    { name: "Équipements", icon: ServerIcon, path: "/equipements" },
    { name: "Alertes", icon: BellIcon, path: "/alertes" },
    { name: "Configuration", icon: SettingsIcon, path: "/configuration" },
    { name: "Compte", icon: UserIcon, path: "/compte" }
  ];

  return (
    <div className="fixed left-0 top-0 h-screen w-64 glass border-r border-border/50 py-6 px-3 flex flex-col gap-2">
      <div className="px-4 py-3">
        <h1 className="text-xl font-bold text-primary">Vigileos</h1>
      </div>
      
      <nav className="flex-1 space-y-1">
        {links.map((link) => {
          const isActive = location.pathname === link.path;
          const Icon = link.icon;
          
          return (
            <Link
              key={link.path}
              to={link.path}
              className={`flex items-center gap-3 px-4 py-2.5 rounded-lg transition-colors ${
                isActive 
                  ? "bg-primary text-primary-foreground" 
                  : "hover:bg-secondary"
              }`}
            >
              <Icon size={20} />
              <span>{link.name}</span>
            </Link>
          );
        })}
      </nav>
    </div>
  );
};

export default Sidebar;
