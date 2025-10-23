import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Workflow, ArrowRight, CheckCircle2, GitBranch } from "lucide-react";
import { Button } from "@/components/ui/button";

const EventAutomation = () => {
  const systems = [
    {
      title: "Lead Capture → Qualification → Follow-Up",
      description: "Integrates website forms, AI voice calls, and CRM pipelines for complete lead management.",
      steps: [
        { event: "Lead fills form", action: "Data captured in CRM" },
        { event: "AI voice agent calls", action: "Lead qualification & scoring" },
        { event: "Score triggers workflow", action: "Automated follow-up sequence" },
        { event: "Meeting booked", action: "Calendar sync & notifications" },
      ],
      integrations: ["HubSpot", "Calendly", "Twilio", "Make"],
    },
    {
      title: "Purchase → Feedback → Upsell",
      description: "Uses chatbot and voice follow-up to increase retention and customer lifetime value.",
      steps: [
        { event: "Purchase completed", action: "Thank you message sent" },
        { event: "7 days later", action: "Feedback chatbot conversation" },
        { event: "Positive feedback", action: "Upsell offer triggered" },
        { event: "Negative feedback", action: "Support ticket created" },
      ],
      integrations: ["Shopify", "WhatsApp", "Stripe", "Zendesk"],
    },
    {
      title: "Appointment → Reminder → Review",
      description: "Voice reminder plus WhatsApp review follow-up to maximize attendance and reputation.",
      steps: [
        { event: "Appointment booked", action: "Confirmation sent" },
        { event: "24 hours before", action: "Voice reminder call" },
        { event: "Appointment completed", action: "Review request via WhatsApp" },
        { event: "5-star review", action: "Thank you + incentive" },
      ],
      integrations: ["Calendly", "Twilio", "Google Business", "SMS"],
    },
    {
      title: "Inquiry → Quote → Payment",
      description: "AI automatically calculates pricing, sends invoices, and confirms payments.",
      steps: [
        { event: "Inquiry received", action: "AI analyzes requirements" },
        { event: "Quote generated", action: "PDF invoice emailed" },
        { event: "Payment link sent", action: "Stripe payment page" },
        { event: "Payment confirmed", action: "Project kickoff workflow" },
      ],
      integrations: ["Gmail", "Stripe", "QuickBooks", "Slack"],
    },
    {
      title: "Product Launch → Lead Nurturing → Sales",
      description: "Combines email, chatbot, and voice for complete automation from awareness to conversion.",
      steps: [
        { event: "Product announced", action: "Email campaign sent" },
        { event: "Email opened", action: "Chatbot follow-up" },
        { event: "Interest shown", action: "Voice agent demo call" },
        { event: "Demo completed", action: "Sales team notified" },
      ],
      integrations: ["Mailchimp", "Website Chat", "Twilio", "Salesforce"],
    },
    {
      title: "Support Ticket → AI Diagnosis → Dispatch",
      description: "AI triages issues and assigns staff based on location, skill, and availability.",
      steps: [
        { event: "Ticket created", action: "AI analyzes issue" },
        { event: "Priority assigned", action: "Skill matching algorithm" },
        { event: "Technician assigned", action: "Location + schedule optimized" },
        { event: "Job completed", action: "Customer satisfaction survey" },
      ],
      integrations: ["Zendesk", "Google Maps", "Calendly", "SMS"],
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
          <Workflow className="w-16 h-16 mx-auto mb-6 text-primary" />
          <h1 className="text-5xl md:text-6xl font-bold mb-6 glow-text">Event-to-Event AI Systems</h1>
          <p className="text-xl text-foreground/70 mb-8 leading-relaxed">
            Event-to-Event AI Systems create automated workflows triggered by business events. 
            They integrate with CRMs, booking tools, and payment systems to act intelligently without human input.
          </p>
          <Button asChild className="gradient-primary shadow-glow hover:shadow-hover">
            <Link to="/contact">Design Your Automation Flow</Link>
          </Button>
        </motion.div>
      </section>

      {/* Systems Timeline */}
      <section className="container mx-auto px-4 sm:px-6 lg:px-8 mb-20">
        <div className="space-y-16">
          {systems.map((system, systemIndex) => (
            <motion.div
              key={system.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: systemIndex * 0.1 }}
              className="glass-card p-8"
            >
              <div className="mb-8">
                <h3 className="text-3xl font-bold mb-4">{system.title}</h3>
                <p className="text-foreground/70 leading-relaxed">{system.description}</p>
              </div>

              {/* Timeline */}
              <div className="relative">
                {/* Vertical line */}
                <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-cyan-500 to-primary" />

                <div className="space-y-6">
                  {system.steps.map((step, stepIndex) => (
                    <motion.div
                      key={stepIndex}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: stepIndex * 0.1 }}
                      className="relative pl-12"
                    >
                      {/* Timeline dot */}
                      <div className="absolute left-2 top-2 w-4 h-4 rounded-full bg-primary shadow-glow" />
                      
                      <div className="glass-card p-4">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          <div>
                            <div className="text-xs text-foreground/50 uppercase tracking-wider mb-1">Event</div>
                            <div className="font-semibold">{step.event}</div>
                          </div>
                          <div>
                            <div className="text-xs text-foreground/50 uppercase tracking-wider mb-1">Action</div>
                            <div className="font-semibold text-primary">{step.action}</div>
                          </div>
                        </div>
                      </div>
                      
                      {stepIndex < system.steps.length - 1 && (
                        <ArrowRight className="absolute left-3 -bottom-3 text-primary/50" size={18} />
                      )}
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Integrations */}
              <div className="mt-8 pt-8 border-t border-white/10">
                <div className="flex flex-wrap items-center gap-4">
                  <span className="text-sm text-foreground/70 font-medium">Integrations:</span>
                  {system.integrations.map((integration) => (
                    <span
                      key={integration}
                      className="px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium"
                    >
                      {integration}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Key Benefits */}
      <section className="container mx-auto px-4 sm:px-6 lg:px-8 mb-20">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="glass-card p-12 bg-gradient-to-br from-primary/5 to-cyan-500/5"
        >
          <h2 className="text-4xl font-bold text-center mb-12">Why Event Automation?</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <GitBranch className="w-12 h-12 mx-auto mb-4 text-primary" />
              <h3 className="text-xl font-semibold mb-2">Zero Manual Work</h3>
              <p className="text-foreground/70 text-sm">
                Eliminate repetitive tasks with intelligent automation that runs 24/7.
              </p>
            </div>
            <div className="text-center">
              <CheckCircle2 className="w-12 h-12 mx-auto mb-4 text-primary" />
              <h3 className="text-xl font-semibold mb-2">100% Accuracy</h3>
              <p className="text-foreground/70 text-sm">
                Reduce human error with consistent, rule-based automated workflows.
              </p>
            </div>
            <div className="text-center">
              <Workflow className="w-12 h-12 mx-auto mb-4 text-primary" />
              <h3 className="text-xl font-semibold mb-2">Instant Response</h3>
              <p className="text-foreground/70 text-sm">
                React to events in real-time without delays or manual intervention.
              </p>
            </div>
            <div className="text-center">
              <ArrowRight className="w-12 h-12 mx-auto mb-4 text-primary" />
              <h3 className="text-xl font-semibold mb-2">Seamless Integration</h3>
              <p className="text-foreground/70 text-sm">
                Connect all your tools and platforms into one unified workflow.
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
          <h2 className="text-4xl font-bold mb-6">Build Your Custom Automation Flow</h2>
          <p className="text-xl text-foreground/70 mb-8">
            Let's design an intelligent system that connects every step of your business process.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Button asChild className="gradient-primary shadow-glow hover:shadow-hover">
              <Link to="/contact">Schedule Consultation</Link>
            </Button>
            <Button asChild variant="outline" className="border-primary/30 hover:bg-primary/10">
              <Link to="/services/integrations">View Integrations</Link>
            </Button>
          </div>
        </motion.div>
      </section>
    </div>
  );
};

export default EventAutomation;
