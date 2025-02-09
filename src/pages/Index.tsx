
import { Card } from "@/components/ui/card";
import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer, PieChart, Pie, Cell } from 'recharts';

const Index = () => {
  // Données pour le graphique linéaire
  const connectivityData = [
    { name: 'jeu.', online: 10, offline: 2 },
    { name: 'ven.', online: 11, offline: 1 },
    { name: 'sam.', online: 10, offline: 2 },
    { name: 'dim.', online: 9, offline: 3 },
    { name: 'lun.', online: 10, offline: 2 },
    { name: 'mar.', online: 10, offline: 2 },
    { name: 'mer.', online: 9, offline: 3 },
  ];

  // Données pour le graphique circulaire
  const equipmentData = [
    { name: 'Caméras', value: 45, color: '#2196F3' },
    { name: 'Routeurs', value: 15, color: '#FFA726' },
    { name: 'Switches', value: 25, color: '#7E69AB' },
    { name: 'Serveurs', value: 15, color: '#78909C' },
  ];

  const stats = [
    { 
      label: "Total des sites", 
      value: "12",
      subtext: "Sites surveillés",
      textColor: "#1A1F2C"
    },
    { 
      label: "En ligne", 
      value: "10", 
      subtext: "Sites actifs",
      textColor: "#4CAF50"
    },
    { 
      label: "Hors ligne", 
      value: "1", 
      subtext: "Sites inactifs",
      textColor: "#F44336"
    },
    { 
      label: "Alertes", 
      value: "6", 
      subtext: "Dernières 24h",
      textColor: "#FF9800"
    },
    { 
      label: "Disponibilité", 
      value: "99.4%", 
      subtext: "Temps de service",
      textColor: "#1A1F2C"
    }
  ];

  const alerts = [
    {
      title: "Perte de connexion - Site Marseille Port",
      time: "2024-03-13 10:30",
      status: "Nouveau",
      type: "error"
    },
    {
      title: "Utilisation CPU élevée - Serveur SV-01",
      time: "2024-03-13 10:25",
      status: "En cours",
      type: "warning"
    },
    {
      title: "Échec de la sauvegarde - Caméra IP-02",
      time: "2024-03-13 10:20",
      status: "Résolu",
      type: "success"
    }
  ];

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-semibold">Tableau de bord</h1>
          <p className="text-sm text-muted-foreground">
            Dernière mise à jour : 5 février 2025 à 15:14
          </p>
        </div>
        <div className="flex items-center gap-2">
          <span className="text-sm">Global Secure SARL</span>
          <img
            src="/placeholder.svg"
            alt="Company Logo"
            className="w-8 h-8 rounded-full"
          />
        </div>
      </div>

      <div className="grid grid-cols-5 gap-4">
        {stats.map((stat) => (
          <Card key={stat.label} className="p-4 bg-white">
            <p className="text-sm text-muted-foreground">{stat.label}</p>
            <p className="text-2xl font-bold mt-2" style={{ color: stat.textColor }}>
              {stat.value}
            </p>
            <p className="text-xs text-muted-foreground mt-1">{stat.subtext}</p>
          </Card>
        ))}
      </div>

      <div className="grid grid-cols-2 gap-4">
        <Card className="p-4 bg-white">
          <h2 className="text-lg font-semibold mb-4">Historique de connectivité</h2>
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={connectivityData}>
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Line 
                type="monotone" 
                dataKey="online" 
                stroke="#4CAF50" 
                name="Sites en ligne"
                strokeWidth={2}
              />
              <Line 
                type="monotone" 
                dataKey="offline" 
                stroke="#F44336" 
                name="Sites hors ligne"
                strokeWidth={2}
              />
            </LineChart>
          </ResponsiveContainer>
        </Card>

        <Card className="p-4 bg-white">
          <h2 className="text-lg font-semibold mb-4">Répartition des équipements</h2>
          <ResponsiveContainer width="100%" height={300}>
            <PieChart>
              <Pie
                data={equipmentData}
                innerRadius={60}
                outerRadius={80}
                dataKey="value"
                label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
              >
                {equipmentData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.color} />
                ))}
              </Pie>
            </PieChart>
          </ResponsiveContainer>
        </Card>
      </div>

      <Card className="p-4 bg-white">
        <h2 className="text-lg font-semibold mb-4">Dernières alertes</h2>
        <div className="space-y-2">
          {alerts.map((alert, index) => (
            <div
              key={index}
              className="p-3 rounded-lg"
              style={{
                backgroundColor: alert.type === 'error' ? '#FEF2F2' : 
                                alert.type === 'warning' ? '#FEF3C7' : 
                                '#F0FDF4'
              }}
            >
              <div className="flex justify-between items-center">
                <div>
                  <p className="font-medium">{alert.title}</p>
                  <p className="text-sm text-muted-foreground">{alert.time}</p>
                </div>
                <span 
                  className={cn(
                    "px-2 py-1 rounded text-xs font-medium",
                    alert.type === 'error' ? "bg-red-100 text-red-800" :
                    alert.type === 'warning' ? "bg-amber-100 text-amber-800" :
                    "bg-green-100 text-green-800"
                  )}
                >
                  {alert.status}
                </span>
              </div>
            </div>
          ))}
        </div>
      </Card>
    </div>
  );
};

export default Index;
