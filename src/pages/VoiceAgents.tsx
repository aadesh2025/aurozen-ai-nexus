import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Phone, CheckCircle2, Calendar, Users, TrendingUp, MessageSquare, Heart, Package, Building2 } from "lucide-react";
import { Button } from "@/components/ui/button";

const VoiceAgents = () => {
  const agentTypes = [
    {
      icon: MessageSquare,
      title: "Customer Support Agent",
      description: "Handles inbound and outbound support calls, ticket logging, and CRM updates with natural conversation flow.",
      features: ["24/7 availability", "Ticket automation", "CRM integration", "Emotion detection"],
    },
    {
      icon: Calendar,
      title: "Sales Booking Agent",
      description: "Books appointments, confirms slots, and syncs calendars in real-time with your scheduling system.",
      features: ["Calendar sync", "Slot management", "Confirmation calls", "Rescheduling"],
    },
    {
      icon: TrendingUp,
      title: "Lead Qualification Agent",
      description: "Calls leads, validates intent, and updates CRM pipelines automatically with intelligent scoring.",
      features: ["Intent analysis", "Pipeline updates", "Quality scoring", "Follow-up routing"],
    },
    {
      icon: Phone,
      title: "Follow-Up Agent",
      description: "Sends reminders or makes calls for service renewals, payments, or product demos at optimal times.",
      features: ["Smart timing", "Payment reminders", "Renewal calls", "Demo scheduling"],
    },
    {
      icon: Users,
      title: "Survey and Feedback Agent",
      description: "Gathers post-purchase or service feedback using emotion-aware voice detection and sentiment analysis.",
      features: ["Sentiment analysis", "NPS surveys", "Feedback collection", "Emotion tracking"],
    },
    {
      icon: Calendar,
      title: "Restaurant/Salon Reservation Agent",
      description: "Connects to booking systems to manage staff slots and confirm appointments for service businesses.",
      features: ["Staff scheduling", "Booking confirmation", "Waitlist management", "SMS notifications"],
    },
    {
      icon: Heart,
      title: "Healthcare Voice Assistant",
      description: "Automates appointment scheduling, reminders, and patient follow-ups with HIPAA-compliant systems.",
      features: ["HIPAA compliance", "Appointment booking", "Medication reminders", "Prescription refills"],
    },
    {
      icon: Package,
      title: "Logistics Tracking Agent",
      description: "Provides shipment status and delivery scheduling via voice with real-time tracking integration.",
      features: ["Real-time tracking", "Delivery updates", "Route optimization", "Customer notifications"],
    },
    {
      icon: Building2,
      title: "Custom Integration Agent",
      description: "Built for enterprise systems like HubSpot, Shopify, or Zoho with tailored workflows and logic.",
      features: ["Custom workflows", "API integration", "Multi-system sync", "Enterprise security"],
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
          <Phone className="w-16 h-16 mx-auto mb-6 text-primary" />
          <h1 className="text-5xl md:text-6xl font-bold mb-6 glow-text">Voice Agents</h1>
          <p className="text-xl text-foreground/70 mb-8 leading-relaxed">
            Voice Agents represent the next step in automation. Unlike basic IVR systems, they use conversational AI, 
            real-time data access, and natural voice synthesis to understand, respond, and act.
          </p>
          <Button asChild className="gradient-primary shadow-glow hover:shadow-hover">
            <Link to="/contact">Book a Demo Call Agent</Link>
          </Button>
        </motion.div>
      </section>

      {/* Agent Types - Alternating Layout */}
      <section className="container mx-auto px-4 sm:px-6 lg:px-8 mb-20">
        <div className="space-y-20">
          {agentTypes.map((agent, index) => (
            <motion.div
              key={agent.title}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${
                index % 2 === 1 ? 'lg:flex-row-reverse' : ''
              }`}
            >
              {/* Image/Icon Side */}
              <div className={`${index % 2 === 1 ? 'lg:order-2' : ''}`}>
                <div className="glass-card p-12 text-center">
                  <div className="w-24 h-24 mx-auto gradient-primary rounded-2xl flex items-center justify-center mb-6 shadow-glow">
                    <agent.icon className="text-white" size={48} />
                  </div>
                  <div className="text-6xl font-bold text-primary/20">
                    {String(index + 1).padStart(2, '0')}
                  </div>
                </div>
              </div>

              {/* Content Side */}
              <div className={`${index % 2 === 1 ? 'lg:order-1' : ''}`}>
                <h3 className="text-3xl font-bold mb-4">{agent.title}</h3>
                <p className="text-foreground/70 mb-6 leading-relaxed text-lg">
                  {agent.description}
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {agent.features.map((feature) => (
                    <div key={feature} className="flex items-start gap-2">
                      <CheckCircle2 className="text-primary mt-1 flex-shrink-0" size={18} />
                      <span className="text-sm text-foreground/80">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Key Benefits Section */}
      <section className="container mx-auto px-4 sm:px-6 lg:px-8 mb-20">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="glass-card p-12"
        >
          <h2 className="text-4xl font-bold text-center mb-12">Why Voice Agents?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="text-5xl font-bold text-primary mb-4">24/7</div>
              <h3 className="text-xl font-semibold mb-2">Always Available</h3>
              <p className="text-foreground/70 text-sm">Never miss a call or opportunity, even outside business hours.</p>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold text-primary mb-4">80%</div>
              <h3 className="text-xl font-semibold mb-2">Cost Reduction</h3>
              <p className="text-foreground/70 text-sm">Reduce operational costs while scaling customer interactions.</p>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold text-primary mb-4">3x</div>
              <h3 className="text-xl font-semibold mb-2">Faster Response</h3>
              <p className="text-foreground/70 text-sm">Handle multiple calls simultaneously with instant responses.</p>
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
          className="glass-card p-12 text-center bg-gradient-to-br from-primary/10 to-cyan-500/10"
        >
          <h2 className="text-4xl font-bold mb-6">Experience Voice AI in Action</h2>
          <p className="text-xl text-foreground/70 mb-8">
            Talk to a live voice agent and see how it can transform your business operations.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Button asChild className="gradient-primary shadow-glow hover:shadow-hover">
              <Link to="/contact">Book a Demo Call</Link>
            </Button>
            <Button asChild variant="outline" className="border-primary/30 hover:bg-primary/10">
              <Link to="/services">View All Services</Link>
            </Button>
          </div>
        </motion.div>
      </section>
    </div>
  );
};

export default VoiceAgents;
