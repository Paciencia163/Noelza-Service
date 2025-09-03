import { Card, CardContent } from "@/components/ui/card";
import { Building2, Handshake, Star, Globe, Users, Award } from "lucide-react";

const Clients = () => {
  const mainClients = [
    {
      name: "INN Offshore",
      description: "Parceiro estratégico em operações offshore e marítimas",
      sector: "Offshore & Maritime",
      partnership: "2022-presente",
      services: ["Agenciamento de Navios", "Freight Forward", "Consultoria Marítima"]
    },
    {
      name: "Chouest INN Angola",
      description: "Líder em soluções marítimas integradas em Angola",
      sector: "Maritime Solutions",
      partnership: "2023-presente",
      services: ["Licenciamento", "Gestão de Tripulação", "Operações Portuárias"]
    },
    {
      name: "SONILS",
      description: "Empresa nacional de serviços integrados de logística",
      sector: "Integrated Logistics",
      partnership: "2023-presente",
      services: ["Freight Forward", "Consultoria", "Compliance Marítimo"]
    }
  ];

  const clientTypes = [
    {
      icon: Building2,
      title: "Empresas Offshore",
      count: "12+",
      description: "Companhias especializadas em operações marítimas offshore"
    },
    {
      icon: Globe,
      title: "Operadores Internacionais",
      count: "8+",
      description: "Empresas multinacionais com operações em Angola"
    },
    {
      icon: Users,
      title: "Armadores Locais",
      count: "15+",
      description: "Proprietários e operadores de embarcações nacionais"
    },
    {
      icon: Award,
      title: "Parcerias Estratégicas",
      count: "5+",
      description: "Parcerias de longo prazo com empresas do setor"
    }
  ];

  const testimonials = [
    {
      quote: "A Noelza Service tem sido fundamental para o sucesso das nossas operações marítimas em Angola. Profissionalismo exemplar.",
      author: "Diretor de Operações",
      company: "INN Offshore"
    },
    {
      quote: "Eficiência, confiabilidade e conhecimento técnico excepcional. Recomendamos seus serviços sem hesitação.",
      author: "Gerente Marítimo",
      company: "Chouest INN Angola"
    },
    {
      quote: "Parceria sólida que nos permite focar no nosso core business enquanto a Noelza cuida de toda a parte marítima.",
      author: "CEO",
      company: "SONILS"
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="section-maritime bg-maritime-gray/20">
        <div className="container mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-primary mb-6">
            Clientes e Parceiros
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Construímos relacionamentos sólidos com empresas líderes do setor marítimo, 
            baseados na confiança, excelência e resultados consistentes
          </p>
        </div>
      </section>

      {/* Main Clients */}
      <section className="section-maritime">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-primary mb-4">
              Principais Clientes
            </h2>
            <p className="text-lg text-muted-foreground">
              Empresas que confiam em nossa expertise marítima
            </p>
          </div>
          <div className="space-y-8">
            {mainClients.map((client, index) => (
              <Card key={index} className="card-maritime">
                <CardContent className="p-8">
                  <div className="grid md:grid-cols-3 gap-8 items-center">
                    <div className="text-center md:text-left">
                      <div className="w-20 h-20 bg-primary/10 rounded-xl flex items-center justify-center mx-auto md:mx-0 mb-4">
                        <Building2 className="w-10 h-10 text-primary" />
                      </div>
                      <h3 className="text-2xl font-bold text-primary mb-2">
                        {client.name}
                      </h3>
                      <p className="text-muted-foreground mb-2">{client.sector}</p>
                      <p className="text-sm text-accent font-medium">
                        Parceria: {client.partnership}
                      </p>
                    </div>
                    <div className="md:col-span-2">
                      <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                        {client.description}
                      </p>
                      <div>
                        <h4 className="font-semibold text-primary mb-3">Serviços Prestados:</h4>
                        <div className="flex flex-wrap gap-2">
                          {client.services.map((service, idx) => (
                            <span 
                              key={idx}
                              className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium"
                            >
                              {service}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Client Types */}
      <section className="section-maritime bg-maritime-gray/20">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-primary mb-4">
              Tipos de Clientes
            </h2>
            <p className="text-lg text-muted-foreground">
              Diversidade de empresas que atendemos no sector marítimo
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {clientTypes.map((type, index) => (
              <Card key={index} className="card-maritime group">
                <CardContent className="p-6 text-center">
                  <type.icon className="w-16 h-16 text-primary mx-auto mb-4 group-hover:text-accent transition-colors duration-300" />
                  <div className="text-3xl font-bold text-primary mb-2">
                    {type.count}
                  </div>
                  <h3 className="text-lg font-semibold text-primary mb-3">
                    {type.title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {type.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="section-maritime">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-primary mb-4">
              O Que Dizem Nossos Clientes
            </h2>
            <p className="text-lg text-muted-foreground">
              Depoimentos que refletem nossa dedicação e qualidade
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="card-maritime">
                <CardContent className="p-8">
                  <div className="text-center mb-6">
                    <Star className="w-8 h-8 text-maritime-gold mx-auto mb-4" />
                    <div className="flex justify-center space-x-1 mb-4">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-maritime-gold text-maritime-gold" />
                      ))}
                    </div>
                  </div>
                  <blockquote className="text-muted-foreground leading-relaxed mb-6 italic">
                    "{testimonial.quote}"
                  </blockquote>
                  <div className="text-center">
                    <p className="font-semibold text-primary">{testimonial.author}</p>
                    <p className="text-sm text-accent">{testimonial.company}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Partnership Benefits */}
      <section className="section-maritime bg-maritime-gray/20">
        <div className="container mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-primary mb-6">
                Por Que Nos Escolhem?
              </h2>
              <div className="space-y-6">
                {[
                  {
                    icon: Handshake,
                    title: "Relacionamento de Confiança",
                    description: "Construímos parcerias duradouras baseadas na transparência e resultados"
                  },
                  {
                    icon: Award,
                    title: "Excelência Comprovada",
                    description: "Histórico consistente de sucesso e satisfação total dos clientes"
                  },
                  {
                    icon: Globe,
                    title: "Conhecimento Local",
                    description: "Expertise profunda do mercado angolano e regulamentações locais"
                  },
                  {
                    icon: Users,
                    title: "Equipe Especializada",
                    description: "Profissionais altamente qualificados e dedicados ao seu sucesso"
                  }
                ].map((benefit, index) => (
                  <div key={index} className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <benefit.icon className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-primary mb-2">
                        {benefit.title}
                      </h3>
                      <p className="text-muted-foreground leading-relaxed">
                        {benefit.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="text-center">
              <Card className="card-maritime">
                <CardContent className="p-8">
                  <Building2 className="w-24 h-24 text-primary mx-auto mb-6" />
                  <h3 className="text-2xl font-bold text-primary mb-4">
                    Seja Nosso Parceiro
                  </h3>
                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    Junte-se às empresas líderes que já confiam na Noelza Service 
                    para suas operações marítimas em Angola.
                  </p>
                  <div className="grid grid-cols-2 gap-4 mb-6">
                    <div className="text-center">
                      <div className="text-2xl font-bold text-primary">40+</div>
                      <p className="text-sm text-muted-foreground">Clientes Ativos</p>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-accent">100%</div>
                      <p className="text-sm text-muted-foreground">Satisfação</p>
                    </div>
                  </div>
                  <button className="btn-maritime w-full">
                    Torne-se Cliente
                  </button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-maritime bg-primary text-primary-foreground">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">
            Pronto para Uma Nova Parceria?
          </h2>
          <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            Descubra como a Noelza Service pode otimizar suas operações marítimas 
            e se tornar seu parceiro estratégico de confiança.
          </p>
          <button className="btn-maritime bg-primary-foreground text-primary px-8 py-4 rounded-lg font-semibold hover:bg-primary-foreground/90 transition-colors">
            Iniciar Parceria
          </button>
        </div>
      </section>
    </div>
  );
};

export default Clients;
