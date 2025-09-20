import { Button } from "@/components/ui/button";
import { ArrowRight, Shield, Zap, Globe } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-primary via-primary/95 to-primary/90 text-primary-foreground">
      <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:50px_50px]" />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32 relative">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="text-center lg:text-left">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-6">
              Your Money,
              <span className="bg-gradient-to-r from-accent to-accent/80 bg-clip-text text-transparent"> Secured</span>
              <br />& Connected
            </h1>
            
            <p className="text-xl text-primary-foreground/80 mb-8 max-w-2xl">
              Send, receive, and store money globally with SAMOS Wallet. 
              Support for fiat currencies, cryptocurrencies, and instant P2P transfers.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <Button size="lg" className="bg-accent hover:bg-accent/90 text-white shadow-lg">
                Create Wallet
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
              <Button size="lg" variant="outline" className="border-primary-foreground/20 text-primary-foreground hover:bg-primary-foreground/10">
                Watch Demo
              </Button>
            </div>

            {/* Trust Indicators */}
            <div className="flex flex-wrap gap-6 text-sm text-primary-foreground/60">
              <div className="flex items-center gap-2">
                <Shield className="w-4 h-4" />
                Bank-level security
              </div>
              <div className="flex items-center gap-2">
                <Zap className="w-4 h-4" />
                Instant transfers
              </div>
              <div className="flex items-center gap-2">
                <Globe className="w-4 h-4" />
                Global coverage
              </div>
            </div>
          </div>

          {/* Wallet Preview */}
          <div className="relative">
            <div className="bg-card rounded-3xl shadow-2xl p-8 mx-auto max-w-sm">
              <div className="space-y-6">
                {/* Balance Card */}
                <div className="bg-gradient-to-r from-accent to-accent/80 rounded-2xl p-6 text-white">
                  <div className="text-sm opacity-80 mb-2">Total Balance</div>
                  <div className="text-3xl font-bold">$12,847.92</div>
                  <div className="text-sm opacity-80 mt-2">+2.4% from last month</div>
                </div>

                {/* Quick Actions */}
                <div className="grid grid-cols-2 gap-3">
                  <div className="bg-muted rounded-xl p-4 text-center">
                    <ArrowRight className="w-6 h-6 mx-auto mb-2 text-accent rotate-[-45deg]" />
                    <div className="text-sm font-medium">Send</div>
                  </div>
                  <div className="bg-muted rounded-xl p-4 text-center">
                    <ArrowRight className="w-6 h-6 mx-auto mb-2 text-success rotate-[135deg]" />
                    <div className="text-sm font-medium">Receive</div>
                  </div>
                </div>

                {/* Recent Transactions */}
                <div className="space-y-3">
                  <div className="text-sm font-medium text-muted-foreground">Recent</div>
                  <div className="space-y-2">
                    <div className="flex items-center justify-between p-3 bg-muted rounded-lg">
                      <div>
                        <div className="font-medium text-sm">Coffee Shop</div>
                        <div className="text-xs text-muted-foreground">Today, 2:30 PM</div>
                      </div>
                      <div className="text-sm font-medium text-destructive">-$4.50</div>
                    </div>
                    <div className="flex items-center justify-between p-3 bg-muted rounded-lg">
                      <div>
                        <div className="font-medium text-sm">Salary Deposit</div>
                        <div className="text-xs text-muted-foreground">Yesterday</div>
                      </div>
                      <div className="text-sm font-medium text-success">+$3,200.00</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;