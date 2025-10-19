import { useState } from "react";
import { Button } from "@/components/ui/button";

const Portfolio = () => {
  const [activeFilter, setActiveFilter] = useState("All");

  const filters = ["All", "Chatbots", "Automation", "Analytics", "Full Systems"];

  const projects = [
    {
      title: "E-commerce AI Assistant",
      category: "Chatbots",
      description: "Multichannel chatbot handling 10K+ daily conversations",
      client: "RetailCo",
      metric: "80% response time reduction",
    },
    {
      title: "Workflow Automation Platform",
      category: "Automation",
      description: "End-to-end automation for logistics operations",
      client: "LogiFlow",
      metric: "2.5x efficiency improvement",
    },
    {
      title: "Predictive Analytics Dashboard",
      category: "Analytics",
      description: "Real-time insights for manufacturing optimization",
      client: "ManuTech",
      metric: "60% cost savings identified",
    },
    {
      title: "Enterprise AI Ecosystem",
      category: "Full Systems",
      description: "Complete AI platform with autonomous agents and CRM integration",
      client: "EnterprisePlus",
      metric: "Full digital transformation",
    },
    {
      title: "Customer Support AI",
      category: "Chatbots",
      description: "Intelligent support system with memory and context awareness",
      client: "TechSupport Inc",
      metric: "75% ticket reduction",
    },
    {
      title: "Sales Pipeline Automation",
      category: "Automation",
      description: "Automated lead qualification and follow-up system",
      client: "SalesGrowth",
      metric: "40% conversion rate increase",
    },
    {
      title: "Financial Forecasting AI",
      category: "Analytics",
      description: "Predictive models for revenue and expense planning",
      client: "FinanceFirst",
      metric: "92% forecast accuracy",
    },
    {
      title: "Healthcare AI Platform",
      category: "Full Systems",
      description: "Patient engagement and appointment management system",
      client: "HealthTech",
      metric: "50% no-show reduction",
    },
  ];

  const filteredProjects = activeFilter === "All" 
    ? projects 
    : projects.filter(p => p.category === activeFilter);

  const beforeAfterMetrics = [
    { label: "Manual response time", before: "4 hours", after: "45 minutes" },
    { label: "Operational efficiency", before: "Baseline", after: "2.5x increase" },
    { label: "Customer satisfaction", before: "72%", after: "94%" },
  ];

  return (
    <div className="min-h-screen pt-24 pb-20">
      {/* Hero */}
      <section className="container mx-auto px-4 sm:px-6 lg:px-8 mb-16">
        <div className="max-w-4xl mx-auto text-center animate-fade-in">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">See What We've Built</h1>
          <p className="text-xl text-muted-foreground leading-relaxed">
            Real AI solutions delivering measurable results for businesses across industries
          </p>
        </div>
      </section>

      {/* Filter Tabs */}
      <section className="container mx-auto px-4 sm:px-6 lg:px-8 mb-12">
        <div className="flex flex-wrap justify-center gap-3">
          {filters.map((filter) => (
            <Button
              key={filter}
              variant={activeFilter === filter ? "default" : "outline"}
              onClick={() => setActiveFilter(filter)}
              className={activeFilter === filter ? "gradient-primary" : ""}
            >
              {filter}
            </Button>
          ))}
        </div>
      </section>

      {/* Projects Grid */}
      <section className="container mx-auto px-4 sm:px-6 lg:px-8 mb-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project, index) => (
            <div 
              key={index} 
              className="bg-card rounded-2xl p-6 shadow-card border border-border hover:shadow-hover transition-all hover:-translate-y-1 animate-slide-up"
              style={{ animationDelay: `${index * 50}ms` }}
            >
              <div className="inline-block bg-primary/10 text-primary text-xs font-semibold px-3 py-1 rounded-full mb-4">
                {project.category}
              </div>
              
              <h3 className="text-xl font-bold mb-2">{project.title}</h3>
              <p className="text-sm text-muted-foreground mb-4 leading-relaxed">{project.description}</p>
              
              <div className="pt-4 border-t border-border">
                <div className="flex justify-between items-center">
                  <span className="text-sm text-muted-foreground">{project.client}</span>
                  <span className="text-sm font-semibold text-primary">{project.metric}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Before/After Metrics */}
      <section className="bg-secondary/30 py-20 mb-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Performance Impact</h2>
            <p className="text-xl text-muted-foreground">Average improvements across our implementations</p>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <div className="bg-card rounded-2xl overflow-hidden shadow-card border border-border">
              <div className="grid grid-cols-3 bg-primary text-white p-4">
                <div className="font-semibold">Metric</div>
                <div className="font-semibold text-center">Before</div>
                <div className="font-semibold text-center">After</div>
              </div>
              
              {beforeAfterMetrics.map((metric, index) => (
                <div key={index} className="grid grid-cols-3 p-4 border-b border-border last:border-0">
                  <div className="font-medium">{metric.label}</div>
                  <div className="text-center text-muted-foreground">{metric.before}</div>
                  <div className="text-center font-semibold text-primary">{metric.after}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gradient-to-r from-primary to-accent rounded-3xl p-12 text-center text-white">
          <h2 className="text-4xl font-bold mb-6">Ready to See Similar Results?</h2>
          <p className="text-xl mb-8 opacity-90">Let's build an AI solution tailored to your business</p>
          <Button asChild size="lg" variant="secondary" className="text-lg px-8">
            <a href="/contact">Start Your Project</a>
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Portfolio;
