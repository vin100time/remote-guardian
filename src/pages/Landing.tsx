
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
      <nav className="border-b bg-white/50 backdrop-blur-sm sticky top-0 z-50 animate-fade-in">
        <div className="container mx-auto px-4 sm:px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <span className="text-xl sm:text-2xl font-bold text-[#0e3175] tracking-tight hover:scale-105 transition-transform duration-300">Vigileos.</span>
            </div>
            <div className="flex items-center gap-2 sm:gap-4">
              <Button 
                variant={isLogin ? "default" : "outline"}
                onClick={() => setIsLogin(true)}
                className={`${isLogin ? "bg-[#0e3175] hover:bg-[#0e3175]/90" : ""} text-sm sm:text-base transition-all duration-300 hover:-translate-y-0.5`}
              >
                Connexion
              </Button>
              <Button 
                variant={!isLogin ? "default" : "outline"}
                onClick={() => setIsLogin(false)}
                className={`${!isLogin ? "bg-[#0e3175] hover:bg-[#0e3175]/90" : ""} text-sm sm:text-base transition-all duration-300 hover:-translate-y-0.5`}
              >
                S'inscrire
              </Button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <div className="container mx-auto px-4 sm:px-6 py-8 sm:py-12 md:py-24">
        <div className="grid lg:grid-cols-2 gap-8 md:gap-16 items-start lg:items-center">
          <div className="space-y-6 sm:space-y-8 animate-fade-in [animation-delay:200ms]">
            <div className="space-y-4 sm:space-y-6">
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold leading-tight text-gray-900 tracking-tight">
                Supervision à distance de vos sites en <span className="text-[#0e3175] animate-pulse">temps réel</span>
              </h1>
              <p className="text-lg sm:text-xl text-gray-600 leading-relaxed animate-fade-in [animation-delay:400ms]">
                Vigileos vous permet de surveiller tous vos sites et équipements depuis une interface unique, 
                avec des alertes en temps réel et des analyses détaillées.
              </p>
            </div>
            
            <div className="space-y-3 sm:space-y-4">
              <div className="transform hover:scale-[1.02] transition-all duration-300 animate-fade-in [animation-delay:600ms]">
                <div className="flex items-center gap-3 sm:gap-4 p-4 sm:p-6 bg-white/80 backdrop-blur-sm rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
                  <div className="bg-[#0e3175]/10 p-2 sm:p-3 rounded-xl">
                    <User className="h-5 w-5 sm:h-6 sm:w-6 text-[#0e3175]" />
                  </div>
                  <span className="text-sm sm:text-base text-gray-700 font-medium">Sécurité renforcée et monitoring 24/7</span>
                </div>
              </div>

              <div className="transform hover:scale-[1.02] transition-all duration-300 animate-fade-in [animation-delay:800ms]">
                <div className="flex items-center gap-3 sm:gap-4 p-4 sm:p-6 bg-white/80 backdrop-blur-sm rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
                  <div className="bg-[#0e3175]/10 p-2 sm:p-3 rounded-xl">
                    <Lock className="h-5 w-5 sm:h-6 sm:w-6 text-[#0e3175]" />
                  </div>
                  <span className="text-sm sm:text-base text-gray-700 font-medium">Alertes en temps réel sur tous vos appareils</span>
                </div>
              </div>

              <div className="transform hover:scale-[1.02] transition-all duration-300 animate-fade-in [animation-delay:1000ms]">
                <div className="flex items-center gap-3 sm:gap-4 p-4 sm:p-6 bg-white/80 backdrop-blur-sm rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
                  <div className="bg-[#0e3175]/10 p-2 sm:p-3 rounded-xl">
                    <Wifi className="h-5 w-5 sm:h-6 sm:w-6 text-[#0e3175]" />
                  </div>
                  <span className="text-sm sm:text-base text-gray-700 font-medium">Accès à distance à vos équipements où que vous soyez</span>
                </div>
              </div>
            </div>
          </div>

          {/* Login/Signup Form */}
          <Card className="p-4 sm:p-8 shadow-2xl bg-white/80 backdrop-blur-lg border-0 rounded-2xl transform hover:scale-[1.01] transition-all duration-300 animate-fade-in [animation-delay:400ms] w-full max-w-lg mx-auto lg:mx-0">
            <div className="mb-6 sm:mb-8">
              <h2 className="text-2xl sm:text-3xl font-bold mb-2 text-[#0e3175] tracking-tight">
                {isLogin ? "Connexion" : "Créer un compte"}
              </h2>
              <p className="text-gray-600 text-sm sm:text-base">
                {isLogin 
                  ? "Accédez à votre tableau de bord" 
                  : "Commencez à superviser vos sites"}
              </p>
            </div>

            <form className="space-y-4 sm:space-y-5">
              {!isLogin && (
                <div className="space-y-2 animate-fade-in">
                  <Label htmlFor="company" className="text-sm font-medium">Nom de l'entreprise</Label>
                  <Input 
                    id="company" 
                    type="text" 
                    placeholder="Global Secure SARL"
                    className="h-10 sm:h-12 px-4 bg-white/90 hover:scale-[1.01] transition-transform text-sm sm:text-base"
                  />
                </div>
              )}
              
              <div className="space-y-2 animate-fade-in [animation-delay:200ms]">
                <Label htmlFor="email" className="text-sm font-medium">Email</Label>
                <Input 
                  id="email" 
                  type="email" 
                  placeholder="contact@entreprise.fr"
                  className="h-10 sm:h-12 px-4 bg-white/90 hover:scale-[1.01] transition-transform text-sm sm:text-base"
                />
              </div>

              <div className="space-y-2 animate-fade-in [animation-delay:400ms]">
                <Label htmlFor="password" className="text-sm font-medium">Mot de passe</Label>
                <Input 
                  id="password" 
                  type="password"
                  className="h-10 sm:h-12 px-4 bg-white/90 hover:scale-[1.01] transition-transform text-sm sm:text-base"
                />
              </div>

              {!isLogin && (
                <div className="space-y-2 animate-fade-in [animation-delay:600ms]">
                  <Label htmlFor="confirmPassword" className="text-sm font-medium">Confirmer le mot de passe</Label>
                  <Input 
                    id="confirmPassword" 
                    type="password"
                    className="h-10 sm:h-12 px-4 bg-white/90 hover:scale-[1.01] transition-transform text-sm sm:text-base"
                  />
                </div>
              )}

              <Button 
                className="w-full bg-[#0e3175] hover:bg-[#0e3175]/90 h-10 sm:h-12 text-sm sm:text-base font-medium transition-all duration-300 hover:shadow-lg hover:-translate-y-0.5 animate-fade-in [animation-delay:800ms]"
              >
                {isLogin ? (
                  <User className="mr-2 h-4 w-4 sm:h-5 sm:w-5" />
                ) : (
                  <Lock className="mr-2 h-4 w-4 sm:h-5 sm:w-5" />
                )}
                {isLogin ? "Se connecter" : "Créer un compte"}
              </Button>
            </form>

            <p className="text-center text-xs sm:text-sm text-gray-600 mt-4 sm:mt-6 animate-fade-in [animation-delay:1000ms]">
              {isLogin ? (
                <>
                  Pas encore de compte ?{" "}
                  <button
                    onClick={() => setIsLogin(false)}
                    className="text-[#0e3175] font-medium hover:underline transition-all hover:-translate-y-0.5"
                  >
                    S'inscrire
                  </button>
                </>
              ) : (
                <>
                  Déjà un compte ?{" "}
                  <button
                    onClick={() => setIsLogin(true)}
                    className="text-[#0e3175] font-medium hover:underline transition-all hover:-translate-y-0.5"
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
