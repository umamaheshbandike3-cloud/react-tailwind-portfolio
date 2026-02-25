import { Calendar, Clock, ArrowRight, BookOpen, Code, Database } from "lucide-react";
import { useState } from "react";

const blogPosts = [
  {
    id: 1,
    title: "Achieving 96.2% Accuracy in Loan Default Prediction with XGBoost",
    excerpt: "Deep dive into building a high-accuracy loan default prediction model using XGBoost, SMOTE for class imbalance, and advanced feature engineering techniques.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop",
    date: "2024-03-15",
    readTime: "8 min",
    category: "Machine Learning",
    featured: true,
    tags: ["XGBoost", "Classification", "SMOTE", "Feature Engineering"],
    link: "https://medium.com/@maheshbandike/achieving-96-2-accuracy-in-loan-default-prediction-with-xgboost",
  },
  {
    id: 2,
    title: "CNN Architecture for Rice Leaf Disease Detection: A Complete Guide",
    excerpt: "Comprehensive guide to implementing CNN models for plant disease detection, including image preprocessing, data augmentation, and model optimization.",
    image: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=600&h=400&fit=crop",
    date: "2024-03-10",
    readTime: "12 min",
    category: "Deep Learning",
    featured: false,
    tags: ["CNN", "Computer Vision", "Agriculture", "Image Classification"],
    link: "https://medium.com/@maheshbandike/cnn-architecture-for-rice-leaf-disease-detection-complete-guide",
  },
  {
    id: 3,
    title: "Statistical Analysis vs Machine Learning: When to Use Which Approach",
    excerpt: "Comparative analysis of statistical methods and machine learning algorithms, helping you choose the right approach for your data science projects.",
    image: "https://tse2.mm.bing.net/th/id/OIP.kHouDl2s2o1PePwPcQAuGgHaEK?w=1920&h=1080&rs=1&pid=ImgDetMain&o=7&rm=3",
    date: "2024-03-05",
    readTime: "6 min",
    category: "Data Science",
    featured: false,
    tags: ["Statistics", "Machine Learning", "Data Analysis", "Methodology"],
    link: "https://medium.com/@maheshbandike/statistical-analysis-vs-machine-learning-when-to-use-which-approach",
  },
  {
    id: 4,
    title: "Feature Engineering Techniques for Tabular Data: Best Practices",
    excerpt: "Essential feature engineering techniques for structured data, including encoding methods, feature selection, and transformation strategies.",
    image: "https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?w=600&h=400&fit=crop",
    date: "2024-02-28",
    readTime: "10 min",
    category: "Data Engineering",
    featured: false,
    tags: ["Feature Engineering", "Data Preprocessing", "Tabular Data", "Best Practices"],
    link: "https://medium.com/@maheshbandike/feature-engineering-techniques-for-tabular-data-best-practices",
  },
  {
    id: 5,
    title: "Model Explainability with SHAP: Making Black Box Models Transparent",
    excerpt: "Learn how to use SHAP values to interpret complex machine learning models and provide insights into model predictions.",
    image: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=600&h=400&fit=crop",
    date: "2024-02-20",
    readTime: "9 min",
    category: "Model Interpretability",
    featured: false,
    tags: ["SHAP", "Model Explainability", "Interpretability", "Black Box Models"],
    link: "https://medium.com/@maheshbandike/model-explainability-with-shap-making-black-box-models-transparent",
  },
];

const categories = ["All", "Machine Learning", "Deep Learning", "Data Science", "Data Engineering", "Model Interpretability"];

const categoryIcons = {
  "Machine Learning": Database,
  "Deep Learning": Code,
  "Data Science": BookOpen,
  "Data Engineering": Database,
  "Model Interpretability": BookOpen,
};

