import { motion } from "framer-motion";
import { Calendar, Clock, ArrowRight, BookOpen } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const Blog = () => {
  const articles = [
    {
      title: "How AI Voice Agents Are Transforming Customer Service",
      excerpt: "Discover how businesses are using voice AI to handle thousands of customer calls simultaneously while maintaining human-like conversation quality.",
      date: "2025-01-20",
      readTime: "8 min read",
      category: "Voice Agents",
      gradient: "from-blue-500 to-cyan-500",
    },
    {
      title: "Building RAG-Powered Chatbots That Actually Work",
      excerpt: "A deep dive into retrieval-augmented generation and how vector databases enable chatbots to access and use your business knowledge effectively.",
      date: "2025-01-18",
      readTime: "12 min read",
      category: "Chatbots",
      gradient: "from-cyan-500 to-teal-500",
    },
    {
      title: "Event-to-Event Automation: The Future of Business Workflows",
      excerpt: "Learn how intelligent systems can orchestrate complex business processes automatically, from lead capture to customer retention.",
      date: "2025-01-15",
      readTime: "10 min read",
      category: "Automation",
      gradient: "from-teal-500 to-green-500",
    },
    {
      title: "Choosing the Right AI Stack for Your Business",
      excerpt: "A comprehensive guide to selecting AI technologies, models, and infrastructure that align with your business goals and technical requirements.",
      date: "2025-01-12",
      readTime: "15 min read",
      category: "Strategy",
      gradient: "from-green-500 to-blue-500",
    },
    {
      title: "Why Predictive Analytics Is Essential for Growth",
      excerpt: "Explore how predictive AI models help businesses anticipate trends, optimize operations, and make data-driven decisions that drive revenue.",
      date: "2025-01-08",
      readTime: "9 min read",
      category: "Analytics",
      gradient: "from-blue-500 to-purple-500",
    },
    {
      title: "The ROI of AI Automation: Real Numbers from Real Businesses",
      excerpt: "Case studies and data showing measurable impact on operational costs, efficiency gains, and revenue growth from AI implementation.",
      date: "2025-01-05",
      readTime: "11 min read",
      category: "Business",
      gradient: "from-purple-500 to-pink-500",
    },
    {
      title: "Fine-Tuning AI Models for Domain-Specific Performance",
      excerpt: "Understanding when and how to fine-tune language models on your proprietary data for superior accuracy and relevance.",
      date: "2025-01-02",
      readTime: "14 min read",
      category: "Technology",
      gradient: "from-pink-500 to-red-500",
    },
    {
      title: "Multi-Channel AI: Orchestrating Voice, Chat, and Automation",
      excerpt: "How to build cohesive AI systems that work seamlessly across voice calls, messaging platforms, and automated workflows.",
      date: "2024-12-28",
      readTime: "10 min read",
      category: "Integration",
      gradient: "from-red-500 to-orange-500",
    },
    {
      title: "Vector Databases Explained: Memory for Your AI Systems",
      excerpt: "Understanding how vector databases enable AI to remember context, maintain conversation history, and deliver personalized responses.",
      date: "2024-12-22",
      readTime: "8 min read",
      category: "Technology",
      gradient: "from-orange-500 to-blue-500",
    },
  ];

  return (
    <div className="min-h-screen pt-24 pb-20">
      {/* Hero */}
      <section className="container mx-auto px-4 sm:px-6 lg:px-8 mb-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-4xl mx-auto text-center"
        >
          <BookOpen className="w-16 h-16 mx-auto mb-6 text-primary" />
          <h1 className="text-5xl md:text-6xl font-bold mb-6 glow-text">
            AI Insights & Automation Guides
          </h1>
          <p className="text-xl text-foreground/70 mb-8 leading-relaxed">
            Expert knowledge on AI implementation, automation strategies, and industry trends. 
            Learn how to build intelligent systems that drive results.
          </p>
          
          {/* Newsletter Signup */}
          <div className="max-w-md mx-auto">
            <div className="flex gap-2">
              <Input 
                type="email" 
                placeholder="Enter your email" 
                className="flex-1 bg-background/50 border-white/10"
              />
              <Button className="gradient-primary shadow-glow">Subscribe</Button>
            </div>
            <p className="text-sm text-foreground/60 mt-2">
              Get weekly AI strategies and implementation guides
            </p>
          </div>
        </motion.div>
      </section>

      {/* Articles Grid */}
      <section className="container mx-auto px-4 sm:px-6 lg:px-8 mb-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {articles.map((article, index) => (
            <motion.article
              key={article.title}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ scale: 1.05, y: -10 }}
              className="group glass-card overflow-hidden relative"
            >
              {/* Gradient overlay */}
              <div className={`absolute inset-0 bg-gradient-to-br ${article.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-300`} />
              
              <div className="p-6 relative z-10">
                {/* Category Badge */}
                <div className="inline-block px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-semibold mb-4">
                  {article.category}
                </div>
                
                {/* Title */}
                <h2 className="text-xl font-bold mb-3 leading-tight group-hover:text-primary transition-colors">
                  {article.title}
                </h2>
                
                {/* Excerpt */}
                <p className="text-sm text-foreground/70 mb-4 leading-relaxed">
                  {article.excerpt}
                </p>
                
                {/* Meta Info */}
                <div className="flex items-center gap-4 text-xs text-foreground/50 mb-4">
                  <div className="flex items-center gap-1">
                    <Calendar size={14} />
                    <span>
                      {new Date(article.date).toLocaleDateString('en-US', { 
                        month: 'short', 
                        day: 'numeric', 
                        year: 'numeric' 
                      })}
                    </span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Clock size={14} />
                    <span>{article.readTime}</span>
                  </div>
                </div>
                
                {/* Read More */}
                <div className="flex items-center gap-2 text-primary font-medium group-hover:gap-4 transition-all">
                  <span className="text-sm">Read article</span>
                  <ArrowRight size={16} />
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </section>

      {/* Featured Topics */}
      <section className="container mx-auto px-4 sm:px-6 lg:px-8 mb-20">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="glass-card p-12 bg-gradient-to-br from-primary/10 to-cyan-500/10"
        >
          <h2 className="text-4xl font-bold text-center mb-12">Featured Topics</h2>
          <div className="flex flex-wrap gap-3 justify-center">
            {[
              "Voice AI",
              "Chatbot Development",
              "Automation",
              "RAG Systems",
              "Vector Databases",
              "Predictive Analytics",
              "CRM Integration",
              "Fine-Tuning",
              "Event Workflows",
              "AI Strategy",
            ].map((topic) => (
              <Button
                key={topic}
                variant="outline"
                className="border-primary/30 hover:bg-primary/10"
              >
                {topic}
              </Button>
            ))}
          </div>
        </motion.div>
      </section>

      {/* Newsletter CTA */}
      <section className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="glass-card p-12 text-center"
        >
          <h2 className="text-4xl font-bold mb-6">Stay Ahead with AI Insights</h2>
          <p className="text-xl text-foreground/70 mb-8">
            Get weekly AI strategies, implementation guides, and industry insights delivered to your inbox.
          </p>
          <div className="max-w-md mx-auto flex gap-2">
            <Input 
              type="email" 
              placeholder="Enter your email" 
              className="flex-1 bg-background/50 border-white/10"
            />
            <Button className="gradient-primary shadow-glow hover:shadow-hover">
              Subscribe Now
            </Button>
          </div>
        </motion.div>
      </section>
    </div>
  );
};

export default Blog;
