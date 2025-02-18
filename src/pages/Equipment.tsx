
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { EquipmentFilters } from "@/components/equipment/EquipmentFilters";
import { EquipmentTable } from "@/components/equipment/EquipmentTable";

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
      status: "online" as const,
      ip: "192.168.1.101",
      lastMaintenance: "2024-02-15"
    },
    {
      id: 2,
      name: "Switch SW-02",
      type: "switch",
      site: "Lyon Sud",
      status: "online" as const,
      ip: "192.168.1.102",
      lastMaintenance: "2024-02-20"
    },
    {
      id: 3,
      name: "Routeur RT-01",
      type: "router",
      site: "Marseille Port",
      status: "offline" as const,
      ip: "192.168.1.103",
      lastMaintenance: "2024-02-10"
    },
    {
      id: 4,
      name: "Serveur SV-01",
      type: "server",
      site: "Bordeaux Nord",
      status: "online" as const,
      ip: "192.168.1.104",
      lastMaintenance: "2024-02-25"
    },
    {
      id: 5,
      name: "Camera IP-02",
      type: "camera",
      site: "Lille Centre",
      status: "warning" as const,
      ip: "192.168.1.105",
      lastMaintenance: "2024-02-18"
    },
    {
      id: 6,
      name: "Switch SW-03",
      type: "switch",
      site: "Nantes Est",
      status: "online" as const,
      ip: "192.168.1.106",
      lastMaintenance: "2024-02-22"
    }
  ];

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
      </div>

      <EquipmentFilters 
        searchTerm={searchTerm}
        onSearchChange={setSearchTerm}
        typeFilter={typeFilter}
        onTypeFilterChange={setTypeFilter}
        siteFilter={siteFilter}
        onSiteFilterChange={setSiteFilter}
        statusFilter={statusFilter}
        onStatusFilterChange={setStatusFilter}
      />

      <Card className="glass">
        <EquipmentTable equipment={filteredEquipment} />
      </Card>
    </div>
  );
};

export default Equipment;
