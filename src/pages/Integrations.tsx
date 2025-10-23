import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Database, MessageSquare, Calendar, Zap, Brain, GitBranch } from "lucide-react";
import { Button } from "@/components/ui/button";

const Integrations = () => {
  const integrationCategories = [
    {
      icon: Database,
      title: "CRM & Sales",
      description: "Connect with your customer relationship management and sales tools.",
      tools: [
        { name: "HubSpot", type: "CRM & Marketing" },
        { name: "Salesforce", type: "Enterprise CRM" },
        { name: "Zoho CRM", type: "Business Suite" },
        { name: "Pipedrive", type: "Sales Pipeline" },
        { name: "Monday.com", type: "Work Management" },
      ],
      gradient: "from-blue-500 to-cyan-500",
    },
    {
      icon: Calendar,
      title: "Booking & Scheduling",
      description: "Integrate with scheduling tools for automated appointments.",
      tools: [
        { name: "Calendly", type: "Meeting Scheduler" },
        { name: "Setmore", type: "Appointment Booking" },
        { name: "Fresha", type: "Salon & Spa" },
        { name: "Acuity Scheduling", type: "Online Booking" },
        { name: "Square Appointments", type: "Service Business" },
      ],
      gradient: "from-cyan-500 to-teal-500",
    },
    {
      icon: MessageSquare,
      title: "Communication",
      description: "Connect voice and messaging platforms for customer engagement.",
      tools: [
        { name: "Twilio", type: "Voice & SMS" },
        { name: "WhatsApp Business API", type: "Messaging" },
        { name: "Meta Messenger", type: "Facebook Chat" },
        { name: "Telegram Bot API", type: "Bot Platform" },
        { name: "Slack", type: "Team Communication" },
      ],
      gradient: "from-teal-500 to-green-500",
    },
    {
      icon: Brain,
      title: "AI Models",
      description: "Leverage powerful language models for intelligent conversations.",
      tools: [
        { name: "OpenAI GPT", type: "Language Model" },
        { name: "Anthropic Claude", type: "AI Assistant" },
        { name: "Google Gemini", type: "Multimodal AI" },
        { name: "Mistral AI", type: "Open Source LLM" },
        { name: "ElevenLabs", type: "Voice AI" },
      ],
      gradient: "from-green-500 to-blue-500",
    },
    {
      icon: Database,
      title: "Databases & Storage",
      description: "Store and retrieve data with vector and traditional databases.",
      tools: [
        { name: "ChromaDB", type: "Vector Database" },
        { name: "Qdrant", type: "Vector Search" },
        { name: "Redis", type: "Cache & Memory" },
        { name: "PostgreSQL", type: "Relational DB" },
        { name: "Supabase", type: "Backend Platform" },
      ],
      gradient: "from-blue-500 to-purple-500",
    },
    {
      icon: Zap,
      title: "Workflow Automation",
      description: "Build complex workflows with no-code automation platforms.",
      tools: [
        { name: "Zapier", type: "Automation Platform" },
        { name: "n8n", type: "Workflow Automation" },
        { name: "Make (Integromat)", type: "Visual Automation" },
        { name: "Pipedream", type: "Developer Platform" },
        { name: "IFTTT", type: "Simple Automation" },
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
          <GitBranch className="w-16 h-16 mx-auto mb-6 text-primary" />
          <h1 className="text-5xl md:text-6xl font-bold mb-6 glow-text">Integration Hub</h1>
          <p className="text-xl text-foreground/70 mb-8 leading-relaxed">
            Connect your AI systems with the tools you already use. Seamless integration with CRMs, 
            booking platforms, communication channels, and more.
          </p>
          <Button asChild className="gradient-primary shadow-glow hover:shadow-hover">
            <Link to="/contact">Request Custom Integration</Link>
          </Button>
        </motion.div>
      </section>

      {/* Integration Categories */}
      <section className="container mx-auto px-4 sm:px-6 lg:px-8 mb-20">
        <div className="space-y-16">
          {integrationCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: categoryIndex * 0.1 }}
            >
              <div className="mb-8 flex items-center gap-4">
                <div className={`w-16 h-16 rounded-xl bg-gradient-to-br ${category.gradient} flex items-center justify-center shadow-glow`}>
                  <category.icon className="text-white" size={32} />
                </div>
                <div>
                  <h2 className="text-3xl font-bold">{category.title}</h2>
                  <p className="text-foreground/70">{category.description}</p>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {category.tools.map((tool, toolIndex) => (
                  <motion.div
                    key={tool.name}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: toolIndex * 0.05 }}
                    whileHover={{ scale: 1.05 }}
                    className="glass-card p-6 relative overflow-hidden group"
                  >
                    <div className={`absolute inset-0 bg-gradient-to-br ${category.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-300`} />
                    
                    <div className="relative z-10">
                      <h3 className="text-xl font-semibold mb-2">{tool.name}</h3>
                      <p className="text-sm text-foreground/60">{tool.type}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Custom Integration */}
      <section className="container mx-auto px-4 sm:px-6 lg:px-8 mb-20">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="glass-card p-12 bg-gradient-to-br from-primary/10 to-cyan-500/10"
        >
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-4xl font-bold mb-6">Need a Custom Integration?</h2>
            <p className="text-xl text-foreground/70 mb-8 leading-relaxed">
              Don't see your tool listed? We can build custom integrations for any API or platform 
              to ensure your AI systems work seamlessly with your existing technology stack.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Button asChild className="gradient-primary shadow-glow hover:shadow-hover">
                <Link to="/contact">Discuss Integration</Link>
              </Button>
              <Button asChild variant="outline" className="border-primary/30 hover:bg-primary/10">
                <Link to="/services">View All Services</Link>
              </Button>
            </div>
          </div>
        </motion.div>
      </section>

      {/* Integration Benefits */}
      <section className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="glass-card p-12"
        >
          <h2 className="text-4xl font-bold text-center mb-12">Why Integration Matters</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="text-5xl font-bold text-primary mb-4">50+</div>
              <h3 className="text-xl font-semibold mb-2">Supported Platforms</h3>
              <p className="text-foreground/70 text-sm">
                Connect with major CRMs, communication tools, and business platforms.
              </p>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold text-primary mb-4">100%</div>
              <h3 className="text-xl font-semibold mb-2">Data Sync</h3>
              <p className="text-foreground/70 text-sm">
                Real-time synchronization ensures your data is always up-to-date.
              </p>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold text-primary mb-4">24/7</div>
              <h3 className="text-xl font-semibold mb-2">Automated Flow</h3>
              <p className="text-foreground/70 text-sm">
                Workflows run continuously without manual intervention.
              </p>
            </div>
          </div>
        </motion.div>
      </section>
    </div>
  );
};

export default Integrations;
