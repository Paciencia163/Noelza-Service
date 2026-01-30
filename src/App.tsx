import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Outlet } from "react-router-dom";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";

import { ScrollToTop } from "./components/ScrollToTop";
import Header from "./components/Header";
import Footer from "./components/Footer";
import PasswordGate from "./components/PasswordGate";

import Index from "./pages/Index";
import About from "./pages/About";
import Services from "./pages/Services";
import Activities from "./pages/Activities";
import AtivitiesPast from "./pages/AtivitiesPast";
import Clients from "./pages/Clients";
import Team from "./pages/Team";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";

import AdminPage from "./pages/AdminPage";
import { ScrollToHash } from "./components/ScrollToHash";

const queryClient = new QueryClient();

// Layout com Header e Footer
const MainLayout = () => (
  <div className="min-h-screen flex flex-col">
    <Header />
    <main className="flex-1">
      <ScrollToHash />
      <Outlet /> {/* As páginas normais renderizam aqui */}
    </main>
    <Footer />
  </div>
);

// Layout sem Header e Footer
const NoLayout = () => <Outlet />;

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <ScrollToTop />
        <Routes>
          {/* Páginas normais com Header/Footer */}
          <Route element={<MainLayout />}>
            <Route path="/" element={<Index />} />
            <Route path="/sobre" element={<About />} />
            <Route path="/servicos" element={<Services />} />
            <Route path="/atividades-passadas" element={<AtivitiesPast />} />
            <Route path="/atividades" element={<Activities />} />
            <Route path="/clientes" element={<Clients />} />
            <Route path="/equipe" element={<Team />} />
            <Route path="/contato" element={<Contact />} />
            <Route path="/noelza-admin-panel" element={<PasswordGate />} />
            <Route path="*" element={<NotFound />} />
          </Route>

          {/* Páginas isoladas sem Header/Footer */}
          <Route element={<NoLayout />}>
            <Route path="/admin-noelza-84592" element={<AdminPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
