import { Card, CardContent } from "@/components/ui/card";
import { Calendar, Target, Eye, Users, CheckCircle } from "lucide-react";
import { useTranslation } from "react-i18next";
import React from "react";

// Tipos
type TimelineItem = {
date: string;
title: string;
description: string;
};

type ValueItem = {
title: string;
description: string;
icon?: React.ComponentType<any>;
};

type TeamMember = {
role: string;
description: string;
};

const About = () => {
const { t } = useTranslation();

// Timeline
const timeline: TimelineItem[] = t("about.timeline", { returnObjects: true }) as TimelineItem[];

// Values com ícones
const rawValues = t("about.values", { returnObjects: true }) as Omit<ValueItem, "icon">[];
const icons = [Target, Users, CheckCircle];
const values: ValueItem[] = rawValues.map((v, i) => ({ ...v, icon: icons[i] }));

// Team members
const teamMembers: TeamMember[] = t("about.team.members", { returnObjects: true }) as TeamMember[];

return ( <div className="min-h-screen">
{/* Hero Section */} <section className="section-maritime bg-maritime-gray/20"> <div className="container mx-auto text-center"> <h1 className="text-4xl md:text-6xl font-bold text-primary mb-6">
{t("about.hero.title")} </h1> <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
{t("about.hero.description")} </p> </div> </section>

  {/* Company Info */}
  <section className="section-maritime">
    <div className="container mx-auto">
      <div className="grid lg:grid-cols-2 gap-12 items-center">
        <div>
          <h2 className="text-3xl font-bold text-primary mb-6">
            {t("about.history.title")}
          </h2>
          <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
            {t("about.history.paragraph1")}
          </p>
          <p className="text-lg text-muted-foreground leading-relaxed">
            {t("about.history.paragraph2")}
          </p>
        </div>
        <div className="grid gap-6">
          <Card className="card-maritime">
            <CardContent className="p-6">
              <div className="flex items-center space-x-4">
                <Target className="w-12 h-12 text-primary" />
                <div>
                  <h3 className="text-xl font-semibold text-primary mb-2">
                    {t("about.mission.title")}
                  </h3>
                  <p className="text-muted-foreground">
                    {t("about.mission.description")}
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
                  <h3 className="text-xl font-semibold text-primary mb-2">
                    {t("about.vision.title")}
                  </h3>
                  <p className="text-muted-foreground">
                    {t("about.vision.description")}
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
          {t("about.timelineTitle")}
        </h2>
        <p className="text-lg text-muted-foreground">
          {t("about.timelineSubtitle")}
        </p>
      </div>
      <div className="max-w-4xl mx-auto">
        <div className="relative">
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-primary/30 transform md:-translate-x-0.5"></div>
          {timeline.map((item, index) => (
            <div
              key={index}
              className={`relative flex items-center mb-8 ${
                index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
              }`}
            >
              <div className="absolute left-4 md:left-1/2 w-4 h-4 bg-primary rounded-full transform -translate-x-1/2 z-10">
                <div className="w-2 h-2 bg-primary-foreground rounded-full absolute top-1 left-1"></div>
              </div>
              <div
                className={`w-full md:w-1/2 ${
                  index % 2 === 0 ? "md:pr-8 ml-12 md:ml-0" : "md:pl-8 ml-12 md:ml-0"
                }`}
              >
                <Card className="card-maritime">
                  <CardContent className="p-6">
                    <div className="flex items-center space-x-2 mb-3">
                      <Calendar className="w-5 h-5 text-primary" />
                      <span className="text-sm font-semibold text-primary">{item.date}</span>
                    </div>
                    <h3 className="text-xl font-semibold text-primary mb-2">{item.title}</h3>
                    <p className="text-muted-foreground">{item.description}</p>
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
          {t("about.valuesTitle")}
        </h2>
        <p className="text-lg text-muted-foreground">
          {t("about.valuesSubtitle")}
        </p>
      </div>
      <div className="grid md:grid-cols-3 gap-8">
        {values.map((value, index) => (
          <Card key={index} className="card-maritime group">
            <CardContent className="p-8 text-center">
              {value.icon && (
                <value.icon className="w-16 h-16 text-primary mx-auto mb-6 group-hover:text-accent transition-colors duration-300" />
              )}
              <h3 className="text-xl font-semibold text-primary mb-4">{value.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{value.description}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  </section>

  {/* Team */}
  <section className="section-maritime bg-primary text-primary-foreground">
    <div className="container mx-auto text-center">
      <h2 className="text-3xl font-bold mb-6">{t("about.team.title")}</h2>
      <p className="text-xl mb-8 opacity-90 max-w-3xl mx-auto">{t("about.team.description")}</p>
      <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
        {teamMembers.map((member, index) => (
          <div key={index} className="text-center">
            <div className="w-20 h-20 bg-primary-foreground/20 rounded-full mx-auto mb-4 flex items-center justify-center">
              <Users className="w-10 h-10" />
            </div>
            <h3 className="text-lg font-semibold mb-2">{member.role}</h3>
            <p className="opacity-80">{member.description}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
</div>

);
};

export default About;
