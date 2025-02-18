
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { User, Lock } from "lucide-react";
import { Card } from "@/components/ui/card";

const Landing = () => {
  const [isLogin, setIsLogin] = useState(true);

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#0e3175]/5 to-white">
      {/* Navigation */}
      <nav className="border-b bg-white/50 backdrop-blur-sm">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <span className="text-xl font-bold text-[#0e3175]">Vigileos.</span>
            </div>
            <div className="flex items-center gap-4">
              <Button 
                variant={isLogin ? "default" : "outline"}
                onClick={() => setIsLogin(true)}
                className={isLogin ? "bg-[#0e3175] hover:bg-[#0e3175]/90" : ""}
              >
                Connexion
              </Button>
              <Button 
                variant={!isLogin ? "default" : "outline"}
                onClick={() => setIsLogin(false)}
                className={!isLogin ? "bg-[#0e3175] hover:bg-[#0e3175]/90" : ""}
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
              Vigileos vous permet de surveiller tous vos sites et équipements depuis une interface unique, 
              avec des alertes en temps réel et des analyses détaillées.
            </p>
            <div className="space-y-4">
              <div className="flex items-center gap-3 p-4 bg-white/50 backdrop-blur-sm rounded-xl border border-gray-100">
                <div className="bg-[#0e3175]/10 p-2 rounded-full">
                  <User className="h-5 w-5 text-[#0e3175]" />
                </div>
                <span className="text-gray-700">Sécurité renforcée et monitoring 24/7</span>
              </div>
              <div className="flex items-center gap-3 p-4 bg-white/50 backdrop-blur-sm rounded-xl border border-gray-100">
                <div className="bg-[#0e3175]/10 p-2 rounded-full">
                  <Lock className="h-5 w-5 text-[#0e3175]" />
                </div>
                <span className="text-gray-700">Alertes en temps réel sur tous vos appareils</span>
              </div>
            </div>
          </div>

          {/* Login/Signup Form */}
          <Card className="p-8 shadow-xl bg-white/70 backdrop-blur-sm border-0">
            <div className="mb-8">
              <h2 className="text-3xl font-bold mb-2 text-[#0e3175]">
                {isLogin ? "Connexion" : "Créer un compte"}
              </h2>
              <p className="text-gray-600">
                {isLogin 
                  ? "Accédez à votre tableau de bord" 
                  : "Commencez à superviser vos sites"}
              </p>
            </div>

            <form className="space-y-5">
              {!isLogin && (
                <div className="space-y-2">
                  <Label htmlFor="company" className="text-sm font-medium">Nom de l'entreprise</Label>
                  <Input 
                    id="company" 
                    type="text" 
                    placeholder="Global Secure SARL"
                    className="h-12 px-4"
                  />
                </div>
              )}
              
              <div className="space-y-2">
                <Label htmlFor="email" className="text-sm font-medium">Email</Label>
                <Input 
                  id="email" 
                  type="email" 
                  placeholder="contact@entreprise.fr"
                  className="h-12 px-4"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="password" className="text-sm font-medium">Mot de passe</Label>
                <Input 
                  id="password" 
                  type="password"
                  className="h-12 px-4"
                />
              </div>

              {!isLogin && (
                <div className="space-y-2">
                  <Label htmlFor="confirmPassword" className="text-sm font-medium">Confirmer le mot de passe</Label>
                  <Input 
                    id="confirmPassword" 
                    type="password"
                    className="h-12 px-4"
                  />
                </div>
              )}

              <Button 
                className="w-full bg-[#0e3175] hover:bg-[#0e3175]/90 h-12 text-base font-medium transition-all duration-200 hover:shadow-lg"
              >
                {isLogin ? (
                  <User className="mr-2 h-5 w-5" />
                ) : (
                  <Lock className="mr-2 h-5 w-5" />
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
                    className="text-[#0e3175] font-medium hover:underline"
                  >
                    S'inscrire
                  </button>
                </>
              ) : (
                <>
                  Déjà un compte ?{" "}
                  <button
                    onClick={() => setIsLogin(true)}
                    className="text-[#0e3175] font-medium hover:underline"
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
