    import { useRef, useState } from "react";
    import emailjs from "emailjs-com";

    import { MapContainer, TileLayer, Marker, Popup, ZoomControl, Tooltip } from "react-leaflet";
    
    import { useTranslation } from "react-i18next";
    import { Card, CardContent } from "@/components/ui/card";
    import { Button } from "@/components/ui/button";
    import { Input } from "@/components/ui/input";
    import { Textarea } from "@/components/ui/textarea";
    import { MapPin, Phone, Mail, Clock, Send, MessageSquare } from "lucide-react";

    import { useToast } from "@/hooks/use-toast";
    import L from "leaflet";
    import "leaflet/dist/leaflet.css";
    import "leaflet.fullscreen";
    import "leaflet.fullscreen/Control.FullScreen.css";

    // import iconRetinaUrl from "leaflet/dist/images/marker-icon-2x.png";
    // import iconUrl from "leaflet/dist/images/marker-icon.png";
    // import shadowUrl from "leaflet/dist/images/marker-shadow.png";

// Definindo ícones de cores diferentes
const blueIcon = new L.Icon({
  iconUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png",
  shadowUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png",
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowSize: [41, 41],
  iconSize: [25, 41],
});


const redIcon = new L.Icon({
  iconUrl: "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/images/marker-icon.png",
  shadowUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png",
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowSize: [41, 41],
  iconSize: [25, 41],
});


// Coordenadas dos escritórios
const offices = [
  { nameKey: "main", coords: [-8.893615170747264, 13.19392103873842], icon: blueIcon, name: "Noelza Service LDA." },
  { nameKey: "operations", coords: [-8.800869533482668,  13.257564966573279], icon: redIcon, name: "SONILS" },
];


// -8.893820648252918, 13.194284846766296
// -8.801072673617872, 13.25766815845166 - sonils
// -8.814610401347652, 13.230382554328326 - porto de luanda
// -8.814644726294512, 13.230207803798267 - porto de luanda

// ------------------- new form start -------------------

// import { useState } from 'react';

// export default function ContactForm() {
//   const [result, setResult] = useState("");

//   const onSubmit = async (event) => {
//     event.preventDefault();
//     const formData = new FormData(event.target);
//     formData.append("access_key", "6c88a714-e4dc-4c6c-b5e7-c0458bdf4471");

//     const response = await fetch("https://api.web3forms.com/submit", {
//       method: "POST",
//       body: formData
//     });

//     const data = await response.json();
//     setResult(data.success ? "Success!" : "Error");
//   };

//   return (
//     <form onSubmit={onSubmit}>
//       <input type="text" name="name" required/>
//       <input type="email" name="email" required/>
//       <textarea name="message" required></textarea>
//       <button type="submit">Submit</button>
//       <p>{result}</p>
//     </form>
//   );
// }
// ------------------- new form end -------------------

    const Contact = () => {
    const { t } = useTranslation();
    const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    phone: "",
    service: "",
    message: ""
    });
    const formFocus =  useRef<HTMLInputElement>(null)
    const iconMap: Record<string, any> = {
      email: Mail,
      phone: Phone,
      location: MapPin,
      hours: Clock,
    };

    function handleFocus () {
      formFocus.current?.focus()
    }

    const { toast } = useToast();

  // Coordenadas de exemplo (pode mudar para a localização real)
  const position: [number, number] = [-8.839, 13.289]; // Luanda, Angola

    // const handleSubmit = (e: React.FormEvent) => {
    // e.preventDefault();
    // toast({
    // title: t("contact.form.submit") + "!",
    // description: t("contact.form.thankYou", "Entraremos em contato em breve. Obrigado pelo interesse!"),
    // });
    // setFormData({
    // name: "",
    // email: "",
    // company: "",
    // phone: "",
    // service: "",
    // message: ""
    // });
    // };

//     const handleSubmit = (e: React.FormEvent) => {
//   e.preventDefault();

