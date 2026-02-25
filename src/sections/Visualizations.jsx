import { BarChart3, PieChart, TrendingUp, Activity, Eye, Play } from "lucide-react";
import { useState } from "react";

const visualizations = [
  {
    id: 1,
    title: "Loan Default Risk Analysis",
    description: "Interactive dashboard showing loan default patterns and risk factors across different demographics.",
    type: "Dashboard",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop",
    technologies: ["Power BI", "XGBoost", "Statistical Analysis"],
    category: "Financial Analytics",
    interactive: true,
  },
  {
    id: 2,
    title: "Heart Disease Prediction Patterns",
    description: "Visualization of key health indicators and their correlation with heart disease outcomes.",
    type: "Statistical Analysis",
    image: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=600&h=400&fit=crop",
    technologies: ["Python", "Matplotlib", "Seaborn"],
    category: "Healthcare Analytics",
    interactive: false,
  },
  {
    id: 3,
    title: "Employee Performance Metrics",
    description: "Comprehensive HR analytics dashboard showing performance trends and predictive insights.",
    type: "Business Intelligence",
    image: "https://www.timechamp.io/images/employee-performance-metrics.webp",
    technologies: ["Tableau", "LightGBM", "Feature Engineering"],
    category: "HR Analytics",
    interactive: true,
  },
  {
    id: 4,
    title: "Rice Disease Classification Results",
    description: "CNN model performance visualization with confusion matrix and accuracy metrics.",
    type: "Model Evaluation",
    image: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=600&h=400&fit=crop",
    technologies: ["TensorFlow", "CNN", "Computer Vision"],
    category: "Agricultural AI",
    interactive: false,
  },
  {
    id: 5,
    title: "Feature Importance Analysis",
    description: "SHAP values and feature importance visualization for model interpretability.",
    type: "Model Explainability",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop",
    technologies: ["SHAP", "XGBoost", "Python"],
    category: "ML Explainability",
    interactive: true,
  },
  {
    id: 6,
    title: "Time Series Forecasting",
    description: "Predictive analytics for business metrics using LSTM and statistical models.",
    type: "Time Series",
    image: "https://tse3.mm.bing.net/th/id/OIP.AfQDNVJlOoTUeBKGn4efzAHaEL?w=600&h=338&rs=1&pid=ImgDetMain&o=7&rm=3",
    technologies: ["LSTM", "Prophet", "Time Series"],
    category: "Forecasting",
    interactive: true,
  },
];

const categories = ["All", "Financial Analytics", "Healthcare Analytics", "HR Analytics", "Agricultural AI", "ML Explainability", "Forecasting"];

const typeIcons = {
  "Dashboard": BarChart3,
  "Statistical Analysis": PieChart,
  "Business Intelligence": TrendingUp,
  "Model Evaluation": Activity,
  "Model Explainability": Eye,
  "Time Series": TrendingUp,
};

export const Visualizations = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [hoveredViz, setHoveredViz] = useState(null);

  const filteredVisualizations = selectedCategory === "All" 
    ? visualizations 
    : visualizations.filter(viz => viz.category === selectedCategory);

  return (
    <section id="visualizations" className="py-32 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 left-0 w-64 h-64 bg-highlight/5 rounded-full blur-3xl" />

      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center mx-auto max-w-3xl mb-16">
          <span className="text-secondary-foreground text-sm font-medium tracking-wider uppercase animate-fade-in">
            Data Visualization
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6 animate-fade-in animation-delay-100 text-secondary-foreground">
            Visual
            <span className="font-serif italic font-normal text-white">
              {" "}
              Analytics.
            </span>
          </h2>
          <p className="text-muted-foreground animate-fade-in animation-delay-200">
            Interactive data visualizations and dashboards showcasing insights from machine learning models and statistical analysis.
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-3 mb-12 animate-fade-in animation-delay-300">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-4 py-2 rounded-full transition-all duration-300 ${
                selectedCategory === category
                  ? "bg-primary text-primary-foreground"
                  : "glass hover:bg-primary/10 text-muted-foreground hover:text-foreground"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Visualizations Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredVisualizations.map((viz, idx) => {
            const IconComponent = typeIcons[viz.type];
            return (
              <div
                key={viz.id}
                className="glass rounded-2xl overflow-hidden border border-primary/20 hover:border-primary/40 transition-all duration-300 animate-fade-in group"
                style={{ animationDelay: `${(idx + 1) * 100}ms` }}
                onMouseEnter={() => setHoveredViz(viz.id)}
                onMouseLeave={() => setHoveredViz(null)}
              >
                {/* Image Container */}
                <div className="relative aspect-video overflow-hidden">
                  <img
                    src={viz.image}
                    alt={viz.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-card via-card/50 to-transparent opacity-60" />
                  
                  {/* Type Badge */}
                  <div className="absolute top-4 left-4 glass px-3 py-1 rounded-full flex items-center gap-2">
                    <IconComponent className="w-4 h-4 text-primary" />
                    <span className="text-xs font-medium">{viz.type}</span>
                  </div>

                  {/* Interactive Badge */}
                  {viz.interactive && (
                    <div className="absolute top-4 right-4 glass px-3 py-1 rounded-full flex items-center gap-2">
                      <Play className="w-4 h-4 text-green-500" />
                      <span className="text-xs font-medium text-green-500">Interactive</span>
                    </div>
                  )}

                  {/* Hover Overlay */}
                  {hoveredViz === viz.id && (
                    <div className="absolute inset-0 bg-primary/10 flex items-center justify-center transition-opacity duration-300">
                      <Eye className="w-12 h-12 text-primary" />
                    </div>
                  )}
                </div>

                {/* Content */}
                <div className="p-6 space-y-4">
                  <div>
                    <h3 className="text-lg font-semibold group-hover:text-primary transition-colors mb-2">
                      {viz.title}
                    </h3>
                    <p className="text-sm text-muted-foreground line-clamp-2">
                      {viz.description}
                    </p>
                  </div>

                  <div className="flex items-center justify-between">
                    <span className="text-xs text-muted-foreground">{viz.category}</span>
                    <button className="text-primary hover:text-primary/80 transition-colors text-sm font-medium">
                      View Details →
                    </button>
                  </div>

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2">
                    {viz.technologies.map((tech, techIdx) => (
                      <span
                        key={techIdx}
                        className="px-2 py-1 bg-surface rounded text-xs text-muted-foreground border border-border/50"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Call to Action */}
        <div className="mt-16 text-center animate-fade-in animation-delay-800">
          <div className="glass rounded-2xl p-8 max-w-2xl mx-auto border border-primary/20">
            <h3 className="text-xl font-semibold mb-4">Want to See More?</h3>
            <p className="text-muted-foreground mb-6">
              Explore interactive dashboards and detailed analysis reports. Contact me for access to live demos and comprehensive data insights.
            </p>
            <button className="px-6 py-3 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors">
              Request Full Access
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
