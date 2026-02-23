import { Link, useNavigate } from "react-router-dom";
import { Anchor, Mail, Phone, MapPin } from "lucide-react";
import { useTranslation } from "react-i18next";
import { useRef } from "react";

const Footer = () => {
  const { t } = useTranslation();

    const navigate = useNavigate();
  const pressTimer = useRef<NodeJS.Timeout | null>(null);

  // Quando o usuário começa a pressionar
  const handleMouseDown = () => {
    pressTimer.current = setTimeout(() => {
      navigate("/noelza-admin-panel"); // 👉 sua página admin
      // navigate("/admin-noelza-84592"); // 👉 sua página admin
    }, 2000); // 3 segundos
  };

  // Quando solta antes dos 3s → cancela o long press
  const handleMouseUp = () => {
    if (pressTimer.current) clearTimeout(pressTimer.current);
  };

  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="w-12 h-12 bg-slate-200 p-1 rounded-lg flex items-center justify-center">
                <img 
                  src="./Noelza.png" 
                  alt="Noelza Logo"
                  onMouseDown={handleMouseDown}
                  onMouseUp={handleMouseUp}
                  onMouseLeave={handleMouseUp}
                  onTouchStart={handleMouseDown}
                  onTouchEnd={handleMouseUp}
                  />
              </div>
              <div>
                <h3 className="text-xl font-bold">{t("footer.company.name")}</h3>
                <p className="text-sm opacity-80">{t("footer.company.tagline")}</p>
              </div>
            </div>
            <p className="text-sm opacity-80 leading-relaxed">
              {t("footer.company.description")}
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">{t("footer.quickLinks.title")}</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/sobre" className="text-sm opacity-80 hover:opacity-100 transition-opacity">
                  {t("footer.quickLinks.about")}
                </Link>
              </li>
              <li>
                <Link to="/servicos" className="text-sm opacity-80 hover:opacity-100 transition-opacity">
                  {t("footer.quickLinks.services")}
                </Link>
              </li>
              <li>
                <Link to="/atividades" className="text-sm opacity-80 hover:opacity-100 transition-opacity">
                  {t("footer.quickLinks.activities")}
                </Link>
              </li>
              <li>
                <Link to="/clientes" className="text-sm opacity-80 hover:opacity-100 transition-opacity">
                  {t("footer.quickLinks.clients")}
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold mb-4">{t("footer.services.title")}</h4>
            <ul className="space-y-2">
              <li className="text-sm opacity-80">{t("footer.services.agency")}</li>
              <li className="text-sm opacity-80">{t("footer.services.forward")}</li>
              <li className="text-sm opacity-80">{t("footer.services.licensing")}</li>
              <li className="text-sm opacity-80">{t("footer.services.consulting")}</li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4">{t("footer.contact.title")}</h4>
            <div className="space-y-3">
              <div className="flex items-center space-x-2">
                <Mail className="w-4 h-4" />
                <span className="text-sm opacity-80">{t("footer.contact.email")}</span>
              </div>
              <div className="flex items-center space-x-2">
                <Phone className="w-4 h-4" />
                <span className="text-sm opacity-80">{t("footer.contact.phone")}</span>
              </div>
              <div className="flex items-center space-x-2">
                <MapPin className="w-4 h-4" />
                <span className="text-sm opacity-80">{t("footer.contact.address")}</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 mt-8 pt-8 text-center">
          <p className="text-sm opacity-80">
            {t("footer.copyright")}
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
