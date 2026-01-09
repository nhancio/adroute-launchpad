import { Instagram, Linkedin, ArrowUpRight } from "lucide-react";

const Footer = () => {
  const socialLinks = [
    { icon: Instagram, href: "https://instagram.com/adroute", label: "Instagram" },
    { icon: Linkedin, href: "https://linkedin.com/company/adroute", label: "LinkedIn" },
  ];

  const footerLinks = [
    { label: "Home", href: "#home" },
    { label: "About", href: "#about" },
    { label: "What We Offer", href: "#what-we-offer" },
    { label: "Advertising", href: "#advertising-structure" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <footer className="bg-black text-red-600">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 lg:py-16">
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 sm:gap-12 lg:gap-20">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <img 
                src="/images/logo.jpeg" 
                alt="AdRoute Logo" 
                className="w-10 h-10 rounded-lg object-cover"
              />
              <span className="text-xl font-bold text-red-600">AdRoute</span>
            </div>
            <p className="text-red-600/70 mb-6">
              Advertising that moves with India
            </p>
            <div className="flex items-center gap-4">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  className="w-10 h-10 rounded-lg bg-red-600/10 flex items-center justify-center hover:bg-red-600 transition-all duration-300 group"
                >
                  <social.icon className="w-5 h-5 text-red-600 group-hover:text-white transition-colors" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-red-600">Quick Links</h4>
            <ul className="space-y-3">
              {footerLinks.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-red-600/70 hover:text-red-600 transition-colors inline-flex items-center gap-1 group"
                  >
                    {link.label}
                    <ArrowUpRight className="w-4 h-4 opacity-0 -translate-y-1 translate-x-1 group-hover:opacity-100 group-hover:translate-y-0 group-hover:translate-x-0 transition-all" />
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-red-600">Get in Touch</h4>
            <div className="space-y-3 text-red-600/70">
              <p>adroute.co@gmail.com</p>
              <p>+91 9391517920</p>
              <p>+91 9392094066</p>
              <p>Hyderabad, India</p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-red-600/20 mt-12 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-red-600/50">
            © {new Date().getFullYear()} AdRoute. All rights reserved.
          </p>
          <div className="flex items-center gap-6 text-sm text-red-600/50">
            <a href="#" className="hover:text-red-600 transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-red-600 transition-colors">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
