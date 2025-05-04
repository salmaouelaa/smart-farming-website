
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/layout/Layout";
import Home from "./pages/Home";
import FarmForm from "./pages/FarmForm";
import ResourceDashboard from "./pages/ResourceDashboard";
import AlgorithmComparison from "./pages/AlgorithmComparison";
import WaterFertilizerAnalysis from "./pages/WaterFertilizerAnalysis";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout><Home /></Layout>} />
          <Route path="/farm-form" element={<Layout><FarmForm /></Layout>} />
          <Route path="/resource-dashboard" element={<Layout><ResourceDashboard /></Layout>} />
          <Route path="/algorithm-comparison" element={<Layout><AlgorithmComparison /></Layout>} />
          <Route path="/water-fertilizer" element={<Layout><WaterFertilizerAnalysis /></Layout>} />
          <Route path="*" element={<Layout><NotFound /></Layout>} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
