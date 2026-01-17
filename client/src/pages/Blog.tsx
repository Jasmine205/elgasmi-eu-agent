import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { ArrowRight, Calendar, Search, Tag, User } from "lucide-react";
import { useState } from "react";
import { useTranslation } from "react-i18next";

interface BlogArticle {
  id: string;
  title: string;
  titleEn: string;
  titleDe: string;
  titleAr: string;
  excerpt: string;
  excerptEn: string;
  excerptDe: string;
  excerptAr: string;
  content: string;
  contentEn: string;
  contentDe: string;
  contentAr: string;
  author: string;
  date: string;
  category: string;
  tags: string[];
  readTime: number;
  featured: boolean;
}

const articles: BlogArticle[] = [
  {
    id: "agentic-systems-101",
    title: "Systèmes Agentiques 101: Guide Complet",
    titleEn: "Agentic Systems 101: Complete Guide",
    titleDe: "Agentic Systems 101: Vollständiger Leitfaden",
    titleAr: "الأنظمة الذكية 101: دليل شامل",
    excerpt: "Découvrez les fondamentaux des systèmes agentiques et comment ils transforment l'automatisation.",
    excerptEn: "Discover the fundamentals of agentic systems and how they transform automation.",
    excerptDe: "Entdecken Sie die Grundlagen von Agentic Systems und wie sie die Automatisierung transformieren.",
    excerptAr: "اكتشف أساسيات الأنظمة الذكية وكيف تحول الأتمتة.",
    content: `# Systèmes Agentiques 101

Les systèmes agentiques représentent une révolution dans l'automatisation. Contrairement aux systèmes traditionnels qui suivent des règles prédéfinies, les systèmes agentiques peuvent:

## Caractéristiques Principales

- **Autonomie**: Prendre des décisions sans intervention humaine
- **Apprentissage**: S'adapter et améliorer leurs performances
- **Résilience**: Gérer les situations imprévisibles
- **Intelligence**: Analyser et comprendre les contextes complexes

## Applications Pratiques

Les systèmes agentiques sont utilisés dans:
- L'optimisation des processus métier
- La gestion des ressources
- La détection d'anomalies
- L'assistance client intelligente

## Conclusion

L'adoption de systèmes agentiques offre un avantage compétitif significatif pour les entreprises modernes.`,
    contentEn: `# Agentic Systems 101

Agentic systems represent a revolution in automation. Unlike traditional systems that follow predefined rules, agentic systems can:

## Key Features

- **Autonomy**: Make decisions without human intervention
- **Learning**: Adapt and improve their performance
- **Resilience**: Handle unpredictable situations
- **Intelligence**: Analyze and understand complex contexts

## Practical Applications

Agentic systems are used in:
- Business process optimization
- Resource management
- Anomaly detection
- Intelligent customer support

## Conclusion

Adopting agentic systems provides a significant competitive advantage for modern enterprises.`,
    contentDe: `# Agentic Systems 101

Agentic Systems stellen eine Revolution in der Automatisierung dar. Im Gegensatz zu traditionellen Systemen, die vordefinierten Regeln folgen, können Agentic Systems:

## Hauptmerkmale

- **Autonomie**: Entscheidungen ohne menschliches Zutun treffen
- **Lernen**: Sich anpassen und ihre Leistung verbessern
- **Resilienz**: Mit unvorhergesehenen Situationen umgehen
- **Intelligenz**: Komplexe Kontexte analysieren und verstehen

## Praktische Anwendungen

Agentic Systems werden verwendet in:
- Geschäftsprozessoptimierung
- Ressourcenverwaltung
- Anomalieerkennung
- Intelligenter Kundensupport

## Fazit

Die Einführung von Agentic Systems bietet einen erheblichen Wettbewerbsvorteil für moderne Unternehmen.`,
    contentAr: `# الأنظمة الذكية 101

تمثل الأنظمة الذكية ثورة في الأتمتة. بخلاف الأنظمة التقليدية التي تتبع قواعد محددة مسبقاً، يمكن للأنظمة الذكية:

## الميزات الرئيسية

- **الاستقلالية**: اتخاذ القرارات بدون تدخل بشري
- **التعلم**: التكيف وتحسين الأداء
- **المرونة**: التعامل مع الحالات غير المتوقعة
- **الذكاء**: تحليل وفهم السياقات المعقدة

## التطبيقات العملية

تُستخدم الأنظمة الذكية في:
- تحسين العمليات التجارية
- إدارة الموارد
- كشف الخلل
- دعم العملاء الذكي

## الخلاصة

يوفر اعتماد الأنظمة الذكية ميزة تنافسية كبيرة للمؤسسات الحديثة.`,
    author: "Asma Warter",
    date: "2024-01-15",
    category: "Agentic Systems",
    tags: ["AI", "Automation", "Architecture"],
    readTime: 8,
    featured: true,
  },
  {
    id: "automation-best-practices",
    title: "Meilleures Pratiques d'Automatisation",
    titleEn: "Automation Best Practices",
    titleDe: "Best Practices für Automatisierung",
    titleAr: "أفضل الممارسات في الأتمتة",
    excerpt: "Apprenez les meilleures pratiques pour implémenter l'automatisation avec succès.",
    excerptEn: "Learn best practices for implementing automation successfully.",
    excerptDe: "Lernen Sie Best Practices für eine erfolgreiche Automatisierungsimplementierung.",
    excerptAr: "تعلم أفضل الممارسات لتنفيذ الأتمتة بنجاح.",
    content: `# Meilleures Pratiques d'Automatisation

L'automatisation est un élément clé de la transformation numérique. Voici les meilleures pratiques:

## Planification

- Identifier les processus à automatiser
- Évaluer le ROI potentiel
- Définir des objectifs clairs

## Implémentation

- Commencer par des projets pilotes
- Tester rigoureusement
- Former les équipes

## Maintenance

- Monitorer les performances
- Mettre à jour régulièrement
- Optimiser continuellement`,
    contentEn: `# Automation Best Practices

Automation is key to digital transformation. Here are the best practices:

## Planning

- Identify processes to automate
- Evaluate potential ROI
- Define clear objectives

## Implementation

- Start with pilot projects
- Test rigorously
- Train teams

## Maintenance

- Monitor performance
- Update regularly
- Continuously optimize`,
    contentDe: `# Best Practices für Automatisierung

Automatisierung ist der Schlüssel zur digitalen Transformation. Hier sind die Best Practices:

## Planung

- Prozesse zur Automatisierung identifizieren
- Potenziellen ROI bewerten
- Klare Ziele definieren

## Implementierung

- Mit Pilotprojekten beginnen
- Gründlich testen
- Teams schulen

## Wartung

- Leistung überwachen
- Regelmäßig aktualisieren
- Kontinuierlich optimieren`,
    contentAr: `# أفضل الممارسات في الأتمتة

الأتمتة هي مفتاح التحول الرقمي. إليك أفضل الممارسات:

## التخطيط

- تحديد العمليات المراد أتمتتها
- تقييم العائد على الاستثمار المحتمل
- تحديد أهداف واضحة

## التنفيذ

- البدء بمشاريع تجريبية
- الاختبار الدقيق
- تدريب الفريق

## الصيانة

- مراقبة الأداء
- التحديث بانتظام
- التحسين المستمر`,
    author: "Asma Warter",
    date: "2024-01-10",
    category: "Best Practices",
    tags: ["Automation", "Strategy", "Implementation"],
    readTime: 6,
    featured: true,
  },
  {
    id: "clean-architecture-guide",
    title: "Guide Complet de Clean Architecture",
    titleEn: "Complete Guide to Clean Architecture",
    titleDe: "Vollständiger Leitfaden zur Clean Architecture",
    titleAr: "دليل شامل للعمارة النظيفة",
    excerpt: "Maîtrisez les principes de Clean Architecture pour un code maintenable.",
    excerptEn: "Master Clean Architecture principles for maintainable code.",
    excerptDe: "Beherrschen Sie Clean Architecture-Prinzipien für wartbaren Code.",
    excerptAr: "أتقن مبادئ العمارة النظيفة للحصول على كود قابل للصيانة.",
    content: `# Guide Complet de Clean Architecture

Clean Architecture est une approche fondamentale pour construire des systèmes logiciels robustes.

## Les Couches

- **Entities**: Règles métier critiques
- **Use Cases**: Logique applicative
- **Interface Adapters**: Convertisseurs
- **Frameworks**: Détails techniques

## Avantages

- Testabilité améliorée
- Maintenance facilitée
- Indépendance des frameworks
- Flexibilité architecturale`,
    contentEn: `# Complete Guide to Clean Architecture

Clean Architecture is a fundamental approach to building robust software systems.

## The Layers

- **Entities**: Critical business rules
- **Use Cases**: Application logic
- **Interface Adapters**: Converters
- **Frameworks**: Technical details

## Benefits

- Improved testability
- Easier maintenance
- Framework independence
- Architectural flexibility`,
    contentDe: `# Vollständiger Leitfaden zur Clean Architecture

Clean Architecture ist ein grundlegender Ansatz zum Aufbau robuster Softwaresysteme.

## Die Schichten

- **Entities**: Kritische Geschäftsregeln
- **Use Cases**: Anwendungslogik
- **Interface Adapters**: Konverter
- **Frameworks**: Technische Details

## Vorteile

- Verbesserte Testbarkeit
- Einfachere Wartung
- Framework-Unabhängigkeit
- Architektonische Flexibilität`,
    contentAr: `# دليل شامل للعمارة النظيفة

العمارة النظيفة هي نهج أساسي لبناء أنظمة برمجية قوية.

## الطبقات

- **الكيانات**: قواعد العمل الحرجة
- **حالات الاستخدام**: منطق التطبيق
- **محولات الواجهة**: المحولات
- **الأطر**: التفاصيل التقنية

## الفوائد

- قابلية الاختبار المحسنة
- الصيانة الأسهل
- استقلال الإطار
- المرونة المعمارية`,
    author: "Asma Warter",
    date: "2024-01-05",
    category: "Architecture",
    tags: ["Clean Code", "SOLID", "Design"],
    readTime: 10,
    featured: false,
  },
];

