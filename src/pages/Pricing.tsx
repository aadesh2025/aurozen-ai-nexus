import { CheckCircle2, Plus } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Pricing = () => {
  const plans = [
    {
      name: "Basic",
      description: "Perfect for getting started with AI automation",
      features: [
        "Website chatbot deployment",
        "Pre-built templates",
        "Basic analytics",
        "Email support",
        "Up to 1,000 conversations/month",
      ],
    },
    {
      name: "Standard",
      description: "Comprehensive AI solution for growing businesses",
      features: [
        "Multichannel deployment (Website + WhatsApp + Instagram)",
        "Vector memory database",
        "Document upload & retrieval",
        "Workflow automation (Zapier/n8n)",
        "Advanced analytics dashboard",
        "Priority support",
        "Up to 10,000 conversations/month",
      ],
      popular: true,
    },
    {
      name: "Advanced",
      description: "Enterprise-grade AI ecosystem with full capabilities",
      features: [
        "Autonomous AI agents",
        "Full API integrations",
        "Multi-session memory",
        "CRM synchronization",
        "Custom model training",
        "Backend workflow control",
        "Dedicated support team",
        "Unlimited conversations",
        "SLA guarantee",
      ],
    },
  ];

  const addOns = [
    "CRM & API Integration",
    "24/7 Automation Monitoring",
    "Maintenance & Updates Package",
    "Custom Training & Workshops",
    "White-label Solutions",
  ];

  const whyChoose = [
    "End-to-End AI Ecosystems",
    "Fast, Scalable Deployment",
    "Experienced Team",
    "Dedicated Ongoing Support",
  ];

  return (
    <div className="min-h-screen pt-24 pb-20">
      {/* Hero */}
      <section className="container mx-auto px-4 sm:px-6 lg:px-8 mb-20">
        <div className="max-w-4xl mx-auto text-center animate-fade-in">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">Flexible AI Plans for Every Business</h1>
          <p className="text-xl text-muted-foreground leading-relaxed">
            Transparent pricing with solutions that scale with your growth
          </p>
        </div>
      </section>

      {/* Pricing Tiers */}
      <section className="container mx-auto px-4 sm:px-6 lg:px-8 mb-20">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <div 
              key={index} 
              className={`bg-card rounded-2xl p-8 shadow-card border-2 transition-all hover:shadow-hover animate-slide-up ${
                plan.popular ? 'border-primary lg:-mt-4 lg:mb-4' : 'border-border'
              }`}
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {plan.popular && (
                <div className="inline-block bg-primary text-white text-sm font-semibold px-4 py-1 rounded-full mb-4">
                  Most Popular
                </div>
              )}
              
              <h3 className="text-3xl font-bold mb-2">{plan.name}</h3>
              <p className="text-muted-foreground text-sm mb-6">{plan.description}</p>
              
              <div className="mb-8">
                <div className="text-4xl font-bold mb-2">Custom Quote</div>
                <p className="text-sm text-muted-foreground">Based on your specific needs</p>
              </div>
              
              <div className="space-y-3 mb-8">
                {plan.features.map((feature, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <CheckCircle2 className="text-primary mt-0.5 flex-shrink-0" size={18} />
                    <span className="text-sm">{feature}</span>
                  </div>
                ))}
              </div>
              
              <Button asChild className={`w-full ${plan.popular ? 'gradient-primary' : ''}`}>
                <Link to="/contact">Contact for Quote</Link>
              </Button>
            </div>
          ))}
        </div>
      </section>

      {/* Add-ons */}
      <section className="bg-secondary/30 py-20 mb-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Available Add-Ons</h2>
            <p className="text-xl text-muted-foreground">Extend your AI capabilities with these optional services</p>
          </div>
          
          <div className="max-w-3xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-4">
            {addOns.map((addon, index) => (
              <div 
                key={index} 
                className="bg-card rounded-xl p-4 shadow-card border border-border flex items-center gap-3 hover:shadow-hover transition-all animate-slide-up"
                style={{ animationDelay: `${index * 50}ms` }}
              >
                <div className="w-8 h-8 gradient-primary rounded-lg flex items-center justify-center flex-shrink-0">
                  <Plus className="text-white" size={18} />
                </div>
                <span className="font-medium">{addon}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose */}
      <section className="container mx-auto px-4 sm:px-6 lg:px-8 mb-20">
        <div className="bg-card rounded-2xl p-12 shadow-card border border-border">
          <h2 className="text-4xl font-bold text-center mb-12">Why Choose Aurozen AI</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {whyChoose.map((reason, index) => (
              <div key={index} className="flex items-center gap-4">
                <div className="w-12 h-12 gradient-primary rounded-xl flex items-center justify-center flex-shrink-0">
                  <CheckCircle2 className="text-white" size={24} />
                </div>
                <span className="text-lg font-medium">{reason}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="container mx-auto px-4 sm:px-6 lg:px-8 mb-20">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">Common Questions</h2>
        </div>
        
        <div className="max-w-3xl mx-auto space-y-6">
          <div className="bg-card rounded-xl p-6 shadow-card border border-border">
            <h3 className="text-lg font-semibold mb-2">How is pricing determined?</h3>
            <p className="text-muted-foreground text-sm">
              Pricing is based on your specific requirements including conversation volume, integrations needed, and level of customization. We provide a detailed quote after understanding your needs.
            </p>
          </div>
          
          <div className="bg-card rounded-xl p-6 shadow-card border border-border">
            <h3 className="text-lg font-semibold mb-2">What's included in ongoing support?</h3>
            <p className="text-muted-foreground text-sm">
              All plans include monitoring, bug fixes, and technical support. Advanced plans include dedicated support teams and SLA guarantees.
            </p>
          </div>
          
          <div className="bg-card rounded-xl p-6 shadow-card border border-border">
            <h3 className="text-lg font-semibold mb-2">Can I upgrade my plan later?</h3>
            <p className="text-muted-foreground text-sm">
              Absolutely! Our solutions are built to scale. You can upgrade seamlessly as your business grows.
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gradient-to-r from-primary to-accent rounded-3xl p-12 text-center text-white">
          <h2 className="text-4xl font-bold mb-6">Ready to Get Started?</h2>
          <p className="text-xl mb-8 opacity-90">Let's discuss the perfect AI solution for your business</p>
          <Button asChild size="lg" variant="secondary" className="text-lg px-8">
            <Link to="/contact">Request Custom Quote</Link>
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Pricing;
