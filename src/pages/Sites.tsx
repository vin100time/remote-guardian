
import { Card } from "@/components/ui/card";

const Sites = () => {
  const sites = [
    {
      id: 1,
      name: "Agence Paris",
      address: "15 rue de la Paix, 75001 Paris",
      status: "online",
      equipments: 24,
      lastCheck: new Date().toLocaleString(),
    },
    {
      id: 2, 
      name: "Agence Lyon",
      address: "25 rue de la République, 69001 Lyon",
      status: "online",
      equipments: 18,
      lastCheck: new Date().toLocaleString(),
    },
    {
      id: 3,
      name: "Agence Marseille",
      address: "45 rue du Vieux-Port, 13001 Marseille",
      status: "offline",
      equipments: 15,
      lastCheck: new Date().toLocaleString(),
    }
  ];

  return (
    <div className="space-y-6 animate-fade-in">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold">Sites clients</h1>
          <p className="text-muted-foreground">
            Gestion et surveillance des sites
          </p>
        </div>
      </div>

      <div className="grid gap-4">
        {sites.map((site) => (
          <Card key={site.id} className="p-4 glass card-hover">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="font-semibold">{site.name}</h3>
                <p className="text-sm text-muted-foreground">{site.address}</p>
              </div>
              <div className="flex items-center gap-4">
                <div className="text-right">
                  <p className="text-sm font-medium">{site.equipments} équipements</p>
                  <p className="text-xs text-muted-foreground">Dernière vérification: {site.lastCheck}</p>
                </div>
                <div className={`status-badge ${site.status === 'online' ? 'status-online' : 'status-offline'}`}>
                  {site.status === 'online' ? 'En ligne' : 'Hors ligne'}
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
