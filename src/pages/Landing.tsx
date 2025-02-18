
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { User, Lock, Wifi } from "lucide-react";
import { Card } from "@/components/ui/card";

const Landing = () => {
  const [isLogin, setIsLogin] = useState(true);

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#0e3175]/5 via-white to-[#0e3175]/5">
      {/* Navigation */}
      <nav className="border-b bg-white/50 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <span className="text-2xl font-bold text-[#0e3175] tracking-tight">Vigileos.</span>
            </div>
            <div className="flex items-center gap-4">
              <Button 
                variant={isLogin ? "default" : "outline"}
                onClick={() => setIsLogin(true)}
                className={isLogin ? "bg-[#0e3175] hover:bg-[#0e3175]/90 transition-all duration-300" : ""}
              >
                Connexion
              </Button>
              <Button 
                variant={!isLogin ? "default" : "outline"}
                onClick={() => setIsLogin(false)}
                className={!isLogin ? "bg-[#0e3175] hover:bg-[#0e3175]/90 transition-all duration-300" : ""}
              >
                S'inscrire
              </Button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <div className="container mx-auto px-6 py-24">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            <div className="space-y-6">
              <h1 className="text-6xl font-bold leading-tight text-gray-900 tracking-tight">
                Supervision à distance de vos sites en <span className="text-[#0e3175]">temps réel</span>
              </h1>
              <p className="text-xl text-gray-600 leading-relaxed">
                Vigileos vous permet de surveiller tous vos sites et équipements depuis une interface unique, 
                avec des alertes en temps réel et des analyses détaillées.
              </p>
            </div>
            
            <div className="space-y-4">
              <div className="transform hover:scale-[1.02] transition-all duration-300">
                <div className="flex items-center gap-4 p-6 bg-white/80 backdrop-blur-sm rounded-2xl border border-gray-100 shadow-sm">
                  <div className="bg-[#0e3175]/10 p-3 rounded-xl">
                    <User className="h-6 w-6 text-[#0e3175]" />
                  </div>
                  <span className="text-gray-700 font-medium">Sécurité renforcée et monitoring 24/7</span>
                </div>
              </div>

              <div className="transform hover:scale-[1.02] transition-all duration-300">
                <div className="flex items-center gap-4 p-6 bg-white/80 backdrop-blur-sm rounded-2xl border border-gray-100 shadow-sm">
                  <div className="bg-[#0e3175]/10 p-3 rounded-xl">
                    <Lock className="h-6 w-6 text-[#0e3175]" />
                  </div>
                  <span className="text-gray-700 font-medium">Alertes en temps réel sur tous vos appareils</span>
                </div>
              </div>

              <div className="transform hover:scale-[1.02] transition-all duration-300">
                <div className="flex items-center gap-4 p-6 bg-white/80 backdrop-blur-sm rounded-2xl border border-gray-100 shadow-sm">
                  <div className="bg-[#0e3175]/10 p-3 rounded-xl">
                    <Wifi className="h-6 w-6 text-[#0e3175]" />
                  </div>
                  <span className="text-gray-700 font-medium">Accès à distance à vos équipements où que vous soyez</span>
                </div>
              </div>
            </div>
          </div>

          {/* Login/Signup Form */}
          <Card className="p-8 shadow-2xl bg-white/80 backdrop-blur-lg border-0 rounded-2xl transform hover:scale-[1.01] transition-all duration-300">
            <div className="mb-8">
              <h2 className="text-3xl font-bold mb-2 text-[#0e3175] tracking-tight">
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
                    className="h-12 px-4 bg-white/90"
                  />
                </div>
              )}
              
              <div className="space-y-2">
                <Label htmlFor="email" className="text-sm font-medium">Email</Label>
                <Input 
                  id="email" 
                  type="email" 
                  placeholder="contact@entreprise.fr"
                  className="h-12 px-4 bg-white/90"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="password" className="text-sm font-medium">Mot de passe</Label>
                <Input 
                  id="password" 
                  type="password"
                  className="h-12 px-4 bg-white/90"
                />
              </div>

              {!isLogin && (
                <div className="space-y-2">
                  <Label htmlFor="confirmPassword" className="text-sm font-medium">Confirmer le mot de passe</Label>
                  <Input 
                    id="confirmPassword" 
                    type="password"
                    className="h-12 px-4 bg-white/90"
                  />
                </div>
              )}

              <Button 
                className="w-full bg-[#0e3175] hover:bg-[#0e3175]/90 h-12 text-base font-medium transition-all duration-300 hover:shadow-lg"
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
