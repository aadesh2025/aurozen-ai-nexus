import { MessageCircle } from "lucide-react";
import { motion } from "framer-motion";

const WhatsAppButton = () => {
  return (
    <motion.a
      href="https://wa.me/919345327506"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 left-6 z-50 w-14 h-14 rounded-full gradient-primary shadow-glow flex items-center justify-center hover:shadow-hover transition-all group"
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
      animate={{
        boxShadow: [
          "0 0 20px hsl(199 100% 47% / 0.4)",
          "0 0 40px hsl(199 100% 47% / 0.6)",
          "0 0 20px hsl(199 100% 47% / 0.4)",
        ],
      }}
      transition={{
        boxShadow: {
          duration: 2,
          repeat: Infinity,
          ease: "easeInOut",
        },
      }}
    >
      <MessageCircle className="text-white" size={24} />
    </motion.a>
  );
};

export default WhatsAppButton;
