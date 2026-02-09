import { Card, CardContent } from "@/components/ui/card";
import { Building2, Handshake, Star, Globe, Users, Award } from "lucide-react";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";

// Tipagem dos dados
interface Client {
name: string;
src: string;
alt?: string;
description: string;
sector: string;
partnership: string;
relation: string;
services: string[];
}

interface ClientType {
icon: any;
count: string;
title: string;
description: string;
}

interface Testimonial {
quote: string;
author: string;
company: string;
}

interface Benefit {
key: any
title: string;
description: string;
}

interface CTA {
title: string;
subtitle: string;
button: string;
}

const Clients = () => {
const { t } = useTranslation()

  const navigate = useNavigate()

  const handleClick = () => {
    navigate("/contato#form-id");
  };

// Carrega dados do JSON i18n e tipa os arrays
const mainClients = t("clients.mainClients", { returnObjects: true }) as Client[];
const mainClientsNew = t("clients.mainClientsNew", { returnObjects: true }) as Client[];
const clientTypes = t("clients.clientTypes", { returnObjects: true }) as ClientType[];
const testimonials = t("clients.testimonials", { returnObjects: true }) as Testimonial[];
const benefits = t("clients.benefits", { returnObjects: true }) as Benefit[];
const cta = t("clients.cta", { returnObjects: true }) as CTA;

  const iconMap: Record<string, any> = {
      handshake: Handshake,
      award: Award,
      globe: Globe,
      users: Users,
    };

     const iconClientType: Record<string, any> = {
      Building2: Building2,
      Globe: Globe,
      Users: Users,
      Award: Award,
    };

return ( <div className="min-h-screen">
{/* Hero Section */} <section className="section-maritime bg-maritime-gray/20"> <div className="container mx-auto text-center"> <h1 className="text-4xl md:text-6xl font-bold text-primary mb-6">{t("clients.hero.title")}</h1> <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">{t("clients.hero.subtitle")}</p> </div> </section>

  {/* Main Clients */}  
  <section className="section-maritime">  
    <div className="container mx-auto">  
      <div className="text-center mb-12">  
        <h2 className="text-3xl font-bold text-primary mb-4">{t("clients.mainClientsHeader.mainClientsTitle")}</h2>  
        <p className="text-lg text-muted-foreground">{t("clients.mainClientsHeader.mainClientsDescription")}</p>  
      </div>  
      <div className="space-y-8">  
        {mainClients.map((client, index) => (  
          <Card key={index} className="card-maritime">  
            <CardContent className="p-8">  
              <div className="grid md:grid-cols-3 gap-8 items-center">  
                <div className="text-center md:text-left">  
                  <div className="w-20 h-20 bg-primary/10 rounded-xl flex items-center justify-center mx-auto md:mx-0 mb-4">  
                    <img src={client.src} className="text-primary" alt={client.alt ?? client.name} />  
                  </div>  
                  <h3 className="text-2xl font-bold text-primary mb-2">{client.name}</h3>  
                  <p className="text-muted-foreground mb-2">{client.sector}</p>  
                  <p className="text-sm text-accent font-medium">{client.relation}: {client.partnership}</p>  
                </div>  
                <div className="md:col-span-2">  
                  <p className="text-lg text-muted-foreground mb-6 leading-relaxed">{client.description}</p>  
                  <div>  
                    <h4 className="font-semibold text-primary mb-3">{t("servicesProvided", "Serviços Prestados:")}</h4>  
                    <div className="flex flex-wrap gap-2">  
                      {client.services.map((service, idx) => (  
                        <span key={idx} className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium">{service}</span>  
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

  {/* Main Clients New */}  
  <section className="py-16">  
    <div className="container mx-auto text-center space-y-10">  
      <div className="max-w-3xl mx-auto space-y-4">  
        <h2 className="text-3xl font-bold text-primary">{t("clients.mainClientsNewHeader.mainClientsTitle")}</h2>  
        <p className="text-lg text-muted-foreground leading-relaxed">{t("clients.mainClientsNewHeader.mainClientsDescription")}</p>  
      </div>  
      <div className="grid grid-flow-col auto-cols-max gap-10 overflow-x-auto justify-start md:justify-center pb-4">  
        {mainClientsNew.map((client, index) => (  
          <Card key={index} className="card-maritime border-none shadow-none bg-transparent">  
            <CardContent className="p-4 flex flex-col items-center text-center">  
              <div className="w-24 h-24 bg-primary/10 rounded-xl flex items-center justify-center mb-3">  
                <img src={client.src} alt={client.alt ?? client.name} className="w-12 h-12 object-contain text-primary" />  
              </div>  
              <h3 className="text-base font-semibold text-primary">{client.name}</h3>  
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
        <h2 className="text-3xl font-bold text-primary mb-4">{t("clients.clientType.clientTypesTitle")}</h2>
        <p className="text-lg text-muted-foreground">
          {t("clients.clientType.clientTypesDescription")}
        </p>
      </div>
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
        {clientTypes.map((type, index) => {
          // const Icon = type.icon;
          const Icon = iconClientType[type.icon];
          return (
            <Card key={index} className="card-maritime group">
              <CardContent className="p-6 text-center">
                <Icon className="w-16 h-16 text-primary mx-auto mb-4 group-hover:text-accent transition-colors duration-300" />
                <div className="text-3xl font-bold text-primary mb-2">{type.count}</div>
                <h3 className="text-lg font-semibold text-primary mb-3">{type.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{type.description}</p>
              </CardContent>
            </Card>
          );
        })}
      </div>
    </div>
  </section>

  {/* Testimonials */}  
  <section className="section-maritime">  
    <div className="container mx-auto">  
      <div className="text-center mb-12">  
        <h2 className="text-3xl font-bold text-primary mb-4">{t("clients.testimonial.testimonialsTitle")}</h2>  
        <p className="text-lg text-muted-foreground">{t("clients.testimonial.testimonialsDescription")}</p>  
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
              <blockquote className="text-muted-foreground leading-relaxed mb-6 italic">"{testimonial.quote}"</blockquote>  
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
          <h2 className="text-3xl font-bold text-primary mb-6">{t("benefitsTitle", "Por Que Nos Escolhem?")}</h2>  
          <div className="space-y-6">  
            {benefits.map((benefit, index) => {  
              // const IconComponent = benefit.icon;  
              const Icon = iconMap[benefit.key];
              return (  
                <div key={index} className="flex items-start space-x-4">  
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">  
                    {/* <IconComponent className="w-6 h-6 text-primary" />   */}
                     {Icon && <Icon className="w-6 h-6 text-primary" />}
                  </div>  
                  <div>  
                    <h3 className="text-lg font-semibold text-primary mb-2">{benefit.title}</h3>  
                    <p className="text-muted-foreground leading-relaxed">{benefit.description}</p>  
                  </div>  
                </div>  
              );  
            })}  
          </div>  
        </div>  
        <div className="text-center">  
          <Card className="card-maritime">  
            <CardContent className="p-8">  
              <Building2 className="w-24 h-24 text-primary mx-auto mb-6" />  
              <h3 className="text-2xl font-bold text-primary mb-4">{t("clients.partner.partnershipCardTitle")}</h3>  
              <p className="text-muted-foreground mb-6 leading-relaxed">{t("clients.partner.partnershipCardDescription")}</p>  
              <div className="grid grid-cols-2 gap-4 mb-6">  
                <div className="text-center">  
                  <div className="text-2xl font-bold text-primary">40+</div>  
                  <p className="text-sm text-muted-foreground">{t("clients.partner.activeClients", "Clientes Ativos")}</p>  
                </div>  
                <div className="text-center">  
                  <div className="text-2xl font-bold text-accent">100%</div>  
                  <p className="text-sm text-muted-foreground">{t("clients.partner.satisfaction")}</p>  
                </div>  
              </div>  
              <button onClick={handleClick} className="btn-maritime w-full">{t("clients.partner.becomeClient")}</button>  
            </CardContent>  
          </Card>  
        </div>  
      </div>  
    </div>  
  </section>  

  {/* CTA Section */}  
  <section className="section-maritime bg-primary text-primary-foreground">  
    <div className="container mx-auto text-center">  
      <h2 className="text-3xl font-bold mb-6">{cta.title}</h2>  
      <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">{cta.subtitle}</p>  
      <button onClick={handleClick} className="btn-maritime bg-primary-foreground text-primary px-8 py-4 rounded-lg font-semibold hover:bg-primary-foreground/90 transition-colors">{cta.button}</button>  
    </div>  
  </section>  
</div>  

);
};

export default Clients;
