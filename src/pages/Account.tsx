
import { Card } from "@/components/ui/card";
import { UserIcon } from "lucide-react";

const Account = () => {
  const user = {
    name: "John Doe",
    email: "john.doe@example.com",
    role: "Administrateur",
    lastLogin: new Date().toLocaleString(),
    avatar: null
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
          <h2 className="text-lg font-semibold mb-4">Informations du compte</h2>
          <div className="space-y-4">
            <div>
              <p className="text-sm text-muted-foreground">Rôle</p>
              <p className="font-medium">{user.role}</p>
            </div>
            <div>
              <p className="text-sm text-muted-foreground">Dernière connexion</p>
              <p className="font-medium">{user.lastLogin}</p>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default Account;
