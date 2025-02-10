
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Select } from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { Link } from "react-router-dom";
import { PlusCircle, RefreshCcw, Edit2Icon, Trash2Icon, Search, Filter } from "lucide-react";
import { cn } from "@/lib/utils";

const Sites = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [statusFilter, setStatusFilter] = useState("all");

  const sites = [
    {
      id: 1,
      name: "Site Paris Centre",
      address: "15 Rue de la Paix, 75001 Paris",
      status: "online",
      equipments: 12,
      lastCheck: "Il y a 2 min",
    },
    {
      id: 2, 
      name: "Site Lyon Sud",
      address: "25 Avenue Jean Jaurès, 69007 Lyon",
      status: "online",
      equipments: 8,
      lastCheck: "Il y a 5 min",
    },
    {
      id: 3,
      name: "Site Marseille Port",
      address: "45 Quai des Belges, 13001 Marseille",
      status: "offline",
      equipments: 15,
      lastCheck: "Il y a 1h",
    },
    {
      id: 4,
      name: "Site Bordeaux Nord",
      address: "78 Cours Portal, 33000 Bordeaux",
      status: "online",
      equipments: 10,
      lastCheck: "Il y a 10 min",
    },
    {
      id: 5,
      name: "Site Lille Centre",
      address: "56 Rue Faidherbe, 59000 Lille",
      status: "online",
      equipments: 6,
      lastCheck: "Il y a 3 min",
    },
    {
      id: 6,
      name: "Site Nantes Est",
      address: "34 Boulevard des Anglais, 44000 Nantes",
      status: "warning",
      equipments: 9,
      lastCheck: "Il y a 15 min",
    }
  ];

  const filteredSites = sites.filter(site => {
    const matchesSearch = site.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         site.address.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesStatus = statusFilter === "all" || site.status === statusFilter;
    return matchesSearch && matchesStatus;
  });

  return (
    <div className="space-y-6 animate-fade-in">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold">Sites clients</h1>
          <p className="text-muted-foreground">
            Gestion et surveillance des sites
          </p>
        </div>
        <Button className="bg-indigo-700 hover:bg-indigo-800">
          <PlusCircle className="w-4 h-4 mr-2" />
          Nouveau site
        </Button>
      </div>

      <div className="flex items-center gap-4 pb-4">
        <div className="relative flex-1 max-w-xs">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
          <Input 
            placeholder="Rechercher un site..." 
            className="pl-9"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
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

      <div className="grid gap-4">
        {filteredSites.map((site) => (
          <Card key={site.id} className="p-4 glass card-hover">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="font-semibold">{site.name}</h3>
                <p className="text-sm text-muted-foreground">{site.address}</p>
              </div>
              <div className="flex items-center gap-4">
                <div className="text-right">
                  <Link to={`/sites/${site.id}/equipment`} className="text-sm font-medium hover:text-indigo-600">
                    {site.equipments} équipements
                  </Link>
                  <p className="text-xs text-muted-foreground">Dernière synchronisation: {site.lastCheck}</p>
                </div>
                <div className={cn(
                  "status-badge",
                  site.status === 'online' && "status-online",
                  site.status === 'offline' && "status-offline",
                  site.status === 'warning' && "status-warning"
                )}>
                  {site.status === 'online' && "En ligne"}
                  {site.status === 'offline' && "Hors ligne"}
                  {site.status === 'warning' && "Attention"}
                </div>
                <div className="flex gap-2">
                  <Button variant="ghost" size="icon">
                    <Edit2Icon className="w-4 h-4" />
                  </Button>
                  <Button variant="ghost" size="icon" className="text-red-500 hover:text-red-600">
                    <Trash2Icon className="w-4 h-4" />
                  </Button>
                </div>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default Sites;