export default function Blog() {
  const { i18n } = useTranslation();
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  const getLocalizedArticle = (article: BlogArticle) => {
    const lang = i18n.language;
    return {
      ...article,
      title: lang === "en" ? article.titleEn : lang === "de" ? article.titleDe : lang === "ar" ? article.titleAr : article.title,
      excerpt: lang === "en" ? article.excerptEn : lang === "de" ? article.excerptDe : lang === "ar" ? article.excerptAr : article.excerpt,
      content: lang === "en" ? article.contentEn : lang === "de" ? article.contentDe : lang === "ar" ? article.contentAr : article.content,
    };
  };

  const categories = Array.from(new Set(articles.map(a => a.category)));

  const filteredArticles = articles.filter(article => {
    const matchesSearch = article.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         article.excerpt.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = !selectedCategory || article.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const featuredArticles = filteredArticles.filter(a => a.featured);
  const otherArticles = filteredArticles.filter(a => !a.featured);

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />

      {/* Hero Section */}
      <section className="pt-32 pb-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-background via-accent/20 to-background">
        <div className="container mx-auto">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-6">
              Blog Technique
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              Explorez nos articles sur les systèmes agentiques, l'automatisation et l'architecture moderne.
            </p>
          </div>
        </div>
      </section>

      {/* Search and Filter */}
      <section className="py-8 px-4 sm:px-6 lg:px-8 bg-card border-b border-border">
        <div className="container mx-auto">
          <div className="max-w-3xl mx-auto space-y-4">
            <div className="relative">
              <Search className="absolute left-3 top-3 w-5 h-5 text-muted-foreground" />
              <Input
                placeholder="Rechercher des articles..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10"
              />
            </div>
            <div className="flex flex-wrap gap-2">
              <Button
                variant={selectedCategory === null ? "default" : "outline"}
                onClick={() => setSelectedCategory(null)}
                className={selectedCategory === null ? "gradient-primary" : ""}
              >
                Tous
              </Button>
              {categories.map(category => (
                <Button
                  key={category}
                  variant={selectedCategory === category ? "default" : "outline"}
                  onClick={() => setSelectedCategory(category)}
                  className={selectedCategory === category ? "gradient-primary" : ""}
                >
                  {category}
                </Button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Featured Articles */}
      {featuredArticles.length > 0 && (
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="container mx-auto">
            <h2 className="text-3xl font-bold text-foreground mb-8">Articles en Vedette</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {featuredArticles.map(article => {
                const localized = getLocalizedArticle(article);
                return (
                  <Card key={article.id} className="border-border hover:shadow-elegant-lg transition-all duration-300 overflow-hidden">
                    <div className="h-48 bg-gradient-to-br from-primary/10 to-primary/5"></div>
                    <CardHeader>
                      <div className="flex items-center gap-2 mb-2">
                        <Tag className="w-4 h-4 text-primary" />
                        <span className="text-sm text-primary font-medium">{article.category}</span>
                      </div>
                      <CardTitle className="text-2xl">{localized.title}</CardTitle>
                      <CardDescription>{localized.excerpt}</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="flex items-center justify-between text-sm text-muted-foreground">
                        <div className="flex items-center gap-4">
                          <div className="flex items-center gap-1">
                            <Calendar className="w-4 h-4" />
                            {new Date(article.date).toLocaleDateString()}
                          </div>
                          <div>{article.readTime} min</div>
                        </div>
                        <Button variant="ghost" size="sm" className="gap-1">
                          Lire <ArrowRight className="w-4 h-4" />
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>
        </section>
      )}

      {/* All Articles */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-card">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-foreground mb-8">Tous les Articles</h2>
          <div className="space-y-6">
            {otherArticles.map(article => {
              const localized = getLocalizedArticle(article);
              return (
                <Card key={article.id} className="border-border hover:shadow-elegant transition-all duration-300">
                  <CardHeader>
                    <div className="flex items-start justify-between">
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-2">
                          <Tag className="w-4 h-4 text-primary" />
                          <span className="text-sm text-primary font-medium">{article.category}</span>
                        </div>
                        <CardTitle>{localized.title}</CardTitle>
                        <CardDescription className="mt-2">{localized.excerpt}</CardDescription>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="flex items-center justify-between text-sm text-muted-foreground">
                      <div className="flex items-center gap-4">
                        <div className="flex items-center gap-1">
                          <User className="w-4 h-4" />
                          {article.author}
                        </div>
                        <div className="flex items-center gap-1">
                          <Calendar className="w-4 h-4" />
                          {new Date(article.date).toLocaleDateString()}
                        </div>
                        <div>{article.readTime} min read</div>
                      </div>
                      <Button variant="ghost" size="sm" className="gap-1">
                        Lire <ArrowRight className="w-4 h-4" />
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
