
import { cn } from "@/lib/utils";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Table, TableHeader, TableBody, TableRow, TableHead, TableCell } from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { ServerIcon, CameraIcon, NetworkIcon, VideoIcon, WifiIcon, RouterIcon, MonitorIcon, PlusCircle, RefreshCcw, Trash2Icon, Search, Filter, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const Equipment = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [typeFilter, setTypeFilter] = useState("all");
  const [siteFilter, setSiteFilter] = useState("all");
  const [statusFilter, setStatusFilter] = useState("all");

  const equipment = [
    {
      id: 1,
      name: "Camera IP-01",
      type: "camera",
      site: "Paris Centre",
      status: "online",
      ip: "192.168.1.101",
      lastMaintenance: "2024-02-15"
    },
    {
      id: 2,
      name: "Switch SW-02",
      type: "switch",
      site: "Lyon Sud",
      status: "online",
      ip: "192.168.1.102",
      lastMaintenance: "2024-02-20"
    },
    {
      id: 3,
      name: "Routeur RT-01",
      type: "router",
      site: "Marseille Port",
      status: "offline",
      ip: "192.168.1.103",
      lastMaintenance: "2024-02-10"
    },
    {
      id: 4,
      name: "Serveur SV-01",
      type: "server",
      site: "Bordeaux Nord",
      status: "online",
      ip: "192.168.1.104",
      lastMaintenance: "2024-02-25"
    },
    {
      id: 5,
      name: "Camera IP-02",
      type: "camera",
      site: "Lille Centre",
      status: "warning",
      ip: "192.168.1.105",
      lastMaintenance: "2024-02-18"
    },
    {
      id: 6,
      name: "Switch SW-03",
      type: "switch",
      site: "Nantes Est",
      status: "online",
      ip: "192.168.1.106",
      lastMaintenance: "2024-02-22"
    }
  ];

  const getIcon = (type: string) => {
    switch(type) {
      case 'camera':
        return <CameraIcon className="w-5 h-5" />;
      case 'video-recorder':
        return <VideoIcon className="w-5 h-5" />;
      case 'switch':
        return <NetworkIcon className="w-5 h-5" />;
      case 'server':
        return <ServerIcon className="w-5 h-5" />;
      case 'antenna':
        return <WifiIcon className="w-5 h-5" />;
      case 'router':
        return <RouterIcon className="w-5 h-5" />;
      case 'pc':
        return <MonitorIcon className="w-5 h-5" />;
      default:
        return <ServerIcon className="w-5 h-5" />;
    }
  };

  const filteredEquipment = equipment.filter(item => {
    const matchesSearch = item.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         item.ip.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesType = typeFilter === "all" || item.type === typeFilter;
    const matchesSite = siteFilter === "all" || item.site === siteFilter;
    const matchesStatus = statusFilter === "all" || item.status === statusFilter;
    return matchesSearch && matchesType && matchesSite && matchesStatus;
  });

  return (
    <div className="space-y-6 animate-fade-in">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold">Équipements</h1>
          <p className="text-muted-foreground">
            Gestion et surveillance des équipements réseau
          </p>
        </div>
        <Button className="bg-indigo-700 hover:bg-indigo-800">
          <PlusCircle className="w-4 h-4 mr-2" />
          Nouvel équipement
        </Button>
      </div>

      <div className="flex items-center gap-4 pb-4">
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
          <Filter className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4 z-10" />
          <Select value={typeFilter} onValueChange={setTypeFilter}>
            <SelectTrigger className="pl-9 min-w-[180px]">
              <SelectValue placeholder="Tous les types" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">Tous les types</SelectItem>
              <SelectItem value="camera">Caméras</SelectItem>
              <SelectItem value="video-recorder">Enregistreurs vidéo</SelectItem>
              <SelectItem value="switch">Switches</SelectItem>
              <SelectItem value="server">Serveurs</SelectItem>
              <SelectItem value="antenna">Antennes/Points d'accès WiFi</SelectItem>
              <SelectItem value="router">Routeurs</SelectItem>
              <SelectItem value="pc">PC</SelectItem>
              <SelectItem value="other">Autres</SelectItem>
            </SelectContent>
          </Select>
        </div>
        <div className="relative">
          <Filter className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4 z-10" />
          <Select value={siteFilter} onValueChange={setSiteFilter}>
            <SelectTrigger className="pl-9 min-w-[180px]">
              <SelectValue placeholder="Tous les sites" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">Tous les sites</SelectItem>
              <SelectItem value="Paris Centre">Paris Centre</SelectItem>
              <SelectItem value="Lyon Sud">Lyon Sud</SelectItem>
              <SelectItem value="Marseille Port">Marseille Port</SelectItem>
              <SelectItem value="Bordeaux Nord">Bordeaux Nord</SelectItem>
              <SelectItem value="Lille Centre">Lille Centre</SelectItem>
              <SelectItem value="Nantes Est">Nantes Est</SelectItem>
            </SelectContent>
          </Select>
        </div>
        <div className="relative">
          <Filter className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4 z-10" />
          <Select value={statusFilter} onValueChange={setStatusFilter}>
            <SelectTrigger className="pl-9 min-w-[180px]">
              <SelectValue placeholder="Tous les statuts" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">Tous les statuts</SelectItem>
              <SelectItem value="online">En ligne</SelectItem>
              <SelectItem value="offline">Hors ligne</SelectItem>
              <SelectItem value="warning">Attention</SelectItem>
            </SelectContent>
          </Select>
        </div>
        <Button variant="outline" size="icon" className="ml-auto">
          <RefreshCcw className="w-4 h-4" />
        </Button>
      </div>

      <Card className="glass">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Équipement</TableHead>
              <TableHead>Type</TableHead>
              <TableHead>Site</TableHead>
              <TableHead>Statut</TableHead>
              <TableHead>IP</TableHead>
              <TableHead>Dernière maintenance</TableHead>
              <TableHead className="text-right">Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {filteredEquipment.map((item) => (
              <TableRow key={item.id}>
                <TableCell className="font-medium">
                  <div className="flex items-center gap-2">
                    {getIcon(item.type)}
                    {item.name}
                  </div>
                </TableCell>
                <TableCell className="capitalize">{item.type}</TableCell>
                <TableCell>{item.site}</TableCell>
                <TableCell>
                  <div className={cn(
                    "status-badge inline-flex",
                    item.status === 'online' && "status-online",
                    item.status === 'offline' && "status-offline",
                    item.status === 'warning' && "status-warning"
                  )}>
                    {item.status === 'online' && "En ligne"}
                    {item.status === 'offline' && "Hors ligne"}
                    {item.status === 'warning' && "Attention"}
                  </div>
                </TableCell>
                <TableCell>{item.ip}</TableCell>
                <TableCell>{item.lastMaintenance}</TableCell>
                <TableCell className="text-right">
                  <div className="flex justify-end gap-2">
                    <Link to={`/equipements/${item.id}`}>
                      <Button variant="ghost" size="icon">
                        <ArrowRight className="w-4 h-4" />
                      </Button>
                    </Link>
                    <Button variant="ghost" size="icon" className="text-red-500 hover:text-red-600">
                      <Trash2Icon className="w-4 h-4" />
                    </Button>
                  </div>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </Card>
    </div>
  );
};

export default Equipment;
