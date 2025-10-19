import { LucideIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

interface ServiceCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  link: string;
}

const ServiceCard = ({ icon: Icon, title, description, link }: ServiceCardProps) => {
  return (
    <div className="bg-card rounded-2xl p-6 shadow-card hover:shadow-hover transition-all duration-300 border border-border group hover:-translate-y-1">
      <div className="w-12 h-12 gradient-primary rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
        <Icon className="text-white" size={24} />
      </div>
      <h3 className="text-xl font-semibold mb-3">{title}</h3>
      <p className="text-muted-foreground text-sm mb-4 leading-relaxed">{description}</p>
      <Button variant="link" asChild className="p-0 h-auto text-primary">
        <Link to={link}>Learn more →</Link>
      </Button>
    </div>
  );
};

export default ServiceCard;
