import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import {
  Bot, MessageSquare, CheckCircle2, ArrowRight,
  Shield, Users, TrendingUp, Headphones, Settings, Lock, Zap, Clock
} from "lucide-react";

export default function AgentsAutonomes() {
  const getLang = () => {
    const lang = localStorage.getItem('i18nextLng') || 'en';
    if (lang.startsWith('fr')) return 'fr';
    if (lang.startsWith('de')) return 'de';
    if (lang.startsWith('ar')) return 'ar';
    return 'en';
  };

  const lang = getLang();

  const content = {
    hero: {
      badge: {
        en: "Autonomous AI System",
        fr: "Systeme IA Autonome",
        de: "Autonomes KI-System",
        ar: "نظام ذكاء اصطناعي مستقل"
      },
      title: {
        en: "4 AI Agents",
        fr: "4 Agents IA",
        de: "4 KI-Agenten",
        ar: "4 وكلاء ذكاء اصطناعي"
      },
      subtitle: {
        en: "4 specialized AI agents working 24/7 without human intervention. Sales, Marketing, Operations and Support - all automated.",
        fr: "4 agents IA specialises travaillent 24h/24, 7j/7 sans intervention humaine. Ventes, Marketing, Operations et Support - tous automatises.",
        de: "4 spezialisierte KI-Agenten arbeiten rund um die Uhr ohne menschliches Eingreifen. Vertrieb, Marketing, Operations und Support - alles automatisiert.",
        ar: "4 وكلاء ذكاء اصطناعي متخصصين يعملون على مدار الساعة دون تدخل بشري. المبيعات والتسويق والعمليات والدعم - كلها آلية."
      }
    },
    stats: {
      items: [
        { value: "24/7", label: { en: "Active agents", fr: "Agents actifs", de: "Aktive Agenten", ar: "وكلاء نشطون" } },
        { value: "0", label: { en: "Human intervention", fr: "Intervention humaine", de: "Menschliches Eingreifen", ar: "تدخل بشري" } },
        { value: "4", label: { en: "Specialized domains", fr: "Domaines specialises", de: "Spezialisierte Bereiche", ar: "مجالات متخصصة" } },
        { value: "∞", label: { en: "Scalability", fr: "Scalabilite", de: "Skalierbarkeit", ar: "قابلية التوسع" } }
      ]
    },
    problem: {
      title: { en: "The Problem", fr: "Le Probleme", de: "Das Problem", ar: "المشكلة" },
      items: [
        { en: "Teams overwhelmed by repetitive tasks", fr: "Equipes submergees par les taches repetitives", de: "Teams uberfordert mit sich wiederholenden Aufgaben", ar: "فرق مثقلة بالمهام المتكررة" },
        { en: "Inconsistent response times and quality", fr: "Temps de reponse et qualite inconsistants", de: "Inkonsistente Antwortzeiten und Qualitat", ar: "أوقات استجابة وجودة غير متسقة" },
        { en: "High operational costs for 24/7 coverage", fr: "Couts operationnels eleves pour couverture 24/7", de: "Hohe Betriebskosten fur 24/7-Abdeckung", ar: "تكاليف تشغيلية عالية للتغطية على مدار الساعة" }
      ]
    },
    agents: {
      title: { en: "4 Active Agents in Real-Time", fr: "4 Agents Actifs en Temps Reel", de: "4 Aktive Agenten in Echtzeit", ar: "4 وكلاء نشطون في الوقت الفعلي" },
      items: [
        {
          icon: TrendingUp,
          color: "from-green-500 to-emerald-600",
          title: { en: "Sales Agent", fr: "Agent Ventes", de: "Vertriebsagent", ar: "وكيل المبيعات" },
          tagline: { en: "Automatic lead qualification", fr: "Qualification leads automatique", de: "Automatische Lead-Qualifizierung", ar: "تأهيل العملاء المحتملين تلقائيًا" },
          features: [
            { en: "Automatic lead scoring and qualification", fr: "Scoring et qualification leads automatique", de: "Automatisches Lead-Scoring und Qualifizierung", ar: "تقييم وتأهيل العملاء المحتملين تلقائيًا" },
            { en: "Personalized follow-up sequences", fr: "Sequences de suivi personnalisees", de: "Personalisierte Follow-up-Sequenzen", ar: "تسلسلات متابعة مخصصة" },
            { en: "CRM integration and updates", fr: "Integration et mise a jour CRM", de: "CRM-Integration und Updates", ar: "تكامل وتحديث CRM" },
            { en: "Intelligent meeting scheduling", fr: "Planification reunions intelligente", de: "Intelligente Terminplanung", ar: "جدولة اجتماعات ذكية" }
          ]
        },
        {
          icon: Users,
          color: "from-purple-500 to-indigo-600",
          title: { en: "Marketing Agent", fr: "Agent Marketing", de: "Marketing-Agent", ar: "وكيل التسويق" },
          tagline: { en: "Personalized campaigns", fr: "Campagnes personnalisees", de: "Personalisierte Kampagnen", ar: "حملات مخصصة" },
          features: [
            { en: "AI-generated content creation", fr: "Creation contenu generee par IA", de: "KI-generierte Inhaltserstellung", ar: "إنشاء محتوى بالذكاء الاصطناعي" },
            { en: "Multi-channel campaign automation", fr: "Automatisation campagnes multi-canal", de: "Multi-Channel-Kampagnenautomatisierung", ar: "أتمتة الحملات متعددة القنوات" },
            { en: "Audience segmentation and targeting", fr: "Segmentation et ciblage audience", de: "Zielgruppensegmentierung und Targeting", ar: "تقسيم الجمهور واستهدافه" },
            { en: "Performance analytics and optimization", fr: "Analytics et optimisation performance", de: "Leistungsanalyse und Optimierung", ar: "تحليلات الأداء والتحسين" }
          ]
        },
        {
          icon: Settings,
          color: "from-orange-500 to-red-600",
          title: { en: "Operations Agent", fr: "Agent Operations", de: "Operations-Agent", ar: "وكيل العمليات" },
          tagline: { en: "Optimized workflows", fr: "Workflows optimises", de: "Optimierte Workflows", ar: "سير عمل محسن" },
          features: [
            { en: "Automated workflow orchestration", fr: "Orchestration workflows automatisee", de: "Automatisierte Workflow-Orchestrierung", ar: "تنسيق سير العمل الآلي" },
            { en: "Resource allocation optimization", fr: "Optimisation allocation ressources", de: "Ressourcenzuweisungsoptimierung", ar: "تحسين تخصيص الموارد" },
            { en: "Process monitoring and alerts", fr: "Monitoring processus et alertes", de: "Prozessuberwachung und Warnungen", ar: "مراقبة العمليات والتنبيهات" },
            { en: "Predictive maintenance scheduling", fr: "Planification maintenance predictive", de: "Vorausschauende Wartungsplanung", ar: "جدولة الصيانة التنبؤية" }
          ]
        },
        {
          icon: Headphones,
          color: "from-blue-500 to-cyan-600",
          title: { en: "Support Agent", fr: "Agent Support", de: "Support-Agent", ar: "وكيل الدعم" },
          tagline: { en: "Instant responses", fr: "Reponses instantanees", de: "Sofortige Antworten", ar: "ردود فورية" },
          features: [
            { en: "24/7 instant customer responses", fr: "Reponses clients instantanees 24/7", de: "24/7 sofortige Kundenantworten", ar: "ردود فورية للعملاء على مدار الساعة" },
            { en: "Multi-language support", fr: "Support multi-langue", de: "Mehrsprachiger Support", ar: "دعم متعدد اللغات" },
            { en: "Ticket routing and prioritization", fr: "Routage et priorisation tickets", de: "Ticket-Routing und Priorisierung", ar: "توجيه التذاكر وتحديد الأولويات" },
            { en: "Knowledge base auto-learning", fr: "Auto-apprentissage base connaissances", de: "Wissensdatenbank Auto-Learning", ar: "التعلم التلقائي لقاعدة المعرفة" }
          ]
        }
      ]
    },
    stack: {
      title: { en: "Technical Architecture", fr: "Architecture Technique", de: "Technische Architektur", ar: "البنية التقنية" },
      items: [
        { label: "AI Core", value: "GPT-4 Turbo + Advanced AI + Custom LLMs" },
        { label: "Orchestration", value: "LangChain + LangGraph + AutoGen" },
        { label: "Backend", value: "FastAPI + Celery + Redis" },
        { label: "Integration", value: "REST API + Webhooks + Zapier" },
        { label: "Monitoring", value: "Prometheus + Grafana + PagerDuty" }
      ]
    },
    benefits: {
      title: { en: "Key Benefits", fr: "Avantages Cles", de: "Hauptvorteile", ar: "الفوائد الرئيسية" },
      items: [
        { icon: Clock, title: { en: "24/7 Availability", fr: "Disponibilite 24/7", de: "24/7 Verfugbarkeit", ar: "توفر على مدار الساعة" }, desc: { en: "Never miss a lead or customer request", fr: "Ne manquez jamais un lead ou une demande client", de: "Verpassen Sie nie einen Lead oder eine Kundenanfrage", ar: "لا تفوت أي عميل محتمل أو طلب عميل" } },
        { icon: Zap, title: { en: "Instant Response", fr: "Reponse Instantanee", de: "Sofortige Antwort", ar: "استجابة فورية" }, desc: { en: "Sub-second response times", fr: "Temps de reponse inferieur a la seconde", de: "Antwortzeiten unter einer Sekunde", ar: "أوقات استجابة أقل من ثانية" } },
        { icon: TrendingUp, title: { en: "Scalable", fr: "Evolutif", de: "Skalierbar", ar: "قابل للتطوير" }, desc: { en: "Handle unlimited concurrent requests", fr: "Gerez un nombre illimite de requetes simultanees", de: "Unbegrenzte gleichzeitige Anfragen verarbeiten", ar: "معالجة طلبات متزامنة غير محدودة" } },
        { icon: Shield, title: { en: "Consistent Quality", fr: "Qualite Constante", de: "Konstante Qualitat", ar: "جودة ثابتة" }, desc: { en: "Same high standard every interaction", fr: "Meme standard eleve a chaque interaction", de: "Gleicher hoher Standard bei jeder Interaktion", ar: "نفس المعيار العالي في كل تفاعل" } }
      ]
    },
    security: {
      title: { en: "Enterprise Security", fr: "Securite Enterprise", de: "Enterprise-Sicherheit", ar: "أمان المؤسسات" },
      items: [
        { en: "End-to-end encryption (AES-256)", fr: "Chiffrement bout-en-bout (AES-256)", de: "Ende-zu-Ende-Verschlusselung (AES-256)", ar: "تشفير من طرف إلى طرف" },
        { en: "SOC 2 Type II compliant", fr: "Conforme SOC 2 Type II", de: "SOC 2 Type II konform", ar: "متوافق مع SOC 2 Type II" },
        { en: "GDPR compliant data handling", fr: "Traitement donnees conforme RGPD", de: "DSGVO-konforme Datenverarbeitung", ar: "معالجة بيانات متوافقة مع GDPR" },
        { en: "Role-based access control", fr: "Controle d'acces base sur les roles", de: "Rollenbasierte Zugriffskontrolle", ar: "التحكم في الوصول القائم على الدور" },
        { en: "Audit logs and compliance reports", fr: "Logs d'audit et rapports conformite", de: "Audit-Protokolle und Compliance-Berichte", ar: "سجلات التدقيق وتقارير الامتثال" }
      ]
    },
    roi: {
      title: { en: "Measurable ROI", fr: "ROI Mesurable", de: "Messbarer ROI", ar: "عائد استثمار قابل للقياس" },
      metrics: [
        { label: { en: "Response time", fr: "Temps de reponse", de: "Antwortzeit", ar: "وقت الاستجابة" }, before: "4h", after: "<1s", change: "-99%" },
        { label: { en: "Lead conversion", fr: "Conversion leads", de: "Lead-Konvertierung", ar: "تحويل العملاء" }, before: "12%", after: "34%", change: "+183%" },
        { label: { en: "Support tickets", fr: "Tickets support", de: "Support-Tickets", ar: "تذاكر الدعم" }, before: "500/day", after: "50/day", change: "-90%" },
        { label: { en: "Operational cost", fr: "Cout operationnel", de: "Betriebskosten", ar: "التكلفة التشغيلية" }, before: "€15K/mo", after: "€2K/mo", change: "-87%" }
      ]
    },
    pricing: {
      title: { en: "Definitive Sale", fr: "Vente Definitive", de: "Endgultiger Verkauf", ar: "بيع نهائي" },
      subtitle: { en: "One-time purchase - Full ownership", fr: "Achat unique - Propriete complete", de: "Einmaliger Kauf - Vollstandiges Eigentum", ar: "شراء لمرة واحدة - ملكية كاملة" },
      includes: [
        { en: "Complete source code", fr: "Code source complet", de: "Vollstandiger Quellcode", ar: "الكود المصدري الكامل" },
        { en: "All 4 AI agents configured", fr: "4 agents IA configures", de: "Alle 4 KI-Agenten konfiguriert", ar: "جميع الوكلاء الأربعة مُعدون" },
        { en: "Full documentation", fr: "Documentation complete", de: "Vollstandige Dokumentation", ar: "التوثيق الكامل" },
        { en: "Deployment support", fr: "Support deploiement", de: "Deployment-Unterstutzung", ar: "دعم النشر" },
        { en: "30 days assistance", fr: "30 jours d'assistance", de: "30 Tage Unterstutzung", ar: "30 يوم مساعدة" },
        { en: "Commercial license", fr: "Licence commerciale", de: "Kommerzielle Lizenz", ar: "رخصة تجارية" }
      ]
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />

      {/* Hero */}
      <section className="pt-32 pb-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-emerald-900 via-teal-900 to-slate-900 text-white">
        <div className="container mx-auto text-center">
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full text-sm font-medium mb-6">
            <Bot className="w-4 h-4" />
            {content.hero.badge[lang as keyof typeof content.hero.badge]}
          </div>
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-white via-emerald-200 to-teal-200 bg-clip-text text-transparent">
            {content.hero.title[lang as keyof typeof content.hero.title]}
          </h1>
          <p className="text-xl text-emerald-100 max-w-3xl mx-auto mb-8">
            {content.hero.subtitle[lang as keyof typeof content.hero.subtitle]}
          </p>
          <Button size="lg" className="bg-white text-emerald-900 hover:bg-emerald-100" asChild>
            <a href="https://wa.me/4368120460618" target="_blank" rel="noopener noreferrer">
              <MessageSquare className="mr-2 w-5 h-5" />
              {lang === 'fr' ? 'Demander une Demo' : lang === 'de' ? 'Demo anfordern' : lang === 'ar' ? 'طلب عرض توضيحي' : 'Request Demo'}
            </a>
          </Button>
        </div>
      </section>

      {/* Stats */}
      <section className="py-8 px-4 sm:px-6 lg:px-8 bg-slate-100 dark:bg-slate-800">
        <div className="container mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
            {content.stats.items.map((stat, idx) => (
              <Card key={idx} className="text-center">
                <CardContent className="pt-6">
                  <div className="text-4xl font-bold text-primary">{stat.value}</div>
                  <div className="text-sm text-muted-foreground">{stat.label[lang as keyof typeof stat.label]}</div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Problem */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-red-50 dark:bg-red-950/20">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center mb-8 text-red-600">
            {content.problem.title[lang as keyof typeof content.problem.title]}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {content.problem.items.map((item, idx) => (
              <Card key={idx} className="border-red-200 dark:border-red-800">
                <CardContent className="pt-6 text-center">
                  <div className="w-12 h-12 bg-red-100 dark:bg-red-900 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl font-bold text-red-600">{idx + 1}</span>
                  </div>
                  <p className="text-muted-foreground">{item[lang as keyof typeof item]}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* 4 Agents */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">
            {content.agents.title[lang as keyof typeof content.agents.title]}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {content.agents.items.map((agent, idx) => (
              <Card key={idx} className="overflow-hidden hover:shadow-xl transition-shadow">
                <div className={`bg-gradient-to-r ${agent.color} p-4 text-white`}>
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center">
                      <agent.icon className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold">{agent.title[lang as keyof typeof agent.title]}</h3>
                      <p className="text-sm opacity-90">{agent.tagline[lang as keyof typeof agent.tagline]}</p>
                    </div>
                  </div>
                </div>
                <CardContent className="pt-6">
                  <ul className="space-y-2">
                    {agent.features.map((feature, i) => (
                      <li key={i} className="flex items-start gap-2 text-sm">
                        <CheckCircle2 className="w-4 h-4 text-green-500 mt-0.5 shrink-0" />
                        <span>{feature[lang as keyof typeof feature]}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Tech Stack */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-slate-900 text-white">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center mb-8">
            {content.stack.title[lang as keyof typeof content.stack.title]}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-5 gap-4 max-w-5xl mx-auto">
            {content.stack.items.map((item, idx) => (
              <Card key={idx} className="bg-slate-800 border-slate-700">
                <CardContent className="pt-6 text-center">
                  <div className="text-xs text-slate-400 mb-2">{item.label}</div>
                  <div className="text-sm font-mono text-green-400">{item.value}</div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">
            {content.benefits.title[lang as keyof typeof content.benefits.title]}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
            {content.benefits.items.map((benefit, idx) => (
              <Card key={idx} className="text-center hover:shadow-lg transition-shadow">
                <CardContent className="pt-6">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <benefit.icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="font-bold mb-2">{benefit.title[lang as keyof typeof benefit.title]}</h3>
                  <p className="text-sm text-muted-foreground">{benefit.desc[lang as keyof typeof benefit.desc]}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Security */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-green-50 dark:bg-green-950/20">
        <div className="container mx-auto">
          <div className="flex items-center justify-center gap-3 mb-8">
            <Shield className="w-8 h-8 text-green-600" />
            <h2 className="text-3xl font-bold text-green-600">
              {content.security.title[lang as keyof typeof content.security.title]}
            </h2>
          </div>
          <div className="flex flex-wrap justify-center gap-4 max-w-4xl mx-auto">
            {content.security.items.map((item, idx) => (
              <div key={idx} className="flex items-center gap-2 bg-white dark:bg-slate-800 px-4 py-3 rounded-lg shadow-sm">
                <Lock className="w-4 h-4 text-green-600" />
                <span className="text-sm">{item[lang as keyof typeof item]}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ROI */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center mb-8">
            {content.roi.title[lang as keyof typeof content.roi.title]}
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
            {content.roi.metrics.map((metric, idx) => (
              <Card key={idx} className="text-center">
                <CardContent className="pt-6">
                  <div className="text-sm text-muted-foreground mb-2">
                    {metric.label[lang as keyof typeof metric.label]}
                  </div>
                  <div className="flex items-center justify-center gap-2 mb-2">
                    <span className="text-lg text-red-500 line-through">{metric.before}</span>
                    <ArrowRight className="w-4 h-4" />
                    <span className="text-lg font-bold text-green-600">{metric.after}</span>
                  </div>
                  <div className="text-2xl font-bold text-primary">{metric.change}</div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing - 10,000€ Definitive Sale */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-emerald-900 via-teal-900 to-slate-900 text-white">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center mb-4">
            {content.pricing.title[lang as keyof typeof content.pricing.title]}
          </h2>
          <div className="max-w-xl mx-auto">
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 text-center">
              <div className="text-7xl font-bold text-white mb-2">10,000€</div>
              <p className="text-emerald-200 text-lg mb-8">
                {content.pricing.subtitle[lang as keyof typeof content.pricing.subtitle]}
              </p>
              <div className="border-t border-white/20 pt-6">
                <ul className="space-y-3 text-left max-w-xs mx-auto">
                  {content.pricing.includes.map((item, idx) => (
                    <li key={idx} className="flex items-center gap-2 text-emerald-100">
                      <CheckCircle2 className="w-5 h-5 text-green-400 shrink-0" />
                      {item[lang as keyof typeof item]}
                    </li>
                  ))}
                </ul>
              </div>
              <Button size="lg" className="mt-8 bg-white text-emerald-900 hover:bg-emerald-100 w-full" asChild>
                <a href="https://wa.me/4368120460618" target="_blank" rel="noopener noreferrer">
                  <MessageSquare className="mr-2 w-5 h-5" />
                  {lang === 'fr' ? 'Contacter pour Acheter' : lang === 'de' ? 'Kontakt zum Kauf' : lang === 'ar' ? 'تواصل للشراء' : 'Contact to Buy'}
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
