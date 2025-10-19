import { Target, Eye, Heart, Award } from "lucide-react";

const About = () => {
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

  return (
    <div className="min-h-screen pt-24 pb-20">
      {/* Hero */}
      <section className="container mx-auto px-4 sm:px-6 lg:px-8 mb-20">
        <div className="max-w-4xl mx-auto text-center animate-fade-in">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">About Aurozen AI</h1>
          <p className="text-xl text-muted-foreground leading-relaxed">
            We're on a mission to make AI accessible, efficient, and business-ready for every organization
          </p>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="container mx-auto px-4 sm:px-6 lg:px-8 mb-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-card rounded-2xl p-8 shadow-card border border-border animate-slide-up">
            <h2 className="text-3xl font-bold mb-4">Our Mission</h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Empowering businesses with intelligent, scalable AI solutions that transform operations and drive measurable growth.
            </p>
          </div>
          <div className="bg-card rounded-2xl p-8 shadow-card border border-border animate-slide-up" style={{ animationDelay: '100ms' }}>
            <h2 className="text-3xl font-bold mb-4">Our Vision</h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              To make AI accessible, efficient, and business-ready for every organization, regardless of size or industry.
            </p>
          </div>
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
            <div key={index} className="bg-card rounded-2xl p-6 shadow-card border border-border text-center animate-slide-up hover:shadow-hover transition-all" style={{ animationDelay: `${index * 100}ms` }}>
              <div className="w-16 h-16 gradient-primary rounded-xl flex items-center justify-center mx-auto mb-4">
                <value.icon className="text-white" size={32} />
              </div>
              <h3 className="text-xl font-semibold mb-2">{value.title}</h3>
              <p className="text-sm text-muted-foreground">{value.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Track Record */}
      <section className="bg-secondary/30 py-20 mb-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Our Track Record</h2>
            <p className="text-xl text-muted-foreground">Numbers that speak for themselves</p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center animate-slide-up" style={{ animationDelay: `${index * 100}ms` }}>
                <div className="text-5xl font-bold text-primary mb-2">{stat.number}</div>
                <p className="text-muted-foreground">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Case Study Highlights */}
      <section className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">Impact Stories</h2>
          <p className="text-xl text-muted-foreground">Real transformations from our AI solutions</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-card rounded-2xl p-8 shadow-card border border-border animate-slide-up">
            <div className="text-4xl font-bold text-primary mb-4">80%</div>
            <h3 className="text-xl font-semibold mb-2">Response Time Reduction</h3>
            <p className="text-muted-foreground text-sm">
              Deployed an AI chatbot system that automated customer service, drastically reducing response times for a growing e-commerce platform.
            </p>
          </div>
          
          <div className="bg-card rounded-2xl p-8 shadow-card border border-border animate-slide-up" style={{ animationDelay: '100ms' }}>
            <div className="text-4xl font-bold text-primary mb-4">2.5x</div>
            <h3 className="text-xl font-semibold mb-2">Efficiency Improvement</h3>
            <p className="text-muted-foreground text-sm">
              Implemented end-to-end automation workflows that streamlined operations and more than doubled productivity for a logistics company.
            </p>
          </div>
          
          <div className="bg-card rounded-2xl p-8 shadow-card border border-border animate-slide-up" style={{ animationDelay: '200ms' }}>
            <div className="text-4xl font-bold text-primary mb-4">60%</div>
            <h3 className="text-xl font-semibold mb-2">Cost Savings</h3>
            <p className="text-muted-foreground text-sm">
              Built custom AI analytics platform that identified optimization opportunities, cutting operational costs significantly for a manufacturing client.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
