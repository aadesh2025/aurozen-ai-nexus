import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import ServiceCard from "@/components/ServiceCard";
import { Bot, Database, Mic, Workflow, Brain, Globe, Boxes, BarChart3, CheckCircle2, Quote, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import { useState } from "react";

const Home = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const services = [
    {
      icon: Bot,
      title: "AI Chatbots",
      description: "Intelligent conversational agents with GPT, Claude, or Gemini integration for seamless customer interaction.",
      link: "/services",
    },
    {
      icon: Database,
      title: "RAG Chatbots",
      description: "Advanced retrieval-augmented chatbots connected to your data sources with vector database integration.",
      link: "/services",
    },
    {
      icon: Mic,
      title: "Voice AI Agents",
      description: "Smart voice assistants with natural speech processing for call centers, WhatsApp, and apps.",
      link: "/services",
    },
    {
      icon: Workflow,
      title: "Workflow Automation",
      description: "End-to-end automation systems that eliminate manual tasks and accelerate operations.",
      link: "/services",
    },
    {
      icon: Brain,
      title: "AI Fine-Tuning",
      description: "Custom model training on your proprietary data for domain-specific intelligence.",
      link: "/services",
    },
    {
      icon: Globe,
      title: "AI-Powered Websites",
      description: "Modern websites integrated with chatbots, analytics, and intelligent automation.",
      link: "/services",
    },
    {
      icon: Boxes,
      title: "AI SaaS Platforms",
      description: "Custom AI-powered platforms built to scale with exceptional user experiences.",
      link: "/services",
    },
    {
      icon: BarChart3,
      title: "Predictive Analytics",
      description: "AI-powered forecasting and intelligent dashboards that transform data into insights.",
      link: "/services",
    },
  ];

  const whyChoose = [
    "Intelligent Automation Expertise",
    "Enterprise-Grade Reliability",
    "End-to-End Support & Optimization",
    "Fast, Scalable Deployment",
  ];

  const testimonials = [
    {
      quote: "Aurozen AI reduced our response time by 80% and completely transformed our customer service operations.",
      author: "Sarah Chen",
      role: "CEO, TechFlow",
    },
    {
      quote: "The AI automation they built saved us 60% in operational costs. Absolutely game-changing.",
      author: "Michael Rodriguez",
      role: "Operations Director, ScaleUp Inc",
    },
    {
      quote: "Professional, efficient, and truly understands AI implementation. Highly recommend.",
      author: "Emily Watson",
      role: "CTO, DataSync",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative overflow-hidden pt-32 pb-24">
        {/* Animated Background */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-accent/10"></div>
          <motion.div
            animate={{
              scale: [1, 1.2, 1],
              rotate: [0, 90, 0],
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              ease: "linear"
            }}
            className="absolute -top-1/2 -left-1/2 w-full h-full bg-gradient-to-br from-primary/20 to-transparent blur-3xl"
          />
          <motion.div
            animate={{
              scale: [1.2, 1, 1.2],
              rotate: [90, 0, 90],
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              ease: "linear"
            }}
            className="absolute -bottom-1/2 -right-1/2 w-full h-full bg-gradient-to-tl from-accent/20 to-transparent blur-3xl"
          />
        </div>
        
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-5xl mx-auto text-center"
          >
            <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
              Transform Your Business with{" "}
              <span className="bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent animate-glow">
                Intelligent AI Systems
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-foreground/70 mb-10 leading-relaxed">
              From Chatbots to Fully Automated Workflows — Aurozen AI builds, deploys, and scales AI solutions that drive measurable growth.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="gradient-primary text-lg px-8 shadow-glow hover:shadow-hover transition-all">
                <Link to="/contact">Book a Demo <ArrowRight className="ml-2" size={20} /></Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="text-lg px-8 border-primary/50 hover:bg-primary/10">
                <Link to="/services">Explore Services</Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-24 relative">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-slide-up">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Our Core Solutions</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Comprehensive AI systems tailored to your business needs
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, index) => (
              <div key={index} className="animate-slide-up" style={{ animationDelay: `${index * 100}ms` }}>
                <ServiceCard {...service} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Aurozen */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in">
              <h2 className="text-4xl md:text-5xl font-bold mb-6">Why Choose Aurozen AI</h2>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                We specialize in building intelligent systems that don't just automate tasks — they transform entire workflows. 
                Our expertise spans from simple chatbots to complex AI ecosystems that scale with your growth.
              </p>
              <ul className="space-y-4">
                {whyChoose.map((item, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <CheckCircle2 className="text-primary mt-1 flex-shrink-0" size={20} />
                    <span className="text-foreground">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            
            <div className="bg-card rounded-2xl p-8 shadow-card border border-border animate-slide-up">
              <h3 className="text-2xl font-bold mb-6">Our Track Record</h3>
              <div className="space-y-6">
                <div>
                  <div className="text-4xl font-bold text-primary mb-2">100+</div>
                  <p className="text-muted-foreground">Custom AI chatbots deployed</p>
                </div>
                <div>
                  <div className="text-4xl font-bold text-primary mb-2">50+</div>
                  <p className="text-muted-foreground">Workflows automated end-to-end</p>
                </div>
                <div>
                  <div className="text-4xl font-bold text-primary mb-2">60%</div>
                  <p className="text-muted-foreground">Average cost reduction for clients</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-secondary/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">What Our Clients Say</h2>
            <p className="text-xl text-muted-foreground">Real results from real businesses</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-card rounded-2xl p-8 shadow-card border border-border animate-slide-up" style={{ animationDelay: `${index * 100}ms` }}>
                <Quote className="text-primary mb-4" size={32} />
                <p className="text-foreground mb-6 leading-relaxed">{testimonial.quote}</p>
                <div>
                  <div className="font-semibold">{testimonial.author}</div>
                  <div className="text-sm text-muted-foreground">{testimonial.role}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-r from-primary to-accent rounded-3xl p-12 text-center text-white shadow-hover">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Start Building with Aurozen AI</h2>
            <p className="text-xl mb-8 opacity-90">
              Transform your operations with intelligent automation and AI-powered systems
            </p>
            <Button asChild size="lg" variant="secondary" className="text-lg px-8">
              <Link to="/contact">Request a Free Consultation</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
