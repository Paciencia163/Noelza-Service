import { useState } from "react";
import { useNavigate } from "react-router-dom";

const PasswordGate = () => {
  const navigate = useNavigate();
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  // senha guardada no .env (melhor prática)
  const correctPassword = import.meta.env.VITE_ADMIN_PASS;

  const handleSubmit = (e) => {
    e.preventDefault();

    if (password === correctPassword) {
      navigate("/admin-noelza-84592"); // 👉 envia para o painel real
    } else {
      setError("Senha incorreta.");
    }
  };

  return (
  <div className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-50 px-4">
    <div className="bg-white rounded-xl shadow-xl p-8 max-w-[600px] min-w-[320px] sm:min-w-[460px] md:min-w-[500px]">
      <h2 className="text-xl md:text-2xl font-semibold mb-4 text-primary text-center">
        🔐 Acesso Restrito
      </h2>

      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="password"
          placeholder="Digite a senha"
          className="w-full p-3 border rounded-lg outline-none focus:border-primary focus:ring-2 focus:ring-primary/30 transition"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        {error && <p className="text-red-500 text-sm text-center">{error}</p>}
        <button
          type="submit"
          className="w-full py-3 rounded-lg bg-primary text-white font-semibold hover:bg-primary/90 transition"
        >
          Entrar
        </button>
      </form>
    </div>
  </div>
);

};

export default PasswordGate;
