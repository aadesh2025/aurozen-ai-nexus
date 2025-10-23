import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Bot, ShoppingCart, Scissors, Heart, UtensilsCrossed, GraduationCap, Home, DollarSign, Plane, Building2 } from "lucide-react";
import { Button } from "@/components/ui/button";

const Chatbots = () => {
  const chatbotTypes = [
    {
      icon: ShoppingCart,
      title: "E-commerce Chatbot",
      description: "Product recommendations, cart recovery, and order tracking with AI-powered shopping assistance.",
      features: ["Product search", "Cart recovery", "Order tracking", "Personalized recommendations"],
      gradient: "from-blue-500 to-cyan-500",
    },
    {
      icon: Scissors,
      title: "Service Business Chatbot",
      description: "Booking and inquiry automation for salons, spas, and cleaning services with staff management.",
      features: ["Appointment booking", "Service catalog", "Staff scheduling", "Payment integration"],
      gradient: "from-cyan-500 to-teal-500",
    },
    {
      icon: Heart,
      title: "Healthcare Chatbot",
      description: "Patient info collection, symptom pre-screening, and scheduling with HIPAA compliance.",
      features: ["Symptom checker", "Appointment booking", "Patient records", "HIPAA compliant"],
      gradient: "from-teal-500 to-green-500",
    },
    {
      icon: UtensilsCrossed,
      title: "Restaurant Chatbot",
      description: "Menu browsing, table reservations, and takeaway orders with real-time availability.",
      features: ["Menu display", "Table booking", "Online ordering", "Special requests"],
      gradient: "from-green-500 to-blue-500",
    },
    {
      icon: GraduationCap,
      title: "Education Chatbot",
      description: "Student Q&A, assignment reminders, and learning analytics with personalized support.",
      features: ["Course info", "Assignment tracking", "Study resources", "Progress reports"],
      gradient: "from-blue-500 to-purple-500",
    },
    {
      icon: Home,
      title: "Real Estate Chatbot",
      description: "Property search, lead capture, and virtual tours with intelligent filtering and recommendations.",
      features: ["Property search", "Virtual tours", "Lead qualification", "Appointment scheduling"],
      gradient: "from-purple-500 to-pink-500",
    },
    {
      icon: DollarSign,
      title: "Finance Chatbot",
      description: "Loan pre-qualification, investment queries, and EMI reminders with secure data handling.",
      features: ["Loan calculator", "Investment advice", "Payment reminders", "Document collection"],
      gradient: "from-pink-500 to-red-500",
    },
    {
      icon: Plane,
      title: "Travel & Hospitality Chatbot",
      description: "Trip planning, booking confirmations, and itinerary updates with 24/7 support.",
      features: ["Trip planning", "Booking assistance", "Itinerary updates", "Travel alerts"],
      gradient: "from-red-500 to-orange-500",
    },
    {
      icon: Building2,
      title: "Enterprise Chatbot",
      description: "Multi-platform support for HR, IT, and internal operations with advanced integrations.",
      features: ["HR support", "IT helpdesk", "Knowledge base", "Multi-channel"],
      gradient: "from-orange-500 to-blue-500",
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
          <Bot className="w-16 h-16 mx-auto mb-6 text-primary" />
          <h1 className="text-5xl md:text-6xl font-bold mb-6 glow-text">AI Chatbots</h1>
          <p className="text-xl text-foreground/70 mb-8 leading-relaxed">
            Chatbots transform customer engagement across web, WhatsApp, and Instagram. 
            They integrate with CRMs, APIs, and databases to deliver dynamic conversations.
          </p>
          <Button asChild className="gradient-primary shadow-glow hover:shadow-hover">
            <Link to="/contact">View Chatbot Demos</Link>
          </Button>
        </motion.div>
      </section>

      {/* Chatbot Types Grid */}
      <section className="container mx-auto px-4 sm:px-6 lg:px-8 mb-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {chatbotTypes.map((chatbot, index) => (
            <motion.div
              key={chatbot.title}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ scale: 1.05, y: -10 }}
              className="group glass-card p-8 relative overflow-hidden"
            >
              {/* Gradient overlay */}
              <div className={`absolute inset-0 bg-gradient-to-br ${chatbot.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-300`} />
              
              <div className="relative z-10">
                <div className={`w-16 h-16 rounded-xl bg-gradient-to-br ${chatbot.gradient} flex items-center justify-center mb-6 shadow-glow`}>
                  <chatbot.icon className="text-white" size={32} />
                </div>
                
                <h3 className="text-2xl font-bold mb-3">{chatbot.title}</h3>
                <p className="text-foreground/70 mb-6 text-sm leading-relaxed">{chatbot.description}</p>
                
                <div className="space-y-2">
                  {chatbot.features.map((feature) => (
                    <div key={feature} className="flex items-center gap-2 text-sm text-foreground/60">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Integration Platforms */}
      <section className="container mx-auto px-4 sm:px-6 lg:px-8 mb-20">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="glass-card p-12"
        >
          <h2 className="text-4xl font-bold text-center mb-12">Multi-Platform Integration</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-20 h-20 mx-auto mb-4 rounded-full bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center shadow-glow">
                <Bot size={32} className="text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Website Chat</h3>
              <p className="text-foreground/70 text-sm">Embedded chat widgets with custom branding and design.</p>
            </div>
            <div className="text-center">
              <div className="w-20 h-20 mx-auto mb-4 rounded-full bg-gradient-to-br from-green-500 to-teal-500 flex items-center justify-center shadow-glow">
                <Bot size={32} className="text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-2">WhatsApp Business</h3>
              <p className="text-foreground/70 text-sm">Official WhatsApp Business API integration for messaging.</p>
            </div>
            <div className="text-center">
              <div className="w-20 h-20 mx-auto mb-4 rounded-full bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center shadow-glow">
                <Bot size={32} className="text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Instagram DMs</h3>
              <p className="text-foreground/70 text-sm">Automated responses and engagement on Instagram Direct.</p>
            </div>
          </div>
        </motion.div>
      </section>

      {/* Features Section */}
      <section className="container mx-auto px-4 sm:px-6 lg:px-8 mb-20">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="glass-card p-12 bg-gradient-to-br from-primary/5 to-cyan-500/5"
        >
          <h2 className="text-4xl font-bold text-center mb-12">Advanced Capabilities</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-semibold mb-4 text-primary">RAG-Powered Responses</h3>
              <p className="text-foreground/70 leading-relaxed">
                Connect chatbots to your custom data sources (PDFs, documents, CRMs) using vector databases 
                for accurate, contextual responses based on your business knowledge.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-4 text-primary">Memory & Context</h3>
              <p className="text-foreground/70 leading-relaxed">
                Maintain conversation history and user context across sessions with Redis and vector storage, 
                providing personalized experiences for returning customers.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-4 text-primary">CRM Integration</h3>
              <p className="text-foreground/70 leading-relaxed">
                Seamlessly sync with HubSpot, Salesforce, Zoho, and other CRMs to capture leads, 
                update records, and trigger automated workflows in real-time.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-4 text-primary">Analytics Dashboard</h3>
              <p className="text-foreground/70 leading-relaxed">
                Track conversations, user sentiment, conversion rates, and performance metrics 
                with comprehensive analytics and reporting tools.
              </p>
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
          <h2 className="text-4xl font-bold mb-6">Ready to Deploy Your AI Chatbot?</h2>
          <p className="text-xl text-foreground/70 mb-8">
            Start engaging customers 24/7 with intelligent conversations that convert.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Button asChild className="gradient-primary shadow-glow hover:shadow-hover">
              <Link to="/contact">Get Started</Link>
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

export default Chatbots;
