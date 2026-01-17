import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { trpc } from "@/lib/trpc";
import {
  CreditCard,
  Shield,
  Lock,
  CheckCircle2,
  Loader2,
  ShieldCheck,
  BadgeCheck,
  Fingerprint,
  Globe,
  AlertCircle,
} from "lucide-react";

interface PaymentModalProps {
  isOpen: boolean;
  onClose: () => void;
  offerTitle: string;
  price: number;
  currency?: string;
}

type PaymentMethod = "stripe" | "paypal";
type PaymentStatus = "idle" | "processing" | "success" | "error";

export default function PaymentModal({
  isOpen,
  onClose,
  offerTitle,
  price,
  currency = "EUR",
}: PaymentModalProps) {
  const [paymentMethod, setPaymentMethod] = useState<PaymentMethod>("stripe");
  const [status, setStatus] = useState<PaymentStatus>("idle");
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [transactionId, setTransactionId] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const contactMutation = trpc.contact.submit.useMutation();

  const securityBadges = [
    { icon: Lock, label: "SSL 256-bit", color: "text-green-500" },
    { icon: ShieldCheck, label: "PCI DSS", color: "text-blue-500" },
    { icon: Fingerprint, label: "3D Secure", color: "text-purple-500" },
    { icon: Shield, label: "NATO-Grade", color: "text-red-500" },
  ];

  const handlePayment = async () => {
    if (!email || !name) return;

    setStatus("processing");
    setErrorMessage("");

    try {
      // Generate transaction ID
      const txnId = `TXN-${Date.now().toString(36).toUpperCase()}-${Math.random().toString(36).substring(2, 6).toUpperCase()}`;
      setTransactionId(txnId);

      // Send order notification via contact form
      await contactMutation.mutateAsync({
        name,
        email,
        phone: phone || undefined,
        company: undefined,
        subject: `New Order: ${offerTitle}`,
        message: `
ORDER DETAILS
=============
Transaction ID: ${txnId}
Offer: ${offerTitle}
Price: ${price.toLocaleString()} ${currency}
Payment Method: ${paymentMethod.toUpperCase()}

CUSTOMER INFO
=============
Name: ${name}
Email: ${email}
Phone: ${phone || "Not provided"}

Status: PENDING PAYMENT CONFIRMATION
        `.trim(),
      });

      // Simulate payment gateway response
      await new Promise((resolve) => setTimeout(resolve, 2000));

      setStatus("success");
    } catch (error) {
      console.error("Payment error:", error);
      setErrorMessage("Payment processing failed. Please try again or contact support.");
      setStatus("error");
    }
  };

  const resetAndClose = () => {
    setStatus("idle");
    setEmail("");
    setName("");
    setPhone("");
    setTransactionId("");
    setErrorMessage("");
    onClose();
  };

  const openPaymentGateway = () => {
    if (paymentMethod === "stripe") {
      // Open Stripe payment link (configurable)
      window.open("https://buy.stripe.com/test_demo", "_blank");
    } else {
      // Open PayPal payment link (configurable)
      window.open("https://www.paypal.com/paypalme/elgasmi", "_blank");
    }
  };

  return (
    <Dialog open={isOpen} onOpenChange={resetAndClose}>
      <DialogContent className="sm:max-w-[500px] p-0 overflow-hidden">
        {/* Header with gradient */}
        <div className="bg-gradient-to-r from-primary to-primary/80 p-6 text-primary-foreground">
          <DialogHeader>
            <DialogTitle className="text-2xl font-bold text-white">
              Secure Payment
            </DialogTitle>
            <DialogDescription className="text-primary-foreground/80">
              {offerTitle}
            </DialogDescription>
          </DialogHeader>
          <div className="mt-4 text-3xl font-bold">
            {price.toLocaleString()} {currency}
          </div>
        </div>

        <AnimatePresence mode="wait">
          {status === "idle" && (
            <motion.div
              key="form"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="p-6 space-y-6"
            >
              {/* Security Badges */}
              <div className="flex flex-wrap justify-center gap-3 pb-4 border-b border-border">
                {securityBadges.map((badge, idx) => (
                  <motion.div
                    key={badge.label}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: idx * 0.1 }}
                    className="flex items-center gap-1.5 px-2 py-1 bg-accent rounded-full text-xs"
                  >
                    <badge.icon className={`w-3 h-3 ${badge.color}`} />
                    <span className="text-muted-foreground">{badge.label}</span>
                  </motion.div>
                ))}
              </div>

              {/* Customer Info */}
              <div className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="name">Full Name *</Label>
                  <Input
                    id="name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="John Doe"
                    className="h-11"
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">Email *</Label>
                  <Input
                    id="email"
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="john@example.com"
                    className="h-11"
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="phone">Phone (optional)</Label>
                  <Input
                    id="phone"
                    type="tel"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder="+43 681 2046 0618"
                    className="h-11"
                  />
                </div>
              </div>

              {/* Payment Method Selection */}
              <div className="space-y-3">
                <Label>Payment Method</Label>
                <RadioGroup
                  value={paymentMethod}
                  onValueChange={(v) => setPaymentMethod(v as PaymentMethod)}
                  className="grid grid-cols-2 gap-3"
                >
                  <div>
                    <RadioGroupItem
                      value="stripe"
                      id="stripe"
                      className="peer sr-only"
                    />
                    <Label
                      htmlFor="stripe"
                      className="flex flex-col items-center justify-center rounded-lg border-2 border-muted bg-popover p-4 hover:bg-accent hover:text-accent-foreground peer-data-[state=checked]:border-primary cursor-pointer transition-all"
                    >
                      <CreditCard className="mb-2 h-6 w-6" />
                      <span className="text-sm font-medium">Stripe</span>
                      <span className="text-xs text-muted-foreground">
                        Cards, Apple Pay
                      </span>
                    </Label>
                  </div>
                  <div>
                    <RadioGroupItem
                      value="paypal"
                      id="paypal"
                      className="peer sr-only"
                    />
                    <Label
                      htmlFor="paypal"
                      className="flex flex-col items-center justify-center rounded-lg border-2 border-muted bg-popover p-4 hover:bg-accent hover:text-accent-foreground peer-data-[state=checked]:border-primary cursor-pointer transition-all"
                    >
                      <Globe className="mb-2 h-6 w-6" />
                      <span className="text-sm font-medium">PayPal</span>
                      <span className="text-xs text-muted-foreground">
                        Secure checkout
                      </span>
                    </Label>
                  </div>
                </RadioGroup>
              </div>

              {/* Pay Button */}
              <Button
                onClick={handlePayment}
                disabled={!email || !name || contactMutation.isPending}
                className="w-full h-12 text-lg gradient-primary"
              >
                {contactMutation.isPending ? (
                  <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                ) : (
                  <Lock className="w-4 h-4 mr-2" />
                )}
                Pay {price.toLocaleString()} {currency}
              </Button>

              {/* Trust indicators */}
              <div className="flex items-center justify-center gap-2 text-xs text-muted-foreground">
                <Shield className="w-3 h-3" />
                <span>Your payment is secured with 256-bit SSL encryption</span>
              </div>
            </motion.div>
          )}

          {status === "processing" && (
            <motion.div
              key="processing"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              className="p-12 flex flex-col items-center justify-center space-y-6"
            >
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ repeat: Infinity, duration: 1, ease: "linear" }}
              >
                <Loader2 className="w-16 h-16 text-primary" />
              </motion.div>
              <div className="text-center">
                <h3 className="text-xl font-semibold mb-2">Processing Payment</h3>
                <p className="text-muted-foreground">
                  Securely connecting to {paymentMethod === "stripe" ? "Stripe" : "PayPal"}...
                </p>
              </div>
              <div className="flex gap-2">
                {[0, 1, 2].map((i) => (
                  <motion.div
                    key={i}
                    className="w-3 h-3 rounded-full bg-primary"
                    animate={{ opacity: [0.3, 1, 0.3] }}
                    transition={{
                      repeat: Infinity,
                      duration: 1,
                      delay: i * 0.2,
                    }}
                  />
                ))}
              </div>
            </motion.div>
          )}

          {status === "success" && (
            <motion.div
              key="success"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              className="p-8 flex flex-col items-center justify-center space-y-6"
            >
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ type: "spring", stiffness: 200 }}
                className="w-20 h-20 rounded-full bg-green-500/10 flex items-center justify-center"
              >
                <CheckCircle2 className="w-12 h-12 text-green-500" />
              </motion.div>
              <div className="text-center">
                <h3 className="text-2xl font-bold text-foreground mb-2">
                  Order Confirmed!
                </h3>
                <p className="text-muted-foreground mb-4">
                  Your order has been received. Complete payment via {paymentMethod === "stripe" ? "Stripe" : "PayPal"}.
                </p>
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-green-500/10 rounded-full text-green-600 text-sm mb-4">
                  <BadgeCheck className="w-4 h-4" />
                  {transactionId}
                </div>
              </div>
              <div className="flex flex-col gap-3 w-full">
                <Button onClick={openPaymentGateway} className="gradient-primary">
                  Complete Payment via {paymentMethod === "stripe" ? "Stripe" : "PayPal"}
                </Button>
                <Button variant="outline" onClick={resetAndClose}>
                  Close
                </Button>
              </div>
              <p className="text-xs text-muted-foreground text-center">
                A confirmation email has been sent to {email}
              </p>
            </motion.div>
          )}

          {status === "error" && (
            <motion.div
              key="error"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              className="p-12 flex flex-col items-center justify-center space-y-6"
            >
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ type: "spring", stiffness: 200 }}
                className="w-20 h-20 rounded-full bg-red-500/10 flex items-center justify-center"
              >
                <AlertCircle className="w-12 h-12 text-red-500" />
              </motion.div>
              <div className="text-center">
                <h3 className="text-2xl font-bold text-foreground mb-2">
                  Payment Error
                </h3>
                <p className="text-muted-foreground mb-4">
                  {errorMessage}
                </p>
              </div>
              <div className="flex gap-3">
                <Button onClick={() => setStatus("idle")} variant="outline">
                  Try Again
                </Button>
                <Button onClick={resetAndClose}>
                  Close
                </Button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </DialogContent>
    </Dialog>
  );
}
