import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { CheckCircle2, Plus, Zap, HelpCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

const Pricing = () => {
  const plans = [
    {
      name: "Basic",
      description: "Perfect for startups and small websites",
      features: [
        "Website chatbot or single voice agent",
        "Pre-built templates",
        "Basic analytics dashboard",
        "Email support",
        "Up to 1,000 interactions/month",
      ],
      gradient: "from-blue-500 to-cyan-500",
    },
    {
      name: "Professional",
      description: "Comprehensive AI for growing businesses",
      features: [
        "Multi-channel deployment (Web, WhatsApp, Instagram)",
        "Voice agents with call automation",
        "RAG-powered memory & context",
        "CRM & API integrations",
        "Advanced analytics & reporting",
        "Priority support",
        "Up to 10,000 interactions/month",
      ],
      popular: true,
      gradient: "from-cyan-500 to-teal-500",
    },
    {
      name: "Enterprise",
      description: "Full-scale AI automation ecosystem",
      features: [
        "Event-to-event automation systems",
        "Autonomous AI agents",
        "Multi-session memory (Redis + Vector DB)",
        "Custom model training & fine-tuning",
        "Full backend workflow control",
        "Dedicated support team",
        "SLA guarantee",
        "Unlimited interactions",
      ],
      gradient: "from-teal-500 to-blue-500",
    },
  ];

  const addOns = [
    { name: "CRM & API Integration", description: "Connect with HubSpot, Salesforce, Zoho, etc." },
    { name: "24/7 Automation Monitoring", description: "Real-time alerts and performance tracking" },
    { name: "Maintenance & Updates", description: "Ongoing optimization and feature updates" },
    { name: "Custom Training & Workshops", description: "Team training on AI system usage" },
    { name: "White-label Solutions", description: "Branded AI systems for agencies" },
  ];

  const faqs = [
    {
      question: "How is pricing determined?",
      answer: "Pricing is based on your specific requirements including interaction volume, integrations needed, customization level, and support requirements. We provide detailed quotes after understanding your needs.",
    },
    {
      question: "What's included in ongoing support?",
      answer: "All plans include monitoring, bug fixes, and technical support. Professional plans add priority support. Enterprise plans include dedicated support teams and SLA guarantees.",
    },
    {
      question: "Can I upgrade my plan later?",
      answer: "Absolutely! Our solutions are built to scale. You can upgrade seamlessly as your business grows without disrupting existing operations.",
    },
    {
      question: "Do you offer custom enterprise solutions?",
      answer: "Yes! We specialize in building custom AI ecosystems for enterprises. Contact us to discuss your specific requirements and get a tailored solution.",
    },
  ];

  return (
    <div className="min-h-screen pt-24 pb-20">
      {/* Hero */}
      <section className="container mx-auto px-4 sm:px-6 lg:px-8 mb-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-4xl mx-auto text-center"
        >
          <Zap className="w-16 h-16 mx-auto mb-6 text-primary" />
          <h1 className="text-5xl md:text-6xl font-bold mb-6 glow-text">
            Flexible AI Plans That Scale With You
          </h1>
          <p className="text-xl text-foreground/70 mb-8 leading-relaxed">
            Transparent pricing with solutions designed to grow with your business. 
            No hidden fees, no surprises.
          </p>
        </motion.div>
      </section>

      {/* Pricing Tiers */}
      <section className="container mx-auto px-4 sm:px-6 lg:px-8 mb-20">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
              whileHover={{ scale: 1.05, y: -10 }}
              className={`glass-card p-8 relative overflow-hidden ${
                plan.popular ? 'border-2 border-primary' : ''
              }`}
            >
              {plan.popular && (
                <div className="absolute top-0 right-0">
                  <div className="bg-gradient-to-br from-primary to-cyan-500 text-white text-xs font-semibold px-4 py-2 rounded-bl-xl">
                    Most Popular
                  </div>
                </div>
              )}

              <div className={`w-16 h-16 rounded-xl bg-gradient-to-br ${plan.gradient} flex items-center justify-center mb-6 shadow-glow`}>
                <Zap className="text-white" size={32} />
              </div>
              
              <h3 className="text-3xl font-bold mb-2">{plan.name}</h3>
              <p className="text-foreground/70 text-sm mb-6">{plan.description}</p>
              
              <div className="mb-8">
                <div className="text-4xl font-bold mb-2">Custom Quote</div>
                <p className="text-sm text-foreground/60">Based on your requirements</p>
              </div>
              
              <div className="space-y-3 mb-8">
                {plan.features.map((feature, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <CheckCircle2 className="text-primary mt-0.5 flex-shrink-0" size={18} />
                    <span className="text-sm text-foreground/80">{feature}</span>
                  </div>
                ))}
              </div>
              
              <Button asChild className={`w-full ${plan.popular ? 'gradient-primary shadow-glow' : ''}`}>
                <Link to="/contact">Get Started</Link>
              </Button>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Add-ons */}
      <section className="container mx-auto px-4 sm:px-6 lg:px-8 mb-20">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="glass-card p-12 bg-gradient-to-br from-primary/5 to-cyan-500/5"
        >
          <h2 className="text-4xl font-bold text-center mb-4">Available Add-Ons</h2>
          <p className="text-center text-foreground/70 mb-12">
            Extend your AI capabilities with these optional services
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {addOns.map((addon, index) => (
              <motion.div
                key={addon.name}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="glass-card p-6 flex items-start gap-4"
              >
                <div className="w-12 h-12 gradient-primary rounded-xl flex items-center justify-center flex-shrink-0 shadow-glow">
                  <Plus className="text-white" size={20} />
                </div>
                <div>
                  <h3 className="font-semibold mb-1">{addon.name}</h3>
                  <p className="text-sm text-foreground/70">{addon.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* Why Choose */}
      <section className="container mx-auto px-4 sm:px-6 lg:px-8 mb-20">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="glass-card p-12"
        >
          <h2 className="text-4xl font-bold text-center mb-12">Why Choose Aurozen AI</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              "End-to-End AI Ecosystems",
              "Fast, Scalable Deployment",
              "Experienced AI Team",
              "Dedicated Ongoing Support",
            ].map((reason, index) => (
              <div key={reason} className="flex items-center gap-4">
                <div className="w-12 h-12 gradient-primary rounded-xl flex items-center justify-center flex-shrink-0 shadow-glow">
                  <CheckCircle2 className="text-white" size={24} />
                </div>
                <span className="text-lg font-medium">{reason}</span>
              </div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* FAQ */}
      <section className="container mx-auto px-4 sm:px-6 lg:px-8 mb-20">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <div className="text-center mb-12">
            <HelpCircle className="w-12 h-12 mx-auto mb-4 text-primary" />
            <h2 className="text-4xl font-bold mb-4">Common Questions</h2>
          </div>
          
          <div className="max-w-3xl mx-auto space-y-6">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="glass-card p-6"
              >
                <h3 className="text-lg font-semibold mb-3">{faq.question}</h3>
                <p className="text-foreground/70 text-sm leading-relaxed">{faq.answer}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* CTA */}
      <section className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="glass-card p-12 text-center"
        >
          <h2 className="text-4xl font-bold mb-6">Ready to Get Started?</h2>
          <p className="text-xl text-foreground/70 mb-8">
            Let's discuss the perfect AI solution for your business needs.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Button asChild className="gradient-primary shadow-glow hover:shadow-hover">
              <Link to="/contact">Request Custom Quote</Link>
            </Button>
            <Button asChild variant="outline" className="border-primary/30 hover:bg-primary/10">
              <Link to="/services">View Services</Link>
            </Button>
          </div>
        </motion.div>
      </section>
    </div>
  );
};

export default Pricing;
