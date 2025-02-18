
import { Card } from "@/components/ui/card";
import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useState } from "react";
import { CreditCard, Wallet } from "lucide-react"; // Remplacé PaypalIcon par Wallet
import { toast } from "sonner";

const Settings = () => {
  const [notifications, setNotifications] = useState(true);
  const [emailAlerts, setEmailAlerts] = useState(true);
  const [darkMode, setDarkMode] = useState(false);
  const [selectedPaymentMethod, setSelectedPaymentMethod] = useState<"card" | "paypal" | null>(null);
  const [siteCount, setSiteCount] = useState(3); // Exemple avec 3 sites

  const pricePerSite = 15;
  const totalHT = siteCount * pricePerSite;
  const totalTTC = totalHT * 1.2; // TVA 20%

  const handlePayment = () => {
    if (!selectedPaymentMethod) {
      toast.error("Veuillez sélectionner une méthode de paiement");
      return;
    }
    toast.success("Paiement simulé avec succès !");
  };

  return (
    <div className="space-y-6 animate-fade-in">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold">Configuration</h1>
          <p className="text-muted-foreground">
            Paramètres de l'application
          </p>
        </div>
      </div>

      <div className="grid gap-4">
        <Card className="p-6 glass">
          <h2 className="text-lg font-semibold mb-4">Abonnement et Facturation</h2>
          <div className="space-y-6">
            <div className="bg-muted/50 p-4 rounded-lg">
              <h3 className="font-medium mb-2">Résumé de l'abonnement</h3>
              <div className="space-y-2">
                <div className="flex justify-between">
                  <span>Nombre de sites</span>
                  <span>{siteCount}</span>
                </div>
                <div className="flex justify-between">
                  <span>Prix par site / mois</span>
                  <span>{pricePerSite}€ HT</span>
                </div>
                <div className="flex justify-between font-medium">
                  <span>Total HT / mois</span>
                  <span>{totalHT}€</span>
                </div>
                <div className="flex justify-between text-sm text-muted-foreground">
                  <span>TVA (20%)</span>
                  <span>{(totalTTC - totalHT).toFixed(2)}€</span>
                </div>
                <div className="flex justify-between font-semibold text-lg pt-2 border-t">
                  <span>Total TTC / mois</span>
                  <span>{totalTTC.toFixed(2)}€</span>
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <h3 className="font-medium">Méthode de paiement</h3>
              <div className="grid grid-cols-2 gap-4">
                <button
                  onClick={() => setSelectedPaymentMethod("card")}
                  className={`p-4 border rounded-lg flex items-center gap-3 hover:border-primary transition-colors ${
                    selectedPaymentMethod === "card" ? "border-primary bg-primary/5" : ""
                  }`}
                >
                  <CreditCard className="w-5 h-5" />
                  <span>Carte bancaire</span>
                </button>
                <button
                  onClick={() => setSelectedPaymentMethod("paypal")}
                  className={`p-4 border rounded-lg flex items-center gap-3 hover:border-primary transition-colors ${
                    selectedPaymentMethod === "paypal" ? "border-primary bg-primary/5" : ""
                  }`}
                >
                  <Wallet className="w-5 h-5" />
                  <span>PayPal</span>
                </button>
              </div>
              <Button onClick={handlePayment} className="w-full">
                Payer {totalTTC.toFixed(2)}€
              </Button>
            </div>
          </div>
        </Card>

        <Card className="p-6 glass">
          <h2 className="text-lg font-semibold mb-4">Notifications</h2>
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <Label htmlFor="notifications">Activer les notifications</Label>
              <Switch
                id="notifications"
                checked={notifications}
                onCheckedChange={setNotifications}
              />
            </div>
            <div className="flex items-center justify-between">
              <Label htmlFor="emailAlerts">Alertes par email</Label>
              <Switch
                id="emailAlerts"
                checked={emailAlerts}
                onCheckedChange={setEmailAlerts}
              />
            </div>
          </div>
        </Card>

        <Card className="p-6 glass">
          <h2 className="text-lg font-semibold mb-4">Apparence</h2>
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <Label htmlFor="darkMode">Mode sombre</Label>
              <Switch
                id="darkMode"
                checked={darkMode}
                onCheckedChange={setDarkMode}
              />
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default Settings;