//   emailjs
//     .send(
//       import.meta.env.VITE_EMAILJS_SERVICE_ID,
//       import.meta.env.VITE_EMAILJS_TEMPLATE_ID,   // substitui com o teu Template ID
//       {
//         name: formData.name,
//         email: formData.email,
//         company: formData.company,
//         phone: formData.phone,
//         service: formData.service,
//         message: formData.message,
//       },
//        import.meta.env.VITE_EMAILJS_PUBLIC_KEY       // substitui com o teu Public Key
//     )
//     .then(
//       () => {
//         toast({
//           title: t("contact.form.submit") + "!",
//           description: t("contact.form.thankYou", "Entraremos em contato em breve. Obrigado pelo interesse!"),
//         });
//         setFormData({
//           name: "",
//           email: "",
//           company: "",
//           phone: "",
//           service: "",
//           message: "",
//         });
//       },
//       (error) => {
//         console.error("Erro ao enviar e-mail:", error);
//         toast({
//           title: "Erro ao enviar!",
//           description: "Por favor, tente novamente em instantes.",
//           variant: "destructive",
//         });
//       }
//     );
// };

// com envio e reenvio
const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();

  try {
    // 1️⃣ Envia o e-mail para a empresa
    await emailjs.send(
      import.meta.env.VITE_EMAILJS_SERVICE_ID,
      import.meta.env.VITE_EMAILJS_TEMPLATE_ID, // template principal (empresa)
      {
        name: formData.name,
        email: formData.email,
        company: formData.company,
        phone: formData.phone,
        service: formData.service,
        message: formData.message,
        year: new Date().getFullYear(),
      },
      import.meta.env.VITE_EMAILJS_PUBLIC_KEY
    );

    // 2️⃣ Envia o e-mail automático de confirmação ao cliente
    await emailjs.send(
      import.meta.env.VITE_EMAILJS_SERVICE_ID,
      import.meta.env.VITE_EMAILJS_TEMPLATE_AUTOREPLY, // ID do template de resposta automática
      {
        name: formData.name,
        email: formData.email,
        year: new Date().getFullYear(),
      },
      import.meta.env.VITE_EMAILJS_PUBLIC_KEY
    );

    toast({
      title: t("contact.form.submit") + "!",
      description: t("contact.form.thankYou", "Entraremos em contato em breve. Obrigado pelo interesse!"),
    });

    setFormData({
      name: "",
      email: "",
      company: "",
      phone: "",
      service: "",
      message: "",
    });
  } catch (error) {
    console.error("Erro ao enviar e-mail:", error);
    toast({
      title: "Erro ao enviar!",
      description: "Por favor, tente novamente em instantes.",
      variant: "destructive",
    });
  }
};

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const contactEmergency = "929 984 300";

    const contactInfoObj = t("contact.contactInfo.items", { returnObjects: true }) as Record<string, any>;
    const contactInfo = Object.values(contactInfoObj);

    const servicesObj = t("contact.form.services", { returnObjects: true });
    const services = Array.isArray(servicesObj) ? servicesObj : [];

    const faqItems = t("contact.faq.items", { returnObjects: true }) as Array<{ question: string; answer: string }>;

    return ( <div className="min-h-screen">
    {/* Hero Section */} <section id="form-id" className="section-maritime bg-maritime-gray/20"> <div className="container mx-auto text-center"> <h1 className="text-4xl md:text-6xl font-bold text-primary mb-6">{t("contact.hero.title")}</h1> <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">{t("contact.hero.description")}</p> </div> </section>

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
                    <h2 className="text-2xl font-bold text-primary">{t("contact.form.sendMessage")}</h2>
                  </div>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-primary mb-2">{t("contact.form.fields.name")}</label>
                        <Input
                          type="text"
                          name="name"
                          ref={formFocus}
                          value={formData.name}
                          onChange={handleInputChange}
                          required
                          placeholder={t("contact.form.placeholders.name")}
                          className="w-full"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-primary mb-2">{t("contact.form.fields.email")}</label>
                        <Input
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleInputChange}
                          required
                          placeholder={t("contact.form.placeholders.email")}
                          className="w-full"
                        />
                      </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-primary mb-2">{t("contact.form.fields.company")}</label>
                        <Input
                          type="text"
                          name="company"
                          value={formData.company}
                          onChange={handleInputChange}
                          placeholder={t("contact.form.placeholders.company")}
                          className="w-full"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-primary mb-2">{t("contact.form.fields.phone")}</label>
                        <Input
                          type="tel"
                          name="phone"
                          value={formData.phone}
                          onChange={handleInputChange}
                          placeholder={t("contact.form.placeholders.phone")}
                          className="w-full"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-primary mb-2">{t("contact.form.fields.service")}</label>
                      <select
                        name="service"
                        value={formData.service}
                        onChange={handleInputChange}
                        className="w-full px-3 py-2 border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                      >
                        <option value="">{t("contact.form.selectService")}</option>
                        {services.map((service, index) => (
                          <option key={index} value={service}>
                            {service}
                          </option>
                        ))}
                      </select>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-primary mb-2">{t("contact.form.fields.message")}</label>
                      <Textarea
                        name="message"
                        value={formData.message}
                        onChange={handleInputChange}
                        required
                        placeholder={t("contact.form.placeholders.message")}
                        rows={5}
                        className="w-full"
                      />
                    </div>

                    <Button type="submit" className="btn-maritime w-full">
                      <Send className="w-4 h-4 mr-2" />
                      {t("contact.form.submit")}
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>

            {/* Contact Information */}
            <div className="space-y-8">
              <div>
                <h2 className="text-2xl font-bold text-primary mb-6">{t("contact.contactInfo.title")}</h2>
                <div className="space-y-6">
                  {contactInfo.map((info, index) => {
                     const Icon = iconMap[info.key];
                  return (
                    
                    <Card key={index} className="card-maritime">
                      <CardContent className="p-6">
                        <div className="flex items-start space-x-4">
                          <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                            {Icon && <Icon className="w-6 h-6 text-primary" />}
                          </div>
                          <div>
                            <h3 className="text-lg font-semibold text-primary mb-1">{info.title}</h3>
                            <p className="text-accent font-medium mb-2">{info.details}</p>
                            {info.description && <p className="text-sm text-muted-foreground">{info.description}</p>}
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  )})}
                </div>
              </div>

              {/* Quick Contact */}
              <Card className="card-maritime">
                <CardContent className="p-8 text-center">
                  <Phone className="w-16 h-16 text-primary mx-auto mb-4" />
                  <h3 className="text-xl font-bold text-primary mb-4">{t("contact.contactInfo.emergency.title")}</h3>
                  <p className="text-muted-foreground mb-6">
                    {t("contact.contactInfo.emergency.description")}
                    {contactEmergency && <span className="block"> +244 {contactEmergency}</span>}
                  </p>
                  {/* <Button className="btn-maritime w-full">{t("contact.contactInfo.emergency.button")}</Button> */}
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
            <h2 className="text-3xl font-bold text-primary mb-4">{t("contact.office.title")}</h2>
            <p className="text-lg text-muted-foreground">{t("contact.office.description")}</p>
          </div>
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <Card className="card-maritime">
                <CardContent className="p-8">
                  <MapPin className="w-12 h-12 text-primary mb-6" />
                  <h3 className="text-xl font-bold text-primary mb-4">{t("contact.office.addressTitle")}</h3>
                  <div className="space-y-4">
                    <div>
                      <p className="font-semibold text-primary">{t("contact.office.addressLabel")}</p>
                      <p className="text-muted-foreground">{t("contact.office.address")}</p>
                    </div>
                    {/* Horario de funcionamento do primeiro escritório */}
                      <div>
                      <p className="font-semibold text-primary">{t("contact.office.hoursLabel")}</p>
                      <p className="text-muted-foreground">{t("contact.office.hours")}</p>
                      <p className="text-muted-foreground">{t("contact.office.sunday")}</p>
                    </div>
                    <div>
                      <p className="font-semibold text-primary">{t("contact.office.addressLabel2")}</p>
                      <p className="text-muted-foreground">{t("contact.office.address2")}</p>
                    </div>
                    <div>
                      <p className="font-semibold text-primary">{t("contact.office.hoursLabel")}</p>
                      <p className="text-muted-foreground">{t("contact.office.timeTableSonils")}</p>
                      {/* <p className="text-muted-foreground">{t("contact.office.sunday")}</p> */}
            
                    </div>
                    <div>
                      <p className="font-semibold text-primary">{t("contact.office.directionsLabel")}</p>
                      <p className="text-muted-foreground">{t("contact.office.directions")}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
            <div>
     <Card className="card-maritime">
      <CardContent className="p-8 text-center">
        {/* Mapa */}
        <div className="w-full h-64 bg-maritime-gray/30 rounded-lg flex items-center justify-center mb-6">
          <MapContainer
            center={offices[0].coords}
            zoom={13}
            scrollWheelZoom
            style={{ height: "100%", width: "100%" }}
          >
            <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
            {offices.map((office, idx) => (
              <Marker key={idx} position={office.coords} icon={office.icon}>
                <Tooltip>{t(`contact.office.${office.nameKey}`)}</Tooltip>
              </Marker>
            ))}
          </MapContainer>
        </div>

        {/* Botão abrir no Google Maps */}
