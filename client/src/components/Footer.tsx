import { Mail, MapPin, Phone, MessageSquare, ArrowUpRight, Linkedin, Globe, Github } from "lucide-react";
import { useTranslation } from "react-i18next";

export default function Footer() {
  const { t } = useTranslation();
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { label: t('nav.services', 'Services'), href: "/#services" },
    { label: t('nav.portfolio', 'Portfolio'), href: "/#portfolio" },
    { label: t('nav.about', 'A propos'), href: "/#about" },
    { label: t('nav.contact', 'Contact'), href: "/#contact" },
  ];

  const contactInfo = [
    { icon: Linkedin, label: "LinkedIn", href: "https://www.linkedin.com/in/asmae-warter-08208b3a1", color: "text-[#0A66C2]" },
    { icon: Github, label: "GitHub", href: "https://github.com/jasmine-205", color: "text-gray-700 dark:text-gray-300" },
    { icon: Globe, label: "Website", href: "https://asmae-project.vercel.app", color: "text-purple-500" },
    { icon: Mail, label: "Email", href: "mailto:asmaewarter5@gmail.com", color: "text-blue-500" },
    { icon: MessageSquare, label: "WhatsApp", href: "https://wa.me/4368120460618", color: "text-[#25D366]" },
    { icon: Phone, label: "Appeler", href: "tel:+4368120460618", color: "text-green-500" },
  ];

  return (
    <footer className="bg-gradient-to-b from-card to-background border-t border-border">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">

        {/* Main Footer Content - 3 colonnes */}
        <div className="grid grid-cols-3 gap-12 mb-12">

          {/* Logo & Description */}
          <div className="group">
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-14 h-14 bg-gradient-to-br from-primary to-primary/80 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg">
                <span className="text-primary-foreground font-bold text-2xl">E</span>
              </div>
              <div className="flex flex-col">
                <span className="text-2xl font-bold text-foreground">Elgasmi.e.U</span>
                <span className="text-sm text-primary">{t('footer.tagline', 'Systemes Agentiques')}</span>
              </div>
            </div>
            <p className="text-muted-foreground leading-relaxed">
              {t('footer.description', 'Expert en architecture microservices et systemes agentiques. Solutions evolutives, resilientes et conformes aux principes SOLID.')}
            </p>
          </div>

          {/* Liens Rapides - Horizontal */}
          <div>
            <h3 className="text-xl font-bold text-foreground mb-6">{t('footer.quickLinks', 'Liens Rapides')}</h3>
            <div className="grid grid-cols-2 gap-4">
              {quickLinks.map((link, index) => (
                <a
                  key={index}
                  href={link.href}
                  className="group/link flex items-center gap-2 p-3 rounded-xl bg-accent/30 hover:bg-primary/10 hover:border-primary/30 border border-transparent transition-all duration-300"
                >
                  <span className="text-foreground group-hover/link:text-primary transition-colors font-medium">
                    {link.label}
                  </span>
                  <ArrowUpRight className="w-4 h-4 text-muted-foreground group-hover/link:text-primary group-hover/link:translate-x-1 group-hover/link:-translate-y-1 transition-all duration-300" />
                </a>
              ))}
            </div>
          </div>

          {/* Contact - Horizontal Grid */}
          <div>
            <h3 className="text-xl font-bold text-foreground mb-6">{t('footer.contact', 'Contact')}</h3>
            <div className="grid grid-cols-3 gap-3">
              {contactInfo.map((item, index) => {
                const Icon = item.icon;
                return (
                  <a
                    key={index}
                    href={item.href}
                    target={item.href.startsWith('http') ? '_blank' : undefined}
                    rel={item.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                    className="group/contact flex items-center gap-3 p-3 rounded-xl bg-accent/30 hover:bg-accent/50 transition-all duration-300"
                  >
                    <div className={`w-10 h-10 rounded-lg bg-background flex items-center justify-center group-hover/contact:scale-110 transition-transform duration-300`}>
                      <Icon className={`w-5 h-5 ${item.color}`} />
                    </div>
                    <span className="text-sm text-muted-foreground group-hover/contact:text-foreground transition-colors truncate">
                      {item.label}
                    </span>
                  </a>
                );
              })}
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-border">
          <div className="flex justify-between items-center">
            <p className="text-sm text-muted-foreground">
              © {currentYear} Elgasmi.e.U. {t('footer.rights', 'Tous droits reserves.')}
            </p>
            <div className="flex items-center gap-6">
              <a href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                {t('footer.legal', 'Mentions legales')}
              </a>
              <a href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                {t('footer.privacy', 'Confidentialite')}
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
