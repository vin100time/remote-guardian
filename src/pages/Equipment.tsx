
import { Card } from "@/components/ui/card";
import { ServerIcon, PrinterIcon, CameraIcon } from "lucide-react";

const Equipment = () => {
  const equipment = [
    {
      id: 1,
      name: "Serveur principal",
      type: "server",
      status: "online",
      location: "Salle serveur A",
      lastPing: new Date().toLocaleString(),
      ip: "192.168.1.100"
    },
    {
      id: 2,
      name: "Caméra surveillance entrée",
      type: "camera",
      status: "online",
      location: "Entrée principale",
      lastPing: new Date().toLocaleString(),
      ip: "192.168.1.101"
    },
    {
      id: 3,
      name: "Imprimante RH",
      type: "printer",
      status: "offline",
      location: "Bureau RH",
      lastPing: new Date().toLocaleString(),
      ip: "192.168.1.102"
    }
  ];

  const getIcon = (type: string) => {
    switch(type) {
      case 'server':
        return <ServerIcon className="w-6 h-6" />;
      case 'camera':
        return <CameraIcon className="w-6 h-6" />;
      case 'printer':
        return <PrinterIcon className="w-6 h-6" />;
      default:
        return <ServerIcon className="w-6 h-6" />;
    }
  };

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

      <div className="grid gap-4">
        {equipment.map((item) => (
          <Card key={item.id} className="p-4 glass card-hover">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-4">
                {getIcon(item.type)}
                <div>
                  <h3 className="font-semibold">{item.name}</h3>
                  <p className="text-sm text-muted-foreground">{item.location}</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="text-right">
                  <p className="text-sm font-medium">{item.ip}</p>
                  <p className="text-xs text-muted-foreground">Dernier ping: {item.lastPing}</p>
                </div>
                <div className={`status-badge ${item.status === 'online' ? 'status-online' : 'status-offline'}`}>
                  {item.status === 'online' ? 'En ligne' : 'Hors ligne'}
                </div>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default Equipment;
