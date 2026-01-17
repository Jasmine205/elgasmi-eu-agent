import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import AnimatedArchitecture from "@/components/AnimatedArchitecture";
import AutomationSolutions from "@/components/AutomationSolutions";
import AutomationTicker from "@/components/AutomationTicker";
import ChatBox from "@/components/ChatBox";
import ContactForm from "@/components/ContactForm";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import InteractiveDemo from "@/components/InteractiveDemo";
import { AnimatedGrid, AnimatedCard, AnimatedMetric, SlideUp } from "@/components/AnimatedTable";
import { useTranslation } from "react-i18next";
import {
  ArrowRight,
  Bot,
  Building2,
  CheckCircle2,
  Code2,
  Cpu,
  Database,
  Headphones,
  Layers,
  Lock,
  Mail,
  MessageSquare,
  Network,
  Phone,
  Puzzle,
  Server,
  Shield,
  Sparkles,
  Target,
  TrendingUp,
  Zap,
} from "lucide-react";
import { useState } from "react";
import { Link } from "wouter";

export default function Home() {
  const [chatOpen, setChatOpen] = useState(false);
  const { t } = useTranslation();

  const services = [
    {
      icon: Bot,
      title: t('services.agenticSystems'),
      description: t('services.agenticSystemsDesc'),
    },
    {
      icon: Puzzle,
      title: t('services.intelligentAutomation'),
      description: t('services.intelligentAutomationDesc'),
    },
    {
      icon: Network,
      title: t('services.distributedArchitecture'),
      description: t('services.distributedArchitectureDesc'),
    },
    {
      icon: Layers,
      title: t('services.solidPrinciples'),
      description: t('services.solidPrinciplesDesc'),
    },
    {
      icon: Shield,
      title: t('services.securityCompliance'),
      description: t('services.securityComplianceDesc'),
    },
    {
      icon: Zap,
      title: t('services.performanceScalability'),
      description: t('services.performanceScalabilityDesc'),
    },
  ];

  const portfolio = [
    {
      title: t('portfolio.ecommerce'),
      description: t('portfolio.ecommerceDesc'),
      technologies: ["Event Streaming", "Docker", "Kubernetes", "API Gateway"],
    },
    {
      title: t('portfolio.recommendation'),
      description: t('portfolio.recommendationDesc'),
      technologies: ["Machine Learning", "Event Sourcing", "Redis", "Python"],
    },
    {
      title: t('portfolio.banking'),
      description: t('portfolio.bankingDesc'),
      technologies: ["CQRS", "Event Sourcing", "PostgreSQL", "RabbitMQ"],
    },
  ];

  const whatsappNumber = "4368120460618";
  const whatsappBusinessNumber = "4368120460618";

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-background via-accent/20 to-background">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center space-x-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-6">
              <Sparkles className="w-4 h-4" />
              <span>{t('hero.badge')}</span>
            </div>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-foreground mb-6">
              {t('hero.title')}
              <br />
              <span className="text-primary">{t('hero.titleHighlight')}</span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed max-w-2xl mx-auto">
              {t('hero.description')}
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button size="lg" className="gradient-primary text-lg px-8" asChild>
                <a href="#contact">
                  {t('hero.cta1')}
                  <ArrowRight className="ml-2 w-5 h-5" />
                </a>
              </Button>
              <Button size="lg" variant="outline" className="text-lg px-8" asChild>
                <Link href="/vente">{t('hero.cta2')}</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* 3 Power Blocks - Horizontal avec animations */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-background to-accent/10">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Pourquoi Choisir Nos Solutions?</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">Technologie de pointe, resultats garantis, support permanent</p>
          </div>
          <div className="flex flex-col md:flex-row gap-8 max-w-7xl mx-auto">
            {/* Block 1 - IA Autonome */}
            <div className="group flex-1 relative bg-gradient-to-br from-blue-600 via-blue-700 to-indigo-800 rounded-3xl p-8 text-white overflow-hidden hover:scale-[1.02] transition-all duration-500 shadow-2xl hover:shadow-blue-500/40 cursor-pointer">
              <div className="absolute top-0 right-0 w-40 h-40 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/2 group-hover:scale-[2] transition-transform duration-1000"></div>
              <div className="absolute bottom-0 left-0 w-32 h-32 bg-white/5 rounded-full translate-y-1/2 -translate-x-1/2 group-hover:scale-150 transition-transform duration-700"></div>
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-blue-400/10 rounded-full blur-3xl group-hover:bg-blue-400/20 transition-all duration-500"></div>
              <div className="relative z-10">
                <div className="w-20 h-20 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center mb-6 group-hover:rotate-12 group-hover:scale-110 transition-all duration-500 border border-white/30">
                  <Bot className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-3xl font-bold mb-4">IA Autonome</h3>
                <p className="text-blue-100 leading-relaxed mb-6">
                  4 agents IA specialises travaillent 24h/24, 7j/7 sans intervention humaine.
                  Ventes, Marketing, Operations et Support - tous automatises.
                </p>
                <ul className="space-y-3 mb-6">
                  <li className="flex items-center gap-3 text-sm">
                    <CheckCircle2 className="w-5 h-5 text-green-400 flex-shrink-0" />
                    <span>Agent Ventes: Qualification leads automatique</span>
                  </li>
                  <li className="flex items-center gap-3 text-sm">
                    <CheckCircle2 className="w-5 h-5 text-green-400 flex-shrink-0" />
                    <span>Agent Marketing: Campagnes personnalisees</span>
                  </li>
                  <li className="flex items-center gap-3 text-sm">
                    <CheckCircle2 className="w-5 h-5 text-green-400 flex-shrink-0" />
                    <span>Agent Operations: Workflows optimises</span>
                  </li>
                  <li className="flex items-center gap-3 text-sm">
                    <CheckCircle2 className="w-5 h-5 text-green-400 flex-shrink-0" />
                    <span>Agent Support: Reponses instantanees</span>
                  </li>
                </ul>
                <div className="flex items-center gap-3 p-3 bg-white/10 rounded-xl">
                  <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
                  <span className="font-semibold">4 agents actifs en temps reel</span>
                </div>
              </div>
            </div>

            {/* Block 2 - ROI Garanti */}
            <div className="group flex-1 relative bg-gradient-to-br from-purple-600 via-purple-700 to-fuchsia-800 rounded-3xl p-8 text-white overflow-hidden hover:scale-[1.02] transition-all duration-500 shadow-2xl hover:shadow-purple-500/40 cursor-pointer">
              <div className="absolute top-0 right-0 w-40 h-40 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/2 group-hover:scale-[2] transition-transform duration-1000"></div>
              <div className="absolute bottom-0 left-0 w-32 h-32 bg-white/5 rounded-full translate-y-1/2 -translate-x-1/2 group-hover:scale-150 transition-transform duration-700"></div>
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-purple-400/10 rounded-full blur-3xl group-hover:bg-purple-400/20 transition-all duration-500"></div>
              <div className="relative z-10">
                <div className="w-20 h-20 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center mb-6 group-hover:rotate-12 group-hover:scale-110 transition-all duration-500 border border-white/30">
                  <TrendingUp className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-3xl font-bold mb-4">ROI x10 Garanti</h3>
                <p className="text-purple-100 leading-relaxed mb-6">
                  Retour sur investissement mesurable en moins de 90 jours.
                  Nos clients voient des resultats concrets des la premiere semaine.
                </p>
                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div className="text-center p-3 bg-white/10 rounded-xl">
                    <div className="text-3xl font-bold text-yellow-300">+340%</div>
                    <div className="text-xs text-purple-200">Taux conversion</div>
                  </div>
                  <div className="text-center p-3 bg-white/10 rounded-xl">
                    <div className="text-3xl font-bold text-green-300">-70%</div>
                    <div className="text-xs text-purple-200">Cout acquisition</div>
                  </div>
                  <div className="text-center p-3 bg-white/10 rounded-xl">
                    <div className="text-3xl font-bold text-cyan-300">-73%</div>
                    <div className="text-xs text-purple-200">Taches manuelles</div>
                  </div>
                  <div className="text-center p-3 bg-white/10 rounded-xl">
                    <div className="text-3xl font-bold text-pink-300">24/7</div>
                    <div className="text-xs text-purple-200">Disponibilite</div>
                  </div>
                </div>
                <div className="flex items-center gap-3 p-3 bg-white/10 rounded-xl">
                  <div className="w-3 h-3 bg-yellow-400 rounded-full animate-pulse"></div>
                  <span className="font-semibold">Resultats garantis ou rembourse</span>
                </div>
              </div>
            </div>

            {/* Block 3 - Cle en Main */}
            <div className="group flex-1 relative bg-gradient-to-br from-green-600 via-emerald-700 to-teal-800 rounded-3xl p-8 text-white overflow-hidden hover:scale-[1.02] transition-all duration-500 shadow-2xl hover:shadow-green-500/40 cursor-pointer">
              <div className="absolute top-0 right-0 w-40 h-40 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/2 group-hover:scale-[2] transition-transform duration-1000"></div>
              <div className="absolute bottom-0 left-0 w-32 h-32 bg-white/5 rounded-full translate-y-1/2 -translate-x-1/2 group-hover:scale-150 transition-transform duration-700"></div>
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-green-400/10 rounded-full blur-3xl group-hover:bg-green-400/20 transition-all duration-500"></div>
              <div className="relative z-10">
                <div className="w-20 h-20 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center mb-6 group-hover:rotate-12 group-hover:scale-110 transition-all duration-500 border border-white/30">
                  <Zap className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-3xl font-bold mb-4">100% Cle en Main</h3>
                <p className="text-green-100 leading-relaxed mb-6">
                  Installation complete en 48h, formation de votre equipe incluse,
                  support technique permanent et mises a jour gratuites.
                </p>
                <ul className="space-y-3 mb-6">
                  <li className="flex items-center gap-3 text-sm">
                    <Zap className="w-5 h-5 text-yellow-400 flex-shrink-0" />
                    <span>Deploiement rapide en 48 heures</span>
                  </li>
                  <li className="flex items-center gap-3 text-sm">
                    <Zap className="w-5 h-5 text-yellow-400 flex-shrink-0" />
                    <span>Formation complete de votre equipe</span>
                  </li>
                  <li className="flex items-center gap-3 text-sm">
                    <Zap className="w-5 h-5 text-yellow-400 flex-shrink-0" />
                    <span>Support technique 24/7 inclus</span>
                  </li>
                  <li className="flex items-center gap-3 text-sm">
                    <Zap className="w-5 h-5 text-yellow-400 flex-shrink-0" />
                    <span>Mises a jour et evolutions gratuites</span>
                  </li>
                </ul>
                <div className="flex items-center gap-3 p-3 bg-white/10 rounded-xl">
                  <div className="w-3 h-3 bg-cyan-400 rounded-full animate-pulse"></div>
                  <span className="font-semibold">Achat unique - Sans abonnement</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Architecture Schema Section */}
      <section className="py-12 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto">
          <div className="max-w-6xl mx-auto">
            <div className="relative bg-gradient-to-br from-card via-card to-accent/10 rounded-3xl p-10 border border-border shadow-2xl overflow-hidden hover-lift animate-fade-in-up">
              {/* Background Pattern */}
              <div className="absolute inset-0 opacity-5">
                <div className="absolute inset-0" style={{backgroundImage: 'radial-gradient(circle at 1px 1px, currentColor 1px, transparent 0)', backgroundSize: '40px 40px'}} />
              </div>

              {/* Schema Title */}
              <h3 className="text-2xl font-bold text-center text-foreground mb-10 relative z-10">
                {t('schema.title', 'Architecture Multi-Agents')}
              </h3>

              {/* Schema Grid - 4 colonnes avec hover explicatif */}
              <div className="grid grid-cols-4 gap-6 relative z-10 stagger-children">
                {/* Input */}
                <div className="group flex flex-col items-center cursor-pointer animate-fade-in-up ripple-effect">
                  <div className="relative">
                    <div className="w-20 h-20 bg-blue-500/10 rounded-2xl flex items-center justify-center mb-4 group-hover:bg-blue-500/20 group-hover:scale-110 group-hover:rotate-3 transition-all duration-500 border-2 border-blue-500/30 group-hover:border-blue-500 group-hover:shadow-lg group-hover:shadow-blue-500/30">
                      <MessageSquare className="w-10 h-10 text-blue-500 group-hover:animate-pulse" />
                    </div>
                    {/* Tooltip on hover */}
                    <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 translate-y-full opacity-0 group-hover:opacity-100 transition-all duration-300 w-48 bg-card border border-blue-500/50 rounded-xl p-3 shadow-xl z-20 pointer-events-none">
                      <p className="text-xs text-muted-foreground leading-relaxed">{t('schema.inputDesc', 'Reception et analyse des requetes clients via API REST, WebSocket et webhooks en temps reel.')}</p>
                    </div>
                  </div>
                  <span className="text-sm font-semibold text-foreground group-hover:text-blue-500 transition-colors">Input</span>
                  <span className="text-xs text-muted-foreground text-center mt-1">Requetes Client</span>
                  <div className="mt-4 w-full h-1 bg-gradient-to-r from-blue-500/0 via-blue-500 to-blue-500/0 group-hover:h-2 transition-all duration-300" />
                </div>

                {/* Processing */}
                <div className="group flex flex-col items-center cursor-pointer animate-fade-in-up ripple-effect">
                  <div className="relative">
                    <div className="w-20 h-20 bg-purple-500/10 rounded-2xl flex items-center justify-center mb-4 group-hover:bg-purple-500/20 group-hover:scale-110 group-hover:rotate-3 transition-all duration-500 border-2 border-purple-500/30 group-hover:border-purple-500 group-hover:shadow-lg group-hover:shadow-purple-500/30">
                      <Cpu className="w-10 h-10 text-purple-500 group-hover:animate-spin" />
                      <div className="absolute -top-1 -right-1 w-4 h-4 bg-green-500 rounded-full animate-pulse" />
                    </div>
                    {/* Tooltip on hover */}
                    <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 translate-y-full opacity-0 group-hover:opacity-100 transition-all duration-300 w-48 bg-card border border-purple-500/50 rounded-xl p-3 shadow-xl z-20 pointer-events-none">
                      <p className="text-xs text-muted-foreground leading-relaxed">{t('schema.agentsDesc', '4 agents IA specialises collaborent: Ventes, Marketing, Operations et Support pour une automatisation complete.')}</p>
                    </div>
                  </div>
                  <span className="text-sm font-semibold text-foreground group-hover:text-purple-500 transition-colors">Agents IA</span>
                  <span className="text-xs text-muted-foreground text-center mt-1">Traitement Intelligent</span>
                  <div className="mt-4 w-full h-1 bg-gradient-to-r from-purple-500/0 via-purple-500 to-purple-500/0 group-hover:h-2 transition-all duration-300" />
                </div>

                {/* Database */}
                <div className="group flex flex-col items-center cursor-pointer animate-fade-in-up ripple-effect">
                  <div className="relative">
                    <div className="w-20 h-20 bg-orange-500/10 rounded-2xl flex items-center justify-center mb-4 group-hover:bg-orange-500/20 group-hover:scale-110 group-hover:rotate-3 transition-all duration-500 border-2 border-orange-500/30 group-hover:border-orange-500 group-hover:shadow-lg group-hover:shadow-orange-500/30">
                      <Database className="w-10 h-10 text-orange-500 group-hover:animate-bounce" />
                    </div>
                    {/* Tooltip on hover */}
                    <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 translate-y-full opacity-0 group-hover:opacity-100 transition-all duration-300 w-48 bg-card border border-orange-500/50 rounded-xl p-3 shadow-xl z-20 pointer-events-none">
                      <p className="text-xs text-muted-foreground leading-relaxed">{t('schema.dataDesc', 'Stockage securise avec chiffrement AES-256, replication temps reel et sauvegarde automatique.')}</p>
                    </div>
                  </div>
                  <span className="text-sm font-semibold text-foreground group-hover:text-orange-500 transition-colors">Data</span>
                  <span className="text-xs text-muted-foreground text-center mt-1">Stockage Securise</span>
                  <div className="mt-4 w-full h-1 bg-gradient-to-r from-orange-500/0 via-orange-500 to-orange-500/0 group-hover:h-2 transition-all duration-300" />
                </div>

                {/* Output */}
                <div className="group flex flex-col items-center cursor-pointer animate-fade-in-up ripple-effect">
                  <div className="relative">
                    <div className="w-20 h-20 bg-green-500/10 rounded-2xl flex items-center justify-center mb-4 group-hover:bg-green-500/20 group-hover:scale-110 group-hover:rotate-3 transition-all duration-500 border-2 border-green-500/30 group-hover:border-green-500 group-hover:shadow-lg group-hover:shadow-green-500/30">
                      <Zap className="w-10 h-10 text-green-500 group-hover:animate-pulse" />
                    </div>
                    {/* Tooltip on hover */}
                    <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 translate-y-full opacity-0 group-hover:opacity-100 transition-all duration-300 w-48 bg-card border border-green-500/50 rounded-xl p-3 shadow-xl z-20 pointer-events-none">
                      <p className="text-xs text-muted-foreground leading-relaxed">{t('schema.outputDesc', 'Resultats optimises livres en temps reel avec rapports analytiques et notifications intelligentes.')}</p>
                    </div>
                  </div>
                  <span className="text-sm font-semibold text-foreground group-hover:text-green-500 transition-colors">Output</span>
                  <span className="text-xs text-muted-foreground text-center mt-1">Resultats Optimises</span>
                  <div className="mt-4 w-full h-1 bg-gradient-to-r from-green-500/0 via-green-500 to-green-500/0 group-hover:h-2 transition-all duration-300" />
                </div>
              </div>

              {/* Connection Lines */}
              <div className="flex justify-center items-center gap-4 mt-8 relative z-10">
                <div className="flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full">
                  <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                  <span className="text-xs font-medium text-primary">Latence &lt;50ms</span>
                </div>
                <div className="flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full">
                  <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse" />
                  <span className="text-xs font-medium text-primary">99.9% Uptime</span>
                </div>
                <div className="flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full">
                  <div className="w-2 h-2 bg-purple-500 rounded-full animate-pulse" />
                  <span className="text-xs font-medium text-primary">Scalabilite Infinie</span>
                </div>
              </div>

              {/* Decorative Elements */}
              <div className="absolute -top-10 -left-10 w-40 h-40 bg-primary/10 rounded-full blur-3xl" />
              <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-primary/10 rounded-full blur-3xl" />
            </div>
          </div>
        </div>
      </section>

      {/* Trust Stats Section - 3 colonnes avec animations haut niveau */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-background to-accent/5">
        <div className="container mx-auto">
          <div className="grid grid-cols-3 gap-8 max-w-5xl mx-auto stagger-children">
            {/* 150+ Taches */}
            <div className="group bg-card border-2 border-border rounded-3xl p-10 text-center shadow-lg hover:shadow-2xl hover:border-blue-500 hover:-translate-y-4 transition-all duration-500 cursor-pointer relative overflow-hidden hover-lift animate-fade-in-up ripple-effect">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/0 via-blue-500/5 to-blue-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-blue-500 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500" />
              <div className="absolute -top-20 -right-20 w-40 h-40 bg-blue-500/10 rounded-full blur-3xl group-hover:bg-blue-500/30 transition-all duration-700" />
              <div className="relative z-10">
                <div className="w-16 h-16 bg-blue-500/10 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:bg-blue-500/20 group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 border-2 border-blue-500/30 group-hover:border-blue-500">
                  <Zap className="w-8 h-8 text-blue-500 group-hover:animate-pulse" />
                </div>
                <div className="text-6xl md:text-7xl font-bold text-primary mb-4 group-hover:scale-110 group-hover:text-blue-500 transition-all duration-500">150+</div>
                <div className="text-lg font-semibold text-foreground mb-3 group-hover:text-blue-500 transition-colors">{t('trustStats.automatedTasks', 'Taches Automatisees')}</div>
                <p className="text-sm text-muted-foreground leading-relaxed opacity-70 group-hover:opacity-100 transition-all duration-300">{t('trustStats.automatedTasksDesc', 'Processus automatises pour ventes, marketing, operations et support client.')}</p>
              </div>
            </div>
            {/* 99.9% Disponibilite */}
            <div className="group bg-card border-2 border-border rounded-3xl p-10 text-center shadow-lg hover:shadow-2xl hover:border-green-500 hover:-translate-y-4 transition-all duration-500 cursor-pointer relative overflow-hidden hover-lift animate-fade-in-up ripple-effect">
              <div className="absolute inset-0 bg-gradient-to-br from-green-500/0 via-green-500/5 to-green-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-green-500 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500" />
              <div className="absolute -top-20 -right-20 w-40 h-40 bg-green-500/10 rounded-full blur-3xl group-hover:bg-green-500/30 transition-all duration-700" />
              <div className="relative z-10">
                <div className="w-16 h-16 bg-green-500/10 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:bg-green-500/20 group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 border-2 border-green-500/30 group-hover:border-green-500">
                  <Shield className="w-8 h-8 text-green-500 group-hover:animate-pulse" />
                </div>
                <div className="text-6xl md:text-7xl font-bold text-primary mb-4 group-hover:scale-110 group-hover:text-green-500 transition-all duration-500">99.9%</div>
                <div className="text-lg font-semibold text-foreground mb-3 group-hover:text-green-500 transition-colors">{t('trustStats.availability', 'Garantie de Disponibilite')}</div>
                <p className="text-sm text-muted-foreground leading-relaxed opacity-70 group-hover:opacity-100 transition-all duration-300">{t('trustStats.availabilityDesc', 'Infrastructure haute disponibilite avec redondance et failover automatique.')}</p>
              </div>
            </div>
            {/* 24/7 Support */}
            <div className="group bg-card border-2 border-border rounded-3xl p-10 text-center shadow-lg hover:shadow-2xl hover:border-purple-500 hover:-translate-y-4 transition-all duration-500 cursor-pointer relative overflow-hidden hover-lift animate-fade-in-up ripple-effect">
              <div className="absolute inset-0 bg-gradient-to-br from-purple-500/0 via-purple-500/5 to-purple-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-purple-500 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500" />
              <div className="absolute -top-20 -right-20 w-40 h-40 bg-purple-500/10 rounded-full blur-3xl group-hover:bg-purple-500/30 transition-all duration-700" />
              <div className="relative z-10">
                <div className="w-16 h-16 bg-purple-500/10 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:bg-purple-500/20 group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 border-2 border-purple-500/30 group-hover:border-purple-500">
                  <Headphones className="w-8 h-8 text-purple-500 group-hover:animate-pulse" />
                </div>
                <div className="text-6xl md:text-7xl font-bold text-primary mb-4 group-hover:scale-110 group-hover:text-purple-500 transition-all duration-500">24/7</div>
                <div className="text-lg font-semibold text-foreground mb-3 group-hover:text-purple-500 transition-colors">{t('trustStats.support', 'Support Disponible')}</div>
                <p className="text-sm text-muted-foreground leading-relaxed opacity-70 group-hover:opacity-100 transition-all duration-300">{t('trustStats.supportDesc', 'Assistance continue avec agents IA et equipe humaine en backup.')}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Automation Ticker */}
      <AutomationTicker />

      {/* Pitch Block - Multi-Agents Solution */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-primary/5 via-background to-primary/10 border-y border-border">
        <div className="container mx-auto">
          <div className="max-w-6xl mx-auto">
            {/* Problem Statement */}
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                {t('pitch.problem')}
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                {t('pitch.problemDesc')}
                <span className="text-primary font-semibold"> {t('pitch.leadsLost')}</span>
                {" "}{t('pitch.toolsNoTalk')}
              </p>
            </div>

            {/* Solution */}
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                {t('pitch.solution')}
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
                {t('pitch.solutionDesc')} <span className="text-primary font-semibold">{t('pitch.solutionHighlight')}</span> {t('pitch.solutionFor')}
              </p>

              {/* Agents Grid - 4 colonnes horizontales avec animations */}
              <div className="grid grid-cols-4 gap-5 mb-12 stagger-children">
                <Card className="group border-border hover:shadow-2xl transition-all duration-500 hover:border-blue-500 hover:-translate-y-4 h-full overflow-hidden relative animate-fade-in-up hover-lift ripple-effect">
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-500/0 to-blue-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-blue-500 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500" />
                  <CardContent className="pt-6 pb-6 relative z-10">
                    <div className="w-14 h-14 bg-blue-500/10 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:bg-blue-500/20 group-hover:scale-110 group-hover:rotate-6 transition-all duration-500">
                      <Target className="w-7 h-7 text-blue-500 group-hover:animate-pulse" />
                    </div>
                    <h3 className="font-bold text-base text-foreground mb-2 text-center group-hover:text-blue-500 transition-colors">{t('pitch.agentSales')}</h3>
                    <p className="text-xs text-muted-foreground text-center leading-relaxed">
                      {t('pitch.agentSalesDesc')}
                    </p>
                  </CardContent>
                </Card>

                <Card className="group border-border hover:shadow-2xl transition-all duration-500 hover:border-purple-500 hover:-translate-y-4 h-full overflow-hidden relative animate-fade-in-up hover-lift ripple-effect">
                  <div className="absolute inset-0 bg-gradient-to-br from-purple-500/0 to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-purple-500 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500" />
                  <CardContent className="pt-6 pb-6 relative z-10">
                    <div className="w-14 h-14 bg-purple-500/10 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:bg-purple-500/20 group-hover:scale-110 group-hover:rotate-6 transition-all duration-500">
                      <TrendingUp className="w-7 h-7 text-purple-500 group-hover:animate-pulse" />
                    </div>
                    <h3 className="font-bold text-base text-foreground mb-2 text-center group-hover:text-purple-500 transition-colors">{t('pitch.agentMarketing')}</h3>
                    <p className="text-xs text-muted-foreground text-center leading-relaxed">
                      {t('pitch.agentMarketingDesc')}
                    </p>
                  </CardContent>
                </Card>

                <Card className="group border-border hover:shadow-2xl transition-all duration-500 hover:border-orange-500 hover:-translate-y-4 h-full overflow-hidden relative animate-fade-in-up hover-lift ripple-effect">
                  <div className="absolute inset-0 bg-gradient-to-br from-orange-500/0 to-orange-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-orange-500 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500" />
                  <CardContent className="pt-6 pb-6 relative z-10">
                    <div className="w-14 h-14 bg-orange-500/10 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:bg-orange-500/20 group-hover:scale-110 group-hover:rotate-6 transition-all duration-500">
                      <Server className="w-7 h-7 text-orange-500 group-hover:animate-pulse" />
                    </div>
                    <h3 className="font-bold text-base text-foreground mb-2 text-center group-hover:text-orange-500 transition-colors">{t('pitch.agentOperations')}</h3>
                    <p className="text-xs text-muted-foreground text-center leading-relaxed">
                      {t('pitch.agentOperationsDesc')}
                    </p>
                  </CardContent>
                </Card>

                <Card className="group border-border hover:shadow-2xl transition-all duration-500 hover:border-green-500 hover:-translate-y-4 h-full overflow-hidden relative animate-fade-in-up hover-lift ripple-effect">
                  <div className="absolute inset-0 bg-gradient-to-br from-green-500/0 to-green-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-green-500 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500" />
                  <CardContent className="pt-6 pb-6 relative z-10">
                    <div className="w-14 h-14 bg-green-500/10 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:bg-green-500/20 group-hover:scale-110 group-hover:rotate-6 transition-all duration-500">
                      <Headphones className="w-7 h-7 text-green-500 group-hover:animate-pulse" />
                    </div>
                    <h3 className="font-bold text-base text-foreground mb-2 text-center group-hover:text-green-500 transition-colors">{t('pitch.agentSupport')}</h3>
                    <p className="text-xs text-muted-foreground text-center leading-relaxed">
                      {t('pitch.agentSupportDesc')}
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>

            {/* Results - 3 colonnes avec animations */}
            <div className="bg-card rounded-3xl p-10 border border-border mb-12 animate-fade-in-up">
              <h3 className="text-2xl font-bold text-foreground mb-8 text-center">{t('pitch.results')}</h3>
              <div className="grid grid-cols-3 gap-8 stagger-children">
                <div className="group text-center p-8 rounded-2xl hover:bg-green-500/10 border-2 border-transparent hover:border-green-500/50 transition-all duration-500 cursor-pointer hover:-translate-y-2 ripple-effect">
                  <div className="text-5xl font-bold text-primary group-hover:scale-125 group-hover:text-green-500 transition-all duration-500">+340%</div>
                  <div className="text-base text-muted-foreground mt-3 group-hover:text-foreground transition-colors">{t('pitch.conversionRate')}</div>
                </div>
                <div className="group text-center p-8 rounded-2xl hover:bg-blue-500/10 border-2 border-transparent hover:border-blue-500/50 transition-all duration-500 cursor-pointer hover:-translate-y-2 ripple-effect">
                  <div className="text-5xl font-bold text-primary group-hover:scale-125 group-hover:text-blue-500 transition-all duration-500">-70%</div>
                  <div className="text-base text-muted-foreground mt-3 group-hover:text-foreground transition-colors">{t('pitch.acquisitionCost')}</div>
                </div>
                <div className="group text-center p-8 rounded-2xl hover:bg-purple-500/10 border-2 border-transparent hover:border-purple-500/50 transition-all duration-500 cursor-pointer hover:-translate-y-2 ripple-effect">
                  <div className="text-5xl font-bold text-primary group-hover:scale-125 group-hover:text-purple-500 transition-all duration-500">-73%</div>
                  <div className="text-base text-muted-foreground mt-3 group-hover:text-foreground transition-colors">{t('pitch.manualTasks')}</div>
                </div>
              </div>
            </div>

            {/* Security & CTA */}
            <div className="text-center">
              <div className="flex flex-wrap items-center justify-center gap-4 mb-8">
                <span className="px-3 py-1 bg-primary/10 text-primary text-sm rounded-full">AES-256</span>
                <span className="px-3 py-1 bg-primary/10 text-primary text-sm rounded-full">GDPR</span>
                <span className="px-3 py-1 bg-primary/10 text-primary text-sm rounded-full">SOC 2 Type II</span>
                <span className="px-3 py-1 bg-primary/10 text-primary text-sm rounded-full">ISO 27001</span>
              </div>

              <p className="text-2xl font-bold text-foreground mb-6">
                "{t('pitch.slogan')}"
              </p>

              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <Button size="lg" className="gradient-primary text-lg px-8" asChild>
                  <Link href="/vente">
                    {t('hero.cta2')}
                    <ArrowRight className="ml-2 w-5 h-5" />
                  </Link>
                </Button>
                <Button size="lg" variant="outline" className="text-lg px-8" asChild>
                  <a href={`https://wa.me/${whatsappNumber}`} target="_blank" rel="noopener noreferrer">
                    {t('pitch.freeAudit')}
                  </a>
                </Button>
              </div>

              <p className="text-muted-foreground mt-4">
                {t('pitch.aiWorksSleep')}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 px-4 sm:px-6 lg:px-8 bg-card">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">{t('services.title')}</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              {t('services.description')}
            </p>
          </div>

          <div className="grid grid-cols-3 gap-8 stagger-children">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <Card key={index} className="group border-border hover:shadow-2xl hover:border-primary/50 hover:-translate-y-4 transition-all duration-500 overflow-hidden relative animate-fade-in-up hover-lift ripple-effect">
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/0 to-primary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-primary to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500" />
                  <CardHeader className="relative z-10">
                    <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mb-4 group-hover:bg-primary/20 group-hover:scale-110 group-hover:rotate-6 transition-all duration-500">
                      <Icon className="w-7 h-7 text-primary group-hover:animate-pulse" />
                    </div>
                    <CardTitle className="text-xl group-hover:text-primary transition-colors duration-300">{service.title}</CardTitle>
                  </CardHeader>
                  <CardContent className="relative z-10">
                    <CardDescription className="text-base leading-relaxed">{service.description}</CardDescription>
                  </CardContent>
                </Card>
              );
            })}
          </div>

          {/* Architecture Principles - 3 blocs avec animations */}
          <div className="mt-16 bg-gradient-to-br from-primary/5 via-background to-primary/10 rounded-3xl p-8 md:p-12 border border-primary/20">
            <div className="max-w-6xl mx-auto">
              <h3 className="text-3xl font-bold text-foreground mb-10 text-center">
                {t('services.architecturePrinciples')}
              </h3>
              <div className="grid grid-cols-3 gap-8">
                {/* Bloc 1 - Securite */}
                <div className="group bg-card rounded-2xl p-8 border border-border hover:shadow-2xl hover:border-primary/50 hover:-translate-y-3 transition-all duration-500 cursor-pointer overflow-hidden relative">
                  <div className="absolute inset-0 bg-gradient-to-br from-red-500/0 to-red-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <div className="relative z-10">
                    <div className="w-16 h-16 bg-red-500/10 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-red-500/20 group-hover:scale-110 transition-all duration-300">
                      <Lock className="w-8 h-8 text-red-500" />
                    </div>
                    <h4 className="font-bold text-xl text-foreground mb-3 group-hover:text-red-500 transition-colors">{t('services.closedModifications')}</h4>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {t('services.closedModificationsDesc')}
                    </p>
                  </div>
                </div>

                {/* Bloc 2 - Extensions */}
                <div className="group bg-card rounded-2xl p-8 border border-border hover:shadow-2xl hover:border-primary/50 hover:-translate-y-3 transition-all duration-500 cursor-pointer overflow-hidden relative">
                  <div className="absolute inset-0 bg-gradient-to-br from-green-500/0 to-green-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <div className="relative z-10">
                    <div className="w-16 h-16 bg-green-500/10 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-green-500/20 group-hover:scale-110 transition-all duration-300">
                      <Puzzle className="w-8 h-8 text-green-500" />
                    </div>
                    <h4 className="font-bold text-xl text-foreground mb-3 group-hover:text-green-500 transition-colors">{t('services.openExtensions')}</h4>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {t('services.openExtensionsDesc')}
                    </p>
                  </div>
                </div>

                {/* Bloc 3 - Automatisation */}
                <div className="group bg-card rounded-2xl p-8 border border-border hover:shadow-2xl hover:border-primary/50 hover:-translate-y-3 transition-all duration-500 cursor-pointer overflow-hidden relative">
                  <div className="absolute inset-0 bg-gradient-to-br from-yellow-500/0 to-yellow-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <div className="relative z-10">
                    <div className="w-16 h-16 bg-yellow-500/10 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-yellow-500/20 group-hover:scale-110 transition-all duration-300">
                      <Zap className="w-8 h-8 text-yellow-500" />
                    </div>
                    <h4 className="font-bold text-xl text-foreground mb-3 group-hover:text-yellow-500 transition-colors">{t('services.intelligentAuto')}</h4>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {t('services.intelligentAutoDesc')}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Automation Solutions Section */}
      <AutomationSolutions />

      {/* Architecture Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-card border-y border-border">
        <div className="container mx-auto">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              {t('architecture.title')}
            </h2>
            <p className="text-xl text-muted-foreground">
              {t('architecture.description')}
            </p>
          </div>
          <div className="bg-background rounded-2xl p-8 border border-border">
            <AnimatedArchitecture />
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section id="portfolio" className="py-20 px-4 sm:px-6 lg:px-8 bg-background">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">{t('portfolio.title')}</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              {t('portfolio.description')}
            </p>
          </div>

          <div className="grid grid-cols-3 gap-8 stagger-children">
            {portfolio.map((project, index) => (
              <Card key={index} className="group border-border hover:shadow-2xl hover:border-primary/50 hover:-translate-y-4 transition-all duration-500 overflow-hidden relative animate-fade-in-up hover-lift ripple-effect">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/0 to-primary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-primary to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500" />
                <CardHeader className="relative z-10">
                  <CardTitle className="text-2xl group-hover:text-primary transition-colors duration-300">{project.title}</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4 relative z-10">
                  <p className="text-muted-foreground leading-relaxed">{project.description}</p>
                  <div>
                    <p className="text-sm font-semibold text-foreground mb-3">{t('portfolio.techUsed')}</p>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech, techIndex) => (
                        <span
                          key={techIndex}
                          className="px-3 py-1.5 bg-primary/10 text-primary text-xs font-medium rounded-full group-hover:bg-primary/20 transition-colors duration-300"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Interactive Demo Section */}
      <InteractiveDemo />

      {/* About Section */}
      <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 bg-card">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">{t('about.title')}</h2>
              <p className="text-xl text-muted-foreground">
                {t('about.subtitle')}
              </p>
            </div>

            <div className="prose prose-lg max-w-none">
              <p className="text-muted-foreground leading-relaxed text-lg mb-8 text-center">
                {t('about.description')}
              </p>

              <div className="grid grid-cols-3 gap-6 my-8 stagger-children">
                <div className="group bg-background rounded-2xl p-8 border border-border hover:shadow-2xl hover:border-primary/50 hover:-translate-y-4 transition-all duration-500 animate-fade-in-up hover-lift ripple-effect">
                  <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mb-5 group-hover:bg-primary/20 group-hover:scale-110 group-hover:rotate-6 transition-all duration-500">
                    <Building2 className="w-7 h-7 text-primary group-hover:animate-pulse" />
                  </div>
                  <h3 className="text-xl font-bold text-foreground mb-4 group-hover:text-primary transition-colors">{t('about.expertise')}</h3>
                  <ul className="space-y-3">
                    <li className="flex items-start space-x-3">
                      <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                      <span className="text-muted-foreground text-sm">{t('about.expertiseItems.0')}</span>
                    </li>
                    <li className="flex items-start space-x-3">
                      <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                      <span className="text-muted-foreground text-sm">{t('about.expertiseItems.1')}</span>
                    </li>
                  </ul>
                </div>

                <div className="group bg-background rounded-2xl p-8 border border-border hover:shadow-2xl hover:border-primary/50 hover:-translate-y-4 transition-all duration-500 animate-fade-in-up hover-lift ripple-effect">
                  <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mb-5 group-hover:bg-primary/20 group-hover:scale-110 group-hover:rotate-6 transition-all duration-500">
                    <Code2 className="w-7 h-7 text-primary group-hover:animate-pulse" />
                  </div>
                  <h3 className="text-xl font-bold text-foreground mb-4 group-hover:text-primary transition-colors">{t('services.cleanArchitecture', 'Architecture')}</h3>
                  <ul className="space-y-3">
                    <li className="flex items-start space-x-3">
                      <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                      <span className="text-muted-foreground text-sm">{t('about.expertiseItems.2')}</span>
                    </li>
                    <li className="flex items-start space-x-3">
                      <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                      <span className="text-muted-foreground text-sm">{t('about.expertiseItems.3')}</span>
                    </li>
                  </ul>
                </div>

                <div className="group bg-background rounded-2xl p-6 border border-border hover:shadow-2xl hover:border-primary/50 hover:-translate-y-4 transition-all duration-500 animate-fade-in-up hover-lift">
                  <h3 className="text-xl font-bold text-foreground mb-5 group-hover:text-primary transition-colors">{t('about.solution', 'Notre Solution')}</h3>
                  {/* Animated Solution Flow */}
                  <div className="space-y-4">
                    {/* Step 1 */}
                    <div className="flex items-center gap-3 p-3 rounded-xl bg-blue-500/10 border border-blue-500/30 hover:border-blue-500 transition-all group/step">
                      <div className="w-10 h-10 bg-blue-500 rounded-full flex items-center justify-center text-white font-bold animate-pulse">1</div>
                      <div>
                        <div className="font-semibold text-foreground">Analyse</div>
                        <div className="text-xs text-muted-foreground">IA analyse votre besoin</div>
                      </div>
                      <Zap className="w-5 h-5 text-blue-500 ml-auto group-hover/step:animate-bounce" />
                    </div>
                    {/* Arrow */}
                    <div className="flex justify-center">
                      <div className="w-0.5 h-4 bg-gradient-to-b from-blue-500 to-purple-500"></div>
                    </div>
                    {/* Step 2 */}
                    <div className="flex items-center gap-3 p-3 rounded-xl bg-purple-500/10 border border-purple-500/30 hover:border-purple-500 transition-all group/step">
                      <div className="w-10 h-10 bg-purple-500 rounded-full flex items-center justify-center text-white font-bold animate-pulse" style={{animationDelay: '0.3s'}}>2</div>
                      <div>
                        <div className="font-semibold text-foreground">Traitement</div>
                        <div className="text-xs text-muted-foreground">Agents executent les taches</div>
                      </div>
                      <Bot className="w-5 h-5 text-purple-500 ml-auto group-hover/step:animate-spin" />
                    </div>
                    {/* Arrow */}
                    <div className="flex justify-center">
                      <div className="w-0.5 h-4 bg-gradient-to-b from-purple-500 to-green-500"></div>
                    </div>
                    {/* Step 3 */}
                    <div className="flex items-center gap-3 p-3 rounded-xl bg-green-500/10 border border-green-500/30 hover:border-green-500 transition-all group/step">
                      <div className="w-10 h-10 bg-green-500 rounded-full flex items-center justify-center text-white font-bold animate-pulse" style={{animationDelay: '0.6s'}}>3</div>
                      <div>
                        <div className="font-semibold text-foreground">Resultat</div>
                        <div className="text-xs text-muted-foreground">Livraison automatisee</div>
                      </div>
                      <CheckCircle2 className="w-5 h-5 text-green-500 ml-auto group-hover/step:scale-125 transition-transform" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section - Grand Schema Automatisation */}
      <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-background via-accent/5 to-background">
        <div className="container mx-auto">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">{t('contact.title')}</h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Decouvrez comment notre systeme automatise transforme votre business
              </p>
            </div>

            {/* Grand Schema Automatisation Anime */}
            <div className="relative bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 rounded-3xl p-8 md:p-12 mb-16 overflow-hidden border border-slate-700">
              {/* Background effects */}
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(59,130,246,0.1),transparent_50%)]"></div>
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(147,51,234,0.1),transparent_50%)]"></div>
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-green-500"></div>

              {/* Title */}
              <div className="text-center mb-12 relative z-10">
                <div className="inline-flex items-center gap-2 bg-green-500/20 text-green-400 px-4 py-2 rounded-full text-sm font-medium mb-4">
                  <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                  Systeme Actif 24/7
                </div>
                <h3 className="text-3xl md:text-4xl font-bold text-white mb-2">Pipeline d'Automatisation Intelligent</h3>
                <p className="text-slate-400">De la requete client au resultat - 100% automatise</p>
              </div>

              {/* Schema Flow - Horizontal */}
              <div className="flex flex-col md:flex-row items-center justify-between gap-4 md:gap-2 relative z-10">
                {/* Step 1 - Input */}
                <div className="group flex-1 bg-blue-500/10 border-2 border-blue-500/30 hover:border-blue-500 rounded-2xl p-6 text-center transition-all duration-500 hover:scale-105 hover:bg-blue-500/20">
                  <div className="w-16 h-16 bg-blue-500 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:rotate-12 transition-transform duration-500">
                    <MessageSquare className="w-8 h-8 text-white" />
                  </div>
                  <h4 className="text-xl font-bold text-white mb-2">1. ENTREE</h4>
                  <p className="text-blue-200 text-sm mb-3">Requete Client</p>
                  <div className="space-y-1 text-xs text-slate-400">
                    <div className="flex items-center justify-center gap-2">
                      <div className="w-1.5 h-1.5 bg-blue-400 rounded-full"></div>
                      <span>API REST</span>
                    </div>
                    <div className="flex items-center justify-center gap-2">
                      <div className="w-1.5 h-1.5 bg-blue-400 rounded-full"></div>
                      <span>WebSocket</span>
                    </div>
                    <div className="flex items-center justify-center gap-2">
                      <div className="w-1.5 h-1.5 bg-blue-400 rounded-full"></div>
                      <span>Webhooks</span>
                    </div>
                  </div>
                </div>

                {/* Arrow 1 */}
                <div className="hidden md:flex items-center">
                  <div className="w-12 h-1 bg-gradient-to-r from-blue-500 to-purple-500 relative">
                    <div className="absolute right-0 top-1/2 -translate-y-1/2 w-0 h-0 border-l-8 border-l-purple-500 border-y-4 border-y-transparent"></div>
                  </div>
                </div>
                <div className="md:hidden w-1 h-8 bg-gradient-to-b from-blue-500 to-purple-500"></div>

                {/* Step 2 - AI Processing */}
                <div className="group flex-1 bg-purple-500/10 border-2 border-purple-500/30 hover:border-purple-500 rounded-2xl p-6 text-center transition-all duration-500 hover:scale-105 hover:bg-purple-500/20">
                  <div className="w-16 h-16 bg-purple-500 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:animate-spin transition-transform duration-500" style={{animationDuration: '3s'}}>
                    <Cpu className="w-8 h-8 text-white" />
                  </div>
                  <h4 className="text-xl font-bold text-white mb-2">2. TRAITEMENT</h4>
                  <p className="text-purple-200 text-sm mb-3">4 Agents IA</p>
                  <div className="grid grid-cols-2 gap-2 text-xs">
                    <div className="bg-purple-500/20 rounded-lg p-2 text-purple-300">Ventes</div>
                    <div className="bg-purple-500/20 rounded-lg p-2 text-purple-300">Marketing</div>
                    <div className="bg-purple-500/20 rounded-lg p-2 text-purple-300">Operations</div>
                    <div className="bg-purple-500/20 rounded-lg p-2 text-purple-300">Support</div>
                  </div>
                </div>

                {/* Arrow 2 */}
                <div className="hidden md:flex items-center">
                  <div className="w-12 h-1 bg-gradient-to-r from-purple-500 to-orange-500 relative">
                    <div className="absolute right-0 top-1/2 -translate-y-1/2 w-0 h-0 border-l-8 border-l-orange-500 border-y-4 border-y-transparent"></div>
                  </div>
                </div>
                <div className="md:hidden w-1 h-8 bg-gradient-to-b from-purple-500 to-orange-500"></div>

                {/* Step 3 - Data */}
                <div className="group flex-1 bg-orange-500/10 border-2 border-orange-500/30 hover:border-orange-500 rounded-2xl p-6 text-center transition-all duration-500 hover:scale-105 hover:bg-orange-500/20">
                  <div className="w-16 h-16 bg-orange-500 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-500">
                    <Database className="w-8 h-8 text-white" />
                  </div>
                  <h4 className="text-xl font-bold text-white mb-2">3. DONNEES</h4>
                  <p className="text-orange-200 text-sm mb-3">Stockage Securise</p>
                  <div className="space-y-1 text-xs text-slate-400">
                    <div className="flex items-center justify-center gap-2">
                      <Lock className="w-3 h-3 text-orange-400" />
                      <span>AES-256</span>
                    </div>
                    <div className="flex items-center justify-center gap-2">
                      <Shield className="w-3 h-3 text-orange-400" />
                      <span>GDPR Ready</span>
                    </div>
                    <div className="flex items-center justify-center gap-2">
                      <Server className="w-3 h-3 text-orange-400" />
                      <span>99.9% Uptime</span>
                    </div>
                  </div>
                </div>

                {/* Arrow 3 */}
                <div className="hidden md:flex items-center">
                  <div className="w-12 h-1 bg-gradient-to-r from-orange-500 to-green-500 relative">
                    <div className="absolute right-0 top-1/2 -translate-y-1/2 w-0 h-0 border-l-8 border-l-green-500 border-y-4 border-y-transparent"></div>
                  </div>
                </div>
                <div className="md:hidden w-1 h-8 bg-gradient-to-b from-orange-500 to-green-500"></div>

                {/* Step 4 - Output */}
                <div className="group flex-1 bg-green-500/10 border-2 border-green-500/30 hover:border-green-500 rounded-2xl p-6 text-center transition-all duration-500 hover:scale-105 hover:bg-green-500/20">
                  <div className="w-16 h-16 bg-green-500 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:rotate-12 transition-transform duration-500">
                    <Zap className="w-8 h-8 text-white" />
                  </div>
                  <h4 className="text-xl font-bold text-white mb-2">4. RESULTAT</h4>
                  <p className="text-green-200 text-sm mb-3">Livraison Auto</p>
                  <div className="space-y-1 text-xs text-slate-400">
                    <div className="flex items-center justify-center gap-2">
                      <div className="w-1.5 h-1.5 bg-green-400 rounded-full animate-pulse"></div>
                      <span>Temps reel</span>
                    </div>
                    <div className="flex items-center justify-center gap-2">
                      <div className="w-1.5 h-1.5 bg-green-400 rounded-full animate-pulse"></div>
                      <span>Rapports</span>
                    </div>
                    <div className="flex items-center justify-center gap-2">
                      <div className="w-1.5 h-1.5 bg-green-400 rounded-full animate-pulse"></div>
                      <span>Notifications</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Stats Bar */}
              <div className="flex flex-wrap justify-center gap-6 mt-10 pt-8 border-t border-slate-700 relative z-10">
                <div className="flex items-center gap-2 text-slate-300">
                  <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                  <span className="text-sm">Latence &lt;50ms</span>
                </div>
                <div className="flex items-center gap-2 text-slate-300">
                  <div className="w-3 h-3 bg-blue-500 rounded-full animate-pulse"></div>
                  <span className="text-sm">99.9% Disponibilite</span>
                </div>
                <div className="flex items-center gap-2 text-slate-300">
                  <div className="w-3 h-3 bg-purple-500 rounded-full animate-pulse"></div>
                  <span className="text-sm">150+ Taches/jour</span>
                </div>
                <div className="flex items-center gap-2 text-slate-300">
                  <div className="w-3 h-3 bg-orange-500 rounded-full animate-pulse"></div>
                  <span className="text-sm">Multi-langues</span>
                </div>
              </div>
            </div>

            {/* Contact Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* WhatsApp */}
              <a
                href={`https://wa.me/${whatsappNumber}?text=Bonjour, je suis interesse par vos solutions d'automatisation.`}
                target="_blank"
                rel="noopener noreferrer"
                className="group"
              >
                <div className="relative bg-gradient-to-br from-[#25D366] to-[#128C7E] rounded-2xl p-8 text-white overflow-hidden hover:scale-105 transition-all duration-500 shadow-xl hover:shadow-[#25D366]/30">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/2 group-hover:scale-150 transition-transform duration-700"></div>
                  <MessageSquare className="w-12 h-12 mb-4" />
                  <h3 className="text-2xl font-bold mb-2">WhatsApp</h3>
                  <p className="text-white/80 mb-4">Reponse immediate 24/7</p>
                  <div className="text-lg font-semibold">+43 681 2046 0618</div>
                </div>
              </a>

              {/* Email */}
              <a
                href="mailto:asmaewarter5@gmail.com?subject=Demande d'information - Solutions Automatisation&body=Bonjour,%0D%0A%0D%0AJe suis interesse par vos solutions d'automatisation.%0D%0A%0D%0ACordialement"
                className="group"
              >
                <div className="relative bg-gradient-to-br from-blue-600 to-indigo-700 rounded-2xl p-8 text-white overflow-hidden hover:scale-105 transition-all duration-500 shadow-xl hover:shadow-blue-500/30">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/2 group-hover:scale-150 transition-transform duration-700"></div>
                  <Mail className="w-12 h-12 mb-4" />
                  <h3 className="text-2xl font-bold mb-2">Email</h3>
                  <p className="text-white/80 mb-4">Pour demandes detaillees</p>
                  <div className="text-lg font-semibold">asmaewarter5@gmail.com</div>
                </div>
              </a>

              {/* Phone */}
              <a
                href="tel:+4368120460618"
                className="group"
              >
                <div className="relative bg-gradient-to-br from-purple-600 to-fuchsia-700 rounded-2xl p-8 text-white overflow-hidden hover:scale-105 transition-all duration-500 shadow-xl hover:shadow-purple-500/30">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/2 group-hover:scale-150 transition-transform duration-700"></div>
                  <Phone className="w-12 h-12 mb-4" />
                  <h3 className="text-2xl font-bold mb-2">Telephone</h3>
                  <p className="text-white/80 mb-4">Appel direct</p>
                  <div className="text-lg font-semibold">+43 681 2046 0618</div>
                </div>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Chat Button */}
      <button
        onClick={() => setChatOpen(!chatOpen)}
        className="fixed bottom-6 right-6 w-14 h-14 bg-primary hover:bg-primary/90 text-primary-foreground rounded-full shadow-elegant-lg flex items-center justify-center transition-all duration-300 hover:scale-110 z-40"
        aria-label={t('chat.open', 'Open chat')}
      >
        <Bot className="w-6 h-6" />
      </button>

      {/* Chat Box */}
      <ChatBox isOpen={chatOpen} onClose={() => setChatOpen(false)} />

      <Footer />
    </div>
  );
}
