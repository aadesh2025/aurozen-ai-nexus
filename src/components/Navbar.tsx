import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Home, User, Briefcase, Book, Mail } from "lucide-react";
import { motion } from "framer-motion";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { name: "Home", path: "/", icon: Home },
    { name: "About", path: "/about", icon: User },
    { name: "Services", path: "/services", icon: Briefcase },
    { name: "Portfolio", path: "/portfolio", icon: Book },
    { name: "Blog", path: "/blog", icon: Book },
    { name: "Contact", path: "/contact", icon: Mail },
  ];

  const isActive = (path: string) => location.pathname === path;

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setIsOpen(true);
      } else {
        setIsOpen(false);
      }
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-4 right-4 z-50 md:hidden p-2 rounded-lg bg-black/30 backdrop-blur-md border border-white/5 hover:bg-white/5 transition-colors"
      >
        {isOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      {isOpen && (
        <motion.nav
          initial={{ x: 100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          exit={{ x: 100, opacity: 0 }}
          transition={{ duration: 0.5, ease: 'easeInOut' }}
          className="fixed top-1/3 -translate-y-1/2 right-4 z-40"
        >
          <div className="flex flex-col items-end space-y-3">
            {navLinks.map((link) => (
              <motion.div
                key={link.path}
                whileHover="hover"
                initial="initial"
                className="group"
              >
                <Link
                  to={link.path}
                  onClick={() => { if (window.innerWidth < 768) setIsOpen(false) }}
                  className={`flex items-center justify-end p-2.5 transition-all duration-300 overflow-hidden ${
                    isActive(link.path)
                      ? "text-primary"
                      : "text-foreground/80 hover:text-primary"
                  }`}
                  title={link.name}
                >
                  <motion.span
                    variants={{
                      initial: { opacity: 0, x: 20, width: 0, marginRight: 0 },
                      hover: { opacity: 1, x: 0, width: 'auto', marginRight: '0.75rem' }
                    }}
                    transition={{ duration: 0.3, ease: 'easeInOut' }}
                    className="whitespace-nowrap text-sm"
                  >
                    {link.name}
                  </motion.span>
                  <link.icon className="h-6 w-6 flex-shrink-0" />
                </Link>
              </motion.div>
            ))}
          </div>
        </motion.nav>
      )}
    </>
  );
};

export default Navbar;
