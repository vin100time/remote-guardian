
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import Layout from "./components/Layout";
import Index from "./pages/Index";
import Sites from "./pages/Sites";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/sites" element={<Sites />} />
        </Routes>
      </Layout>
    </BrowserRouter>
    <Toaster />
    <Sonner />
  </QueryClientProvider>
);

export default App;