<div className="space-y-3">
  <p className="text-sm text-muted-foreground mb-2 font-semibold">
     {t("contact.office.mapDescription")}:
  </p>
  
  {offices.map((office, idx) => (
    <Button
      key={idx}
      variant="outline"
      className="w-full justify-start"
      onClick={() => {
        window.open(
          `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(t(`${office.name}`))}`,
          "_blank"
        );
      }}
    >
      <MapPin className="w-4 h-4 mr-2" />
      {t(`contact.office.${office.nameKey}`)}
    </Button>
  ))}
</div>
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
            <h2 className="text-3xl font-bold text-primary mb-4">{t("contact.faq.title")}</h2>
            <p className="text-lg text-muted-foreground">{t("contact.faq.description")}</p>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            {faqItems.map((faq, index) => (
              <Card key={index} className="card-maritime">
                <CardContent className="p-6">
                  <h3 className="text-lg font-semibold text-primary mb-3">{faq.question}</h3>
                  <p className="text-muted-foreground leading-relaxed">{faq.answer}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-maritime bg-primary text-primary-foreground">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">{t("contact.cta.title")}</h2>
          <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">{t("contact.cta.description")}</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            {/* <a href="#" onClick={handleFocus} className="bg-secondary font-medium text-lg text-[#051838] transition-all rounded hover:bg-[#F4F4F4F4] hover:text-[#051838] hover:text-[#124069] duration-300 border px-4 py-2">{t("contact.cta.requestQuote")}</a> */}
            {/* <a href="#" onClick={handleFocus} className="bg-white font-medium text-lg text-[#124069] rounded hover:bg-transparent hover:text-white duration-300 border px-4 py-2">{t("contact.cta.scheduleMeeting")}</a> */}
              <Button size="lg" onClick={handleFocus} variant="secondary" className="text-lg px-4 py-1 border-primary-foreground text-primary hover:bg-secondary/80">
              {t("contact.cta.requestQuote")}
            </Button>
             <Button size="lg" onClick={handleFocus} variant="outline" className="text-lg px-4 py-1 border-primary-foreground text-primary hover:bg-primary/10">
              {t("contact.cta.scheduleMeeting")}
            </Button>
          </div>
        </div>
      </section>
    </div>

      );
    };

    export default Contact;
