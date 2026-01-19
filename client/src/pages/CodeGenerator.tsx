import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import {
  Zap, MessageSquare, CheckCircle2, ArrowRight,
  Shield, Code, Cpu, GitBranch, Terminal, Lock, Layers
} from "lucide-react";

export default function CodeGenerator() {
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
        en: "Enterprise AI Code Generator",
        fr: "Generateur de Code IA Enterprise",
        de: "Enterprise KI-Code-Generator",
        ar: "مولد كود ذكاء اصطناعي للمؤسسات"
      },
      title: "18+ Frameworks",
      subtitle: {
        en: "Doctoral-level AI platform with auto-correction and 50+ optimization strategies for enterprise code generation.",
        fr: "Plateforme IA niveau doctoral avec auto-correction et 50+ strategies d'optimisation pour la generation de code entreprise.",
        de: "KI-Plattform auf Doktoratsniveau mit Autokorrektur und 50+ Optimierungsstrategien fur Enterprise-Codegenerierung.",
        ar: "منصة ذكاء اصطناعي بمستوى الدكتوراه مع التصحيح التلقائي و50+ استراتيجية تحسين لتوليد كود المؤسسات."
      }
    },
    problem: {
      title: { en: "The Problem", fr: "Le Probleme", de: "Das Problem", ar: "المشكلة" },
      items: [
        { en: "70% of developer time spent on boilerplate code", fr: "70% du temps developpeur perdu sur le code boilerplate", de: "70% der Entwicklerzeit fur Boilerplate-Code verschwendet", ar: "70% من وقت المطورين يضيع على الكود المتكرر" },
        { en: "Inconsistent code quality across teams", fr: "Qualite de code inconsistante entre les equipes", de: "Inkonsistente Codequalitat in Teams", ar: "جودة كود غير متسقة بين الفرق" },
        { en: "Security vulnerabilities from manual coding errors", fr: "Vulnerabilites de securite dues aux erreurs manuelles", de: "Sicherheitslucken durch manuelle Codierungsfehler", ar: "ثغرات أمنية من أخطاء الترميز اليدوي" }
      ]
    },
    metrics: {
      title: { en: "Business Metrics", fr: "Metriques Business", de: "Business-Metriken", ar: "مقاييس الأعمال" },
      items: [
        { value: "70%", label: { en: "Dev time reduction", fr: "Reduction temps dev", de: "Reduzierung der Dev-Zeit", ar: "تقليل وقت التطوير" } },
        { value: "99.9%", label: { en: "Uptime guaranteed", fr: "Uptime garanti", de: "Verfugbarkeit garantiert", ar: "وقت التشغيل مضمون" } },
        { value: "10K+", label: { en: "Requests/second", fr: "Requetes/seconde", de: "Anfragen/Sekunde", ar: "طلب/ثانية" } },
        { value: "60", label: { en: "Days avg ROI", fr: "Jours ROI moyen", de: "Tage durchschn. ROI", ar: "يوم متوسط العائد" } },
        { value: "85", label: { en: "NPS Score", fr: "Score NPS", de: "NPS-Score", ar: "نقاط NPS" } }
      ]
    },
    frameworks: {
      title: { en: "18+ Supported Frameworks", fr: "18+ Frameworks Supportes", de: "18+ Unterstutzte Frameworks", ar: "18+ إطار عمل مدعوم" },
      categories: [
        {
          icon: Code,
          title: { en: "Frontend", fr: "Frontend", de: "Frontend", ar: "الواجهة الأمامية" },
          items: ["React 18", "Vue 3", "Angular 17", "Next.js 14", "Svelte", "Solid.js"]
        },
        {
          icon: Terminal,
          title: { en: "Backend", fr: "Backend", de: "Backend", ar: "الواجهة الخلفية" },
          items: ["Node.js", "Spring Boot", "Django", "FastAPI", "Go Fiber", "Rust Actix"]
        },
        {
          icon: Layers,
          title: { en: "Mobile", fr: "Mobile", de: "Mobile", ar: "الجوال" },
          items: ["React Native", "Flutter", "Swift UI", "Kotlin Compose"]
        },
        {
          icon: GitBranch,
          title: { en: "DevOps", fr: "DevOps", de: "DevOps", ar: "DevOps" },
          items: ["Terraform", "Kubernetes", "Docker", "GitHub Actions"]
        }
      ]
    },
    differentiators: {
      title: { en: "Key Differentiators", fr: "Differenciateurs Cles", de: "Hauptunterscheidungsmerkmale", ar: "المميزات الرئيسية" },
      items: [
        { en: "18+ supported frameworks", fr: "18+ frameworks supportes", de: "18+ unterstutzte Frameworks", ar: "18+ إطار عمل مدعوم" },
        { en: "50+ auto-correction strategies", fr: "50+ strategies auto-correction", de: "50+ Auto-Korrektur-Strategien", ar: "50+ استراتيجية تصحيح تلقائي" },
        { en: "4 interface languages", fr: "4 langues interface", de: "4 Oberflachensprachen", ar: "4 لغات واجهة" },
        { en: "ANSSI-level security", fr: "Securite niveau ANSSI", de: "ANSSI-Sicherheitsniveau", ar: "أمان بمستوى ANSSI" },
        { en: "15,000+ optimized code lines", fr: "15,000+ lignes code optimise", de: "15.000+ optimierte Codezeilen", ar: "15,000+ سطر كود محسن" }
      ]
    },
    targets: {
      title: { en: "Target Markets", fr: "Marches Cibles", de: "Zielmarkte", ar: "الأسواق المستهدفة" },
      items: [
        { en: "Fortune 500 Companies", fr: "Grandes Entreprises (Fortune 500)", de: "Fortune 500 Unternehmen", ar: "شركات فورتشن 500" },
        { en: "Tech Scale-ups (50-500 employees)", fr: "Scale-ups Tech (50-500 employes)", de: "Tech Scale-ups (50-500 Mitarbeiter)", ar: "الشركات التقنية الناشئة" },
        { en: "Digital Agencies", fr: "Agences Digitales", de: "Digitalagenturen", ar: "الوكالات الرقمية" },
        { en: "Software Houses", fr: "Software Houses", de: "Software-Hauser", ar: "شركات البرمجيات" },
        { en: "DevOps/Engineering Teams", fr: "Equipes DevOps/Engineering", de: "DevOps/Engineering-Teams", ar: "فرق DevOps/الهندسة" }
      ]
    },
    stack: {
      title: { en: "Technical Architecture", fr: "Architecture Technique", de: "Technische Architektur", ar: "البنية التقنية" },
      items: [
        { label: "AI Engine", value: "GPT-4 Turbo + Advanced AI + Codestral" },
        { label: "Backend", value: "Python 3.12 + FastAPI + AsyncIO" },
        { label: "Processing", value: "Celery + Redis + RabbitMQ" },
        { label: "Storage", value: "PostgreSQL + MongoDB + S3" },
        { label: "Security", value: "OAuth 2.0 + RBAC + AES-256" }
      ]
    },
    features: {
      title: { en: "AI-Powered Features", fr: "Fonctionnalites IA", de: "KI-gestutzte Funktionen", ar: "ميزات مدعومة بالذكاء الاصطناعي" },
      items: [
        {
          icon: Cpu,
          title: { en: "Auto-Correction Engine", fr: "Moteur Auto-Correction", de: "Auto-Korrektur-Engine", ar: "محرك التصحيح التلقائي" },
          items: [
            { en: "50+ optimization strategies", fr: "50+ strategies d'optimisation", de: "50+ Optimierungsstrategien", ar: "50+ استراتيجية تحسين" },
            { en: "Real-time error detection", fr: "Detection erreurs temps reel", de: "Echtzeit-Fehlererkennung", ar: "كشف الأخطاء في الوقت الفعلي" },
            { en: "Automatic refactoring suggestions", fr: "Suggestions refactoring auto", de: "Automatische Refactoring-Vorschlage", ar: "اقتراحات إعادة هيكلة تلقائية" }
          ]
        },
        {
          icon: Shield,
          title: { en: "Security Scanner", fr: "Scanner Securite", de: "Sicherheitsscanner", ar: "ماسح الأمان" },
          items: [
            { en: "OWASP Top 10 vulnerability detection", fr: "Detection vulnerabilites OWASP Top 10", de: "OWASP Top 10 Schwachstellenerkennung", ar: "كشف ثغرات OWASP Top 10" },
            { en: "SQL injection prevention", fr: "Prevention injection SQL", de: "SQL-Injection-Pravention", ar: "منع حقن SQL" },
            { en: "XSS and CSRF protection", fr: "Protection XSS et CSRF", de: "XSS- und CSRF-Schutz", ar: "حماية XSS و CSRF" }
          ]
        },
        {
          icon: GitBranch,
          title: { en: "Code Quality", fr: "Qualite Code", de: "Codequalitat", ar: "جودة الكود" },
          items: [
            { en: "Automatic documentation generation", fr: "Generation documentation auto", de: "Automatische Dokumentationserstellung", ar: "توليد التوثيق التلقائي" },
            { en: "Unit test scaffolding", fr: "Scaffolding tests unitaires", de: "Unit-Test-Scaffolding", ar: "هيكلة اختبارات الوحدة" },
            { en: "Code coverage analysis", fr: "Analyse couverture code", de: "Code-Coverage-Analyse", ar: "تحليل تغطية الكود" }
          ]
        }
      ]
    },
    security: {
      title: { en: "Enterprise Security", fr: "Securite Enterprise", de: "Enterprise-Sicherheit", ar: "أمان المؤسسات" },
      items: [
        { en: "ANSSI-certified security standards", fr: "Standards securite certifies ANSSI", de: "ANSSI-zertifizierte Sicherheitsstandards", ar: "معايير أمان معتمدة من ANSSI" },
        { en: "End-to-end encryption (AES-256)", fr: "Chiffrement bout-en-bout (AES-256)", de: "Ende-zu-Ende-Verschlusselung (AES-256)", ar: "تشفير من طرف إلى طرف (AES-256)" },
        { en: "SOC 2 Type II compliant", fr: "Conforme SOC 2 Type II", de: "SOC 2 Type II konform", ar: "متوافق مع SOC 2 Type II" },
        { en: "GDPR compliant data handling", fr: "Traitement donnees conforme RGPD", de: "DSGVO-konforme Datenverarbeitung", ar: "معالجة بيانات متوافقة مع GDPR" },
        { en: "Air-gapped deployment option", fr: "Option deploiement air-gapped", de: "Air-Gapped-Bereitstellungsoption", ar: "خيار نشر معزول" }
      ]
    },
    roi: {
      title: { en: "Measurable ROI", fr: "ROI Mesurable", de: "Messbarer ROI", ar: "عائد استثمار قابل للقياس" },
      metrics: [
        { label: { en: "Code generation time", fr: "Temps generation code", de: "Codegenerierungszeit", ar: "وقت توليد الكود" }, before: "4h", after: "15min", change: "-94%" },
        { label: { en: "Bug rate", fr: "Taux bugs", de: "Fehlerrate", ar: "معدل الأخطاء" }, before: "12%", after: "2%", change: "-83%" },
        { label: { en: "Dev productivity", fr: "Productivite dev", de: "Dev-Produktivitat", ar: "إنتاجية المطورين" }, before: "1x", after: "4x", change: "+300%" },
        { label: { en: "Security issues", fr: "Problemes securite", de: "Sicherheitsprobleme", ar: "مشاكل الأمان" }, before: "15/mo", after: "1/mo", change: "-93%" }
      ]
    },
    pricing: {
      title: { en: "Definitive Sale", fr: "Vente Definitive", de: "Endgultiger Verkauf", ar: "بيع نهائي" },
      subtitle: { en: "One-time purchase - Full ownership", fr: "Achat unique - Propriete complete", de: "Einmaliger Kauf - Vollstandiges Eigentum", ar: "شراء لمرة واحدة - ملكية كاملة" },
      includes: [
        { en: "Complete source code", fr: "Code source complet", de: "Vollstandiger Quellcode", ar: "الكود المصدري الكامل" },
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
      <section className="pt-32 pb-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 text-white">
        <div className="container mx-auto text-center">
          <div className="inline-flex items-center gap-2 bg-blue-500/20 backdrop-blur-sm px-4 py-2 rounded-full text-sm font-medium mb-6">
            <Zap className="w-4 h-4" />
            {content.hero.badge[lang as keyof typeof content.hero.badge]}
          </div>
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-white via-blue-200 to-indigo-200 bg-clip-text text-transparent">
            {content.hero.title}
          </h1>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto mb-8">
            {content.hero.subtitle[lang as keyof typeof content.hero.subtitle]}
          </p>
          <Button size="lg" className="bg-white text-blue-900 hover:bg-blue-100" asChild>
            <a href="https://wa.me/4368120460618" target="_blank" rel="noopener noreferrer">
              <MessageSquare className="mr-2 w-5 h-5" />
              {lang === 'fr' ? 'Demander une Demo' : lang === 'de' ? 'Demo anfordern' : lang === 'ar' ? 'طلب عرض توضيحي' : 'Request Demo'}
            </a>
          </Button>
        </div>
      </section>

      {/* Metrics */}
      <section className="py-12 px-4 sm:px-6 lg:px-8 bg-slate-100 dark:bg-slate-800">
        <div className="container mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-5 gap-4 max-w-5xl mx-auto">
            {content.metrics.items.map((metric, idx) => (
              <Card key={idx} className="text-center">
                <CardContent className="pt-6">
                  <div className="text-3xl font-bold text-primary">{metric.value}</div>
                  <div className="text-sm text-muted-foreground">{metric.label[lang as keyof typeof metric.label]}</div>
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

      {/* Frameworks */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">
            {content.frameworks.title[lang as keyof typeof content.frameworks.title]}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
            {content.frameworks.categories.map((cat, idx) => (
              <Card key={idx} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                      <cat.icon className="w-5 h-5 text-primary" />
                    </div>
                    <CardTitle className="text-lg">
                      {cat.title[lang as keyof typeof cat.title]}
                    </CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {cat.items.map((item, i) => (
                      <span key={i} className="px-2 py-1 bg-muted rounded text-xs font-mono">
                        {item}
                      </span>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Differentiators & Targets */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-slate-900 text-white">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="bg-white/5 rounded-2xl p-6">
              <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-green-400" />
                {content.differentiators.title[lang as keyof typeof content.differentiators.title]}
              </h3>
              <ul className="space-y-2">
                {content.differentiators.items.map((item, idx) => (
                  <li key={idx} className="flex items-center gap-2 text-slate-300">
                    <CheckCircle2 className="w-4 h-4 text-green-400 shrink-0" />
                    {item[lang as keyof typeof item]}
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-white/5 rounded-2xl p-6">
              <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
                <Zap className="w-5 h-5 text-blue-400" />
                {content.targets.title[lang as keyof typeof content.targets.title]}
              </h3>
              <ul className="space-y-2">
                {content.targets.items.map((item, idx) => (
                  <li key={idx} className="flex items-center gap-2 text-slate-300">
                    <CheckCircle2 className="w-4 h-4 text-blue-400 shrink-0" />
                    {item[lang as keyof typeof item]}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Tech Stack */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center mb-8">
            {content.stack.title[lang as keyof typeof content.stack.title]}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-5 gap-4 max-w-5xl mx-auto">
            {content.stack.items.map((item, idx) => (
              <Card key={idx}>
                <CardContent className="pt-6 text-center">
                  <div className="text-xs text-muted-foreground mb-2">{item.label}</div>
                  <div className="text-sm font-mono text-primary">{item.value}</div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* AI Features */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-muted/50">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">
            {content.features.title[lang as keyof typeof content.features.title]}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {content.features.items.map((feature, idx) => (
              <Card key={idx} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                      <feature.icon className="w-5 h-5 text-primary" />
                    </div>
                    <CardTitle className="text-lg">
                      {feature.title[lang as keyof typeof feature.title]}
                    </CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {feature.items.map((item, i) => (
                      <li key={i} className="flex items-start gap-2 text-sm">
                        <CheckCircle2 className="w-4 h-4 text-green-500 mt-0.5 shrink-0" />
                        <span>{item[lang as keyof typeof item]}</span>
                      </li>
                    ))}
                  </ul>
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
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 text-white">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center mb-4">
            {content.pricing.title[lang as keyof typeof content.pricing.title]}
          </h2>
          <div className="max-w-xl mx-auto">
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 text-center">
              <div className="text-7xl font-bold text-white mb-2">10,000€</div>
              <p className="text-blue-200 text-lg mb-8">
                {content.pricing.subtitle[lang as keyof typeof content.pricing.subtitle]}
              </p>
              <div className="border-t border-white/20 pt-6">
                <ul className="space-y-3 text-left max-w-xs mx-auto">
                  {content.pricing.includes.map((item, idx) => (
                    <li key={idx} className="flex items-center gap-2 text-blue-100">
                      <CheckCircle2 className="w-5 h-5 text-green-400 shrink-0" />
                      {item[lang as keyof typeof item]}
                    </li>
                  ))}
                </ul>
              </div>
              <Button size="lg" className="mt-8 bg-white text-blue-900 hover:bg-blue-100 w-full" asChild>
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
