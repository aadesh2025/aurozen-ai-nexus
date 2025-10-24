import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion, AnimatePresence } from "framer-motion";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Services", path: "/services" },
    { name: "Portfolio", path: "/portfolio" },
    { name: "Blog", path: "/blog" },
    { name: "Contact", path: "/contact" },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <motion.nav 
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      className={`fixed top-4 left-1/2 -translate-x-1/2 z-50 rounded-[2rem] transition-all duration-300 w-[95%] max-w-6xl ${
        isScrolled 
          ? "bg-black/60 backdrop-blur-xl border border-white/10 shadow-glow" 
          : "bg-black/30 backdrop-blur-md border border-white/5"
      }`}
    >
      <div className="px-4">
        <div className="flex justify-between items-center h-14">
          {/* Logo - Only show text on scroll */}
          <Link to="/" className="flex items-center space-x-2">
            <div className="w-8 h-8 gradient-primary rounded-lg flex items-center justify-center shadow-glow">
              <span className="text-white font-bold text-lg">A</span>
            </div>
            <AnimatePresence>
              {isScrolled && (
                <motion.span
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -10 }}
                  className="text-xl font-bold"
                >
                  Aurozen AI
                </motion.span>
              )}
            </AnimatePresence>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1 mx-auto">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`px-3 py-1.5 rounded-lg text-sm font-medium transition-all ${
                  isActive(link.path)
                    ? "text-primary bg-primary/10"
                    : "text-foreground/80 hover:text-primary hover:bg-white/5"
                }`}
              >
                {link.name}
              </Link>
            ))}
          </div>

          {/* CTA Button */}
          <div className="hidden md:block">
            <Button asChild className="gradient-primary shadow-glow hover:shadow-hover transition-all text-sm px-5 py-1 h-9">
              <Link to="/contact">Book a Demo</Link>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 rounded-lg hover:bg-white/5 transition-colors"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            className="md:hidden py-4 border-t border-white/10"
          >
            <div className="flex flex-col space-y-2">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  onClick={() => setIsOpen(false)}
                  className={`px-4 py-3 rounded-lg text-sm font-medium transition-all ${
                    isActive(link.path)
                      ? "text-primary bg-primary/10"
                      : "text-foreground/80 hover:text-primary hover:bg-white/5"
                  }`}
                >
                  {link.name}
                </Link>
              ))}
              <Button asChild className="gradient-primary mt-4">
                <Link to="/contact" onClick={() => setIsOpen(false)}>
                  Book a Demo
                </Link>
              </Button>
            </div>
          </motion.div>
        )}
      </div>
    </motion.nav>
  );
};

export default Navbar;
