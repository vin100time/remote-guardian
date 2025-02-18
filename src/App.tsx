
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import Layout from "./components/Layout";
import Landing from "./pages/Landing";
import Index from "./pages/Index";
import Sites from "./pages/Sites";
import Equipment from "./pages/Equipment";
import SiteEquipment from "./pages/SiteEquipment";
import EquipmentDetail from "./pages/EquipmentDetail";
import Alerts from "./pages/Alerts";
import Settings from "./pages/Settings";
import Account from "./pages/Account";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <BrowserRouter>
      <Routes>
        {/* Routes publiques */}
        <Route path="/" element={<Landing />} />
        
        {/* Routes protégées avec Layout */}
        <Route path="/" element={<Layout />}>
          {/* Redirection de / vers /dashboard quand connecté */}
          <Route path="dashboard" element={<Index />} />
          
          {/* Gestion des sites */}
          <Route path="sites" element={<Sites />} />
          <Route path="sites/:siteId/equipment" element={<SiteEquipment />} />
          
          {/* Gestion des équipements */}
          <Route path="equipements" element={<Equipment />} />
          <Route path="equipements/:id" element={<EquipmentDetail />} />
          
          {/* Autres routes */}
          <Route path="alertes" element={<Alerts />} />
          <Route path="configuration" element={<Settings />} />
          <Route path="compte" element={<Account />} />
          
          {/* Gestion des routes inconnues */}
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
    <Toaster />
    <Sonner />
  </QueryClientProvider>
);

export default App;
