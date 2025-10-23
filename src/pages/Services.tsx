import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Bot, Phone, Workflow, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const Services = () => {
  const services = [
    {
      title: "Voice Agents",
      icon: Phone,
      description: "Intelligent AI voice systems that handle calls, book appointments, qualify leads, and automate customer interactions with human-like conversations.",
      features: ["Customer Support", "Sales Booking", "Lead Qualification", "Follow-Up Calls"],
      link: "/services/voice-agents",
      gradient: "from-blue-500 to-cyan-500",
    },
    {
      title: "Chatbots",
      icon: Bot,
      description: "Smart conversational AI across web, WhatsApp, and Instagram. Integrated with CRMs, APIs, and databases for dynamic customer engagement.",
      features: ["E-commerce Bots", "Service Booking", "Healthcare", "Real Estate"],
      link: "/services/chatbots",
      gradient: "from-cyan-500 to-teal-500",
    },
    {
      title: "Event-to-Event AI Systems",
      icon: Workflow,
      description: "Automated workflows triggered by business events. Connect CRMs, booking tools, and payment systems for intelligent end-to-end automation.",
      features: ["Lead Automation", "Purchase Flows", "Appointment Systems", "Payment Integration"],
      link: "/services/event-automation",
      gradient: "from-teal-500 to-blue-500",
    },
  ];

  return (
    <div className="min-h-screen pt-24 pb-20">
      {/* Hero Section */}
      <section className="container mx-auto px-4 sm:px-6 lg:px-8 mb-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-4xl mx-auto text-center"
        >
          <h1 className="text-5xl md:text-6xl font-bold mb-6 glow-text">
            Redefining Automation with Voice, Chat, and Event AI Systems
          </h1>
          <p className="text-xl text-foreground/70 mb-8 leading-relaxed">
            Empower your business with intelligent AI-driven systems that talk, act, and automate in real time.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Button asChild className="gradient-primary shadow-glow hover:shadow-hover">
              <Link to="/contact">Explore Services</Link>
            </Button>
            <Button asChild variant="outline" className="border-primary/30 hover:bg-primary/10">
              <Link to="/services/integrations">View Integrations</Link>
            </Button>
          </div>
        </motion.div>
      </section>

      {/* Service Cards Grid */}
      <section className="container mx-auto px-4 sm:px-6 lg:px-8 mb-20">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
              whileHover={{ scale: 1.05, y: -10 }}
              className="group"
            >
              <Link to={service.link}>
                <div className="glass-card p-8 h-full relative overflow-hidden">
                  <div className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-300`} />
                  
                  <div className="relative z-10">
                    <div className={`w-16 h-16 rounded-xl bg-gradient-to-br ${service.gradient} flex items-center justify-center mb-6 shadow-glow`}>
                      <service.icon className="text-white" size={32} />
                    </div>
                    
                    <h3 className="text-2xl font-bold mb-4">{service.title}</h3>
                    <p className="text-foreground/70 mb-6 leading-relaxed">{service.description}</p>
                    
                    <div className="space-y-2 mb-6">
                      {service.features.map((feature) => (
                        <div key={feature} className="flex items-center gap-2 text-sm text-foreground/60">
                          <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                          <span>{feature}</span>
                        </div>
                      ))}
                    </div>
                    
                    <div className="flex items-center gap-2 text-primary font-medium group-hover:gap-4 transition-all">
                      <span>Learn More</span>
                      <ArrowRight size={18} />
                    </div>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Quick Links Section */}
      <section className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="glass-card p-12 text-center"
        >
          <h2 className="text-3xl font-bold mb-6">Explore More</h2>
          <div className="flex flex-wrap gap-4 justify-center">
            <Button asChild variant="outline" className="border-primary/30 hover:bg-primary/10">
              <Link to="/services/integrations">Integration Hub</Link>
            </Button>
            <Button asChild variant="outline" className="border-primary/30 hover:bg-primary/10">
              <Link to="/services/case-studies">Case Studies</Link>
            </Button>
            <Button asChild variant="outline" className="border-primary/30 hover:bg-primary/10">
              <Link to="/pricing">View Pricing</Link>
            </Button>
          </div>
        </motion.div>
      </section>
    </div>
  );
};

export default Services;
