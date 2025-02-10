
import { useParams, Link } from "react-router-dom";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Select } from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { cn } from "@/lib/utils";
import { ArrowLeft, Search, Filter, ServerIcon, PrinterIcon, CameraIcon, NetworkIcon } from "lucide-react";

const SiteEquipment = () => {
  const { siteId } = useParams();
  const [searchTerm, setSearchTerm] = useState("");
  const [typeFilter, setTypeFilter] = useState("all");
  const [statusFilter, setStatusFilter] = useState("all");

  const equipment = [
    {
      id: 1,
      name: "Camera IP-01",
      type: "camera",
      status: "online",
      ip: "192.168.1.101",
      lastMaintenance: "2024-02-15"
    },
    // Ajoutez d'autres équipements selon vos besoins
  ];

  const getIcon = (type: string) => {
    switch(type) {
      case 'server':
        return <ServerIcon className="w-5 h-5" />;
      case 'camera':
        return <CameraIcon className="w-5 h-5" />;
      case 'switch':
        return <NetworkIcon className="w-5 h-5" />;
      case 'router':
        return <PrinterIcon className="w-5 h-5" />;
      default:
        return <ServerIcon className="w-5 h-5" />;
    }
  };

  const filteredEquipment = equipment.filter(item => {
    const matchesSearch = item.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         item.ip.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesType = typeFilter === "all" || item.type === typeFilter;
    const matchesStatus = statusFilter === "all" || item.status === statusFilter;
    return matchesSearch && matchesType && matchesStatus;
  });

  return (
    <div className="space-y-6 animate-fade-in">
      <div className="flex items-center gap-4">
        <Link to="/sites" className="text-muted-foreground hover:text-foreground">
          <ArrowLeft className="w-5 h-5" />
        </Link>
        <div>
          <h1 className="text-2xl font-bold">Équipements du site</h1>
          <p className="text-muted-foreground">
            Gestion des équipements pour ce site
          </p>
        </div>
      </div>

      <div className="flex items-center gap-4">
        <div className="relative flex-1 max-w-xs">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
          <Input 
            placeholder="Rechercher un équipement..." 
            className="pl-9"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
        <div className="relative">
          <Filter className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
          <Select 
            value={typeFilter} 
            onChange={(e) => setTypeFilter(e.target.value)}
            className="pl-9"
          >
            <option value="all">Tous les types</option>
            <option value="camera">Caméras</option>
            <option value="switch">Switches</option>
            <option value="router">Routeurs</option>
            <option value="server">Serveurs</option>
          </Select>
        </div>
        <div className="relative">
          <Filter className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
          <Select 
            value={statusFilter}
            onChange={(e) => setStatusFilter(e.target.value)}
            className="pl-9"
          >
            <option value="all">Tous les statuts</option>
            <option value="online">En ligne</option>
            <option value="offline">Hors ligne</option>
            <option value="warning">Attention</option>
          </Select>
        </div>
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {filteredEquipment.map((item) => (
          <Link to={`/equipment/${item.id}`} key={item.id}>
            <Card className="p-4 hover:shadow-lg transition-all">
              <div className="flex items-start justify-between">
                <div className="flex items-center gap-3">
                  {getIcon(item.type)}
                  <div>
                    <h3 className="font-medium">{item.name}</h3>
                    <p className="text-sm text-muted-foreground">{item.ip}</p>
                  </div>
                </div>
                <div className={cn(
                  "status-badge",
                  item.status === 'online' && "status-online",
                  item.status === 'offline' && "status-offline",
                  item.status === 'warning' && "status-warning"
                )}>
                  {item.status === 'online' && "En ligne"}
                  {item.status === 'offline' && "Hors ligne"}
                  {item.status === 'warning' && "Attention"}
                </div>
              </div>
            </Card>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default SiteEquipment;
