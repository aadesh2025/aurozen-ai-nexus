import { Target, Eye, Heart, Award, Star, ChevronLeft, ChevronRight } from "lucide-react";
import { motion } from "framer-motion";
import { useState } from "react";

const About = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const values = [
    { icon: Target, title: "Innovation", description: "Pushing the boundaries of AI technology" },
    { icon: Heart, title: "Reliability", description: "Systems you can trust and depend on" },
    { icon: Eye, title: "Transparency", description: "Clear communication at every step" },
    { icon: Award, title: "Excellence", description: "Uncompromising quality in delivery" },
  ];

  const stats = [
    { number: "100+", label: "Custom AI chatbots built" },
    { number: "50+", label: "Workflows automated" },
    { number: "60%", label: "Average cost savings" },
    { number: "98%", label: "Client satisfaction rate" },
  ];

  const testimonials = [
    {
      quote: "Aurozen AI reduced our response time by 80% and completely transformed our customer service operations.",
      author: "Sarah Chen",
      role: "CEO, TechFlow",
      rating: 5,
    },
    {
      quote: "The AI automation they built saved us 60% in operational costs. Absolutely game-changing.",
      author: "Michael Rodriguez",
      role: "Operations Director, ScaleUp Inc",
      rating: 5,
    },
    {
      quote: "Professional, efficient, and truly understands AI implementation. Highly recommend.",
      author: "Emily Watson",
      role: "CTO, DataSync",
      rating: 5,
    },
    {
      quote: "Their voice agent solution revolutionized how we handle customer calls. Incredible ROI.",
      author: "James Parker",
      role: "Founder, CallStream",
      rating: 5,
    },
  ];

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const whyChooseFeatures = [
    {
      title: "Intelligent Automation Expertise",
      description: "Deep understanding of AI systems that deliver real business impact",
    },
    {
      title: "Enterprise-Grade Reliability",
      description: "Production-ready solutions built to scale with your growth",
    },
    {
      title: "End-to-End Support",
      description: "From concept to deployment and beyond, we're with you every step",
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
          <h1 className="text-5xl md:text-6xl font-bold mb-6 glow-text">About Aurozen AI</h1>
          <p className="text-xl text-muted-foreground leading-relaxed">
            We're on a mission to make AI accessible, efficient, and business-ready for every organization
          </p>
        </motion.div>
      </section>

      {/* Mission & Vision - Split Layout */}
      <section className="container mx-auto px-4 sm:px-6 lg:px-8 mb-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="glass-card p-10 rounded-2xl"
          >
            <h2 className="text-3xl font-bold mb-4 text-primary">Our Mission</h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Empowering businesses with intelligent, scalable AI solutions that transform operations and drive measurable growth.
              We believe in building systems that don't just automate tasks, but fundamentally improve how businesses operate.
            </p>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="glass-card p-10 rounded-2xl"
          >
            <h2 className="text-3xl font-bold mb-4 text-accent">Our Vision</h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              To make AI accessible, efficient, and business-ready for every organization, regardless of size or industry.
              We envision a future where intelligent automation is the norm, not the exception.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Core Values */}
      <section className="container mx-auto px-4 sm:px-6 lg:px-8 mb-20">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">Our Core Values</h2>
          <p className="text-xl text-muted-foreground">Principles that guide everything we do</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {values.map((value, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ scale: 1.05, y: -5 }}
              className="glass-card rounded-2xl p-6 text-center cursor-pointer"
            >
              <div className="w-16 h-16 gradient-primary rounded-xl flex items-center justify-center mx-auto mb-4 shadow-glow">
                <value.icon className="text-white" size={32} />
              </div>
              <h3 className="text-xl font-semibold mb-2">{value.title}</h3>
              <p className="text-sm text-muted-foreground">{value.description}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Testimonials Carousel */}
      <section className="py-20 bg-gradient-to-b from-secondary/30 to-transparent">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">What Our Clients Say</h2>
            <p className="text-xl text-muted-foreground">Real results from real businesses</p>
          </div>

          <div className="relative max-w-4xl mx-auto">
            <motion.div
              key={currentTestimonial}
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -100 }}
              className="glass-card rounded-2xl p-10 text-center"
            >
              <div className="flex justify-center mb-4">
                {[...Array(testimonials[currentTestimonial].rating)].map((_, i) => (
                  <Star key={i} className="text-primary fill-primary" size={24} />
                ))}
              </div>
              <p className="text-xl text-foreground mb-6 leading-relaxed italic">
                "{testimonials[currentTestimonial].quote}"
              </p>
              <div>
                <div className="font-semibold text-lg">{testimonials[currentTestimonial].author}</div>
                <div className="text-sm text-muted-foreground">{testimonials[currentTestimonial].role}</div>
              </div>
            </motion.div>

            <button
              onClick={prevTestimonial}
              className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-12 w-10 h-10 rounded-full bg-primary/20 hover:bg-primary/40 flex items-center justify-center transition-all"
            >
              <ChevronLeft className="text-primary" size={24} />
            </button>
            <button
              onClick={nextTestimonial}
              className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-12 w-10 h-10 rounded-full bg-primary/20 hover:bg-primary/40 flex items-center justify-center transition-all"
            >
              <ChevronRight className="text-primary" size={24} />
            </button>

            <div className="flex justify-center gap-2 mt-8">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentTestimonial(index)}
                  className={`w-2 h-2 rounded-full transition-all ${
                    index === currentTestimonial ? "bg-primary w-8" : "bg-primary/30"
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Track Record */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Our Track Record</h2>
            <p className="text-xl text-muted-foreground">Numbers that speak for themselves</p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.5 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center"
              >
                <div className="text-5xl font-bold text-primary mb-2">{stat.number}</div>
                <p className="text-muted-foreground">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Aurozen */}
      <section className="py-20 bg-gradient-to-b from-transparent to-secondary/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Why Choose Aurozen AI</h2>
            <p className="text-xl text-muted-foreground">The advantages that set us apart</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {whyChooseFeatures.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -5 }}
                className="glass-card rounded-2xl p-8 text-center"
              >
                <h3 className="text-2xl font-bold mb-3 text-primary">{feature.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
