import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useTranslation } from "react-i18next";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const { t, i18n } = useTranslation();

  const changeLanguage = (lng: "pt" | "en") => {
    i18n.changeLanguage(lng);
  };

  const navigation = [
    { name: t("header.home"), href: "/" },
    { name: t("header.about"), href: "/sobre" },
    { name: t("header.services"), href: "/servicos" },
    { name: t("header.ativities"), href: "/atividades" },
    { name: t("header.clients"), href: "/clientes" },
    { name: t("header.equipe"), href: "/equipe" },
    { name: t("header.contact"), href: "/contato" },

  ];

  const isActive = (href: string) => location.pathname === href;

  return (
    <header className="bg-background/95 backdrop-blur-sm border-b border-border sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 md:py-2">
        <div className="flex justify-between items-center h-14">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <div className="h-10 w-16 md:w-18 md:h-20 rounded-lg flex items-center justify-center">
              <img src="./Noelza.png" alt="Noelza Service" />
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8 items-center">
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className={`px-3 py-2 text-sm font-medium transition-colors duration-200 ${
                  isActive(item.href)
                    ? "text-primary border-b-2 border-primary"
                    : "text-foreground hover:text-primary"
                }`}
              >
                {item.name}
              </Link>
            ))}

            {/* Language Switcher */}
            <div className="flex items-center space-x-2 ml-4">
              <Button
                variant="ghost"
                size="sm"
                onClick={() => changeLanguage("pt")}
                className={`${
                  i18n.language === "pt"
                    ? "border border-primary text-primary font-semibold"
                    : "text-foreground hover:text-white"
                }`}
              >
                🇵🇹 PT
              </Button>
              <Button
                variant="ghost"
                size="sm"
                onClick={() => changeLanguage("en")}
                className={`${
                  i18n.language === "en"
                    ? "border border-primary text-primary font-semibold"
                    : "text-foreground hover:text-white"
                }`}
              >
                🇬🇧 EN
              </Button>
            </div>
          </nav>

          {/* Contact Button */}
          <div className="hidden md:block">
            <Button asChild className="btn-maritime">
              <Link to="/contato">{t("header.contactButton")}</Link>
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsOpen(!isOpen)}
              className="p-2"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-background border-t border-border">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  className={`block px-3 py-2 text-base font-medium transition-colors duration-200 ${
                    isActive(item.href)
                      ? "text-primary bg-primary/10"
                      : "text-foreground hover:text-primary hover:bg-primary/5"
                  }`}
                  onClick={() => setIsOpen(false)}
                >
                  {item.name}
                </Link>
              ))}

              {/* Language Switcher for Mobile */}
              <div className="flex justify-center space-x-4 pt-4">
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => changeLanguage("pt")}
                  className={`w-20 ${
                    i18n.language === "pt"
                      ? "border-primary text-primary font-semibold"
                      : "text-foreground"
                  }`}
                >
                  🇵🇹 PT
                </Button>
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => changeLanguage("en")}
                  className={`w-20 ${
                    i18n.language === "en"
                      ? "border-primary text-primary font-semibold"
                      : "text-foreground"
                  }`}
                >
                  🇬🇧 EN
                </Button>
              </div>

              <div className="pt-4">
                <Button asChild className="btn-maritime w-full">
                  <Link to="/contato" onClick={() => setIsOpen(false)}>
                    {t("header.contactButton")}
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
