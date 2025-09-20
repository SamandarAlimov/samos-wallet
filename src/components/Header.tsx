import { Button } from "@/components/ui/button";
import { Wallet, Menu, X } from "lucide-react";
import { useState } from "react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gradient-to-r from-accent to-accent/80 rounded-lg flex items-center justify-center">
              <Wallet className="w-5 h-5 text-white" />
            </div>
            <span className="text-xl font-bold text-primary">SAMOS Wallet</span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#features" className="text-foreground hover:text-accent transition-colors">Features</a>
            <a href="#security" className="text-foreground hover:text-accent transition-colors">Security</a>
            <a href="#pricing" className="text-foreground hover:text-accent transition-colors">Pricing</a>
            <a href="#support" className="text-foreground hover:text-accent transition-colors">Support</a>
          </nav>

          {/* Desktop Actions */}
          <div className="hidden md:flex items-center space-x-4">
            <Button variant="ghost">Sign In</Button>
            <Button className="bg-gradient-to-r from-accent to-accent/80 hover:from-accent/90 hover:to-accent/70">
              Get Started
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden border-t bg-background">
            <nav className="px-4 py-4 space-y-4">
              <a href="#features" className="block text-foreground hover:text-accent transition-colors">Features</a>
              <a href="#security" className="block text-foreground hover:text-accent transition-colors">Security</a>
              <a href="#pricing" className="block text-foreground hover:text-accent transition-colors">Pricing</a>
              <a href="#support" className="block text-foreground hover:text-accent transition-colors">Support</a>
              <div className="pt-4 border-t space-y-2">
                <Button variant="ghost" className="w-full">Sign In</Button>
                <Button className="w-full bg-gradient-to-r from-accent to-accent/80">Get Started</Button>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;