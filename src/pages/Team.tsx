import { Card, CardContent } from "@/components/ui/card";
import { Users, Target, Award, Briefcase, GraduationCap, Mail } from "lucide-react";

const Team = () => {
  const leadership = [
    {
      name: "Alexandre Sousa",
      position: "Diretor Executivo",
      description: "Líder visionário com ampla experiência no setor marítimo",
      experience: "15+ anos",
      specialization: "Estratégia Corporativa"
    },
    {
      name: "Curina Teixeira Viana dos Santos",
      position: "Diretora de Operações",
      description: "Especialista em gestão operacional e otimização de processos",
      experience: "12+ anos",
      specialization: "Operações Marítimas"
    },
    {
      name: "Wilson Agostinho",
      position: "Diretor Comercial",
      description: "Responsável pelo desenvolvimento de parcerias estratégicas",
      experience: "10+ anos",
      specialization: "Desenvolvimento de Negócios"
    }
  ];

  const departments = [
    {
      icon: Briefcase,
      name: "Operações Marítimas",
      members: 8,
      description: "Gestão de agenciamento de navios, clearance e operações portuárias",
      responsibilities: [
        "Agenciamento de navios",
        "Gestão de clearance",
        "Coordenação portuária",
        "Documentação marítima"
      ]
    },
    {
      icon: Users,
      name: "Freight Forward",
      members: 6,
      description: "Especialistas em logística internacional e consolidação de cargas",
      responsibilities: [
        "Consultoria em transporte",
        "Gestão documental",
        "Consolidação de cargas",
        "Compliance alfandegário"
      ]
    },
    {
      icon: Award,
      name: "Consultoria Marítima",
      members: 4,
      description: "Consultores especializados em regulamentação e compliance",
      responsibilities: [
        "Consultoria regulatória",
        "Análise de compliance",
        "Assessoria técnica",
        "Gestão de licenças"
      ]
    },
    {
      icon: Target,
      name: "Atendimento ao Cliente",
      members: 5,
      description: "Equipe dedicada ao suporte e relacionamento com clientes",
      responsibilities: [
        "Atendimento 24/7",
        "Gestão de relacionamento",
        "Suporte técnico",
        "Coordenação de serviços"
      ]
    }
  ];

  const values = [
    {
      icon: GraduationCap,
      title: "Formação Contínua",
      description: "Investimos constantemente na capacitação da nossa equipe"
    },
    {
      icon: Award,
      title: "Excelência Profissional",
      description: "Compromisso com os mais altos padrões de qualidade"
    },
    {
      icon: Users,
      title: "Trabalho em Equipe",
      description: "Colaboração e sinergia para resultados excepcionais"
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="section-maritime bg-maritime-gray/20">
        <div className="container mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-primary mb-6">
            Nossa Equipe
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Profissionais dedicados, multidisciplinares e eficientes, comprometidos 
            com a excelência no setor marítimo angolano
          </p>
        </div>
      </section>

      {/* Leadership */}
      <section className="section-maritime">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-primary mb-4">
              Direção Executiva
            </h2>
            <p className="text-lg text-muted-foreground">
              Liderança experiente e visionária guiando nossa empresa
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {leadership.map((leader, index) => (
              <Card key={index} className="card-maritime group">
                <CardContent className="p-8 text-center">
                  <div className="w-24 h-24 bg-primary/10 rounded-full mx-auto mb-6 flex items-center justify-center group-hover:bg-primary/20 transition-colors duration-300">
                    <Users className="w-12 h-12 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold text-primary mb-2">
                    {leader.name}
                  </h3>
                  <p className="text-accent font-semibold mb-4">
                    {leader.position}
                  </p>
                  <p className="text-muted-foreground mb-4 leading-relaxed">
                    {leader.description}
                  </p>
                  <div className="grid grid-cols-2 gap-4 text-sm">
                    <div className="text-center">
                      <p className="font-semibold text-primary">Experiência</p>
                      <p className="text-muted-foreground">{leader.experience}</p>
                    </div>
                    <div className="text-center">
                      <p className="font-semibold text-primary">Especialização</p>
                      <p className="text-muted-foreground">{leader.specialization}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Organizational Structure */}
      <section className="section-maritime bg-maritime-gray/20">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-primary mb-4">
              Estrutura Organizacional
            </h2>
            <p className="text-lg text-muted-foreground">
              Departamentos especializados trabalhando em sinergia
            </p>
          </div>
          <div className="grid lg:grid-cols-2 gap-8">
            {departments.map((dept, index) => (
              <Card key={index} className="card-maritime">
                <CardContent className="p-8">
                  <div className="flex items-center space-x-4 mb-6">
                    <div className="w-16 h-16 bg-primary/10 rounded-xl flex items-center justify-center">
                      <dept.icon className="w-8 h-8 text-primary" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-primary">{dept.name}</h3>
                      <p className="text-accent font-semibold">{dept.members} profissionais</p>
                    </div>
                  </div>
                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    {dept.description}
                  </p>
                  <div>
                    <h4 className="font-semibold text-primary mb-3">Responsabilidades:</h4>
                    <ul className="space-y-2">
                      {dept.responsibilities.map((resp, idx) => (
                        <li key={idx} className="flex items-center space-x-2">
                          <div className="w-2 h-2 bg-accent rounded-full"></div>
                          <span className="text-muted-foreground text-sm">{resp}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Team Stats */}
      <section className="section-maritime">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-primary mb-4">
              Nossa Força de Trabalho
            </h2>
            <p className="text-lg text-muted-foreground">
              Números que refletem nossa capacidade e dedicação
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="card-maritime text-center">
              <CardContent className="p-6">
                <div className="text-3xl font-bold text-primary mb-2">23+</div>
                <p className="text-muted-foreground">Profissionais</p>
              </CardContent>
            </Card>
            <Card className="card-maritime text-center">
              <CardContent className="p-6">
                <div className="text-3xl font-bold text-accent mb-2">4</div>
                <p className="text-muted-foreground">Departamentos</p>
              </CardContent>
            </Card>
            <Card className="card-maritime text-center">
              <CardContent className="p-6">
                <div className="text-3xl font-bold text-maritime-teal mb-2">12+</div>
                <p className="text-muted-foreground">Anos de Experiência Média</p>
              </CardContent>
            </Card>
            <Card className="card-maritime text-center">
              <CardContent className="p-6">
                <div className="text-3xl font-bold text-maritime-gold mb-2">24/7</div>
                <p className="text-muted-foreground">Disponibilidade</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Team Values */}
      <section className="section-maritime bg-maritime-gray/20">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-primary mb-4">
              Valores da Equipe
            </h2>
            <p className="text-lg text-muted-foreground">
              Os princípios que guiam nossa equipe multidisciplinar
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <Card key={index} className="card-maritime group">
                <CardContent className="p-8 text-center">
                  <value.icon className="w-16 h-16 text-primary mx-auto mb-6 group-hover:text-accent transition-colors duration-300" />
                  <h3 className="text-xl font-semibold text-primary mb-4">
                    {value.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {value.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Join Our Team */}
      <section className="section-maritime">
        <div className="container mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-primary mb-6">
                Junte-se à Nossa Equipe
              </h2>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                Estamos sempre em busca de profissionais talentosos e dedicados 
                para fortalecer nossa equipe multidisciplinar. Se você tem paixão 
                pelo setor marítimo e busca crescimento profissional, queremos 
                conhecê-lo.
              </p>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                  <span className="text-muted-foreground">Ambiente de trabalho colaborativo</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                  <span className="text-muted-foreground">Oportunidades de crescimento</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                  <span className="text-muted-foreground">Formação contínua</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                  <span className="text-muted-foreground">Projetos desafiadores</span>
                </div>
              </div>
            </div>
            <Card className="card-maritime">
              <CardContent className="p-8 text-center">
                <Mail className="w-16 h-16 text-primary mx-auto mb-6" />
                <h3 className="text-2xl font-bold text-primary mb-4">
                  Trabalhe Conosco
                </h3>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  Envie seu currículo e faça parte de uma equipe que está 
                  transformando o setor marítimo em Angola.
                </p>
                <div className="space-y-4">
                  <div className="text-left">
                    <p className="font-semibold text-primary mb-2">Áreas de Interesse:</p>
                    <div className="flex flex-wrap gap-2">
                      {[
                        "Operações Marítimas",
                        "Freight Forward",
                        "Consultoria",
                        "Atendimento"
                      ].map((area, idx) => (
                        <span 
                          key={idx}
                          className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm"
                        >
                          {area}
                        </span>
                      ))}
                    </div>
                  </div>
                  <button className="btn-maritime w-full">
                    Enviar Currículo
                  </button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-maritime bg-primary text-primary-foreground">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">
            Conheça Nossa Equipe Pessoalmente
          </h2>
          <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            Agende uma reunião e descubra como nossa equipe multidisciplinar 
            pode contribuir para o sucesso das suas operações marítimas.
          </p>
          <button className="btn-maritime bg-primary-foreground text-primary px-8 py-4 rounded-lg font-semibold hover:bg-primary-foreground/90 transition-colors">
            Agendar Reunião
          </button>
        </div>
      </section>
    </div>
  );
};

export default Team;