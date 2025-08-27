import { Card, CardContent } from "@/components/ui/card";
import { Ship, Container, Anchor, FileText, Users, CheckCircle, Globe, Shield } from "lucide-react";

const Services = () => {
  const mainServices = [
    {
      icon: Ship,
      title: "Agenciamento de Navios",
      description: "Serviços completos de agenciamento marítimo",
      features: [
        "Cumprimento de trâmites legais desde chegada até liberação da carga e tripulação",
        "Comunicação entre embarcações e portos",
        "Assessoria de mercados portuários",
        "Coordenação com autoridades marítimas",
        "Gestão de documentação naval"
      ]
    },
    {
      icon: Container,
      title: "Freight Forward",
      description: "Soluções completas em logística internacional",
      features: [
        "Auxílio na escolha de transporte mais adequado",
        "Consultoria sobre normas tributárias e alfandegárias",
        "Emissão e organização de documentação",
        "Consolidação e liberação de cargas",
        "Rastreamento de cargas em tempo real"
      ]
    },
    {
      icon: Anchor,
      title: "Licenciamento de Navios",
      description: "Gestão especializada em licenciamento marítimo",
      features: [
        "Gestão de atracagem e embarque",
        "Análise de restrições legais",
        "Coordenação com autoridades portuárias",
        "Documentação para licenciamento",
        "Acompanhamento de processos"
      ]
    }
  ];

  const additionalServices = [
    {
      icon: FileText,
      title: "Consultoria Marítima",
      description: "Consultoria especializada em regulamentação marítima e portuária"
    },
    {
      icon: Users,
      title: "Gestão de Tripulação",
      description: "Assistência completa para tripulantes e gestão de recursos humanos navais"
    },
    {
      icon: Shield,
      title: "Compliance Marítimo",
      description: "Garantia de conformidade com regulamentações nacionais e internacionais"
    },
    {
      icon: Globe,
      title: "Operações Internacionais",
      description: "Coordenação de operações marítimas em águas internacionais"
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="section-maritime bg-maritime-gray/20">
        <div className="container mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-primary mb-6">
            Nossos Serviços
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Oferecemos soluções completas e profissionais para o setor marítimo, 
            com foco na excelência operacional e satisfação do cliente
          </p>
        </div>
      </section>

      {/* Main Services */}
      <section className="section-maritime">
        <div className="container mx-auto">
          <div className="space-y-16">
            {mainServices.map((service, index) => (
              <div key={index} className={`grid lg:grid-cols-2 gap-12 items-center ${
                index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''
              }`}>
                <div className={index % 2 === 1 ? 'lg:col-start-2' : ''}>
                  <div className="flex items-center space-x-4 mb-6">
                    <div className="w-16 h-16 bg-primary/10 rounded-xl flex items-center justify-center">
                      <service.icon className="w-8 h-8 text-primary" />
                    </div>
                    <div>
                      <h2 className="text-3xl font-bold text-primary">{service.title}</h2>
                      <p className="text-muted-foreground">{service.description}</p>
                    </div>
                  </div>
                  <div className="space-y-4">
                    {service.features.map((feature, idx) => (
                      <div key={idx} className="flex items-start space-x-3">
                        <CheckCircle className="w-5 h-5 text-accent mt-1 flex-shrink-0" />
                        <p className="text-muted-foreground leading-relaxed">{feature}</p>
                      </div>
                    ))}
                  </div>
                </div>
                <div className={index % 2 === 1 ? 'lg:col-start-1' : ''}>
                  <Card className="card-maritime">
                    <CardContent className="p-8">
                      <div className="text-center">
                        <service.icon className="w-24 h-24 text-primary mx-auto mb-6" />
                        <h3 className="text-xl font-semibold text-primary mb-4">
                          Serviço Especializado
                        </h3>
                        <p className="text-muted-foreground">
                          Contamos com uma equipe altamente qualificada e experiente 
                          para atender todas as suas necessidades com máxima eficiência.
                        </p>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Services */}
      <section className="section-maritime bg-maritime-gray/20">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-primary mb-4">
              Serviços Complementares
            </h2>
            <p className="text-lg text-muted-foreground">
              Serviços adicionais para completar suas necessidades marítimas
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {additionalServices.map((service, index) => (
              <Card key={index} className="card-maritime group">
                <CardContent className="p-6 text-center">
                  <service.icon className="w-12 h-12 text-primary mx-auto mb-4 group-hover:text-accent transition-colors duration-300" />
                  <h3 className="text-lg font-semibold text-primary mb-3">
                    {service.title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {service.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="section-maritime">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-primary mb-4">
              Nosso Processo
            </h2>
            <p className="text-lg text-muted-foreground">
              Como trabalhamos para garantir a melhor experiência
            </p>
          </div>
          <div className="grid md:grid-cols-4 gap-8">
            {[
              { step: "01", title: "Análise", desc: "Avaliação detalhada das necessidades" },
              { step: "02", title: "Planejamento", desc: "Estratégia personalizada para cada caso" },
              { step: "03", title: "Execução", desc: "Implementação eficiente dos serviços" },
              { step: "04", title: "Acompanhamento", desc: "Suporte contínuo e monitoramento" }
            ].map((item, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-primary-foreground font-bold text-lg">{item.step}</span>
                </div>
                <h3 className="text-xl font-semibold text-primary mb-3">{item.title}</h3>
                <p className="text-muted-foreground">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-maritime bg-primary text-primary-foreground">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">
            Precisa dos Nossos Serviços?
          </h2>
          <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            Entre em contato conosco para uma consulta personalizada e descubra 
            como podemos otimizar suas operações marítimas.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="btn-maritime bg-primary-foreground text-primary px-8 py-4 rounded-lg font-semibold hover:bg-primary-foreground/90 transition-colors">
              Solicitar Orçamento
            </button>
            <button className="btn-outline-maritime border-2 border-primary-foreground text-primary-foreground px-8 py-4 rounded-lg font-semibold hover:bg-primary-foreground hover:text-primary transition-all">
              Fale Conosco
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;