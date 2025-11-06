import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Ship, Anchor, Container, Users, ArrowRight, Globe } from "lucide-react";
import heroImage from "@/assets/maritime-hero.jpg";
import { useTranslation } from "react-i18next";

const Index = () => {
  const { t } = useTranslation();

  const features = [
    {
      icon: Ship,
      title: t("home.features.agency.title"),
      description: t("home.features.agency.text"),
    },
    {
      icon: Container,
      title: t("home.features.forward.title"),
      description: t("home.features.forward.text"),
    },
    {
      icon: Anchor,
      title: t("home.features.licensing.title"),
      description: t("home.features.licensing.text"),
    },
  ];

  const stats = [
    { number: "+233", label: t("home.stats.shipsServed") },
    { number: "+1,630", label: t("home.stats.inClearance") },
    { number: "27,979", label: t("home.stats.crewAssisted") },
    { number: "6+", label: t("home.stats.yearsExperience") },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section
        className="relative h-screen flex items-center justify-center text-center hero-maritime wave-effect"
        style={{
          backgroundImage: `linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.3)), url(${heroImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="container mx-auto px-4 z-10">
          <div className="max-w-4xl mx-auto text-white">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-fade-in">
              {t("home.hero.title")}
              {/* <span className="block text-maritime-cyan">{t("home.hero.subtitle")}</span> */}
            </h1>
            <p className="text-xl md:text-2xl mb-8 opacity-90 animate-fade-in">
              {t("home.hero.subtitle")}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in">
              <Button asChild size="lg" className="btn-maritime text-lg px-8 py-4">
                <Link to="/servicos">
                  {t("home.hero.ctaServices")}
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="btn-outline-maritime text-lg px-8 py-4 bg-white/10 border-white text-white hover:bg-white hover:text-primary">
                <Link to="/contato">{t("home.hero.ctaContact")}</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="section-maritime bg-maritime-gray/20">
        <div className="container mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-primary mb-2">
                  {stat.number}
                </div>
                <div className="text-sm md:text-base text-muted-foreground">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Preview */}
      <section className="section-maritime">
        <div className="container mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">
                {t("home.about.title")}
              </h2>
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                {t("home.about.description")}
              </p>
              <div className="space-y-4 mb-8">
                <div className="flex items-start space-x-3">
                  <Globe className="w-6 h-6 text-accent mt-1" />
                  <div>
                    <h4 className="font-semibold text-primary">{t("home.about.mission.title")}</h4>
                    <p className="text-muted-foreground">{t("home.about.mission.text")}</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <Users className="w-6 h-6 text-accent mt-1" />
                  <div>
                    <h4 className="font-semibold text-primary">{t("home.about.vision.title")}</h4>
                    <p className="text-muted-foreground">{t("home.about.vision.text")}</p>
                  </div>
                </div>
              </div>
              <Button asChild className="btn-maritime">
                <Link to="/sobre">
                  {t("home.about.more")}
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Link>
              </Button>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <Card className="card-maritime">
                <CardContent className="p-6 text-center">
                  <Ship className="w-12 h-12 text-primary mx-auto mb-4" />
                  <h4 className="font-semibold text-primary mb-2">{t("home.features.agency.title")}</h4>
                  <p className="text-sm text-muted-foreground">{t("home.stats.yearsExperience")}</p>
                </CardContent>
              </Card>
              <Card className="card-maritime">
                <CardContent className="p-6 text-center">
                  <Container className="w-12 h-12 text-accent mx-auto mb-4" />
                  <h4 className="font-semibold text-primary mb-2">{t("home.features.forward.title")}</h4>
                  <p className="text-sm text-muted-foreground">{t("home.features.forward.text")}</p>
                </CardContent>
              </Card>
              <Card className="card-maritime">
                <CardContent className="p-6 text-center">
                  <Anchor className="w-12 h-12 text-primary mx-auto mb-4" />
                  <h4 className="font-semibold text-primary mb-2">{t("home.features.licensing.title")}</h4>
                  <p className="text-sm text-muted-foreground">{t("home.features.licensing.text")}</p>
                </CardContent>
              </Card>
              <Card className="card-maritime">
                <CardContent className="p-6 text-center">
                  <Users className="w-12 h-12 text-accent mx-auto mb-4" />
                  <h4 className="font-semibold text-primary mb-2">{t("home.cta.title")}</h4>
                  <p className="text-sm text-muted-foreground">{t("home.cta.text")}</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="section-maritime bg-maritime-gray/20">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
              {t("home.features.viewAll")}
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              {t("home.features.forward.text")}
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="card-maritime group">
                <CardContent className="p-8 text-center">
                  <feature.icon className="w-16 h-16 text-primary mx-auto mb-6 group-hover:text-accent transition-colors duration-300" />
                  <h3 className="text-xl font-semibold text-primary mb-4">
                    {feature.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {feature.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
          <div className="text-center mt-12">
            <Button asChild className="btn-maritime">
              <Link to="/servicos">
                {t("home.features.viewAll")}
                <ArrowRight className="ml-2 w-4 h-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-maritime bg-primary text-primary-foreground">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            {t("home.cta.title")}
          </h2>
          <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            {t("home.cta.text")}
          </p>
          <Button asChild size="lg" variant="secondary" className="text-lg px-8 py-4">
            <Link to="/contato">
              {t("home.cta.button")}
              <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Index;
