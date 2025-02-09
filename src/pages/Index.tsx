
import { Chart } from "recharts";
import { Card } from "@/components/ui/card";

const Index = () => {
  const stats = [
    { label: "Total des sites", value: "12", subtext: "Sites surveillés" },
    { label: "En ligne", value: "10", subtext: "Sites actifs", className: "text-success" },
    { label: "Hors ligne", value: "1", subtext: "Sites inactifs", className: "text-danger" },
    { label: "Alertes", value: "6", subtext: "Dernières 24h", className: "text-warning" },
    { label: "Disponibilité", value: "99.4%", subtext: "Temps de service" }
  ];

  return (
    <div className="space-y-6 animate-fade-in">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold">Tableau de bord</h1>
          <p className="text-muted-foreground">
            Dernière mise à jour : {new Date().toLocaleString()}
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
        {stats.map((stat) => (
          <Card key={stat.label} className="p-4 glass card-hover">
            <p className="text-sm text-muted-foreground">{stat.label}</p>
            <p className={`text-2xl font-bold mt-2 ${stat.className}`}>
              {stat.value}
            </p>
            <p className="text-xs text-muted-foreground mt-1">{stat.subtext}</p>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default Index;
