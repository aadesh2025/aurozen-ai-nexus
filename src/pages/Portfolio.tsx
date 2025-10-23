import { useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Bot, Workflow, BarChart3, Building2, TrendingUp, ArrowRight } from "lucide-react";

const Portfolio = () => {
  const [activeFilter, setActiveFilter] = useState("All");

  const filters = ["All", "Voice Agents", "Chatbots", "Automation", "Analytics", "Full Systems"];

  const projects = [
    {
      title: "Healthcare Voice Appointment System",
      category: "Voice Agents",
      description: "Automated patient scheduling and follow-up calls with HIPAA compliance",
      icon: Bot,
      metric: "80% reduction in no-shows",
      gradient: "from-blue-500 to-cyan-500",
    },
    {
      title: "E-commerce AI Shopping Assistant",
      category: "Chatbots",
      description: "Multichannel chatbot handling 10K+ daily conversations across web and WhatsApp",
      icon: Bot,
      metric: "40% cart recovery rate",
      gradient: "from-cyan-500 to-teal-500",
    },
    {
      title: "Sales Pipeline Automation System",
      category: "Automation",
      description: "End-to-end lead qualification and nurturing with CRM integration",
      icon: Workflow,
      metric: "55% conversion increase",
      gradient: "from-teal-500 to-green-500",
    },
    {
      title: "Predictive Analytics Dashboard",
      category: "Analytics",
      description: "Real-time insights for manufacturing optimization and forecasting",
      icon: BarChart3,
      metric: "$500K cost savings",
      gradient: "from-green-500 to-blue-500",
    },
    {
      title: "Restaurant Multi-Channel Ordering",
      category: "Chatbots",
      description: "Unified ordering system across website, WhatsApp, and Instagram",
      icon: Bot,
      metric: "90% order accuracy",
      gradient: "from-blue-500 to-purple-500",
    },
    {
      title: "Enterprise AI Ecosystem",
      category: "Full Systems",
      description: "Complete AI platform with autonomous agents and backend integration",
      icon: Building2,
      metric: "Full transformation",
      gradient: "from-purple-500 to-pink-500",
    },
    {
      title: "Real Estate Lead Qualification",
      category: "Voice Agents",
      description: "Voice agent system calling and qualifying leads automatically",
      icon: Bot,
      metric: "2x qualified leads",
      gradient: "from-pink-500 to-red-500",
    },
    {
      title: "Customer Support AI System",
      category: "Chatbots",
      description: "Intelligent support with RAG memory and context awareness",
      icon: Bot,
      metric: "75% ticket reduction",
      gradient: "from-red-500 to-orange-500",
    },
    {
      title: "Financial Forecasting Platform",
      category: "Analytics",
      description: "Predictive models for revenue and expense planning",
      icon: BarChart3,
      metric: "92% accuracy",
      gradient: "from-orange-500 to-blue-500",
    },
  ];

  const filteredProjects = activeFilter === "All" 
    ? projects 
    : projects.filter(p => p.category === activeFilter);

  return (
    <div className="min-h-screen pt-24 pb-20">
      {/* Hero */}
      <section className="container mx-auto px-4 sm:px-6 lg:px-8 mb-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-4xl mx-auto text-center"
        >
          <TrendingUp className="w-16 h-16 mx-auto mb-6 text-primary" />
          <h1 className="text-5xl md:text-6xl font-bold mb-6 glow-text">Our Work in Action</h1>
          <p className="text-xl text-foreground/70 mb-8 leading-relaxed">
            Real AI solutions delivering measurable results for businesses across industries. 
            See how we've transformed operations with intelligent automation.
          </p>
        </motion.div>
      </section>

      {/* Filter Tabs */}
      <section className="container mx-auto px-4 sm:px-6 lg:px-8 mb-12">
        <div className="flex flex-wrap justify-center gap-3">
          {filters.map((filter) => (
            <Button
              key={filter}
              variant={activeFilter === filter ? "default" : "outline"}
              onClick={() => setActiveFilter(filter)}
              className={activeFilter === filter ? "gradient-primary shadow-glow" : "border-primary/30 hover:bg-primary/10"}
            >
              {filter}
            </Button>
          ))}
        </div>
      </section>

      {/* Projects Grid */}
      <section className="container mx-auto px-4 sm:px-6 lg:px-8 mb-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ scale: 1.05, y: -10 }}
              className="group glass-card p-8 relative overflow-hidden"
            >
              {/* Gradient overlay */}
              <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-300`} />
              
              <div className="relative z-10">
                <div className={`w-16 h-16 rounded-xl bg-gradient-to-br ${project.gradient} flex items-center justify-center mb-6 shadow-glow`}>
                  <project.icon className="text-white" size={32} />
                </div>
                
                <div className="inline-block px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-semibold mb-4">
                  {project.category}
                </div>
                
                <h3 className="text-xl font-bold mb-3">{project.title}</h3>
                <p className="text-foreground/70 text-sm mb-6 leading-relaxed">{project.description}</p>
                
                <div className="flex items-center justify-between pt-4 border-t border-white/10">
                  <span className="text-sm font-semibold text-primary">{project.metric}</span>
                  <ArrowRight className="text-primary/50 group-hover:text-primary group-hover:translate-x-1 transition-all" size={18} />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Performance Metrics */}
      <section className="container mx-auto px-4 sm:px-6 lg:px-8 mb-20">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="glass-card p-12 bg-gradient-to-br from-primary/10 to-cyan-500/10"
        >
          <h2 className="text-4xl font-bold text-center mb-12">Average Performance Impact</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="text-5xl font-bold text-primary mb-2">80%</div>
              <h3 className="text-xl font-semibold mb-2">Time Saved</h3>
              <p className="text-foreground/70 text-sm">Average reduction in manual work across implementations</p>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold text-primary mb-2">2.5x</div>
              <h3 className="text-xl font-semibold mb-2">Efficiency Gain</h3>
              <p className="text-foreground/70 text-sm">Average improvement in operational efficiency</p>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold text-primary mb-2">94%</div>
              <h3 className="text-xl font-semibold mb-2">Satisfaction</h3>
              <p className="text-foreground/70 text-sm">Average customer satisfaction rate post-implementation</p>
            </div>
          </div>
        </motion.div>
      </section>

      {/* Before/After Comparison */}
      <section className="container mx-auto px-4 sm:px-6 lg:px-8 mb-20">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="glass-card p-12"
        >
          <h2 className="text-4xl font-bold text-center mb-12">Transformation Metrics</h2>
          
          <div className="max-w-4xl mx-auto overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-white/10">
                  <th className="text-left py-4 px-4 font-semibold">Metric</th>
                  <th className="text-center py-4 px-4 font-semibold">Before</th>
                  <th className="text-center py-4 px-4 font-semibold">After</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-white/5">
                  <td className="py-4 px-4">Response Time</td>
                  <td className="text-center py-4 px-4 text-foreground/60">4 hours</td>
                  <td className="text-center py-4 px-4 font-semibold text-primary">45 minutes</td>
                </tr>
                <tr className="border-b border-white/5">
                  <td className="py-4 px-4">Operational Efficiency</td>
                  <td className="text-center py-4 px-4 text-foreground/60">Baseline</td>
                  <td className="text-center py-4 px-4 font-semibold text-primary">2.5x increase</td>
                </tr>
                <tr>
                  <td className="py-4 px-4">Customer Satisfaction</td>
                  <td className="text-center py-4 px-4 text-foreground/60">72%</td>
                  <td className="text-center py-4 px-4 font-semibold text-primary">94%</td>
                </tr>
              </tbody>
            </table>
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
          <h2 className="text-4xl font-bold mb-6">Ready to See Similar Results?</h2>
          <p className="text-xl text-foreground/70 mb-8">
            Let's build an AI solution tailored to your business goals and challenges.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Button asChild className="gradient-primary shadow-glow hover:shadow-hover">
              <Link to="/contact">Start Your Project</Link>
            </Button>
            <Button asChild variant="outline" className="border-primary/30 hover:bg-primary/10">
              <Link to="/services/case-studies">View Case Studies</Link>
            </Button>
          </div>
        </motion.div>
      </section>
    </div>
  );
};

export default Portfolio;
