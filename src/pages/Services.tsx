import { Bot, Workflow, BarChart3, Code2, Users, Shield, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Services = () => {
  const tiers = [
    {
      name: "Basic AI Chatbot",
      icon: Bot,
      description: "Perfect for startups and small websites looking to automate simple customer interactions",
      features: [
        "Website-only FAQ bots",
        "No memory or context retention",
        "Pre-built templates",
        "Fast setup and deployment",
        "Basic analytics dashboard",
      ],
      ideal: "Startups and small websites",
    },
    {
      name: "Standard AI System",
      icon: Workflow,
      description: "Comprehensive solution for growing businesses needing multichannel automation",
      features: [
        "Multichannel bots (Website + WhatsApp + Instagram)",
        "Vector DB memory (Chroma / Qdrant)",
        "Document upload and smart retrieval",
        "Automated workflows (Zapier / n8n)",
        "Advanced analytics and reporting",
      ],
      ideal: "Small to medium businesses",
      popular: true,
    },
    {
      name: "Advanced AI System",
      icon: Code2,
      description: "Enterprise-grade solution with autonomous agents and full integration capabilities",
      features: [
        "Autonomous AI agents",
        "Full API integrations",
        "Multi-session memory (Redis + Vector DB)",
        "CRM sync and backend workflow control",
        "Custom model training",
        "Dedicated support team",
      ],
      ideal: "Enterprises and AI SaaS platforms",
    },
  ];

  const additionalServices = [
    {
      icon: BarChart3,
      name: "AI Data Analytics",
      description: "Predictive dashboards and insights that transform raw data into strategic decisions",
    },
    {
      icon: Code2,
      name: "AI SaaS Platform Development",
      description: "Build and scale custom AI-powered dashboards and platforms tailored to your needs",
    },
    {
      icon: Users,
      name: "AI Consulting",
      description: "End-to-end system planning and deployment strategy with expert guidance",
    },
    {
      icon: Shield,
      name: "AI Security & Compliance",
      description: "Ensure your AI systems meet industry standards and security requirements",
    },
  ];

  return (
    <div className="min-h-screen pt-24 pb-20">
      {/* Hero */}
      <section className="container mx-auto px-4 sm:px-6 lg:px-8 mb-20">
        <div className="max-w-4xl mx-auto text-center animate-fade-in">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">End-to-End AI Systems</h1>
          <p className="text-xl text-muted-foreground leading-relaxed">
            From simple chatbots to complex AI ecosystems — we build solutions that scale with your business
          </p>
        </div>
      </section>

      {/* Service Tiers */}
      <section className="container mx-auto px-4 sm:px-6 lg:px-8 mb-20">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {tiers.map((tier, index) => (
            <div 
              key={index} 
              className={`bg-card rounded-2xl p-8 shadow-card border-2 transition-all hover:shadow-hover animate-slide-up ${
                tier.popular ? 'border-primary' : 'border-border'
              }`}
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {tier.popular && (
                <div className="inline-block bg-primary text-white text-sm font-semibold px-4 py-1 rounded-full mb-4">
                  Most Popular
                </div>
              )}
              
              <div className="w-16 h-16 gradient-primary rounded-xl flex items-center justify-center mb-6">
                <tier.icon className="text-white" size={32} />
              </div>
              
              <h3 className="text-2xl font-bold mb-3">{tier.name}</h3>
              <p className="text-muted-foreground mb-6 text-sm leading-relaxed">{tier.description}</p>
              
              <div className="space-y-3 mb-6">
                {tier.features.map((feature, i) => (
                  <div key={i} className="flex items-start gap-2">
                    <CheckCircle2 className="text-primary mt-0.5 flex-shrink-0" size={18} />
                    <span className="text-sm">{feature}</span>
                  </div>
                ))}
              </div>
              
              <div className="pt-6 border-t border-border">
                <p className="text-sm text-muted-foreground mb-4">
                  <span className="font-semibold text-foreground">Ideal for:</span> {tier.ideal}
                </p>
                <Button asChild className={tier.popular ? "gradient-primary w-full" : "w-full"}>
                  <Link to="/contact">Contact for Quote</Link>
                </Button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Additional Services */}
      <section className="bg-secondary/30 py-20 mb-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Additional AI Solutions</h2>
            <p className="text-xl text-muted-foreground">Comprehensive services to complete your AI ecosystem</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {additionalServices.map((service, index) => (
              <div 
                key={index} 
                className="bg-card rounded-2xl p-8 shadow-card border border-border hover:shadow-hover transition-all animate-slide-up"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 gradient-primary rounded-xl flex items-center justify-center flex-shrink-0">
                    <service.icon className="text-white" size={24} />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">{service.name}</h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">{service.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Aurozen */}
      <section className="container mx-auto px-4 sm:px-6 lg:px-8 mb-20">
        <div className="bg-card rounded-2xl p-12 shadow-card border border-border">
          <h2 className="text-4xl font-bold text-center mb-12">Why Choose Aurozen AI</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 gradient-primary rounded-lg flex items-center justify-center flex-shrink-0">
                <CheckCircle2 className="text-white" size={20} />
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">End-to-End AI Ecosystems</h3>
                <p className="text-muted-foreground text-sm">Complete solutions from planning to deployment and beyond</p>
              </div>
            </div>
            
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 gradient-primary rounded-lg flex items-center justify-center flex-shrink-0">
                <CheckCircle2 className="text-white" size={20} />
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Fast, Scalable Deployment</h3>
                <p className="text-muted-foreground text-sm">Get to market quickly with systems built to grow</p>
              </div>
            </div>
            
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 gradient-primary rounded-lg flex items-center justify-center flex-shrink-0">
                <CheckCircle2 className="text-white" size={20} />
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Experienced Team</h3>
                <p className="text-muted-foreground text-sm">Experts in AI, automation, and enterprise systems</p>
              </div>
            </div>
            
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 gradient-primary rounded-lg flex items-center justify-center flex-shrink-0">
                <CheckCircle2 className="text-white" size={20} />
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Dedicated Ongoing Support</h3>
                <p className="text-muted-foreground text-sm">We're with you every step of the way</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gradient-to-r from-primary to-accent rounded-3xl p-12 text-center text-white">
          <h2 className="text-4xl font-bold mb-6">Ready to Transform Your Business?</h2>
          <p className="text-xl mb-8 opacity-90">Let's discuss which AI solution is right for you</p>
          <Button asChild size="lg" variant="secondary" className="text-lg px-8">
            <Link to="/contact">Request Custom Quote</Link>
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Services;
