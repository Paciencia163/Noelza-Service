import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { MapPin, Phone, Mail, Clock, Send, MessageSquare } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    phone: "",
    service: "",
    message: ""
  });

  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Simulate form submission
    toast({
      title: "Mensagem Enviada!",
      description: "Entraremos em contato em breve. Obrigado pelo interesse!",
    });

    // Reset form
    setFormData({
      name: "",
      email: "",
      company: "",
      phone: "",
      service: "",
      message: ""
    });
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const contactInfo = [
    {
      icon: Mail,
      title: "Email",
      details: "info@noelzaservice.com",
      description: "Envie-nos um email para consultas gerais"
    },
    {
      icon: Phone,
      title: "Telefone",
      details: "+244 XXX XXX XXX",
      description: "Atendimento comercial de segunda a sexta"
    },
    {
      icon: MapPin,
      title: "Localização",
      details: "Luanda, Angola",
      description: "Escritório principal e centro de operações"
    },
    {
      icon: Clock,
      title: "Horário",
      details: "24/7 Operações",
      description: "Atendimento de emergência sempre disponível"
    }
  ];

  const services = [
    "Agenciamento de Navios",
    "Freight Forward",
    "Licenciamento de Navios",
    "Consultoria Marítima",
    "Gestão de Tripulação",
    "Compliance Marítimo",
    "Outros"
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="section-maritime bg-maritime-gray/20">
        <div className="container mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-primary mb-6">
            Entre em Contacto
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Entre em contacto e descubra como podemos facilitar as suas operações marítimas 
            com soluções profissionais e eficientes
          </p>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="section-maritime">
        <div className="container mx-auto">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div>
              <Card className="card-maritime">
                <CardContent className="p-8">
                  <div className="flex items-center space-x-3 mb-6">
                    <MessageSquare className="w-8 h-8 text-primary" />
                    <h2 className="text-2xl font-bold text-primary">
                      Envie sua Mensagem
                    </h2>
                  </div>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-primary mb-2">
                          Nome Completo *
                        </label>
                        <Input
                          type="text"
                          name="name"
                          value={formData.name}
                          onChange={handleInputChange}
                          required
                          placeholder="Seu nome completo"
                          className="w-full"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-primary mb-2">
                          Email *
                        </label>
                        <Input
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleInputChange}
                          required
                          placeholder="seu@email.com"
                          className="w-full"
                        />
                      </div>
                    </div>
                    
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-primary mb-2">
                          Empresa
                        </label>
                        <Input
                          type="text"
                          name="company"
                          value={formData.company}
                          onChange={handleInputChange}
                          placeholder="Nome da empresa"
                          className="w-full"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-primary mb-2">
                          Telefone
                        </label>
                        <Input
                          type="tel"
                          name="phone"
                          value={formData.phone}
                          onChange={handleInputChange}
                          placeholder="+244 XXX XXX XXX"
                          className="w-full"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-primary mb-2">
                        Serviço de Interesse
                      </label>
                      <select
                        name="service"
                        value={formData.service}
                        onChange={handleInputChange}
                        className="w-full px-3 py-2 border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                      >
                        <option value="">Selecione um serviço</option>
                        {services.map((service, index) => (
                          <option key={index} value={service}>
                            {service}
                          </option>
                        ))}
                      </select>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-primary mb-2">
                        Mensagem *
                      </label>
                      <Textarea
                        name="message"
                        value={formData.message}
                        onChange={handleInputChange}
                        required
                        placeholder="Descreva suas necessidades ou dúvidas..."
                        rows={5}
                        className="w-full"
                      />
                    </div>

                    <Button type="submit" className="btn-maritime w-full">
                      <Send className="w-4 h-4 mr-2" />
                      Enviar Mensagem
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>

            {/* Contact Information */}
            <div className="space-y-8">
              <div>
                <h2 className="text-2xl font-bold text-primary mb-6">
                  Informações de Contacto
                </h2>
                <div className="space-y-6">
                  {contactInfo.map((info, index) => (
                    <Card key={index} className="card-maritime">
                      <CardContent className="p-6">
                        <div className="flex items-start space-x-4">
                          <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                            <info.icon className="w-6 h-6 text-primary" />
                          </div>
                          <div>
                            <h3 className="text-lg font-semibold text-primary mb-1">
                              {info.title}
                            </h3>
                            <p className="text-accent font-medium mb-2">
                              {info.details}
                            </p>
                            <p className="text-sm text-muted-foreground">
                              {info.description}
                            </p>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>

              {/* Quick Contact */}
              <Card className="card-maritime">
                <CardContent className="p-8 text-center">
                  <Phone className="w-16 h-16 text-primary mx-auto mb-4" />
                  <h3 className="text-xl font-bold text-primary mb-4">
                    Precisa de Atendimento Imediato?
                  </h3>
                  <p className="text-muted-foreground mb-6">
                    Para emergências marítimas e situações urgentes, 
                    nossa equipe está disponível 24/7.
                  </p>
                  <Button className="btn-maritime w-full">
                    Contacto de Emergência
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Office Location */}
      <section className="section-maritime bg-maritime-gray/20">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-primary mb-4">
              Nossa Localização
            </h2>
            <p className="text-lg text-muted-foreground">
              Visite nosso escritório em Luanda para uma reunião presencial
            </p>
          </div>
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <Card className="card-maritime">
                <CardContent className="p-8">
                  <MapPin className="w-12 h-12 text-primary mb-6" />
                  <h3 className="text-xl font-bold text-primary mb-4">
                    Escritório Principal
                  </h3>
                  <div className="space-y-4">
                    <div>
                      <p className="font-semibold text-primary">Endereço:</p>
                      <p className="text-muted-foreground">
                        Luanda, Angola<br />
                        [Endereço completo a ser definido]
                      </p>
                    </div>
                    <div>
                      <p className="font-semibold text-primary">Horário de Funcionamento:</p>
                      <p className="text-muted-foreground">
                        Segunda a Sexta: 08:00 - 18:00<br />
                        Sábado: 08:00 - 13:00<br />
                        Domingo: Emergências apenas
                      </p>
                    </div>
                    <div>
                      <p className="font-semibold text-primary">Como Chegar:</p>
                      <p className="text-muted-foreground">
                        Localização estratégica com fácil acesso aos principais 
                        portos e terminais marítimos de Luanda.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
            <div>
              <Card className="card-maritime">
                <CardContent className="p-8 text-center">
                  <div className="w-full h-64 bg-maritime-gray/30 rounded-lg flex items-center justify-center mb-6">
                    <div className="text-center">
                      <MapPin className="w-16 h-16 text-primary mx-auto mb-4" />
                      <p className="text-muted-foreground">
                        Mapa interativo será integrado aqui
                      </p>
                    </div>
                  </div>
                  <Button className="btn-maritime w-full">
                    Ver no Google Maps
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="section-maritime">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-primary mb-4">
              Perguntas Frequentes
            </h2>
            <p className="text-lg text-muted-foreground">
              Respostas para as dúvidas mais comuns
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                question: "Qual o tempo de resposta para orçamentos?",
                answer: "Respondemos a todas as solicitações de orçamento em até 24 horas durante dias úteis."
              },
              {
                question: "Vocês operam 24 horas por dia?",
                answer: "Sim, oferecemos suporte 24/7 para emergências marítimas e operações críticas."
              },
              {
                question: "Quais documentos são necessários para os serviços?",
                answer: "Os documentos variam por serviço. Nossa equipe fornecerá uma lista detalhada após a consulta inicial."
              },
              {
                question: "Vocês atendem navios de todas as bandeiras?",
                answer: "Sim, temos experiência com navios de diversas bandeiras e conhecimento das regulamentações internacionais."
              }
            ].map((faq, index) => (
              <Card key={index} className="card-maritime">
                <CardContent className="p-6">
                  <h3 className="text-lg font-semibold text-primary mb-3">
                    {faq.question}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {faq.answer}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-maritime bg-primary text-primary-foreground">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">
            Pronto para Começar?
          </h2>
          <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            Nossa equipe está pronta para atender suas necessidades marítimas. 
            Entre em contacto hoje mesmo e descubra como podemos ajudar.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" className="text-lg px-8 py-4">
              Solicitar Orçamento
            </Button>
            <Button size="lg" variant="outline" className="text-lg px-8 py-4 border-primary-foreground text-primary hover:bg-primary/10">
              Agendar Reunião
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
