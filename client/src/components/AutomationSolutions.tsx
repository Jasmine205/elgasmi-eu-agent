import { Badge } from "@/components/ui/badge";
import { CheckCircle2, Zap, TrendingUp, Shield } from "lucide-react";
import { useTranslation } from "react-i18next";

export default function AutomationSolutions() {
  const { t } = useTranslation();

  const solutions = [
    {
      title: t('automation.solution1Title', 'Automatisation des Processus'),
      description: t('automation.solution1Desc', 'Transformez vos operations manuelles en flux automatises intelligents'),
      icon: Zap,
      color: "blue",
      benefits: [
        t('automation.solution1Benefit1', 'Reduction des erreurs humaines de 95%'),
        t('automation.solution1Benefit2', 'Traitement 24/7 sans interruption'),
        t('automation.solution1Benefit3', 'ROI visible des le premier mois'),
      ],
      metric: { value: "85%", label: t('automation.efficiency', 'Efficacite') },
    },
    {
      title: t('automation.solution2Title', 'Detection d\'Anomalies'),
      description: t('automation.solution2Desc', 'IA predictive pour identifier les problemes avant qu\'ils ne surviennent'),
      icon: TrendingUp,
      color: "purple",
      benefits: [
        t('automation.solution2Benefit1', 'Detection en temps reel < 100ms'),
        t('automation.solution2Benefit2', 'Precision de 99.8% garantie'),
        t('automation.solution2Benefit3', 'Alertes intelligentes contextuelles'),
      ],
      metric: { value: "99.8%", label: t('automation.accuracy', 'Precision') },
    },
    {
      title: t('automation.solution3Title', 'Securite Proactive'),
      description: t('automation.solution3Desc', 'Protection avancee avec reponse automatique aux menaces'),
      icon: Shield,
      color: "green",
      benefits: [
        t('automation.solution3Benefit1', 'Surveillance continue 24/7'),
        t('automation.solution3Benefit2', 'Reponse automatique < 1 seconde'),
        t('automation.solution3Benefit3', 'Zero-trust architecture'),
      ],
      metric: { value: "99.9%", label: t('automation.detection', 'Detection') },
    },
  ];

  const colorClasses: Record<string, { bg: string; text: string; border: string; gradient: string }> = {
    blue: { bg: "bg-blue-500/10", text: "text-blue-500", border: "hover:border-blue-500", gradient: "from-blue-500/0 to-blue-500/10" },
    purple: { bg: "bg-purple-500/10", text: "text-purple-500", border: "hover:border-purple-500", gradient: "from-purple-500/0 to-purple-500/10" },
    green: { bg: "bg-green-500/10", text: "text-green-500", border: "hover:border-green-500", gradient: "from-green-500/0 to-green-500/10" },
  };

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-background via-accent/5 to-background">
      <div className="container mx-auto">
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <Badge className="mb-4 gradient-primary">{t('automation.badge', 'Solutions IA')}</Badge>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            {t('automation.title', 'Automatisation Intelligente')}
          </h2>
          <p className="text-xl text-muted-foreground">
            {t('automation.description', 'Nos solutions d\'automatisation transforment vos operations')}
          </p>
        </div>

        {/* 3 Solutions Cards - Horizontal */}
        <div className="grid grid-cols-3 gap-8 mb-20">
          {solutions.map((solution, index) => {
            const Icon = solution.icon;
            const colors = colorClasses[solution.color];

            return (
              <div
                key={index}
                className={`group relative bg-card rounded-2xl p-8 border-2 border-border ${colors.border} hover:shadow-2xl hover:-translate-y-3 transition-all duration-500 cursor-pointer overflow-hidden`}
              >
                {/* Gradient overlay */}
                <div className={`absolute inset-0 bg-gradient-to-br ${colors.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />

                <div className="relative z-10">
                  {/* Icon & Metric */}
                  <div className="flex items-start justify-between mb-6">
                    <div className={`w-16 h-16 ${colors.bg} rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                      <Icon className={`w-8 h-8 ${colors.text}`} />
                    </div>
                    <div className="text-right">
                      <div className={`text-3xl font-bold ${colors.text}`}>{solution.metric.value}</div>
                      <div className="text-xs text-muted-foreground">{solution.metric.label}</div>
                    </div>
                  </div>

                  {/* Title & Description */}
                  <h3 className={`text-xl font-bold text-foreground mb-3 group-hover:${colors.text} transition-colors`}>
                    {solution.title}
                  </h3>
                  <p className="text-muted-foreground text-sm mb-6 leading-relaxed">
                    {solution.description}
                  </p>

                  {/* Benefits */}
                  <ul className="space-y-3">
                    {solution.benefits.map((benefit, idx) => (
                      <li key={idx} className="flex items-start gap-3 group/item">
                        <CheckCircle2 className={`w-5 h-5 ${colors.text} mt-0.5 flex-shrink-0 group-hover/item:scale-110 transition-transform`} />
                        <span className="text-sm text-muted-foreground group-hover/item:text-foreground transition-colors">
                          {benefit}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            );
          })}
        </div>

        {/* Principes Fondamentaux - 3 blocs horizontaux avec hover explicatif */}
        <div className="bg-gradient-to-br from-primary/5 via-background to-primary/10 rounded-3xl p-10 border border-primary/20 animate-fade-in-up">
          <h3 className="text-3xl font-bold text-foreground mb-10 text-center">
            {t('automation.principles', 'Principes Fondamentaux')}
          </h3>
          <div className="grid grid-cols-3 gap-8 stagger-children">
            {/* Scalabilite Infinie */}
            <div className="group bg-card rounded-3xl p-8 border-2 border-border hover:shadow-2xl hover:border-blue-500 hover:-translate-y-4 transition-all duration-500 cursor-pointer text-center relative overflow-hidden hover-lift ripple-effect">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/0 via-blue-500/5 to-blue-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-blue-500 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500" />
              <div className="absolute -top-20 -right-20 w-40 h-40 bg-blue-500/10 rounded-full blur-3xl group-hover:bg-blue-500/30 transition-all duration-700" />
              <div className="relative z-10">
                <div className="w-20 h-20 bg-blue-500/10 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-blue-500/20 group-hover:scale-110 group-hover:rotate-12 transition-all duration-500 border-2 border-blue-500/30 group-hover:border-blue-500">
                  <span className="text-4xl group-hover:animate-pulse">∞</span>
                </div>
                <h4 className="font-bold text-xl text-foreground mb-3 group-hover:text-blue-500 transition-colors">
                  {t('automation.infiniteScalability', 'Scalabilite Infinie')}
                </h4>
                <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                  {t('automation.infiniteScalabilityDesc', 'Architecture elastique qui s\'adapte automatiquement a la charge.')}
                </p>
                {/* Hover details */}
                <div className="opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-y-4 group-hover:translate-y-0">
                  <div className="bg-blue-500/10 rounded-xl p-4 border border-blue-500/30">
                    <ul className="text-xs text-left space-y-2">
                      <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-blue-500" /><span>Auto-scaling horizontal</span></li>
                      <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-blue-500" /><span>Load balancing intelligent</span></li>
                      <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-blue-500" /><span>10M+ utilisateurs supportes</span></li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            {/* Temps Reel */}
            <div className="group bg-card rounded-3xl p-8 border-2 border-border hover:shadow-2xl hover:border-yellow-500 hover:-translate-y-4 transition-all duration-500 cursor-pointer text-center relative overflow-hidden hover-lift ripple-effect">
              <div className="absolute inset-0 bg-gradient-to-br from-yellow-500/0 via-yellow-500/5 to-yellow-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-yellow-500 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500" />
              <div className="absolute -top-20 -right-20 w-40 h-40 bg-yellow-500/10 rounded-full blur-3xl group-hover:bg-yellow-500/30 transition-all duration-700" />
              <div className="relative z-10">
                <div className="w-20 h-20 bg-yellow-500/10 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-yellow-500/20 group-hover:scale-110 group-hover:rotate-12 transition-all duration-500 border-2 border-yellow-500/30 group-hover:border-yellow-500">
                  <Zap className="w-10 h-10 text-yellow-500 group-hover:animate-pulse" />
                </div>
                <h4 className="font-bold text-xl text-foreground mb-3 group-hover:text-yellow-500 transition-colors">
                  {t('automation.realtime', 'Temps Reel')}
                </h4>
                <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                  {t('automation.realtimeDesc', 'Latence inferieure a 50ms pour toutes les operations.')}
                </p>
                {/* Hover details */}
                <div className="opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-y-4 group-hover:translate-y-0">
                  <div className="bg-yellow-500/10 rounded-xl p-4 border border-yellow-500/30">
                    <ul className="text-xs text-left space-y-2">
                      <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-yellow-500" /><span>WebSocket bidirectionnel</span></li>
                      <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-yellow-500" /><span>Event-driven architecture</span></li>
                      <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-yellow-500" /><span>Cache distribue Redis</span></li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            {/* Intelligence Adaptive */}
            <div className="group bg-card rounded-3xl p-8 border-2 border-border hover:shadow-2xl hover:border-purple-500 hover:-translate-y-4 transition-all duration-500 cursor-pointer text-center relative overflow-hidden hover-lift ripple-effect">
              <div className="absolute inset-0 bg-gradient-to-br from-purple-500/0 via-purple-500/5 to-purple-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-purple-500 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500" />
              <div className="absolute -top-20 -right-20 w-40 h-40 bg-purple-500/10 rounded-full blur-3xl group-hover:bg-purple-500/30 transition-all duration-700" />
              <div className="relative z-10">
                <div className="w-20 h-20 bg-purple-500/10 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-purple-500/20 group-hover:scale-110 group-hover:rotate-12 transition-all duration-500 border-2 border-purple-500/30 group-hover:border-purple-500">
                  <TrendingUp className="w-10 h-10 text-purple-500 group-hover:animate-pulse" />
                </div>
                <h4 className="font-bold text-xl text-foreground mb-3 group-hover:text-purple-500 transition-colors">
                  {t('automation.adaptiveIntelligence', 'Intelligence Adaptive')}
                </h4>
                <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                  {t('automation.adaptiveIntelligenceDesc', 'Apprentissage continu qui ameliore les performances.')}
                </p>
                {/* Hover details */}
                <div className="opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-y-4 group-hover:translate-y-0">
                  <div className="bg-purple-500/10 rounded-xl p-4 border border-purple-500/30">
                    <ul className="text-xs text-left space-y-2">
                      <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-purple-500" /><span>Machine Learning integre</span></li>
                      <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-purple-500" /><span>Auto-optimisation continue</span></li>
                      <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-purple-500" /><span>Predictions predictives IA</span></li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
