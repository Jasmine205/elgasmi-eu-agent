import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Play, Zap, TrendingUp, CheckCircle2, Loader2, Activity, BarChart3 } from "lucide-react";
import { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";

export default function InteractiveDemo() {
  const { t } = useTranslation();
  const [activeScenario, setActiveScenario] = useState<number>(0);
  const [isRunning, setIsRunning] = useState(false);
  const [progress, setProgress] = useState(0);
  const [showResults, setShowResults] = useState(false);
  const [liveMetrics, setLiveMetrics] = useState({ requests: 0, latency: 0, success: 0 });

  const scenarios = [
    {
      id: 0,
      title: t('demo.scenario1Title', 'Traitement Commandes'),
      description: t('demo.scenario1Desc', 'Automatisation complete du flux'),
      icon: Zap,
      color: "blue",
      metrics: { requests: 1247, latency: 45, success: 99.9 },
    },
    {
      id: 1,
      title: t('demo.scenario2Title', 'Detection Anomalies'),
      description: t('demo.scenario2Desc', 'IA predictive en temps reel'),
      icon: TrendingUp,
      color: "purple",
      metrics: { requests: 8934, latency: 12, success: 99.8 },
    },
    {
      id: 2,
      title: t('demo.scenario3Title', 'Optimisation Ressources'),
      description: t('demo.scenario3Desc', 'Allocation dynamique intelligente'),
      icon: BarChart3,
      color: "green",
      metrics: { requests: 3456, latency: 28, success: 99.95 },
    },
  ];

  // Simulation temps reel
  useEffect(() => {
    if (showResults) {
      const interval = setInterval(() => {
        setLiveMetrics(prev => ({
          requests: prev.requests + Math.floor(Math.random() * 10),
          latency: Math.max(10, prev.latency + (Math.random() - 0.5) * 5),
          success: Math.min(100, 99.5 + Math.random() * 0.5),
        }));
      }, 1000);
      return () => clearInterval(interval);
    }
  }, [showResults]);

  const handleRunDemo = () => {
    setIsRunning(true);
    setShowResults(false);
    setProgress(0);
    setLiveMetrics(scenarios[activeScenario].metrics);

    const progressInterval = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          clearInterval(progressInterval);
          setIsRunning(false);
          setShowResults(true);
          return 100;
        }
        return prev + 5;
      });
    }, 100);
  };

  const colorClasses: Record<string, { bg: string; text: string; border: string; gradient: string }> = {
    blue: { bg: "bg-blue-500/10", text: "text-blue-500", border: "border-blue-500", gradient: "from-blue-500/0 to-blue-500/10" },
    purple: { bg: "bg-purple-500/10", text: "text-purple-500", border: "border-purple-500", gradient: "from-purple-500/0 to-purple-500/10" },
    green: { bg: "bg-green-500/10", text: "text-green-500", border: "border-green-500", gradient: "from-green-500/0 to-green-500/10" },
  };

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-background to-accent/5">
      <div className="container mx-auto">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <Badge className="mb-4 gradient-primary">{t('demo.badge', 'Demo Interactive')}</Badge>
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              {t('demo.title', 'Voyez la Puissance en Action')}
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              {t('demo.description', 'Testez nos solutions en temps reel et decouvrez les performances exceptionnelles')}
            </p>
          </div>

          {/* Scenario Selector - 3 blocs horizontaux */}
          <div className="grid grid-cols-3 gap-6 mb-10">
            {scenarios.map((scenario, index) => {
              const Icon = scenario.icon;
              const colors = colorClasses[scenario.color];
              const isActive = activeScenario === index;

              return (
                <button
                  key={scenario.id}
                  onClick={() => {
                    setActiveScenario(index);
                    setShowResults(false);
                    setProgress(0);
                  }}
                  className={`group relative p-6 rounded-2xl border-2 transition-all duration-500 text-left overflow-hidden ${
                    isActive
                      ? `${colors.border} ${colors.bg} shadow-xl -translate-y-1`
                      : "border-border bg-card hover:border-primary/30 hover:shadow-lg hover:-translate-y-2"
                  }`}
                >
                  {/* Gradient overlay */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${colors.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />

                  <div className="relative z-10">
                    <div className={`w-14 h-14 ${colors.bg} rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                      <Icon className={`w-7 h-7 ${colors.text}`} />
                    </div>
                    <h3 className={`font-bold text-lg mb-2 transition-colors ${isActive ? colors.text : "text-foreground group-hover:" + colors.text}`}>
                      {scenario.title}
                    </h3>
                    <p className="text-sm text-muted-foreground">{scenario.description}</p>

                    {isActive && (
                      <div className="mt-4 flex items-center gap-2">
                        <Activity className={`w-4 h-4 ${colors.text} animate-pulse`} />
                        <span className={`text-xs font-medium ${colors.text}`}>{t('demo.active', 'Actif')}</span>
                      </div>
                    )}
                  </div>
                </button>
              );
            })}
          </div>

          {/* Demo Interface */}
          <Card className="border-border overflow-hidden shadow-2xl">
            <CardContent className="p-0">
              {/* Terminal Header */}
              <div className="bg-gradient-to-r from-gray-900 to-gray-800 px-6 py-4 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-red-500" />
                  <div className="w-3 h-3 rounded-full bg-yellow-500" />
                  <div className="w-3 h-3 rounded-full bg-green-500" />
                </div>
                <div className="text-gray-400 text-sm font-mono">elgasmi-agent-v3.0</div>
                <Badge variant="outline" className="text-green-400 border-green-400">
                  {showResults ? "ONLINE" : isRunning ? "PROCESSING" : "READY"}
                </Badge>
              </div>

              {/* Terminal Body */}
              <div className="bg-gray-950 p-6 min-h-[300px] font-mono text-sm">
                {/* Input Command */}
                <div className="text-green-400 mb-4">
                  <span className="text-gray-500">$</span> agent run --scenario={scenarios[activeScenario].title.toLowerCase().replace(/\s/g, '-')} --mode=realtime
                </div>

                {/* Progress Bar */}
                {isRunning && (
                  <div className="mb-6 animate-in fade-in duration-300">
                    <div className="flex items-center gap-3 text-yellow-400 mb-2">
                      <Loader2 className="w-4 h-4 animate-spin" />
                      <span>{t('demo.processing', 'Traitement en cours')}... {progress}%</span>
                    </div>
                    <div className="h-2 bg-gray-800 rounded-full overflow-hidden">
                      <div
                        className="h-full bg-gradient-to-r from-yellow-500 to-green-500 transition-all duration-200"
                        style={{ width: `${progress}%` }}
                      />
                    </div>
                  </div>
                )}

                {/* Results */}
                {showResults && (
                  <div className="space-y-4 animate-in fade-in slide-in-from-bottom-4 duration-500">
                    <div className="text-green-400">
                      <CheckCircle2 className="w-4 h-4 inline mr-2" />
                      {t('demo.complete', 'Execution terminee avec succes')}
                    </div>

                    {/* Live Metrics Grid - 3 colonnes */}
                    <div className="grid grid-cols-3 gap-4 mt-6">
                      <div className="bg-gray-900/50 rounded-xl p-4 border border-gray-800 hover:border-blue-500/50 transition-colors">
                        <div className="text-gray-500 text-xs mb-1">{t('demo.requests', 'Requetes/sec')}</div>
                        <div className="text-2xl font-bold text-blue-400">
                          {liveMetrics.requests.toLocaleString()}
                          <span className="text-xs text-green-400 ml-2 animate-pulse">LIVE</span>
                        </div>
                      </div>
                      <div className="bg-gray-900/50 rounded-xl p-4 border border-gray-800 hover:border-purple-500/50 transition-colors">
                        <div className="text-gray-500 text-xs mb-1">{t('demo.latency', 'Latence')}</div>
                        <div className="text-2xl font-bold text-purple-400">
                          {liveMetrics.latency.toFixed(1)}ms
                        </div>
                      </div>
                      <div className="bg-gray-900/50 rounded-xl p-4 border border-gray-800 hover:border-green-500/50 transition-colors">
                        <div className="text-gray-500 text-xs mb-1">{t('demo.successRate', 'Taux Succes')}</div>
                        <div className="text-2xl font-bold text-green-400">
                          {liveMetrics.success.toFixed(2)}%
                        </div>
                      </div>
                    </div>

                    {/* Output Log */}
                    <div className="mt-4 p-4 bg-gray-900/30 rounded-lg border border-gray-800">
                      <div className="text-gray-400 text-xs mb-2">{t('demo.output', 'Sortie')}:</div>
                      <div className="text-green-300 space-y-1">
                        <div>[INFO] Agent initialise avec succes</div>
                        <div>[INFO] Connexion aux services etablie</div>
                        <div>[INFO] Traitement des donnees en cours...</div>
                        <div className="text-yellow-400">[PERF] Temps d'execution: {(Math.random() * 0.5 + 0.1).toFixed(3)}s</div>
                        <div className="text-green-400">[SUCCESS] Operation completee - ROI estime: +{Math.floor(Math.random() * 200 + 200)}%</div>
                      </div>
                    </div>
                  </div>
                )}

                {/* Idle State */}
                {!isRunning && !showResults && (
                  <div className="text-gray-500 animate-pulse">
                    {t('demo.waiting', 'En attente de commande...')}
                    <span className="animate-blink">_</span>
                  </div>
                )}
              </div>

              {/* Action Bar */}
              <div className="bg-gray-900 px-6 py-4 flex items-center justify-between border-t border-gray-800">
                <div className="flex items-center gap-4 text-gray-400 text-sm">
                  <span className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                    {t('demo.connected', 'Connecte')}
                  </span>
                  <span>|</span>
                  <span>{t('demo.region', 'Region')}: EU-WEST</span>
                </div>
                <Button
                  onClick={handleRunDemo}
                  disabled={isRunning}
                  className="gap-2 gradient-primary"
                  size="lg"
                >
                  {isRunning ? (
                    <>
                      <Loader2 className="w-4 h-4 animate-spin" />
                      {t('demo.running', 'Execution...')}
                    </>
                  ) : (
                    <>
                      <Play className="w-4 h-4" />
                      {t('demo.runButton', 'Lancer Demo')}
                    </>
                  )}
                </Button>
              </div>
            </CardContent>
          </Card>

          {/* Key Features - 3 blocs avec hover explicatif */}
          <div className="mt-16 grid grid-cols-3 gap-8 stagger-children">
            <div className="group text-center p-8 rounded-3xl border-2 border-border hover:border-blue-500 hover:bg-blue-500/5 hover:shadow-2xl hover:-translate-y-4 transition-all duration-500 cursor-pointer relative overflow-hidden hover-lift ripple-effect">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/0 to-blue-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-blue-500 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500" />
              <div className="relative z-10">
                <div className="w-16 h-16 bg-blue-500/10 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:bg-blue-500/20 group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 border-2 border-blue-500/30 group-hover:border-blue-500">
                  <Zap className="w-8 h-8 text-blue-500 group-hover:animate-pulse" />
                </div>
                <h3 className="font-bold text-lg text-foreground mb-2 group-hover:text-blue-500 transition-colors">{t('demo.featureRealtime', 'Temps Reel')}</h3>
                <p className="text-sm text-muted-foreground mb-4">
                  {t('demo.featureRealtimeDesc', 'Traitement instantane avec latence minimale')}
                </p>
                <div className="opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-y-4 group-hover:translate-y-0">
                  <div className="bg-blue-500/10 rounded-xl p-3 border border-blue-500/30 text-xs text-left">
                    <div className="flex items-center gap-2 mb-1"><CheckCircle2 className="w-3 h-3 text-blue-500" /><span>Latence &lt;50ms garantie</span></div>
                    <div className="flex items-center gap-2 mb-1"><CheckCircle2 className="w-3 h-3 text-blue-500" /><span>Streaming temps reel</span></div>
                    <div className="flex items-center gap-2"><CheckCircle2 className="w-3 h-3 text-blue-500" /><span>WebSocket natif</span></div>
                  </div>
                </div>
              </div>
            </div>
            <div className="group text-center p-8 rounded-3xl border-2 border-border hover:border-purple-500 hover:bg-purple-500/5 hover:shadow-2xl hover:-translate-y-4 transition-all duration-500 cursor-pointer relative overflow-hidden hover-lift ripple-effect">
              <div className="absolute inset-0 bg-gradient-to-br from-purple-500/0 to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-purple-500 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500" />
              <div className="relative z-10">
                <div className="w-16 h-16 bg-purple-500/10 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:bg-purple-500/20 group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 border-2 border-purple-500/30 group-hover:border-purple-500">
                  <TrendingUp className="w-8 h-8 text-purple-500 group-hover:animate-pulse" />
                </div>
                <h3 className="font-bold text-lg text-foreground mb-2 group-hover:text-purple-500 transition-colors">{t('demo.featureOptimization', 'Optimisation IA')}</h3>
                <p className="text-sm text-muted-foreground mb-4">
                  {t('demo.featureOptimizationDesc', 'Apprentissage continu et amelioration automatique')}
                </p>
                <div className="opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-y-4 group-hover:translate-y-0">
                  <div className="bg-purple-500/10 rounded-xl p-3 border border-purple-500/30 text-xs text-left">
                    <div className="flex items-center gap-2 mb-1"><CheckCircle2 className="w-3 h-3 text-purple-500" /><span>Claude AI integre</span></div>
                    <div className="flex items-center gap-2 mb-1"><CheckCircle2 className="w-3 h-3 text-purple-500" /><span>Auto-apprentissage</span></div>
                    <div className="flex items-center gap-2"><CheckCircle2 className="w-3 h-3 text-purple-500" /><span>Predictions avancees</span></div>
                  </div>
                </div>
              </div>
            </div>
            <div className="group text-center p-8 rounded-3xl border-2 border-border hover:border-green-500 hover:bg-green-500/5 hover:shadow-2xl hover:-translate-y-4 transition-all duration-500 cursor-pointer relative overflow-hidden hover-lift ripple-effect">
              <div className="absolute inset-0 bg-gradient-to-br from-green-500/0 to-green-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-green-500 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500" />
              <div className="relative z-10">
                <div className="w-16 h-16 bg-green-500/10 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:bg-green-500/20 group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 border-2 border-green-500/30 group-hover:border-green-500">
                  <CheckCircle2 className="w-8 h-8 text-green-500 group-hover:animate-pulse" />
                </div>
                <h3 className="font-bold text-lg text-foreground mb-2 group-hover:text-green-500 transition-colors">{t('demo.featureReliability', 'Fiabilite 99.9%')}</h3>
                <p className="text-sm text-muted-foreground mb-4">
                  {t('demo.featureReliabilityDesc', 'Disponibilite garantie et tolerance aux pannes')}
                </p>
                <div className="opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-y-4 group-hover:translate-y-0">
                  <div className="bg-green-500/10 rounded-xl p-3 border border-green-500/30 text-xs text-left">
                    <div className="flex items-center gap-2 mb-1"><CheckCircle2 className="w-3 h-3 text-green-500" /><span>SLA 99.9% garanti</span></div>
                    <div className="flex items-center gap-2 mb-1"><CheckCircle2 className="w-3 h-3 text-green-500" /><span>Failover automatique</span></div>
                    <div className="flex items-center gap-2"><CheckCircle2 className="w-3 h-3 text-green-500" /><span>Backup continu</span></div>
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
