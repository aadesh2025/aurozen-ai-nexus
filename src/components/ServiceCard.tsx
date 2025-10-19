import { Link } from "react-router-dom";
import { LucideIcon } from "lucide-react";
import { motion } from "framer-motion";

interface ServiceCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  link: string;
}

const ServiceCard = ({ icon: Icon, title, description, link }: ServiceCardProps) => {
  return (
    <motion.div whileHover={{ y: -8, scale: 1.02 }} transition={{ duration: 0.3 }}>
      <Link to={link}>
        <div className="glass-card rounded-2xl p-6 h-full shadow-card hover:shadow-glow transition-all group">
          <div className="w-14 h-14 gradient-primary rounded-xl flex items-center justify-center mb-4 shadow-glow group-hover:animate-glow transition-all">
            <Icon className="text-white" size={28} />
          </div>
          <h3 className="text-xl font-semibold mb-3 group-hover:text-primary transition-colors">{title}</h3>
          <p className="text-sm text-muted-foreground leading-relaxed">{description}</p>
        </div>
      </Link>
    </motion.div>
  );
};

export default ServiceCard;
