import { Card, CardContent } from "@/components/ui/card";
import { Calendar, Target, Eye, Users, CheckCircle } from "lucide-react";

const About = () => {
  const timeline = [
    {
      date: "14/02/2018",
      title: "Constituição",
      description: "Fundação oficial da Noelza Service"
    },
    {
      date: "2019-2020",
      title: "Paralisação",
      description: "Período de reorganização estratégica"
    },
    {
      date: "2021",
      title: "Reativação",
      description: "Retomada das atividades com nova estrutura"
    },
    {
      date: "2022",
      title: "Acordo Comercial",
      description: "Estabelecimento de parcerias estratégicas"
    },
    {
      date: "2023-2024",
      title: "Início de Atividades",
      description: "Operação plena com resultados excepcionais"
    }
  ];

  const values = [
    {
      icon: Target,
      title: "Excelência",
      description: "Compromisso com a qualidade em todos os serviços prestados"
    },
    {
      icon: Users,
      title: "Profissionalismo",
      description: "Equipe altamente qualificada e dedicada"
    },
    {
      icon: CheckCircle,
      title: "Confiabilidade",
      description: "Soluções seguras e eficientes para nossos clientes"
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="section-maritime bg-maritime-gray/20">
        <div className="container mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-primary mb-6">
            Sobre a Noelza Service
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Uma empresa especializada em soluções marítimas, oferecendo serviços de 
            agenciamento de navegação e freight forward com excelência desde 2018
          </p>
        </div>
      </section>

      {/* Company Info */}
      <section className="section-maritime">
        <div className="container mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-primary mb-6">
                Nossa História
              </h2>
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                Fundada em 14 de fevereiro de 2018, a Noelza Service nasceu com o objetivo 
                de oferecer soluções profissionais e eficientes para o setor marítimo angolano. 
                Nossa jornada foi marcada por momentos de crescimento, reorganização e consolidação 
                no mercado.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Após um período de reorganização estratégica, retomamos nossas atividades com 
                uma estrutura renovada e parcerias sólidas, estabelecendo-nos como referência 
                em agenciamento de navegação marítima e freight forward.
              </p>
            </div>
            <div className="grid gap-6">
              <Card className="card-maritime">
                <CardContent className="p-6">
                  <div className="flex items-center space-x-4">
                    <Target className="w-12 h-12 text-primary" />
                    <div>
                      <h3 className="text-xl font-semibold text-primary mb-2">Nossa Missão</h3>
                      <p className="text-muted-foreground">
                        Solucionar todos os trâmites legais exigidos entre os intervenientes 
                        do setor, dando comodidade e eficiência aos clientes.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
              <Card className="card-maritime">
                <CardContent className="p-6">
                  <div className="flex items-center space-x-4">
                    <Eye className="w-12 h-12 text-accent" />
                    <div>
                      <h3 className="text-xl font-semibold text-primary mb-2">Nossa Visão</h3>
                      <p className="text-muted-foreground">
                        Estabelecer parcerias fortes e perseverantes no setor de shipping, 
                        sendo reconhecidos pela nossa excelência e profissionalismo.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="section-maritime bg-maritime-gray/20">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-primary mb-4">
              Nossa Trajetória
            </h2>
            <p className="text-lg text-muted-foreground">
              Momentos importantes na história da Noelza Service
            </p>
          </div>
          <div className="max-w-4xl mx-auto">
            <div className="relative">
              {/* Timeline line */}
              <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-primary/30 transform md:-translate-x-0.5"></div>
              
              {timeline.map((item, index) => (
                <div key={index} className={`relative flex items-center mb-8 ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                }`}>
                  {/* Timeline dot */}
                  <div className="absolute left-4 md:left-1/2 w-4 h-4 bg-primary rounded-full transform -translate-x-1/2 z-10">
                    <div className="w-2 h-2 bg-primary-foreground rounded-full absolute top-1 left-1"></div>
                  </div>
                  
                  {/* Content */}
                  <div className={`w-full md:w-1/2 ${
                    index % 2 === 0 ? 'md:pr-8 ml-12 md:ml-0' : 'md:pl-8 ml-12 md:ml-0'
                  }`}>
                    <Card className="card-maritime">
                      <CardContent className="p-6">
                        <div className="flex items-center space-x-2 mb-3">
                          <Calendar className="w-5 h-5 text-primary" />
                          <span className="text-sm font-semibold text-primary">{item.date}</span>
                        </div>
                        <h3 className="text-xl font-semibold text-primary mb-2">
                          {item.title}
                        </h3>
                        <p className="text-muted-foreground">
                          {item.description}
                        </p>
                      </CardContent>
                    </Card>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="section-maritime">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-primary mb-4">
              Nossos Valores
            </h2>
            <p className="text-lg text-muted-foreground">
              Os princípios que guiam nossas ações e decisões
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

      {/* Team Preview */}
      <section className="section-maritime bg-primary text-primary-foreground">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">
            Equipe Multidisciplinar
          </h2>
          <p className="text-xl mb-8 opacity-90 max-w-3xl mx-auto">
            Nossa equipe é formada por profissionais dedicados e eficientes, 
            com ampla experiência no setor marítimo e comprometidos com a 
            excelência no atendimento.
          </p>
          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="w-20 h-20 bg-primary-foreground/20 rounded-full mx-auto mb-4 flex items-center justify-center">
                <Users className="w-10 h-10" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Direção Executiva</h3>
              <p className="opacity-80">Liderança estratégica e visão de mercado</p>
            </div>
            <div className="text-center">
              <div className="w-20 h-20 bg-primary-foreground/20 rounded-full mx-auto mb-4 flex items-center justify-center">
                <Users className="w-10 h-10" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Operações</h3>
              <p className="opacity-80">Gestão eficiente dos processos marítimos</p>
            </div>
            <div className="text-center">
              <div className="w-20 h-20 bg-primary-foreground/20 rounded-full mx-auto mb-4 flex items-center justify-center">
                <Users className="w-10 h-10" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Consultoria</h3>
              <p className="opacity-80">Especialistas em regulamentação marítima</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;