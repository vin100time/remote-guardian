
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { User, Lock, Wifi } from "lucide-react";
import { Card } from "@/components/ui/card";

const Landing = () => {
  const [isLogin, setIsLogin] = useState(true);

  return (
    <div 
      className="min-h-screen bg-cover bg-center bg-no-repeat"
      style={{ 
        backgroundImage: 'url("https://images.unsplash.com/photo-1469474968028-56623f02e42e?q=80")',
      }}
    >
      {/* Navigation */}
      <nav className="border-b border-white/10 bg-black/20 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <span className="text-2xl font-bold text-white tracking-tight">Vigileos.</span>
            </div>
            <div className="flex items-center gap-4">
              <Button 
                variant={isLogin ? "default" : "outline"}
                onClick={() => setIsLogin(true)}
                className={isLogin ? "bg-[#F97316] hover:bg-[#F97316]/90 text-white border-none transition-all duration-300" : "text-white border-white/50 hover:bg-white/10"}
              >
                Connexion
              </Button>
              <Button 
                variant={!isLogin ? "default" : "outline"}
                onClick={() => setIsLogin(false)}
                className={!isLogin ? "bg-[#F97316] hover:bg-[#F97316]/90 text-white border-none transition-all duration-300" : "text-white border-white/50 hover:bg-white/10"}
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
              <h1 className="text-7xl font-bold leading-tight text-white tracking-tight">
                Welcome <br />Back
              </h1>
              <p className="text-xl text-white/80 leading-relaxed max-w-md">
                Surveillez vos sites et équipements en temps réel avec une interface intuitive et sécurisée.
              </p>
            </div>
            
            <div className="space-y-4">
              <div className="transform hover:scale-[1.02] transition-all duration-300">
                <div className="flex items-center gap-4 p-6 bg-black/30 backdrop-blur-sm rounded-2xl border border-white/10">
                  <div className="bg-white/10 p-3 rounded-xl">
                    <User className="h-6 w-6 text-white" />
                  </div>
                  <span className="text-white/90 font-medium">Sécurité renforcée et monitoring 24/7</span>
                </div>
              </div>

              <div className="transform hover:scale-[1.02] transition-all duration-300">
                <div className="flex items-center gap-4 p-6 bg-black/30 backdrop-blur-sm rounded-2xl border border-white/10">
                  <div className="bg-white/10 p-3 rounded-xl">
                    <Lock className="h-6 w-6 text-white" />
                  </div>
                  <span className="text-white/90 font-medium">Alertes en temps réel sur tous vos appareils</span>
                </div>
              </div>

              <div className="transform hover:scale-[1.02] transition-all duration-300">
                <div className="flex items-center gap-4 p-6 bg-black/30 backdrop-blur-sm rounded-2xl border border-white/10">
                  <div className="bg-white/10 p-3 rounded-xl">
                    <Wifi className="h-6 w-6 text-white" />
                  </div>
                  <span className="text-white/90 font-medium">Accès à distance à vos équipements où que vous soyez</span>
                </div>
              </div>
            </div>
          </div>

          {/* Login/Signup Form */}
          <Card className="p-8 bg-black/30 backdrop-blur-lg border-white/10 rounded-2xl transform hover:scale-[1.01] transition-all duration-300">
            <div className="mb-8">
              <h2 className="text-3xl font-bold mb-2 text-white tracking-tight">
                {isLogin ? "Connexion" : "Créer un compte"}
              </h2>
              <p className="text-white/80">
                {isLogin 
                  ? "Accédez à votre tableau de bord" 
                  : "Commencez à superviser vos sites"}
              </p>
            </div>

            <form className="space-y-5">
              {!isLogin && (
                <div className="space-y-2">
                  <Label htmlFor="company" className="text-sm font-medium text-white/90">Nom de l'entreprise</Label>
                  <Input 
                    id="company" 
                    type="text" 
                    placeholder="Global Secure SARL"
                    className="h-12 px-4 bg-white/10 border-white/20 text-white placeholder:text-white/50"
                  />
                </div>
              )}
              
              <div className="space-y-2">
                <Label htmlFor="email" className="text-sm font-medium text-white/90">Email</Label>
                <Input 
                  id="email" 
                  type="email" 
                  placeholder="contact@entreprise.fr"
                  className="h-12 px-4 bg-white/10 border-white/20 text-white placeholder:text-white/50"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="password" className="text-sm font-medium text-white/90">Mot de passe</Label>
                <Input 
                  id="password" 
                  type="password"
                  className="h-12 px-4 bg-white/10 border-white/20 text-white"
                />
              </div>

              {!isLogin && (
                <div className="space-y-2">
                  <Label htmlFor="confirmPassword" className="text-sm font-medium text-white/90">Confirmer le mot de passe</Label>
                  <Input 
                    id="confirmPassword" 
                    type="password"
                    className="h-12 px-4 bg-white/10 border-white/20 text-white"
                  />
                </div>
              )}

              <Button 
                className="w-full bg-[#F97316] hover:bg-[#F97316]/90 h-12 text-base font-medium transition-all duration-300 hover:shadow-lg text-white border-none"
              >
                {isLogin ? (
                  <User className="mr-2 h-5 w-5" />
                ) : (
                  <Lock className="mr-2 h-5 w-5" />
                )}
                {isLogin ? "Se connecter" : "Créer un compte"}
              </Button>
            </form>

            <p className="text-center text-sm text-white/80 mt-6">
              {isLogin ? (
                <>
                  Pas encore de compte ?{" "}
                  <button
                    onClick={() => setIsLogin(false)}
                    className="text-[#F97316] font-medium hover:underline"
                  >
                    S'inscrire
                  </button>
                </>
              ) : (
                <>
                  Déjà un compte ?{" "}
                  <button
                    onClick={() => setIsLogin(true)}
                    className="text-[#F97316] font-medium hover:underline"
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
