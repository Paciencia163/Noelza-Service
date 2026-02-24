import { Card, CardContent } from "@/components/ui/card";
import {
  BarChart3,
  Ship,
  Users,
  FileCheck,
  Calendar,
  TrendingUp,
  ArrowRight,
} from "lucide-react";
import { useTranslation } from "react-i18next";
import shippingPortImage from "@/assets/shipping-port.jpg";
import { Link, useNavigate } from "react-router-dom";
import { useEffect, useRef, useState } from "react";
import { motion, useInView, useMotionValue, animate } from "framer-motion";
import { Button } from "@/components/ui/button";

const iconMap: Record<string, React.ElementType> = {
  BarChart3,
  Ship,
  Users,
  FileCheck,
  Calendar,
  TrendingUp,
};

interface Stat {
  number: string;
  label: string;
  icon: string;
  color: string;
}

interface ServiceType {
  service: string;
  count: string;
}

interface MonthlyData {
  month: string;
  ships: number;
  crew: number;
}

interface Highlight {
  icon: string;
  title: string;
  description: string;
  color?: string;
}

interface CTA {
  title: string;
  subtitle: string;
  button: string;
}

const ActivitiesPast = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/contato#form-id");
  };

  const stats2024 = t("activitiespast.stats2024", { returnObjects: true }) as Stat[];
  const serviceTypes = t("activitiespast.serviceTypes", { returnObjects: true }) as ServiceType[];
  const monthlyData = t("activitiespast.performance.monthlyData", { returnObjects: true }) as MonthlyData[];
  const highlights = t("activitiespast.highlights", { returnObjects: true }) as Highlight[];
  const cta = t("activitiespast.cta", { returnObjects: true }) as CTA;

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section
        className="relative section-maritime text-white"
        style={{
          backgroundImage: `linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.4)), url(${shippingPortImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="container mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            {t("activitiespast.hero.title")}
          </h1>
          <p className="text-xl max-w-3xl mx-auto leading-relaxed opacity-90">
            {t("activitiespast.hero.subtitle")}
          </p>
        </div>
      </section>

      {/* 2024 Statistics - AGORA COM ANIMAÇÃO */}
      <section className="section-maritime bg-maritime-gray/20">
        <div className="container mx-auto text-center mb-12">
          <h2 className="text-3xl font-bold text-primary mb-4">
            {t("activitiespast.statsTitle")}
          </h2>
          <p className="text-lg text-muted-foreground">
            {t("activitiespast.statsSubtitle")}
          </p>
        </div>
        <div className="container mx-auto grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats2024.map((stat, index) => {
            const Icon = iconMap[stat.icon];
            return (
              <AnimatedStatCard
                key={index}
                Icon={Icon}
                color={stat.color}
                label={stat.label}
                number={stat.number}
                delay={index * 0.2}
              />
            );
          })}
        </div>
      </section>

      {/* Service Breakdown */}
      <section className="section-maritime">
        <div className="container mx-auto grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold text-primary mb-6">
              {t("activitiespast.services.title")}
            </h2>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              {t("activitiespast.services.description")}
            </p>
            <div className="space-y-4">
              {serviceTypes.map((item, index) => (
                <div
                  key={index}
                  className="flex items-center justify-between p-4 bg-maritime-gray/20 rounded-lg"
                >
                  <div className="flex-1">
                    <h4 className="font-semibold text-primary">{item.service}</h4>
                    <p className="text-sm text-muted-foreground">
                      {item.count} {t("activitiespast.services.operations")}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <Card className="card-maritime">
            <CardContent className="p-8 text-center">
              <BarChart3 className="w-16 h-16 text-primary mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-primary mb-4">
                {t("activitiespast.services.cardTitle")}
              </h3>
              <p className="text-muted-foreground mb-6">
                {t("activitiespast.services.cardDescription")}
              </p>
              <div className="grid grid-cols-2 gap-4 text-center">
                <div className="p-4 bg-primary/10 rounded-lg">
                  <div className="text-2xl font-bold text-primary">{t("activitiespast.services.numberTypes")}</div>
                  <p className="text-sm text-muted-foreground">
                    {t("activitiespast.services.cardStats.types")}
                  </p>
                </div>
                <div className="p-4 bg-accent/10 rounded-lg">
                  <div className="text-2xl font-bold text-accent">24/7</div>
                  <p className="text-sm text-muted-foreground">
                    {t("activitiespast.services.cardStats.availability")}
                  </p> 
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Monthly Performance */}
      <section className="section-maritime bg-maritime-gray/20">
        <div className="container mx-auto text-center mb-12">
          <h2 className="text-3xl font-bold text-primary mb-4">
            {t("activitiespast.performance.title")}
          </h2>
          <p className="text-lg text-muted-foreground">
            {t("activitiespast.performance.subtitle")}
          </p>
        </div>
        <div className="container mx-auto grid lg:grid-cols-2 gap-12">
          {["ships", "crew"].map((type, index) => (
            <Card key={index} className="card-maritime">
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold text-primary mb-6 text-center">
                  {t(`activitiespast.performance.${type}Title`)}
                </h3>
                <div className="space-y-3">
                  {monthlyData.map((data, idx) => (
                    <div key={idx} className="flex items-center justify-between">
                      <span className="font-medium text-primary">{data.month}</span>
                      <div className="flex-1 mx-4">
                        <div className="w-full bg-maritime-gray/30 rounded-full h-2">
                          <div
                            className={`h-2 rounded-full transition-all duration-500 ${
                              type === "ships" ? "bg-primary" : "bg-accent"
                            }`}
                            style={{
                              width: `${
                                (data[type as "ships" | "crew"] /
                                  (type === "ships" ? 118 : 2034)) *
                                100
                              }%`,
                            }}
                          ></div>
                        </div>
                      </div>
                      <span className="text-sm text-muted-foreground">
                        {data[type as "ships" | "crew"]}
                      </span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Experience Highlights */}
      <section className="section-maritime">
        <div className="container mx-auto text-center mb-12">
          <h2 className="text-3xl font-bold text-primary mb-4">
            {t("activitiespast.highlightsTitle")}
          </h2>
          <p className="text-lg text-muted-foreground">
            {t("activitiespast.highlightsSubtitle")}
          </p>
        </div>
        <div className="container mx-auto grid md:grid-cols-3 gap-8">
          {highlights.map((item, index) => {
            const Icon = iconMap[item.icon];
            return (
              <Card key={index} className="card-maritime">
                <CardContent className="p-8 text-center">
                  <Icon className={`w-16 h-16 ${item.color || "text-primary"} mx-auto mb-6`} />
                  <h3 className="text-xl font-semibold text-primary mb-4">
                    {item.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {item.description}
                  </p>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </section>

      {/* CTA */}
      <section className="section-maritime bg-primary text-primary-foreground">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">{cta.title}</h2>
          <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            {cta.subtitle}
          </p>
          <button
            onClick={handleClick}
            className="btn-maritime bg-primary-foreground text-primary px-8 py-4 rounded-lg font-semibold hover:bg-primary-foreground/90 transition-colors"
          >
            {cta.button}
          </button>
        </div>
      </section>
    </div>
  );
};

export default ActivitiesPast;

/* 🔢 Componente interno para animar os números */
function AnimatedStatCard({
  Icon,
  color,
  label,
  number,
  delay = 0,
}: {
  Icon: React.ElementType;
  color: string;
  label: string;
  number: string;
  delay?: number;
}) {
  const ref = useRef<HTMLDivElement | null>(null);
  const isInView = useInView(ref, { once: true });
  const count = useMotionValue(0);
  const [displayCount, setDisplayCount] = useState(0);
  const target = parseInt(number.replace(/\D/g, ""), 10) || 0;
   const [highlight, setHighlight] = useState(false);

  useEffect(() => {
    if (isInView) {
      const controls = animate(count, target, {
        duration: 2,
        delay,
        ease: "easeOut",
        onUpdate: (v) => setDisplayCount(Math.floor(v)),
         onComplete: () => {
        // Ativa o highlight quando termina a contagem
        setHighlight(true);
        setTimeout(() => setHighlight(false), 600); // remove depois de 0.6s
      },
      });
      return controls.stop;
    }
  }, [isInView, target, delay]);

  return (
    <Card ref={ref} className="card-maritime group">
      <CardContent className="p-8 text-center">
        <Icon className={`w-16 h-16 mx-auto mb-4 ${color} group-hover:scale-110 transition-transform duration-300`} />
         <div className={`text-4xl font-bold mb-2 ${color} ${highlight ? 'animate-pulse-glow' : ''}`}>
        {/* <div className={`text-4xl font-bold mb-2 ${color}`}> */}
          {displayCount.toLocaleString()}
        </div>
        <p className="text-muted-foreground font-medium">{label}</p>
      </CardContent>
    </Card>
  );
}
