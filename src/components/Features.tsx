import { Card, CardContent } from "@/components/ui/card";
import { 
  Send, 
  Shield, 
  Smartphone, 
  CreditCard, 
  Bitcoin, 
  Users, 
  FileText, 
  Bell,
  TrendingUp,
  Globe,
  Zap,
  Lock
} from "lucide-react";

const Features = () => {
  const features = [
    {
      icon: Send,
      title: "Instant Transfers",
      description: "Send money to anyone, anywhere in the world within seconds using username, email, or QR code."
    },
    {
      icon: Shield,
      title: "Bank-Level Security",
      description: "End-to-end encryption, multi-factor authentication, and fraud detection to keep your money safe."
    },
    {
      icon: Bitcoin,
      title: "Crypto Support",
      description: "Store, buy, sell, and trade major cryptocurrencies like BTC, ETH, USDT, and BNB with live price updates."
    },
    {
      icon: CreditCard,
      title: "Global Payments",
      description: "Integration with Visa, Mastercard, PayPal, and Stripe for seamless worldwide transactions."
    },
    {
      icon: Users,
      title: "P2P Network",
      description: "Connect with friends and family through our instant peer-to-peer transfer network."
    },
    {
      icon: Smartphone,
      title: "Mobile First",
      description: "Designed for mobile with biometric login, push notifications, and offline access."
    },
    {
      icon: FileText,
      title: "Transaction History",
      description: "Detailed transaction records with filtering, search, and export to PDF/CSV."
    },
    {
      icon: Bell,
      title: "Smart Notifications",
      description: "Real-time alerts for transactions, suspicious activity, and account updates."
    },
    {
      icon: TrendingUp,
      title: "Investment Tools",
      description: "Integration with SAMOS Invest for micro-investments and portfolio management."
    },
    {
      icon: Globe,
      title: "Multi-Currency",
      description: "Support for USD, EUR, and local currencies with real-time exchange rates."
    },
    {
      icon: Zap,
      title: "Bill Payments",
      description: "Pay utilities, subscriptions, and bills directly from your wallet."
    },
    {
      icon: Lock,
      title: "Privacy First",
      description: "GDPR-compliant data protection with optional self-custody for crypto assets."
    }
  ];

  return (
    <section id="features" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-primary mb-4">
            Everything You Need in One Wallet
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Experience the future of digital payments with our comprehensive suite of financial tools.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card key={index} className="border-0 shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1">
              <CardContent className="p-6">
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-gradient-to-r from-accent to-accent/80 rounded-lg flex items-center justify-center">
                      <feature.icon className="w-6 h-6 text-white" />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-primary mb-2">{feature.title}</h3>
                    <p className="text-muted-foreground">{feature.description}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;