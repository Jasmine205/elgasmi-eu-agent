import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { useTranslation } from "react-i18next";
import {
  ArrowRight,
  Bot,
  Brain,
  CheckCircle2,
  Database,
  Mail,
  MessageSquare,
  Rocket,
  Shield,
  Sparkles,
  Zap,
} from "lucide-react";

export default function Vente() {
  const { t } = useTranslation();
  const whatsappNumber = "4368120460618";

  const solutions = [
    {
      id: 1,
      title: t('vente.offer1Title', 'Systeme Multi-Agents'),
      subtitle: t('vente.offer1Subtitle', 'Automatisation Complete'),
      description: t('vente.offer1Desc', '4 agents IA specialises qui travaillent ensemble pour automatiser ventes, marketing, operations et support.'),
      icon: Bot,
      color: "blue",
      price: "10 000 EUR",
      features: [
        t('pitch.agentSales', 'Agent Ventes'),
        t('pitch.agentMarketing', 'Agent Marketing'),
        t('pitch.agentOperations', 'Agent Operations'),
        t('pitch.agentSupport', 'Agent Support'),
      ],
      metrics: [
        { value: "+340%", label: "Conversion" },
        { value: "-70%", label: "Couts" },
        { value: "24/7", label: "Actif" },
      ],
    },
    {
      id: 2,
      title: t('vente.offer2Title', 'Plateforme RAG'),
      subtitle: t('vente.offer2Subtitle', 'Assistant Intelligent'),
      description: t('vente.offer2Desc', 'Plateforme complete avec 28+ outils integres: communication, productivite, IA et analytics.'),
      icon: Database,
      color: "purple",
      price: "10 000 EUR",
      features: [
        "Gmail, Slack, WhatsApp",
        "OCR & Image Analysis",
        "RAG & Claude AI",
        "CRM Integration",
      ],
      metrics: [
        { value: "-70%", label: "Admin Time" },
        { value: "+50%", label: "Productivite" },
        { value: "28+", label: "Outils" },
      ],
    },
    {
      id: 3,
      title: t('vente.offer3Title', 'IA Enterprise'),
      subtitle: t('vente.offer3Subtitle', 'Code & Securite'),
      description: t('vente.offer3Desc', 'Generation de code avec 18+ frameworks, auto-correction avancee et architecture securisee.'),
      icon: Brain,
      color: "orange",
      price: "10 000 EUR",
      features: [
        "18+ Frameworks",
        "Auto-Correction IA",
        "AES-256 + JWT",
        "10,000+ req/sec",
      ],
      metrics: [
        { value: "-70%", label: "Dev Time" },
        { value: "0", label: "Bugs Prod" },
        { value: "3x", label: "Plus Rapide" },
      ],
    },
  ];

  const colorClasses: Record<string, { bg: string; text: string; border: string; gradient: string; gradientBg: string }> = {
    blue: { bg: "bg-blue-500/10", text: "text-blue-500", border: "hover:border-blue-500", gradient: "from-blue-500 to-cyan-500", gradientBg: "from-blue-500/0 to-blue-500/10" },
    purple: { bg: "bg-purple-500/10", text: "text-purple-500", border: "hover:border-purple-500", gradient: "from-purple-500 to-pink-500", gradientBg: "from-purple-500/0 to-purple-500/10" },
    orange: { bg: "bg-orange-500/10", text: "text-orange-500", border: "hover:border-orange-500", gradient: "from-orange-500 to-red-500", gradientBg: "from-orange-500/0 to-orange-500/10" },
  };

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />

      {/* Hero Section */}
      <section className="pt-32 pb-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-background via-primary/5 to-background">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto text-center">
            <Badge className="mb-6 gradient-primary">
              <Sparkles className="w-4 h-4 mr-2" />
              {t('vente.badge', 'Solutions Premium')}
            </Badge>
            <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-6">
              {t('vente.title', 'Transformez Votre')}
              <br />
              <span className="text-primary">{t('vente.titleHighlight', 'Business avec l\'IA')}</span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              {t('vente.intro', 'Solutions cles en main pour automatiser et optimiser vos operations')}
            </p>
          </div>
        </div>
      </section>

      {/* 3 Solutions - Horizontal Grid */}
      <section id="offers" className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto">
          <div className="grid grid-cols-3 gap-8">
            {solutions.map((solution) => {
              const Icon = solution.icon;
              const colors = colorClasses[solution.color];

              return (
                <Card
                  key={solution.id}
                  className={`group relative border-2 border-border ${colors.border} hover:shadow-2xl hover:-translate-y-3 transition-all duration-500 overflow-hidden`}
                >
                  {/* Top Gradient Bar */}
                  <div className={`h-2 bg-gradient-to-r ${colors.gradient}`} />

                  {/* Hover Gradient Overlay */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${colors.gradientBg} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />

                  <CardContent className="p-8 relative z-10">
                    {/* Icon & Price */}
                    <div className="flex items-start justify-between mb-6">
                      <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${colors.gradient} flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                        <Icon className="w-8 h-8 text-white" />
                      </div>
                      <div className="text-right">
                        <div className="text-2xl font-bold text-primary">{solution.price}</div>
                        <div className="text-xs text-muted-foreground">{t('vente.definitiveSale', 'Vente definitive')}</div>
                      </div>
                    </div>

                    {/* Title & Description */}
                    <h3 className={`text-xl font-bold text-foreground mb-2 group-hover:${colors.text} transition-colors`}>
                      {solution.title}
                    </h3>
                    <p className={`text-sm ${colors.text} font-medium mb-4`}>{solution.subtitle}</p>
                    <p className="text-sm text-muted-foreground mb-6 leading-relaxed">
                      {solution.description}
                    </p>

                    {/* Features */}
                    <div className="space-y-2 mb-6">
                      {solution.features.map((feature, idx) => (
                        <div key={idx} className="flex items-center gap-2 group/item">
                          <CheckCircle2 className={`w-4 h-4 ${colors.text} group-hover/item:scale-110 transition-transform`} />
                          <span className="text-sm text-muted-foreground group-hover/item:text-foreground transition-colors">{feature}</span>
                        </div>
                      ))}
                    </div>

                    {/* Metrics - 3 columns */}
                    <div className="grid grid-cols-3 gap-3 mb-6">
                      {solution.metrics.map((metric, idx) => (
                        <div key={idx} className={`text-center p-3 rounded-xl ${colors.bg} group-hover:scale-105 transition-transform duration-300`}>
                          <div className={`text-xl font-bold ${colors.text}`}>{metric.value}</div>
                          <div className="text-xs text-muted-foreground">{metric.label}</div>
                        </div>
                      ))}
                    </div>

                    {/* CTA Button */}
                    <Button className={`w-full bg-gradient-to-r ${colors.gradient} hover:opacity-90 text-white`} asChild>
                      <a href={`https://wa.me/${whatsappNumber}`} target="_blank" rel="noopener noreferrer">
                        {t('vente.orderOffer', 'Commander')}
                        <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                      </a>
                    </Button>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Security Badges */}
      <section className="py-12 px-4 sm:px-6 lg:px-8 bg-card border-y border-border">
        <div className="container mx-auto">
          <div className="flex flex-wrap justify-center items-center gap-6">
            {["AES-256", "GDPR", "SOC 2 Type II", "ISO 27001"].map((badge) => (
              <div key={badge} className="group flex items-center gap-2 px-6 py-3 bg-primary/5 rounded-full hover:bg-primary/10 transition-colors cursor-pointer">
                <Shield className="w-5 h-5 text-primary group-hover:scale-110 transition-transform" />
                <span className="font-medium text-foreground">{badge}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-primary/10 via-background to-primary/5">
        <div className="container mx-auto">
          <div className="max-w-3xl mx-auto text-center">
            <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-8 hover:scale-110 transition-transform cursor-pointer">
              <Rocket className="w-10 h-10 text-primary" />
            </div>
            <h2 className="text-4xl font-bold text-foreground mb-4">
              {t('vente.ctaTitle', 'Pret a Transformer Votre Business?')}
            </h2>
            <p className="text-xl text-muted-foreground mb-8">
              {t('vente.ctaDesc', 'Contactez-nous pour un audit gratuit et decouvrez le potentiel de l\'IA')}
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button size="lg" className="gradient-primary" asChild>
                <a href={`https://wa.me/${whatsappNumber}`} target="_blank" rel="noopener noreferrer">
                  <MessageSquare className="mr-2 w-5 h-5" />
                  WhatsApp
                </a>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <a href="mailto:asmaewarter5@gmail.com">
                  <Mail className="mr-2 w-5 h-5" />
                  Email
                </a>
              </Button>
            </div>
            <p className="text-2xl font-bold text-primary mt-12">
              "{t('pitch.slogan', 'L\'IA travaille pendant que vous dormez')}"
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
