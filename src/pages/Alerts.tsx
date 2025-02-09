
import { Card } from "@/components/ui/card";
import { AlertCircleIcon, CheckCircleIcon, XCircleIcon } from "lucide-react";

const Alerts = () => {
  const alerts = [
    {
      id: 1,
      title: "Serveur principal inaccessible",
      description: "Le serveur ne répond plus depuis 5 minutes",
      type: "error",
      timestamp: new Date().toLocaleString(),
      source: "Serveur principal"
    },
    {
      id: 2,
      title: "Trafic réseau anormal",
      description: "Pic de trafic détecté sur le switch principal",
      type: "warning",
      timestamp: new Date().toLocaleString(),
      source: "Switch principal"
    },
    {
      id: 3,
      title: "Connexion rétablie",
      description: "La connexion avec l'imprimante RH a été rétablie",
      type: "success",
      timestamp: new Date().toLocaleString(),
      source: "Imprimante RH"
    }
  ];

  const getIcon = (type: string) => {
    switch(type) {
      case 'error':
        return <XCircleIcon className="w-6 h-6 text-danger" />;
      case 'warning':
        return <AlertCircleIcon className="w-6 h-6 text-warning" />;
      case 'success':
        return <CheckCircleIcon className="w-6 h-6 text-success" />;
      default:
        return <AlertCircleIcon className="w-6 h-6" />;
    }
  };

  return (
    <div className="space-y-6 animate-fade-in">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold">Alertes</h1>
          <p className="text-muted-foreground">
            Suivi des alertes et notifications
          </p>
        </div>
      </div>

      <div className="grid gap-4">
        {alerts.map((alert) => (
          <Card key={alert.id} className="p-4 glass card-hover">
            <div className="flex items-center gap-4">
              {getIcon(alert.type)}
              <div className="flex-1">
                <div className="flex items-center justify-between">
                  <h3 className="font-semibold">{alert.title}</h3>
                  <span className="text-sm text-muted-foreground">{alert.timestamp}</span>
                </div>
                <p className="text-sm text-muted-foreground">{alert.description}</p>
                <p className="text-xs text-muted-foreground mt-1">Source: {alert.source}</p>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default Alerts;
