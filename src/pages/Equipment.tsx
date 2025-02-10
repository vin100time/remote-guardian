
import { cn } from "@/lib/utils";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Select } from "@/components/ui/select";
import { Table, TableHeader, TableBody, TableRow, TableHead, TableCell } from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { ServerIcon, PrinterIcon, CameraIcon, NetworkIcon, PlusCircle, RefreshCcw, Edit2Icon, Trash2Icon, Search, Filter } from "lucide-react";

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
            value={siteFilter}
            onChange={(e) => setSiteFilter(e.target.value)}
            className="pl-9"
          >
            <option value="all">Tous les sites</option>
            <option value="Paris Centre">Paris Centre</option>
            <option value="Lyon Sud">Lyon Sud</option>
            <option value="Marseille Port">Marseille Port</option>
            <option value="Bordeaux Nord">Bordeaux Nord</option>
            <option value="Lille Centre">Lille Centre</option>
            <option value="Nantes Est">Nantes Est</option>
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
                    <Button variant="ghost" size="icon">
                      <Edit2Icon className="w-4 h-4" />
                    </Button>
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