export const Blog = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchTerm, setSearchTerm] = useState("");

  const filteredPosts = blogPosts.filter(post => {
    const matchesCategory = selectedCategory === "All" || post.category === selectedCategory;
    const matchesSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         post.excerpt.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         post.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  const featuredPost = blogPosts.find(post => post.featured);

  return (
    <section id="blog" className="py-32 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute top-1/4 left-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 right-0 w-64 h-64 bg-highlight/5 rounded-full blur-3xl" />

      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center mx-auto max-w-3xl mb-16">
          <span className="text-secondary-foreground text-sm font-medium tracking-wider uppercase animate-fade-in">
            Technical Blog
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6 animate-fade-in animation-delay-100 text-secondary-foreground">
            Insights &
            <span className="font-serif italic font-normal text-white">
              {" "}
              Research.
            </span>
          </h2>
          <p className="text-muted-foreground animate-fade-in animation-delay-200">
            Technical articles, tutorials, and research findings from my data science journey and project implementations.
          </p>
        </div>

        {/* Search and Filter */}
        <div className="max-w-2xl mx-auto mb-12 animate-fade-in animation-delay-300">
          <div className="glass rounded-2xl p-6 border border-primary/20">
            <div className="flex flex-col md:flex-row gap-4">
              <input
                type="text"
                placeholder="Search articles..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="flex-1 px-4 py-2 bg-surface rounded-lg border border-border focus:border-primary focus:outline-none transition-colors"
              />
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="px-4 py-2 bg-surface rounded-lg border border-border focus:border-primary focus:outline-none transition-colors"
              >
                {categories.map(category => (
                  <option key={category} value={category}>{category}</option>
                ))}
              </select>
            </div>
          </div>
        </div>

        {/* Featured Post */}
        {featuredPost && selectedCategory === "All" && !searchTerm && (
          <div className="mb-16 animate-fade-in animation-delay-400">
            <div className="glass rounded-3xl overflow-hidden border border-primary/30 hover:border-primary/50 transition-all duration-300">
              <div className="grid md:grid-cols-2 gap-8">
                <div className="relative aspect-video md:aspect-auto overflow-hidden">
                  <img
                    src={featuredPost.image}
                    alt={featuredPost.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-card via-card/50 to-transparent opacity-60" />
                  <div className="absolute top-4 left-4 glass px-3 py-1 rounded-full">
                    <span className="text-xs font-medium text-primary">Featured</span>
                  </div>
                </div>
                <div className="p-8 flex flex-col justify-center">
                  <div className="flex items-center gap-4 mb-4">
                    <span className="text-sm text-muted-foreground">{featuredPost.category}</span>
                    <span className="text-sm text-muted-foreground">•</span>
                    <div className="flex items-center gap-1 text-sm text-muted-foreground">
                      <Calendar className="w-4 h-4" />
                      {new Date(featuredPost.date).toLocaleDateString()}
                    </div>
                    <span className="text-sm text-muted-foreground">•</span>
                    <div className="flex items-center gap-1 text-sm text-muted-foreground">
                      <Clock className="w-4 h-4" />
                      {featuredPost.readTime}
                    </div>
                  </div>
                  <a href={featuredPost.link} target="_blank" rel="noopener noreferrer" className="text-2xl font-bold mb-4 hover:text-primary transition-colors cursor-pointer">
                    {featuredPost.title}
                  </a>
                  <p className="text-muted-foreground mb-6">
                    {featuredPost.excerpt}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-6">
                    {featuredPost.tags.map((tag, idx) => (
                      <span key={idx} className="px-3 py-1 bg-primary/10 text-primary rounded-full text-xs font-medium">
                        {tag}
                      </span>
                    ))}
                  </div>
                  <a href={featuredPost.link} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-primary hover:text-primary/80 transition-colors font-medium">
                    Read Article <ArrowRight className="w-4 h-4" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Blog Posts Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredPosts
            .filter(post => !post.featured || selectedCategory !== "All" || searchTerm)
            .map((post, idx) => {
              const IconComponent = categoryIcons[post.category];
              const adjustedIdx = featuredPost && selectedCategory === "All" && !searchTerm ? idx + 1 : idx;
              return (
                <article
                  key={post.id}
                  className="glass rounded-2xl overflow-hidden border border-primary/20 hover:border-primary/40 transition-all duration-300 animate-fade-in group"
                  style={{ animationDelay: `${adjustedIdx * 100}ms` }}
                >
                  {/* Image */}
                  <div className="relative aspect-video overflow-hidden">
                    <img
                      src={post.image}
                      alt={post.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-card via-card/50 to-transparent opacity-60" />
                    
                    {/* Category Badge */}
                    <div className="absolute top-4 left-4 glass px-3 py-1 rounded-full flex items-center gap-2">
                      <IconComponent className="w-4 h-4 text-primary" />
                      <span className="text-xs font-medium">{post.category}</span>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-6 space-y-4">
                    <div className="flex items-center gap-4 text-sm text-muted-foreground">
                      <div className="flex items-center gap-1">
                        <Calendar className="w-4 h-4" />
                        {new Date(post.date).toLocaleDateString()}
                      </div>
                      <div className="flex items-center gap-1">
                        <Clock className="w-4 h-4" />
                        {post.readTime}
                      </div>
                    </div>

                    <a href={post.link} target="_blank" rel="noopener noreferrer" className="text-lg font-semibold group-hover:text-primary transition-colors cursor-pointer line-clamp-2">
                      {post.title}
                    </a>

                    <p className="text-sm text-muted-foreground line-clamp-3">
                      {post.excerpt}
                    </p>

                    <div className="flex flex-wrap gap-2">
                      {post.tags.slice(0, 3).map((tag, tagIdx) => (
                        <span
                          key={tagIdx}
                          className="px-2 py-1 bg-surface rounded text-xs text-muted-foreground border border-border/50"
                        >
                          {tag}
                        </span>
                      ))}
                      {post.tags.length > 3 && (
                        <span className="px-2 py-1 bg-surface rounded text-xs text-muted-foreground border border-border/50">
                          +{post.tags.length - 3}
                        </span>
                      )}
                    </div>

                    <a href={post.link} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-primary hover:text-primary/80 transition-colors text-sm font-medium">
                      Read More <ArrowRight className="w-4 h-4" />
                    </a>
                  </div>
                </article>
              );
            })}
        </div>

        {/* No Results */}
        {filteredPosts.length === 0 && (
          <div className="text-center py-12">
            <p className="text-muted-foreground">No articles found matching your criteria.</p>
          </div>
        )}

        {/* Newsletter Signup */}
        <div className="mt-16 text-center animate-fade-in animation-delay-800">
          <div className="glass rounded-2xl p-8 max-w-2xl mx-auto border border-primary/20">
            <h3 className="text-xl font-semibold mb-4">Stay Updated</h3>
            <p className="text-muted-foreground mb-6">
              Subscribe to receive updates on new articles and data science insights.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-2 bg-surface rounded-lg border border-border focus:border-primary focus:outline-none transition-colors"
              />
              <button className="px-6 py-2 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
