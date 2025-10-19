import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Mail, MapPin, Phone } from "lucide-react";
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
      <section className="container mx-auto px-4 sm:px-6 lg:px-8 mb-16">
        <div className="max-w-4xl mx-auto text-center animate-fade-in">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">Let's Build Intelligent Systems Together</h1>
          <p className="text-xl text-muted-foreground leading-relaxed">
            Whether you're starting small or scaling big, Aurozen AI delivers the intelligence your business needs to thrive
          </p>
        </div>
      </section>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Contact Form */}
          <div className="lg:col-span-2">
            <div className="bg-card rounded-2xl p-8 shadow-card border border-border animate-slide-up">
              <h2 className="text-3xl font-bold mb-6">Get a Free Consultation</h2>
              
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
                    <SelectTrigger>
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
                    AI Service Needed *
                  </label>
                  <Select 
                    value={formData.serviceNeeded} 
                    onValueChange={(value) => setFormData({ ...formData, serviceNeeded: value })}
                  >
                    <SelectTrigger>
                      <SelectValue placeholder="Select a service" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="basic-chatbot">Basic AI Chatbot</SelectItem>
                      <SelectItem value="standard-system">Standard AI System</SelectItem>
                      <SelectItem value="advanced-system">Advanced AI System</SelectItem>
                      <SelectItem value="analytics">AI Data Analytics</SelectItem>
                      <SelectItem value="saas-platform">AI SaaS Platform</SelectItem>
                      <SelectItem value="consulting">AI Consulting</SelectItem>
                      <SelectItem value="not-sure">Not Sure Yet</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium mb-2">
                    Message *
                  </label>
                  <Textarea
                    id="message"
                    required
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Tell us about your project and requirements..."
                    rows={5}
                  />
                </div>

                <Button type="submit" size="lg" className="w-full gradient-primary">
                  Get a Free Consultation
                </Button>
              </form>
            </div>
          </div>

          {/* Contact Info */}
          <div className="space-y-6">
            <div className="bg-card rounded-2xl p-6 shadow-card border border-border animate-slide-up" style={{ animationDelay: '100ms' }}>
              <div className="w-12 h-12 gradient-primary rounded-xl flex items-center justify-center mb-4">
                <Mail className="text-white" size={24} />
              </div>
              <h3 className="text-xl font-semibold mb-2">Email Us</h3>
              <a href="mailto:hello@aurozen.ai" className="text-muted-foreground hover:text-primary transition-colors">
                hello@aurozen.ai
              </a>
            </div>

            <div className="bg-card rounded-2xl p-6 shadow-card border border-border animate-slide-up" style={{ animationDelay: '200ms' }}>
              <div className="w-12 h-12 gradient-primary rounded-xl flex items-center justify-center mb-4">
                <Phone className="text-white" size={24} />
              </div>
              <h3 className="text-xl font-semibold mb-2">Call Us</h3>
              <a href="tel:+1234567890" className="text-muted-foreground hover:text-primary transition-colors">
                +1 (234) 567-890
              </a>
            </div>

            <div className="bg-card rounded-2xl p-6 shadow-card border border-border animate-slide-up" style={{ animationDelay: '300ms' }}>
              <div className="w-12 h-12 gradient-primary rounded-xl flex items-center justify-center mb-4">
                <MapPin className="text-white" size={24} />
              </div>
              <h3 className="text-xl font-semibold mb-2">Visit Us</h3>
              <p className="text-muted-foreground">
                San Francisco, CA<br />
                United States
              </p>
            </div>

            {/* AI Chatbot Note */}
            <div className="bg-gradient-to-br from-primary/10 to-accent/10 rounded-2xl p-6 border border-primary/20 animate-slide-up" style={{ animationDelay: '400ms' }}>
              <h3 className="text-lg font-semibold mb-2">Need Instant Help?</h3>
              <p className="text-sm text-muted-foreground mb-4">
                Our AI chatbot is available 24/7 to answer your questions and help you get started.
              </p>
              <Button variant="outline" size="sm" className="w-full">
                Chat with Our AI
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Response Time Promise */}
      <section className="container mx-auto px-4 sm:px-6 lg:px-8 mt-20">
        <div className="bg-secondary/50 rounded-2xl p-8 text-center border border-border">
          <h3 className="text-2xl font-bold mb-2">We'll respond within 24 hours</h3>
          <p className="text-muted-foreground">
            Our team reviews every inquiry personally and will get back to you with next steps
          </p>
        </div>
      </section>
    </div>
  );
};

export default Contact;
