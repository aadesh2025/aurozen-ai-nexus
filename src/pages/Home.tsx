import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import ServiceCard from "@/components/ServiceCard";
import { Bot, Workflow, BarChart3, Sparkles, CheckCircle2, Quote } from "lucide-react";
import heroImage from "@/assets/hero-bg.jpg";

const Home = () => {
  const services = [
    {
      icon: Bot,
      title: "AI Chatbot Development",
      description: "Intelligent conversational agents that understand context and deliver personalized responses across all channels.",
      link: "/services",
    },
    {
      icon: Workflow,
      title: "AI Automation Systems",
      description: "End-to-end workflow automation that eliminates manual tasks and accelerates business operations.",
      link: "/services",
    },
    {
      icon: BarChart3,
      title: "AI Data Analytics",
      description: "Predictive models and intelligent dashboards that transform raw data into actionable insights.",
      link: "/services",
    },
    {
      icon: Sparkles,
      title: "AI SaaS Platforms",
      description: "Custom AI-powered platforms built to scale with your business and deliver exceptional user experiences.",
      link: "/services",
    },
  ];

  const whyChoose = [
    "End-to-end AI ecosystem development",
    "Proven expertise in automation & agents",
    "Fast, scalable deployment",
    "Ongoing support and optimization",
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

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative overflow-hidden pt-24 pb-20">
        <div 
          className="absolute inset-0 z-0 opacity-40"
          style={{
            backgroundImage: `url(${heroImage})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />
        <div className="absolute inset-0 gradient-hero z-0" />
        
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-4xl mx-auto text-center animate-fade-in">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
              Transform Your Business with{" "}
              <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                End-to-End AI Solutions
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-8 leading-relaxed">
              From Automation to Advanced AI Agents — We Build, Deploy, and Scale AI Systems for Your Success
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="gradient-primary text-lg px-8">
                <Link to="/contact">Book a Demo</Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="text-lg px-8">
                <Link to="/services">Explore Services</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-20 bg-secondary/30">
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
