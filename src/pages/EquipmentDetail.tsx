
import { useParams, Link } from "react-router-dom";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowLeft, ExternalLink, Edit2Icon, Trash2Icon } from "lucide-react";
import { cn } from "@/lib/utils";

const EquipmentDetail = () => {
  const { id } = useParams();

  // Simulons un équipement pour l'exemple
  const equipment = {
    id: 1,
    name: "Router-01",
    type: "router",
    status: "online",
    ip: "192.168.1.1",
    mac: "00:1A:2B:3C:4D:5E",
    model: "Cisco 2900",
    location: "Salle serveur principale",
    uptime: "15 jours",
    cpu: 45,
    memory: 60,
    temperature: 38,
    interfaces: [
      { name: "eth0", status: "up", speed: "1 Gbps" },
      { name: "eth1", status: "up", speed: "1 Gbps" }
    ]
  };

  return (
    <div className="space-y-6 animate-fade-in">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-4">
          <Link to="/sites" className="text-muted-foreground hover:text-foreground">
            <ArrowLeft className="w-5 h-5" />
          </Link>
          <h1 className="text-2xl font-bold">{equipment.name}</h1>
        </div>
        <div className="flex items-center gap-2">
          <Button className="bg-indigo-700 hover:bg-indigo-800" onClick={() => window.open(`http://${equipment.ip}`)}>
            <ExternalLink className="w-4 h-4 mr-2" />
            Accéder
          </Button>
          <Button variant="outline">
            <Edit2Icon className="w-4 h-4 mr-2" />
            Modifier
          </Button>
          <Button variant="destructive">
            <Trash2Icon className="w-4 h-4 mr-2" />
            Supprimer
          </Button>
        </div>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        <Card className="p-6">
          <h2 className="text-lg font-semibold mb-4">Informations générales</h2>
          <dl className="space-y-4">
            <div className="flex justify-between">
              <dt className="text-muted-foreground">Type</dt>
              <dd className="font-medium capitalize">{equipment.type}</dd>
            </div>
            <div className="flex justify-between">
              <dt className="text-muted-foreground">Statut</dt>
              <dd>
                <span className={cn(
                  "status-badge",
                  equipment.status === 'online' && "status-online",
                  equipment.status === 'offline' && "status-offline",
                  equipment.status === 'warning' && "status-warning"
                )}>
                  {equipment.status === 'online' && "En ligne"}
                  {equipment.status === 'offline' && "Hors ligne"}
                  {equipment.status === 'warning' && "Attention"}
                </span>
              </dd>
            </div>
            <div className="flex justify-between">
              <dt className="text-muted-foreground">Adresse IP</dt>
              <dd className="font-medium">{equipment.ip}</dd>
            </div>
            <div className="flex justify-between">
              <dt className="text-muted-foreground">Adresse MAC</dt>
              <dd className="font-medium">{equipment.mac}</dd>
            </div>
            <div className="flex justify-between">
              <dt className="text-muted-foreground">Modèle</dt>
              <dd className="font-medium">{equipment.model}</dd>
            </div>
            <div className="flex justify-between">
              <dt className="text-muted-foreground">Localisation</dt>
              <dd className="font-medium">{equipment.location}</dd>
            </div>
            <div className="flex justify-between">
              <dt className="text-muted-foreground">Temps de fonctionnement</dt>
              <dd className="font-medium">{equipment.uptime}</dd>
            </div>
          </dl>
        </Card>

        <Card className="p-6">
          <h2 className="text-lg font-semibold mb-4">Performances</h2>
          <div className="space-y-6">
            <div>
              <div className="flex justify-between mb-2">
                <span className="text-muted-foreground">CPU</span>
                <span className="font-medium">{equipment.cpu}%</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div 
                  className="bg-blue-500 h-2 rounded-full" 
                  style={{ width: `${equipment.cpu}%` }}
                />
              </div>
            </div>
            
            <div>
              <div className="flex justify-between mb-2">
                <span className="text-muted-foreground">Mémoire</span>
                <span className="font-medium">{equipment.memory}%</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div 
                  className="bg-green-500 h-2 rounded-full" 
                  style={{ width: `${equipment.memory}%` }}
                />
              </div>
            </div>

            <div>
              <div className="flex justify-between mb-2">
                <span className="text-muted-foreground">Température</span>
                <span className="font-medium">{equipment.temperature}°C</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div 
                  className="bg-yellow-500 h-2 rounded-full" 
                  style={{ width: `${(equipment.temperature / 100) * 100}%` }}
                />
              </div>
            </div>
          </div>
        </Card>

        <Card className="p-6 md:col-span-2">
          <h2 className="text-lg font-semibold mb-4">Interfaces réseau</h2>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="text-left border-b">
                  <th className="pb-2">Interface</th>
                  <th className="pb-2">Statut</th>
                  <th className="pb-2">Vitesse</th>
                </tr>
              </thead>
              <tbody>
                {equipment.interfaces.map((interface_, index) => (
                  <tr key={index} className="border-b last:border-0">
                    <td className="py-3 font-medium">{interface_.name}</td>
                    <td className="py-3">
                      <span className={cn(
                        "status-badge",
                        interface_.status === 'up' && "status-online",
                        interface_.status === 'down' && "status-offline"
                      )}>
                        {interface_.status === 'up' ? 'Actif' : 'Inactif'}
                      </span>
                    </td>
                    <td className="py-3">{interface_.speed}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default EquipmentDetail;
