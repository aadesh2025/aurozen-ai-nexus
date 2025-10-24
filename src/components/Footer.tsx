import { Link } from "react-router-dom";
import { Instagram, Mail, Phone, MessageCircle } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative bg-gradient-to-b from-background to-black/60 border-t border-white/10">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Company Info */}
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-10 h-10 gradient-primary rounded-lg flex items-center justify-center shadow-glow">
                <span className="text-white font-bold text-xl">A</span>
              </div>
              <span className="text-2xl font-bold">Aurozen AI</span>
            </div>
            <p className="text-muted-foreground text-sm leading-relaxed mb-6">
              Empowering businesses with intelligent, scalable AI solutions. From automation to advanced AI agents, we build systems that transform operations.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <Link to="/" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  Services
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/portfolio" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  Portfolio
                </Link>
              </li>
              <li>
                <Link to="/blog" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  Blog
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Get In Touch</h3>
            <ul className="space-y-3">
              <li>
                <a 
                  href="mailto:aadeshworkplace@gmail.com" 
                  className="text-sm text-muted-foreground hover:text-primary transition-colors flex items-center gap-2"
                >
                  <Mail size={16} />
                  aadeshworkplace@gmail.com
                </a>
              </li>
              <li>
                <a 
                  href="tel:+919345327506" 
                  className="text-sm text-muted-foreground hover:text-primary transition-colors flex items-center gap-2"
                >
                  <Phone size={16} />
                  +91 93453 27506
                </a>
              </li>
              <li>
                <a 
                  href="https://wa.me/919345327506"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-muted-foreground hover:text-primary transition-colors flex items-center gap-2"
                >
                  <MessageCircle size={16} />
                  WhatsApp
                </a>
              </li>
              <li>
                <a 
                  href="https://instagram.com/aurozenai"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-muted-foreground hover:text-primary transition-colors flex items-center gap-2"
                >
                  <Instagram size={16} />
                  @aurozenai
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 mt-12 pt-8 text-center">
          <p className="text-sm text-muted-foreground">
            © {currentYear} Aurozen AI. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
