
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Shield, User, Lock } from "lucide-react";
import { Card } from "@/components/ui/card";

const Landing = () => {
  const [isLogin, setIsLogin] = useState(true);

  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-50 to-white">
      {/* Navigation */}
      <nav className="border-b bg-white/50 backdrop-blur-sm">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Shield className="h-8 w-8 text-purple-600" />
              <span className="text-xl font-bold">Vigile OS</span>
            </div>
            <div className="flex items-center gap-4">
              <Button 
                variant={isLogin ? "default" : "outline"}
                onClick={() => setIsLogin(true)}
              >
                Connexion
              </Button>
              <Button 
                variant={!isLogin ? "default" : "outline"}
                onClick={() => setIsLogin(false)}
              >
                S'inscrire
              </Button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <div className="container mx-auto px-6 py-16">
        <div className="grid grid-cols-2 gap-16 items-center">
          <div>
            <h1 className="text-5xl font-bold leading-tight text-gray-900 mb-6">
              Supervision à distance de vos sites en temps réel
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              Vigile OS vous permet de surveiller tous vos sites et équipements depuis une interface unique, 
              avec des alertes en temps réel et des analyses détaillées.
            </p>
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="bg-green-100 p-2 rounded-full">
                  <Shield className="h-5 w-5 text-green-600" />
                </div>
                <span className="text-gray-700">Sécurité renforcée et monitoring 24/7</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="bg-blue-100 p-2 rounded-full">
                  <Shield className="h-5 w-5 text-blue-600" />
                </div>
                <span className="text-gray-700">Alertes en temps réel sur tous vos appareils</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="bg-purple-100 p-2 rounded-full">
                  <Shield className="h-5 w-5 text-purple-600" />
                </div>
                <span className="text-gray-700">Tableau de bord personnalisable et intuitif</span>
              </div>
            </div>
          </div>

          {/* Login/Signup Form */}
          <Card className="p-8 shadow-lg">
            <div className="mb-6">
              <h2 className="text-2xl font-semibold mb-2">
                {isLogin ? "Connexion" : "Créer un compte"}
              </h2>
              <p className="text-gray-600">
                {isLogin 
                  ? "Accédez à votre tableau de bord" 
                  : "Commencez à superviser vos sites"}
              </p>
            </div>

            <form className="space-y-4">
              {!isLogin && (
                <div className="space-y-2">
                  <Label htmlFor="company">Nom de l'entreprise</Label>
                  <Input id="company" type="text" placeholder="Global Secure SARL" />
                </div>
              )}
              
              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input id="email" type="email" placeholder="contact@entreprise.fr" />
              </div>

              <div className="space-y-2">
                <Label htmlFor="password">Mot de passe</Label>
                <Input id="password" type="password" />
              </div>

              {!isLogin && (
                <div className="space-y-2">
                  <Label htmlFor="confirmPassword">Confirmer le mot de passe</Label>
                  <Input id="confirmPassword" type="password" />
                </div>
              )}

              <Button className="w-full" size="lg">
                {isLogin ? (
                  <User className="mr-2 h-4 w-4" />
                ) : (
                  <Lock className="mr-2 h-4 w-4" />
                )}
                {isLogin ? "Se connecter" : "Créer un compte"}
              </Button>
            </form>

            <p className="text-center text-sm text-gray-600 mt-6">
              {isLogin ? (
                <>
                  Pas encore de compte ?{" "}
                  <button
                    onClick={() => setIsLogin(false)}
                    className="text-purple-600 hover:underline"
                  >
                    S'inscrire
                  </button>
                </>
              ) : (
                <>
                  Déjà un compte ?{" "}
                  <button
                    onClick={() => setIsLogin(true)}
                    className="text-purple-600 hover:underline"
                  >
                    Se connecter
                  </button>
                </>
              )}
            </p>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Landing;
