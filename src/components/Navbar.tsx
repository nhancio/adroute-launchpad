import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { href: "#home", label: "Home" },
    { href: "#about", label: "About" },
    { href: "#what-we-offer", label: "What We Offer" },
    { href: "#advertising-structure", label: "Advertising" },
    { href: "#contact", label: "Contact" },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md border-b border-red-100">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-12 sm:h-14">
          {/* Logo */}
          <a href="#home" className="flex items-center gap-2">
            <img 
              src="/images/logo.jpeg" 
              alt="AdRoute Logo" 
              className="w-10 h-10 rounded-lg object-cover"
            />
            <span className="text-xl font-bold text-foreground">AdRoute</span>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-2">
            {navLinks.map((link) => (
              <Button
                key={link.href}
                variant="ghost"
                size="sm"
                asChild
                className="text-muted-foreground hover:text-primary hover:bg-red-50 transition-colors duration-200"
              >
                <a href={link.href}>{link.label}</a>
              </Button>
            ))}
          </div>

          {/* CTA Button */}
          <div className="hidden md:flex items-center gap-4">
            <Button variant="outline" size="sm" asChild>
              <a href="#contact">Talk to Us</a>
            </Button>
            <Button size="sm" asChild>
              <a href="#contact">Start Campaign</a>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 rounded-lg hover:bg-muted transition-colors"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? (
              <X className="w-6 h-6 text-foreground" />
            ) : (
              <Menu className="w-6 h-6 text-foreground" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-red-100 animate-fade-in">
            <div className="flex flex-col gap-2">
              {navLinks.map((link) => (
                <Button
                  key={link.href}
                  variant="ghost"
                  className="justify-start text-muted-foreground hover:text-primary hover:bg-red-50 transition-colors duration-200"
                  asChild
                >
                  <a href={link.href} onClick={() => setIsMenuOpen(false)}>
                    {link.label}
                  </a>
                </Button>
              ))}
              <div className="flex flex-col gap-2 pt-4 border-t border-red-100">
                <Button variant="outline" asChild>
                  <a href="#contact">Talk to Us</a>
                </Button>
                <Button asChild>
                  <a href="#contact">Start Campaign</a>
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
