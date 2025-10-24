import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Mail, MapPin, Phone, MessageSquare, Clock, Send } from "lucide-react";
import { toast } from "sonner";

const Contact = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    businessType: "",
    serviceNeeded: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("Thank you! We'll be in touch within 24 hours.");
    setFormData({
      fullName: "",
      email: "",
      businessType: "",
      serviceNeeded: "",
      message: "",
    });
  };

  return (
    <div className="min-h-screen pt-24 pb-20">
      {/* Hero */}
      <section className="container mx-auto px-4 sm:px-6 lg:px-8 mb-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-4xl mx-auto text-center"
        >
          <Send className="w-16 h-16 mx-auto mb-6 text-primary" />
          <h1 className="text-5xl md:text-6xl font-bold mb-6 glow-text">
            Let's Talk AI
          </h1>
          <p className="text-xl text-foreground/70 leading-relaxed">
            Whether you're starting small or scaling big, Aurozen AI delivers the intelligence 
            your business needs to thrive. Let's build something intelligent together.
          </p>
        </motion.div>
      </section>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Contact Form */}
          <div className="lg:col-span-2">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              className="glass-card p-8"
            >
              <h2 className="text-3xl font-bold mb-2">Get a Free Consultation</h2>
              <p className="text-foreground/70 mb-6">
                Fill out the form and we'll reach out within 24 hours to discuss your project.
              </p>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="fullName" className="block text-sm font-medium mb-2">
                    Full Name *
                  </label>
                  <Input
                    id="fullName"
                    type="text"
                    required
                    value={formData.fullName}
                    onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                    placeholder="John Doe"
                    className="bg-background/50 border-white/10"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-2">
                    Email *
                  </label>
                  <Input
                    id="email"
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="john@company.com"
                    className="bg-background/50 border-white/10"
                  />
                </div>

                <div>
                  <label htmlFor="businessType" className="block text-sm font-medium mb-2">
                    Business Type *
                  </label>
                  <Select 
                    value={formData.businessType} 
                    onValueChange={(value) => setFormData({ ...formData, businessType: value })}
                  >
                    <SelectTrigger className="bg-background/50 border-white/10">
                      <SelectValue placeholder="Select your business type" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="startup">Startup</SelectItem>
                      <SelectItem value="smb">Small/Medium Business</SelectItem>
                      <SelectItem value="enterprise">Enterprise</SelectItem>
                      <SelectItem value="agency">Agency</SelectItem>
                      <SelectItem value="other">Other</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <label htmlFor="serviceNeeded" className="block text-sm font-medium mb-2">
                    AI Service Interested In *
                  </label>
                  <Select 
                    value={formData.serviceNeeded} 
                    onValueChange={(value) => setFormData({ ...formData, serviceNeeded: value })}
                  >
                    <SelectTrigger className="bg-background/50 border-white/10">
                      <SelectValue placeholder="Select a service" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="voice-agents">Voice Agents</SelectItem>
                      <SelectItem value="chatbots">Chatbots</SelectItem>
                      <SelectItem value="event-automation">Event-to-Event Automation</SelectItem>
                      <SelectItem value="rag-systems">RAG-Powered Systems</SelectItem>
                      <SelectItem value="analytics">Predictive Analytics</SelectItem>
                      <SelectItem value="full-system">Full AI Ecosystem</SelectItem>
                      <SelectItem value="not-sure">Not Sure Yet</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium mb-2">
                    Tell Us About Your Project *
                  </label>
                  <Textarea
                    id="message"
                    required
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Describe your requirements, challenges, and goals..."
                    rows={5}
                    className="bg-background/50 border-white/10"
                  />
                </div>

                <Button type="submit" size="lg" className="w-full gradient-primary shadow-glow hover:shadow-hover">
                  Get Free Consultation
                </Button>
              </form>
            </motion.div>
          </div>

          {/* Contact Info */}
          <div className="space-y-6">
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.1 }}
              className="glass-card p-6"
            >
              <div className="w-12 h-12 gradient-primary rounded-xl flex items-center justify-center mb-4 shadow-glow">
                <Mail className="text-white" size={24} />
              </div>
              <h3 className="text-xl font-semibold mb-2">Email Us</h3>
              <a 
                href="mailto:aadeshworkplace@gmail.com" 
                className="text-foreground/70 hover:text-primary transition-colors"
              >
                aadeshworkplace@gmail.com
              </a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
              className="glass-card p-6"
            >
              <div className="w-12 h-12 gradient-primary rounded-xl flex items-center justify-center mb-4 shadow-glow">
                <Phone className="text-white" size={24} />
              </div>
              <h3 className="text-xl font-semibold mb-2">Call Us</h3>
              <a 
                href="tel:+919345327506" 
                className="text-foreground/70 hover:text-primary transition-colors"
              >
                +91 93453 27506
              </a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 }}
              className="glass-card p-6"
            >
              <div className="w-12 h-12 gradient-primary rounded-xl flex items-center justify-center mb-4 shadow-glow">
                <MapPin className="text-white" size={24} />
              </div>
              <h3 className="text-xl font-semibold mb-2">Follow Us</h3>
              <a 
                href="https://instagram.com/aurozenai"
                target="_blank"
                rel="noopener noreferrer"
                className="text-foreground/70 hover:text-primary transition-colors flex items-center gap-2"
              >
                <span>@aurozenai on Instagram</span>
              </a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4 }}
              className="glass-card p-6 bg-gradient-to-br from-primary/10 to-cyan-500/10 border-primary/20"
            >
              <div className="flex items-center gap-3 mb-4">
                <MessageSquare className="text-primary" size={24} />
                <h3 className="text-lg font-semibold">Need Instant Help?</h3>
              </div>
              <p className="text-sm text-foreground/70 mb-4">
                Our AI chatbot is available 24/7 to answer questions and help you get started.
              </p>
              <Button variant="outline" size="sm" className="w-full border-primary/30 hover:bg-primary/10">
                Chat with Our AI
              </Button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.5 }}
              className="glass-card p-6"
            >
              <div className="flex items-center gap-3 mb-2">
                <Clock className="text-primary" size={20} />
                <h3 className="font-semibold">Response Time</h3>
              </div>
              <p className="text-sm text-foreground/70">
                We respond to all inquiries within 24 hours during business days.
              </p>
            </motion.div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <section className="container mx-auto px-4 sm:px-6 lg:px-8 mt-20">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="glass-card p-12 text-center bg-gradient-to-br from-primary/10 to-cyan-500/10"
        >
          <h3 className="text-3xl font-bold mb-4">Prefer a Different Way to Connect?</h3>
          <p className="text-foreground/70 mb-6">
            Schedule a call, check out our resources, or explore our services.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Button asChild variant="outline" className="border-primary/30 hover:bg-primary/10">
              <a href="/services">View Services</a>
            </Button>
            <Button asChild variant="outline" className="border-primary/30 hover:bg-primary/10">
              <a href="/contact">Request Custom Quote</a>
            </Button>
            <Button asChild variant="outline" className="border-primary/30 hover:bg-primary/10">
              <a href="/services/case-studies">Read Case Studies</a>
            </Button>
          </div>
        </motion.div>
      </section>
    </div>
  );
};

export default Contact;
