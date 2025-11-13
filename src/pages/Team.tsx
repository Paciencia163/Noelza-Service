import { Card, CardContent } from "@/components/ui/card";
import { Users, Target, Award, Briefcase, GraduationCap, Mail } from "lucide-react";
import { useTranslation } from "react-i18next";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { useNavigate } from "react-router-dom";

interface Hero {
  title: string;
  subtitle: string;
}

type Leader = {
name: string;
src: string;
alt: string;
position: string;
description: string;
experience: string;
specialization: string;
};

type Department = {
  key: any
name: string;
members: number;
description: string;
responsibilities: string[];
};

type Value = {
key: any
title: string;
description: string;
};

type Stat = {
value: string;
label: string;

};

type Join = {
title: string;
description: string;
benefits: string[];
workWithUs: {
title: string;
description: string;
areasTitle: string;
areasOfInterest: string[];
button: string;
};
};

interface Cta {
  title: string;
  subtitle: string;
  button: string;
}

const Team = () => {
const { t } = useTranslation();

  const navigate = useNavigate()

  const handleClick = () => {
    navigate("/contato#form-id");
  };

const hero = t("team.hero", { returnObjects: true }) as Hero;
const leadership = t("team.leadership.members", { returnObjects: true }) as Leader[];
const departments = t("team.departments.items", { returnObjects: true }) as Department[];
const values = t("team.values.items", { returnObjects: true }) as Value[];
const stats = t("team.stats.items", { returnObjects: true }) as Stat[];
const join = t("team.join", { returnObjects: true }) as Join;

const cta = t("team.cta", { returnObjects: true }) as Cta;

  const iconMap: Record<string, any> = {
      users: Users,
      briefcase: Briefcase,
      award: Award,
      target: Target,
      graduationCap: GraduationCap,
    };

      const getStatColor = (index: number) => {
    switch(index) {
      case 0: return "text-primary";       // 23+ Profissionais
      case 1: return "text-accent";        // 4 Departamentos
      case 2: return "text-maritime-teal"; // 12+ Anos de Experiência Média
      case 3: return "text-maritime-gold"; // 24/7 Disponibilidade
      default: return "currentColor";
    }
  };

return ( <div className="min-h-screen">

  {/* Hero Section */}
  <section className="section-maritime bg-maritime-gray/20">
    <div className="container mx-auto text-center">
      <h1 className="text-4xl md:text-6xl font-bold text-primary mb-6">{hero.title}</h1>
      <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">{hero.subtitle}</p>
    </div>
  </section>

  {/* Leadership */}
  <section className="section-maritime">
    <div className="container mx-auto">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold text-primary mb-4">{t("team.leadership.title")}</h2>
        <p className="text-lg text-muted-foreground">{t("team.leadership.subtitle")}</p>
      </div>
      <div className="grid md:grid-cols-3 gap-8">
    {leadership.map((leader, index) => (
      <Card key={index} className="card-maritime group">
        <CardContent className="p-8 text-center">
          {/* 🔹 AQUI: aumentamos o tamanho da imagem */}
          <div className="mx-auto mb-6 flex items-center justify-center transition-colors duration-300">
            {/* Mantive ambos para compatibilidade, mas você pode deixar só o LazyLoadImage */}
            <img
              src={leader.src}
              className=" text-primary object-cover rounded-md"
              alt={leader.alt}
            />
            <LazyLoadImage
              src={leader.src}
              alt={leader.alt}
              effect="blur"
              width={44}
              height={44}
              className="w-full h-full object-cover rounded-md"
            />
          </div>

          <h3 className="text-xl font-bold text-primary mb-2">{leader.name}</h3>
          <p className="text-accent font-semibold mb-4">{leader.position}</p>
          <p className="text-muted-foreground mb-4 leading-relaxed">
            {leader.description}
          </p>
          <div className="grid grid-cols-2 gap-4 text-sm">
            <div className="text-center">
              <p className="font-semibold text-primary">
                {t("team.leadership.experience")}
              </p>
              <p className="text-muted-foreground">{leader.experience}</p>
            </div>
            <div className="text-center">
              <p className="font-semibold text-primary">
                {t("team.leadership.specialization")}
              </p>
              <p className="text-muted-foreground">{leader.specialization}</p>
            </div>
          </div>
        </CardContent>
      </Card>
    ))}
  </div>

    </div>
  </section>

  {/* Departments */}
  <section className="section-maritime bg-maritime-gray/20">
    <div className="container mx-auto">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold text-primary mb-4">{t("team.departments.title")}</h2>
        <p className="text-lg text-muted-foreground">{t("team.departments.subtitle")}</p>
      </div>
      <div className="grid lg:grid-cols-2 gap-8">
        {departments.map((dept, index) => {
          const Icon = iconMap[dept.key];
          return (
            <Card key={index} className="card-maritime">
              <CardContent className="p-8">
                <div className="flex items-center space-x-4 mb-6">
                  <div className="w-16 h-16 bg-primary/10 rounded-xl flex items-center justify-center">
                    {Icon && <Icon className="w-8 h-8 text-primary" />}
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-primary">{dept.name}</h3>
                    <p className="text-accent font-semibold">{dept.members}</p>
                    {/* <p className="text-accent font-semibold">{dept.members} {t("team.departments.professionals")}</p> */}
                  </div>
                </div>
                <p className="text-muted-foreground mb-6 leading-relaxed">{dept.description}</p>
                <div>
                  <h4 className="font-semibold text-primary mb-3">{t("team.departments.responsibilities")}</h4>
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
          );
        })}
      </div>
    </div>
  </section>

{/* Team Stats */}
    <section className="section-maritime">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-primary mb-4">
            {t("team.stats.title")}
          </h2>
          <p className="text-lg text-muted-foreground">
            {t("team.stats.description")}
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((item, index) => (
            <Card key={index} className="card-maritime text-center">
              <CardContent className="p-6">
                <div className={`text-3xl font-bold mb-2 ${getStatColor(index)}`}>
                  {item.value}
                </div>
                <p className="text-muted-foreground">{item.label}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>


  {/* Values */}
  <section className="section-maritime bg-maritime-gray/20">
    <div className="container mx-auto">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold text-primary mb-4">{t("team.values.title")}</h2>
        <p className="text-lg text-muted-foreground">{t("team.values.subtitle")}</p>
      </div>
      <div className="grid md:grid-cols-3 gap-8">
        {values.map((value, index) => {
          const Icon = iconMap[value.key];
          return (
            <Card key={index} className="card-maritime group">
              <CardContent className="p-8 text-center">
                {Icon && <Icon className="w-16 h-16 text-primary mx-auto mb-6 group-hover:text-accent transition-colors duration-300" />}
                <h3 className="text-xl font-semibold text-primary mb-4">{value.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{value.description}</p>
              </CardContent>
            </Card>
          );
        })}
      </div>
    </div>
  </section>

  {/* Join */}
  <section className="section-maritime">
    <div className="container mx-auto">
      <div className="grid lg:grid-cols-2 gap-12 items-center">
        <div>
          <h2 className="text-3xl font-bold text-primary mb-6">{join.title}</h2>
          <p className="text-lg text-muted-foreground mb-8 leading-relaxed">{join.description}</p>
          <div className="space-y-4">
            {join.benefits.map((benefit, idx) => (
              <div key={idx} className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-primary rounded-full"></div>
                <span className="text-muted-foreground">{benefit}</span>
              </div>
            ))}
          </div>
        </div>

        <Card className="card-maritime">
          <CardContent className="p-8 text-center">
            <Mail className="w-16 h-16 text-primary mx-auto mb-6" />
            <h3 className="text-2xl font-bold text-primary mb-4">{join.workWithUs.title}</h3>
            <p className="text-muted-foreground mb-6 leading-relaxed">{join.workWithUs.description}</p>
            <div className="space-y-4 text-left">
              <p className="font-semibold text-primary mb-2">{join.workWithUs.areasTitle}</p>
              <div className="flex flex-wrap gap-2">
                {join.workWithUs.areasOfInterest.map((area, idx) => (
                  <span key={idx} className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm">{area}</span>
                ))}
              </div>
              {/* <button className="btn-maritime w-full">{join.workWithUs.button}</button> */}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  </section>

  {/* CTA */}
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

export default Team;
