import { Link } from "react-router-dom";
import { Anchor, Mail, Phone, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="w-12 h-12 bg-slate-200 p-1 rounded-lg flex items-center justify-center">
                {/* <Anchor className="w-6 h-6" /> */}
              <img src="./Noelza.png" alt="" />

              </div>
              <div>
                <h3 className="text-xl font-bold">Noelza Service</h3>
                <p className="text-sm opacity-80">Maritime Solutions</p>
              </div>
            </div>
            <p className="text-sm opacity-80 leading-relaxed">
              Especializada em Agenciamento de Navegação Marítima e Freight Forward, 
              oferecendo soluções profissionais desde 2018.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Links Rápidos</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/sobre" className="text-sm opacity-80 hover:opacity-100 transition-opacity">
                  Sobre Nós
                </Link>
              </li>
              <li>
                <Link to="/servicos" className="text-sm opacity-80 hover:opacity-100 transition-opacity">
                  Serviços
                </Link>
              </li>
              <li>
                <Link to="/atividades" className="text-sm opacity-80 hover:opacity-100 transition-opacity">
                  Atividades
                </Link>
              </li>
              <li>
                <Link to="/clientes" className="text-sm opacity-80 hover:opacity-100 transition-opacity">
                  Clientes
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Serviços</h4>
            <ul className="space-y-2">
              <li className="text-sm opacity-80">Agenciamento de Navios</li>
              <li className="text-sm opacity-80">Freight Forward</li>
              <li className="text-sm opacity-80">Licenciamento de Navios</li>
              <li className="text-sm opacity-80">Consultoria Marítima</li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contacto</h4>
            <div className="space-y-3">
              <div className="flex items-center space-x-2">
                <Mail className="w-4 h-4" />
                <span className="text-sm opacity-80">geral@noelza.service.ao</span>
              </div>
              <div className="flex items-center space-x-2">
                <Phone className="w-4 h-4" />
                <span className="text-sm opacity-80">+244 925 878 218</span>
              </div>
              <div className="flex items-center space-x-2">
                <MapPin className="w-4 h-4" />
                <span className="text-sm opacity-80">Luanda, Angola</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 mt-8 pt-8 text-center">
          <p className="text-sm opacity-80">
            © 2024 Noelza Service. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
