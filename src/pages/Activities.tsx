import { Card, CardContent } from "@/components/ui/card";
import { BarChart3, Ship, Users, FileCheck, Calendar, TrendingUp } from "lucide-react";
import shippingPortImage from "@/assets/shipping-port.jpg";

const Activities = () => {
  const stats2024 = [
    { number: "+216", label: "Navios Atendidos", icon: Ship, color: "text-primary" },
    { number: "+1,269", label: "Navios em Clearency", icon: FileCheck, color: "text-accent" },
    { number: "20,979", label: "Tripulantes Assistidos", icon: Users, color: "text-maritime-teal" },
    { number: "100%", label: "Taxa de Satisfação", icon: TrendingUp, color: "text-maritime-gold" }
  ];

  const serviceTypes = [
    { service: "Partida/Chegada da Tripulação", count: "24,687" },
    { service: "Taxa Mensal da Agência", count: "216" },
    { service: "Taxa de Parto", count: "267" },
    { service: "Liberação do Porto", count: "1,672" },
    { service: "Outros Serviços", count: "44" }

    // { service: "Crew Departure/Arrival", count: "20,979" },
    // { service: "Monthly Agency Fee", count: "216" },
    // { service: "Birthing Fee", count: "287" },
    // { service: "Port Clearance", count: "156" },
    // { service: "Outros Serviços", count: "44" }
    // { service: "Monthly Agency Fee", count: "233", percentage: "26%" },
  ];

  const monthlyData = [
    { month: "Jan", ships: 98, crew: 1654 },
    { month: "Fev", ships: 105, crew: 1789 },
    { month: "Mar", ships: 112, crew: 1923 },
    { month: "Abr", ships: 108, crew: 1845 },
    { month: "Mai", ships: 115, crew: 1967 },
    { month: "Jun", ships: 109, crew: 1876 },
    { month: "Jul", ships: 118, crew: 2034 },
    { month: "Ago", ships: 106, crew: 1798 },
    { month: "Set", ships: 113, crew: 1934 },
    { month: "Out", ships: 102, crew: 1745 },
    { month: "Nov", ships: 97, crew: 1632 },
    { month: "Dez", ships: 86, crew: 1477 }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section
        className="relative section-maritime text-white"
        style={{
          backgroundImage: `linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.4)), url(${shippingPortImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="container mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Actividades e Experiência
          </h1>
          <p className="text-xl max-w-3xl mx-auto leading-relaxed opacity-90">
            Resultados excepcionais em 2024 demonstram nossa competência e
            dedicação no setor marítimo angolano
          </p>
        </div>
      </section>

      {/* 2024 Statistics */}
      <section className="section-maritime bg-maritime-gray/20">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-primary mb-4">
              Resultados de 2024
            </h2>
            <p className="text-lg text-muted-foreground">
              Números que refletem nossa excelência operacional
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {stats2024.map((stat, index) => (
              <Card key={index} className="card-maritime group">
                <CardContent className="p-8 text-center">
                  <stat.icon className={`w-16 h-16 mx-auto mb-4 ${stat.color} group-hover:scale-110 transition-transform duration-300`} />
                  <div className={`text-4xl font-bold mb-2 ${stat.color}`}>
                    {stat.number}
                  </div>
                  <p className="text-muted-foreground font-medium">
                    {stat.label}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Service Breakdown */}
      <section className="section-maritime">
        <div className="container mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-primary mb-6">
                Tipos de Serviços Prestados
              </h2>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                Distribuição dos nossos serviços ao longo de 2024, demonstrando
                nossa versatilidade e capacidade de atendimento.
              </p>
              <div className="space-y-4">
                {serviceTypes.map((item, index) => (
                  <div key={index} className="flex items-center justify-between p-4 bg-maritime-gray/20 rounded-lg">
                    <div className="flex-1">
                      <h4 className="font-semibold text-primary">{item.service}</h4>
                      <p className="text-sm text-muted-foreground">{item.count} operações</p>
                    </div>
                    <div className="text-2xl font-bold text-accent">
                      {/* {item.percentage} */}
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <Card className="card-maritime">
                <CardContent className="p-8">
                  <div className="text-center mb-6">
                    <BarChart3 className="w-16 h-16 text-primary mx-auto mb-4" />
                    <h3 className="text-xl font-semibold text-primary">
                      Diversificação de Serviços
                    </h3>
                  </div>
                  <p className="text-muted-foreground text-center mb-6">
                    Nossa ampla gama de serviços permite atender às mais
                    diversas necessidades do sector marítimo.
                  </p>
                  <div className="grid grid-cols-2 gap-4 text-center">
                    <div className="p-4 bg-primary/10 rounded-lg">
                      <div className="text-2xl font-bold text-primary">5</div>
                      <p className="text-sm text-muted-foreground">Tipos de Serviços</p>
                    </div>
                    <div className="p-4 bg-accent/10 rounded-lg">
                      <div className="text-2xl font-bold text-accent">24/7</div>
                      <p className="text-sm text-muted-foreground">Atendimento</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Monthly Performance */}
      <section className="section-maritime bg-maritime-gray/20">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-primary mb-4">
              Performance Mensal 2024
            </h2>
            <p className="text-lg text-muted-foreground">
              Evolução consistente ao longo do ano
            </p>
          </div>
          <div className="grid lg:grid-cols-2 gap-12">
            <Card className="card-maritime">
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold text-primary mb-6 text-center">
                  Navios Atendidos por Mês
                </h3>
                <div className="space-y-3">
                  {monthlyData.map((data, index) => (
                    <div key={index} className="flex items-center justify-between">
                      <span className="font-medium text-primary">{data.month}</span>
                      <div className="flex-1 mx-4">
                        <div className="w-full bg-maritime-gray/30 rounded-full h-2">
                          <div
                            className="bg-primary h-2 rounded-full transition-all duration-500"
                            style={{ width: `${(data.ships / 118) * 100}%` }}
                          ></div>
                        </div>
                      </div>
                      <span className="text-sm text-muted-foreground">{data.ships}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
            <Card className="card-maritime">
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold text-primary mb-6 text-center">
                  Tripulantes Assistidos por Mês
                </h3>
                <div className="space-y-3">
                  {monthlyData.map((data, index) => (
                    <div key={index} className="flex items-center justify-between">
                      <span className="font-medium text-primary">{data.month}</span>
                      <div className="flex-1 mx-4">
                        <div className="w-full bg-maritime-gray/30 rounded-full h-2">
                          <div
                            className="bg-accent h-2 rounded-full transition-all duration-500"
                            style={{ width: `${(data.crew / 2034) * 100}%` }}
                          ></div>
                        </div>
                      </div>
                      <span className="text-sm text-muted-foreground">{data.crew}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Experience Highlights */}
      <section className="section-maritime">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-primary mb-4">
              Destaques da Nossa Experiência
            </h2>
            <p className="text-lg text-muted-foreground">
              Marcos importantes que demonstram nossa competência
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="card-maritime">
              <CardContent className="p-8 text-center">
                <Calendar className="w-16 h-16 text-primary mx-auto mb-6" />
                <h3 className="text-xl font-semibold text-primary mb-4">
                  Operação Contínua
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  Atendimento ininterrupto durante todo o ano de 2024,
                  garantindo suporte 24/7 para nossos clientes.
                </p>
              </CardContent>
            </Card>
            <Card className="card-maritime">
              <CardContent className="p-8 text-center">
                <TrendingUp className="w-16 h-16 text-accent mx-auto mb-6" />
                <h3 className="text-xl font-semibold text-primary mb-4">
                  Crescimento Consistente
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  Crescimento sustentável em volume de operações e
                  diversificação de serviços ao longo do ano.
                </p>
              </CardContent>
            </Card>
            <Card className="card-maritime">
              <CardContent className="p-8 text-center">
                <FileCheck className="w-16 h-16 text-maritime-teal mx-auto mb-6" />
                <h3 className="text-xl font-semibold text-primary mb-4">
                  Excelência Operacional
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  100% de conformidade com regulamentações marítimas
                  e satisfação total dos clientes atendidos.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-maritime bg-primary text-primary-foreground">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">
            Faça Parte dos Nossos Resultados
          </h2>
          <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            Junte-se aos mais de 1.200 navios que confiaram em nossos serviços
            durante 2024. Seja o próximo a experimentar nossa excelência.
          </p>
          <button className="btn-maritime bg-primary-foreground text-primary px-8 py-4 rounded-lg font-semibold hover:bg-primary-foreground/90 transition-colors">
            Solicite Nossos Serviços
          </button>
        </div>
      </section>
    </div>
  );
};

export default Activities;
