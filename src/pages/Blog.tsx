import { Calendar, Clock, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const Blog = () => {
  const articles = [
    {
      title: "How AI Agents Can Automate Entire Workflows",
      excerpt: "Discover how autonomous AI agents transform business operations by handling complex multi-step processes without human intervention.",
      date: "2025-01-15",
      readTime: "8 min read",
      category: "Automation",
    },
    {
      title: "Choosing the Right AI Stack for Your Business",
      excerpt: "A comprehensive guide to selecting the perfect combination of AI technologies that align with your business goals and technical requirements.",
      date: "2025-01-10",
      readTime: "12 min read",
      category: "Strategy",
    },
    {
      title: "Why Predictive Analytics Is the Future of Growth",
      excerpt: "Explore how predictive AI models help businesses anticipate trends, optimize operations, and make data-driven decisions that drive growth.",
      date: "2025-01-05",
      readTime: "10 min read",
      category: "Analytics",
    },
    {
      title: "Building Conversational AI That Users Actually Love",
      excerpt: "Learn the principles of designing chatbots that feel natural, provide real value, and create exceptional user experiences.",
      date: "2024-12-28",
      readTime: "7 min read",
      category: "Chatbots",
    },
    {
      title: "The ROI of AI Automation: Real Numbers from Real Businesses",
      excerpt: "Case studies and data showing the measurable impact of AI automation on operational costs, efficiency, and revenue growth.",
      date: "2024-12-20",
      readTime: "15 min read",
      category: "Business",
    },
    {
      title: "Vector Databases Explained: Memory for Your AI Systems",
      excerpt: "Understanding how vector databases enable AI systems to remember context and deliver smarter, more personalized responses.",
      date: "2024-12-15",
      readTime: "9 min read",
      category: "Technology",
    },
  ];

  return (
    <div className="min-h-screen pt-24 pb-20">
      {/* Hero */}
      <section className="container mx-auto px-4 sm:px-6 lg:px-8 mb-16">
        <div className="max-w-4xl mx-auto text-center animate-fade-in">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">AI Insights & Automation Guides</h1>
          <p className="text-xl text-muted-foreground leading-relaxed mb-8">
            Expert knowledge on AI implementation, automation strategies, and industry trends
          </p>
          
          {/* Newsletter Signup */}
          <div className="max-w-md mx-auto">
            <div className="flex gap-2">
              <Input 
                type="email" 
                placeholder="Enter your email" 
                className="flex-1"
              />
              <Button className="gradient-primary">Subscribe</Button>
            </div>
            <p className="text-sm text-muted-foreground mt-2">
              Subscribe for weekly AI strategies and insights
            </p>
          </div>
        </div>
      </section>

      {/* Articles Grid */}
      <section className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {articles.map((article, index) => (
            <article 
              key={index} 
              className="bg-card rounded-2xl overflow-hidden shadow-card border border-border hover:shadow-hover transition-all hover:-translate-y-1 animate-slide-up"
              style={{ animationDelay: `${index * 50}ms` }}
            >
              {/* Category Badge */}
              <div className="p-6 pb-0">
                <div className="inline-block bg-primary/10 text-primary text-xs font-semibold px-3 py-1 rounded-full mb-4">
                  {article.category}
                </div>
              </div>
              
              {/* Content */}
              <div className="p-6 pt-0">
                <h2 className="text-xl font-bold mb-3 leading-tight">{article.title}</h2>
                <p className="text-sm text-muted-foreground mb-4 leading-relaxed">{article.excerpt}</p>
                
                {/* Meta Info */}
                <div className="flex items-center gap-4 text-xs text-muted-foreground mb-4">
                  <div className="flex items-center gap-1">
                    <Calendar size={14} />
                    <span>{new Date(article.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Clock size={14} />
                    <span>{article.readTime}</span>
                  </div>
                </div>
                
                {/* Read More Link */}
                <Button variant="link" className="p-0 h-auto text-primary group">
                  Read article
                  <ArrowRight size={16} className="ml-1 group-hover:translate-x-1 transition-transform" />
                </Button>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="container mx-auto px-4 sm:px-6 lg:px-8 mt-20">
        <div className="bg-gradient-to-r from-primary to-accent rounded-3xl p-12 text-center text-white">
          <h2 className="text-4xl font-bold mb-6">Never Miss an Insight</h2>
          <p className="text-xl mb-8 opacity-90">
            Get weekly AI strategies, implementation guides, and industry insights delivered to your inbox
          </p>
          <div className="max-w-md mx-auto flex gap-2">
            <Input 
              type="email" 
              placeholder="Enter your email" 
              className="flex-1 bg-white text-foreground"
            />
            <Button size="lg" variant="secondary">Subscribe</Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Blog;
