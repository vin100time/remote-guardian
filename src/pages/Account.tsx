
import { Card } from "@/components/ui/card";
import { UserIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useState } from "react";
import { toast } from "sonner";

const Account = () => {
  const [user, setUser] = useState({
    name: "John Doe",
    email: "john.doe@example.com",
    phone: "+33 6 12 34 56 78",
    role: "Administrateur",
    timezone: "Europe/Paris",
    language: "fr",
    lastLogin: new Date().toLocaleString(),
    avatar: null
  });

  const handleSave = () => {
    toast.success("Modifications enregistrées avec succès");
  };

  return (
    <div className="space-y-6 animate-fade-in">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold">Compte</h1>
          <p className="text-muted-foreground">
            Gestion de votre compte
          </p>
        </div>
        <Button onClick={handleSave}>Enregistrer les modifications</Button>
      </div>

      <div className="grid gap-4">
        <Card className="p-6 glass">
          <div className="flex items-center gap-4">
            <div className="h-16 w-16 rounded-full bg-secondary flex items-center justify-center">
              <UserIcon className="w-8 h-8 text-muted-foreground" />
            </div>
            <div>
              <h2 className="text-xl font-semibold">{user.name}</h2>
              <p className="text-muted-foreground">{user.email}</p>
            </div>
          </div>
        </Card>

        <Card className="p-6 glass">
          <h2 className="text-lg font-semibold mb-4">Informations personnelles</h2>
          <div className="grid gap-4">
            <div className="grid md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="name">Nom complet</Label>
                <Input 
                  id="name" 
                  value={user.name}
                  onChange={(e) => setUser({...user, name: e.target.value})}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input 
                  id="email" 
                  type="email"
                  value={user.email}
                  onChange={(e) => setUser({...user, email: e.target.value})}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="phone">Téléphone</Label>
                <Input 
                  id="phone" 
                  value={user.phone}
                  onChange={(e) => setUser({...user, phone: e.target.value})}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="role">Rôle</Label>
                <Input id="role" value={user.role} disabled />
              </div>
            </div>
          </div>
        </Card>

        <Card className="p-6 glass">
          <h2 className="text-lg font-semibold mb-4">Préférences</h2>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="language">Langue</Label>
              <Select 
                value={user.language}
                onValueChange={(value) => setUser({...user, language: value})}
              >
                <SelectTrigger id="language">
                  <SelectValue placeholder="Sélectionner une langue" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="fr">Français</SelectItem>
                  <SelectItem value="en">English</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="space-y-2">
              <Label htmlFor="timezone">Fuseau horaire</Label>
              <Select 
                value={user.timezone}
                onValueChange={(value) => setUser({...user, timezone: value})}
              >
                <SelectTrigger id="timezone">
                  <SelectValue placeholder="Sélectionner un fuseau horaire" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="Europe/Paris">Europe/Paris (UTC+1)</SelectItem>
                  <SelectItem value="Europe/London">Europe/London (UTC+0)</SelectItem>
                  <SelectItem value="America/New_York">America/New_York (UTC-5)</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
        </Card>

        <Card className="p-6 glass">
          <h2 className="text-lg font-semibold mb-4">Dernière connexion</h2>
          <p className="font-medium">{user.lastLogin}</p>
        </Card>
      </div>
    </div>
  );
};

export default Account;
