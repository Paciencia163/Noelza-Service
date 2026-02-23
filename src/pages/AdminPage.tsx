import { useState, useEffect } from "react";
import { db } from "../firebase"; // ajuste o caminho se necessário
import {
  Ship,
  Package,
  Users,
  MapPin,
  Menu,
  LogOut,
} from "lucide-react";
import { useNavigate } from "react-router-dom";
import { doc, getDoc, setDoc } from "firebase/firestore";

interface StatsHome {
  shipsServed: string;
  inClearance: string;
  crewAssisted: string;
  yearsExperience: string;
}

export default function AdminPage() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const navigate = useNavigate();

  function handleLogout() {
    navigate("/");
  }

  const [statsHome, setStatsHome] = useState<StatsHome>({
    shipsServed: "",
    inClearance: "",
    crewAssisted: "",
    yearsExperience: "",
  });

  // Pegar os dados do Firebase ao carregar
  useEffect(() => {
    async function fetchStats() {
      const docRef = doc(db, "statsHome", "currentStats");
      const docSnap = await getDoc(docRef);

      if (docSnap.exists()) {
        // Tipando explicitamente
        setStatsHome(docSnap.data() as StatsHome);
      } else {
        console.log("Documento não encontrado!");
      }
    }

    fetchStats();
  }, []);

  // Alterar campos localmente
  const handleChange = (key: keyof StatsHome, value: string) => {
    setStatsHome((prev) => ({ ...prev, [key]: value }));
  };

  // Salvar no Firebase
  const handleSave = async () => {
    const docRef = doc(db, "statsHome", "currentStats");
    await setDoc(docRef, statsHome);
    alert("Dados salvos com sucesso!");
  };

  return (
    <div className="flex min-h-screen bg-gray-100">
      {/* SIDEBAR (desktop) */}
      <aside className="hidden md:flex flex-col w-64 bg-slate-900 text-white p-6">
        <h1 className="text-2xl font-bold mb-10">Painel Administrativo</h1>

        <nav className="space-y-4">
          <a className="block p-2 rounded bg-slate-800 cursor-pointer">
            Dashboard
          </a>
        </nav>

        <div className="mt-auto">
          <button
            className="flex items-center gap-2 p-2 rounded hover:bg-slate-800 w-full"
            onClick={handleLogout}
          >
            <LogOut size={18} /> Sair
          </button>
        </div>
      </aside>

      {/* MAIN AREA */}
      <main className="flex-1 p-6">
        {/* TOP BAR (mobile) */}
        <div className="md:hidden flex justify-between items-center mb-6 relative">
          <h2 className="text-xl font-bold">Painel Administrativo</h2>
          <button
            onClick={() => setMobileMenuOpen((prev) => !prev)}
            className="p-2 rounded hover:bg-gray-200 transition"
          >
            <Menu size={28} />
          </button>

          {mobileMenuOpen && (
            <div className="absolute right-0 top-full mt-2 w-40 bg-white shadow-lg rounded-lg z-50">
              <button
                onClick={handleLogout}
                className="flex items-center gap-2 w-full px-4 py-2 text-red-600 hover:bg-red-100 rounded"
              >
                <LogOut size={18} /> Sair
              </button>
            </div>
          )}
        </div>

        <h2 className="text-2xl font-bold mb-6">Gerenciar Estatísticas</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <StatCard
            icon={<Ship className="text-slate-700" />}
            label="Navios Atendidos"
            value={statsHome.shipsServed}
            onChange={(v) => handleChange("shipsServed", v)}
          />
          <StatCard
            icon={<Package className="text-slate-700" />}
            label="Navios em Clearance"
            value={statsHome.inClearance}
            onChange={(v) => handleChange("inClearance", v)}
          />
          <StatCard
            icon={<Users className="text-slate-700" />}
            label="Tripulantes Assistidos"
            value={statsHome.crewAssisted}
            onChange={(v) => handleChange("crewAssisted", v)}
          />
          <StatCard
            icon={<MapPin className="text-slate-700" />}
            label="Anos de Experiência"
            value={statsHome.yearsExperience}
            onChange={(v) => handleChange("yearsExperience", v)}
          />
        </div>

        <div className="mt-6">
          <button
            className="bg-slate-900 text-white px-6 py-3 rounded hover:bg-slate-700 transition"
            onClick={handleSave}
          >
            Salvar Tudo
          </button>
        </div>
      </main>
    </div>
  );
}

function StatCard({
  icon,
  label,
  value,
  onChange,
}: {
  icon: React.ReactNode;
  label: string;
  value: string;
  onChange: (v: string) => void;
}) {
  return (
    <div className="bg-white shadow p-6 rounded-xl border">
      <div className="flex items-center gap-3 mb-4">
        {icon}
        <h3 className="text-xl font-semibold">{label}</h3>
      </div>

      <input
        type="text"
        className="w-full border rounded p-2 mb-4"
        value={value}
        onChange={(e) => onChange(e.target.value)}
      />
    </div>
  );
}
