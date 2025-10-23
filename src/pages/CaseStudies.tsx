import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { TrendingUp, Clock, DollarSign, Users, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";

const CaseStudies = () => {
  const caseStudies = [
    {
      title: "Salon Voice Agent Increases Bookings by 63%",
      industry: "Beauty & Wellness",
      problem: "High no-show rates and missed calls during peak hours resulting in lost revenue.",
      solution: "Deployed AI voice agent to handle booking calls, send reminders, and confirm appointments 24/7.",
      results: [
        { metric: "63%", label: "Increase in bookings" },
        { metric: "48%", label: "Reduction in no-shows" },
        { metric: "2.5x", label: "More calls handled" },
      ],
      gradient: "from-blue-500 to-cyan-500",
    },
    {
      title: "E-commerce Chatbot Recovers 40% Abandoned Carts",
      industry: "Online Retail",
      problem: "High cart abandonment rate with no automated follow-up system in place.",
      solution: "Implemented RAG chatbot with cart recovery, product recommendations, and personalized offers.",
      results: [
        { metric: "40%", label: "Cart recovery rate" },
        { metric: "$180K", label: "Additional revenue" },
        { metric: "85%", label: "Customer satisfaction" },
      ],
      gradient: "from-cyan-500 to-teal-500",
    },
    {
      title: "Healthcare Clinic Automates 80% of Appointment Scheduling",
      industry: "Healthcare",
      problem: "Staff overwhelmed with phone calls for appointments, prescription refills, and basic inquiries.",
      solution: "Voice agent system handling scheduling, reminders, and pre-screening with HIPAA compliance.",
      results: [
        { metric: "80%", label: "Automated scheduling" },
        { metric: "3 hrs", label: "Staff time saved daily" },
        { metric: "92%", label: "Patient satisfaction" },
      ],
      gradient: "from-teal-500 to-green-500",
    },
    {
      title: "Real Estate Lead Qualification System Boosts Conversions by 55%",
      industry: "Real Estate",
      problem: "Sales team wasting time on unqualified leads with low conversion potential.",
      solution: "Event-to-event system with chatbot capture, voice qualification, and CRM pipeline automation.",
      results: [
        { metric: "55%", label: "Conversion increase" },
        { metric: "70%", label: "Time saved on leads" },
        { metric: "2x", label: "Qualified leads" },
      ],
      gradient: "from-green-500 to-blue-500",
    },
    {
      title: "Restaurant Chain Implements Multi-Channel Ordering System",
      industry: "Food & Hospitality",
      problem: "Managing orders across phone, website, and social media causing errors and delays.",
      solution: "Unified chatbot system across website, WhatsApp, and Instagram with real-time order management.",
      results: [
        { metric: "90%", label: "Order accuracy" },
        { metric: "45%", label: "Faster fulfillment" },
        { metric: "$250K", label: "Annual savings" },
      ],
      gradient: "from-blue-500 to-purple-500",
    },
    {
      title: "SaaS Platform Reduces Support Tickets by 65%",
      industry: "Technology",
      problem: "Support team overwhelmed with repetitive questions and basic troubleshooting requests.",
      solution: "RAG-powered chatbot with access to documentation, tutorials, and automated diagnostics.",
      results: [
        { metric: "65%", label: "Ticket reduction" },
        { metric: "4 min", label: "Average resolution" },
        { metric: "88%", label: "Self-service rate" },
      ],
      gradient: "from-purple-500 to-pink-500",
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
          <TrendingUp className="w-16 h-16 mx-auto mb-6 text-primary" />
          <h1 className="text-5xl md:text-6xl font-bold mb-6 glow-text">Case Studies & Success Stories</h1>
          <p className="text-xl text-foreground/70 mb-8 leading-relaxed">
            Real results from businesses that transformed their operations with AI automation. 
            See how voice agents, chatbots, and event systems drive measurable growth.
          </p>
        </motion.div>
      </section>

      {/* Case Studies */}
      <section className="container mx-auto px-4 sm:px-6 lg:px-8 mb-20">
        <div className="space-y-16">
          {caseStudies.map((study, index) => (
            <motion.div
              key={study.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="glass-card p-8 md:p-12"
            >
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {/* Left Side - Story */}
                <div>
                  <div className={`inline-block px-4 py-2 rounded-full bg-gradient-to-r ${study.gradient} text-white text-sm font-semibold mb-4`}>
                    {study.industry}
                  </div>
                  
                  <h3 className="text-3xl font-bold mb-6">{study.title}</h3>
                  
                  <div className="space-y-6">
                    <div>
                      <div className="flex items-center gap-2 mb-2">
                        <div className="w-2 h-2 rounded-full bg-red-500" />
                        <h4 className="text-lg font-semibold text-red-400">Problem</h4>
                      </div>
                      <p className="text-foreground/70 leading-relaxed pl-4">{study.problem}</p>
                    </div>
                    
                    <div>
                      <div className="flex items-center gap-2 mb-2">
                        <div className="w-2 h-2 rounded-full bg-blue-500" />
                        <h4 className="text-lg font-semibold text-blue-400">Solution</h4>
                      </div>
                      <p className="text-foreground/70 leading-relaxed pl-4">{study.solution}</p>
                    </div>
                  </div>
                </div>

                {/* Right Side - Results */}
                <div className="flex flex-col justify-center">
                  <div className="flex items-center gap-2 mb-6">
                    <CheckCircle2 className="text-green-500" size={24} />
                    <h4 className="text-2xl font-semibold text-green-400">Results</h4>
                  </div>
                  
                  <div className="space-y-6">
                    {study.results.map((result, resultIndex) => (
                      <motion.div
                        key={resultIndex}
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: resultIndex * 0.1 }}
                        className="glass-card p-6 bg-gradient-to-br from-primary/5 to-transparent"
                      >
                        <div className="text-4xl font-bold text-primary mb-2">{result.metric}</div>
                        <div className="text-foreground/70">{result.label}</div>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Stats Overview */}
      <section className="container mx-auto px-4 sm:px-6 lg:px-8 mb-20">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="glass-card p-12 bg-gradient-to-br from-primary/10 to-cyan-500/10"
        >
          <h2 className="text-4xl font-bold text-center mb-12">Combined Impact Across All Clients</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <Clock className="w-12 h-12 mx-auto mb-4 text-primary" />
              <div className="text-4xl font-bold text-primary mb-2">15K+</div>
              <p className="text-foreground/70">Hours Saved Monthly</p>
            </div>
            <div className="text-center">
              <DollarSign className="w-12 h-12 mx-auto mb-4 text-primary" />
              <div className="text-4xl font-bold text-primary mb-2">$2.5M+</div>
              <p className="text-foreground/70">Revenue Generated</p>
            </div>
            <div className="text-center">
              <Users className="w-12 h-12 mx-auto mb-4 text-primary" />
              <div className="text-4xl font-bold text-primary mb-2">500K+</div>
              <p className="text-foreground/70">Customer Interactions</p>
            </div>
            <div className="text-center">
              <TrendingUp className="w-12 h-12 mx-auto mb-4 text-primary" />
              <div className="text-4xl font-bold text-primary mb-2">92%</div>
              <p className="text-foreground/70">Average Satisfaction</p>
            </div>
          </div>
        </motion.div>
      </section>

      {/* CTA Section */}
      <section className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="glass-card p-12 text-center"
        >
          <h2 className="text-4xl font-bold mb-6">Ready to Transform Your Business?</h2>
          <p className="text-xl text-foreground/70 mb-8">
            Join hundreds of businesses achieving remarkable results with AI automation.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Button asChild className="gradient-primary shadow-glow hover:shadow-hover">
              <Link to="/contact">Get Your Custom Quote</Link>
            </Button>
            <Button asChild variant="outline" className="border-primary/30 hover:bg-primary/10">
              <Link to="/services">Explore Services</Link>
            </Button>
          </div>
        </motion.div>
      </section>
    </div>
  );
};

export default CaseStudies;
