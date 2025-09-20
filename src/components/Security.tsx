import { Card, CardContent } from "@/components/ui/card";
import { Shield, Lock, Eye, Fingerprint, AlertTriangle, Award } from "lucide-react";

const Security = () => {
  const securityFeatures = [
    {
      icon: Shield,
      title: "End-to-End Encryption",
      description: "All your data and transactions are protected with military-grade encryption.",
      badge: "AES-256"
    },
    {
      icon: Fingerprint,
      title: "Biometric Authentication",
      description: "Secure access with fingerprint, Face ID, or other biometric verification.",
      badge: "Touch ID"
    },
    {
      icon: AlertTriangle,
      title: "Fraud Detection",
      description: "AI-powered monitoring detects and prevents suspicious activities automatically.",
      badge: "Real-time"
    },
    {
      icon: Eye,
      title: "Privacy Controls",
      description: "Complete control over your data with GDPR compliance and privacy settings.",
      badge: "GDPR"
    },
    {
      icon: Lock,
      title: "Multi-Factor Auth",
      description: "Multiple layers of security including SMS, email, and authenticator apps.",
      badge: "2FA/MFA"
    },
    {
      icon: Award,
      title: "Regulatory Compliance",
      description: "Licensed and regulated financial institution with full compliance standards.",
      badge: "Licensed"
    }
  ];

  return (
    <section id="security" className="py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div>
            <h2 className="text-3xl lg:text-4xl font-bold text-primary mb-6">
              Your Security is Our Priority
            </h2>
            <p className="text-xl text-muted-foreground mb-8">
              We implement the highest security standards to protect your funds and personal information. 
              Your money is safer with us than in traditional banks.
            </p>

            <div className="space-y-6">
              {securityFeatures.map((feature, index) => (
                <div key={index} className="flex items-start space-x-4">
                  <div className="flex-shrink-0">
                    <div className="w-10 h-10 bg-success/10 rounded-lg flex items-center justify-center">
                      <feature.icon className="w-5 h-5 text-success" />
                    </div>
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <h3 className="font-semibold text-primary">{feature.title}</h3>
                      <span className="px-2 py-1 bg-accent/10 text-accent text-xs font-medium rounded-full">
                        {feature.badge}
                      </span>
                    </div>
                    <p className="text-muted-foreground text-sm">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Security Visual */}
          <div className="relative">
            <Card className="bg-gradient-to-br from-success/5 to-accent/5 border-success/20">
              <CardContent className="p-8">
                <div className="text-center space-y-6">
                  <div className="w-24 h-24 bg-gradient-to-r from-success to-accent rounded-full flex items-center justify-center mx-auto">
                    <Shield className="w-12 h-12 text-white" />
                  </div>
                  
                  <div>
                    <h3 className="text-2xl font-bold text-primary mb-2">99.99% Uptime</h3>
                    <p className="text-muted-foreground">Guaranteed availability and security</p>
                  </div>

                  <div className="grid grid-cols-2 gap-6 pt-6 border-t">
                    <div className="text-center">
                      <div className="text-2xl font-bold text-success">$50M+</div>
                      <div className="text-sm text-muted-foreground">Insurance Coverage</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-accent">24/7</div>
                      <div className="text-sm text-muted-foreground">Security Monitoring</div>
                    </div>
                  </div>

                  <div className="bg-muted rounded-lg p-4">
                    <div className="flex items-center justify-center gap-2 text-sm text-muted-foreground">
                      <Lock className="w-4 h-4" />
                      Audited by top security firms
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Security;