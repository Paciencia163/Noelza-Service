import { Card, CardContent } from "@/components/ui/card";
import {
  Ship,
  Container,
  Anchor,
  FileText,
  Users,
  CheckCircle,
  Globe,
  Shield,
} from "lucide-react";
import { useTranslation } from "react-i18next";
import { Link, useNavigate } from "react-router-dom";

const iconMap: Record<string, React.ElementType> = {
  Ship,
  Container,
  Anchor,
  FileText,
  Users,
  CheckCircle,
  Globe,
  Shield,
};

const Services = () => {
  const { t } = useTranslation();

  const navigate = useNavigate()

   const handleClick = () => {
    navigate("/contato#form-id");
  };

  const mainServices = t("services.mainServices", { returnObjects: true }) as {
    icon: string;
    title: string;
    description: string;
    features: string[];
  }[];

  const additionalServices = t("services.additionalServices", { returnObjects: true }) as {
    icon: string;
    title: string;
    description: string;
  }[];

  const process = t("services.process.steps", { returnObjects: true }) as {
    step: string;
    title: string;
    desc: string;
  }[];

  const cta = t("services.cta", { returnObjects: true }) as {
    title: string;
    subtitle: string;
    buttons: { label: string }[];
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="section-maritime bg-maritime-gray/20">
        <div className="container mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-primary mb-6">
            {t("services.hero.title")}
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            {t("services.hero.subtitle")}
          </p>
        </div>
      </section>

      {/* Main Services */}
      <section className="section-maritime">
        <div className="container mx-auto">
          <div className="space-y-16">
            {mainServices.map((service, index) => {
              const Icon = iconMap[service.icon];
              return (
                <div
                  key={index}
                  className={`grid lg:grid-cols-2 gap-12 items-center ${
                    index % 2 === 1 ? "lg:grid-flow-col-dense" : ""
                  }`}
                >
                  <div className={index % 2 === 1 ? "lg:col-start-2" : ""}>
                    <div className="flex items-center space-x-4 mb-6">
                      <div className="w-16 h-16 bg-primary/10 rounded-xl flex items-center justify-center">
                        <Icon className="w-8 h-8 text-primary" />
                      </div>
                      <div>
                        <h2 className="text-3xl font-bold text-primary">
                          {service.title}
                        </h2>
                        <p className="text-muted-foreground">
                          {service.description}
                        </p>
                      </div>
                    </div>
                    <div className="space-y-4">
                      {service.features.map((feature, idx) => (
                        <div key={idx} className="flex items-start space-x-3">
                          <CheckCircle className="w-5 h-5 text-accent mt-1 flex-shrink-0" />
                          <p className="text-muted-foreground leading-relaxed">
                            {feature}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>
                  <div className={index % 2 === 1 ? "lg:col-start-1" : ""}>
                    <Card className="card-maritime">
                      <CardContent className="p-8">
                        <div className="text-center">
                          <Icon className="w-24 h-24 text-primary mx-auto mb-6" />
                          <h3 className="text-xl font-semibold text-primary mb-4">
                            {t("services.mainServicesCardTitle")}
                          </h3>
                          <p className="text-muted-foreground">
                            {t("services.mainServicesCardDescription")}
                          </p>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Additional Services */}
      <section className="section-maritime bg-maritime-gray/20">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-primary mb-4">
              {t("services.additionalServicesTitle")}
            </h2>
            <p className="text-lg text-muted-foreground">
              {t("services.additionalServicesDescription")}
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {additionalServices.map((service, index) => {
              const Icon = iconMap[service.icon];
              return (
                <Card key={index} className="card-maritime group">
                  <CardContent className="p-6 text-center">
                    <Icon className="w-12 h-12 text-primary mx-auto mb-4 group-hover:text-accent transition-colors duration-300" />
                    <h3 className="text-lg font-semibold text-primary mb-3">
                      {service.title}
                    </h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {service.description}
                    </p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="section-maritime">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-primary mb-4">
              {t("services.process.title")}
            </h2>
            <p className="text-lg text-muted-foreground">
              {t("services.process.subtitle")}
            </p>
          </div>
          <div className="grid md:grid-cols-4 gap-8">
            {process.map((item, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-primary-foreground font-bold text-lg">
                    {item.step}
                  </span>
                </div>
                <h3 className="text-xl font-semibold text-primary mb-3">
                  {item.title}
                </h3>
                <p className="text-muted-foreground">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-maritime bg-primary text-primary-foreground">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">{cta.title}</h2>
          <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            {cta.subtitle}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            {cta.buttons.map((btn, index) => (
              <button
              onClick={handleClick}
                key={index}
                className={`${
                  index === 0
                    ? "btn-maritime bg-primary-foreground text-primary"
                    : "btn-outline-maritime border-2 border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary transition-all"
                } px-8 py-4 rounded-lg font-semibold`}
              >
                 {btn.label}
                 {/* <Link to={btn.href}>{btn.label}</Link> */}
                
              </button>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;
