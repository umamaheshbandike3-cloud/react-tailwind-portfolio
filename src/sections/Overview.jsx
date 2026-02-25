import { TrendingUp, Award, Target, Code, Database, Brain } from "lucide-react";

const stats = [
  {
    icon: Database,
    value: "10+",
    label: "ML Projects",
    description: "End-to-end machine learning solutions",
    color: "text-blue-500",
  },
  {
    icon: TrendingUp,
    value: "96.2%",
    label: "Best Accuracy",
    description: "Loan default prediction model",
    color: "text-green-500",
  },
  {
    icon: Award,
    value: "3",
    label: "Certifications",
    description: "Professional data science credentials",
    color: "text-purple-500",
  },
  {
    icon: Brain,
    value: "5+",
    label: "ML Algorithms",
    description: "From regression to deep learning",
    color: "text-orange-500",
  },
];

const highlights = [
  {
    title: "Expertise Areas",
    items: [
      "Machine Learning & Deep Learning",
      "Statistical Analysis & Data Visualization",
      "Computer Vision & Image Processing",
      "Natural Language Processing",
      "Predictive Modeling & Feature Engineering",
    ],
    icon: Target,
  },
  {
    title: "Technical Stack",
    items: [
      "Python, SQL, Jupyter Notebook",
      "TensorFlow, Keras, PyTorch",
      "Scikit-learn, XGBoost, LightGBM",
      "Power BI, Tableau, Excel",
      "GitHub, Git, Version Control",
    ],
    icon: Code,
  },
  {
    title: "Domain Knowledge",
    items: [
      "Financial Analytics & Risk Assessment",
      "Healthcare & Medical Diagnostics",
      "Agricultural AI & Plant Disease Detection",
      "HR Analytics & Employee Performance",
      "Business Intelligence & Decision Support",
    ],
    icon: Database,
  },
];

export const Overview = () => {
  return (
    <section id="overview" className="py-32 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute top-1/4 left-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 right-0 w-64 h-64 bg-highlight/5 rounded-full blur-3xl" />

      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center mx-auto max-w-3xl mb-16">
          <span className="text-secondary-foreground text-sm font-medium tracking-wider uppercase animate-fade-in">
            Portfolio Overview
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6 animate-fade-in animation-delay-100 text-secondary-foreground">
            Data Science
            <span className="font-serif italic font-normal text-white">
              {" "}
              Excellence.
            </span>
          </h2>
          <p className="text-muted-foreground animate-fade-in animation-delay-200">
            Comprehensive overview of my data science journey, showcasing technical expertise, project achievements, and professional growth.
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          {stats.map((stat, idx) => (
            <div
              key={idx}
              className="glass rounded-2xl p-6 text-center border border-primary/20 hover:border-primary/40 transition-all duration-300 animate-fade-in group"
              style={{ animationDelay: `${(idx + 1) * 100}ms` }}
            >
              <div className={`w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform`}>
                <stat.icon className={`w-6 h-6 ${stat.color}`} />
              </div>
              <div className="text-3xl font-bold mb-2 group-hover:text-primary transition-colors">
                {stat.value}
              </div>
              <div className="text-sm font-medium mb-2">{stat.label}</div>
              <div className="text-xs text-muted-foreground">{stat.description}</div>
            </div>
          ))}
        </div>

        {/* Highlights Grid */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {highlights.map((highlight, idx) => (
            <div
              key={idx}
              className="glass rounded-2xl p-8 border border-primary/20 hover:border-primary/40 transition-all duration-300 animate-fade-in"
              style={{ animationDelay: `${(idx + 1) * 150}ms` }}
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
                  <highlight.icon className="w-5 h-5 text-primary" />
                </div>
                <h3 className="text-lg font-semibold">{highlight.title}</h3>
              </div>
              <ul className="space-y-3">
                {highlight.items.map((item, itemIdx) => (
                  <li key={itemIdx} className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                    <span className="text-sm text-muted-foreground">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Achievement Banner */}
        <div className="glass rounded-3xl p-8 border border-primary/30 animate-fade-in animation-delay-600">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl font-bold mb-4">Key Achievement</h3>
              <p className="text-muted-foreground mb-6">
                Built a loan default prediction model that achieved 96.2% accuracy using XGBoost and SMOTE for class imbalance handling. This model significantly improved risk assessment capabilities and demonstrated advanced machine learning expertise.
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium">
                  XGBoost
                </span>
                <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium">
                  SMOTE
                </span>
                <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium">
                  Feature Engineering
                </span>
                <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium">
                  96.2% Accuracy
                </span>
              </div>
            </div>
            <div className="text-center">
              <div className="text-6xl font-bold text-primary mb-2">96.2%</div>
              <div className="text-sm text-muted-foreground">Model Accuracy</div>
              <div className="mt-4 text-xs text-muted-foreground">
                Loan Default Prediction Model
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
