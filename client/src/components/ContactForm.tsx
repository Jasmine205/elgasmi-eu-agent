import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { trpc } from "@/lib/trpc";
import { Loader2, User, Mail, Phone, Building2, Send, CheckCircle, Sparkles } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";
import { useTranslation } from "react-i18next";

export default function ContactForm() {
  const { t } = useTranslation();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    subject: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const submitMutation = trpc.contact.submit.useMutation({
    onSuccess: () => {
      setSubmitted(true);
      toast.success("Message envoye!", {
        description: "Nous vous repondrons sous 24h.",
      });
      setTimeout(() => {
        setSubmitted(false);
        setFormData({
          name: "",
          email: "",
          phone: "",
          company: "",
          subject: "",
          message: "",
        });
      }, 3000);
    },
    onError: (error) => {
      console.error("Form error:", error);
      toast.error("Erreur d'envoi", {
        description: "Contactez-nous par WhatsApp: +43 681 2046 0618",
      });
    },
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.name.trim() || !formData.email.trim() || !formData.subject.trim() || formData.message.length < 10) {
      toast.error("Veuillez remplir tous les champs requis");
      return;
    }

    if (!formData.email.includes("@")) {
      toast.error("Email invalide");
      return;
    }

    submitMutation.mutate(formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  if (submitted) {
    return (
      <div className="text-center py-16 animate-fade-in-up">
        <div className="w-20 h-20 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-6 animate-bounce-in">
          <CheckCircle className="w-10 h-10 text-white" />
        </div>
        <h3 className="text-2xl font-bold text-foreground mb-2">Message Envoye!</h3>
        <p className="text-muted-foreground">Nous vous repondrons dans les plus brefs delais.</p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      {/* Row 1: Name & Email */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="relative group">
          <User className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground group-focus-within:text-primary transition-colors" />
          <Input
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Votre nom *"
            className="pl-12 h-14 text-base border-2 border-border focus:border-primary bg-background/50 backdrop-blur-sm rounded-xl transition-all hover:border-primary/50"
            disabled={submitMutation.isPending}
          />
        </div>
        <div className="relative group">
          <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground group-focus-within:text-primary transition-colors" />
          <Input
            name="email"
            type="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="votre@email.com *"
            className="pl-12 h-14 text-base border-2 border-border focus:border-primary bg-background/50 backdrop-blur-sm rounded-xl transition-all hover:border-primary/50"
            disabled={submitMutation.isPending}
          />
        </div>
      </div>

      {/* Row 2: Phone & Company */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="relative group">
          <Phone className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground group-focus-within:text-primary transition-colors" />
          <Input
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            placeholder="Telephone (optionnel)"
            className="pl-12 h-14 text-base border-2 border-border focus:border-primary bg-background/50 backdrop-blur-sm rounded-xl transition-all hover:border-primary/50"
            disabled={submitMutation.isPending}
          />
        </div>
        <div className="relative group">
          <Building2 className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground group-focus-within:text-primary transition-colors" />
          <Input
            name="company"
            value={formData.company}
            onChange={handleChange}
            placeholder="Entreprise (optionnel)"
            className="pl-12 h-14 text-base border-2 border-border focus:border-primary bg-background/50 backdrop-blur-sm rounded-xl transition-all hover:border-primary/50"
            disabled={submitMutation.isPending}
          />
        </div>
      </div>

      {/* Subject */}
      <div className="relative group">
        <Sparkles className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground group-focus-within:text-primary transition-colors" />
        <Input
          name="subject"
          value={formData.subject}
          onChange={handleChange}
          placeholder="Sujet de votre demande *"
          className="pl-12 h-14 text-base border-2 border-border focus:border-primary bg-background/50 backdrop-blur-sm rounded-xl transition-all hover:border-primary/50"
          disabled={submitMutation.isPending}
        />
      </div>

      {/* Message */}
      <Textarea
        name="message"
        value={formData.message}
        onChange={handleChange}
        placeholder="Decrivez votre projet ou besoin... (min. 10 caracteres) *"
        rows={5}
        className="text-base border-2 border-border focus:border-primary bg-background/50 backdrop-blur-sm rounded-xl resize-none transition-all hover:border-primary/50"
        disabled={submitMutation.isPending}
      />

      {/* Submit */}
      <Button
        type="submit"
        size="lg"
        className="w-full h-16 text-lg font-semibold bg-gradient-to-r from-primary via-purple-600 to-primary bg-[length:200%_100%] hover:bg-right transition-all duration-500 rounded-xl shadow-lg hover:shadow-primary/30"
        disabled={submitMutation.isPending}
      >
        {submitMutation.isPending ? (
          <span className="flex items-center gap-3">
            <Loader2 className="w-6 h-6 animate-spin" />
            Envoi en cours...
          </span>
        ) : (
          <span className="flex items-center gap-3">
            <Send className="w-6 h-6" />
            Envoyer le message
          </span>
        )}
      </Button>

      <p className="text-center text-sm text-muted-foreground">
        Ou contactez-nous directement: <a href="https://wa.me/4368120460618" className="text-primary hover:underline font-medium">WhatsApp</a>
      </p>
    </form>
  );
}
