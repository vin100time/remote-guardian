
import { Card } from "@/components/ui/card";
import { ArrowUpIcon, ArrowDownIcon, Bell, Settings, ServerIcon } from "lucide-react";
import { Button } from "@/components/ui/button";

const Index = () => {
  const stats = [
    { 
      label: "Total des sites", 
      value: "12", 
      subtext: "Sites surveillés",
      change: "+2",
      trend: "up"
    },
    { 
      label: "En ligne", 
      value: "10", 
      subtext: "Sites actifs", 
      className: "text-success",
      change: "+1",
      trend: "up"
    },
    { 
      label: "Hors ligne", 
      value: "1", 
      subtext: "Sites inactifs", 
      className: "text-danger",
      change: "-1",
      trend: "down"
    },
    { 
      label: "Alertes", 
      value: "6", 
      subtext: "Dernières 24h", 
      className: "text-warning",
      change: "+3",
      trend: "up"
    },
    { 
      label: "Disponibilité", 
      value: "99.4%", 
      subtext: "Temps de service",
      change: "+0.2%",
      trend: "up"
    }
  ];

  const recentAlerts = [
    {
      id: 1,
      title: "Serveur Principal",
      message: "CPU utilisation > 90%",
      time: "Il y a 5 min",
      severity: "high"
    },
    {
      id: 2,
      title: "Switch Core",
      message: "Trafic réseau anormal",
      time: "Il y a 15 min",
      severity: "medium"
    }
  ];

  const recentActivities = [
    {
      id: 1,
      action: "Maintenance planifiée",
      target: "Serveur DB-01",
      time: "Dans 2 heures",
      icon: Settings
    },
    {
      id: 2,
      action: "Mise à jour système",
      target: "Gateway-02",
      time: "Dans 4 heures",
      icon: ServerIcon
    }
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
        <div className="flex gap-2">
          <Button variant="outline">
            <Bell className="w-4 h-4 mr-2" />
            Notifications
          </Button>
          <Button variant="outline">
            <Settings className="w-4 h-4 mr-2" />
            Paramètres
          </Button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
        {stats.map((stat) => (
          <Card key={stat.label} className="p-4 glass card-hover">
            <p className="text-sm text-muted-foreground">{stat.label}</p>
            <div className="flex items-center justify-between mt-2">
              <p className={`text-2xl font-bold ${stat.className}`}>
                {stat.value}
              </p>
              <div className={`flex items-center ${
                stat.trend === 'up' ? 'text-success' : 'text-danger'
              }`}>
                {stat.trend === 'up' ? 
                  <ArrowUpIcon className="w-4 h-4" /> : 
                  <ArrowDownIcon className="w-4 h-4" />
                }
                <span className="text-sm ml-1">{stat.change}</span>
              </div>
            </div>
            <p className="text-xs text-muted-foreground mt-1">{stat.subtext}</p>
          </Card>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        <Card className="p-6 glass">
          <h2 className="text-lg font-semibold mb-4">Alertes Récentes</h2>
          <div className="space-y-4">
            {recentAlerts.map((alert) => (
              <div key={alert.id} className="flex items-center justify-between p-3 bg-background/50 rounded-lg">
                <div>
                  <h3 className="font-medium">{alert.title}</h3>
                  <p className="text-sm text-muted-foreground">{alert.message}</p>
                </div>
                <div className="text-right">
                  <span className={`inline-block px-2 py-1 rounded-full text-xs font-medium ${
                    alert.severity === 'high' ? 'bg-danger/10 text-danger' : 'bg-warning/10 text-warning'
                  }`}>
                    {alert.time}
                  </span>
                </div>
              </div>
            ))}
          </div>
          <Button variant="outline" className="w-full mt-4">
            Voir toutes les alertes
          </Button>
        </Card>

        <Card className="p-6 glass">
          <h2 className="text-lg font-semibold mb-4">Activités Planifiées</h2>
          <div className="space-y-4">
            {recentActivities.map((activity) => (
              <div key={activity.id} className="flex items-center gap-4 p-3 bg-background/50 rounded-lg">
                <div className="p-2 bg-primary/10 rounded-lg">
                  <activity.icon className="w-5 h-5 text-primary" />
                </div>
                <div className="flex-1">
                  <h3 className="font-medium">{activity.action}</h3>
                  <p className="text-sm text-muted-foreground">{activity.target}</p>
                </div>
                <div className="text-sm text-muted-foreground">
                  {activity.time}
                </div>
              </div>
            ))}
          </div>
          <Button variant="outline" className="w-full mt-4">
            Voir toutes les activités
          </Button>
        </Card>
      </div>
    </div>
  );
};

export default Index;
