import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Ship, Anchor, Container, Users, ArrowRight, Globe } from "lucide-react";
import heroImage from "@/assets/maritime-hero.jpg";

const Index = () => {
  const features = [
    {
      icon: Ship,
      title: "Agenciamento de Navios",
      description: "Cumprimento de todos os trâmites legais desde a chegada até a liberação completa."
    },
    {
      icon: Container,
      title: "Freight Forward",
      description: "Consultoria completa em transporte e documentação internacional."
    },
    {
      icon: Anchor,
      title: "Licenciamento",
      description: "Gestão especializada de atracagem, embarque e restrições legais."
    }
  ];

  const stats = [
    { number: "1,269", label: "Navios Atendidos (2024)" },
    { number: "216", label: "Navios em Clearency" },
    { number: "20,974", label: "Tripulantes Assistidos" },
    { number: "6+", label: "Anos de Experiência" }
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
              Soluções Marítimas
              <span className="block text-maritime-cyan">Profissionais</span>
            </h1>
            <p className="text-xl md:text-2xl mb-8 opacity-90 animate-fade-in">
              Especialistas em Agenciamento de Navegação e Freight Forward desde 2018
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in">
              <Button asChild size="lg" className="btn-maritime text-lg px-8 py-4">
                <Link to="/servicos">
                  Conheça Nossos Serviços
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="btn-outline-maritime text-lg px-8 py-4 bg-white/10 border-white text-white hover:bg-white hover:text-primary">
                <Link to="/contato">Fale Conosco</Link>
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
                Sobre a Noelza Service
              </h2>
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                Fundada em 14 de fevereiro de 2018, a Noelza Service é uma empresa especializada 
                em soluções marítimas, oferecendo serviços de agenciamento de navegação e freight forward 
                com excelência e profissionalismo.
              </p>
              <div className="space-y-4 mb-8">
                <div className="flex items-start space-x-3">
                  <Globe className="w-6 h-6 text-accent mt-1" />
                  <div>
                    <h4 className="font-semibold text-primary">Nossa Missão</h4>
                    <p className="text-muted-foreground">
                      Solucionar todos os trâmites legais exigidos entre os intervenientes do setor, 
                      dando comodidade e eficiência aos clientes.
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <Users className="w-6 h-6 text-accent mt-1" />
                  <div>
                    <h4 className="font-semibold text-primary">Nossa Visão</h4>
                    <p className="text-muted-foreground">
                      Estabelecer parcerias fortes e perseverantes no setor de shipping.
                    </p>
                  </div>
                </div>
              </div>
              <Button asChild className="btn-maritime">
                <Link to="/sobre">
                  Saiba Mais Sobre Nós
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Link>
              </Button>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <Card className="card-maritime">
                <CardContent className="p-6 text-center">
                  <Ship className="w-12 h-12 text-primary mx-auto mb-4" />
                  <h4 className="font-semibold text-primary mb-2">Experiência</h4>
                  <p className="text-sm text-muted-foreground">6+ anos no mercado marítimo</p>
                </CardContent>
              </Card>
              <Card className="card-maritime">
                <CardContent className="p-6 text-center">
                  <Container className="w-12 h-12 text-accent mx-auto mb-4" />
                  <h4 className="font-semibold text-primary mb-2">Eficiência</h4>
                  <p className="text-sm text-muted-foreground">Soluções rápidas e confiáveis</p>
                </CardContent>
              </Card>
              <Card className="card-maritime">
                <CardContent className="p-6 text-center">
                  <Anchor className="w-12 h-12 text-primary mx-auto mb-4" />
                  <h4 className="font-semibold text-primary mb-2">Especialização</h4>
                  <p className="text-sm text-muted-foreground">Foco no setor marítimo</p>
                </CardContent>
              </Card>
              <Card className="card-maritime">
                <CardContent className="p-6 text-center">
                  <Users className="w-12 h-12 text-accent mx-auto mb-4" />
                  <h4 className="font-semibold text-primary mb-2">Equipe</h4>
                  <p className="text-sm text-muted-foreground">Profissionais dedicados</p>
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
              Nossos Serviços
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Oferecemos soluções completas para o setor marítimo, com foco na excelência 
              e eficiência operacional.
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
                Ver Todos os Serviços
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
            Pronto para Começar?
          </h2>
          <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            Entre em contacto conosco e descubra como podemos facilitar 
            as suas operações marítimas com soluções profissionais e eficientes.
          </p>
          <Button asChild size="lg" variant="secondary" className="text-lg px-8 py-4">
            <Link to="/contato">
              Fale Conosco Agora
              <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Index;